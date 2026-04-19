import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// ─────────────────────────────────────────────────────────────────────────────
// CONFIG — set these in Vercel Environment Variables
// ─────────────────────────────────────────────────────────────────────────────
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
// MAIN HANDLER
// ─────────────────────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
    // ── 1. Auth ───────────────────────────────────────────────────────────────
    const authHeader = req.headers.get('x-ares-swarm-key');
    if (authHeader !== SWARM_KEY) {
        console.error(`[GATEWAY] Auth Failed. Received: '${authHeader}', Expected: '${SWARM_KEY}'`);
        return NextResponse.json({ error: 'Unauthorized: Swarm Key Invalid' }, { status: 401 });
    }

    try {
        const { message, email, userToken } = await req.json();

        if (!message || !userToken) {
            return NextResponse.json({ error: 'Missing message or userToken' }, { status: 400 });
        }

        const intent = classifyIntent(message);

        // ── 2. Persist Lead ───────────────────────────────────────────────────
        let leadId: string | null = null;
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
            data: { chatSessionId: session.id, role: 'user', content: message, syncStatus: 'SYNCED' },
        });

        // ── 5. Create Pending Assistant Message ───────────────────────────────
        // Instead of calling the Orchestrator, we create an empty message 
        // that the Termux Node will pick up.
        await prisma.message.create({
            data: { chatSessionId: session.id, role: 'assistant', content: '', syncStatus: 'PENDING_ARES' },
        });

        // Provide an immediate holding response to the Vercel UI
        const holdingMessage = "Transmission securely logged in the SHACO Vault. The Swarm is analyzing your request. Stand by for operative contact.";

        return NextResponse.json({ response: holdingMessage, provider: 'VAULT_HOLDING', intent });

    } catch (error) {
        console.error('[GATEWAY] Critical error:', error);
        return NextResponse.json({ error: 'Internal Swarm Gateway Error' }, { status: 500 });
    }
}
