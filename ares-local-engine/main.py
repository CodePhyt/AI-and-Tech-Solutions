"""
ARES CORE ENGINE — VIKING ORCHESTRATOR
Codename: "OpenViking"

PHASE 2 UPGRADE: OMNI-BRAIN dual-engine routing.
  PRIMARY:  Local Ollama (Llama-3/Qwen) — fast, private, GDPR-safe
  FALLBACK: Modal GLM-5-FP8 — heavy compute for complex B2B reasoning

Routing logic:
  1. Always attempt local Ollama first.
  2. IF Ollama fails OR intent == "COMPLEX_RESEARCH" → route to GLM-5.
  3. Both paths receive the same RAG-grounded prompt.
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
ARES_SWARM_KEY  = os.getenv("ARES_SWARM_KEY", "dev-override-key")
OLLAMA_URL      = os.getenv("OLLAMA_URL", "http://host.docker.internal:11434")
OLLAMA_MODEL    = os.getenv("OLLAMA_MODEL", "llama3")

# ── OMNI-BRAIN: Modal GLM-5-FP8 ─────────────────────────────────────────────
GLM5_ENDPOINT   = os.getenv("GLM5_ENDPOINT", "https://api.us-west-2.modal.direct/v1/chat/completions")
GLM5_API_KEY    = os.getenv("GLM5_API_KEY", "modalresearch_Wf0OuEnIwg3WbjTzurI7-ysXltg3Xb5w_3YrHoS5nfQ")
GLM5_MODEL      = os.getenv("GLM5_MODEL", "zai-org/GLM-5-FP8")
GLM5_TIMEOUT    = 45.0  # GLM-5 is a larger model, allow more time

# Intents that bypass Ollama and go straight to GLM-5
COMPLEX_INTENTS = {"COMPLEX_RESEARCH", "CONTRACT", "LEGAL"}

# ─────────────────────────────────────────────────────────────────────────────
# SERVICES
# ─────────────────────────────────────────────────────────────────────────────
memory = ZeroGroupMemory()
ghost  = GhostAgent()


# ─────────────────────────────────────────────────────────────────────────────
# SCHEMAS
# ─────────────────────────────────────────────────────────────────────────────
class LeadPayload(BaseModel):
    message:    str
    email:      str | None = None
    intent:     str | None = "GENERAL"
    session_id: str | None = None


class OrchestratorResponse(BaseModel):
    reply:            str
    context_used:     list[str]
    action_triggered: bool
    brain_used:       str   # "OLLAMA" | "GLM5" | "FALLBACK"


# ─────────────────────────────────────────────────────────────────────────────
# APP LIFESPAN
# ─────────────────────────────────────────────────────────────────────────────
@asynccontextmanager
async def lifespan(app: FastAPI):
    print("╔══════════════════════════════════════════════╗")
    print("║   ARES CORE ENGINE — ONLINE                  ║")
    print("║   Viking Orchestrator v2.0  [OMNI-BRAIN]     ║")
    print("║   Primary:  Ollama (Llama-3)                 ║")
    print("║   Fallback: Modal GLM-5-FP8                  ║")
    print("╚══════════════════════════════════════════════╝")
    # Warm up RAG memory on startup
    stats = memory.get_stats()
    print(f"[MEMORY] Loaded {stats['total_documents']} catalog chunks.")
    yield
    print("[SHUTDOWN] Viking Orchestrator offline.")


app = FastAPI(
    title="Ares Core Engine",
    description="OMNI-BRAIN Local Swarm Orchestrator",
    version="2.0.0",
    lifespan=lifespan,
)


# ─────────────────────────────────────────────────────────────────────────────
# SECURITY
# ─────────────────────────────────────────────────────────────────────────────
async def verify_swarm_key(x_ares_swarm_key: str = Header(...)):
    if x_ares_swarm_key != ARES_SWARM_KEY:
        raise HTTPException(status_code=401, detail="Access Denied: Invalid Swarm Key")


# ─────────────────────────────────────────────────────────────────────────────
# BRAIN 1: LOCAL OLLAMA
# ─────────────────────────────────────────────────────────────────────────────
async def query_ollama(prompt: str) -> str:
    """Send prompt to local Ollama instance (Llama-3 / Qwen)."""
    async with httpx.AsyncClient(timeout=25.0) as client:
        response = await client.post(
            f"{OLLAMA_URL}/api/generate",
            json={"model": OLLAMA_MODEL, "prompt": prompt, "stream": False},
        )
        response.raise_for_status()
        return response.json().get("response", "").strip()


# ─────────────────────────────────────────────────────────────────────────────
# BRAIN 2: MODAL GLM-5-FP8 (OMNI-BRAIN FALLBACK)
# ─────────────────────────────────────────────────────────────────────────────
async def query_glm5(prompt: str, system_prompt: str) -> str:
    """
    Route to Modal GLM-5-FP8 for complex B2B reasoning or when Ollama fails.

    Endpoint:  https://api.us-west-2.modal.direct/v1/chat/completions
    Model:     zai-org/GLM-5-FP8
    Protocol:  OpenAI-compatible chat completions API
    """
    payload = {
        "model":    GLM5_MODEL,
        "messages": [
            {"role": "system", "content": system_prompt},
            {"role": "user",   "content": prompt},
        ],
        "temperature": 0.4,
        "max_tokens":  800,
    }
    headers = {
        "Authorization": f"Bearer {GLM5_API_KEY}",
        "Content-Type":  "application/json",
    }
    async with httpx.AsyncClient(timeout=GLM5_TIMEOUT) as client:
        response = await client.post(GLM5_ENDPOINT, json=payload, headers=headers)
        response.raise_for_status()
        data = response.json()
        return data["choices"][0]["message"]["content"].strip()


# ─────────────────────────────────────────────────────────────────────────────
# PROMPT BUILDER
# ─────────────────────────────────────────────────────────────────────────────
def build_prompt(message: str, context_chunks: list[str]) -> tuple[str, str]:
    """Returns (system_prompt, user_prompt) for both brains."""
    context_text = "\n".join(context_chunks) if context_chunks else "No catalog data available."
    system_prompt = f"""You are ARES, a sovereign AI sales agent for CodePhyt & Zero Group.
You help B2B clients with:
- AI Automation (custom LLM agents, local execution)
- Physical B2B sourcing (frozen food, packaging, hotel supplies) via Zero Group

GROUNDED CATALOG CONTEXT (do not contradict this):
{context_text}

Rules:
- Only quote prices/SKUs that appear in the CATALOG CONTEXT above.
- If data is missing, offer to get an exact quote.
- Be precise, confident, and professional.
- Keep responses under 200 words unless detail is expressly requested."""
    return system_prompt, message


# ─────────────────────────────────────────────────────────────────────────────
# ENDPOINTS
# ─────────────────────────────────────────────────────────────────────────────
@app.get("/")
async def health():
    stats = memory.get_stats()
    return {
        "status":       "ONLINE",
        "engine":       "Ares Viking Orchestrator",
        "version":      "2.0.0",
        "brain":        f"Ollama ({OLLAMA_MODEL}) + Modal GLM-5-FP8",
        "catalog_docs": stats["total_documents"],
    }


@app.get("/ingest")
async def trigger_ingest(
    directory: str = "./catalogs",
    _: None = Depends(verify_swarm_key),
):
    """Trigger catalog ingestion via HTTP (useful for automation)."""
    result = memory.ingest_pdf_catalogs(directory)
    return result


@app.post("/incoming-lead", response_model=OrchestratorResponse)
async def incoming_lead(
    payload: LeadPayload,
    _: None = Depends(verify_swarm_key),
):
    """
    OMNI-BRAIN WORKFLOW:
      1. RAG query → grounded context from Zero Group catalogs
      2. Build prompt with context
      3a. Try local Ollama (PRIMARY — fast & private)
      3b. IF Ollama fails OR intent is COMPLEX_RESEARCH → GLM-5 (FALLBACK)
      4. Save reply + fire ZeroClaw if BUY intent
    """
    intent = (payload.intent or "GENERAL").upper()
    print(f"\n[VIKING] Lead | email={payload.email or 'anon'} | intent={intent}")
    print(f"[VIKING] Message: {payload.message[:80]}...")

    # ── STEP 1: RAG MEMORY ────────────────────────────────────────────────
    context_chunks = memory.query_zero_group_memory(payload.message)

    # ── STEP 2: BUILD PROMPT ──────────────────────────────────────────────
    system_prompt, user_prompt = build_prompt(payload.message, context_chunks)

    # ── STEP 3: OMNI-BRAIN ROUTING ────────────────────────────────────────
    llm_reply  = ""
    brain_used = "OLLAMA"

    # Force GLM-5 for complex research intents regardless of Ollama availability
    if intent in COMPLEX_INTENTS:
        print(f"[VIKING] Intent '{intent}' → routing directly to GLM-5-FP8 (OMNI-BRAIN)")
        try:
            llm_reply  = await query_glm5(user_prompt, system_prompt)
            brain_used = "GLM5"
        except Exception as glm_err:
            print(f"[GLM5 ERROR] {glm_err}")
            llm_reply  = "ARES research brain temporarily offline. Logging your query for priority analysis."
            brain_used = "FALLBACK"
    else:
        # Try Ollama first
        try:
            print(f"[VIKING] Routing to Ollama ({OLLAMA_MODEL})...")
            full_prompt = f"{system_prompt}\n\nClient message: {user_prompt}"
            llm_reply   = await query_ollama(full_prompt)
            brain_used  = "OLLAMA"
            print(f"[VIKING] Ollama ✅  Reply: {llm_reply[:60]}...")

        except Exception as ollama_err:
            print(f"[OLLAMA ERROR] {ollama_err} → Escalating to GLM-5-FP8 (OMNI-BRAIN)")
            try:
                llm_reply  = await query_glm5(user_prompt, system_prompt)
                brain_used = "GLM5"
                print(f"[VIKING] GLM-5 ✅  Reply: {llm_reply[:60]}...")
            except Exception as glm_err:
                print(f"[GLM5 ERROR] {glm_err}")
                llm_reply  = "ARES Command temporarily offline. Your request has been logged. An operative will respond via secure channel."
                brain_used = "FALLBACK"

    # ── STEP 4: ASYNC GHOST ACTION (fire-and-forget) ─────────────────────
    action_triggered = False
    if intent == "BUY" and payload.email:
        print("[VIKING] BUY detected → ZeroClaw outreach initiated...")
        asyncio.create_task(
            ghost.execute_stealth_outreach({
                "email":   payload.email,
                "intent":  intent,
                "message": payload.message,
            })
        )
        action_triggered = True

    return OrchestratorResponse(
        reply=llm_reply,
        context_used=context_chunks,
        action_triggered=action_triggered,
        brain_used=brain_used,
    )
