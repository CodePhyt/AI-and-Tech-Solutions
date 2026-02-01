'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { MessageCircle, X, Send, Loader2, Mic, Check, CheckCheck, Paperclip, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import SafiyeProfileModal from './SafiyeProfileModal';
import ImageLightbox from './ImageLightbox';
import TypingIndicator from './TypingIndicator';
import ImageUploader from './ImageUploader';

interface Message {
    role: 'user' | 'assistant' | 'system';
    content: string;
    image?: string;
    timestamp: Date;
    status?: 'sent' | 'delivered' | 'read';
}

export default function ChatWidget() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            role: 'assistant',
            content: 'Hello! 👋 I\'m Safiye, your personal Smile Turkey concierge.\n\nI can help you with:\n• Treatment Plans & Costs 💰\n• Hotel & Flight Packages ✈️\n• Free Consultation Bookings 📅\n\nHow can I assist you today?',
            timestamp: new Date(),
            status: 'read'
        },
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isTyping, setIsTyping] = useState(false); // Visual typing indicator
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [hasUnread, setHasUnread] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);
    const [selectedImage, setSelectedImage] = useState<{ file: File; preview: string } | null>(null);
    const [sessionId, setSessionId] = useState<string>('');

    useEffect(() => {
        let sid = localStorage.getItem('smile_chat_session_id');
        if (!sid) {
            sid = crypto.randomUUID();
            localStorage.setItem('smile_chat_session_id', sid);
        }
        setSessionId(sid);
    }, []);

    const handleWhatsAppHandoff = () => {
        // Filter out system messages for cleaner summary
        const summary = messages
            .filter(m => m.role !== 'system')
            .map(m => `${m.role === 'user' ? '👤 Client' : '👩‍⚕️ Safiye'}: ${m.content}`)
            .join('\n\n');

        const text = `*New Patient Inquiry via Safiye AI* 🦷\n\n${summary}\n\n(Link to attachments/full history unavailable in MVP)`;
        const url = `https://wa.me/905302876350?text=${encodeURIComponent(text)}`;
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

        // Auto-open chat after 3 seconds for engagement (Homepage only)
        if (pathname === '/') {
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 3000);
            return () => clearTimeout(timer);
        }

        const checkForAssessment = () => {
            const assessmentData = sessionStorage.getItem('smile_assessment_data');
            if (assessmentData) {
                try {
                    const data = JSON.parse(assessmentData);
                    setMessages(prev => {
                        const hasAssessmentMsg = prev.some(m => m.content.includes("I see you've completed your assessment"));
                        if (hasAssessmentMsg) return prev;

                        return [
                            ...prev,
                            {
                                role: 'assistant',
                                content: `Hello ${data.name}! 🌟\n\nI see you've completed your assessment for **${data.treatment}**. I have your details ready.\n\nWould you like me to prepare a personalized package with pricing for you?`,
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

        // Simulate "Delivered" status shortly after
        setTimeout(() => {
            setMessages(prev => prev.map(m => m === userMessage ? { ...m, status: 'delivered' } : m));
        }, 1000);

        try {
            // Include assessment context if available
            const assessmentData = sessionStorage.getItem('smile_assessment_data');
            let contextMessage = null;
            if (assessmentData) {
                contextMessage = { role: 'system', content: `[SYSTEM_CONTEXT] User Assessment Data: ${assessmentData}` };
            }

            const apiMessages = messages.map(({ role, content }) => ({ role, content }));
            if (contextMessage) apiMessages.unshift(contextMessage as any);

            // Add user message with context if image exists
            let contentToSend = msgContent;
            if (msgImage) {
                contentToSend = `[User uploaded an image] ${msgContent}`;
            }
            apiMessages.push({ role: 'user', content: contentToSend });


            const requestBody: any = {
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

            // Artificial delay for "Reading/Typing" feel based on response length
            const delay = Math.min(data.message.length * 30 + 800, 5000);

            // Mark user message as read right before replying
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
                if (!isOpen) setHasUnread(true); // Notify if closed
            }, delay);

        } catch (error) {
            console.error('Chat error:', error);
            setIsLoading(false);
            setIsTyping(false);
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: "I'm having trouble connecting right now. Please try again or check your internet connection. 🌐",
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


    // Render WhatsApp Button if detected in content
    const renderContent = (content: string) => {
        // Simple parser for [ACTION:WHATSAPP:message]
        // This allows the LLM to trigger a button render
        // Format: Normal text... [WHATSAPP_LINK:Hello I need help:Send to Dr. Nesip]

        const whatsappRegex = /\[WHATSAPP_LINK:(.*):([^\]]+)\]/;
        const match = content.match(whatsappRegex);

        if (match) {
            const [_, preFillMsg, btnText] = match;
            const cleanContent = content.replace(match[0], '').trim();
            const phone = "905302876350";
            const link = `https://wa.me/${phone}?text=${encodeURIComponent(preFillMsg)}`;

            return (
                <div className="space-y-3">
                    <p className="whitespace-pre-wrap">{cleanContent}</p>
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 px-4 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                        <MessageCircle className="w-5 h-5 fill-current" />
                        <span>{btnText}</span>
                    </a>
                </div>
            );
        }

        return <p className="whitespace-pre-wrap">{content}</p>;
    };

    if (!isOpen) {
        return (
            <motion.div
                className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2 pointer-events-none"
            >
                {/* Notification Bubble */}
                <AnimatePresence>
                    {hasUnread && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, x: 20 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="bg-white text-slate-900 px-4 py-2 rounded-2xl rounded-tr-none shadow-xl border border-slate-100 mb-2 pointer-events-auto cursor-pointer"
                            onClick={() => setIsOpen(true)}
                        >
                            <p className="text-sm font-medium">Hello! Safiye here 👋</p>
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.button
                    onClick={() => setIsOpen(true)}
                    className="w-16 h-16 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full shadow-2xl flex items-center justify-center glow pointer-events-auto relative"
                    aria-label="Open chat"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping" />
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white">
                        {/* Fallback to icon if image fails, but ideally use image */}
                        <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                            <img
                                src="/safiye_concierge_avatar.png" // Assuming generated asset name
                                alt="Safiye"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.parentElement?.classList.add('bg-gradient-to-br', 'from-sky-500', 'to-cyan-500');
                                }}
                            />
                            <MessageCircle className="w-8 h-8 text-white absolute" style={{ display: 'none' }} />
                        </div>
                    </div>
                    {hasUnread && (
                        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs flex items-center justify-center rounded-full border-2 border-white font-bold">1</span>
                    )}
                </motion.button>
            </motion.div>
        );
    }

    return (
        <div className="fixed bottom-6 right-6 z-50 w-full sm:w-[400px] h-[600px] max-h-[85vh] overflow-hidden flex flex-col shadow-2xl rounded-2xl ring-1 ring-white/10" style={{ backgroundColor: '#0B141A' }}>
            {/* Header - WhatsApp Business Style */}
            <div className="bg-[#128C7E] p-4 flex items-center justify-between shadow-md">
                <div className="flex items-center space-x-3">
                    <div className="relative">
                        <div
                            className="w-11 h-11 rounded-full border-2 border-white/30 overflow-hidden relative cursor-pointer hover:border-white/50 transition-colors"
                            onClick={() => setIsProfileOpen(true)}
                            title="View Safiye's Profile"
                        >
                            <img
                                src="/safiye_concierge_avatar.png"
                                alt="Safiye"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <motion.div
                            className="absolute bottom-0 right-0 w-3 h-3 bg-white rounded-full border-2 border-[#128C7E]"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </div>
                    <div>
                        <div className="font-semibold text-white flex items-center text-[15px]">
                            Safiye
                            <span className="ml-2 px-1.5 py-0.5 bg-white/20 text-white text-[9px] rounded uppercase font-bold tracking-wider">AI</span>
                        </div>
                        <div className="text-[12px] text-white/80 font-normal">Online now</div>
                    </div>
                </div>
                <div className="flex items-center space-x-1">
                    <button
                        onClick={handleWhatsAppHandoff}
                        className="text-white/80 hover:text-white hover:bg-white/10 p-2 rounded-full transition-colors mr-1"
                        title="Send Summary to Dr. Nesip"
                    >
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                    </button>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-white/80 hover:text-white hover:bg-white/10 p-2 rounded-full transition-colors"
                        aria-label="Close chat"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Messages Area - WhatsApp Style with Pattern Background */}
            <div
                className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
                style={{
                    background: '#0B141A',
                    backgroundImage: `
                        radial-gradient(circle at 20% 50%, rgba(14, 165, 233, 0.03) 0%, transparent 50%),
                        radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.03) 0%, transparent 50%)
                    `
                }}
            >
                {/* Encryption Notice */}
                <div className="flex justify-center my-4">
                    <div className="bg-[#1F2C34] text-[#FFD279] text-[10px] px-3 py-1.5 rounded-lg text-center shadow-sm max-w-[280px]">
                        🔒 Messages are end-to-end encrypted. Safiye is an AI powered assistant.
                    </div>
                </div>

                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} mb-3`}
                    >
                        {message.role === 'assistant' && (
                            <div className="w-8 h-8 rounded-full overflow-hidden mr-2 flex-shrink-0 mt-1">
                                <img src="/safiye_concierge_avatar.png" className="w-full h-full object-cover" alt="S" />
                            </div>
                        )}

                        <div
                            className={`relative max-w-[85%] rounded-2xl px-4 py-3 shadow-sm ${message.role === 'user'
                                ? 'bg-[#005C4B] text-white rounded-tr-none'
                                : 'bg-[#202C33] text-slate-100 rounded-tl-none'
                                }`}
                        >
                            {message.image && (
                                <div className="mb-2 relative rounded-lg overflow-hidden cursor-pointer bg-black/20" onClick={() => setLightboxImage({ src: message.image!, alt: 'User upload' })}>
                                    <img src={message.image} alt="Upload" className="w-full h-auto max-h-60 object-cover" />
                                </div>
                            )}


                            <div className="text-[15px] leading-relaxed">
                                {renderContent(message.content)}
                            </div>

                            {/* Metadata */}
                            <div className={`text-[10px] mt-1 flex items-center justify-end space-x-1 ${message.role === 'user' ? 'text-white/60' : 'text-slate-400'}`}>
                                <span>{formatTime(message.timestamp)}</span>
                                {message.role === 'user' && (
                                    <span>
                                        {message.status === 'sent' && <Check className="w-3 h-3" />}
                                        {message.status === 'delivered' && <CheckCheck className="w-3 h-3" />}
                                        {message.status === 'read' && <CheckCheck className="w-3 h-3 text-sky-400" />}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}

                {isTyping && (
                    <div className="flex justify-start items-center space-x-2">
                        <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                            <img src="/safiye_concierge_avatar.png" className="w-full h-full object-cover" alt="S" />
                        </div>
                        <div className="bg-[#202C33] p-3 rounded-2xl rounded-tl-none flex space-x-1">
                            <motion.div
                                className="w-2 h-2 bg-slate-400 rounded-full"
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                            />
                            <motion.div
                                className="w-2 h-2 bg-slate-400 rounded-full"
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                            />
                            <motion.div
                                className="w-2 h-2 bg-slate-400 rounded-full"
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                            />
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="bg-[#202C33] p-2 flex flex-col space-y-2">
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
                            currentImage={null} // Button only mode
                        />
                    </div>

                    <form onSubmit={handleSubmit} className="flex-1 flex items-center space-x-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Message"
                            className="flex-1 bg-[#2A3942] rounded-lg px-4 py-2.5 text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-500"
                            disabled={isLoading}
                        />
                        <button
                            type="submit"
                            disabled={isLoading || (!input.trim() && !selectedImage)}
                            className={`bg-[#005C4B] text-white p-2.5 rounded-full hover:bg-[#00a884] transition-colors ${(!input.trim() && !selectedImage) ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            <Send className="w-5 h-5" />
                        </button>
                    </form>
                </div>
            </div>

            {/* Modals */}
            <SafiyeProfileModal isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
            <ImageLightbox
                src={lightboxImage?.src || ''}
                alt={lightboxImage?.alt || ''}
                isOpen={!!lightboxImage}
                onClose={() => setLightboxImage(null)}
            />
        </div>
    );
}
