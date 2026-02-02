import Link from 'next/link';
import { Linkedin, Mail, Phone, MapPin, ShieldCheck, Globe, Star } from 'lucide-react';

const treatmentDomains = [
    { name: 'Sovereign Implants', slug: 'dental-implants' },
    { name: 'Hollywood Veneers', slug: 'dental-veneers' },
    { name: 'Full Reconstruction', slug: 'full-mouth-restoration' },
    { name: 'E-Max Restoration', slug: 'zirconium-crowns' },
    { name: 'Composite Artistry', slug: 'composite-bonding' },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
            {/* Background Architecture */}
            <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-[#006064]/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    {/* Agency Identity */}
                    <div className="space-y-8">
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1a2b2c] to-[#0a0e1a] border border-[#C5A059]/30 flex items-center justify-center shadow-[0_0_20px_rgba(197,160,89,0.1)]">
                                <span className="text-2xl font-black text-[#C5A059]">ST</span>
                            </div>
                            <div>
                                <span className="block text-xl font-black text-white tracking-widest uppercase">Smile Türkiye</span>
                                <span className="block text-[9px] font-black text-[#C5A059] uppercase tracking-[0.4em]">Personal Coordination Agency</span>
                            </div>
                        </div>

                        <p className="text-slate-500 text-sm leading-relaxed font-medium">
                            The world's leading coordination firm for elite clinical outcomes. We bridge the gap between international patients and vetted surgical excellence in Turkey.
                        </p>

                        <div className="flex items-center space-x-5">
                            <a
                                href="https://www.linkedin.com/in/nnesipogluu/?locale=en_US"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#C5A059]/10 border border-white/5 hover:border-[#C5A059]/30 transition-all group"
                            >
                                <Linkedin className="w-4 h-4 text-slate-400 group-hover:text-[#C5A059] transition-colors" />
                            </a>
                            <div className="h-4 w-px bg-white/10" />
                            <div className="flex items-center gap-2">
                                <Star className="w-3 h-3 text-[#C5A059] fill-[#C5A059]" />
                                <span className="text-[10px] font-black text-white uppercase tracking-widest">4.9 Agency Rating</span>
                            </div>
                        </div>
                    </div>

                    {/* Vetted Domains */}
                    <div className="lg:pl-8">
                        <h3 className="text-white font-black mb-8 tracking-[0.3em] uppercase text-[10px]">Clinical Domains</h3>
                        <ul className="space-y-4">
                            {treatmentDomains.map((domain) => (
                                <li key={domain.slug}>
                                    <Link
                                        href={`/treatments/${domain.slug}`}
                                        className="text-slate-500 hover:text-[#C5A059] text-sm font-medium transition-colors flex items-center group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]/0 group-hover:bg-[#C5A059] mr-0 group-hover:mr-3 transition-all" />
                                        {domain.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Agency Intelligence */}
                    <div>
                        <h3 className="text-white font-black mb-8 tracking-[0.3em] uppercase text-[10px]">Intelligence</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/about" className="text-slate-500 hover:text-[#C5A059] text-sm font-medium transition-colors">
                                    The Coordination Model
                                </Link>
                            </li>
                            <li>
                                <Link href="/stories" className="text-slate-500 hover:text-[#C5A059] text-sm font-medium transition-colors">
                                    Clinical Case Studies
                                </Link>
                            </li>
                            <li>
                                <Link href="/prices" className="text-slate-500 hover:text-[#C5A059] text-sm font-medium transition-colors">
                                    Treatment Valuation
                                </Link>
                            </li>
                            <li>
                                <Link href="/smile-gallery" className="text-slate-500 hover:text-[#C5A059] text-sm font-medium transition-colors">
                                    Institutional Gallery
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-slate-500 hover:text-[#C5A059] text-sm font-medium transition-colors">
                                    Surgical Literature
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Command Center */}
                    <div>
                        <h3 className="text-white font-black mb-8 tracking-[0.3em] uppercase text-[10px]">Command Center</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start space-x-4">
                                <MapPin className="w-5 h-5 text-[#C5A059] flex-shrink-0" />
                                <div>
                                    <p className="text-white text-xs font-bold leading-none mb-1">Global HQ</p>
                                    <p className="text-slate-500 text-xs">Lara Clinical District, Antalya</p>
                                </div>
                            </li>
                            <li className="flex items-start space-x-4">
                                <Phone className="w-5 h-5 text-[#C5A059] flex-shrink-0" />
                                <div>
                                    <p className="text-white text-xs font-bold leading-none mb-1">Direct Liaison</p>
                                    <a href="tel:+905302876350" className="text-slate-500 text-xs hover:text-white transition-colors">
                                        +90 530 287 63 50
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start space-x-4">
                                <Mail className="w-5 h-5 text-[#C5A059] flex-shrink-0" />
                                <div>
                                    <p className="text-white text-xs font-bold leading-none mb-1">Secure Intel</p>
                                    <a href="mailto:nnesipoglu@outlook.com" className="text-slate-500 text-xs hover:text-white transition-colors truncate">
                                        nnesipoglu@outlook.com
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Statutory Section */}
                <div className="border-t border-white/5 pt-12 mt-12">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-lg border border-white/5">
                                <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Ironclad Protocol Verified</span>
                            </div>
                            <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-lg border border-white/5">
                                <Globe className="w-4 h-4 text-[#C5A059]" />
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Cross-Border Surgical Liaison</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-8 text-[10px] font-black text-slate-600 uppercase tracking-[0.2em]">
                            <Link href="/legal/privacy" className="hover:text-white transition-colors">Privacy Charter</Link>
                            <Link href="/legal/terms" className="hover:text-white transition-colors">Operational Terms</Link>
                            <Link href="/legal/cookie-policy" className="hover:text-white transition-colors">Data Policy</Link>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-[9px] font-bold text-slate-700 uppercase tracking-[0.5em]">
                            © {currentYear} Smile Türkiye Agency. All Rights Reserved.
                        </p>
                        <div className="text-[8px] text-slate-800 font-black uppercase tracking-[0.3em]">
                            Version: Institutional_Core_4.2.0_Sovereign
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
