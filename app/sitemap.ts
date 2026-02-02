import { MetadataRoute } from 'next';
import { TREATMENTS } from '@/lib/treatments';


export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://smileturkey.com';
    const currentDate = new Date().toISOString();

    const staticPages = [
        { url: '', priority: 1.0, changeFrequency: 'weekly' as const },
        { url: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/clinics', priority: 0.7, changeFrequency: 'monthly' as const },
        { url: '/stories', priority: 0.8, changeFrequency: 'weekly' as const },
        { url: '/prices', priority: 0.9, changeFrequency: 'weekly' as const },
        { url: '/assessment', priority: 1.0, changeFrequency: 'weekly' as const },
        { url: '/treatments', priority: 0.9, changeFrequency: 'weekly' as const },

    ].map(page => ({
        url: `${baseUrl}${page.url}`,
        lastModified: currentDate,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
    }));

    const treatmentPages = Object.keys(TREATMENTS).map((slug) => ({
        url: `${baseUrl}/treatments/${slug}`,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));



    return [
        ...staticPages,
        ...treatmentPages,
    ];
}
