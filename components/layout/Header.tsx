'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

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

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Hide global header on Assessment page to facilitate focused funnel flow
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
                    {/* Logo - Premium Code-Based Design (No Quota Limits) */}
                    <Link href="/" className="flex items-center group relative z-50">
                        {/* Logo Container - Balances the CTA button */}
                        <div className="flex items-center gap-3 py-2">
                            {/* Abstract Smile/Tooth Icon */}
                            <div className="relative w-10 h-10 flex items-center justify-center">
                                <div className="absolute inset-0 bg-gradient-to-tr from-sky-400 to-cyan-300 rounded-xl rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-500"></div>
                                <div className="absolute inset-0 bg-gradient-to-bl from-teal-400 to-emerald-300 rounded-xl -rotate-3 opacity-20 group-hover:-rotate-6 transition-transform duration-500"></div>
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className="w-7 h-7 text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.5)] transform group-hover:scale-110 transition-transform duration-300"
                                >
                                    <path
                                        d="M9 10C9 10 9.5 11 12 11C14.5 11 15 10 15 10M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                                        stroke="url(#logo-gradient)"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M7.5 14.5C9 16.5 15 16.5 16.5 14.5"
                                        stroke="url(#logo-gradient)"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <defs>
                                        <linearGradient id="logo-gradient" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
                                            <stop offset="0%" stopColor="#38bdf8" />
                                            <stop offset="50%" stopColor="#22d3ee" />
                                            <stop offset="100%" stopColor="#34d399" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>

                            {/* Typography - "Personal Coordinator" */}
                            <div className="flex flex-col justify-center h-10">
                                <h1 className="text-xl font-bold tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-[#C5A059] drop-shadow-sm">
                                    Osman Kadir <span className="text-[#C5A059]">KI</span>
                                </h1>
                                <span className="text-[0.6rem] tracking-[0.2em] font-medium text-slate-400 uppercase group-hover:text-[#C5A059] transition-colors duration-300">
                                    & Tech Solutions
                                </span>
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <Link href="/" className="nav-link">
                            Home
                        </Link>
                        <Link href="/about" className="nav-link">
                            Agency
                        </Link>

                        {/* Pillars Dropdown */}
                        <div className="relative group">
                            <button
                                className="nav-link flex items-center space-x-1"
                                onMouseEnter={() => setIsPillarsOpen(true)}
                                onMouseLeave={() => setIsPillarsOpen(false)}
                            >
                                <span>Solutions</span>
                                <ChevronDown className="w-4 h-4" />
                            </button>

                            <AnimatePresence>
                                {isPillarsOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-0 mt-2 w-64 crystal-card p-4 space-y-2 border-[#C5A059]/20"
                                        onMouseEnter={() => setIsPillarsOpen(true)}
                                        onMouseLeave={() => setIsPillarsOpen(false)}
                                    >
                                        <div className="px-4 py-2 text-[10px] font-bold text-[#C5A059] uppercase tracking-widest border-b border-white/5 mb-2">
                                            Core Pillars
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

                        <Link href="/stories" className="nav-link">
                            Case Studies
                        </Link>

                        {/* CTA Button */}
                        <Link
                            href="/assessment"
                            className="magnetic-btn px-8 py-2.5 bg-[#C5A059] text-white font-bold rounded-full shadow-[0_0_20px_rgba(197,160,89,0.3)] hover:shadow-[0_0_30px_rgba(197,160,89,0.5)] border border-white/20 transition-all"
                        >
                            Get Priority Plan
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
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
                                    Home
                                </Link>
                                <Link href="/about" className="block px-4 py-2 hover:bg-white/10 rounded-lg transition-colors">
                                    About
                                </Link>

                                {/* Mobile Pillars */}
                                <div>
                                    <button
                                        onClick={() => setIsPillarsOpen(!isPillarsOpen)}
                                        className="w-full flex items-center justify-between px-4 py-2 hover:bg-white/10 rounded-lg transition-colors"
                                    >
                                        <span>Solutions</span>
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

                                <Link href="/stories" className="block px-4 py-2 hover:bg-white/10 rounded-lg transition-colors">
                                    Success Stories
                                </Link>
                                <Link href="/clinics" className="block px-4 py-2 hover:bg-white/10 rounded-lg transition-colors">
                                    Our Clinics
                                </Link>
                                <Link href="/contact" className="block px-4 py-2 hover:bg-white/10 rounded-lg transition-colors">
                                    Contact
                                </Link>

                                <Link href="/contact" className="block magnetic-btn btn-primary text-center mx-4 py-3 shadow-[0_0_15px_rgba(14,165,233,0.3)]">
                                    Get Free Quote
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
          @apply absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C5A059] transition-all duration-300;
        }
        .nav-link:hover::after {
          @apply w-full;
        }
      `}</style>
        </header>
    );
}
