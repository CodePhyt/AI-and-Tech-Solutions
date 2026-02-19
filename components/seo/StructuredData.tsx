'use client';

import Script from 'next/script';

export default function StructuredData() {
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'Osman Kadir — KI Lösungen',
        description: 'Sovereign AI Architecture, Smart Home Integration & Global Trade Sourcing.',
        url: 'https://osmankadir.tech',
        logo: 'https://osmankadir.tech/favicon.ico',
        telephone: '+49 171 3474348',
        email: 'okadirfinance@gmail.com',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Dorststraße 15',
            addressLocality: 'Neuhaus am Rennweg',
            postalCode: '98739',
            addressCountry: 'DE',
        },
        priceRange: '€€',
        sameAs: [
            'https://github.com/CodePhyt',
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
