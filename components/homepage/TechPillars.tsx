'use client';

import { motion } from 'framer-motion';
import { Cpu, Home, Globe, Briefcase, Video, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useLang } from '@/lib/lang-context';

const PILLARS = [
    {
        id: 'ai-software',
        title: 'AI & Software',
        titleDE: 'KI & Software',
        icon: Cpu,
        descDE: 'Autonome Agenten, RAG-Pipelines & lokale LLM-Deployments. Ich baue intelligente Systeme mit LangGraph, n8n & Ollama — täglich aktuell durch ArXiv-Scanning.',
        descEN: 'Autonomous agents, RAG pipelines & local LLM deployments. Built with LangGraph, n8n & Ollama — updated daily through ArXiv scanning.',
        scopeNote: null,
        color: 'text-[#00d4ff]',
        bg: 'bg-[#00d4ff]/10',
        borderHover: 'hover:border-[#00d4ff]/40',
        shadowHover: 'hover:shadow-[0_0_30px_rgba(0,212,255,0.1)]',
    },
    {
        id: 'smart-home',
        title: 'Smart Home Lab',
        titleDE: 'Smart Home Lab',
        icon: Home,
        descDE: 'Zigbee, Home Assistant & Energieeffizienz-Beratung. Vollständige Systemintegration & Softwarekonfiguration für moderne Wohnräume.',
        descEN: 'Zigbee, Home Assistant & energy efficiency consulting. Full system integration and software configuration for modern living.',
        scopeNote: 'Reine Systemintegration – kein Handwerk.',
        color: 'text-emerald-400',
        bg: 'bg-emerald-400/10',
        borderHover: 'hover:border-emerald-400/40',
        shadowHover: 'hover:shadow-[0_0_30px_rgba(52,211,153,0.1)]',
    },
    {
        id: 'global-trade',
        title: 'Global Trade',
        titleDE: 'Globaler Handel',
        icon: Globe,
        descDE: 'Vermittlung & Sourcing via Zero Group (Verpackung & Tech-Hardware). Grenzüberschreitende E-Commerce-Lösungen & Lieferketten-Intelligenz.',
        descEN: 'Sourcing & brokerage via Zero Group (packaging & tech hardware). Cross-border e-commerce solutions and supply chain intelligence.',
        scopeNote: null,
        color: 'text-blue-400',
        bg: 'bg-blue-400/10',
        borderHover: 'hover:border-blue-400/40',
        shadowHover: 'hover:shadow-[0_0_30px_rgba(96,165,250,0.1)]',
    },
    {
        id: 'consulting',
        title: 'Consulting',
        titleDE: 'Beratung',
        icon: Briefcase,
        descDE: 'Strategische Tech-Beratung, Health-Tourism-Koordination (Antalya/Deutschland) & Business Networking für zukunftsorientierte Unternehmer.',
        descEN: 'Strategic tech advisory, health tourism coordination (Antalya/Germany) & business networking for forward-thinking entrepreneurs.',
        scopeNote: null,
        color: 'text-[#ffd700]',
        bg: 'bg-[#ffd700]/10',
        borderHover: 'hover:border-[#ffd700]/40',
        shadowHover: 'hover:shadow-[0_0_30px_rgba(255,215,0,0.1)]',
    },
    {
        id: 'digital-media',
        title: 'Digital Media',
        titleDE: 'Digitale Medien',
        icon: Video,
        descDE: 'KI-Video & Audiogenerierung, mehrsprachige Übersetzungen, Social-Media-Strategie & hochwertiges Brand Storytelling.',
        descEN: 'AI video & audio generation, multi-language translation, social media strategy & high-end brand storytelling.',
        scopeNote: null,
        color: 'text-purple-400',
        bg: 'bg-purple-400/10',
        borderHover: 'hover:border-purple-400/40',
        shadowHover: 'hover:shadow-[0_0_30px_rgba(192,132,252,0.1)]',
    },
];

export default function TechPillars() {
    const { lang } = useLang();
    const de = lang === 'de';

    return (
        <section className="py-28 bg-[#0a0a0a] relative overflow-hidden">
            {/* Background glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#00d4ff]/3 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#ffd700]/3 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[#ffd700] font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block"
                    >
                        {de ? 'Die 5 Säulen' : 'The 5 Pillars'}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight font-sans"
                    >
                        {de ? 'Kern-' : 'Core '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#00d4ff]/70">
                            {de ? 'Kompetenzen' : 'Competencies'}
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-[#e5e5e5]/60 max-w-2xl mx-auto text-lg font-light font-body"
                    >
                        {de
                            ? 'Fünf strategische Domänen, wo KI auf Engineering trifft — von Code bis Handel.'
                            : 'Five strategic domains where AI meets engineering — from code to commerce.'}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PILLARS.map((pillar, index) => (
                        <motion.div
                            key={pillar.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className={`group relative p-8 rounded-xl bg-[#121212]/80 backdrop-blur-sm border border-white/5 ${pillar.borderHover} ${pillar.shadowHover} transition-all duration-300 hover:-translate-y-1`}
                        >
                            <div className={`w-14 h-14 rounded-xl ${pillar.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <pillar.icon className={`w-7 h-7 ${pillar.color}`} />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00d4ff] transition-colors font-sans">
                                {de ? pillar.titleDE : pillar.title}
                            </h3>

                            <p className="text-[#e5e5e5]/50 text-sm leading-relaxed mb-4 font-body">
                                {de ? pillar.descDE : pillar.descEN}
                            </p>

                            {pillar.scopeNote && (
                                <p className="text-[10px] font-bold text-emerald-400/60 uppercase tracking-wider mb-4 border border-emerald-400/20 rounded px-2 py-1 inline-block">
                                    ✓ {pillar.scopeNote}
                                </p>
                            )}

                            <Link
                                href={`/services/${pillar.id}`}
                                className="inline-flex items-center text-xs font-bold text-white/40 uppercase tracking-widest group-hover:text-[#00d4ff] transition-colors"
                            >
                                {de ? 'Erkunden' : 'Explore'}
                                <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
