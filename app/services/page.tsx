'use client';

import Link from 'next/link';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { SERVICES } from '@/lib/services';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function ServicesIndexPage() {
    const servicesList = Object.values(SERVICES);

    return (
        <div className="min-h-screen pt-24 pb-16 bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <div className="text-center mb-20">
                        <span className="text-[#ffd700] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Strategic Capabilities</span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
                            Elite <span className="text-[#ffd700]">Technical</span> Solutions
                        </h1>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                            Architecting the future with sovereign AI, secure infrastructure, and global logistics. Every solution follows our <span className="text-white font-semibold">Ironclad Engineering Protocol</span>.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {servicesList.map((service, index) => (
                        <ScrollReveal key={service.slug} delay={index * 0.1}>
                            <Link
                                href={`/services/${service.slug}`}
                                className="crystal-card group overflow-hidden hover:border-[#ffd700]/40 transition-all duration-500 flex flex-col h-full bg-slate-900/50"
                            >
                                <div className="relative h-72 overflow-hidden bg-slate-900">
                                    {/* Fallback to gradient if image fails or use placeholder logic */}
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-60 mix-blend-overlay"
                                        style={{ backgroundImage: `url(${service.imageUrl})` }}
                                    />
                                    {/* Overlay Gradient for consistency */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                                    <div className="absolute top-4 right-4">
                                        <div className="px-4 py-1.5 bg-[#ffd700] rounded-full text-[10px] font-bold text-white uppercase tracking-widest shadow-lg">
                                            {service.category}
                                        </div>
                                    </div>
                                    <div className="absolute bottom-6 left-6">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-bold text-[#ffd700] uppercase tracking-widest mb-1">Investment</span>
                                            <span className="text-2xl font-bold text-white leading-none">{service.price.amount} {service.price.currency}</span>
                                        </div>
                                    </div>

                                    {/* Icon Overlay */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 group-hover:opacity-40 transition-opacity">
                                        <service.icon className="w-24 h-24 text-white" />
                                    </div>
                                </div>

                                <div className="p-8 flex-grow flex flex-col">
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#ffd700] transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm mb-8 line-clamp-3 leading-relaxed">
                                        {service.shortDescription}
                                    </p>

                                    <div className="space-y-3 mb-8 flex-grow">
                                        {service.features.slice(0, 3).map((feature, idx) => (
                                            <div key={idx} className="flex items-center text-slate-300 text-xs font-medium">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#ffd700] mr-3" />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                                        <div className="flex items-center text-[#ffd700] font-bold text-[10px] uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                                            View Architecture <ArrowRight className="w-4 h-4 ml-2" />
                                        </div>
                                        <div className="flex items-center text-slate-500 text-[10px] font-medium uppercase tracking-tighter">
                                            <Zap className="w-3 h-3 mr-1 text-[#ffd700]" />
                                            {service.processDetails && service.processDetails[0] ? service.processDetails[0].duration : 'Fast Track'}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Bottom Trust Section */}
                <ScrollReveal>
                    <div className="mt-24 crystal-card p-12 border-[#ffd700]/20 bg-slate-900/40 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <ShieldCheck className="w-64 h-64 text-[#ffd700]" />
                        </div>
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="max-w-2xl">
                                <h2 className="text-3xl font-bold text-white mb-4">Unsure where to begin?</h2>
                                <p className="text-slate-400 text-lg">
                                    Our Technical Architects can perform a complete infrastructure audit and propose a custom roadmap in under 24 hours.
                                </p>
                            </div>
                            <Link href="/assessment" className="btn-primary px-10 py-5 whitespace-nowrap">
                                Initiate Infrastructure Audit
                            </Link>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
}
