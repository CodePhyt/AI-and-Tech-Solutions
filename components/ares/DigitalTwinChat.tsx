'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Terminal, Cpu, ShieldCheck, Mail, Loader2 } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';

// ─── Types ────────────────────────────────────────────────────────────────────
type Message = { role: 'user' | 'assistant'; content: string };
type Phase = 'chat' | 'email_capture';

// ─── Constants ────────────────────────────────────────────────────────────────
const SWARM_KEY = process.env.NEXT_PUBLIC_ARES_SWARM_KEY ?? '';

const INITIAL_MESSAGE: Message = {
    role: 'assistant',
    content:
        'I am ARES. Why pay enterprise fees for just software?\n\nWe offer the **Hybrid Advantage**: Implement our AI Automation, and we will supply your physical operations (Rixos-quality packaging, frozen wholesale) at direct-from-factory prices via Zero Group.\n\nHow can we cut your costs today?',
};

const QUICK_ACTIONS = [
    '🔥 The Hybrid Deal (AI + Physical Sourcing)',
    '🛡️ Sovereign AI (100% On-Premise/GDPR)',
    '📦 Zero Group Wholesale Catalog',
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function DigitalTwinChat() {
    const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
    const [input, setInput] = useState('');
    const [email, setEmail] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [phase, setPhase] = useState<Phase>('chat');
    const [userToken] = useState(() => uuidv4());
    const [msgCount, setMsgCount] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    // ── Gate: ask for email after the 2nd user message ────────────────────
    useEffect(() => {
        if (msgCount === 2 && !email) {
            setPhase('email_capture');
        }
    }, [msgCount, email]);

    // ── Send message to Viking Orchestrator ───────────────────────────────
    const handleSend = async (text: string) => {
        if (!text.trim() || isLoading) return;

        if (phase === 'email_capture') return; // Block sends during capture

        const userMsg: Message = { role: 'user', content: text };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsLoading(true);
        setMsgCount(prev => prev + 1);

        try {
            const res = await fetch('/api/swarm-gateway', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-ares-swarm-key': SWARM_KEY,
                },
                body: JSON.stringify({
                    message: text,
                    email: email || null,
                    userToken,
                }),
            });

            if (!res.ok) throw new Error(`Gateway error: ${res.status}`);
            const data = await res.json();

            setMessages(prev => [...prev, {
                role: 'assistant',
                content: data.response ?? 'ARES is processing your request...',
            }]);
        } catch {
            // Graceful offline fallback
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: 'ARES Command temporarily offline. Your message has been logged. An operative will respond through a secure channel.',
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    // ── Submit email and continue ─────────────────────────────────────────
    const handleEmailSubmit = () => {
        const trimmed = emailInput.trim();
        if (!trimmed) return;
        setEmail(trimmed);
        setPhase('chat');
        setMessages(prev => [...prev, {
            role: 'assistant',
            content: `Identity verified. Secure channel established for **${trimmed}**.\n\nYou now have direct access to Zero Group pricing intelligence and Swarm Protocol execution.\n\nWhat shall we deploy first?`,
        }]);
    };

    // ── Skip email ────────────────────────────────────────────────────────
    const handleEmailSkip = () => {
        setPhase('chat');
        setMessages(prev => [...prev, {
            role: 'assistant',
            content: 'Proceeding anonymously. Note: Custom quotes and outreach require an email for coordination.\n\nHow can ARES assist?',
        }]);
    };

    // ─────────────────────────────────────────────────────────────────────
    return (
        <div className="w-full max-w-4xl mx-auto h-[600px] flex flex-col bg-[#0a0a0a]/90 backdrop-blur-xl border border-[#00d4ff]/30 rounded-lg shadow-[0_0_50px_-12px_rgba(0,212,255,0.25)] overflow-hidden font-mono">

            {/* ── Header ── */}
            <div className="p-4 border-b border-[#00d4ff]/20 flex items-center justify-between bg-black/50">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <div className="w-3 h-3 bg-[#00d4ff] rounded-full animate-pulse shadow-[0_0_10px_#00d4ff]" />
                        <div className="absolute inset-0 w-3 h-3 bg-[#00d4ff] rounded-full animate-ping opacity-75" />
                    </div>
                    <div>
                        <h2 className="text-[#e5e5e5] font-bold text-sm tracking-widest uppercase flex items-center gap-2">
                            <Terminal className="w-4 h-4 text-[#00d4ff]" />
                            Osman Kadir <span className="text-[#ffd700] text-xs px-1 border border-[#ffd700]/30 rounded">DIGITAL TWIN</span>
                        </h2>
                        <p className="text-[#00d4ff]/60 text-xs flex items-center gap-1">
                            <ShieldCheck className="w-3 h-3" /> Secured by ARES Swarm
                        </p>
                    </div>
                </div>
                <Cpu className="w-5 h-5 text-[#00d4ff]/40" />
            </div>

            {/* ── Chat Area ── */}
            <div className="flex-1 p-6 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-[#00d4ff]/20 scrollbar-track-transparent" ref={scrollRef}>
                <AnimatePresence>
                    {messages.map((m, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div className={`max-w-[80%] p-4 rounded-lg border ${m.role === 'user'
                                ? 'bg-[#00d4ff]/10 border-[#00d4ff]/30 text-[#00d4ff]'
                                : 'bg-[#1a1a1a] border-[#333] text-[#e5e5e5]'
                                }`}>
                                <p className="text-sm whitespace-pre-wrap leading-relaxed">{m.content}</p>
                            </div>
                        </motion.div>
                    ))}

                    {/* Typing indicator */}
                    {isLoading && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                            <div className="bg-[#1a1a1a] border border-[#333] p-3 rounded-lg flex items-center gap-1">
                                <div className="w-1.5 h-1.5 bg-[#00d4ff] rounded-full animate-bounce [animation-delay:0ms]" />
                                <div className="w-1.5 h-1.5 bg-[#00d4ff] rounded-full animate-bounce [animation-delay:150ms]" />
                                <div className="w-1.5 h-1.5 bg-[#00d4ff] rounded-full animate-bounce [animation-delay:300ms]" />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* ── Email Capture Gate ── */}
            <AnimatePresence>
                {phase === 'email_capture' && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="p-4 bg-[#0d1a26] border-t border-[#00d4ff]/30"
                    >
                        <p className="text-[#00d4ff] text-xs mb-3 flex items-center gap-2">
                            <Mail className="w-3 h-3" />
                            <span>Establish secure channel — provide your contact for priority routing.</span>
                        </p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                value={emailInput}
                                onChange={e => setEmailInput(e.target.value)}
                                onKeyDown={e => e.key === 'Enter' && handleEmailSubmit()}
                                placeholder="operative@company.com"
                                className="flex-1 bg-[#0a0a0a] border border-[#00d4ff]/30 rounded px-3 py-2 text-sm text-[#e5e5e5] focus:outline-none focus:border-[#00d4ff]/70 placeholder:text-gray-600 font-mono"
                                autoFocus
                            />
                            <button
                                onClick={handleEmailSubmit}
                                className="bg-[#00d4ff] text-black px-4 py-2 rounded font-bold hover:bg-[#00b8db] transition-colors text-xs"
                            >
                                CONFIRM
                            </button>
                            <button
                                onClick={handleEmailSkip}
                                className="border border-[#333] text-gray-500 px-3 py-2 rounded hover:border-[#555] transition-colors text-xs"
                            >
                                SKIP
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ── Quick Actions ── */}
            {phase === 'chat' && (
                <div className="p-4 bg-black/30 border-t border-[#00d4ff]/10 overflow-x-auto">
                    <div className="flex gap-2">
                        {QUICK_ACTIONS.map((action, i) => (
                            <button
                                key={i}
                                onClick={() => handleSend(action)}
                                disabled={isLoading}
                                className="px-3 py-1.5 text-xs bg-[#00d4ff]/5 border border-[#00d4ff]/20 text-[#00d4ff] rounded hover:bg-[#00d4ff]/10 hover:border-[#00d4ff]/50 transition-all whitespace-nowrap disabled:opacity-40"
                            >
                                {action}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* ── Input Area ── */}
            {phase === 'chat' && (
                <div className="p-4 bg-black/50 border-t border-[#00d4ff]/20">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            onKeyDown={e => e.key === 'Enter' && handleSend(input)}
                            placeholder="Initialize command sequence..."
                            disabled={isLoading}
                            className="flex-1 bg-[#0a0a0a] border border-[#333] rounded px-4 py-3 text-sm text-[#e5e5e5] focus:outline-none focus:border-[#00d4ff]/50 placeholder:text-gray-600 transition-colors font-mono disabled:opacity-50"
                        />
                        <button
                            onClick={() => handleSend(input)}
                            disabled={isLoading || !input.trim()}
                            className="bg-[#00d4ff] text-black px-4 py-2 rounded font-bold hover:bg-[#00b8db] transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
