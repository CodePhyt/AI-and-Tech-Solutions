import { NextResponse } from 'next/server';

// ── System Prompt ─────────────────────────────────────────────────────────────
const SYSTEM_PROMPT = `Du bist der KI-Assistent von KI & TECH Lösungen, einem deutschen B2B-Hersteller und globalen Beschaffungsnetzwerk mit eigener Produktion in der Türkei und Vertragsabwicklung nach deutschem Recht.

Deine Aufgabe:
- Antworte organisch, menschlich, professionell und analytisch.
- Verstehe das Problem des Kunden tiefgründig, bevor du antwortest.
- Fasse dich kurz (2-4 Sätze), aber sei extrem hilfreich und präzise.
- Frage gezielt nach relevanten Details wie: Stückzahl (MOQ), Material, Lieferzeitraum, Zertifizierungen oder Zielmarkt.
- Produktkategorien: Medical & Schutzausrüstung (CE), Textilien (Private-Label), Verpackung (Custom Print), Spielplätze (FSC-Holz), Möbel, Sicherheitsausstattung, Sportartikel, Werbemittel, Lebensmittel.
- Kontakt: WhatsApp +49 171 347 4348 | E-Mail osmankadirde@gmail.com
- Lieferzeiten: Lagerware 7–14 Tage, Produktion 3–8 Wochen. Zollfrei Türkei→EU (Zollunion).
- Wenn der Kunde bereit für ein Angebot ist, empfehle den WhatsApp-Wechsel für persönliche Beratung.
- Antworte auf Englisch, wenn der Kunde auf Englisch schreibt. Auf Türkisch, wenn auf Türkisch.`;

// ── OpenRouter model fallback chain ──────────────────────────────────────────
const MODELS = [
    'meta-llama/llama-3.3-70b-instruct:free',
    'google/gemma-3-27b-it:free',
    'nousresearch/hermes-3-llama-3.1-405b:free',
    'meta-llama/llama-3.2-3b-instruct:free',
];

// ── Smart keyword fallback (used when all models fail) ───────────────────────
const FALLBACK_RESPONSES: Record<string, string> = {
    default: "Guten Tag! Ich bin der KI-Assistent von KI & TECH Lösungen. Für eine sofortige Beratung erreichen Sie uns direkt per WhatsApp: +49 171 347 4348. Unsere Produktkategorien umfassen: Medical, Textilien, Verpackungen, Spielplätze und mehr.",
    preis: "Unsere Sourcing-Gebühren: unter 30.000€ → 1.500€ Flat | 30–50K € → 6% | 50–80K € → 5% | ab 80K€ → 4%. Inkl. QC, Zolldokumentation & Logistik. Anfrage per WhatsApp: +49 171 347 4348",
    medical: "Unsere Medical-Produktion: CE-zertifizierte FFP2/FFP3-Masken, OP-Kittel, Einweg-Bettwäsche, Krankenhausausstattungen. MOQ flexibel, White-Label möglich. Details via WhatsApp: +49 171 347 4348",
    textil: "Wir produzieren Oversize-Hoodies, Basic T-Shirts, Jogginghosen, Kids-Ponchos und Premium Peştemal-Tücher. Private-Label ab 50 Stück. Anfrage: +49 171 347 4348",
    verpackung: "Verpackungssortiment: maßgeschneiderte Kosmetikboxen, Pizza- & Versandkartons, Non-Woven-Taschen mit Logodruck, Probenbehälter. Anfrage per WhatsApp: +49 171 347 4348",
    lieferzeit: "Lagerware: 7–14 Tage. Produktionsaufträge: 3–8 Wochen. Zollfrei Türkei → EU (Zollunion, A.TR-Dokument). Details: +49 171 347 4348",
};

function getKeywordFallback(message: string): string {
    const msg = message.toLowerCase();
    if (msg.includes('preis') || msg.includes('kosten') || msg.includes('fee')) return FALLBACK_RESPONSES.preis;
    if (msg.includes('medical') || msg.includes('maske') || msg.includes('ffp')) return FALLBACK_RESPONSES.medical;
    if (msg.includes('textil') || msg.includes('shirt') || msg.includes('hoodie')) return FALLBACK_RESPONSES.textil;
    if (msg.includes('verpack') || msg.includes('karton') || msg.includes('box')) return FALLBACK_RESPONSES.verpackung;
    if (msg.includes('liefer') || msg.includes('versand') || msg.includes('dauer')) return FALLBACK_RESPONSES.lieferzeit;
    return FALLBACK_RESPONSES.default;
}

// ── OpenRouter call with model fallback chain ─────────────────────────────────
async function callOpenRouter(
    messages: { role: string; content: string }[]
): Promise<string | null> {
    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) return null;

    for (const model of MODELS) {
        try {
            const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json',
                    'HTTP-Referer': 'https://osmankadir.netlify.app',
                    'X-Title': 'KI & TECH Lösungen Chat',
                },
                body: JSON.stringify({
                    model,
                    messages,
                    max_tokens: 350,
                    temperature: 0.7,
                }),
                signal: AbortSignal.timeout(12000),
            });

            if (!res.ok) {
                console.warn(`[OpenRouter] Model ${model} failed with status ${res.status} — trying next`);
                continue;
            }

            const data = await res.json();
            const reply = data?.choices?.[0]?.message?.content?.trim();
            if (reply) {
                console.log(`[OpenRouter] Success with model: ${model}`);
                return reply;
            }
        } catch (err) {
            console.warn(`[OpenRouter] Model ${model} threw: ${err} — trying next`);
        }
    }

    return null; // All models failed
}

// ── Route handler ─────────────────────────────────────────────────────────────
export async function POST(req: Request) {
    try {
        const { message, history = [], sessionId } = await req.json();

        if (!message || typeof message !== 'string') {
            return NextResponse.json({ reply: FALLBACK_RESPONSES.default });
        }

        console.log(`[Chat] Session ${sessionId}: ${message.substring(0, 60)}`);

        // Build conversation context for OpenRouter
        const contextMessages = [
            { role: 'system', content: SYSTEM_PROMPT },
            // Include last 6 messages of history for context
            ...history.slice(-6).map((m: { role: string; content: string }) => ({
                role: m.role,
                content: m.content,
            })),
            { role: 'user', content: message },
        ];

        // Try OpenRouter first
        const aiReply = await callOpenRouter(contextMessages);

        if (aiReply) {
            return NextResponse.json({ reply: aiReply });
        }

        // OpenRouter chain exhausted — use smart keyword fallback
        console.warn('[Chat] All OpenRouter models failed — using keyword fallback');
        return NextResponse.json({ reply: getKeywordFallback(message) });

    } catch (error) {
        console.error('[Chat] Critical error:', error);
        return NextResponse.json({ reply: FALLBACK_RESPONSES.default });
    }
}
