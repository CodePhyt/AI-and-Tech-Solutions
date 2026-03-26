'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';

interface ChatMessage {
    role: 'user' | 'assistant';
    content: string;
}

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [inputQuery, setInputQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [sessionId, setSessionId] = useState<string>('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Initialize session ID and greeting on mount
    useEffect(() => {
        // Create a unique session ID for this browser tab if none exists
        const storedSession = localStorage.getItem('ares_web_session');
        if (storedSession) {
            setSessionId(storedSession);
        } else {
            const newSession = `WEB_${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
            localStorage.setItem('ares_web_session', newSession);
            setSessionId(newSession);
        }

        // Initial Greeting
        setMessages([
            {
                role: 'assistant',
                content: "Guten Tag! Ich bin der KI-Assistent von KI & TECH Lösungen. Wie kann ich Sie bei der digitalen Transformation oder im globalen B2B-Sourcing unterstützen?"
            }
        ]);
    }, []);

    // Auto-scroll to bottom of chat
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!inputQuery.trim()) return;

        const userText = inputQuery.trim();

        // Optimistic UI update
        const newMessages = [...messages, { role: 'user', content: userText } as ChatMessage];
        setMessages(newMessages);
        setInputQuery('');
        setIsLoading(true);

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: userText,
                    sessionId: sessionId
                }),
            });

            if (!res.ok) {
                throw new Error('Network response failed');
            }

            const data = await res.json();

            setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);

        } catch (error) {
            console.error('Chat error:', error);
            setMessages(prev => [...prev, { role: 'assistant', content: "Die Systemverbindung ist aktuell instabil. Bitte verwenden Sie primär unsere WhatsApp-Hotline." }]);
        } finally {
            setIsLoading(false);
            scrollToBottom();
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">

            {/* Chat Window */}
            {isOpen && (
                <div className="bg-corporate-navy border border-corporate-blue/30 rounded-2xl shadow-2xl shadow-black/50 w-[350px] sm:w-[400px] h-[500px] mb-4 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">

                    {/* Header */}
                    <div className="bg-corporate-dark border-b border-white/5 p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-corporate-blue/20 rounded-full flex items-center justify-center border border-corporate-blue/30">
                                <Bot className="w-5 h-5 text-corporate-blue" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-sm tracking-wide">ARES Swarm KI</h3>
                                <p className="text-xs text-corporate-blue flex items-center gap-1">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                    System Online
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-slate-400 hover:text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Chat Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-corporate-dark/50 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm
                                        ${msg.role === 'user'
                                            ? 'bg-corporate-blue text-white rounded-tr-none'
                                            : 'bg-corporate-navy border border-white/10 text-slate-200 rounded-tl-none'
                                        }`
                                    }
                                >
                                    {msg.content}
                                </div>
                            </div>
                        ))}

                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-corporate-navy border border-white/10 text-slate-400 rounded-2xl rounded-tl-none px-4 py-3 flex items-center gap-2">
                                    <Loader2 className="w-4 h-4 animate-spin text-corporate-blue" />
                                    <span className="text-xs">ARES analysiert...</span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-corporate-dark border-t border-white/5">
                        <form onSubmit={handleSendMessage} className="relative flex items-center">
                            <input
                                type="text"
                                value={inputQuery}
                                onChange={(e) => setInputQuery(e.target.value)}
                                placeholder="Stellen Sie Ihre Frage..."
                                className="w-full bg-white/5 border border-white/10 rounded-full pl-4 pr-12 py-3 text-sm text-white focus:outline-none focus:border-corporate-blue/50 transition-colors"
                                disabled={isLoading}
                            />
                            <button
                                type="submit"
                                disabled={isLoading || !inputQuery.trim()}
                                className="absolute right-2 p-2 bg-corporate-blue rounded-full text-white hover:bg-blue-600 disabled:opacity-50 disabled:bg-corporate-blue/50 transition-all"
                            >
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center justify-center p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 z-50
                    ${isOpen
                        ? 'bg-corporate-dark text-slate-400 border border-white/10'
                        : 'bg-corporate-blue text-white shadow-corporate-blue/40 border border-corporate-blue/50'
                    }
                `}
            >
                {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
            </button>
        </div>
    );
}
