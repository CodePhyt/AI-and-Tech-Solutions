import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import type { Locale, Dictionary } from '@/lib/i18n/dictionaries';

interface FooterProps {
    lang: Locale;
    dict: Dictionary;
}

export default function B2BFooter({ lang, dict }: FooterProps) {
    const t = dict.footer;

    return (
        <footer className="bg-corporate-dark border-t border-white/5 py-12 text-slate-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold tracking-tight text-corporate-silver">
                            OSMAN<span className="text-corporate-blue">KADIR</span>
                        </h2>
                        <p className="text-sm">{t.brandDesc}</p>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider">{t.contactTitle}</h3>
                        <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-corporate-blue" /> Neuhaus am Rennweg, Deutschland</div>
                            <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-corporate-blue" /> +49 171 347 4348</div>
                            <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-corporate-blue" /> osmankadirde@gmail.com</div>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider">{t.legalTitle}</h3>
                        <div className="flex flex-col space-y-2 text-sm">
                            <Link href={`/${lang}/impressum`} className="hover:text-white transition-colors">{t.impressum}</Link>
                            <Link href={`/${lang}/datenschutz`} className="hover:text-white transition-colors">{t.datenschutz}</Link>
                            <Link href={`/${lang}/kontakt`} className="hover:text-white transition-colors">{t.kontaktLink}</Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 mt-12 pt-8 text-xs text-center flex flex-col md:flex-row justify-between items-center opacity-60">
                    <p>&copy; {new Date().getFullYear()} Osman Kadir. {t.copyright}</p>
                    <p className="mt-2 md:mt-0">{t.tagline}</p>
                </div>
            </div>
        </footer>
    );
}
