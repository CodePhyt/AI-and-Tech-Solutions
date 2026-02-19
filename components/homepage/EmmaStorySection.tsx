'use client';

import { useState } from 'react';
import { Play, Star, Quote, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import VideoModal from '@/components/ui/VideoModal';

export default function SharidaStorySection() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <section className="relative py-32 overflow-hidden bg-slate-950">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />
            <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-[#006064]/10 rounded-full blur-[120px]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* Visual Side */}
                    <div className="relative group order-2 lg:order-1">
                        {/* Elite Transformation Card */}
                        <div className="relative z-10 transform transition-transform duration-700 group-hover:scale-[1.01]">
                            <div className="absolute -inset-4 bg-gradient-to-r from-[#ffd700]/10 to-[#006064]/10 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />

                            <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden bg-slate-900 border border-[#ffd700]/20 shadow-2xl">
                                {/* Split Image Layout */}
                                <div className="absolute inset-0 flex flex-col">
                                    <div className="h-1/2 relative overflow-hidden group/before">
                                        <div className="absolute inset-0 bg-slate-950/40 z-10 flex items-center justify-center">
                                            <span className="bg-slate-950/80 px-6 py-2 rounded-full text-xs font-bold text-white/60 tracking-widest backdrop-blur-md border border-white/5 uppercase">Baseline State</span>
                                        </div>
                                        <img
                                            src="/assets/stories/emma-before.png"
                                            alt="Sharida Baseline"
                                            className="w-full h-full object-cover grayscale opacity-80 group-hover/before:grayscale-0 group-hover/before:opacity-100 transition-all duration-700"
                                            onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80' }}
                                        />
                                    </div>
                                    <div className="h-1/2 relative overflow-hidden group/after">
                                        <div className="absolute inset-0 bg-slate-950/20 z-10 flex items-center justify-center">
                                            <span className="bg-[#ffd700] px-6 py-2 rounded-full text-xs font-bold text-white shadow-[0_0_20px_rgba(255,215,0,0.4)] tracking-widest uppercase">Institutional Result</span>
                                        </div>
                                        <img
                                            src="/assets/stories/emma-after.png"
                                            alt="Sharida Result"
                                            className="w-full h-full object-cover group-hover/after:scale-105 transition-all duration-700"
                                            onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80' }}
                                        />
                                    </div>
                                </div>

                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setIsVideoOpen(true)}
                                        className="w-24 h-24 bg-[#ffd700]/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-[#ffd700]/40 text-white pointer-events-auto shadow-[0_0_50px_rgba(255,215,0,0.3)] hover:bg-[#ffd700]/40 transition-all group/btn"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-[#ffd700] flex items-center justify-center shadow-lg group-hover/btn:shadow-[#ffd700]/40 transition-shadow">
                                            <Play className="w-8 h-8 ml-1 text-white fill-white" />
                                        </div>
                                    </motion.button>
                                </div>
                            </div>
                        </div>

                        {/* Profile Badge */}
                        <div className="absolute -bottom-8 -right-8 z-30 crystal-card p-6 border-[#ffd700]/30 shadow-2xl flex items-center gap-6 max-w-xs animate-float">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#ffd700]">
                                <img src="/assets/stories/emma-profile.png" alt="Sharida M" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold leading-none mb-1">Sharida M.</h4>
                                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-2">Verified Patient</p>
                                <div className="flex text-[#ffd700] gap-0.5">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="order-1 lg:order-2">
                        <div className="inline-flex items-center space-x-3 px-4 py-2 bg-[#ffd700]/10 rounded-full border border-[#ffd700]/20 text-[#ffd700] font-bold text-[10px] uppercase tracking-[0.2em] mb-10">
                            <ShieldCheck className="w-4 h-4" />
                            <span>Verified Enterprise Project</span>
                        </div>

                        <h2 className="text-5xl md:text-7xl font-bold text-white mb-10 leading-[1.1] tracking-tighter">
                            &quot;I finally feel like <span className="text-[#ffd700]">Myself</span> again.&quot;
                        </h2>

                        <div className="relative mb-12">
                            <Quote className="absolute -top-8 -left-8 w-16 h-16 text-[#ffd700]/10" />
                            <p className="text-2xl text-slate-300 leading-relaxed font-light italic pl-4 border-l-2 border-[#ffd700]/30">
                                &quot;The level of coordination was institutional. From initial consultation to final deployment, the agency managed every technical detail. I achieved 75% cost optimization without compromising on the enterprise-grade infrastructure I required.&quot;
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                            {[
                                { label: 'Units Placed', val: '22' },
                                { label: 'Stay Duration', val: '5 Days' },
                                { label: 'Protocol', val: 'Sovereign' },
                                { label: 'Warranty', val: 'Ironclad' }
                            ].map((stat, i) => (
                                <div key={i} className="crystal-card p-5 border-white/5 bg-slate-900/40 text-center">
                                    <div className="text-2xl font-bold text-white mb-1">{stat.val}</div>
                                    <div className="text-[9px] text-slate-500 font-black uppercase tracking-widest">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6">
                            <button
                                onClick={() => setIsVideoOpen(true)}
                                className="btn-primary flex-1 !py-5 flex items-center justify-center gap-4 text-sm group"
                            >
                                <Play className="w-5 h-5 fill-white" />
                                Watch Transformation
                            </button>
                            <Link
                                href="/smile-gallery"
                                className="btn-secondary flex-1 !py-5 flex items-center justify-center gap-4 text-sm group"
                            >
                                View Gallery <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <div className="mt-8 flex items-center gap-3 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                            <CheckCircle2 className="w-4 h-4 text-[#ffd700]" />
                            Consent granted for educational purposes by patient.
                        </div>
                    </div>
                </div>
            </div>

            <VideoModal
                isOpen={isVideoOpen}
                onClose={() => setIsVideoOpen(false)}
                videoId="R-NB3J3QIiA"
            />
        </section >
    );
}
