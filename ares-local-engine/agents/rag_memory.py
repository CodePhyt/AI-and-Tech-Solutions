"""
ARES CORE ENGINE — RAG MEMORY MODULE
Codename: "Zero Group Brain"

Powered by ChromaDB + LangChain. This module gives ARES perfect recall
of Zero Group's physical catalogs (frozen goods, packaging, etc.)
so it NEVER hallucinates prices.
"""

import chromadb
import os

# ─────────────────────────────────────────────────────────────────────────────
# CONFIG
# ─────────────────────────────────────────────────────────────────────────────
CHROMA_HOST = os.getenv("CHROMA_DB_HOST", "localhost")
CHROMA_PORT = int(os.getenv("CHROMA_DB_PORT", 8001))
COLLECTION_NAME = "zero_group_catalog"


class ZeroGroupMemory:
    """
    Retrieval-Augmented Generation memory bank for Zero Group catalogs.
    Ingests PDFs and answers queries with grounded context.
    """

    def __init__(self):
        self.client = chromadb.HttpClient(host=CHROMA_HOST, port=CHROMA_PORT)
        self.collection = self.client.get_or_create_collection(
            name=COLLECTION_NAME,
            metadata={"hnsw:space": "cosine"},
        )
        print(f"[MEMORY] Zero Group RAG online. Collection: '{COLLECTION_NAME}'")

    # ─────────────────────────────────────────────────────────────────────────
    # QUERY — returns grounded context for the LLM
    # ─────────────────────────────────────────────────────────────────────────
    def query(self, text: str, n_results: int = 3) -> list[str]:
        """
        Ask the catalog a question and receive grounded context chunks.

        Example:
            memory.query("What is the price for frozen Churros 1kg?")
            → ["Zero Group SKU #FZ-042: Churros 1kg — Ex-Factory €2.10/kg ..."]
        """
        try:
            if self.collection.count() == 0:
                return ["[No catalog data ingested yet. Run ingest_catalog() first.]"]

            results = self.collection.query(
                query_texts=[text],
                n_results=min(n_results, self.collection.count()),
            )
            return results["documents"][0] if results["documents"] else []
        except Exception as e:
            print(f"[MEMORY ERROR] {e}")
            return []

    # ─────────────────────────────────────────────────────────────────────────
    # INGEST — feed PDFs into the memory bank
    # ─────────────────────────────────────────────────────────────────────────
    def ingest_catalog(self, pdf_path: str) -> str:
        """
        Feed a Zero Group PDF catalog into ChromaDB.

        TODO: Uncomment the PDF loader pipeline once 'pypdf' is installed.
        For now, this is a scaffold placeholder.

        Usage:
            memory.ingest_catalog("./catalogs/zero_group_frozen_2025.pdf")
        """
        if not os.path.exists(pdf_path):
            return f"[INGEST ERROR] File not found: {pdf_path}"

        # ── PRODUCTION PIPELINE (uncomment when ready) ──────────────────────
        # from langchain_community.document_loaders import PyPDFLoader
        # from langchain.text_splitter import RecursiveCharacterTextSplitter
        #
        # loader = PyPDFLoader(pdf_path)
        # docs = loader.load()
        # splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)
        # chunks = splitter.split_documents(docs)
        #
        # self.collection.add(
        #     documents=[c.page_content for c in chunks],
        #     ids=[f"{pdf_path}-chunk-{i}" for i in range(len(chunks))],
        # )
        # return f"[INGEST] Loaded {len(chunks)} chunks from {pdf_path}"
        # ─────────────────────────────────────────────────────────────────────

        return f"[INGEST STUB] Ready to process: {pdf_path}. Uncomment pipeline."


# Singleton instance
memory = ZeroGroupMemory()
