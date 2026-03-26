import React from 'react';
import { getDictionary, locales, type Locale } from '@/lib/i18n/dictionaries';

export default async function Kontakt({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const locale = (locales.includes(lang as Locale) ? lang : 'de') as Locale;
    const t = (await getDictionary(locale)).kontakt;

    return (
        <div className="max-w-4xl mx-auto px-4 py-24 space-y-12 min-h-[70vh]">
            <div className="text-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-black text-white">{t.h1}</h1>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto">{t.subtitle}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* 1. WhatsApp Block */}
                <div className="p-8 bg-corporate-dark border border-white/5 rounded-2xl flex flex-col justify-between space-y-6 hover:border-[#25D366]/40 transition-colors group min-h-[220px]">
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-2">{t.waTitle}</h2>
                        <p className="text-slate-400">{t.waDesc}</p>
                        <p className="text-sm text-slate-500 mt-3">+49 171 347 4348</p>
                    </div>
                    <a href="https://wa.me/491713474348" target="_blank" rel="noopener noreferrer" className="block w-full text-center px-6 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold rounded-xl shadow-lg shadow-green-500/20 transition-all uppercase tracking-wider group-hover:scale-105">
                        {t.waBtn}
                    </a>
                </div>

                {/* 2. Phone Call Block */}
                <div className="p-8 bg-corporate-dark border border-white/5 rounded-2xl flex flex-col justify-between space-y-6 hover:border-white/30 transition-colors group min-h-[220px]">
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-2">{t.callTitle}</h2>
                        <p className="text-slate-400">{t.callDesc}</p>
                        <p className="text-sm text-slate-500 mt-3">+49 171 347 4348</p>
                    </div>
                    <a href="tel:+491713474348" className="block w-full text-center px-6 py-4 bg-white hover:bg-slate-200 text-corporate-navy font-bold rounded-xl shadow-lg transition-all uppercase tracking-wider group-hover:scale-105">
                        {t.callBtn}
                    </a>
                </div>

                {/* 3. Email Block */}
                <div className="p-8 bg-corporate-dark border border-white/5 rounded-2xl flex flex-col justify-between space-y-6 hover:border-corporate-blue/40 transition-colors group min-h-[220px]">
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-2">{t.emailTitle}</h2>
                        <p className="text-slate-400">{t.emailDesc}</p>
                        <p className="text-sm text-slate-500 mt-3">osmankadirde@gmail.com</p>
                    </div>
                    <a href="mailto:osmankadirde@gmail.com" className="block w-full text-center px-6 py-4 bg-corporate-blue hover:bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-corporate-blue/20 transition-all uppercase tracking-wider group-hover:scale-105">
                        {t.emailBtn}
                    </a>
                </div>

            </div>
        </div>
    );
}
