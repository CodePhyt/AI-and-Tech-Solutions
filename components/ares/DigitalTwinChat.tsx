'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Terminal, Cpu, ShieldCheck } from 'lucide-react';

export default function DigitalTwinChat() {
    const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([
        { role: 'assistant', content: "Welcome to KI & Tech Lösungen. I am the digital twin of Osman Kadir. I handle B2B sourcing, AI automation, and Smart Home integrations. What are we building or scaling today?" }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    const quickActions = [
        "📦 Bulk Packaging (Rixos Quality)",
        "🍩 Wholesale Food (Churros)",
        "🏠 Smart Home Lab Setup",
        "🤖 Custom AI Agent Development"
    ];

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = async (text: string) => {
        if (!text.trim()) return;

        // Add User Message
        setMessages(prev => [...prev, { role: 'user', content: text }]);
        setInput('');
        setIsTyping(true);

        // TODO: Implement actual API call to /api/swarm-gateway
        // Simulating response for UI Demo
        setTimeout(() => {
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: `Ack. Processing request for: "${text}". \n\nInitializing Swarm Protocol... \n(This is a simulation. Connect backend to verify).`
            }]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <div className="w-full max-w-4xl mx-auto h-[600px] flex flex-col bg-[#0a0a0a]/90 backdrop-blur-xl border border-[#00d4ff]/30 rounded-lg shadow-[0_0_50px_-12px_rgba(0,212,255,0.25)] overflow-hidden font-mono">
            {/* Header */}
            <div className="p-4 border-b border-[#00d4ff]/20 flex items-center justify-between bg-black/50">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <div className="w-3 h-3 bg-[#00d4ff] rounded-full animate-pulse shadow-[0_0_10px_#00d4ff]"></div>
                        <div className="absolute inset-0 w-3 h-3 bg-[#00d4ff] rounded-full animate-ping opacity-75"></div>
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

            {/* Chat Area */}
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
                    {isTyping && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                            <div className="bg-[#1a1a1a] border border-[#333] p-3 rounded-lg flex items-center gap-1">
                                <div className="w-1.5 h-1.5 bg-[#00d4ff] rounded-full animate-bounce delay-0"></div>
                                <div className="w-1.5 h-1.5 bg-[#00d4ff] rounded-full animate-bounce delay-150"></div>
                                <div className="w-1.5 h-1.5 bg-[#00d4ff] rounded-full animate-bounce delay-300"></div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Quick Actions */}
            <div className="p-4 bg-black/30 border-t border-[#00d4ff]/10 overflow-x-auto">
                <div className="flex gap-2">
                    {quickActions.map((action, i) => (
                        <button
                            key={i}
                            onClick={() => handleSend(action)}
                            className="px-3 py-1.5 text-xs bg-[#00d4ff]/5 border border-[#00d4ff]/20 text-[#00d4ff] rounded hover:bg-[#00d4ff]/10 hover:border-[#00d4ff]/50 transition-all whitespace-nowrap"
                        >
                            {action}
                        </button>
                    ))}
                </div>
            </div>

            {/* Input Area */}
            <div className="p-4 bg-black/50 border-t border-[#00d4ff]/20">
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
                        placeholder="Initialize command sequence..."
                        className="flex-1 bg-[#0a0a0a] border border-[#333] rounded px-4 py-3 text-sm text-[#e5e5e5] focus:outline-none focus:border-[#00d4ff]/50 placeholder:text-gray-600 transition-colors font-mono"
                    />
                    <button
                        onClick={() => handleSend(input)}
                        className="bg-[#00d4ff] text-black px-4 py-2 rounded font-bold hover:bg-[#00b8db] transition-colors flex items-center justify-center"
                    >
                        <Send className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
