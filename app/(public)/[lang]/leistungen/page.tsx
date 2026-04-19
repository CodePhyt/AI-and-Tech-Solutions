import React from 'react';
import { Package, Utensils, ArrowRight, ShieldCheck, Download, BarChart3, Globe2, TrendingUp, CheckCircle2, Factory, Activity, Heart, Shirt, TreeDeciduous, Dumbbell, Hammer, Leaf } from 'lucide-react';
import FAQAccordion, { FAQItem } from '@/components/b2b/FAQAccordion';
import { getDictionary, locales, type Locale } from '@/lib/i18n/dictionaries';

// Static image + icon config per category (never needs translation)
const CATEGORY_STATIC = [
    {
        id: 'medical',
        icon: Heart,
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2060&auto=format&fit=crop',
        imageAlt: 'Medical & Protective Equipment',
    },
    {
        id: 'textiles',
        icon: Shirt,
        image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2070&auto=format&fit=crop',
        imageAlt: 'Textiles & Apparel',
    },
    {
        id: 'packaging',
        icon: Package,
        image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2072&auto=format&fit=crop',
        imageAlt: 'Packaging & Print',
    },
    {
        id: 'playgrounds',
        icon: TreeDeciduous,
        image: 'https://images.unsplash.com/photo-1575783970733-1aaedde1db74?q=80&w=2076&auto=format&fit=crop',
        imageAlt: 'Playgrounds & Outdoor',
    },
    {
        id: 'safety',
        icon: Hammer,
        image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop',
        imageAlt: 'Safety Equipment & PPE',
    },
    {
        id: 'furniture',
        icon: Utensils,
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop',
        imageAlt: 'Furniture & Interiors',
    },
    {
        id: 'sports',
        icon: Dumbbell,
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
        imageAlt: 'Sports & Fitness Equipment',
    },
    {
        id: 'promo',
        icon: BarChart3,
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
        imageAlt: 'Promotional Items & Merchandise',
    },
    {
        id: 'food',
        icon: Leaf,
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop',
        imageAlt: 'Food & Specialties',
    },
];

export default async function Leistungen({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const locale = (locales.includes(lang as Locale) ? lang : 'de') as Locale;
    const t = (await getDictionary(locale)).leistungen;

    // Build the translated categories array by merging static config with dictionary keys
    const categories = CATEGORY_STATIC.map((s, i) => {
        const n = i + 1;
        return {
            ...s,
            title: t[`cat${n}Title` as keyof typeof t] as string,
            desc: t[`cat${n}Desc` as keyof typeof t] as string,
            feat1: t[`cat${n}Feat1` as keyof typeof t] as string,
            feat2: t[`cat${n}Feat2` as keyof typeof t] as string,
            feat3: t[`cat${n}Feat3` as keyof typeof t] as string,
            badge: t[`cat${n}Badge` as keyof typeof t] as string,
        };
    });

    const sourcingFaqs: FAQItem[] = [
        { question: t.faq1Q, answer: t.faq1A },
        { question: t.faq2Q, answer: t.faq2A },
        { question: t.faq3Q, answer: t.faq3A },
    ];

    return (
        <div className="w-full flex flex-col">
            {/* Hero */}
            <section className="relative py-24 lg:py-32 bg-corporate-dark overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop"
                        alt="Premium Manufacturing"
                        className="w-full h-full object-cover opacity-10 mix-blend-luminosity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-corporate-dark/50 via-corporate-navy/80 to-corporate-dark" />
                </div>
                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-xs tracking-widest uppercase shadow-lg shadow-black/20 backdrop-blur-sm">
                        {t.badge}
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight drop-shadow-xl">{t.h1}</h1>
                    <p className="text-xl md:text-2xl text-slate-400 font-light max-w-3xl mx-auto">{t.subtitle}</p>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 bg-corporate-navy relative border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-white">{t.statsTitle}</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { Icon: Factory, value: t.stat1Value, label: t.stat1Label },
                            { Icon: Activity, value: t.stat2Value, label: t.stat2Label },
                            { Icon: TrendingUp, value: t.stat3Value, label: t.stat3Label },
                            { Icon: Globe2, value: t.stat4Value, label: t.stat4Label },
                        ].map(({ Icon, value, label }, idx) => (
                            <div key={idx} className="space-y-2">
                                <div className="flex justify-center mb-4"><Icon className="w-8 h-8 text-corporate-blue" /></div>
                                <div className="text-4xl font-black text-white">{value}</div>
                                <div className="text-sm text-slate-400 uppercase tracking-wider">{label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9 Product Categories — fully i18n */}
            <section className="py-24 bg-corporate-dark relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-5xl font-black text-white">
                            {t.catSectionTitle as string}
                        </h2>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                            {t.catSectionSubtitle as string}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categories.map((cat) => {
                            const Icon = cat.icon;
                            return (
                                <div
                                    key={cat.id}
                                    className="bg-corporate-navy border border-white/5 rounded-3xl overflow-hidden hover:border-corporate-blue/30 transition-all duration-300 group hover:shadow-2xl hover:shadow-corporate-blue/5 flex flex-col"
                                >
                                    <div className="h-48 overflow-hidden relative shrink-0">
                                        <img
                                            src={cat.image}
                                            alt={cat.imageAlt}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-corporate-navy via-corporate-navy/20 to-transparent" />
                                        <div className="absolute top-3 right-3 px-2 py-1 bg-corporate-blue/90 backdrop-blur rounded-lg text-white text-[10px] font-bold uppercase tracking-wider">
                                            {cat.badge}
                                        </div>
                                        <div className="absolute bottom-4 left-6 w-11 h-11 bg-corporate-dark/80 backdrop-blur border border-white/10 rounded-xl flex items-center justify-center">
                                            <Icon className="w-5 h-5 text-corporate-blue" />
                                        </div>
                                    </div>
                                    <div className="p-7 flex-1 flex flex-col">
                                        <h2 className="text-lg font-bold text-white mb-3 leading-tight">{cat.title}</h2>
                                        <p className="text-slate-400 leading-relaxed mb-5 flex-1 text-sm">{cat.desc}</p>
                                        <ul className="space-y-2 mb-5">
                                            {[cat.feat1, cat.feat2, cat.feat3].filter(Boolean).map((feat, fi) => (
                                                <li key={fi} className="flex items-start text-sm text-slate-300">
                                                    <ShieldCheck className="w-4 h-4 text-corporate-blue mr-2 mt-0.5 shrink-0" />
                                                    {feat}
                                                </li>
                                            ))}
                                        </ul>
                                        <a
                                            href="https://wa.me/491713474348"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-auto px-5 py-3 w-full bg-corporate-blue hover:bg-blue-600 text-white rounded-xl transition-all flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider shadow-lg shadow-corporate-blue/20 hover:-translate-y-0.5"
                                        >
                                            {t.catalogCta} <Download className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="py-24 bg-corporate-dark relative border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-5xl font-black text-white">{t.pricingTitle}</h2>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto">{t.pricingSubtitle}</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                        <div className="space-y-4 flex flex-col justify-center">
                            {[
                                { range: t.priceRange1, fee: t.priceFee1 },
                                { range: t.priceRange2, fee: t.priceFee2 },
                                { range: t.priceRange3, fee: t.priceFee3 },
                                { range: t.priceRange4, fee: t.priceFee4 },
                            ].map((tier, idx) => (
                                <div key={idx} className="flex items-center justify-between p-6 bg-corporate-navy border border-white/5 rounded-2xl hover:border-corporate-blue/30 transition-colors">
                                    <span className="text-lg font-medium text-white">{tier.range}</span>
                                    <span className="text-xl font-bold text-corporate-blue">{tier.fee}</span>
                                </div>
                            ))}
                        </div>
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
                    <a
                        href="https://wa.me/491713474348"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-10 py-5 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold rounded-xl shadow-2xl shadow-green-500/20 transition-all gap-3 uppercase tracking-wide text-lg hover:-translate-y-1"
                    >
                        {t.ctaButton} <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </section>
        </div>
    );
}
