'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSwitcher from './LanguageSwitcher';
import type { Locale, Dictionary } from '@/lib/i18n/dictionaries';

interface NavbarProps {
    lang: Locale;
    dict: Dictionary;
}

export default function B2BNavbar({ lang, dict }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const t = dict.nav;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: t.leistungen, href: `/${lang}/leistungen` },
        { name: t.uberUns, href: `/${lang}/uber-uns` },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-corporate-navy shadow-lg shadow-black/50' : 'bg-corporate-navy/90 backdrop-blur-md'}`}>
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href={`/${lang}`} className="flex flex-col justify-center h-10 group relative z-50">
                        <h1 className="text-xl font-bold tracking-tight leading-none text-corporate-silver">
                            OSMAN<span className="text-corporate-blue">KADIR</span>
                        </h1>
                        <span className="text-[0.6rem] tracking-[0.2em] font-medium text-slate-400 uppercase group-hover:text-corporate-silver transition-colors">
                            {t.brand}
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-300 hover:text-white uppercase tracking-wider transition-colors">
                                {link.name}
                            </Link>
                        ))}

                        <LanguageSwitcher currentLang={lang} />

                        <a href="https://wa.me/491713474348" target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 bg-corporate-blue hover:bg-blue-600 text-white text-sm font-bold rounded shadow-lg transition-all uppercase tracking-wider">
                            {t.kontakt}
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center gap-3 relative z-50">
                        <LanguageSwitcher currentLang={lang} />
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-slate-300 hover:text-white transition-colors">
                            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Fullscreen Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="lg:hidden absolute top-20 left-0 right-0 h-[calc(100vh-5rem)] bg-corporate-navy/95 backdrop-blur-xl border-t border-white/5 flex flex-col pt-8 pb-12 px-6 overflow-y-auto"
                    >
                        <div className="flex flex-col space-y-6 flex-grow">
                            {navLinks.map((link, i) => (
                                <motion.div 
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    key={link.href}
                                >
                                    <Link 
                                        href={link.href} 
                                        onClick={() => setIsMobileMenuOpen(false)} 
                                        className="block text-2xl font-bold text-slate-300 hover:text-white uppercase tracking-wider transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="mt-auto pt-8"
                        >
                            <a href="https://wa.me/491713474348" target="_blank" rel="noopener noreferrer" className="block w-full px-6 py-4 bg-corporate-blue text-white text-center text-lg font-bold rounded-xl shadow-lg shadow-corporate-blue/20 uppercase tracking-wider active:scale-95 transition-transform">
                                {t.kontakt}
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
