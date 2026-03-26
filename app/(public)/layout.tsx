import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'KI & TECH Lösungen | Premium B2B Manufacturing & Logistics',
    description: 'Ihr deutscher Ansprechpartner für Premium-Sonderanfertigungen und eigene Produktion in der Türkei. Vertrag nach deutschem Recht.',
};

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
