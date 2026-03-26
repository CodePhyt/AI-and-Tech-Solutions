import type deDict from './de.json';

export type Locale = 'de' | 'en' | 'tr';
export type Dictionary = typeof deDict;

export const locales: Locale[] = ['de', 'en', 'tr'];
export const defaultLocale: Locale = 'de';

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
    de: () => import('./de.json').then((m) => m.default),
    en: () => import('./en.json').then((m) => m.default),
    tr: () => import('./tr.json').then((m) => m.default),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
    if (!locales.includes(locale)) {
        return dictionaries[defaultLocale]();
    }
    return dictionaries[locale]();
}
