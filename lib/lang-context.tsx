'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Lang = 'de' | 'en';

interface LangContextValue {
    lang: Lang;
    setLang: (l: Lang) => void;
}

const LangContext = createContext<LangContextValue>({
    lang: 'de',
    setLang: () => { },
});

export function LangProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLangState] = useState<Lang>('de');

    // Hydrate from localStorage after mount
    useEffect(() => {
        const stored = localStorage.getItem('ok-lang');
        if (stored === 'en' || stored === 'de') setLangState(stored);
    }, []);

    const setLang = (l: Lang) => {
        setLangState(l);
        localStorage.setItem('ok-lang', l);
    };

    return (
        <LangContext.Provider value={{ lang, setLang }}>
            {children}
        </LangContext.Provider>
    );
}

export function useLang() {
    return useContext(LangContext);
}

/** Shorthand bilingual string helper */
export function t(de: string, en: string, lang: Lang) {
    return lang === 'en' ? en : de;
}
