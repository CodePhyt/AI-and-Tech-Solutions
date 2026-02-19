'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle2, Zap, ShieldCheck, Crown } from 'lucide-react';
import Link from 'next/link';

const RECONSTRUCTION_TIERS = [
    {
        title: 'Enterprise Core',
        subtitle: 'Scalable Software Architecture',
        brand: 'Next.js / Python / Go',
        material: 'Cloud Native / Serverless',
        warranty: '99.9% SLA Guarantee',
        coordination: 'Dedicated Tech Lead',
        savings: 'High Efficiency & Velocity',
        icon: <Crown className="w-8 h-8" />,
        best: true,
        tag: 'Recommended Stack'
    },
    {
        title: 'Sovereign Systems',
        subtitle: 'On-Premise & Air-Gapped',
        brand: 'Rust / C++ / Assembly',
        material: 'Custom Hardware / Private Cloud',
        warranty: 'Military Grade Security',
        coordination: 'Full Engineering Team',
        savings: 'Max Data Sovereignty',
        icon: <ShieldCheck className="w-8 h-8" />,
        best: false,
        tag: 'Security Focus'
    },
    {
        title: 'MVP Launchpad',
        subtitle: 'Rapid Prototyping',
        brand: 'React / Node.js',
        material: 'Modular Components',
        warranty: 'Standard Support',
        coordination: 'Agile Sprint Team',
        savings: 'Fast Time-to-Market',
        icon: <Zap className="w-8 h-8" />,
        best: false,
        tag: 'Startup Velocity'
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
                        className="inline-flex items-center space-x-3 px-6 py-2 bg-[#ffd700]/10 rounded-full border border-[#ffd700]/20 text-[#ffd700] font-bold text-[10px] uppercase tracking-[0.3em] mb-8"
                    >
                        <Shield className="w-4 h-4" />
                        <span>Engineering Engagement Models</span>
                    </motion.div>

                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
                        Strategic <span className="text-[#ffd700]">Sovereign</span> Tiers
                    </h2>

                    <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        We don&apos;t ship &quot;spaghetti code&quot;. We provide <span className="text-white font-semibold">Institutional Grade Engineering</span>. Choose the development architecture that meets your business requirements.
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
                            className={`crystal-card group relative flex flex-col h-full bg-slate-900/40 p-10  ${tier.best ? 'border-[#ffd700]/40 ring-1 ring-[#ffd700]/20' : 'border-white/5'
                                } hover:border-[#ffd700]/50 transition-all duration-500`}
                        >
                            {tier.best && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-[#ffd700] text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full shadow-[0_0_20px_rgba(255,215,0,0.5)] z-20">
                                    {tier.tag}
                                </div>
                            )}

                            <div className="mb-10 text-left">
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border transition-all duration-500 ${tier.best ? 'bg-[#ffd700]/20 border-[#ffd700]/30 text-[#ffd700]' : 'bg-white/5 border-white/10 text-slate-400 group-hover:text-white'
                                    }`}>
                                    {tier.icon}
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">{tier.title}</h3>
                                <p className="text-sm text-slate-500 font-medium">{tier.subtitle}</p>
                            </div>

                            <div className="space-y-6 mb-12 flex-grow">
                                <div className="flex items-start space-x-4">
                                    <CheckCircle2 className={`w-5 h-5 mt-1 flex-shrink-0 ${tier.best ? 'text-[#ffd700]' : 'text-slate-600'}`} />
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Tech Stack</p>
                                        <p className="text-slate-200 text-sm font-semibold">{tier.brand}</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <CheckCircle2 className={`w-5 h-5 mt-1 flex-shrink-0 ${tier.best ? 'text-[#ffd700]' : 'text-slate-600'}`} />
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Infrastructure</p>
                                        <p className="text-slate-200 text-sm font-semibold">{tier.material}</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <CheckCircle2 className={`w-5 h-5 mt-1 flex-shrink-0 ${tier.best ? 'text-[#ffd700]' : 'text-slate-600'}`} />
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">SLA & Support</p>
                                        <p className="text-slate-200 text-sm font-semibold">{tier.warranty}</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <CheckCircle2 className={`w-5 h-5 mt-1 flex-shrink-0 ${tier.best ? 'text-[#ffd700]' : 'text-slate-600'}`} />
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Impact</p>
                                        <p className="text-[#ffd700] text-base font-bold">{tier.savings}</p>
                                    </div>
                                </div>
                            </div>

                            <Link
                                href="/assessment"
                                className={`w-full py-5 rounded-xl font-bold text-sm tracking-widest uppercase transition-all duration-300 text-center ${tier.best
                                    ? 'bg-[#ffd700] text-white shadow-[0_20px_40px_rgba(255,215,0,0.2)] hover:shadow-[0_20px_40px_rgba(255,215,0,0.4)] hover:-translate-y-1'
                                    : 'bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10 hover:text-white'
                                    }`}
                            >
                                Secure My {tier.title.split(' ')[0]} Engagement
                            </Link>

                            <p className="text-[9px] text-center text-slate-600 font-bold uppercase tracking-[0.2em] mt-6">
                                Fully Vetted by Technical Board
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <p className="text-slate-500 text-sm italic">
                        * All tiers include 24/7 Project Management, Weekly Sprints, and Transparent Code Repositories.
                    </p>
                </div>
            </div>
        </section>
    );
}
