'use client';

import React, { useState } from 'react';
import { TREATMENTS, Currency } from '@/lib/treatments';
import {
    CheckCircle2,
    Info,
    ShieldCheck,
    Zap,
    Clock,
    CreditCard,
    Globe,
    Calculator,
    ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Link from 'next/link';

export default function PricingPage() {
    const [currency, setCurrency] = useState<Currency>('GBP');
    const treatments = Object.values(TREATMENTS);

    // Group treatments by category
    const categories = Array.from(new Set(treatments.map(t => t.category)));

    const formatPrice = (priceObj: any, curr: Currency) => {
        const symbols = { GBP: '£', USD: '$', EUR: '€' };
        return `${symbols[curr]}${priceObj[curr].toLocaleString()}`;
    };

    return (
        <div className="min-h-screen pt-24 pb-20 bg-slate-950">
            {/* Background Architecture */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#006064]/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#C5A059]/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="text-[#C5A059] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Institutional Transparency</span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
                            Treatment <span className="text-[#C5A059]">Valuation</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                            No hidden costs. No "Dental Mill" surcharges. Clear, upfront pricing coordinated with Tier-1 specialists in Antalya.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Currency Switcher */}
                <div className="flex justify-center mb-16">
                    <div className="crystal-card p-1.5 flex space-x-1 border-[#C5A059]/20">
                        {(['GBP', 'USD', 'EUR'] as Currency[]).map((curr) => (
                            <button
                                key={curr}
                                onClick={() => setCurrency(curr)}
                                className={`px-8 py-3 rounded-xl text-sm font-bold tracking-widest transition-all duration-300 ${currency === curr
                                        ? 'bg-[#C5A059] text-white shadow-[0_0_20px_rgba(197,160,89,0.4)]'
                                        : 'text-slate-400 hover:text-white'
                                    }`}
                            >
                                {curr}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Pricing Grid */}
                <div className="space-y-24">
                    {categories.map((category) => (
                        <div key={category} className="space-y-10">
                            <ScrollReveal>
                                <div className="flex items-center space-x-6">
                                    <h2 className="text-3xl font-bold text-white uppercase tracking-tighter">{category} Protocols</h2>
                                    <div className="h-[1px] flex-grow bg-gradient-to-r from-[#C5A059]/40 to-transparent" />
                                </div>
                            </ScrollReveal>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {treatments
                                    .filter(t => t.category === category)
                                    .map((treatment, idx) => (
                                        <ScrollReveal key={treatment.id} delay={idx * 0.1}>
                                            <div className="crystal-card p-8 hover:border-[#C5A059]/40 transition-all group flex flex-col h-full bg-slate-900/40">
                                                <div className="flex justify-between items-start mb-8">
                                                    <div>
                                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#C5A059] transition-colors line-clamp-1">
                                                            {treatment.name}
                                                        </h3>
                                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{treatment.pricing.unit}</span>
                                                    </div>
                                                    <div className="w-10 h-10 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/20 flex items-center justify-center text-[#C5A059]">
                                                        {category === 'Surgical' ? <ShieldCheck className="w-5 h-5" /> :
                                                            category === 'Cosmetic' ? <Zap className="w-5 h-5" /> :
                                                                <CreditCard className="w-5 h-5" />}
                                                    </div>
                                                </div>

                                                <div className="mb-8">
                                                    <AnimatePresence mode="wait">
                                                        <motion.div
                                                            key={currency}
                                                            initial={{ opacity: 0, y: 10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            exit={{ opacity: 0, y: -10 }}
                                                            transition={{ duration: 0.2 }}
                                                            className="text-4xl font-bold text-white"
                                                        >
                                                            {formatPrice(treatment.pricing.basePrice, currency)}
                                                        </motion.div>
                                                    </AnimatePresence>
                                                    <p className="text-slate-400 text-sm mt-3 line-clamp-2 leading-relaxed">
                                                        {treatment.shortDescription}
                                                    </p>
                                                </div>

                                                <div className="space-y-3 mb-8 flex-grow">
                                                    {treatment.features.slice(0, 3).map((feature, fIdx) => (
                                                        <div key={fIdx} className="flex items-center text-slate-300 text-xs font-medium">
                                                            <CheckCircle2 className="w-4 h-4 text-[#C5A059] mr-3 flex-shrink-0" />
                                                            {feature}
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                                                    <Link
                                                        href={`/treatments/${treatment.slug}`}
                                                        className="flex items-center text-[#C5A059] font-bold text-[10px] uppercase tracking-widest group-hover:translate-x-2 transition-transform"
                                                    >
                                                        Details <ArrowRight className="w-4 h-4 ml-2" />
                                                    </Link>
                                                    <div className="flex items-center text-slate-500 text-[10px] font-medium">
                                                        <Clock className="w-3 h-3 mr-1 text-[#C5A059]" />
                                                        {treatment.procedureDetails.duration}
                                                    </div>
                                                </div>
                                            </div>
                                        </ScrollReveal>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Info / Trust Section */}
                <div className="mt-32 grid lg:grid-cols-2 gap-12">
                    <ScrollReveal>
                        <div className="crystal-card p-12 border-[#C5A059]/20 h-full">
                            <div className="w-16 h-16 rounded-2xl bg-[#C5A059]/10 flex items-center justify-center mb-8 border border-[#C5A059]/20">
                                <Globe className="w-8 h-8 text-[#C5A059]" />
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-6">Strategic Coordination Included</h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                Our listed rates are inclusive of our **BrightPlan™ Personal Coordination** service. Unlike self-booked clinics, our patients receive:
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'VIP Private Chauffeur Transfers (Airport/Hotel/Clinic)',
                                    'Personal 24/7 Patient Coordinator Access',
                                    'Vetted Specialist Placement (Tier-1 Only)',
                                    'Ironclad Protocol Safety Audit',
                                    'Priority Appointment Scheduling (Save 4+ Weeks)'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center text-slate-300">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mr-4" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <div className="crystal-card p-12 border-[#C5A059]/20 h-full">
                            <div className="w-16 h-16 rounded-2xl bg-[#C5A059]/10 flex items-center justify-center mb-8 border border-[#C5A059]/20">
                                <Calculator className="w-8 h-8 text-[#C5A059]" />
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-6">Custom Multi-Arch Packages</h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                Complex restorative work across both jaws qualifies for our **Sovereign Plan** benefits. These custom packages offer additional 5-15% value benefits.
                            </p>
                            <div className="bg-slate-950/50 rounded-2xl p-8 border border-white/5 mb-8">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Sovereign Plan Threshold</span>
                                    <span className="text-[#C5A059] font-bold">12+ Units / Full Jaw</span>
                                </div>
                                <div className="h-2 bg-slate-900 rounded-full overflow-hidden">
                                    <div className="h-full bg-[#C5A059] w-[65%]" />
                                </div>
                            </div>
                            <Link href="/assessment" className="btn-primary w-full text-center">
                                Request Private Strategic Quote
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>

                {/* FAQ / Terms */}
                <ScrollReveal>
                    <div className="mt-32 max-w-4xl mx-auto">
                        <div className="flex items-center justify-center space-x-2 text-slate-500 mb-12 uppercase tracking-[0.3em] font-bold text-[10px]">
                            <Info className="w-4 h-4" />
                            <span>Pricing Disclosures</span>
                        </div>
                        <div className="grid md:grid-cols-2 gap-12 text-sm text-slate-500">
                            <div>
                                <h4 className="text-white font-bold mb-4 uppercase tracking-wider">Dynamic Exchange Rates</h4>
                                <p className="leading-relaxed">
                                    Listed GBP/USD/EUR prices are reference values calculated quarterly. Final settlement is typically coordinated in your local currency or at the clinic desk using mid-market live rates.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-4 uppercase tracking-wider">Clinical Variables</h4>
                                <p className="leading-relaxed">
                                    Specific biological requirements (excessive bone loss, gum disease) may require ancillary procedures like sinus lifting or bone grafting which will be detailed in your Ironclad Quote.
                                </p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
}
