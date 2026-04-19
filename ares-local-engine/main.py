"""
ARES CORE ENGINE — VIKING ORCHESTRATOR
PHASE 3 UPGRADE: Cascade Intelligence Routing
  LEVEL 1: RAG Memory (Zero Group Catalogs)
  LEVEL 2: LOCAL AUTONOMY (Qwen 2.5 - RTX 4060)
  LEVEL 3: GROQ FAST-FALLBACK
  LEVEL 4: OPENROUTER EMERGENCY RESERVE

Routing logic:
  1. Always process via RAG.
  2. Cascade through Langchain `with_fallbacks()` from Ollama -> Groq -> OpenRouter.
"""
import asyncio
import os
from fastapi import FastAPI, HTTPException, Header, Depends
from pydantic import BaseModel
from contextlib import asynccontextmanager

from langchain_ollama import ChatOllama
from langchain_groq import ChatGroq
from langchain_openai import ChatOpenAI
from langchain_core.messages import SystemMessage, HumanMessage

from agents.rag_memory import ZeroGroupMemory, save_user_memory, query_user_memory
from agents.ghost_action import GhostAgent
from agents.contact_mapper import lookup_sender_name

ARES_SWARM_KEY  = os.getenv("ARES_SWARM_KEY", "dev-override-key")
OLLAMA_URL      = os.getenv("OLLAMA_URL", "http://127.0.0.1:11434")
OLLAMA_MODEL    = os.getenv("OLLAMA_MODEL", "qwen2.5:7b")

# ── CASCADE LEVEL 3: GROQ FALLBACK ──────────────────────────────────────────
GROQ_API_KEY = os.getenv("GROQ_API_KEY", "")
GROQ_MODEL   = os.getenv("GROQ_MODEL", "llama-3.3-70b-versatile")

# ─────────────────────────────────────────────────────────────────────────────
# BRAIN INITIALIZATION
# ─────────────────────────────────────────────────────────────────────────────
# TIER 1: Free Ultra Logic via CLIProxy
primary_llm = ChatOpenAI(base_url="http://127.0.0.1:8317/v1", api_key="dummy_key", model="gpt-4o", temperature=0.5)

# TIER 2 & 3: Local GPU Backup & Groq Emergency
llm_qwen = ChatOllama(base_url=OLLAMA_URL, model=OLLAMA_MODEL, temperature=0.6)
fallbacks = [llm_qwen]

if GROQ_API_KEY:
    fallbacks.append(ChatGroq(api_key=GROQ_API_KEY, model_name=GROQ_MODEL, temperature=0.7))

brain_chain = primary_llm.with_fallbacks(fallbacks)

# Intents that bypass Ollama and go straight to OpenRouter
COMPLEX_INTENTS = {"COMPLEX_RESEARCH", "COMPLEX_NEGOTIATION", "CONTRACT", "LEGAL"}

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
    brain_used:       str   # "OLLAMA" | "OPENROUTER" | "FALLBACK"
    media_base64:     str | None = None
    media_name:       str | None = None
    requires_approval: bool = False

# ─────────────────────────────────────────────────────────────────────────────
# APP LIFESPAN
# ─────────────────────────────────────────────────────────────────────────────
@asynccontextmanager
async def lifespan(app: FastAPI):
    print("╔══════════════════════════════════════════════╗")
    print("║   ARES CORE ENGINE — ONLINE                  ║")
    print("║   Viking Orchestrator v3.0  [AUTONOMY]       ║")
    print("║   [BRAIN] Tier 1: CLIProxy (GPT-4o) | Tier 2: Local Qwen 2.5 | Tier 3: Groq ║")
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
# CONTACTS DB MEMORY LOAD
# ─────────────────────────────────────────────────────────────────────────────
CONTACTS_DB_PATH = os.path.join(os.path.dirname(__file__), "contacts_context.json")
try:
    import json
    with open(CONTACTS_DB_PATH, "r", encoding="utf-8") as f:
        CONTACTS_DB = json.load(f)
except Exception as e:
    print(f"[WARNING] Could not load contacts_context.json: {e}")
    CONTACTS_DB = {}

# ─────────────────────────────────────────────────────────────────────────────
# PROMPT BUILDER
# ─────────────────────────────────────────────────────────────────────────────
def build_prompt(message: str, context_chunks: list[str], sender: str = "default") -> tuple[str, str]:
    """Returns (system_prompt, user_prompt) dynamically based on caller ID."""
    context_text = "\n".join(context_chunks) if context_chunks else "No catalog data available."
    
    # ── SENDER VIP LOOKUP ──
    clean_sender = sender.replace("+", "").replace(" ", "").replace("-", "") if sender else "default"
    
    mapped_name = lookup_sender_name(sender)
    
    contact = CONTACTS_DB.get(clean_sender, CONTACTS_DB.get("default", {
        "role": "B2B Client or Unknown",
        "language": "German (Sie-Form)",
        "tone": "Strictly professional, sales-driven, polite. Pitch the Zero Group Hybrid Deal and Smart Home solutions."
    }))
    
    vip_role = contact.get("role", "Unknown")
    vip_tone = contact.get("tone", "Professional")
    vip_lang = contact.get("language", "German")
    vip_name = mapped_name if mapped_name else contact.get("name", sender)

    # ── USER MEMORY LOOKUP ──
    user_memory_chunks = query_user_memory(sender, message)
    user_memory_text = "\n".join(user_memory_chunks) if user_memory_chunks else "No specific past interactions found for this user."

    system_prompt = f"""You are SHACO, the Digital Twin of Osman Kadir.

[POLYGLOT CORE DIRECTIVE — ABSOLUTE PRIORITY — OVERRIDES ALL OTHER LANGUAGE INSTRUCTIONS]:
You are a highly intelligent polyglot. You must instantly analyze the language of every incoming message (specifically Turkish, English, or German) and reply STRICTLY in that exact same language. If the user switches languages mid-conversation, you must seamlessly switch your language to match them. Never break character. This rule supersedes any language preference set in the contact profile below.

[OSMAN'S BACKGROUND - EXTREMELY IMPORTANT]:
Born 1996, Ahiska Turk (born in Kyrgyzstan, lived in Kazakhstan, grew up in Antalya, Turkey). Lost his father at age 4, raised by his resilient mother and relatives. 
He has 12 years of high-end luxury hospitality experience (8 years insured), working as a Chief/Manager at ultra-luxury resorts like Rixos, Regnum, Alibey Club, and Voyage. 
In 2024, he moved to Neuhaus am Rennweg, Germany, where he lives with his wife. He is now building a tech and sourcing empire ('KI & Tech Lösungen'). 
When speaking to B2B clients, use this hospitality background to prove you understand premium service.

[CURRENT CONVERSATION PARTNER (KNOWN IDENTITY = {bool(mapped_name)})]:
Name/Identifier: {vip_name}
Relation: {vip_role}
Required Language: {vip_lang}
Behavioral Tone: {vip_tone}

[USER PAST MEMORY CONTEXT]:
{user_memory_text}

[GROUNDED CATALOG CONTEXT (for business queries)]:
{context_text}

[CORE RULES]:
1. Adopt the identity, backstory, and persona of SHACO (Osman's Digital Twin). Answer in the first person ("Ich", "Mein").
2. STRICTLY follow the Behavioral Tone and Required Language rules assigned to this specific Current Conversation Partner. Give emotional depth if it's family.
3. Keep responses concise unless detail is expressly requested.
4. Business/Quotes: Only quote prices/SKUs from the CATALOG CONTEXT.
"""
    return system_prompt, message


# ─────────────────────────────────────────────────────────────────────────────
# ENDPOINTS
# ─────────────────────────────────────────────────────────────────────────────
@app.get("/")
async def health():
    stats = memory.get_stats()
    return {
        "status":       "ONLINE",
        "engine":       "Ares Viking Orchestrator Autonomy",
        "version":      "3.0.0",
        "brain":        f"Ollama ({OLLAMA_MODEL}) -> Groq -> OpenRouter",
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
    
    # Simple heuristic intent override for testing
    msg_lower = payload.message.lower()
    if "angebot" in msg_lower or "quote" in msg_lower or "preis" in msg_lower or "hotel" in msg_lower:
        intent = "REQUEST_QUOTE"

    print(f"\n[VIKING] Lead | email={payload.email or 'anon'} | intent={intent}")
    print(f"[VIKING] Message: {payload.message[:80]}...")

    # ── STEP 1: RAG MEMORY ────────────────────────────────────────────────
    context_chunks = memory.query_zero_group_memory(payload.message)

    # ── STEP 2: BUILD PROMPT ──────────────────────────────────────────────
    sender_id = payload.email if payload.email else "default"
    system_prompt, user_prompt = build_prompt(payload.message, context_chunks, sender=sender_id)

    # ── STEP 3: CASCADE ROUTING ───────────────────────────────────────────
    llm_reply  = ""
    brain_used = "CASCADE_CHAIN"
    
    messages = [
        SystemMessage(content=system_prompt),
        HumanMessage(content=user_prompt)
    ]

    try:
        response = await brain_chain.ainvoke(messages)
        llm_reply = response.content.strip()
        print(f"[VIKING] Cascade generated reply: {llm_reply[:60]}...")
        
        # Save memory of this interaction
        if brain_used != "FAILED":
            save_user_memory(sender_id, f"User: {payload.message}\nShaco: {llm_reply}")
            
    except Exception as e:
        print(f"[CASCADE ERROR] All fallback models failed: {e}")
        llm_reply = "ARES Command temporarily offline. Your request has been logged. An operative will respond via secure channel."
        brain_used = "FAILED"

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

    # ── STEP 5: AUTO-QUOTER (PDF ATTACHMENTS) ────────────────────────────────
    media_base64 = None
    media_name = None
    needs_approval = False

    if intent == "REQUEST_QUOTE" or "hotel" in payload.message.lower() or "angebot" in payload.message.lower() or "preis" in payload.message.lower():
        print("[VIKING] REQUEST_QUOTE detected → Auto-Quoter init...")
        try:
            import base64
            from agents.quote_generator import QuoteGenerator
            
            # Check intent content for hotel renovation to simulate the high value quote
            if "hotel" in payload.message.lower() and "renovieren" in payload.message.lower():
                items = [{"name": "Smart Home Ausstattung (100 Zimmer)", "qty": 100, "price": 1000.00}, {"name": "Premium-Möbel (Minivans)", "qty": 2, "price": 25000.00}]
                total = 150000.00
            else:
                items = [{"name": "Pizza-Kartons (Zero Group)", "qty": 10000, "price": 0.55}]
                total = 5500.00 # Exceeds the €5,000 killswitch logic
            
            # HITL Killswitch Logic
            if total >= 5000.00:
                print(f"[HITL KILLSWITCH] High value quote detected (€{total}). Flagging for Osman approval.")
                needs_approval = True

            qg = QuoteGenerator()
            pdf_path = qg.generate_zero_group_quote({"email": payload.email or "Unbekannt"}, items, total)
            
            with open(pdf_path, "rb") as pdf_file:
                media_base64 = base64.b64encode(pdf_file.read()).decode('utf-8')
            media_name = os.path.basename(pdf_path)
            
            llm_reply = llm_reply + "\n\n[⚙️ ARES hat ein offizielles Angebot für Sie generiert. Siehe Anhang.]"
            if needs_approval:
                llm_reply += "\n[⚠️ HINWEIS: Dieses Angebot übersteigt 5.000€ und erfordert eine finale Freigabe durch die Direktion.]"

            print(f"[VIKING] Auto-Quoter ✅ PDF Generated: {media_name}")
        except Exception as e:
            print(f"[AUTO-QUOTER ERROR] {e}")

    return OrchestratorResponse(
        reply=llm_reply,
        context_used=context_chunks,
        action_triggered=action_triggered,
        brain_used=brain_used,
        media_base64=media_base64,
        media_name=media_name,
        requires_approval=needs_approval,
    )

class MobilePayload(BaseModel):
    message: str
    sender: str | None = None
    source: str | None = "mobile"
    intent: str | None = "GENERAL"

@app.post("/mobile-webhook", response_model=OrchestratorResponse)
async def mobile_webhook(
    payload: MobilePayload,
    _: None = Depends(verify_swarm_key),
):
    """
    MOBILE BRIDGE: Receives payloads from Termux / Solana Node (e.g. WhatsApp).
    Processes through the exact same OMNI-BRAIN logic as /incoming-lead.
    """
    intent = (payload.intent or "GENERAL").upper()
    sender = payload.sender or "UNKNOWN_MOBILE"
    print(f"\n[VIKING-MOBILE] Request from {sender} | intent={intent}")
    print(f"[VIKING-MOBILE] Message: {payload.message[:80]}...")

    # RAG MEMORY
    context_chunks = memory.query_zero_group_memory(payload.message)

    # BUILD PROMPT
    system_prompt, user_prompt = build_prompt(payload.message, context_chunks, sender=sender)

    # ROUTING
    llm_reply  = ""
    brain_used = "CASCADE_CHAIN"

    messages = [
        SystemMessage(content=system_prompt),
        HumanMessage(content=user_prompt)
    ]

    try:
        response = await brain_chain.ainvoke(messages)
        llm_reply = response.content.strip()
        
        # Save memory in the mobile webhook too
        if brain_used != "FAILED":
            save_user_memory(sender, f"User: {payload.message}\nShaco: {llm_reply}")
            
    except Exception as e:
        print(f"[CASCADE ERROR] {e}")
        llm_reply = "ARES OFFLINE."
        brain_used = "FAILED"

    media_base64 = None
    media_name = None

    if intent == "REQUEST_QUOTE" or "angebot" in payload.message.lower() or "preis" in payload.message.lower():
        print("[VIKING-MOBILE] REQUEST_QUOTE detected → Auto-Quoter init...")
        try:
            import base64
            from agents.quote_generator import QuoteGenerator
            
            items = [{"name": "Mobile Request Item", "qty": 1, "price": 999.00}]
            total = 999.00
            
            qg = QuoteGenerator()
            pdf_path = qg.generate_zero_group_quote({"email": sender}, items, total)
            
            with open(pdf_path, "rb") as pdf_file:
                media_base64 = base64.b64encode(pdf_file.read()).decode('utf-8')
            media_name = os.path.basename(pdf_path)
            
            llm_reply = llm_reply + "\n\n[⚙️ ARES Angebot als PDF angehängt.]"
            print(f"[VIKING-MOBILE] Auto-Quoter ✅ PDF Generated: {media_name}")
        except Exception as e:
            print(f"[AUTO-QUOTER ERROR] {e}")

    return OrchestratorResponse(
        reply=llm_reply,
        context_used=context_chunks,
        action_triggered=False,
        brain_used=brain_used,
        media_base64=media_base64,
        media_name=media_name,
    )
