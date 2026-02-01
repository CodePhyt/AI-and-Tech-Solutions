import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://smileturkey.com';
    const currentDate = new Date().toISOString();

    return [
        // Main pages
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/clinics`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },

        // Treatment pages
        {
            url: `${baseUrl}/treatments`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/treatments/dental-implants`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/treatments/dental-veneers`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/treatments/hollywood-smile`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },

        // Success Stories
        {
            url: `${baseUrl}/stories`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },

        // Blog pages
        {
            url: `${baseUrl}/blog`,
            lastModified: currentDate,
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/blog/dental-tourism-guide`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog/veneers-vs-crowns`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog/all-on-4-guide`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog/choosing-clinic`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog/whitening-science`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog/implant-recovery`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog/tourism-myths`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog/digital-smile-design`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog/destination-comparison`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog/cost-breakdown`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ];
}
