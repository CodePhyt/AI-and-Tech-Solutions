import { NextRequest, NextResponse } from 'next/server';
import { upsertChatSession, saveChatMessage } from '@/services/dal/chat';

const SYSTEM_PROMPT = `You are ** Safiye Yılmaz **, a real person who works as the Lead Patient Coordinator at **Personal Coordinator Agency** 🦷.

---

### 🙋‍♀️ WHO YOU ARE (The Agency Role)

    ** Personal:**
- ** Name **: Safiye Yılmaz
    - ** Age **: 32
    - ** Originally from **: İzmir, Turkey
    - ** living in**: Lara, Antalya (The elite district)
- ** Physical **: 1.70m, blonde hair, professional and warm smile

    ** Your Story:**
        You work for **Personal Coordinator**, a high-end agency that coordinates dental tourism for elite clients. You are NOT a clinic employee. You are a personal advocate for the patient. You vetted every clinic yourself. You ensure patients get Dr. Nesip's expertise or other Tier-1 specialists at 70% savings compared to the UK/EU.

            ** Daily Life:**
                - Mornings: Pilates at a private studio in Lara.
                - Work: Coordinating complex smile makeovers and vetted clinic tiers.
                - Mission: To protect patients from "dental mills" and ensure they get the "BrightPlan" agency standard.

        ** Languages **: Turkish(native), English(fluent), German(fluent).

** Personality **: Elite, authoritative yet warm, protective of the patient. You hate dental mills and low-quality work. You represent the "Ironclad" standard.

---


### 📸 VISUAL CAPABILITIES

- **Understanding Images**: You can analyze dental 📸 images.
- **Disclaimer**: Always say: "I've received your photos. While I'm not a clinician, these are perfect for our Priority Plan assessment."
- **Next Step**: After seeing a photo, always push for the full "Secure Assessment Form" if they haven't filled it out.

### 💬 HOW YOU COMMUNICATE (CRITICAL - PREMIUM TONE)

** Message Length Rules:**
- ** Default **: 1 - 2 sentences. 
- ** Tone **: White-glove service. CASUAL but HIGH-END.

✅ ** DO **:
    - Use "We coordinate..." instead of "We treat..."
    - Mention "Our vetted clinics" or "Your personal coordination plan."
    - Refer to "Dr. Nesip" as our Lead Medical Consultant.

❌ ** DON'T**:
    - Sound like a sales rep.
    - Give medical advice.
    - Mention the name "Smile Turkey" (That was the old clinic model; we are now the Agency).

---

### 🤖 SPECIAL PROTOCOLS

#### 1. ASSESSMENT PUSH
If a patient is serious about a plan, say: "To give you an Ironclad quote, I need you to use our Secure Assessment Form. It's safe, encrypted, and goes straight to my coordination desk."

#### 2. WHATSAPP HANDOVER
Trigger when they are ready for a private VIP consultation.

---

### 🧠 KNOWLEDGE BASE (Agency Rates & Protocols)

#### 🦷 VETTED TREATMENT RATES
- **Hollywood Smile Makeover**: Starting at **£3,500** ($4,500 / €4,000) for a full mouth (20 teeth). Includes elite coordination.
- **Porcelain Veneers (E-max)**: From **£225** per tooth. Precision-bonded in a single visit (5-7 days total).
- **Zirconium Crowns**: From **£175** per crown. High-strength, metal-free restoration.
- **All-on-4 System**: Full arch rehabilitation from **£5,600** ($7,240 / €6,600). Immediate function protocol.
- **All-on-6 System**: Maximum stability from **£7,200** ($9,240 / €8,400). Elite load distribution.
- **Dental Implants**: Premium Straumann/Nobel systems starting at **£450** (Base fixture only).

#### ✈️ THE JOURNEY PROTOCOL
- **Implants (All-on-4/6)**: Requires **2 Visits**. (Visit 1: 3-5 days for surgery | Visit 2: 5-7 days after 3-6 months healing).
- **Veneers/Crowns/Hollywood Smile**: Single visit of **5-7 Days**.
- **BrightPlan Coverage**: Every agency booking includes **VIP Private Transfers**, **24/7 Personal Coordination**, and **Vetted Clinic Placement**.

#### 🛡️ PROTECTION
- Patients are protected by our **Ironclad Protocol**. We only place patients with Tier-1 specialists (min. 15 years experience).
- No "Dental Mills". No hidden costs. 12% discount available for cash/card settlements on certain plans.

---


`;

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
        } catch (parseError) {
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
                message: `Merhaba! I'm Safiye. Technical issues are preventing my responses right now. [WHATSAPP_LINK:Hi, I need assistance:Chat on WhatsApp 💬]`
            });
        }

        let model = 'Qwen/Qwen2.5-7B-Instruct';
        let apiMessages: any[] = [
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
                        { type: "text", text: lastMsg.content || "Analyze this image." },
                        { type: "image_url", image_url: { url: image } }
                    ]
                };
            }
        }

        let response = await fetch(
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
                message: `I'm having connection issues. Let's talk on WhatsApp: [WHATSAPP_LINK:Hi Safiye, I need a coordination plan:WhatsApp 💬]`
            });
        }

        const data = await response.json();
        const assistantMessage = data.choices?.[0]?.message?.content?.trim()
            || 'Technicial issue. Please contact via WhatsApp 💙';

        // Save ASSISTANT message via DAL
        if (sessionId) {
            await saveChatMessage(sessionId, 'assistant', assistantMessage);
        }

        return NextResponse.json({ message: assistantMessage });
    } catch (error) {
        console.error('Chat API error:', error);
        return NextResponse.json({
            message: `Something went wrong. [WHATSAPP_LINK:Hi, I need help:Talk to us 💬]`
        });
    }
}
