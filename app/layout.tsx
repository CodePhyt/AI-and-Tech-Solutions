import React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ChatWidget from '@/components/ChatWidget';
import StructuredData from '@/components/seo/StructuredData';
import ScrollToTop from '@/components/ui/ScrollToTop';

// Fonts - will be configured in next/font in a future step if needed, using system fonts for now as per tailwind config

export const metadata: Metadata = {
  metadataBase: new URL('https://osmankadir.tech'), // Speculative URL
  title: {
    default: 'Osman Kadir KI & Tech Solutions | Sovereign Tech Architecture',
    template: '%s | Osman Kadir Tech'
  },
  description: 'Enterprise-grade AI solutions, software architecture, and smart home labs. Building the future with code and intelligence.',
  keywords: [
    'AI solutions',
    'software architecture',
    'smart home lab',
    'global trade tech',
    'digital media',
    'tech consulting',
    'osman kadir'
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
    locale: 'en_US',
    url: 'https://osmankadir.tech',
    siteName: 'Osman Kadir KI & Tech Solutions',
    title: 'Osman Kadir KI & Tech Solutions - Sovereign Tech Architecture',
    description: 'We build the future with AI. Connect it with Code.',
    images: [
      {
        url: '/tech-hero-1.mp4', // Placeholder using video for now or specific OG image
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
    icon: '/favicon.ico', // Standard favicon
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="relative min-h-screen bg-[#0f0f0f] text-white overflow-x-hidden selection:bg-[#00f3ff] selection:text-black">
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
        <ScrollToTop />
        <StructuredData />
      </body>
    </html>
  );
}
