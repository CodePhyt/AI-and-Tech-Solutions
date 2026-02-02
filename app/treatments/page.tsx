'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle, ShieldCheck, Zap } from 'lucide-react';
import { TREATMENTS } from '@/lib/treatments';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function TreatmentsIndexPage() {
    const treatmentsList = Object.values(TREATMENTS);

    return (
        <div className="min-h-screen pt-24 pb-16 bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <div className="text-center mb-20">
                        <span className="text-[#C5A059] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Institutional Protocol</span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
                            Vetted <span className="text-[#C5A059]">Clinics</span> & Procedures
                        </h1>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                            Strategic access to Tier-1 dental specialists in Turkey. Every procedure follows our <span className="text-white font-semibold">Ironclad Protocol</span> for elite results and patient safety.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {treatmentsList.map((treatment, index) => (
                        <ScrollReveal key={treatment.slug} delay={index * 0.1}>
                            <Link
                                href={`/treatments/${treatment.slug}`}
                                className="crystal-card group overflow-hidden hover:border-[#C5A059]/40 transition-all duration-500 flex flex-col h-full bg-slate-900/50"
                            >
                                <div className="relative h-72 overflow-hidden">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                                        style={{ backgroundImage: `url(${treatment.imageUrl})` }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                                    <div className="absolute top-4 right-4">
                                        <div className="px-4 py-1.5 bg-[#C5A059] rounded-full text-[10px] font-bold text-white uppercase tracking-widest shadow-lg">
                                            {treatment.category}
                                        </div>
                                    </div>
                                    <div className="absolute bottom-6 left-6">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-bold text-[#C5A059] uppercase tracking-widest mb-1">Starting At</span>
                                            <span className="text-3xl font-bold text-white leading-none">£{treatment.pricing.basePrice.GBP}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8 flex-grow flex flex-col">
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#C5A059] transition-colors">
                                        {treatment.name}
                                    </h3>
                                    <p className="text-slate-400 text-sm mb-8 line-clamp-3 leading-relaxed">
                                        {treatment.shortDescription}
                                    </p>

                                    <div className="space-y-3 mb-8 flex-grow">
                                        {treatment.features.slice(0, 3).map((feature, idx) => (
                                            <div key={idx} className="flex items-center text-slate-300 text-xs font-medium">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mr-3" />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                                        <div className="flex items-center text-[#C5A059] font-bold text-[10px] uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                                            Review Protocol <ArrowRight className="w-4 h-4 ml-2" />
                                        </div>
                                        <div className="flex items-center text-slate-500 text-[10px] font-medium uppercase tracking-tighter">
                                            <Zap className="w-3 h-3 mr-1 text-[#C5A059]" />
                                            {treatment.procedureDetails.duration}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Bottom Trust Section */}
                <ScrollReveal>
                    <div className="mt-24 crystal-card p-12 border-[#C5A059]/20 bg-slate-900/40 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <ShieldCheck className="w-64 h-64 text-[#C5A059]" />
                        </div>
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="max-w-2xl">
                                <h2 className="text-3xl font-bold text-white mb-4">Unsure which protocol fits your requirements?</h2>
                                <p className="text-slate-400 text-lg">
                                    Our coordinators can provide a strategic assessment and clinic tier comparison in under 2 hours.
                                </p>
                            </div>
                            <Link href="/assessment" className="btn-primary px-10 py-5 whitespace-nowrap">
                                Get Strategic Assessment
                            </Link>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
}
