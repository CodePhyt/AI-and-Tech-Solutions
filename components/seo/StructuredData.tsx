'use client';

import Script from 'next/script';

export default function StructuredData() {
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'Osman Kadir KI & Tech Solutions',
        description: 'Sovereign AI Architecture, Custom Smart Home Systems, and Elite Tech Consulting.',
        url: 'https://osmankadir.tech',
        logo: 'https://osmankadir.tech/icon.png', // Needs actual icon
        telephone: '+90-533-888-8888', // Needs actual
        email: 'contact@osmankadir.tech',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Munich',
            addressCountry: 'DE',
        },
        priceRange: '€€€€',
        sameAs: [
            // 'https://www.linkedin.com/company/osman-kadir-tech',
            // 'https://twitter.com/osmankadir',
        ],
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://osmankadir.tech',
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Services',
                item: 'https://osmankadir.tech/services',
            },
        ],
    };

    return (
        <>
            <Script
                id="organization-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema),
                }}
            />
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema),
                }}
            />
        </>
    );
}
