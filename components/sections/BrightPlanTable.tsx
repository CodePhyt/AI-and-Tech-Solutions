'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Trophy, CheckCircle2, Zap, ShieldCheck, Crown } from 'lucide-react';
import Link from 'next/link';

const RECONSTRUCTION_TIERS = [
    {
        title: 'Institutional Tier',
        subtitle: 'Maximum Biocompatibility',
        brand: 'Straumann / Nobel Biocare',
        material: 'Premium Zirconia / E-max',
        warranty: 'Lifetime Global Guarantee',
        coordination: 'Full VIP 24/7 Priority',
        savings: 'Up to 72% vs UK/USA',
        icon: <Crown className="w-8 h-8" />,
        best: true,
        tag: 'Recommended Protocol'
    },
    {
        title: 'Strategic Tier',
        subtitle: 'Optimal Strength & Value',
        brand: 'Osstem / Hiossen / Ritter',
        material: 'High-Strength Ceramic',
        warranty: '15-Year Institutional',
        coordination: 'Dedicated Concierge',
        savings: 'Up to 78% vs UK/USA',
        icon: <ShieldCheck className="w-8 h-8" />,
        best: false,
        tag: 'Valuation Choice'
    },
    {
        title: 'Essential Tier',
        subtitle: 'Entry Point Restoration',
        brand: 'Certified Local Premium',
        material: 'Composite / Porcelain Bonded',
        warranty: '5-Year Clinical',
        coordination: 'Standard Agency Services',
        savings: 'Up to 82% vs UK/USA',
        icon: <Zap className="w-8 h-8" />,
        best: false,
        tag: 'Entry Architecture'
    }
];

export default function BrightPlanTable() {
    return (
        <section className="py-32 relative overflow-hidden bg-[#0a0e1a]">
            {/* Background Architecture */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:60px_60px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#006064]/5 blur-[160px] rounded-full" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center space-x-3 px-6 py-2 bg-[#C5A059]/10 rounded-full border border-[#C5A059]/20 text-[#C5A059] font-bold text-[10px] uppercase tracking-[0.3em] mb-8"
                    >
                        <Shield className="w-4 h-4" />
                        <span>The BrightPlan™ Architecture</span>
                    </motion.div>

                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
                        Strategic <span className="text-[#C5A059]">Sovereign</span> Tiers
                    </h2>

                    <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        We don't sell "cheap dentistry". We provide <span className="text-white font-semibold">Institutional Grade Vetting</span>. Choose the reconstruction architecture that meets your biological requirements.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 items-stretch">
                    {RECONSTRUCTION_TIERS.map((tier, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className={`crystal-card group relative flex flex-col h-full bg-slate-900/40 p-10  ${tier.best ? 'border-[#C5A059]/40 ring-1 ring-[#C5A059]/20' : 'border-white/5'
                                } hover:border-[#C5A059]/50 transition-all duration-500`}
                        >
                            {tier.best && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-[#C5A059] text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full shadow-[0_0_20px_rgba(197,160,89,0.5)] z-20">
                                    {tier.tag}
                                </div>
                            )}

                            <div className="mb-10 text-left">
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border transition-all duration-500 ${tier.best ? 'bg-[#C5A059]/20 border-[#C5A059]/30 text-[#C5A059]' : 'bg-white/5 border-white/10 text-slate-400 group-hover:text-white'
                                    }`}>
                                    {tier.icon}
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">{tier.title}</h3>
                                <p className="text-sm text-slate-500 font-medium">{tier.subtitle}</p>
                            </div>

                            <div className="space-y-6 mb-12 flex-grow">
                                <div className="flex items-start space-x-4">
                                    <CheckCircle2 className={`w-5 h-5 mt-1 flex-shrink-0 ${tier.best ? 'text-[#C5A059]' : 'text-slate-600'}`} />
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Implant Architecture</p>
                                        <p className="text-slate-200 text-sm font-semibold">{tier.brand}</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <CheckCircle2 className={`w-5 h-5 mt-1 flex-shrink-0 ${tier.best ? 'text-[#C5A059]' : 'text-slate-600'}`} />
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Prosthetic Material</p>
                                        <p className="text-slate-200 text-sm font-semibold">{tier.material}</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <CheckCircle2 className={`w-5 h-5 mt-1 flex-shrink-0 ${tier.best ? 'text-[#C5A059]' : 'text-slate-600'}`} />
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Protection Protocol</p>
                                        <p className="text-slate-200 text-sm font-semibold">{tier.warranty}</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <CheckCircle2 className={`w-5 h-5 mt-1 flex-shrink-0 ${tier.best ? 'text-[#C5A059]' : 'text-slate-600'}`} />
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Strategic Savings</p>
                                        <p className="text-[#C5A059] text-base font-bold">{tier.savings}</p>
                                    </div>
                                </div>
                            </div>

                            <Link
                                href="/assessment"
                                className={`w-full py-5 rounded-xl font-bold text-sm tracking-widest uppercase transition-all duration-300 text-center ${tier.best
                                        ? 'bg-[#C5A059] text-white shadow-[0_20px_40px_rgba(197,160,89,0.2)] hover:shadow-[0_20px_40px_rgba(197,160,89,0.4)] hover:-translate-y-1'
                                        : 'bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10 hover:text-white'
                                    }`}
                            >
                                Secure My {tier.title.split(' ')[0]} Plan
                            </Link>

                            <p className="text-[9px] text-center text-slate-600 font-bold uppercase tracking-[0.2em] mt-6">
                                Fully Vetted by Clinical Board
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <p className="text-slate-500 text-sm italic">
                        * All tiers include 24/7 Personal Coordination, VIP Transfers, and Luxury Boutique Accommodation.
                    </p>
                </div>
            </div>
        </section>
    );
}
