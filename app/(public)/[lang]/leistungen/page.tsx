import React from 'react';
import { Package, Utensils, Anchor, ArrowRight, ShieldCheck, Download, Layers, BarChart3, Globe2, TrendingUp, CheckCircle2, Factory, Activity } from 'lucide-react';
import FAQAccordion, { FAQItem } from '@/components/b2b/FAQAccordion';
import { getDictionary, locales, type Locale } from '@/lib/i18n/dictionaries';

export default async function Leistungen({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const locale = (locales.includes(lang as Locale) ? lang : 'de') as Locale;
    const t = (await getDictionary(locale)).leistungen;

    const sourcingFaqs: FAQItem[] = [
        { question: t.faq1Q, answer: t.faq1A },
        { question: t.faq2Q, answer: t.faq2A },
        { question: t.faq3Q, answer: t.faq3A },
    ];

    return (
        <div className="w-full flex flex-col">
            {/* Header */}
            <section className="relative py-24 lg:py-32 bg-corporate-dark overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop" alt="Premium Furniture Warehouse" className="w-full h-full object-cover opacity-10 mix-blend-luminosity" />
                    <div className="absolute inset-0 bg-gradient-to-b from-corporate-dark/50 via-corporate-navy/80 to-corporate-dark" />
                </div>
                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-xs tracking-widest uppercase shadow-lg shadow-black/20 backdrop-blur-sm">
                        {t.badge}
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight drop-shadow-xl">{t.h1}</h1>
                    <p className="text-xl md:text-2xl text-slate-400 font-light max-w-3xl mx-auto">
                        {t.subtitle}
                    </p>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 bg-corporate-navy relative border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-white">{t.statsTitle}</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="space-y-2">
                            <div className="flex justify-center mb-4"><Factory className="w-8 h-8 text-corporate-blue" /></div>
                            <div className="text-4xl font-black text-white">{t.stat1Value}</div>
                            <div className="text-sm text-slate-400 uppercase tracking-wider">{t.stat1Label}</div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-center mb-4"><Activity className="w-8 h-8 text-corporate-blue" /></div>
                            <div className="text-4xl font-black text-white">{t.stat2Value}</div>
                            <div className="text-sm text-slate-400 uppercase tracking-wider">{t.stat2Label}</div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-center mb-4"><TrendingUp className="w-8 h-8 text-corporate-blue" /></div>
                            <div className="text-4xl font-black text-white">{t.stat3Value}</div>
                            <div className="text-sm text-slate-400 uppercase tracking-wider">{t.stat3Label}</div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-center mb-4"><Globe2 className="w-8 h-8 text-corporate-blue" /></div>
                            <div className="text-4xl font-black text-white">{t.stat4Value}</div>
                            <div className="text-sm text-slate-400 uppercase tracking-wider">{t.stat4Label}</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-24 bg-corporate-dark relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Category 1 : CNC & Machinery */}
                        <div className="bg-corporate-navy border border-white/5 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-300 group hover:shadow-2xl flex flex-col">
                            <div className="h-48 overflow-hidden relative shrink-0">
                                <img src="https://images.unsplash.com/photo-1565439385584-c6a6d689dd97?q=80&w=2070&auto=format&fit=crop" alt="CNC Manufacturing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-corporate-navy to-transparent" />
                                <div className="absolute bottom-4 left-6 w-12 h-12 bg-corporate-dark/80 backdrop-blur border border-white/10 rounded-xl flex items-center justify-center">
                                    <Layers className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <h2 className="text-2xl font-bold text-white mb-4">{t.cat1Title}</h2>
                                <p className="text-slate-400 leading-relaxed mb-6 flex-1">{t.cat1Desc}</p>
                                <ul className="space-y-3 mt-auto">
                                    <li className="flex items-center text-sm text-slate-300"><ShieldCheck className="w-4 h-4 text-corporate-blue mr-2 shrink-0" /> {t.cat1Feat1}</li>
                                    <li className="flex items-center text-sm text-slate-300"><ShieldCheck className="w-4 h-4 text-corporate-blue mr-2 shrink-0" /> {t.cat1Feat2}</li>
                                </ul>
                            </div>
                        </div>

                        {/* Category 2 : Furniture */}
                        <div className="bg-corporate-navy border border-white/5 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-300 group hover:shadow-2xl flex flex-col">
                            <div className="h-48 overflow-hidden relative shrink-0">
                                <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop" alt="Gastronomy Furniture" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-corporate-navy to-transparent" />
                                <div className="absolute bottom-4 left-6 w-12 h-12 bg-corporate-dark/80 backdrop-blur border border-white/10 rounded-xl flex items-center justify-center">
                                    <Utensils className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <h2 className="text-2xl font-bold text-white mb-4">{t.cat2Title}</h2>
                                <p className="text-slate-400 leading-relaxed mb-6 flex-1">{t.cat2Desc}</p>
                                <ul className="space-y-3 mt-auto">
                                    <li className="flex items-center text-sm text-slate-300"><ShieldCheck className="w-4 h-4 text-corporate-blue mr-2 shrink-0" /> {t.cat2Feat1}</li>
                                    <li className="flex items-center text-sm text-slate-300"><ShieldCheck className="w-4 h-4 text-corporate-blue mr-2 shrink-0" /> {t.cat2Feat2}</li>
                                </ul>
                            </div>
                        </div>

                        {/* Category 3 : Packaging */}
                        <div className="bg-corporate-navy border border-white/5 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-300 group hover:shadow-2xl flex flex-col">
                            <div className="h-48 overflow-hidden relative shrink-0">
                                <img src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2072&auto=format&fit=crop" alt="Packaging Box" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-corporate-navy to-transparent" />
                                <div className="absolute bottom-4 left-6 w-12 h-12 bg-corporate-dark/80 backdrop-blur border border-white/10 rounded-xl flex items-center justify-center">
                                    <Package className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <h2 className="text-2xl font-bold text-white mb-4">{t.cat3Title}</h2>
                                <p className="text-slate-400 leading-relaxed mb-6 flex-1">{t.cat3Desc}</p>
                                <ul className="space-y-3 mt-auto">
                                    <li className="flex items-center text-sm text-slate-300"><ShieldCheck className="w-4 h-4 text-corporate-blue mr-2 shrink-0" /> {t.cat3Feat1}</li>
                                    <li className="flex items-center text-sm text-slate-300"><ShieldCheck className="w-4 h-4 text-corporate-blue mr-2 shrink-0" /> {t.cat3Feat2}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-24 bg-corporate-dark relative border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-5xl font-black text-white">{t.pricingTitle}</h2>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto">{t.pricingSubtitle}</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                        {/* Pricing Tiers */}
                        <div className="space-y-4 flex flex-col justify-center">
                            {[
                                { range: t.priceRange1, fee: t.priceFee1 },
                                { range: t.priceRange2, fee: t.priceFee2 },
                                { range: t.priceRange3, fee: t.priceFee3 },
                                { range: t.priceRange4, fee: t.priceFee4 }
                            ].map((tier, idx) => (
                                <div key={idx} className="flex items-center justify-between p-6 bg-corporate-navy border border-white/5 rounded-2xl hover:border-corporate-blue/30 transition-colors">
                                    <span className="text-lg font-medium text-white">{tier.range}</span>
                                    <span className="text-xl font-bold text-corporate-blue">{tier.fee}</span>
                                </div>
                            ))}
                        </div>

                        {/* Included Services */}
                        <div className="bg-corporate-navy border border-corporate-blue/20 rounded-3xl p-8 relative overflow-hidden h-full flex flex-col">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <ShieldCheck className="w-48 h-48 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-8 relative z-10">{t.includedServicesTitle}</h3>
                            <ul className="space-y-6 relative z-10 flex-1">
                                {[t.incServ1, t.incServ2, t.incServ3, t.incServ4].map((service, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <CheckCircle2 className="w-6 h-6 text-corporate-blue mr-4 shrink-0 mt-0.5" />
                                        <span className="text-slate-300 text-lg leading-relaxed">{service}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Produktkataloge */}
            <section className="py-24 bg-corporate-navy relative border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-5xl font-black text-white">{t.catalogTitle} <span className="text-corporate-blue">{t.catalogTitleHighlight}</span></h2>
                        <p className="text-xl text-slate-400">{t.catalogSubtitle}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 bg-corporate-dark border border-white/5 rounded-3xl text-center space-y-6 flex flex-col items-center">
                            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center"><Layers className="w-8 h-8 text-corporate-blue" /></div>
                            <h3 className="text-xl font-bold text-white">{t.catalog1}</h3>
                            <a href="https://wa.me/4915206380695" target="_blank" rel="noopener noreferrer" className="mt-auto px-6 py-3 w-full bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider">
                                {t.catalogCta} <Download className="w-4 h-4" />
                            </a>
                        </div>
                        <div className="p-8 bg-corporate-dark border border-white/5 rounded-3xl text-center space-y-6 flex flex-col items-center">
                            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center"><Utensils className="w-8 h-8 text-corporate-blue" /></div>
                            <h3 className="text-xl font-bold text-white">{t.catalog2}</h3>
                            <a href="https://wa.me/4915206380695" target="_blank" rel="noopener noreferrer" className="mt-auto px-6 py-3 w-full bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider">
                                {t.catalogCta} <Download className="w-4 h-4" />
                            </a>
                        </div>
                        <div className="p-8 bg-corporate-dark border border-white/5 rounded-3xl text-center space-y-6 flex flex-col items-center">
                            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center"><Package className="w-8 h-8 text-corporate-blue" /></div>
                            <h3 className="text-xl font-bold text-white">{t.catalog3}</h3>
                            <a href="https://wa.me/4915206380695" target="_blank" rel="noopener noreferrer" className="mt-auto px-6 py-3 w-full bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider">
                                {t.catalogCta} <Download className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-corporate-dark relative border-t border-white/5">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.faqTitle}</h2>
                        <p className="text-xl text-slate-400">{t.faqSubtitle}</p>
                    </div>
                    <FAQAccordion items={sourcingFaqs} />
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-corporate-navy border-t border-white/5">
                <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">{t.ctaTitle}</h2>
                    <p className="text-xl text-slate-400">{t.ctaSubtitle}</p>
                    <a href="https://wa.me/4915206380695" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold rounded-lg shadow-lg transition-all gap-2 uppercase tracking-wide">
                        {t.ctaButton} <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </section>
        </div>
    );
}
