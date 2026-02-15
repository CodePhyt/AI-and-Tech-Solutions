'use client';

import Link from 'next/link';
import { Linkedin, Mail, MapPin, ShieldCheck, Globe, Github, Youtube, Instagram, Twitter, MessageSquare } from 'lucide-react';

const pillars = [
    { name: 'AI & Software', slug: 'ai-software' },
    { name: 'Smart Home Lab', slug: 'smart-home' },
    { name: 'Global Trade', slug: 'global-trade' },
    { name: 'Consulting', slug: 'consulting' },
    { name: 'Digital Media', slug: 'digital-media' },
];

const SOCIAL_LINKS = [
    { name: 'GitHub', url: 'https://github.com/CodePhyt', icon: Github },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/osmankadir/', icon: Linkedin },
    { name: 'YouTube', url: 'https://www.youtube.com/@codephyt', icon: Youtube },
    { name: 'Instagram', url: 'https://www.instagram.com/artlabhd.ai/', icon: Instagram },
    { name: 'TikTok', url: 'https://www.tiktok.com/@artlabhd', icon: MessageSquare },
    { name: 'X (Twitter)', url: 'https://x.com/CodePhyt', icon: Twitter },
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
                                <span className="text-2xl font-black text-[#C5A059]">OK</span>
                            </div>
                            <div>
                                <span className="block text-xl font-black text-white tracking-widest uppercase">Osman Kadir</span>
                                <span className="block text-[9px] font-black text-[#C5A059] uppercase tracking-[0.4em]">KI & Tech Solutions</span>
                            </div>
                        </div>

                        <p className="text-slate-500 text-sm leading-relaxed font-medium">
                            We build the future with AI, manage it with Code, and connect worlds.
                        </p>

                        <div className="flex items-center gap-3 flex-wrap">
                            {SOCIAL_LINKS.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[#C5A059]/10 border border-white/5 hover:border-[#C5A059]/30 transition-all group"
                                    aria-label={social.name}
                                >
                                    <social.icon className="w-4 h-4 text-slate-400 group-hover:text-[#C5A059] transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Vetted Domains */}
                    <div className="lg:pl-8">
                        <h3 className="text-white font-black mb-8 tracking-[0.3em] uppercase text-[10px]">Tech Pillars</h3>
                        <ul className="space-y-4">
                            {pillars.map((pillar) => (
                                <li key={pillar.slug}>
                                    <Link
                                        href={`/services/${pillar.slug}`}
                                        className="text-slate-500 hover:text-[#C5A059] text-sm font-medium transition-colors flex items-center group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]/0 group-hover:bg-[#C5A059] mr-0 group-hover:mr-3 transition-all" />
                                        {pillar.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Agency Intelligence */}
                    <div>
                        <h3 className="text-white font-black mb-8 tracking-[0.3em] uppercase text-[10px]">Company</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/about" className="text-slate-500 hover:text-[#C5A059] text-sm font-medium transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-slate-500 hover:text-[#C5A059] text-sm font-medium transition-colors">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/careers" className="text-slate-500 hover:text-[#C5A059] text-sm font-medium transition-colors">
                                    Careers
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Command Center */}
                    <div>
                        <h3 className="text-white font-black mb-8 tracking-[0.3em] uppercase text-[10px]">HQ</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start space-x-4">
                                <MapPin className="w-5 h-5 text-[#C5A059] flex-shrink-0" />
                                <div>
                                    <p className="text-white text-xs font-bold leading-none mb-1">Headquarters</p>
                                    <p className="text-slate-500 text-xs">Neuhaus am Rennweg, Germany</p>
                                </div>
                            </li>
                            <li className="flex items-start space-x-4">
                                <Mail className="w-5 h-5 text-[#C5A059] flex-shrink-0" />
                                <div>
                                    <p className="text-white text-xs font-bold leading-none mb-1">Email</p>
                                    <a href="mailto:contact@osmankadir.tech" className="text-slate-500 text-xs hover:text-white transition-colors truncate">
                                        contact@osmankadir.tech
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
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">DSGVO Compliant</span>
                            </div>
                            <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-lg border border-white/5">
                                <Globe className="w-4 h-4 text-[#C5A059]" />
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Global Reach</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-8 text-[10px] font-black text-slate-600 uppercase tracking-[0.2em]">
                            <Link href="/legal/impressum" className="hover:text-white transition-colors">Impressum</Link>
                            <Link href="/legal/privacy" className="hover:text-white transition-colors">Datenschutz</Link>
                            <Link href="/legal/terms" className="hover:text-white transition-colors">AGB / Terms</Link>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-[9px] font-bold text-slate-700 uppercase tracking-[0.5em]">
                            © {currentYear} Osman Kadir KI & Tech Solutions. All Rights Reserved.
                        </p>
                        <div className="text-[8px] text-slate-800 font-black uppercase tracking-[0.3em]">
                            Version: Osman_Kadir_v1.0.0_Sovereign
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
