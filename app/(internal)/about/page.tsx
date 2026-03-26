'use client';

import { motion } from 'framer-motion';
import { Cpu, Globe, Home, ArrowRight, Zap, Clock, Users } from 'lucide-react';
import Link from 'next/link';
import { useLang, t } from '@/lib/lang-context';

const TIMELINE = [
    {
        year: '2017–2022',
        de: 'Hotellerie & Gastgewerbe',
        en: 'Hospitality & Service Industry',
        desc_de: 'Internationale Gäste aus 40+ Ländern. Gelernt: Vertrauen aufbauen, Erwartungen übertreffen, kulturelle Nuancen meistern.',
        desc_en: 'International guests from 40+ countries. Learned: building trust, exceeding expectations, mastering cultural nuance.',
        color: '#ffd700',
    },
    {
        year: '2022',
        de: 'KI-Transition beginnt',
        en: 'AI Transition Begins',
        desc_de: 'Erste Experimente mit GPT-3 und Automatisierungstools. Sofort erkannt: KI transformiert alles.',
        desc_en: 'First experiments with GPT-3 and automation tools. Immediately saw: AI transforms everything.',
        color: '#00d4ff',
    },
    {
        year: '2023',
        de: 'Autonome Agenten',
        en: 'Autonomous Agents',
        desc_de: 'Aufbau des ersten AI-Agenten-Schwarms: n8n, LangChain, lokale LLMs. Keine Abhängigkeit von Big-Tech-APIs.',
        desc_en: 'Built the first AI agent swarm: n8n, LangChain, local LLMs. Zero Big-Tech API dependency.',
        color: '#00d4ff',
    },
    {
        year: '2024',
        de: 'Smart Home Lab',
        en: 'Smart Home Lab',
        desc_de: 'HomeAssistant, Zigbee-Netzwerke und lokale IoT-Mesh-Systeme. Alle Daten bleiben lokal.',
        desc_en: 'HomeAssistant, Zigbee networks, and local IoT mesh. All data stays local.',
        color: '#ffd700',
    },
    {
        year: 'Heute',
        de: 'Bleeding Edge Operations',
        en: 'Bleeding Edge Operations',
        desc_de: 'Tägliche Auswertung von ArXiv-Papers, GitHub Trending und HuggingFace-Releases. Das neueste Modell von heute wird morgen deployt.',
        desc_en: 'Daily evaluation of ArXiv papers, GitHub trending, and HuggingFace releases. Today\'s best model deployed tomorrow.',
        color: '#00d4ff',
    },
];

const DIFFERENTIATORS = [
    {
        icon: Clock,
        de: 'Täglich aktuell',
        en: 'Daily Updates',
        desc_de: 'ArXiv-Papers und neue Modell-Releases werden jeden Morgen vor 07:00 Uhr ausgewertet.',
        desc_en: 'ArXiv papers and new model releases evaluated every morning before 07:00.',
        color: '#00d4ff',
    },
    {
        icon: Users,
        de: 'One-Man Army',
        en: 'One-Man Army',
        desc_de: 'Ein Mensch. Ein Schwarm autonomer KI-Agenten. Kein Overhead, keine Bürokratie.',
        desc_en: 'One human. A swarm of autonomous AI agents. No overhead, no bureaucracy.',
        color: '#ffd700',
    },
    {
        icon: Globe,
        de: 'Souverän & Lokal',
        en: 'Sovereign & Local',
        desc_de: 'Keine Cloud-Abhängigkeiten. DSGVO-konform. Ihre Daten bleiben bei Ihnen.',
        desc_en: 'No cloud dependencies. GDPR-compliant. Your data stays with you.',
        color: '#00d4ff',
    },
    {
        icon: Zap,
        de: 'Stunden, nicht Monate',
        en: 'Hours, Not Months',
        desc_de: 'Von Briefing zu funktionierendem Prototyp in Stunden. Agiles Deployment ohne Wartezeiten.',
        desc_en: 'From briefing to working prototype in hours. Agile deployment with zero waiting.',
        color: '#ffd700',
    },
];

const TECH_STACK = [
    { name: 'Python / FastAPI', level: 95 },
    { name: 'LangChain + LangGraph', level: 90 },
    { name: 'Local LLMs (Ollama)', level: 88 },
    { name: 'HomeAssistant / Zigbee', level: 85 },
    { name: 'Next.js / React', level: 80 },
    { name: 'n8n Agentic Workflows', level: 92 },
    { name: 'Docker / Linux Servers', level: 78 },
];

export default function AboutPage() {
    const { lang } = useLang();

    return (
        <div className="min-h-screen bg-[#0a0a0a]">

            {/* ── Hero ── */}
            <section className="relative pt-40 pb-24 overflow-hidden">
                {/* Grid background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]" />

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[#00d4ff] font-black tracking-[0.4em] uppercase text-[10px] mb-6 block"
                    >
                        {t('— Der Architekt', '— The Architect', lang)}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tighter"
                    >
                        {t('Human-in-the-Loop', 'Human-in-the-Loop', lang)}
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] to-[#ffd700]/70">
                            {t('Architekt.', 'Architect.', lang)}
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-[#e5e5e5]/60 max-w-2xl font-light leading-relaxed"
                    >
                        {t(
                            'Kein traditionelles IT-Unternehmen. Eine One-Man-Army, die einen Schwarm autonomer KI-Agenten orchestriert — schneller als jede Agentur.',
                            'Not a traditional IT company. A one-man army orchestrating a swarm of autonomous AI agents — faster than any agency.',
                            lang
                        )}
                    </motion.p>

                    {/* Stat cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 }}
                        className="flex flex-wrap gap-6 mt-12"
                    >
                        {[
                            { label: t('ArXiv täglich', 'ArXiv Daily', lang), value: '06:55', unit: t('Uhr gelesen', 'AM read', lang) },
                            { label: t('Agenten im Schwarm', 'Agents in Swarm', lang), value: '12+', unit: t('autonome Workflows', 'autonomous workflows', lang) },
                            { label: t('Sprachen', 'Languages', lang), value: '3', unit: 'DE / EN / TR' },
                        ].map(({ label, value, unit }) => (
                            <div key={label} className="px-6 py-4 rounded-xl bg-white/3 border border-white/8 backdrop-blur-sm">
                                <div className="text-2xl font-black text-[#00d4ff]">{value}</div>
                                <div className="text-[10px] font-bold text-[#ffd700] uppercase tracking-widest">{label}</div>
                                <div className="text-[10px] text-slate-500">{unit}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ── Timeline ── */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <span className="text-[#ffd700] font-black tracking-[0.4em] uppercase text-[10px] mb-3 block">
                        {t('— Die Reise', '— The Journey', lang)}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        {t('Vom Hotelier zum', 'From Hospitality to', lang)}{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#00d4ff]/70">
                            {t('KI-Architekten.', 'AI Architect.', lang)}
                        </span>
                    </h2>
                </div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-[11px] top-0 bottom-0 w-px bg-gradient-to-b from-[#00d4ff]/30 via-[#ffd700]/20 to-transparent hidden md:block" />

                    <div className="space-y-12">
                        {TIMELINE.map((item, i) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex gap-8"
                            >
                                {/* Dot */}
                                <div className="hidden md:flex flex-col items-center mt-1.5">
                                    <div
                                        className="w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                                        style={{ borderColor: item.color, boxShadow: `0 0 12px ${item.color}40` }}
                                    >
                                        <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                                    </div>
                                </div>

                                <div className="flex-1 pb-12 border-b border-white/5 last:border-0">
                                    <span
                                        className="text-[10px] font-black tracking-widest uppercase mb-2 block"
                                        style={{ color: item.color }}
                                    >
                                        {item.year}
                                    </span>
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        {lang === 'de' ? item.de : item.en}
                                    </h3>
                                    <p className="text-slate-400 leading-relaxed max-w-2xl">
                                        {lang === 'de' ? item.desc_de : item.desc_en}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Why Different ── */}
            <section className="py-24 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-[#00d4ff] font-black tracking-[0.4em] uppercase text-[10px] mb-3 block">
                            {t('— Warum anders', '— Why Different', lang)}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            {t('Schneller als der Markt.', 'Faster Than the Market.', lang)}
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {DIFFERENTIATORS.map((item, i) => (
                            <motion.div
                                key={item.en}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 rounded-xl bg-[#121212] border border-white/5 hover:border-white/15 transition-all group"
                            >
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                                    style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                                >
                                    <item.icon className="w-6 h-6" style={{ color: item.color }} />
                                </div>
                                <h3 className="text-base font-bold text-white mb-2">
                                    {lang === 'de' ? item.de : item.en}
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    {lang === 'de' ? item.desc_de : item.desc_en}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Tech Stack ── */}
            <section className="py-24 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="text-[#ffd700] font-black tracking-[0.4em] uppercase text-[10px] mb-3 block">
                                {t('— Arsenal', '— Arsenal', lang)}
                            </span>
                            <h2 className="text-4xl font-bold text-white mb-6">
                                {t('Der aktuelle Stack.', 'The Current Stack.', lang)}
                            </h2>
                            <p className="text-slate-400 leading-relaxed">
                                {t(
                                    'Nicht das, was vor zwei Jahren trendy war. Was heute, diese Woche, auf Basis der neuesten Modelle und Frameworks funktioniert.',
                                    'Not what was trendy two years ago. What works today, this week, based on the newest models and frameworks.',
                                    lang
                                )}
                            </p>
                        </div>

                        <div className="space-y-5">
                            {TECH_STACK.map((tech, i) => (
                                <motion.div
                                    key={tech.name}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.07 }}
                                >
                                    <div className="flex justify-between mb-1.5">
                                        <span className="text-sm font-semibold text-white">{tech.name}</span>
                                        <span className="text-xs text-slate-500">{tech.level}%</span>
                                    </div>
                                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${tech.level}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: i * 0.07 }}
                                            className="h-full rounded-full bg-gradient-to-r from-[#00d4ff] to-[#00d4ff]/60"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-24 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        {t('Bereit für die Bleeding Edge?', 'Ready for the Bleeding Edge?', lang)}
                    </h2>
                    <p className="text-slate-400 mb-10 max-w-xl mx-auto">
                        {t(
                            'Lassen Sie uns reden. Heute implementieren wir, was andere erst morgen kennenlernen.',
                            'Let\'s talk. Today we implement what others won\'t discover until tomorrow.',
                            lang
                        )}
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-4 px-10 py-4 bg-[#00d4ff] text-[#0a0a0a] font-extrabold rounded-lg text-xs uppercase tracking-[0.25em] hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(0,212,255,0.4)] transition-all"
                    >
                        {t('Jetzt Kontakt aufnehmen', 'Get in Touch', lang)}
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
