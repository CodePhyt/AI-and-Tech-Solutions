'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Zap, Cpu, Rss } from 'lucide-react';
import Link from 'next/link';
import { useLang, t } from '@/lib/lang-context';
import { useEffect, useState } from 'react';

const TICKER_ITEMS = [
    { label: 'ArXiv', text: 'Tracking daily AI papers — every morning, before 07:00' },
    { label: 'GitHub', text: 'Monitoring trending repos & new model releases' },
    { label: 'HuggingFace', text: 'Evaluating newly released open-weights LLMs' },
    { label: 'Status', text: 'Faster than the market — today\'s AI, deployed today' },
];

export default function CinematicHero() {
    const { lang } = useLang();
    const [tickerIndex, setTickerIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTickerIndex(i => (i + 1) % TICKER_ITEMS.length);
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    const headline = t(
        'Die Zukunft der KI –\nHeute implementiert.',
        'Future AI Solutions –\nDeployed Today.',
        lang
    );
    const subline = t(
        'Osman Kadir — Human-in-the-Loop Architekt, der einen Schwarm autonomer KI-Agenten orchestriert.',
        'Osman Kadir — Human-in-the-Loop Architect orchestrating a swarm of autonomous AI agents.',
        lang
    );
    const cta1 = t('Transformation starten', 'Start Transformation', lang);
    const cta2 = t('Leistungen entdecken', 'Explore Services', lang);
    const badge = t('KI & Tech Lösungen — Neuhaus am Rennweg', 'AI & Tech Solutions — Neuhaus am Rennweg', lang);

    return (
        <section className="relative h-screen min-h-[700px] overflow-hidden bg-[#0a0a0a]">
            {/* Animated Background */}
            <div className="absolute inset-0 z-0">
                {/* SVG hero background — Cyberpunk Berlin network */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/hero-bg.svg"
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover opacity-90"
                />
                {/* Overlay gradients */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/70 via-[#0d1117]/30 to-[#0a0a0a]/70" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#00d4ff]/6 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#ffd700]/4 via-transparent to-transparent" />

                {/* Orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00d4ff]/8 rounded-full blur-[120px] animate-float" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#ffd700]/6 rounded-full blur-[100px] animate-float-delayed" />

                {/* Bottom fade */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/40 via-transparent to-[#0a0a0a]" />
            </div>

            {/* Agent node decorations — right side */}
            <div className="absolute right-0 top-0 bottom-0 w-1/3 z-0 hidden lg:flex flex-col justify-center items-center gap-6 opacity-20 pointer-events-none">
                {['Agent-01', 'Agent-02', 'Agent-03', 'Orchestrator'].map((name, i) => (
                    <motion.div
                        key={name}
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.5 + i * 0.3, duration: 0.8 }}
                        className="flex items-center gap-3"
                    >
                        <div className="w-2 h-2 rounded-full bg-[#00d4ff] shadow-[0_0_8px_#00d4ff]" />
                        <span className="text-[10px] font-mono text-[#00d4ff] tracking-widest">{name}</span>
                        <div className="w-16 h-px bg-gradient-to-r from-[#00d4ff]/50 to-transparent" />
                    </motion.div>
                ))}
            </div>

            {/* Core Content */}
            <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
                <div className="max-w-5xl">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="inline-flex items-center gap-3 px-5 py-2.5 bg-[#00d4ff]/8 rounded-full border border-[#00d4ff]/20 text-[#00d4ff] font-bold text-[10px] uppercase tracking-[0.4em] mb-10 shadow-[0_0_30px_rgba(0,212,255,0.08)]"
                    >
                        <Zap className="w-4 h-4" />
                        <span>{badge}</span>
                    </motion.div>

                    {/* Main Headline — bilingual */}
                    <motion.h1
                        key={`headline-${lang}`}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl lg:text-[80px] font-bold text-white mb-8 leading-[1.05] tracking-tighter font-sans whitespace-pre-line"
                    >
                        {headline.split('\n').map((line, i) =>
                            i === 0 ? (
                                <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#00d4ff]/80 block">
                                    {line}
                                </span>
                            ) : (
                                <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] via-[#ffd700]/90 to-[#ffd700]/70 block">
                                    {line}
                                </span>
                            )
                        )}
                    </motion.h1>

                    {/* Sub-headline */}
                    <motion.p
                        key={`subline-${lang}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        className="text-lg md:text-xl text-[#e5e5e5]/70 mb-4 max-w-3xl font-light leading-relaxed font-body"
                    >
                        {subline}
                    </motion.p>

                    {/* Live Ticker */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex items-center gap-3 mb-14 text-[11px] font-mono"
                    >
                        <div className="flex items-center gap-2 px-3 py-1 bg-[#00d4ff]/10 border border-[#00d4ff]/20 rounded-full">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] animate-pulse" />
                            <Rss className="w-3 h-3 text-[#00d4ff]" />
                            <span className="text-[#00d4ff] font-bold tracking-widest uppercase">{TICKER_ITEMS[tickerIndex].label}</span>
                        </div>
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={tickerIndex}
                                initial={{ opacity: 0, y: 4 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -4 }}
                                transition={{ duration: 0.3 }}
                                className="text-slate-500"
                            >
                                {TICKER_ITEMS[tickerIndex].text}
                            </motion.span>
                        </AnimatePresence>
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.9 }}
                        className="flex flex-col sm:flex-row gap-6 items-start"
                    >
                        <Link
                            href="/contact"
                            className="btn-glow group px-12 py-5 bg-gradient-to-r from-[#00d4ff] to-[#00d4ff]/80 text-[#0a0a0a] font-extrabold rounded-lg text-xs uppercase tracking-[0.25em] hover:-translate-y-1 transition-all flex items-center gap-4"
                        >
                            {cta1}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/services"
                            className="px-12 py-5 bg-white/5 text-[#e5e5e5] font-bold rounded-lg text-xs uppercase tracking-[0.2em] border border-white/10 hover:border-[#00d4ff]/30 hover:bg-white/10 transition-all"
                        >
                            {cta2}
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Cue */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none"
            >
                <span className="text-white/30 text-[9px] font-bold uppercase tracking-[0.5em]">
                    {t('Entdecken', 'Explore', lang)}
                </span>
                <div className="w-px h-10 bg-gradient-to-b from-[#00d4ff]/50 to-transparent" />
            </motion.div>
        </section>
    );
}
