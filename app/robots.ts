import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/api/',
                    '/admin/',
                    '/*.json$',
                    '/private/',
                ],
            },
        ],
        sitemap: 'https://smileturkey.com/sitemap.xml',
        host: 'https://smileturkey.com',
    };
}
