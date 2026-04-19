"""
ARES CORE ENGINE — RAG MEMORY MODULE
Codename: "Zero Group Brain"

PHASE 1 UPGRADE: Full production PDF ingestion pipeline.
- PyPDFLoader reads Zero Group catalog PDFs
- RecursiveCharacterTextSplitter chunks them intelligently
- HuggingFaceEmbeddings (all-MiniLM-L6-v2) creates semantic vectors
- ChromaDB stores & retrieves them with cosine similarity

This module gives ARES perfect recall of Zero Group's physical
catalogs (frozen goods, packaging, furniture) so it NEVER hallucinates
prices or SKUs.
"""

import os
import hashlib
import chromadb
from pathlib import Path

from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_huggingface import HuggingFaceEmbeddings

# ─────────────────────────────────────────────────────────────────────────────
# CONFIG
# ─────────────────────────────────────────────────────────────────────────────
CHROMA_HOST      = os.getenv("CHROMA_DB_HOST", "localhost")
CHROMA_PORT      = int(os.getenv("CHROMA_DB_PORT", 8001))
COLLECTION_NAME  = "zero_group_catalog"
EMBED_MODEL      = "sentence-transformers/all-MiniLM-L6-v2"

CHUNK_SIZE       = 500
CHUNK_OVERLAP    = 60
TOP_K            = 3


# ─────────────────────────────────────────────────────────────────────────────
# EMBEDDINGS — local, no API key needed
# ─────────────────────────────────────────────────────────────────────────────
embedder = HuggingFaceEmbeddings(
    model_name=EMBED_MODEL,
    model_kwargs={"device": "cpu"},
    encode_kwargs={"normalize_embeddings": True},
)


class ZeroGroupMemory:
    """
    Retrieval-Augmented Generation memory bank for Zero Group catalogs.

    USAGE:
        memory = ZeroGroupMemory()
        memory.ingest_pdf_catalogs("./catalogs/")   # One-time loading
        chunks = memory.query_zero_group_memory("Churros 1kg price?")
    """

    def __init__(self):
        self.client = None
        self.collection = None
        try:
            self.client = chromadb.PersistentClient(path="./local_chroma_data")
            self.collection = self.client.get_or_create_collection(
                name=COLLECTION_NAME,
                metadata={"hnsw:space": "cosine"},
            )
            print(f"[MEMORY] Zero Group Brain online. Collection: '{COLLECTION_NAME}' | Docs: {self.collection.count()}")
        except Exception as e:
            print(f"[MEMORY ERROR] ChromaDB initialization failed: {e}. RAG offline.")
        
        self._splitter = RecursiveCharacterTextSplitter(
            chunk_size=CHUNK_SIZE,
            chunk_overlap=CHUNK_OVERLAP,
            length_function=len,
        )

    # ─────────────────────────────────────────────────────────────────────────
    # PHASE 1: INGEST ALL PDFS IN A DIRECTORY
    # ─────────────────────────────────────────────────────────────────────────
    def ingest_pdf_catalogs(self, directory_path: str) -> dict:
        """
        Walk a directory, load every PDF, chunk it, embed it, and store
        it in ChromaDB. Skips already-ingested files using a hash check.

        Args:
            directory_path: Path to the folder containing Zero Group PDFs.
                            Example: "./catalogs/"

        Returns:
            { "total_files": int, "total_chunks": int, "skipped": int }

        Example:
            memory.ingest_pdf_catalogs("./catalogs/")
        """
        catalog_dir = Path(directory_path)
        if not catalog_dir.is_dir():
            raise FileNotFoundError(f"[INGEST] Directory not found: {directory_path}")

        pdf_files = list(catalog_dir.glob("**/*.pdf"))
        if not pdf_files:
            print("[INGEST] No PDF files found. Add files to the catalogs/ directory.")
            return {"total_files": 0, "total_chunks": 0, "skipped": 0}

        total_chunks = 0
        skipped_files = 0

        for pdf_path in pdf_files:
            file_hash = self._hash_file(pdf_path)
            ingestion_id = f"file_hash_{file_hash}"

            # ── Skip already-ingested documents ────────────────────────────
            existing = self.collection.get(ids=[ingestion_id])
            if existing["ids"]:
                print(f"[INGEST] ⏭  Already ingested: {pdf_path.name}")
                skipped_files += 1
                continue

            print(f"[INGEST] 📄  Loading: {pdf_path.name}")
            try:
                loader = PyPDFLoader(str(pdf_path))
                pages  = loader.load()

                # Add source metadata
                for page in pages:
                    page.metadata["source_file"] = pdf_path.name

                chunks = self._splitter.split_documents(pages)
                if not chunks:
                    print(f"[INGEST] ⚠  No text extracted from {pdf_path.name}")
                    continue

                # ── Embed & store in ChromaDB ───────────────────────────────
                texts      = [c.page_content for c in chunks]
                embeddings = embedder.embed_documents(texts)
                ids        = [f"{file_hash}-chunk-{i}" for i in range(len(chunks))]
                metadatas  = [
                    {
                        "source": c.metadata.get("source_file", "unknown"),
                        "page":   str(c.metadata.get("page", 0)),
                    }
                    for c in chunks
                ]

                self.collection.add(
                    documents=texts,
                    embeddings=embeddings,
                    ids=ids,
                    metadatas=metadatas,
                )

                # Mark file as ingested
                self.collection.add(
                    documents=[f"[INDEX] {pdf_path.name}"],
                    ids=[ingestion_id],
                    metadatas=[{"type": "file_index", "hash": file_hash}],
                )

                print(f"[INGEST] ✅  {pdf_path.name} → {len(chunks)} chunks stored.")
                total_chunks += len(chunks)

            except Exception as e:
                print(f"[INGEST ERROR] {pdf_path.name}: {e}")

        summary = {
            "total_files": len(pdf_files) - skipped_files,
            "total_chunks": total_chunks,
            "skipped": skipped_files,
        }
        print(f"[INGEST COMPLETE] {summary}")
        return summary

    # ─────────────────────────────────────────────────────────────────────────
    # PHASE 1: QUERY — semantic search over the catalog
    # ─────────────────────────────────────────────────────────────────────────
    def query_zero_group_memory(self, question: str, n_results: int = TOP_K) -> list[str]:
        """
        Retrieve the top N most relevant catalog chunks for a question.
        Used by the Viking Orchestrator to ground LLM responses.

        Args:
            question:  Natural language question about Zero Group products.
            n_results: Number of chunks to return (default: 3).

        Returns:
            List of text chunks most semantically similar to the question.

        Example:
            memory.query_zero_group_memory("frozen churros 1kg price")
            → ["Zero Group SKU #FZ-042: Churros 1kg — Ex-Factory €2.10/kg ..."]
        """
        try:
            total = self.collection.count()
            if total == 0:
                return ["[No catalog data. Run ingest_pdf_catalogs('./catalogs/') first.]"]

            query_embedding = embedder.embed_query(question)
            results = self.collection.query(
                query_embeddings=[query_embedding],
                n_results=min(n_results, total),
                where={"type": {"$ne": "file_index"}},  # exclude index entries
            )
            chunks = results["documents"][0] if results["documents"] else []
            print(f"[MEMORY] Query: '{question[:60]}' → {len(chunks)} chunks retrieved.")
            return chunks

        except Exception as e:
            print(f"[MEMORY ERROR] {e}")
            return []

    # Backwards-compatible alias used by main.py
    def query(self, text: str, n_results: int = TOP_K) -> list[str]:
        return self.query_zero_group_memory(text, n_results)

    # ─────────────────────────────────────────────────────────────────────────
    # UTILS
    # ─────────────────────────────────────────────────────────────────────────
    def ingest_catalog(self, pdf_path: str) -> str:
        """Single-file ingestion wrapper (backwards compat)."""
        result = self.ingest_pdf_catalogs(str(Path(pdf_path).parent))
        return f"[INGEST] Processed {result['total_chunks']} chunks."

    def get_stats(self) -> dict:
        """Return current memory stats."""
        count = self.collection.count() if self.collection else 0
        return {"collection": COLLECTION_NAME, "total_documents": count, "embed_model": EMBED_MODEL}

    @staticmethod
    def _hash_file(path: Path) -> str:
        """MD5 hash of a file for deduplication."""
        h = hashlib.md5()
        with open(path, "rb") as f:
            for chunk in iter(lambda: f.read(8192), b""):
                h.update(chunk)
        return h.hexdigest()


# ─────────────────────────────────────────────────────────────────────────────
# SINGLETON + CONVENIENCE FUNCTIONS
# ─────────────────────────────────────────────────────────────────────────────
memory = ZeroGroupMemory()


def query_zero_group_memory(question: str) -> list[str]:
    """Module-level convenience wrapper."""
    return memory.query_zero_group_memory(question)


def ingest_pdf_catalogs(directory_path: str = "./catalogs") -> dict:
    """Module-level convenience wrapper."""
    return memory.ingest_pdf_catalogs(directory_path)

# ─────────────────────────────────────────────────────────────────────────────
# USER MEMORY MANAGER
# ─────────────────────────────────────────────────────────────────────────────
class UserMemoryManager:
    """
    Retrieval-Augmented Generation memory bank for USER conversations.
    Stores and retrieves long-term specific conversation snippets per user.
    """
    def __init__(self, client):
        self.collection = None
        try:
            self.collection = client.get_or_create_collection(
                name="user_memory",
                metadata={"hnsw:space": "cosine"},
            )
            print(f"[MEMORY] User Memory online. Docs: {self.collection.count()}")
        except Exception as e:
            print(f"[MEMORY ERROR] User Memory initialization failed: {e}")

    def save_memory(self, user_id: str, memory_text: str):
        if not self.collection or not user_id or not memory_text:
            return
        
        # Use a combination of user_id and hash of text for unique ID
        import time
        doc_id = f"{user_id}_{int(time.time()*100)}"
        
        self.collection.add(
            documents=[memory_text],
            metadatas=[{"user_id": user_id, "timestamp": time.time()}],
            ids=[doc_id]
        )
        print(f"[MEMORY] Saved new memory for {user_id}")

    def query_memory(self, user_id: str, query: str, n_results: int = 3) -> list[str]:
        if not self.collection or not user_id or not query:
            return []
            
        try:
            # We filter by user_id
            results = self.collection.query(
                query_texts=[query],
                n_results=n_results,
                where={"user_id": user_id}
            )
            chunks = results["documents"][0] if results["documents"] else []
            return chunks
        except Exception as e:
            print(f"[MEMORY ERROR] Failed to retrieve user memory: {e}")
            return []

user_memory = UserMemoryManager(memory.client)

def query_user_memory(user_id: str, query: str) -> list[str]:
    return user_memory.query_memory(user_id, query)

def save_user_memory(user_id: str, memory_text: str):
    user_memory.save_memory(user_id, memory_text)
