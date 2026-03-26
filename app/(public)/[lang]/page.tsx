"use client";
import Link from 'next/link';
import { ArrowRight, Factory, Package, Layers, Shield, CheckCircle2, Zap, Activity, TrendingUp, Globe2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { getDictionary, type Locale, locales } from '@/lib/i18n/dictionaries';
import { use } from 'react';

import deDict from '@/lib/i18n/de.json';
import enDict from '@/lib/i18n/en.json';
import trDict from '@/lib/i18n/tr.json';

const dicts = { de: deDict, en: enDict, tr: trDict };

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

const fadeUpSlow = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

export default function B2BHome({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = use(params);
    const locale = (locales.includes(lang as Locale) ? lang : 'de') as Locale;
    const t = dicts[locale];

    return (
        <div className="flex flex-col w-full overflow-hidden">
            {/* Hero Section */}
            <section className="relative flex items-center justify-center overflow-hidden py-24 lg:py-32 xl:py-40 bg-corporate-dark min-h-[90vh]">
                <motion.div 
                    initial={{ scale: 1.05, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute inset-0 z-0"
                >
                    <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" alt="Manufacturing World" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" />
                    <div className="absolute inset-0 bg-gradient-to-t from-corporate-dark via-corporate-navy/80 to-corporate-dark/90" />
                </motion.div>

                <motion.div 
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-balance space-y-8"
                >
                    <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-corporate-blue/10 border border-corporate-blue/30 text-corporate-blue text-xs tracking-widest uppercase mb-4 shadow-lg shadow-corporate-blue/10 backdrop-blur-sm">
                        {t.home.badge}
                    </motion.div>
                    
                    <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white tracking-tight drop-shadow-2xl">
                        {t.home.h1} <br className="hidden lg:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-corporate-blue to-cyan-400">{t.home.h1Highlight}</span>
                    </motion.h1>
                    
                    <motion.p variants={fadeUp} className="max-w-3xl mx-auto text-xl md:text-2xl text-slate-300 font-light mt-6 leading-relaxed drop-shadow-md">
                        {t.home.subtitle}
                    </motion.p>
                    
                    <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
                        <Link href={`/${locale}/leistungen`} className="w-full sm:w-auto px-8 py-4 bg-corporate-blue hover:bg-blue-600 text-white font-bold rounded-lg shadow-[0_0_30px_-5px_var(--tw-shadow-color)] shadow-corporate-blue/40 transition-all flex items-center justify-center gap-3 text-lg hover:-translate-y-1">
                            {t.home.ctaPrimary} <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link href={`/${locale}/kontakt`} className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-white/40 backdrop-blur-md rounded-lg transition-all flex items-center justify-center gap-3 text-lg hover:-translate-y-1">
                            {t.home.ctaSecondary}
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            {/* Trust Badges Section */}
            <section className="py-12 bg-corporate-navy border-y border-white/5 relative z-20 shadow-2xl">
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="max-w-7xl mx-auto px-4 text-center"
                >
                    <p className="text-sm font-bold tracking-[0.2em] text-slate-400 uppercase mb-8">{t.home.trustHeading}</p>
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
                        <div className="flex items-center gap-2"><span className="text-2xl font-black text-white tracking-tighter">RIXOS</span></div>
                        <div className="flex items-center gap-2"><span className="text-2xl font-serif italic font-bold text-white pr-2">MADO</span></div>
                        <div className="flex items-center gap-2 font-bold text-white text-xl tracking-widest">GERMAN ENGINEERING</div>
                        <div className="flex items-center gap-2 font-black text-white text-xl">MADE IN TÜRKİYE</div>
                    </div>
                </motion.div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-corporate-dark relative border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeUpSlow}
                        className="text-center mb-12"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-white">{t.leistungen.statsTitle}</h2>
                    </motion.div>
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
                    >
                        <motion.div variants={fadeUp} className="space-y-2">
                            <div className="flex justify-center mb-4"><Factory className="w-8 h-8 text-corporate-blue" /></div>
                            <div className="text-4xl font-black text-white">{t.leistungen.stat1Value}</div>
                            <div className="text-sm text-slate-400 uppercase tracking-wider">{t.leistungen.stat1Label}</div>
                        </motion.div>
                        <motion.div variants={fadeUp} className="space-y-2">
                            <div className="flex justify-center mb-4"><Activity className="w-8 h-8 text-corporate-blue" /></div>
                            <div className="text-4xl font-black text-white">{t.leistungen.stat2Value}</div>
                            <div className="text-sm text-slate-400 uppercase tracking-wider">{t.leistungen.stat2Label}</div>
                        </motion.div>
                        <motion.div variants={fadeUp} className="space-y-2">
                            <div className="flex justify-center mb-4"><TrendingUp className="w-8 h-8 text-corporate-blue" /></div>
                            <div className="text-4xl font-black text-white">{t.leistungen.stat3Value}</div>
                            <div className="text-sm text-slate-400 uppercase tracking-wider">{t.leistungen.stat3Label}</div>
                        </motion.div>
                        <motion.div variants={fadeUp} className="space-y-2">
                            <div className="flex justify-center mb-4"><Globe2 className="w-8 h-8 text-corporate-blue" /></div>
                            <div className="text-4xl font-black text-white">{t.leistungen.stat4Value}</div>
                            <div className="text-sm text-slate-400 uppercase tracking-wider">{t.leistungen.stat4Label}</div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Core Competencies */}
            <section className="py-24 bg-corporate-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeUpSlow}
                        className="text-center max-w-3xl mx-auto mb-16 space-y-4"
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-white">{t.home.coreTitle} <span className="text-corporate-blue">{t.home.coreTitleHighlight}</span></h2>
                        <p className="text-lg text-slate-400">{t.home.coreSubtitle}</p>
                    </motion.div>

                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        <motion.div variants={fadeUp} className="bg-corporate-navy p-8 rounded-3xl border border-white/5 hover:border-corporate-blue/30 transition-colors">
                            <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6">
                                <Layers className="w-7 h-7 text-corporate-blue" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{t.home.pillar1Title}</h3>
                            <p className="text-slate-400 leading-relaxed">{t.home.pillar1Desc}</p>
                        </motion.div>

                        <motion.div variants={fadeUp} className="bg-corporate-navy p-8 rounded-3xl border border-white/5 hover:border-corporate-blue/30 transition-colors">
                            <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6">
                                <Factory className="w-7 h-7 text-corporate-blue" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{t.home.pillar2Title}</h3>
                            <p className="text-slate-400 leading-relaxed">{t.home.pillar2Desc}</p>
                        </motion.div>

                        <motion.div variants={fadeUp} className="bg-corporate-navy p-8 rounded-3xl border border-white/5 hover:border-corporate-blue/30 transition-colors">
                            <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6">
                                <Package className="w-7 h-7 text-corporate-blue" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{t.home.pillar3Title}</h3>
                            <p className="text-slate-400 leading-relaxed">{t.home.pillar3Desc}</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
