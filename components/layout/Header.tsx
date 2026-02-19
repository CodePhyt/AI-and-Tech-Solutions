'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useLang } from '@/lib/lang-context';

const pillars = [
    { name: 'AI & Software', slug: 'ai-software' },
    { name: 'Smart Home Lab', slug: 'smart-home' },
    { name: 'Global Trade', slug: 'global-trade' },
    { name: 'Consulting', slug: 'consulting' },
    { name: 'Digital Media', slug: 'digital-media' },
];

export default function Header() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isPillarsOpen, setIsPillarsOpen] = useState(false);
    const { lang, setLang } = useLang();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (pathname === '/assessment') return null;

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'glass-card border-b border-white/10 backdrop-blur-xl'
                : 'bg-transparent'
                }`}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center group relative z-50">
                        <div className="flex items-center gap-3 py-2">
                            <div className="relative w-10 h-10 flex items-center justify-center">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#00d4ff] to-[#ffd700] rounded-xl rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-500"></div>
                                <div className="absolute inset-0 bg-gradient-to-bl from-[#00d4ff] to-[#00d4ff]/50 rounded-xl -rotate-3 opacity-15 group-hover:-rotate-6 transition-transform duration-500"></div>
                                <span className="text-xl font-black text-[#00d4ff] drop-shadow-[0_0_8px_rgba(0,212,255,0.5)] transform group-hover:scale-110 transition-transform duration-300">OK</span>
                            </div>
                            <div className="flex flex-col justify-center h-10">
                                <h1 className="text-xl font-bold tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-[#ffd700] font-sans">
                                    Osman Kadir <span className="text-[#00d4ff]">KI</span>
                                </h1>
                                <span className="text-[0.6rem] tracking-[0.2em] font-medium text-slate-400 uppercase group-hover:text-[#ffd700] transition-colors duration-300">
                                    & Tech Solutions
                                </span>
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <Link href="/" className="nav-link">
                            {lang === 'de' ? 'Start' : 'Home'}
                        </Link>
                        <Link href="/about" className="nav-link">
                            {lang === 'de' ? 'Über mich' : 'Agency'}
                        </Link>

                        {/* Pillars Dropdown */}
                        <div className="relative group">
                            <button
                                className="nav-link flex items-center space-x-1"
                                onMouseEnter={() => setIsPillarsOpen(true)}
                                onMouseLeave={() => setIsPillarsOpen(false)}
                            >
                                <span>{lang === 'de' ? 'Leistungen' : 'Solutions'}</span>
                                <ChevronDown className="w-4 h-4" />
                            </button>

                            <AnimatePresence>
                                {isPillarsOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-0 mt-2 w-64 crystal-card p-4 space-y-2 border-[#ffd700]/20"
                                        onMouseEnter={() => setIsPillarsOpen(true)}
                                        onMouseLeave={() => setIsPillarsOpen(false)}
                                    >
                                        <div className="px-4 py-2 text-[10px] font-bold text-[#ffd700] uppercase tracking-widest border-b border-white/5 mb-2">
                                            {lang === 'de' ? 'Kernbereiche' : 'Core Pillars'}
                                        </div>
                                        {pillars.map((pillar) => (
                                            <Link
                                                key={pillar.slug}
                                                href={`/services/${pillar.slug}`}
                                                className="block px-4 py-3 rounded-lg text-slate-300 hover:bg-white/10 hover:text-white transition-all duration-200"
                                            >
                                                {pillar.name}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link href="/projects" className="nav-link">
                            {lang === 'de' ? 'Projekte' : 'Projects'}
                        </Link>

                        {/* Language Toggle */}
                        <button
                            onClick={() => setLang(lang === 'de' ? 'en' : 'de')}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-[11px] font-bold uppercase tracking-widest transition-all duration-200 border-white/10 hover:border-[#00d4ff]/40 text-slate-400 hover:text-[#00d4ff]"
                            aria-label="Toggle language"
                        >
                            <span className={lang === 'de' ? 'text-[#00d4ff]' : 'text-slate-600'}>DE</span>
                            <span className="text-slate-700">|</span>
                            <span className={lang === 'en' ? 'text-[#00d4ff]' : 'text-slate-600'}>EN</span>
                        </button>

                        {/* CTA Button */}
                        <Link
                            href="/contact"
                            className="btn-glow px-8 py-2.5 bg-[#00d4ff] text-[#0a0a0a] font-bold rounded-lg shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] border border-[#00d4ff]/40 transition-all text-xs uppercase tracking-wider"
                        >
                            {lang === 'de' ? 'Kontakt' : 'Start Transformation'}
                        </Link>
                    </div>

                    {/* Mobile: Language Toggle + Menu */}
                    <div className="lg:hidden flex items-center gap-3">
                        <button
                            onClick={() => setLang(lang === 'de' ? 'en' : 'de')}
                            className="px-2 py-1 rounded border border-white/10 text-[10px] font-bold text-slate-400 hover:text-[#00d4ff] hover:border-[#00d4ff]/40 transition-all"
                        >
                            {lang === 'de' ? 'EN' : 'DE'}
                        </button>
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden overflow-hidden"
                        >
                            <div className="py-4 space-y-4">
                                <Link href="/" className="block px-4 py-2 hover:bg-white/10 rounded-lg transition-colors">
                                    {lang === 'de' ? 'Start' : 'Home'}
                                </Link>
                                <Link href="/about" className="block px-4 py-2 hover:bg-white/10 rounded-lg transition-colors">
                                    {lang === 'de' ? 'Über mich' : 'About'}
                                </Link>

                                <div>
                                    <button
                                        onClick={() => setIsPillarsOpen(!isPillarsOpen)}
                                        className="w-full flex items-center justify-between px-4 py-2 hover:bg-white/10 rounded-lg transition-colors"
                                    >
                                        <span>{lang === 'de' ? 'Leistungen' : 'Solutions'}</span>
                                        <ChevronDown className={`w-4 h-4 transition-transform ${isPillarsOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    {isPillarsOpen && (
                                        <div className="pl-6 mt-2 space-y-2">
                                            {pillars.map((pillar) => (
                                                <Link
                                                    key={pillar.slug}
                                                    href={`/services/${pillar.slug}`}
                                                    className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                                                >
                                                    {pillar.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <Link href="/projects" className="block px-4 py-2 hover:bg-white/10 rounded-lg transition-colors">
                                    {lang === 'de' ? 'Projekte' : 'Projects'}
                                </Link>
                                <Link href="/contact" className="block px-4 py-2 hover:bg-white/10 rounded-lg transition-colors">
                                    {lang === 'de' ? 'Kontakt' : 'Contact'}
                                </Link>

                                <Link href="/contact" className="block magnetic-btn btn-primary text-center mx-4 py-3 shadow-[0_0_15px_rgba(14,165,233,0.3)]">
                                    {lang === 'de' ? 'Jetzt starten' : 'Get Free Quote'}
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            <style jsx>{`
        .nav-link {
          @apply text-slate-300 hover:text-white transition-colors duration-200 relative;
        }
        .nav-link::after {
          content: '';
           @apply absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00d4ff] transition-all duration-300;
        }
        .nav-link:hover::after {
          @apply w-full;
        }
      `}</style>
        </header>
    );
}
