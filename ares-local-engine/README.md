# Ares Core Engine — Local Swarm Node

The **Brain** and **Hands** of Project Ares. Runs locally on the RTX 4060 and connects to the Vercel frontend via tunnel.

## Architecture

```
Vercel Frontend (/api/swarm-gateway)
        │
        ▼ (Ngrok/Cloudflare Tunnel)
  ┌─────────────────────────────────┐
  │   Viking Orchestrator (main.py) │  ← FastAPI on port 8000
  └─────────────────────────────────┘
        │               │
        ▼               ▼
  RAG Memory       Ghost Action
  (ChromaDB)       (ZeroClaw/Playwright)
        │
        ▼
  Local Ollama (Llama-3 / Qwen)
```

## Quick Start

```bash
# 1. Copy environment variables
cp .env.example .env

# 2. Launch the engine
docker compose -f docker-compose.local.yml up --build

# 3. Verify it's running
curl http://localhost:8000/
```

## Ingesting Zero Group Catalogs
```python
from agents.rag_memory import memory
memory.ingest_catalog("./catalogs/zero_group_frozen_2025.pdf")
```

## Endpoints

| Method | Path | Description |
|---|---|---|
| `GET` | `/` | Health check |
| `POST` | `/incoming-lead` | Receive Vercel payload, return LLM reply |

## Security
All requests to `/incoming-lead` require `x-ares-swarm-key` header matching the `ARES_SWARM_KEY` env var.
