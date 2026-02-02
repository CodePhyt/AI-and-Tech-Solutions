'use client';

import { MessageCircle, Shield, Clock, MapPin, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Metadata } from 'next';

export default function ContactPage() {
    const handleWhatsAppConnect = () => {
        const message = encodeURIComponent(
            `Hello! I'd like to speak with a Personal Coordinator about my dental journey.`
        );
        window.open(`https://wa.me/905302876350?text=${message}`, '_blank');
    };

    return (
        <div className="min-h-screen pt-20 bg-slate-950">
            {/* Hero Section */}
            <section className="section-container py-20">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center space-x-3 px-6 py-2 bg-[#C5A059]/10 rounded-full border border-[#C5A059]/20 text-[#C5A059] font-bold text-[10px] uppercase tracking-[0.3em] mb-10"
                    >
                        <Shield className="w-4 h-4" />
                        <span>Direct Liaison Protocol</span>
                    </motion.div>

                    <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] to-[#B08D47]">Direct Line</span>
                    </h1>

                    <p className="text-2xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
                        No middleman. No forms. No waiting. Chat directly with your Personal Coordinator.
                    </p>
                </div>

                {/* Main WhatsApp Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#006064] via-[#006064] to-[#004D40] p-1">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#C5A059]/20 via-transparent to-[#C5A059]/20 animate-pulse" />

                        <div className="relative bg-slate-950 rounded-3xl p-12 md:p-16">
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
                                    Connect via WhatsApp
                                </h2>

                                <p className="text-xl text-slate-400 mb-10 max-w-xl mx-auto font-light">
                                    Instant access to your vetted Personal Coordinator. Available 7 days a week for comprehensive consultation and strategic planning.
                                </p>

                                <button
                                    onClick={handleWhatsAppConnect}
                                    className="group relative inline-flex items-center justify-center gap-4 px-12 py-6 bg-[#25D366] text-white font-black rounded-2xl text-sm uppercase tracking-[0.2em] shadow-[0_20px_60px_rgba(37,211,102,0.4)] hover:shadow-[0_30px_80px_rgba(37,211,102,0.6)] transition-all hover:-translate-y-1"
                                >
                                    <MessageCircle className="w-6 h-6" />
                                    <span>Open Direct Line</span>
                                    <motion.div
                                        className="absolute -inset-1 bg-[#25D366]/50 rounded-2xl blur-xl"
                                        animate={{ opacity: [0.5, 0.8, 0.5] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                </button>

                                <div className="mt-8 flex items-center justify-center gap-2 text-[#25D366] text-xs font-bold uppercase tracking-widest">
                                    <Clock className="w-4 h-4" />
                                    <span>Average Response Time: &lt; 14 Minutes</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Details */}
                <div className="max-w-3xl mx-auto mt-20 grid md:grid-cols-3 gap-8">
                    <div className="crystal-card p-8 text-center border-white/5 bg-slate-900/40">
                        <div className="w-14 h-14 bg-[#C5A059]/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#C5A059]/30">
                            <MapPin className="w-7 h-7 text-[#C5A059]" />
                        </div>
                        <h3 className="text-white font-bold mb-2 text-sm uppercase tracking-widest">Location</h3>
                        <p className="text-slate-400 text-sm">Antalya, Turkey</p>
                    </div>

                    <div className="crystal-card p-8 text-center border-white/5 bg-slate-900/40">
                        <div className="w-14 h-14 bg-[#C5A059]/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#C5A059]/30">
                            <Phone className="w-7 h-7 text-[#C5A059]" />
                        </div>
                        <h3 className="text-white font-bold mb-2 text-sm uppercase tracking-widest">Direct Line</h3>
                        <a href="tel:+905302876350" className="text-slate-400 hover:text-[#C5A059] transition-colors text-sm">
                            +90 530 287 63 50
                        </a>
                    </div>

                    <div className="crystal-card p-8 text-center border-white/5 bg-slate-900/40">
                        <div className="w-14 h-14 bg-[#C5A059]/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#C5A059]/30">
                            <Mail className="w-7 h-7 text-[#C5A059]" />
                        </div>
                        <h3 className="text-white font-bold mb-2 text-sm uppercase tracking-widest">Email</h3>
                        <a href="mailto:nnesipoglu@outlook.com" className="text-slate-400 hover:text-[#C5A059] transition-colors text-sm">
                            nnesipoglu@outlook.com
                        </a>
                    </div>
                </div>

                {/* Trust Indicators */}
                <div className="max-w-2xl mx-auto mt-16 text-center">
                    <div className="flex items-center justify-center gap-12 opacity-40">
                        <div className="flex items-center gap-3">
                            <Shield className="w-5 h-5 text-slate-500" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Encrypted</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Shield className="w-5 h-5 text-slate-500" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">HIPAA Compliant</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
