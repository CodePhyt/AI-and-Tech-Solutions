import { NextResponse } from 'next/server';

// Smart B2B fallback responses when ARES orchestrator is offline
const FALLBACK_RESPONSES: Record<string, string> = {
    default: "Guten Tag! Ich bin der KI-Assistent von KI & TECH Lösungen. Für eine sofortige Beratung erreichen Sie uns direkt per WhatsApp: +49 171 347 4348. Unsere Produktkategorien umfassen: CNC-Fertigung, Medizinbedarf, Textilien, Verpackungen, Spielplätze und mehr.",
    preis: "Unsere Sourcing-Gebühren sind transparent gestaffelt: Unter 30.000€ → 1.500€ Flat-Rate | 30.000–50.000€ → 6% | 50.000–80.000€ → 5% | Ab 80.000€ → 4%. Alle Preise inkl. QC, Zoll-Dokumentation und Logistik. Anfrage per WhatsApp: +49 171 347 4348",
    medical: "Unsere Medical-Produktion umfasst CE-zertifizierte FFP2/FFP3-Masken, OP-Kittel, Scrubs, Einweg-Bettwäsche und vollständige Krankenhausausstattungen. MOQ flexibel, White-Label möglich. Details via WhatsApp: +49 171 347 4348",
    textil: "Wir produzieren Oversize-Hoodies, Basic T-Shirts, Jogginghosen, Kids-Ponchos und Premium Hamam-Peştemal-Tücher. Private-Label ab 50 Stück. Anfrage: +49 171 347 4348",
    verpackung: "Unser Verpackungssortiment: maßgeschneiderte Kosmetikboxen, Pizza- & Versandkartons, Non-Woven-Taschen mit Logodruck, Probenbehälter und Urinbecher. Anfrage per WhatsApp: +49 171 347 4348",
    spielplatz: "Wir fertigen maßgeschneiderte FSC-Holzspielplätze für Kindergärten, Schulen und Kommunen. Barrierefreie Serien verfügbar, inkl. Aufbauservice. Anfrage: +49 171 347 4348",
    kontakt: "Sie erreichen uns am schnellsten per WhatsApp: +49 171 347 4348 (auch für Rückrufe). E-Mail: osmankadirde@gmail.com. Wir antworten in der Regel innerhalb von 2 Stunden.",
    lieferzeit: "Lieferzeiten variieren je nach Kategorie: Lagerware 7–14 Tage, Produktionsaufträge 3–8 Wochen. Für jeden Auftrag erstellen wir A.TR-Dokumente (zollfreier Import Türkei–EU). Details: +49 171 347 4348",
    zoll: "Da die Türkei zur EU-Zollunion gehört, fällt kein Importzoll an. Sie benötigen lediglich eine EORI-Nummer (kostenlos beim deutschen Zoll zu beantragen). Wir übernehmen alle Zolldokumente. Fragen? WhatsApp: +49 171 347 4348",
};

function getBestFallback(message: string): string {
    const msg = message.toLowerCase();
    if (msg.includes('preis') || msg.includes('kosten') || msg.includes('gebühr') || msg.includes('fee')) return FALLBACK_RESPONSES.preis;
    if (msg.includes('medical') || msg.includes('maske') || msg.includes('ffp') || msg.includes('arzt') || msg.includes('kranken')) return FALLBACK_RESPONSES.medical;
    if (msg.includes('textil') || msg.includes('shirt') || msg.includes('hoodie') || msg.includes('stoff') || msg.includes('handtuch')) return FALLBACK_RESPONSES.textil;
    if (msg.includes('verpack') || msg.includes('karton') || msg.includes('druck') || msg.includes('box')) return FALLBACK_RESPONSES.verpackung;
    if (msg.includes('spielplatz') || msg.includes('holz') || msg.includes('schaukel') || msg.includes('kinder')) return FALLBACK_RESPONSES.spielplatz;
    if (msg.includes('kontakt') || msg.includes('telefon') || msg.includes('whatsapp') || msg.includes('mail') || msg.includes('erreich')) return FALLBACK_RESPONSES.kontakt;
    if (msg.includes('liefer') || msg.includes('shipping') || msg.includes('versand') || msg.includes('dauer')) return FALLBACK_RESPONSES.lieferzeit;
    if (msg.includes('zoll') || msg.includes('eori') || msg.includes('import') || msg.includes('steuer')) return FALLBACK_RESPONSES.zoll;
    return FALLBACK_RESPONSES.default;
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { message, sessionId } = body;

        if (!message || typeof message !== 'string') {
            return NextResponse.json({ reply: FALLBACK_RESPONSES.default }, { status: 200 });
        }

        console.log(`[ARES WEB-PROXY] Routing message from ${sessionId}: ${message.substring(0, 50)}...`);

        // Forward to the local Viking Orchestrator (default running on 8008)
        const orchestratorUrl = process.env.ORCHESTRATOR_URL || 'http://127.0.0.1:8008/incoming-lead';

        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 8000); // 8s timeout

        try {
            const response = await fetch(orchestratorUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Ares-Swarm-Key': process.env.ARES_SWARM_KEY || 'dev-override-key'
                },
                body: JSON.stringify({
                    message: message,
                    email: sessionId,
                    intent: "B2B_WEB_CHAT",
                    session_id: sessionId
                }),
                signal: controller.signal,
            });

            clearTimeout(timeout);

            if (!response.ok) {
                console.error(`[ARES WEB-PROXY] Orchestrator responded with status: ${response.status}`);
                // Graceful degradation — use smart fallback instead of error
                return NextResponse.json({ reply: getBestFallback(message) }, { status: 200 });
            }

            const data = await response.json();

            // The orchestrator returns {"status": "success", "reply": "..."}
            const reply = data.reply || data.message || data.response || getBestFallback(message);
            return NextResponse.json({ reply });

        } catch (fetchError: unknown) {
            clearTimeout(timeout);
            const isAbort = fetchError instanceof Error && fetchError.name === 'AbortError';
            console.warn(`[ARES WEB-PROXY] Orchestrator ${isAbort ? 'timed out' : 'unreachable'} — using smart fallback`);
            // Smart fallback: still provide a helpful B2B response
            return NextResponse.json({ reply: getBestFallback(message) }, { status: 200 });
        }

    } catch (error) {
        console.error('[ARES WEB-PROXY] Critical error:', error);
        return NextResponse.json({
            reply: "Guten Tag! Für eine sofortige Beratung kontaktieren Sie uns per WhatsApp: +49 171 347 4348. Unsere Produktkategorien: CNC, Medical, Textilien, Verpackungen & mehr — direkt aus unserer Produktion in der Türkei."
        }, { status: 200 });
    }
}
