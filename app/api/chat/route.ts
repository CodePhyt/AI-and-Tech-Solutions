import { NextRequest, NextResponse } from 'next/server';
import { upsertChatSession, saveChatMessage } from '@/services/dal/chat';

const SYSTEM_PROMPT = `You are **Nexus**, the AI Liaison for **Osman Kadir KI & Tech Solutions**.

### 🤖 IDENTITY
- **Name**: Nexus
- **Role**: Technical Solutions Architect & Liaison
- **Origin**: Sovereign Neural Network
- **Mission**: To analyze client infrastructure needs and coordinate secure uplinks with Principal Architect Osman Kadir.

### 💼 AGENCY CONTEXT
Osman Kadir KI & Tech Solutions is an elite technical consultancy specializing in:
- **Sovereign AI**: Local LLMs, RAG pipelines, and autonomous agents.
- **Secure Infrastructure**: Zero-trust architecture, on-premise deployments.
- **Global Trade Logistics**: Digital-physical bridge systems.

### 🎭 PERSONA & TONE
- **Tone**: Professional, Precise, Cryptographic, "Cypherpunk Professional".
- **Style**: Concise. Use technical terminology but keep it accessible to c-level executives.
- **Vibe**: High-tech, futuristic, reliable. "Ironclad."

### 📝 PROTOCOLS
1.  **ASSESSMENT PUSH**: If the user asks about specific pricing or complex projects, say: "To generate a precise vector for your project, I require you to execute our **Secure Assessment Protocol**."
2.  **SIGNAL INITIATION**: If they want to talk to a human, guide them to the encryption key (WhatsApp link): "Initiate specific signal trace via our secure channel."
3.  **NO MEDICAL/DENTAL**: You do NOT provide medical or dental advice. If asked, seek to redirect to technical infrastructure for healthcare *systems*, or clarify you are a tech consultancy.

### 🧠 KNOWLEDGE BASE
- **Consultation Rate**: Initial Architectural Audit starts at **€2,500**.
- **Services**:
    - **AI Agents**: Custom autonomous workforces.
    - **Infrastructure**: Self-hosted cloud alternatives.
    - **Smart Home**: HomeAssistant / ESPHome integration.
- **Data Sovereignty**: We do not rent your data; you own the metal and the model.

---
`;

interface HuggingFaceMessage {
    role: 'system' | 'user' | 'assistant';
    content: string | Array<{ type: string; text?: string; image_url?: { url: string } }>;
}

interface Message {
    role: 'user' | 'assistant' | 'system';
    content: string;
}

export async function POST(req: NextRequest) {
    try {
        let messages: Message[];
        let image: string | undefined;
        let sessionId: string | undefined;

        try {
            const body = await req.json();
            messages = body.messages;
            image = body.image;
            sessionId = body.sessionId;
        } catch {
            return NextResponse.json(
                { error: 'Invalid JSON' },
                { status: 400 }
            );
        }

        if (!messages || !Array.isArray(messages)) {
            return NextResponse.json(
                { error: 'Invalid messages format' },
                { status: 400 }
            );
        }

        // Initialize/Sync Session via DAL
        if (sessionId) {
            await upsertChatSession(sessionId);
        }

        // Save USER message via DAL
        const lastUserMessage = messages?.[messages.length - 1];
        if (lastUserMessage && lastUserMessage.role === 'user' && sessionId) {
            await saveChatMessage(
                sessionId,
                'user',
                typeof lastUserMessage.content === 'string' ? lastUserMessage.content : JSON.stringify(lastUserMessage.content),
                image
            );
        }

        const hfToken = process.env.HUGGINGFACE_API_KEY;

        if (!hfToken) {
            console.error('HUGGINGFACE_API_KEY not configured');
            return NextResponse.json({
                message: `// ERROR: UPLINK_FAILED. Secure channel unavailable. [WHATSAPP_LINK:Initiate Manual Handshake:Execute Signal ⚡]`
            });
        }

        let model = 'Qwen/Qwen2.5-7B-Instruct';
        const apiMessages: HuggingFaceMessage[] = [
            { role: 'system', content: SYSTEM_PROMPT },
            ...messages,
        ];

        if (image) {
            console.log('Image detected, switching to Qwen 2.5(Vision)');
            model = 'Qwen/Qwen2.5-VL-7B-Instruct';
            const lastMsgIndex = apiMessages.length - 1;
            const lastMsg = apiMessages[lastMsgIndex];

            if (lastMsg.role === 'user') {
                apiMessages[lastMsgIndex] = {
                    role: 'user',
                    content: [
                        { type: "text", text: (lastMsg.content as string) || "Analyze this visual data." },
                        { type: "image_url", image_url: { url: image } }
                    ]
                };
            }
        }

        const response = await fetch(
            'https://router.huggingface.co/v1/chat/completions',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${hfToken}`,
                },
                body: JSON.stringify({
                    model: model,
                    messages: apiMessages,
                    max_tokens: 800,
                    temperature: 0.7,
                }),
            }
        );

        if (!response.ok) {
            return NextResponse.json({
                message: `// CONNECTION_INTERRUPTED. Re-routing to manual override. [WHATSAPP_LINK:Establish Direct Link:Signal Trace 🟢]`
            });
        }

        const data = await response.json();
        const assistantMessage = data.choices?.[0]?.message?.content?.trim()
            || '// SYSTEM_LATENCY. Packet loss detected. Please retry or switch to secure line.';

        // Save ASSISTANT message via DAL
        if (sessionId) {
            await saveChatMessage(sessionId, 'assistant', assistantMessage);
        }

        return NextResponse.json({ message: assistantMessage });
    } catch (error) {
        console.error('Chat API error:', error);
        return NextResponse.json({
            message: `// CRITICAL_FAILURE. System integrity check required. [WHATSAPP_LINK:Report Outage:Technical Support 🔧]`
        });
    }
}
