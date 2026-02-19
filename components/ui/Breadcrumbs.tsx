'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface Breadcrumb {
    label: string;
    href: string;
}

export default function Breadcrumbs() {
    const pathname = usePathname();

    // Don't show breadcrumbs on homepage
    if (pathname === '/') return null;

    const generateBreadcrumbs = (): Breadcrumb[] => {
        const paths = pathname.split('/').filter(Boolean);
        const breadcrumbs: Breadcrumb[] = [
            { label: 'Home', href: '/' }
        ];

        let currentPath = '';
        paths.forEach((path, _index) => {
            currentPath += `/${path}`;

            // Format label (capitalize, replace hyphens)
            let label = path
                .split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');

            // Special cases for better labels
            if (path === 'services') label = 'Solutions';
            if (path === 'about') label = 'Agency';
            if (path === 'contact') label = 'Concierge';
            if (path === 'assessment') label = 'Priority Plan';
            if (path === 'careers') label = 'Join Us';
            if (path === 'legal') label = 'Protocol';
            if (path === 'impressum') label = 'Impressum';
            if (path === 'privacy') label = 'Privacy';
            if (path === 'terms') label = 'Terms';

            breadcrumbs.push({
                label,
                href: currentPath
            });
        });

        return breadcrumbs;
    };

    const breadcrumbs = generateBreadcrumbs();

    return (
        <nav aria-label="Breadcrumb" className="w-full">
            <div className="crystal-card px-6 py-2.5 inline-flex items-center space-x-2 border-[#ffd700]/10">
                {breadcrumbs.map((crumb, index) => (
                    <div key={crumb.href} className="flex items-center space-x-2">
                        {/* Home icon for first item */}
                        {index === 0 && (
                            <Home className="w-4 h-4 text-[#ffd700]" />
                        )}

                        {/* Breadcrumb link or text */}
                        {index === breadcrumbs.length - 1 ? (
                            // Current page (not a link)
                            <span className="text-white font-bold text-[10px] uppercase tracking-widest">
                                {crumb.label}
                            </span>
                        ) : (
                            // Previous pages (links)
                            <Link
                                href={crumb.href}
                                className="text-slate-400 hover:text-[#ffd700] transition-colors text-[10px] font-bold uppercase tracking-widest"
                            >
                                {index === 0 ? '' : crumb.label}
                            </Link>
                        )}

                        {/* Separator (not for last item) */}
                        {index < breadcrumbs.length - 1 && (
                            <ChevronRight className="w-3.5 h-3.5 text-slate-700" />
                        )}
                    </div>
                ))}
            </div>
        </nav>
    );
}
