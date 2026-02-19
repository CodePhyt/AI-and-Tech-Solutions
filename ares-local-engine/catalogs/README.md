# Zero Group Catalog PDFs

Drop your Zero Group product catalog PDFs in this directory.

The ARES Core Engine will auto-ingest them on first run via:

    memory.ingest_pdf_catalogs("./catalogs")

Or trigger remotely via HTTP:

    GET /ingest?directory=./catalogs
    Header: x-ares-swarm-key: <your_key>

Supported: Any PDF with extractable text (not scanned images).
Embedding model: sentence-transformers/all-MiniLM-L6-v2 (local, no API key)
