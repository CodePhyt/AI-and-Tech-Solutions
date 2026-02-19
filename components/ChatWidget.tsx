'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { MessageCircle, X, Send, Bot, Check, CheckCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ImageUploader from './ImageUploader';
import ImageLightbox from './ImageLightbox';

interface Message {
    role: 'user' | 'assistant' | 'system';
    content: string;
    image?: string;
    timestamp: Date;
    status?: 'sent' | 'delivered' | 'read';
}

interface ChatRequestBody {
    messages: { role: string; content: string }[];
    sessionId: string;
    image?: string;
}

export default function ChatWidget() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            role: 'assistant',
            content: 'System Online. 🟢\n\nI am Nexus, your Sovereign Tech Architect.\n\nI can assist with:\n• Architecture Assessments 🏗️\n• Sovereign AI Deployment 🧠\n• Custom Software Solutions 💻\n\nInitialize request parameters?',
            timestamp: new Date(),
            status: 'read'
        },
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [hasUnread, setHasUnread] = useState(false);
    const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);
    const [selectedImage, setSelectedImage] = useState<{ file: File; preview: string } | null>(null);
    const [sessionId, setSessionId] = useState<string>('');

    useEffect(() => {
        let sid = localStorage.getItem('nexus_chat_session_id');
        if (!sid) {
            sid = crypto.randomUUID();
            localStorage.setItem('nexus_chat_session_id', sid);
        }
        setSessionId(sid);
    }, []);

    const handleWhatsAppHandoff = () => {
        const summary = messages
            .filter(m => m.role !== 'system')
            .map(m => `${m.role === 'user' ? '👤 User' : '🤖 Nexus'}: ${m.content}`)
            .join('\n\n');

        const text = `*New Tech Inquiry via Nexus AI* 🚀\n\n${summary}\n\n(Session ID: ${sessionId})`;
        const url = `https://wa.me/491713474348?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    };

    const handleImageSelect = (file: File, preview: string) => {
        setSelectedImage({ file, preview });
    };

    const handleImageRemove = () => {
        setSelectedImage(null);
    };

    const convertImageToBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping, selectedImage]);

    useEffect(() => {
        if (isOpen) {
            setHasUnread(false);
        }
    }, [isOpen]);

    // Handle URL hash and Assessment events
    useEffect(() => {
        const checkHash = () => {
            if (window.location.hash === '#chat') {
                setIsOpen(true);
                window.history.replaceState(null, '', window.location.pathname);
            }
        };

        // Auto-open chat after 5 seconds on homepage
        if (pathname === '/') {
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 5000);
            return () => clearTimeout(timer);
        }

        const checkForAssessment = () => {
            const assessmentData = sessionStorage.getItem('nexus_assessment_data');
            if (assessmentData) {
                try {
                    const data = JSON.parse(assessmentData);
                    setMessages(prev => {
                        const hasAssessmentMsg = prev.some(m => m.content.includes("I've analyzed your assessment"));
                        if (hasAssessmentMsg) return prev;

                        return [
                            ...prev,
                            {
                                role: 'assistant',
                                content: `Protocol Acknowledgement: ${data.name}. 🛡️\n\nI've analyzed your assessment for **${data.treatment}**. Preliminary architecture is viable.\n\nShall we proceed to technical requirements gathering?`,
                                timestamp: new Date(),
                                status: 'read'
                            }
                        ];
                    });
                    setIsOpen(true);
                    setHasUnread(true);
                } catch (e) {
                    console.error('Error parsing assessment data', e);
                }
            }
        };

        checkHash();
        window.addEventListener('hashchange', checkHash);
        window.addEventListener('assessmentCompleted', checkForAssessment);

        return () => {
            window.removeEventListener('hashchange', checkHash);
            window.removeEventListener('assessmentCompleted', checkForAssessment);
        };
    }, [pathname]);

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const processMessage = async (msgContent: string, msgImage: { file: File; preview: string } | null) => {
        const userMessage: Message = {
            role: 'user',
            content: msgContent,
            image: msgImage?.preview,
            timestamp: new Date(),
            status: 'sent'
        };

        setMessages((prev) => [...prev, userMessage]);
        setIsLoading(true);
        setIsTyping(true);

        setTimeout(() => {
            setMessages(prev => prev.map(m => m === userMessage ? { ...m, status: 'delivered' } : m));
        }, 1000);

        try {
            const assessmentData = sessionStorage.getItem('nexus_assessment_data');
            let contextMessage: { role: 'system' | 'user' | 'assistant'; content: string } | null = null;
            if (assessmentData) {
                contextMessage = { role: 'system', content: `[SYSTEM_CONTEXT] User Assessment Data: ${assessmentData}` };
            }

            const apiMessages = messages.map(({ role, content }) => ({ role, content }));
            if (contextMessage) apiMessages.unshift(contextMessage);

            let contentToSend = msgContent;
            if (msgImage) {
                contentToSend = `[User uploaded an image] ${msgContent}`;
            }
            apiMessages.push({ role: 'user', content: contentToSend });

            const requestBody: ChatRequestBody = {
                messages: apiMessages,
                sessionId: sessionId,
            };

            if (msgImage) {
                const base64Image = await convertImageToBase64(msgImage.file);
                requestBody.image = base64Image;
            }

            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestBody),
            });

            if (!response.ok) throw new Error('Failed to get response');

            const data = await response.json();

            const delay = Math.min(data.message.length * 30 + 800, 5000);

            setTimeout(() => {
                setMessages(prev => prev.map(m => m.role === 'user' ? { ...m, status: 'read' } : m));
            }, delay - 500);

            setTimeout(() => {
                const assistantMessage: Message = {
                    role: 'assistant',
                    content: data.message,
                    timestamp: new Date(),
                    status: 'read'
                };
                setMessages((prev) => [...prev, assistantMessage]);
                setIsLoading(false);
                setIsTyping(false);
                if (!isOpen) setHasUnread(true);
            }, delay);

        } catch (error) {
            console.error('Chat error:', error);
            setIsLoading(false);
            setIsTyping(false);
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: "Uplink unstable. Retrying handshake... 📡",
                timestamp: new Date(),
                status: 'read'
            }]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if ((!input.trim() && !selectedImage) || isLoading) return;

        const currentInput = input;
        const currentImage = selectedImage;

        setInput('');
        setSelectedImage(null);

        await processMessage(currentInput, currentImage);
    };

    const renderContent = (content: string) => {
        return <p className="whitespace-pre-wrap">{content}</p>;
    };

    if (!isOpen) {
        return (
            <motion.div
                className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2 pointer-events-none"
            >
                <AnimatePresence>
                    {hasUnread && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, x: 20 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="bg-[#0f0f0f] text-[#00f3ff] px-4 py-2 rounded-2xl rounded-tr-none shadow-[0_0_15px_rgba(0,243,255,0.2)] border border-[#00f3ff]/20 mb-2 pointer-events-auto cursor-pointer"
                            onClick={() => setIsOpen(true)}
                        >
                            <p className="text-sm font-bold font-mono">Nexus: New Directive</p>
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.button
                    onClick={() => setIsOpen(true)}
                    className="w-16 h-16 bg-[#0f0f0f] border border-[#00f3ff]/30 rounded-full shadow-[0_0_30px_rgba(0,243,255,0.2)] flex items-center justify-center pointer-events-auto relative group"
                    aria-label="Open chat"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <div className="absolute inset-0 rounded-full border border-[#00f3ff]/20 animate-ping opacity-20" />
                    <Bot className="w-8 h-8 text-[#00f3ff] group-hover:text-white transition-colors" />
                    {hasUnread && (
                        <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#ffd700] text-black text-xs flex items-center justify-center rounded-full font-bold">1</span>
                    )}
                </motion.button>
            </motion.div>
        );
    }

    return (
        <div className="fixed bottom-6 right-6 z-50 w-full sm:w-[400px] h-[600px] max-h-[85vh] overflow-hidden flex flex-col shadow-2xl rounded-2xl ring-1 ring-[#00f3ff]/20 bg-[#0B141A]">
            {/* Header */}
            <div className="bg-[#0f0f0f] p-4 flex items-center justify-between shadow-md border-b border-[#00f3ff]/10">
                <div className="flex items-center space-x-3">
                    <div className="relative">
                        <div className="w-11 h-11 rounded-full border border-[#00f3ff]/30 flex items-center justify-center bg-[#00f3ff]/5">
                            <Bot className="w-6 h-6 text-[#00f3ff]" />
                        </div>
                        <motion.div
                            className="absolute bottom-0 right-0 w-3 h-3 bg-[#00f3ff] rounded-full border-2 border-[#0f0f0f] shadow-[0_0_10px_#00f3ff]"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </div>
                    <div>
                        <div className="font-bold text-white flex items-center text-[15px] font-mono tracking-wide">
                            <span className="text-[#00f3ff]">NEXUS</span>
                            <span className="ml-2 px-1.5 py-0.5 bg-[#00f3ff]/10 text-[#00f3ff] text-[9px] rounded uppercase font-bold tracking-wider border border-[#00f3ff]/20">AI ARCHITECT</span>
                        </div>
                        <div className="text-[12px] text-slate-400 font-normal">System Operational</div>
                    </div>
                </div>
                <div className="flex items-center space-x-1">
                    <button
                        onClick={handleWhatsAppHandoff}
                        className="text-slate-400 hover:text-[#25D366] hover:bg-[#25D366]/10 p-2 rounded-full transition-colors mr-1"
                        title="Secure Line (WhatsApp)"
                    >
                        <MessageCircle className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-slate-400 hover:text-white hover:bg-white/10 p-2 rounded-full transition-colors"
                        aria-label="Close chat"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Messages Area */}
            <div
                className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin scrollbar-thumb-[#00f3ff]/20 scrollbar-track-transparent"
                style={{
                    background: '#0B141A',
                    backgroundImage: `
                        radial-gradient(circle at 20% 50%, rgba(0, 243, 255, 0.03) 0%, transparent 50%),
                        radial-gradient(circle at 80% 80%, rgba(197, 160, 89, 0.03) 0%, transparent 50%)
                    `
                }}
            >
                <div className="flex justify-center my-4">
                    <div className="bg-[#0f0f0f]/80 text-[#ffd700] text-[10px] px-3 py-1.5 rounded-lg text-center border border-[#ffd700]/20 font-mono">
                        🔒 END-TO-END ENCRYPTED PROTOCOL
                    </div>
                </div>

                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} mb-3`}
                    >
                        {message.role === 'assistant' && (
                            <div className="w-8 h-8 rounded-full border border-[#00f3ff]/20 bg-[#00f3ff]/5 flex items-center justify-center cursor-pointer flex-shrink-0 mt-1 mr-2">
                                <Bot className="w-5 h-5 text-[#00f3ff]" />
                            </div>
                        )}

                        <div
                            className={`relative max-w-[85%] rounded-xl px-4 py-3 shadow-md ${message.role === 'user'
                                ? 'bg-[#00f3ff]/10 text-white rounded-tr-none border border-[#00f3ff]/20'
                                : 'bg-[#1a1a1a] text-slate-300 rounded-tl-none border border-white/5'
                                }`}
                        >
                            {message.image && (
                                <div className="mb-2 relative rounded-lg overflow-hidden cursor-pointer bg-black/20 border border-white/10" onClick={() => setLightboxImage({ src: message.image!, alt: 'User upload' })}>
                                    <img src={message.image} alt="Upload" className="w-full h-auto max-h-60 object-cover" />
                                </div>
                            )}

                            <div className="text-[14px] leading-relaxed font-sans">
                                {renderContent(message.content)}
                            </div>

                            <div className={`text-[10px] mt-1 flex items-center justify-end space-x-1 ${message.role === 'user' ? 'text-[#00f3ff]/60' : 'text-slate-500'}`}>
                                <span>{formatTime(message.timestamp)}</span>
                                {message.role === 'user' && (
                                    <span>
                                        {message.status === 'sent' && <Check className="w-3 h-3" />}
                                        {message.status === 'delivered' && <CheckCheck className="w-3 h-3" />}
                                        {message.status === 'read' && <CheckCheck className="w-3 h-3 text-[#00f3ff]" />}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}

                {isTyping && (
                    <div className="flex justify-start items-center space-x-2">
                        <div className="w-8 h-8 rounded-full border border-[#00f3ff]/20 bg-[#00f3ff]/5 flex items-center justify-center cursor-pointer flex-shrink-0">
                            <Bot className="w-5 h-5 text-[#00f3ff]" />
                        </div>
                        <div className="bg-[#1a1a1a] p-3 rounded-xl rounded-tl-none flex space-x-1 border border-white/5">
                            <motion.div
                                className="w-1.5 h-1.5 bg-[#00f3ff] rounded-full"
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                            />
                            <motion.div
                                className="w-1.5 h-1.5 bg-[#00f3ff] rounded-full"
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                            />
                            <motion.div
                                className="w-1.5 h-1.5 bg-[#00f3ff] rounded-full"
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                            />
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="bg-[#0f0f0f] p-2 flex flex-col space-y-2 border-t border-[#00f3ff]/10">
                {selectedImage && (
                    <div className="px-2">
                        <ImageUploader
                            onImageSelect={handleImageSelect}
                            onImageRemove={handleImageRemove}
                            currentImage={selectedImage.preview}
                        />
                    </div>
                )}

                <div className="flex items-center space-x-2">
                    <div className="flex-shrink-0">
                        <ImageUploader
                            onImageSelect={handleImageSelect}
                            onImageRemove={handleImageRemove}
                            currentImage={null}
                        />
                    </div>

                    <form onSubmit={handleSubmit} className="flex-1 flex items-center space-x-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Input directive..."
                            className="flex-1 bg-[#1a1a1a] rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#00f3ff] border border-white/5 font-mono text-sm"
                            disabled={isLoading}
                        />
                        <button
                            type="submit"
                            disabled={isLoading || (!input.trim() && !selectedImage)}
                            className={`bg-[#00f3ff]/10 text-[#00f3ff] p-2.5 rounded-full hover:bg-[#00f3ff]/20 transition-colors border border-[#00f3ff]/20 ${(!input.trim() && !selectedImage) ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            <Send className="w-5 h-5" />
                        </button>
                    </form>
                </div>
            </div>

            <ImageLightbox
                src={lightboxImage?.src || ''}
                alt={lightboxImage?.alt || ''}
                isOpen={!!lightboxImage}
                onClose={() => setLightboxImage(null)}
            />
        </div>
    );
}
