"""
ARES CORE ENGINE — VIKING ORCHESTRATOR
Codename: "OpenViking"

The General. Receives signals from the Vercel /api/swarm-gateway,
coordinates the RAG memory bank and ZeroClaw action layer,
then fires a response back to the frontend.
"""

import asyncio
import httpx
import os
from fastapi import FastAPI, HTTPException, Header, Depends
from pydantic import BaseModel
from contextlib import asynccontextmanager
from agents.rag_memory import ZeroGroupMemory
from agents.ghost_action import GhostAgent

# ─────────────────────────────────────────────────────────────────────────────
# CONFIG
# ─────────────────────────────────────────────────────────────────────────────
ARES_SWARM_KEY = os.getenv("ARES_SWARM_KEY", "dev-override-key")
OLLAMA_URL = os.getenv("OLLAMA_URL", "http://host.docker.internal:11434")
OLLAMA_MODEL = os.getenv("OLLAMA_MODEL", "llama3")

# ─────────────────────────────────────────────────────────────────────────────
# SERVICES
# ─────────────────────────────────────────────────────────────────────────────
memory = ZeroGroupMemory()
ghost = GhostAgent()


# ─────────────────────────────────────────────────────────────────────────────
# SCHEMAS
# ─────────────────────────────────────────────────────────────────────────────
class LeadPayload(BaseModel):
    message: str
    email: str | None = None
    intent: str | None = "GENERAL"
    session_id: str | None = None


class OrchestratorResponse(BaseModel):
    reply: str
    context_used: list[str]
    action_triggered: bool


# ─────────────────────────────────────────────────────────────────────────────
# APP LIFESPAN
# ─────────────────────────────────────────────────────────────────────────────
@asynccontextmanager
async def lifespan(app: FastAPI):
    print("╔══════════════════════════════════════╗")
    print("║   ARES CORE ENGINE — ONLINE          ║")
    print("║   Viking Orchestrator v1.0           ║")
    print("╚══════════════════════════════════════╝")
    yield
    print("[SHUTDOWN] Viking Orchestrator offline.")


app = FastAPI(
    title="Ares Core Engine",
    description="Local Swarm Orchestrator for Project Ares",
    version="1.0.0",
    lifespan=lifespan,
)


# ─────────────────────────────────────────────────────────────────────────────
# SECURITY
# ─────────────────────────────────────────────────────────────────────────────
async def verify_swarm_key(x_ares_swarm_key: str = Header(...)):
    if x_ares_swarm_key != ARES_SWARM_KEY:
        raise HTTPException(status_code=401, detail="Access Denied: Invalid Swarm Key")


# ─────────────────────────────────────────────────────────────────────────────
# LLM QUERY — calls local Ollama
# ─────────────────────────────────────────────────────────────────────────────
async def query_ollama(prompt: str) -> str:
    """Sends a prompt to the local Ollama instance (Llama-3)."""
    try:
        async with httpx.AsyncClient(timeout=30.0) as client:
            response = await client.post(
                f"{OLLAMA_URL}/api/generate",
                json={"model": OLLAMA_MODEL, "prompt": prompt, "stream": False},
            )
            response.raise_for_status()
            return response.json().get("response", "").strip()
    except Exception as e:
        print(f"[OLLAMA ERROR] {e}")
        return "Ares is currently thinking. Please try again in a moment."


# ─────────────────────────────────────────────────────────────────────────────
# ENDPOINTS
# ─────────────────────────────────────────────────────────────────────────────
@app.get("/")
async def health():
    return {"status": "ONLINE", "engine": "Ares Viking Orchestrator", "version": "1.0.0"}


@app.post("/incoming-lead", response_model=OrchestratorResponse)
async def incoming_lead(
    payload: LeadPayload,
    _: None = Depends(verify_swarm_key),
):
    """
    Main entry point. Receives a chat message from Vercel's /api/swarm-gateway.

    THE WORKFLOW:
        1. Retrieve grounded Zero Group context from RAG memory.
        2. Build a prompt with the message + context.
        3. Fire it at local Ollama (Llama-3).
        4. Return the response to Vercel.
        5. (Async) If intent == "BUY", trigger ZeroClaw outreach.
    """
    print(f"\n[VIKING] Received lead from: {payload.email or 'anonymous'}")
    print(f"[VIKING] Message: {payload.message[:80]}...")

    # ── STEP 1: RAG MEMORY ────────────────────────────────────────────────
    context_chunks = memory.query(payload.message)
    context_text = "\n".join(context_chunks) if context_chunks else "No catalog data available."

    # ── STEP 2: BUILD PROMPT ──────────────────────────────────────────────
    system_prompt = f"""You are ARES, a sovereign AI sales agent for CodePhyt & Zero Group.
You help B2B clients with AI automation AND physical product sourcing (frozen goods, packaging).

GROUNDED CATALOG CONTEXT:
{context_text}

Only quote prices or availability that appear in the CATALOG CONTEXT above.
If data is missing, say you will obtain an exact quote.
"""
    full_prompt = f"{system_prompt}\n\nClient message: {payload.message}"

    # ── STEP 3: QUERY LOCAL LLM ───────────────────────────────────────────
    llm_reply = await query_ollama(full_prompt)
    print(f"[VIKING] LLM Reply: {llm_reply[:80]}...")

    # ── STEP 4: ASYNC GHOST ACTION (fire-and-forget) ─────────────────────
    action_triggered = False
    if payload.intent and payload.intent.upper() == "BUY" and payload.email:
        print("[VIKING] BUY intent detected. Triggering ZeroClaw Ghost Action...")
        asyncio.create_task(
            ghost.execute_stealth_outreach({
                "email": payload.email,
                "intent": payload.intent,
                "message": payload.message,
            })
        )
        action_triggered = True

    return OrchestratorResponse(
        reply=llm_reply,
        context_used=context_chunks,
        action_triggered=action_triggered,
    )
