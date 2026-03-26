import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'The Direct Line | Contact Smile Türkiye',
    description: 'Connect instantly with your Personal Dental Coordinator via WhatsApp. Get a response within 14 minutes. Secure, encrypted, HIPAA-compliant communication for your dental journey in Turkey.',
    keywords: [
        'contact dental coordinator Turkey',
        'WhatsApp dental consultation',
        'Turkey dental contact',
        'dental tourism coordinator',
        'Smile Turkiye contact',
        'Antalya dental coordinator',
        'instant dental consultation'
    ],
    authors: [{ name: 'Nesip Nesipoglu', url: 'https://www.linkedin.com/in/nnesipogluu/' }],
    openGraph: {
        title: 'The Direct Line | Contact Your Personal Coordinator',
        description: 'Connect instantly via WhatsApp. Get expert dental coordination for your Turkey journey. Response time: < 14 minutes.',
        url: 'https://smileturkey.com/contact',
        siteName: 'Smile Türkiye',
        images: [
            {
                url: '/og-contact.jpg',
                width: 1200,
                height: 630,
                alt: 'Contact Smile Türkiye Personal Coordinator',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'The Direct Line | Contact Smile Türkiye',
        description: 'Connect instantly via WhatsApp with your Personal Dental Coordinator.',
        images: ['/og-contact.jpg'],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
