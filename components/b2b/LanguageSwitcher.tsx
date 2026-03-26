'use client';

import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { locales, type Locale } from '@/lib/i18n/dictionaries';
import { Globe } from 'lucide-react';

const langLabels: Record<Locale, { flag: string; label: string }> = {
    de: { flag: '🇩🇪', label: 'DE' },
    en: { flag: '🇬🇧', label: 'EN' },
    tr: { flag: '🇹🇷', label: 'TR' },
};

export default function LanguageSwitcher({ currentLang }: { currentLang: Locale }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    function switchLocale(newLocale: Locale) {
        // Replace the current locale prefix in the pathname
        const segments = pathname.split('/');
        if (locales.includes(segments[1] as Locale)) {
            segments[1] = newLocale;
        } else {
            segments.splice(1, 0, newLocale);
        }
        const newPath = segments.join('/') || '/';
        window.location.href = newPath;
    }

    const current = langLabels[currentLang];

    return (
        <div ref={dropdownRef} className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-sm text-white transition-all"
                aria-label="Switch language"
            >
                <Globe className="w-4 h-4 text-corporate-blue" />
                <span className="font-bold tracking-wide">{current.flag} {current.label}</span>
                <svg className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute right-0 top-full mt-2 w-36 bg-corporate-navy border border-white/10 rounded-xl shadow-2xl shadow-black/50 overflow-hidden z-[100] animate-in fade-in slide-in-from-top-2 duration-200">
                    {locales.map((locale) => {
                        const item = langLabels[locale];
                        const isActive = locale === currentLang;
                        return (
                            <button
                                key={locale}
                                onClick={() => {
                                    switchLocale(locale);
                                    setIsOpen(false);
                                }}
                                className={`w-full px-4 py-3 flex items-center gap-3 text-sm font-medium transition-colors ${
                                    isActive
                                        ? 'bg-corporate-blue/10 text-corporate-blue'
                                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                                }`}
                            >
                                <span className="text-lg">{item.flag}</span>
                                <span className="tracking-wide">{item.label}</span>
                                {isActive && (
                                    <svg className="w-4 h-4 ml-auto text-corporate-blue" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                )}
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
