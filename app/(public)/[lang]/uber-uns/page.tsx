import React from 'react';
import { getDictionary, locales, type Locale } from '@/lib/i18n/dictionaries';
import { Linkedin, Github } from 'lucide-react';

export default async function UberUns({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const locale = (locales.includes(lang as Locale) ? lang : 'de') as Locale;
    const t = (await getDictionary(locale)).uberUns;

    return (
        <div className="max-w-4xl mx-auto px-4 py-24 space-y-12">
            <h1 className="text-4xl md:text-5xl font-black text-white">{t.h1}</h1>
            <p className="text-xl text-slate-400 font-medium">{t.subtitle}</p>
            <div className="prose prose-invert prose-lg max-w-none text-slate-300">
                <p>{t.intro}</p>
                <div className="bg-corporate-dark border border-white/5 p-8 rounded-2xl my-8">
                    <ul className="list-none pl-0 space-y-6 m-0">
                        <li className="flex flex-col space-y-2">
                            <strong className="text-corporate-silver text-xl">{t.bullet1Label}</strong> 
                            <span className="text-slate-400">{t.bullet1}</span>
                        </li>
                        <li className="flex flex-col space-y-2">
                            <strong className="text-corporate-silver text-xl">{t.bullet2Label}</strong> 
                            <span className="text-slate-400">{t.bullet2}</span>
                        </li>
                    </ul>
                </div>
                <p className="text-xl font-medium">{t.outro}</p>
                
                {/* Social Links Section */}
                <div className="mt-16 pt-12 border-t border-white/5">
                    <h3 className="text-2xl font-bold text-white mb-6">{t.socialTitle}</h3>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="https://www.linkedin.com/in/osmankadir/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-6 py-4 bg-[#0A66C2] hover:bg-[#004182] text-white font-bold rounded-xl transition-all shadow-lg">
                            <Linkedin className="w-5 h-5" />
                            {t.linkedin}
                        </a>
                        <a href="https://github.com/CodePhyt" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-6 py-4 bg-[#24292e] hover:bg-black text-white font-bold rounded-xl transition-all shadow-lg border border-white/10">
                            <Github className="w-5 h-5" />
                            {t.github}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
