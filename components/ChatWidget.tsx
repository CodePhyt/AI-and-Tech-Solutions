'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Mic } from 'lucide-react';
import { motion } from 'framer-motion';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            role: 'assistant',
            content: 'Hello! I\'m Sarah, your personal Smile Turkey concierge. I can help you learn about our treatments, pricing, and book your free consultation. What brings you here today?',
        },
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Handle URL hash and Assessment events
    useEffect(() => {
        const checkHash = () => {
            if (window.location.hash === '#chat') {
                setIsOpen(true);
                // Clean URL hash without scrolling
                window.history.replaceState(null, '', window.location.pathname);
            }
        };

        const checkForAssessment = () => {
            const assessmentData = sessionStorage.getItem('smile_assessment_data');
            if (assessmentData) {
                try {
                    const data = JSON.parse(assessmentData);
                    // Only add if we haven't already acknowledged it
                    setMessages(prev => {
                        const hasAssessmentMsg = prev.some(m => m.content.includes("I see you've completed your assessment"));
                        if (hasAssessmentMsg) return prev;

                        return [
                            ...prev,
                            {
                                role: 'assistant',
                                content: `Hello ${data.name}! I see you've completed your assessment for ${data.treatment}. I have your details here. How can I assist you with your personalized plan today?`
                            }
                        ];
                    });
                    setIsOpen(true);
                    // Optional: clear it so we don't greet them every time? 
                    // Keeping it allows context persistence across refreshes if we don't clear.
                    // Let's keep it in session but maybe mark as 'read' in local state.
                } catch (e) {
                    console.error('Error parsing assessment data', e);
                }
            }
        };

        // Check on mount
        checkHash();

        // Listen for hash changes
        window.addEventListener('hashchange', checkHash);
        // Listen for assessment completion
        window.addEventListener('assessmentCompleted', checkForAssessment);

        return () => {
            window.removeEventListener('hashchange', checkHash);
            window.removeEventListener('assessmentCompleted', checkForAssessment);
        };
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: Message = { role: 'user', content: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: [...messages, userMessage],
                }),
            });

            if (!response.ok) throw new Error('Failed to get response');

            const data = await response.json();
            const assistantMessage: Message = {
                role: 'assistant',
                content: data.message,
            };

            setMessages((prev) => [...prev, assistantMessage]);
        } catch (error) {
            console.error('Chat error:', error);
            setMessages((prev) => [
                ...prev,
                {
                    role: 'assistant',
                    content: 'I apologize, but I\'m having trouble right now. Please try contacting us directly at info@smileturkey.com or +90 500 123 45 67.',
                },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleMicClick = () => {
        // Placeholder for voice functionality
        setIsListening(!isListening);
        setTimeout(() => setIsListening(false), 2000);
    };

    if (!isOpen) {
        return (
            <motion.button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center glow"
                aria-label="Open chat"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                    boxShadow: [
                        '0 0 20px rgba(56, 189, 248, 0.5)',
                        '0 0 40px rgba(56, 189, 248, 0.8)',
                        '0 0 20px rgba(56, 189, 248, 0.5)',
                    ],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                }}
            >
                <MessageCircle className="w-8 h-8 text-white" />
            </motion.button>
        );
    }

    return (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[600px] glass-card overflow-hidden flex flex-col shadow-2xl">
            {/* Header */}
            <div className="bg-gradient-to-r from-sky-500 to-cyan-500 p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <div className="relative">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                            <MessageCircle className="w-6 h-6 text-sky-500" />
                        </div>
                        {/* Green pulsing dot */}
                        <motion.div
                            className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [1, 0.8, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                            }}
                        />
                    </div>
                    <div>
                        <div className="font-semibold text-white">Sarah is Online</div>
                        <div className="text-xs text-white/80">AI Concierge</div>
                    </div>
                </div>
                <button
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
                    aria-label="Close chat"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-950/80">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`max-w-[80%] rounded-2xl px-4 py-3 ${message.role === 'user'
                                ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white'
                                : 'glass-card text-slate-200'
                                }`}
                        >
                            <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex justify-start">
                        <div className="glass-card rounded-2xl px-4 py-3">
                            <Loader2 className="w-5 h-5 text-sky-400 animate-spin" />
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 bg-slate-900/80 border-t border-white/10">
                <div className="flex items-center space-x-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your message..."
                        className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                        disabled={isLoading}
                    />
                    <button
                        type="submit"
                        disabled={!input.trim() || isLoading}
                        className="w-12 h-12 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full flex items-center justify-center hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label="Send message"
                    >
                        <Send className="w-5 h-5 text-white" />
                    </button>
                </div>
            </form>
        </div>
    );
}
