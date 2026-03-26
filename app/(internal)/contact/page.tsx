'use client';

import { MessageCircle, Shield, Clock, MapPin, Mail, Phone, Cpu, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
    const handleWhatsAppConnect = () => {
        const message = encodeURIComponent(
            `Hello! I'd like to initiate a secure technical consultation regarding my project infrastructure.`
        );
        window.open(`https://wa.me/491713474348?text=${message}`, '_blank');
    };

    return (
        <div className="min-h-screen pt-20 bg-[#0a0a0a]">
            {/* Hero Section */}
            <section className="section-container py-20">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center space-x-3 px-6 py-2 bg-[#ffd700]/10 rounded-full border border-[#ffd700]/20 text-[#ffd700] font-bold text-[10px] uppercase tracking-[0.3em] mb-10"
                    >
                        <Shield className="w-4 h-4" />
                        <span>Encrypted Communication Protocol</span>
                    </motion.div>

                    <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
                        Secure Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] to-[#ffd700]/80">Digital Future</span>
                    </h1>

                    <p className="text-2xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
                        Detailed technical analysis by Osman Kadir and our Engineering Board. Professional execution starts here.
                    </p>
                </div>

                {/* Main WhatsApp Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#00d4ff]/30 via-[#00d4ff]/20 to-[#00a5cc]/30 p-1">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#ffd700]/20 via-transparent to-[#ffd700]/20 animate-pulse" />

                        <div className="relative bg-[#0a0a0a] rounded-3xl p-12 md:p-16">
                            <div className="text-center">
                                <div className="w-24 h-24 bg-[#25D366]/10 rounded-full flex items-center justify-center mx-auto mb-8 border-2 border-[#25D366]/30 relative">
                                    <motion.div
                                        className="absolute inset-0 rounded-full border-2 border-[#25D366] opacity-75"
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                    <MessageCircle className="w-12 h-12 text-[#25D366]" />
                                </div>

                                <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">
                                    Initiate Signal via WhatsApp
                                </h2>

                                <p className="text-xl text-slate-400 mb-10 max-w-xl mx-auto font-light">
                                    Available for high-priority technical consultations. Response time guaranteed within 15 minutes for verified clients.
                                </p>

                                <button
                                    onClick={handleWhatsAppConnect}
                                    className="group relative inline-flex items-center justify-center gap-4 px-12 py-6 bg-[#25D366] text-white font-black rounded-2xl text-sm uppercase tracking-[0.2em] shadow-[0_20px_60px_rgba(37,211,102,0.4)] hover:shadow-[0_30px_80px_rgba(37,211,102,0.6)] transition-all hover:-translate-y-1"
                                >
                                    <MessageCircle className="w-6 h-6" />
                                    <span>Execute Handshake</span>
                                    <motion.div
                                        className="absolute -inset-1 bg-[#25D366]/50 rounded-2xl blur-xl"
                                        animate={{ opacity: [0.5, 0.8, 0.5] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                </button>

                                <div className="mt-8 flex items-center justify-center gap-2 text-[#25D366] text-xs font-bold uppercase tracking-widest">
                                    <Clock className="w-4 h-4" />
                                    <span>Average Latency: &lt; 15 Minutes</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Details */}
                <div className="max-w-3xl mx-auto mt-20 grid md:grid-cols-3 gap-8">
                    <div className="crystal-card p-8 text-center border-white/5 bg-slate-900/40">
                        <div className="w-14 h-14 bg-[#ffd700]/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#ffd700]/30">
                            <MapPin className="w-7 h-7 text-[#ffd700]" />
                        </div>
                        <h3 className="text-white font-bold mb-2 text-sm uppercase tracking-widest">Nexus</h3>
                        <p className="text-slate-400 text-sm">Neuhaus, Germany</p>
                    </div>

                    <div className="crystal-card p-8 text-center border-white/5 bg-slate-900/40">
                        <div className="w-14 h-14 bg-[#ffd700]/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#ffd700]/30">
                            <Phone className="w-7 h-7 text-[#ffd700]" />
                        </div>
                        <h3 className="text-white font-bold mb-2 text-sm uppercase tracking-widest">WhatsApp Signal</h3>
                        <a href="https://wa.me/491713474348" className="text-slate-400 hover:text-[#ffd700] transition-colors text-sm">
                            +49 171 3474348
                        </a>
                    </div>

                    <div className="crystal-card p-8 text-center border-white/5 bg-slate-900/40">
                        <div className="w-14 h-14 bg-[#ffd700]/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#ffd700]/30">
                            <Mail className="w-7 h-7 text-[#ffd700]" />
                        </div>
                        <h3 className="text-white font-bold mb-2 text-sm uppercase tracking-widest">Comm Link</h3>
                        <a href="mailto:contact@osmankadir.tech" className="text-slate-400 hover:text-[#ffd700] transition-colors text-sm">
                            contact@osmankadir.tech
                        </a>
                    </div>
                </div>

                {/* Trust Indicators */}
                <div className="max-w-2xl mx-auto mt-16 text-center">
                    <div className="flex items-center justify-center gap-12 opacity-40">
                        <div className="flex items-center gap-3">
                            <Lock className="w-5 h-5 text-slate-500" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">PGP Encrypted</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Cpu className="w-5 h-5 text-slate-500" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Sovereign Data</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
