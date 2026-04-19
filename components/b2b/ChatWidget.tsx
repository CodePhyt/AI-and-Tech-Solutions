'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, Loader2, MessageCircle, ArrowRight, ChevronDown } from 'lucide-react';

interface ChatMessage {
    role: 'user' | 'assistant';
    content: string;
}

const GREETING: ChatMessage = {
    role: 'assistant',
    content: 'Guten Tag! Ich bin der KI-Assistent von KI & TECH Lösungen 🏭\n\nWie kann ich Ihnen helfen? Sagen Sie mir z.B. welches Produkt Sie suchen, die gewünschte Stückzahl oder Ihr Budget.',
};

// Build WhatsApp pre-filled message from chat history
function buildWhatsAppUrl(messages: ChatMessage[]): string {
    const userMessages = messages
        .filter(m => m.role === 'user')
        .map(m => m.content)
        .slice(-3); // last 3 user messages

    const context = userMessages.length > 0
        ? userMessages.join(' | ')
        : 'Allgemeine Anfrage';

    const text = `Hallo Osman, ich komme vom Website-Chat. Mein Anliegen: ${context}`;
    return `https://wa.me/491713474348?text=${encodeURIComponent(text)}`;
}

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [hasNewMessage, setHasNewMessage] = useState(true); // badge on load
    const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
    const [inputQuery, setInputQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [sessionId] = useState(() => {
        if (typeof window === 'undefined') return 'SSR';
        const stored = localStorage.getItem('ares_web_session');
        if (stored) return stored;
        const newId = `WEB_${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
        localStorage.setItem('ares_web_session', newId);
        return newId;
    });
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Auto-scroll
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isLoading]);

    // Focus input when opened
    useEffect(() => {
        if (isOpen) {
            setHasNewMessage(false);
            setTimeout(() => inputRef.current?.focus(), 300);
        }
    }, [isOpen]);

    // Attention pulse after 8s to draw user in
    useEffect(() => {
        const t = setTimeout(() => setHasNewMessage(true), 8000);
        return () => clearTimeout(t);
    }, []);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputQuery.trim() || isLoading) return;

        const userText = inputQuery.trim();
        const newMessages: ChatMessage[] = [...messages, { role: 'user', content: userText }];
        setMessages(newMessages);
        setInputQuery('');
        setIsLoading(true);

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: userText,
                    history: newMessages.slice(1, -1), // exclude greeting and current user msg
                    sessionId,
                }),
            });

            const data = await res.json();
            setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
        } catch {
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: 'Die KI ist gerade nicht erreichbar. Wechseln Sie direkt zu WhatsApp für sofortige Hilfe 👇',
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    const hasUserMessages = messages.some(m => m.role === 'user');

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3">

            {/* ── Chat Window ── */}
            {isOpen && (
                <div className="flex flex-col w-[360px] sm:w-[410px] h-[540px] bg-[#0a0f1e] border border-white/10 rounded-2xl shadow-2xl shadow-black/60 overflow-hidden animate-in slide-in-from-bottom-4 duration-300">

                    {/* Header */}
                    <div className="shrink-0 bg-gradient-to-r from-[#0d1528] to-[#0f1e3a] border-b border-white/8 px-4 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="relative w-10 h-10 rounded-full bg-corporate-blue/20 border border-corporate-blue/40 flex items-center justify-center">
                                <Bot className="w-5 h-5 text-corporate-blue" />
                                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#0d1528] animate-pulse" />
                            </div>
                            <div>
                                <p className="text-white font-bold text-sm tracking-wide">KI & TECH Assistent</p>
                                <p className="text-emerald-400 text-xs">Online · antwortet in &lt;30s</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-slate-500 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/5"
                        >
                            <ChevronDown className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-[#080d1a]/80 scrollbar-thin scrollbar-thumb-white/8 scrollbar-track-transparent">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                {msg.role === 'assistant' && (
                                    <div className="w-6 h-6 rounded-full bg-corporate-blue/20 border border-corporate-blue/30 flex items-center justify-center mr-2 mt-1 shrink-0">
                                        <Bot className="w-3 h-3 text-corporate-blue" />
                                    </div>
                                )}
                                <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-line shadow-sm
                                    ${msg.role === 'user'
                                        ? 'bg-corporate-blue text-white rounded-tr-sm'
                                        : 'bg-[#111827] border border-white/8 text-slate-200 rounded-tl-sm'
                                    }`}
                                >
                                    {msg.content}
                                </div>
                            </div>
                        ))}

                        {/* Typing indicator */}
                        {isLoading && (
                            <div className="flex items-start gap-2">
                                <div className="w-6 h-6 rounded-full bg-corporate-blue/20 border border-corporate-blue/30 flex items-center justify-center shrink-0 mt-1">
                                    <Bot className="w-3 h-3 text-corporate-blue" />
                                </div>
                                <div className="bg-[#111827] border border-white/8 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-2">
                                    <Loader2 className="w-4 h-4 text-corporate-blue animate-spin" />
                                    <span className="text-slate-400 text-xs">KI tippt...</span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* WhatsApp Handoff Banner */}
                    {hasUserMessages && (
                        <a
                            href={buildWhatsAppUrl(messages)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shrink-0 mx-3 mb-2 flex items-center gap-3 px-4 py-3 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 hover:border-[#25D366]/60 rounded-xl transition-all duration-200 group cursor-pointer"
                        >
                            <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0" />
                            <span className="text-[#25D366] text-xs font-semibold flex-1 leading-snug">
                                Mit einem Experten auf WhatsApp sprechen
                                <span className="block text-[#25D366]/60 font-normal text-[10px]">Ihr Chatverlauf wird übertragen</span>
                            </span>
                            <ArrowRight className="w-4 h-4 text-[#25D366]/60 group-hover:text-[#25D366] group-hover:translate-x-1 transition-all duration-200 shrink-0" />
                        </a>
                    )}

                    {/* Input */}
                    <div className="shrink-0 px-3 pb-3 bg-[#0a0f1e] border-t border-white/5 pt-2">
                        <form onSubmit={handleSendMessage} className="relative flex items-center gap-2">
                            <input
                                ref={inputRef}
                                type="text"
                                value={inputQuery}
                                onChange={e => setInputQuery(e.target.value)}
                                placeholder="Ihre Frage..."
                                disabled={isLoading}
                                className="flex-1 bg-white/5 border border-white/10 hover:border-white/20 focus:border-corporate-blue/60 rounded-full pl-4 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                            />
                            <button
                                type="submit"
                                disabled={isLoading || !inputQuery.trim()}
                                className="shrink-0 w-10 h-10 bg-corporate-blue hover:bg-blue-600 disabled:opacity-40 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-lg shadow-corporate-blue/30"
                            >
                                <Send className="w-4 h-4 text-white" />
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* ── Toggle FAB ── */}
            <div className="relative">
                {/* Notification badge */}
                {!isOpen && hasNewMessage && (
                    <span className="absolute -top-1 -right-1 z-10 flex h-5 w-5 items-center justify-center">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
                    </span>
                )}
                <button
                    onClick={() => setIsOpen(o => !o)}
                    aria-label="Chat öffnen"
                    className={`flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95
                        ${isOpen
                            ? 'bg-[#0d1528] border border-white/10 text-slate-400 hover:text-white'
                            : 'bg-corporate-blue text-white shadow-corporate-blue/40 border border-corporate-blue/60 hover:shadow-corporate-blue/60'
                        }`}
                >
                    {isOpen
                        ? <X className="w-6 h-6" />
                        : <MessageSquare className="w-6 h-6" />
                    }
                </button>
            </div>
        </div>
    );
}
