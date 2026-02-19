import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// ─────────────────────────────────────────────────────────────────────────────
// CONFIG — set these in Vercel Environment Variables
// ─────────────────────────────────────────────────────────────────────────────
const PRIMARY_NODE = process.env.PRIMARY_AGENT_URL;   // e.g. https://YOUR-ID.ngrok.io
const SECONDARY_NODE = process.env.SECONDARY_AGENT_URL; // Mobile Termux (optional)
const SWARM_KEY = process.env.ARES_SWARM_KEY;      // Must match local .env

// ─────────────────────────────────────────────────────────────────────────────
// INTENT CLASSIFIER — simple heuristic
// ─────────────────────────────────────────────────────────────────────────────
function classifyIntent(message: string): string {
    const m = message.toLowerCase();
    if (m.includes('buy') || m.includes('order') || m.includes('price') || m.includes('quote'))
        return 'BUY';
    if (m.includes('hybrid') || m.includes('deal') || m.includes('sourcing'))
        return 'HYBRID';
    if (m.includes('sovereign') || m.includes('gdpr') || m.includes('on-premise'))
        return 'SOVEREIGN';
    return 'GENERAL';
}

// ─────────────────────────────────────────────────────────────────────────────
// CALL LOCAL ENGINE — Viking Orchestrator at /incoming-lead
// ─────────────────────────────────────────────────────────────────────────────
async function callViking(
    nodeUrl: string,
    message: string,
    email: string | null,
    intent: string,
    timeoutMs: number
): Promise<string> {
    const res = await fetch(`${nodeUrl}/incoming-lead`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-ares-swarm-key': SWARM_KEY ?? '',
        },
        body: JSON.stringify({ message, email, intent }),
        signal: AbortSignal.timeout(timeoutMs),
    });

    if (!res.ok) throw new Error(`Node error: ${res.status}`);
    const data = await res.json();
    // Engine returns { reply, context_used, action_triggered }
    return data.reply ?? 'No reply received.';
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN HANDLER
// ─────────────────────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
    // ── 1. Auth ───────────────────────────────────────────────────────────────
    const authHeader = req.headers.get('x-ares-swarm-key');
    if (authHeader !== SWARM_KEY) {
        return NextResponse.json({ error: 'Unauthorized: Swarm Key Invalid' }, { status: 401 });
    }

    try {
        const { message, email, userToken } = await req.json();

        if (!message || !userToken) {
            return NextResponse.json({ error: 'Missing message or userToken' }, { status: 400 });
        }

        const intent = classifyIntent(message);

        // ── 2. Persist Lead ───────────────────────────────────────────────────
        let leadId: number | null = null;
        if (email) {
            const lead = await prisma.lead.upsert({
                where: { email },
                update: { message, updatedAt: new Date() },
                create: { email, name: 'Swarm User', message, source: 'swarm-gateway', createdAt: new Date() },
            });
            leadId = lead.id;
        }

        // ── 3. Persist Session ────────────────────────────────────────────────
        const session = await prisma.chatSession.upsert({
            where: { userToken },
            update: { updatedAt: new Date(), leadId },
            create: { userToken, leadId },
        });

        // ── 4. Persist User Message ───────────────────────────────────────────
        await prisma.message.create({
            data: { chatSessionId: session.id, role: 'user', content: message },
        });

        // ── 5. Route to Viking Orchestrator (with failover) ───────────────────
        let aiResponse = '';
        let provider = 'PRIMARY (Viking Orchestrator)';

        try {
            if (!PRIMARY_NODE) throw new Error('PRIMARY_AGENT_URL not set');
            console.log(`[GATEWAY] → Viking Orchestrator: ${PRIMARY_NODE}`);
            aiResponse = await callViking(PRIMARY_NODE, message, email ?? null, intent, 10000);

        } catch (primaryErr) {
            console.warn(`[GATEWAY] Primary node failed: ${primaryErr}`);
            provider = 'SECONDARY (Mobile Swarm)';

            try {
                if (!SECONDARY_NODE) throw new Error('SECONDARY_AGENT_URL not set');
                aiResponse = await callViking(SECONDARY_NODE, message, email ?? null, intent, 12000);

            } catch (secondaryErr) {
                console.error(`[GATEWAY] Both nodes failed: ${secondaryErr}`);
                aiResponse = 'ARES Command offline. Your query has been logged. An operative will contact you through a secure channel shortly.';
                provider = 'OFFLINE_FALLBACK';
            }
        }

        // ── 6. Persist AI Response ────────────────────────────────────────────
        await prisma.message.create({
            data: { chatSessionId: session.id, role: 'assistant', content: aiResponse },
        });

        return NextResponse.json({ response: aiResponse, provider, intent });

    } catch (error) {
        console.error('[GATEWAY] Critical error:', error);
        return NextResponse.json({ error: 'Internal Swarm Gateway Error' }, { status: 500 });
    }
}
