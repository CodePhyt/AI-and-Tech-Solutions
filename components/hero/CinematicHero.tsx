'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ShieldCheck, ArrowRight, Play, Star } from 'lucide-react';
import Link from 'next/link';

export default function CinematicHero() {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const HERO_VIDEOS = [
        '/tech-hero-1.mp4', // Placeholder
        '/tech-hero-2.mp4', // Placeholder
    ];

    const handleVideoEnded = () => {
        setCurrentVideoIndex((prev) => (prev + 1) % HERO_VIDEOS.length);
    };

    return (
        <section className="relative h-screen min-h-[700px] overflow-hidden bg-slate-950">
            {/* Background Intelligence */}
            <div className="absolute inset-0 z-0">
                <video
                    key={HERO_VIDEOS[currentVideoIndex]}
                    autoPlay
                    muted
                    playsInline
                    preload="auto"
                    onEnded={handleVideoEnded}
                    onError={() => handleVideoEnded()}
                    className="w-full h-full object-cover scale-[1.02] opacity-50 grayscale-[0.2]"
                >
                    <source src={HERO_VIDEOS[currentVideoIndex]} type="video/mp4" />
                </video>

                {/* Institutional Gradient Wash */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-slate-950"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950/40"></div>
            </div>

            {/* Core Interface */}
            <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="inline-flex items-center space-x-3 px-5 py-2 bg-[#C5A059]/10 rounded-full border border-[#C5A059]/20 text-[#C5A059] font-black text-[10px] uppercase tracking-[0.4em] mb-12 shadow-[0_0_30px_rgba(197,160,89,0.1)]"
                    >
                        <ShieldCheck className="w-4 h-4" />
                        <span>KI & Software Architecture</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-6xl md:text-8xl lg:text-[90px] font-bold text-white mb-10 leading-[0.9] tracking-tighter"
                    >
                        We build the future with AI. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] via-[#B08D47] to-[#C5A059] bg-size-200 animate-gradient">Connect it with Code.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="text-xl md:text-2xl text-slate-400 mb-14 drop-shadow-lg max-w-2xl font-light leading-relaxed"
                    >
                        Custom AI Agents, Smart Home Labs, and Global Trade Solutions. <span className="text-white font-bold">Osman Kadir</span> connects digital intelligence with real-world engineering.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-6 items-center"
                    >
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto px-12 py-6 bg-[#C5A059] text-white font-black rounded-xl text-[10px] uppercase tracking-[0.3em] shadow-[0_20px_40px_rgba(197,160,89,0.3)] hover:shadow-[0_20px_40px_rgba(197,160,89,0.5)] hover:-translate-y-1 transition-all flex items-center justify-center gap-4 group"
                        >
                            Initiate Protocol
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <div className="flex items-center gap-8 pl-4 border-l border-white/10 h-16 hidden md:flex">
                            <div className="text-center">
                                <p className="text-white font-bold text-xl leading-none mb-1">100%</p>
                                <div className="flex text-[#C5A059] gap-0.5">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-2.5 h-2.5 fill-current" />)}
                                </div>
                            </div>
                            <div className="text-left">
                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none mb-1">Code Quality</p>
                                <p className="text-white text-sm font-bold tracking-tight">Enterprise Grade</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Cinematic Floating Elements */}
            <div className="absolute top-20 right-[10%] w-[30%] h-[30%] bg-[#006064]/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
            <div className="absolute bottom-20 left-[5%] w-[20%] h-[20%] bg-[#C5A059]/5 rounded-full blur-[100px] pointer-events-none transition-opacity"></div>

            {/* Interaction Cue */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-12 right-12 text-white/40 text-[9px] font-black uppercase tracking-[0.5em] flex items-center gap-6 pointer-events-none"
            >
                <span className="hidden sm:block">Explore Technical Pillars</span>
                <div className="w-px h-12 bg-gradient-to-b from-[#C5A059] to-transparent" />
            </motion.div>
        </section>
    );
}
