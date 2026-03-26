import React from 'react';
import Navbar from '@/components/b2b/Navbar';
import Footer from '@/components/b2b/Footer';
import ChatWidget from '@/components/b2b/ChatWidget';
import { getDictionary, locales, type Locale } from '@/lib/i18n/dictionaries';

export function generateStaticParams() {
    return locales.map((lang) => ({ lang }));
}

export default async function LangLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const locale = (locales.includes(lang as Locale) ? lang : 'de') as Locale;
    const dict = await getDictionary(locale);

    return (
        <div className="bg-corporate-navy text-corporate-silver min-h-screen flex flex-col pt-20">
            <Navbar lang={locale} dict={dict} />
            <main className="flex-grow">{children}</main>
            <Footer lang={locale} dict={dict} />
            <ChatWidget />
        </div>
    );
}
