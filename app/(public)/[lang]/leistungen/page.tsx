import React from 'react';
import { Package, Utensils, Anchor, ArrowRight, ShieldCheck, Download, Layers, BarChart3, Globe2, TrendingUp, CheckCircle2, Factory, Activity, Heart, Shirt, TreeDeciduous, Dumbbell } from 'lucide-react';
import FAQAccordion, { FAQItem } from '@/components/b2b/FAQAccordion';
import { getDictionary, locales, type Locale } from '@/lib/i18n/dictionaries';

const categories = [
    {
        id: 'cnc',
        icon: Layers,
        image: 'https://images.unsplash.com/photo-1565439385584-c6a6d689dd97?q=80&w=2070&auto=format&fit=crop',
        imageAlt: 'CNC Maschinenbau',
        titleKey: 'cat1Title',
        descKey: 'cat1Desc',
        feats: [
            '±0.005 mm Toleranzen',
            'Defense & Auto Zertifikate',
            'ISO-konforme Baugruppen',
        ],
    },
    {
        id: 'furniture',
        icon: Utensils,
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop',
        imageAlt: 'Gastronomie Möbel',
        titleKey: 'cat2Title',
        descKey: 'cat2Desc',
        feats: [
            'FSC-Holz & ISO-zertifiziert',
            'MOQ flexibel ab 50 Stück',
            'Custom Branding & Whitlabel',
        ],
    },
    {
        id: 'packaging',
        icon: Package,
        image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2072&auto=format&fit=crop',
        imageAlt: 'Verpackung & Druck',
        titleKey: 'cat3Title',
        descKey: 'cat3Desc',
        feats: [
            'Maßgeschneiderte Kosmetikverpackungen',
            'Pizza- & Versandkartons',
            'Non-Woven Taschen mit Logodruk',
        ],
    },
    {
        id: 'medical',
        icon: Heart,
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2060&auto=format&fit=crop',
        imageAlt: 'Medical & Gesundheit',
        title: '4. Medical & Schutzkleidung',
        desc: 'Zertifizierte Einweg- und Mehrweg-Schutzausrüstung direkt aus unserer Produktion. FFP2/FFP3-Atemschutzmasken, OP-Kittel, Scrubs, Einweg-Bettwäsche und vollständige Krankenhausausstattungen.',
        feats: [
            'FFP2 / FFP3 zertifiziert (CE)',
            'OP-Kittel & Scrubs – personalisierbar',
            'Einweg- & Mehrweg-Bettwäsche',
        ],
    },
    {
        id: 'textiles',
        icon: Shirt,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2069&auto=format&fit=crop',
        imageAlt: 'Textilien & Bekleidung',
        title: '5. Textilien & Bekleidung',
        desc: 'Von Basic-T-Shirts über Oversize-Hoodies bis zu Premium-Hamam-Badetüchern (Peştemal). Wir produzieren Kollektionen für Großhändler, Eventveranstalter und Werbeartikel-Importeure mit Full-Service Logoprint.',
        feats: [
            'Oversize, Regular & Kids-Sortiment',
            'Hamam Peştemal – Hotel & Spa',
            'Private-Label & Weißware möglich',
        ],
    },
    {
        id: 'playgrounds',
        icon: TreeDeciduous,
        image: 'https://images.unsplash.com/photo-1575783970733-1aaedde1db74?q=80&w=2076&auto=format&fit=crop',
        imageAlt: 'Spielplätze & Outdoor',
        title: '6. Spielplätze & Outdoor-Anlagen',
        desc: 'Maßgefertigte Holzspielplätze für Kindergärten, Schulen und öffentliche Kommunen. Individuell planbar – von der einfachen Rutsche bis zum barrierefreien Gesamtkonzept, inkl. Aufbauservice.',
        feats: [
            'FSC-zertifiziertes Naturholz',
            'Barrierefrei-Serien verfügbar',
            'Schulen, Kommunen & Resorts',
        ],
    },
    {
        id: 'sports',
        icon: Dumbbell,
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
        imageAlt: 'Sport & Fitness',
        title: '7. Sport & Fitnessgeräte',
        desc: 'Trainingsgeräte für Fitnessstudios, Schulen und Home-Gym-Konzepte. Wandklimmzugstangen, Trainingsbänke, Box-Stationen und mehr – robust, zertifiziert, OEM-fähig.',
        feats: [
            'OEM & Whitlabel möglich',
            'Multifunktionale Stationen',
            'Für Studios, Schulen & Retail',
        ],
    },
    {
        id: 'promo',
        icon: BarChart3,
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
        imageAlt: 'Werbemittel & Drucksachen',
        title: '8. Werbemittel & Promotionartikel',
        desc: 'Kugelschreiber, Non-Woven-Taschen, Notizbücher, Schlüsselanhänger-Sets und Geschenksets – vollständig mit Ihrem Logo bedruckt, MOQ ab 50 Stück. Ideal für Messen, Events und Agenturprojekte.',
        feats: [
            'Logoprint ab 50 Stück',
            'Kugelschreiber, Taschen, Notizbücher',
            'Ready für Messen & Events',
        ],
    },
];

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

            {/* Categories — 8 product verticals */}
            <section className="py-24 bg-corporate-dark relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-5xl font-black text-white">
                            Unsere <span className="text-corporate-blue">Produktkategorien</span>
                        </h2>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                            8 spezialisierte Fertigungsverticals — direkt aus unserer Produktion, white-label & OEM-fähig.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categories.map((cat) => {
                            const Icon = cat.icon;
                            const title = cat.title || (cat.titleKey ? (t as Record<string, string>)[cat.titleKey] : '');
                            const desc = cat.desc || (cat.descKey ? (t as Record<string, string>)[cat.descKey] : '');
                            return (
                                <div key={cat.id} className="bg-corporate-navy border border-white/5 rounded-3xl overflow-hidden hover:border-corporate-blue/30 transition-all duration-300 group hover:shadow-2xl hover:shadow-corporate-blue/5 flex flex-col">
                                    <div className="h-48 overflow-hidden relative shrink-0">
                                        <img
                                            src={cat.image}
                                            alt={cat.imageAlt}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-corporate-navy via-corporate-navy/30 to-transparent" />
                                        <div className="absolute bottom-4 left-6 w-12 h-12 bg-corporate-dark/80 backdrop-blur border border-white/10 rounded-xl flex items-center justify-center">
                                            <Icon className="w-6 h-6 text-corporate-blue" />
                                        </div>
                                    </div>
                                    <div className="p-8 flex-1 flex flex-col">
                                        <h2 className="text-xl font-bold text-white mb-3">{title}</h2>
                                        <p className="text-slate-400 leading-relaxed mb-6 flex-1 text-sm">{desc}</p>
                                        <ul className="space-y-2 mb-6">
                                            {cat.feats.map((feat, fi) => (
                                                <li key={fi} className="flex items-center text-sm text-slate-300">
                                                    <ShieldCheck className="w-4 h-4 text-corporate-blue mr-2 shrink-0" /> {feat}
                                                </li>
                                            ))}
                                        </ul>
                                        <a
                                            href="https://wa.me/491713474348"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-auto px-6 py-3 w-full bg-corporate-blue hover:bg-blue-600 text-white rounded-lg transition-all flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider shadow-lg shadow-corporate-blue/20"
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
                    <a href="https://wa.me/491713474348" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-10 py-5 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold rounded-xl shadow-2xl shadow-green-500/20 transition-all gap-3 uppercase tracking-wide text-lg hover:-translate-y-1">
                        {t.ctaButton} <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </section>
        </div>
    );
}
