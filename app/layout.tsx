import React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ChatWidget from '@/components/ChatWidget';
import StructuredData from '@/components/seo/StructuredData';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { LangProvider } from '@/lib/lang-context';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://osmankadir.tech'),
  title: {
    default: 'Osman Kadir — KI Lösungen | AI, Smart Home & Global Trade',
    template: '%s | Osman Kadir — KI Lösungen'
  },
  description: 'Wir bauen die Zukunft mit KI, steuern sie mit Code und verbinden Welten. Ihr Partner für IT-Dienstleistungen, Smart Home & Warenvermittlung in Neuhaus am Rennweg.',
  keywords: [
    'KI Lösungen',
    'AI Solutions',
    'Smart Home Thüringen',
    'Global Trade Sourcing',
    'Automatisierung',
    'Agentic AI',
    'Osman Kadir',
    'Neuhaus am Rennweg',
    'CodePhyt',
  ],
  authors: [{ name: 'Osman Kadir' }],
  creator: 'Osman Kadir KI & Tech Solutions',
  publisher: 'Osman Kadir',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://osmankadir.tech',
    siteName: 'Osman Kadir KI & Tech Solutions',
    title: 'Osman Kadir KI & Tech Solutions — AI, Smart Home & Global Trade',
    description: 'We build the future with AI, manage it with Code, and connect worlds.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Osman Kadir KI & Tech Solutions',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`scroll-smooth ${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="relative min-h-screen bg-[#0a0a0a] text-[#e5e5e5] overflow-x-hidden selection:bg-[#00d4ff] selection:text-black font-body">
        <LangProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <ChatWidget />
          <ScrollToTop />
          <StructuredData />
        </LangProvider>
      </body>
    </html>
  );
}

