import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ChatWidget from '@/components/ChatWidget';
import StructuredData from '@/components/seo/StructuredData';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { LangProvider } from '@/lib/lang-context';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function InternalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LangProvider>
      <Header />
      <main className="pt-20">{children}</main>
      <Footer />
      <ChatWidget />
      <ScrollToTop />
      <StructuredData />
      <Analytics />
      <SpeedInsights />
    </LangProvider>
  );
}
