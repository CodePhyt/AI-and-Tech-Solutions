'use client';
import React from 'react';
import { MessageCircle, PhoneCall, Mail, ArrowRight, Clock, Shield, Zap } from 'lucide-react';
import { useParams } from 'next/navigation';

// Static dictionary subset (client component, no server getDictionary)
// We inline the 3 language strings directly to keep this client-side
const copy = {
    de: {
        badge: 'Direktkontakt',
        h1: 'Anfrage (RFQ) stellen',
        subtitle: 'Senden Sie uns Ihre technischen Zeichnungen oder Anforderungen – wir erstellen Ihr individuelles Angebot direkt aus unserer eigenen Produktion.',
        waTitle: 'WhatsApp Direktsupport',
        waDesc: 'Schreiben Sie uns direkt auf WhatsApp für die schnellste Antwort.',
        waNumber: '+49 171 347 4348',
        waBtn: 'Chat starten',
        callTitle: 'Telefon & Rückruf',
        callDesc: 'Besprechen Sie Ihr Projekt direkt mit uns. Wir rufen auch gern zurück.',
        callBtn: 'Anrufen',
        emailTitle: 'E-Mail & Anfragen',
        emailDesc: 'Für detaillierte Anfragen, technische Zeichnungen und Angebote.',
        emailBtn: 'E-Mail senden',
        promise1: '< 2h Antwortzeit',
        promise2: 'DSGVO-konform',
        promise3: 'Direkt vom Hersteller',
        ctaHeading: 'Bereit, die Produktion zu starten?',
        ctaSub: 'Kein Formular. Kein Umweg. Direkt zum Hersteller.',
    },
    en: {
        badge: 'Direct Contact',
        h1: 'Request for Quotation (RFQ)',
        subtitle: 'Send us your technical drawings or requirements — we create your individual offer directly from our own production.',
        waTitle: 'WhatsApp Direct Support',
        waDesc: 'Message us on WhatsApp for the fastest response.',
        waNumber: '+49 171 347 4348',
        waBtn: 'Start Chat',
        callTitle: 'Phone & Callback',
        callDesc: 'Discuss your project with us directly. We are happy to call back.',
        callBtn: 'Call Now',
        emailTitle: 'Email & Enquiries',
        emailDesc: 'For detailed enquiries, technical drawings, and quotation requests.',
        emailBtn: 'Send Email',
        promise1: '< 2h Response Time',
        promise2: 'GDPR Compliant',
        promise3: 'Direct from Manufacturer',
        ctaHeading: 'Ready to start production?',
        ctaSub: 'No form. No detour. Direct to the manufacturer.',
    },
    tr: {
        badge: 'Doğrudan İletişim',
        h1: 'Teklif Talebi (RFQ)',
        subtitle: 'Teknik çizimlerinizi veya gereksinimlerinizi bize gönderin — kendi üretimimizden doğrudan size özel teklifinizi oluşturalım.',
        waTitle: 'WhatsApp Doğrudan Destek',
        waDesc: 'En hızlı yanıt için bize WhatsApp üzerinden yazın.',
        waNumber: '+49 171 347 4348',
        waBtn: 'Sohbeti Başlat',
        callTitle: 'Telefon & Geri Arama',
        callDesc: 'Projenizi bizimle doğrudan görüşün. Sizi geri arayabiliriz.',
        callBtn: 'Şimdi Ara',
        emailTitle: 'E-Posta & Talepler',
        emailDesc: 'Detaylı talepler, teknik çizimler ve teklif talepleri için.',
        emailBtn: 'E-Posta Gönder',
        promise1: '< 2 Saat Yanıt',
        promise2: 'KVKK Uyumlu',
        promise3: 'Doğrudan Üreticiden',
        ctaHeading: 'Üretime başlamaya hazır mısınız?',
        ctaSub: 'Form yok. Aracı yok. Doğrudan üreticiye.',
    },
};

export default function Kontakt() {
    const params = useParams();
    const lang = (params?.lang as string) || 'de';
    const t = copy[lang as keyof typeof copy] ?? copy.de;

    const channels = [
        {
            icon: MessageCircle,
            iconColor: 'text-[#25D366]',
            borderHover: 'hover:border-[#25D366]/50',
            glowColor: 'hover:shadow-[#25D366]/10',
            title: t.waTitle,
            desc: t.waDesc,
            detail: t.waNumber,
            btnLabel: t.waBtn,
            btnClass: 'bg-[#25D366] hover:bg-[#128C7E] shadow-green-500/20',
            href: 'https://wa.me/491713474348',
            target: '_blank',
        },
        {
            icon: PhoneCall,
            iconColor: 'text-white',
            borderHover: 'hover:border-white/30',
            glowColor: 'hover:shadow-white/5',
            title: t.callTitle,
            desc: t.callDesc,
            detail: '+49 171 347 4348',
            btnLabel: t.callBtn,
            btnClass: 'bg-white hover:bg-slate-100 !text-slate-900 shadow-white/10',
            href: 'tel:+491713474348',
            target: '_self',
        },
        {
            icon: Mail,
            iconColor: 'text-corporate-blue',
            borderHover: 'hover:border-corporate-blue/50',
            glowColor: 'hover:shadow-corporate-blue/10',
            title: t.emailTitle,
            desc: t.emailDesc,
            detail: 'osmankadirde@gmail.com',
            btnLabel: t.emailBtn,
            btnClass: 'bg-corporate-blue hover:bg-blue-600 shadow-corporate-blue/20',
            href: 'mailto:osmankadirde@gmail.com',
            target: '_self',
        },
    ];

    return (
        <div className="w-full flex flex-col">
            {/* Hero */}
            <section className="relative py-24 lg:py-32 bg-corporate-dark overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-corporate-blue/8 rounded-full blur-3xl" />
                    <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#25D366]/5 rounded-full blur-3xl" />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-xs tracking-widest uppercase shadow-lg backdrop-blur-sm">
                        {t.badge}
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight">{t.h1}</h1>
                    <p className="text-xl md:text-2xl text-slate-400 font-light max-w-3xl mx-auto leading-relaxed">
                        {t.subtitle}
                    </p>
                    {/* Trust promises row */}
                    <div className="flex flex-wrap justify-center gap-4 pt-4">
                        {[
                            { Icon: Zap, text: t.promise1 },
                            { Icon: Shield, text: t.promise2 },
                            { Icon: Clock, text: t.promise3 },
                        ].map(({ Icon, text }) => (
                            <div key={text} className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-slate-300 backdrop-blur-sm">
                                <Icon className="w-4 h-4 text-corporate-blue" />
                                {text}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3 Contact Channels */}
            <section className="py-20 bg-corporate-navy border-t border-white/5">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {channels.map((ch) => {
                            const Icon = ch.icon;
                            return (
                                <a
                                    key={ch.title}
                                    href={ch.href}
                                    target={ch.target}
                                    rel={ch.target === '_blank' ? 'noopener noreferrer' : undefined}
                                    className={`group flex flex-col justify-between p-8 bg-corporate-dark border border-white/5 ${ch.borderHover} rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${ch.glowColor} cursor-pointer`}
                                >
                                    {/* Icon */}
                                    <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className={`w-7 h-7 ${ch.iconColor}`} />
                                    </div>
                                    {/* Text */}
                                    <div className="flex-1 mb-8 space-y-3">
                                        <h2 className="text-2xl font-bold text-white leading-tight">{ch.title}</h2>
                                        <p className="text-slate-400 leading-relaxed">{ch.desc}</p>
                                        <p className="text-sm font-mono text-slate-500 pt-1">{ch.detail}</p>
                                    </div>
                                    {/* CTA Button */}
                                    <span className={`flex items-center justify-center gap-2 w-full px-6 py-4 ${ch.btnClass} text-white font-bold rounded-xl shadow-lg transition-all duration-300 uppercase tracking-wider text-sm group-hover:gap-3`}>
                                        {ch.btnLabel}
                                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </span>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Bottom CTA strip */}
            <section className="py-20 bg-corporate-dark border-t border-white/5">
                <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">{t.ctaHeading}</h2>
                    <p className="text-xl text-slate-400">{t.ctaSub}</p>
                    <a
                        href="https://wa.me/491713474348"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold rounded-xl shadow-2xl shadow-green-500/20 transition-all duration-300 text-lg uppercase tracking-wide hover:-translate-y-1"
                    >
                        <MessageCircle className="w-6 h-6" />
                        WhatsApp
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </section>
        </div>
    );
}
