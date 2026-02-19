'use client';

import Link from 'next/link';
import { Linkedin, Mail, MapPin, ShieldCheck, Globe, Github, Youtube, Instagram, Twitter, MessageSquare, Terminal } from 'lucide-react';

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
        <footer className="bg-[#0a0a0a] border-t border-white/5 relative overflow-hidden">

            {/* Top glow strip */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00d4ff]/30 to-transparent" />

            {/* Background grid */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(0,212,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                }}
            />

            {/* CTA Banner */}
            <div className="relative border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <p className="text-[#00d4ff] text-[10px] font-black uppercase tracking-[0.4em] mb-2">— Ready to build?</p>
                        <h3 className="text-3xl font-bold text-white tracking-tighter">
                            Let&apos;s engineer your future.
                        </h3>
                    </div>
                    <div className="flex gap-3 flex-shrink-0">
                        <Link
                            href="/contact"
                            className="flex items-center gap-2 py-3 px-6 rounded-xl font-black uppercase tracking-[0.2em] text-[10px] transition-all"
                            style={{
                                background: 'linear-gradient(135deg, #00d4ff, #0090a8)',
                                color: '#0a0a0a',
                            }}
                        >
                            Initiate Contact
                        </Link>
                        <Link
                            href="/services"
                            className="flex items-center gap-2 py-3 px-6 rounded-xl font-black uppercase tracking-[0.2em] text-[10px] border border-white/10 text-slate-400 hover:border-[#00d4ff]/30 hover:text-[#00d4ff] transition-all"
                        >
                            View Services
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main grid */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand column */}
                    <div className="space-y-8">
                        {/* Logo */}
                        <div className="flex items-center gap-3">
                            <div
                                className="w-11 h-11 rounded-xl flex items-center justify-center border"
                                style={{
                                    background: 'linear-gradient(135deg, #0d1a1a, #0a0a0a)',
                                    borderColor: 'rgba(0,212,255,0.2)',
                                    boxShadow: '0 0 16px rgba(0,212,255,0.1)',
                                }}
                            >
                                <span className="text-lg font-black text-[#00d4ff]">OK</span>
                            </div>
                            <div>
                                <span className="block text-base font-black text-white tracking-widest uppercase leading-none">Osman Kadir</span>
                                <span className="block text-[9px] font-black text-[#ffd700] uppercase tracking-[0.4em] mt-0.5">KI & Tech Solutions</span>
                            </div>
                        </div>

                        <p className="text-slate-600 text-sm leading-relaxed font-medium">
                            We build the future with AI, manage it with Code, and connect worlds.
                        </p>

                        {/* Social links */}
                        <div className="flex items-center gap-2 flex-wrap">
                            {SOCIAL_LINKS.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 rounded-lg bg-white/4 flex items-center justify-center hover:bg-[#00d4ff]/10 border border-white/5 hover:border-[#00d4ff]/30 transition-all group"
                                    aria-label={social.name}
                                >
                                    <social.icon className="w-3.5 h-3.5 text-slate-600 group-hover:text-[#00d4ff] transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Tech Pillars */}
                    <div>
                        <h3 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-6">Tech Pillars</h3>
                        <ul className="space-y-3">
                            {pillars.map((pillar) => (
                                <li key={pillar.slug}>
                                    <Link
                                        href={`/services/${pillar.slug}`}
                                        className="text-slate-600 hover:text-[#00d4ff] text-sm font-medium transition-colors flex items-center gap-0 group"
                                    >
                                        <span className="w-0 h-px bg-[#00d4ff] group-hover:w-4 transition-all mr-0 group-hover:mr-3" />
                                        {pillar.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-6">Company</h3>
                        <ul className="space-y-3">
                            {[
                                { label: 'About Us', href: '/about' },
                                { label: 'Projects', href: '/projects' },
                                { label: 'Contact', href: '/contact' },
                                { label: 'Careers', href: '/careers' },
                            ].map(({ label, href }) => (
                                <li key={href}>
                                    <Link href={href} className="text-slate-600 hover:text-[#00d4ff] text-sm font-medium transition-colors flex items-center gap-0 group">
                                        <span className="w-0 h-px bg-[#00d4ff] group-hover:w-4 transition-all mr-0 group-hover:mr-3" />
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* HQ */}
                    <div>
                        <h3 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-6">HQ</h3>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-white text-xs font-bold mb-1">Osman Kadir — KI Lösungen</p>
                                    <p className="text-slate-600 text-xs">Dorststraße 15</p>
                                    <p className="text-slate-600 text-xs">98739 Neuhaus am Rennweg, DE</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="w-4 h-4 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-white text-xs font-bold mb-1">Email</p>
                                    <a
                                        href="mailto:okadirfinance@gmail.com"
                                        className="text-slate-600 text-xs hover:text-[#00d4ff] transition-colors"
                                    >
                                        okadirfinance@gmail.com
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Globe className="w-4 h-4 text-[#ffd700] flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-white text-xs font-bold mb-1">Tel.</p>
                                    <a href="tel:+4917134743488" className="text-slate-600 text-xs hover:text-[#00d4ff] transition-colors">+49 171 3474348</a>
                                    <p className="text-slate-700 text-[10px] mt-1">IT-Services & Warenvermittlung. Kein Handwerk.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/5 pt-10">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-6">

                        {/* Badges */}
                        <div className="flex items-center gap-3 flex-wrap justify-center">
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/5 bg-white/3">
                                <ShieldCheck className="w-3.5 h-3.5 text-[#00d4ff]" />
                                <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">DSGVO Compliant</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/5 bg-white/3">
                                <Terminal className="w-3.5 h-3.5 text-[#ffd700]" />
                                <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Sovereign Stack</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/5 bg-white/3">
                                <Globe className="w-3.5 h-3.5 text-[#00d4ff]" />
                                <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Global Reach</span>
                            </div>
                        </div>

                        {/* Legal links */}
                        <div className="flex flex-wrap justify-center gap-6 text-[10px] font-black text-slate-700 uppercase tracking-[0.2em]">
                            <Link href="/legal/impressum" className="hover:text-[#00d4ff] transition-colors">Impressum</Link>
                            <Link href="/legal/privacy" className="hover:text-[#00d4ff] transition-colors">Datenschutz</Link>
                            <Link href="/legal/terms" className="hover:text-[#00d4ff] transition-colors">AGB / Terms</Link>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-[9px] font-bold text-slate-800 uppercase tracking-[0.5em]">
                            © {currentYear} Osman Kadir KI & Tech Solutions. All Rights Reserved.
                        </p>
                        <div className="text-[8px] text-slate-800 font-black uppercase tracking-[0.3em]">
                            OK_KI_v2.1_Cyberpunk
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
