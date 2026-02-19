import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Environment Variables (Ensure these are set in .env)
const PRIMARY_NODE = process.env.PRIMARY_AGENT_URL; // Local RTX 4060
const SECONDARY_NODE = process.env.SECONDARY_AGENT_URL; // Mobile Termux
const SWARM_KEY = process.env.ARES_SWARM_KEY; // Secret Key

export async function POST(req: NextRequest) {
    // 1. Security Check
    const authHeader = req.headers.get('x-ares-swarm-key');
    if (authHeader !== SWARM_KEY) {
        return NextResponse.json({ error: 'Unauthorized Access to Swarm' }, { status: 401 });
    }

    try {
        const { message, email, userToken } = await req.json();

        if (!message || !userToken) {
            return NextResponse.json({ error: 'Missing Data' }, { status: 400 });
        }

        // 2. Lead Capture (Prisma)
        let leadId = null;

        if (email) {
            const lead = await prisma.lead.upsert({
                where: { email }, // Assuming email is unique in schema, if not use findFirst
                update: {
                    message: message, // Update latest message
                    updatedAt: new Date() // Assuming updatedAt exists or will be added manually if not @updatedAt
                },
                create: {
                    email,
                    name: "Swarm User",
                    message,
                    source: "swarm-gateway",
                    createdAt: new Date()
                }
            });
            leadId = lead.id;
        }

        // Upsert Session with Lead Link
        const session = await prisma.chatSession.upsert({
            where: { userToken },
            update: {
                updatedAt: new Date(),
                leadId: leadId // Link if lead exists
            },
            create: {
                userToken,
                leadId: leadId
            }
        });

        // Save User Message
        await prisma.message.create({
            data: {
                chatSessionId: session.id, // Correct field name from schema
                role: 'user',
                content: message
            }
        });

        // 3. Failover Routing Logic
        let aiResponse = "";
        let provider = "PRIMARY (RTX 4060)";

        try {
            // Attempt Primary Node
            if (!PRIMARY_NODE) throw new Error("Primary Node Not Configured");

            console.log(`[ARES] Contacting Primary Node: ${PRIMARY_NODE}`);
            const primaryRes = await fetch(PRIMARY_NODE, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt: message, systemic_role: "digital_twin_sales" }),
                signal: AbortSignal.timeout(5000) // 5s Timeout
            });

            if (!primaryRes.ok) throw new Error(`Primary Node Error: ${primaryRes.status}`);
            const data = await primaryRes.json();
            aiResponse = data.response;

        } catch (primaryError) {
            console.warn(`[ARES] Primary Node Failed. Rerouting to Secondary. Error: ${primaryError}`);
            provider = "SECONDARY (Mobile Swarm)";

            // Attempt Secondary Node
            if (!SECONDARY_NODE) {
                // Fallback to "Offline Mode" response if both fail
                aiResponse = "Command Center is currently offline. Your request has been logged. An operational agent will contact you shortly via secure channel.";
                provider = "OFFLINE_FALLBACK";
            } else {
                try {
                    const secondaryRes = await fetch(SECONDARY_NODE, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ prompt: message, systemic_role: "digital_twin_sales_lite" }),
                        signal: AbortSignal.timeout(8000)
                    });

                    if (!secondaryRes.ok) throw new Error(`Secondary Node Error`);
                    const data = await secondaryRes.json();
                    aiResponse = data.response;
                } catch (secondaryError) {
                    aiResponse = "All Swarm Nodes Unreachable. Data secured locally. We will initiate contact.";
                    provider = "CRITICAL_FAILURE";
                }
            }
        }

        // Save AI Response
        await prisma.message.create({
            data: {
                sessionId: session.id,
                role: 'assistant',
                content: aiResponse,
                metadata: { provider }
            }
        });

        return NextResponse.json({ response: aiResponse, provider });

    } catch (error) {
        console.error("[ARES] Critical Gateway Error:", error);
        return NextResponse.json({ error: 'Internal Swarm Error' }, { status: 500 });
    }
}
