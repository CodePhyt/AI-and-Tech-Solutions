import { MetadataRoute } from 'next';
import { SERVICES } from '@/lib/services';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://osmankadir.tech';
    const currentDate = new Date().toISOString();

    const staticPages = [
        { url: '', priority: 1.0, changeFrequency: 'weekly' as const },
        { url: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/contact', priority: 0.9, changeFrequency: 'monthly' as const },
        { url: '/services', priority: 0.9, changeFrequency: 'weekly' as const },
        { url: '/careers', priority: 0.7, changeFrequency: 'monthly' as const },
        { url: '/assessment', priority: 1.0, changeFrequency: 'weekly' as const },
        { url: '/legal/impressum', priority: 0.5, changeFrequency: 'yearly' as const },
        { url: '/legal/privacy', priority: 0.5, changeFrequency: 'yearly' as const },
        { url: '/legal/terms', priority: 0.5, changeFrequency: 'yearly' as const },

    ].map(page => ({
        url: `${baseUrl}${page.url}`,
        lastModified: currentDate,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
    }));

    const servicePages = Object.values(SERVICES).map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    return [
        ...staticPages,
        ...servicePages,
    ];
}
