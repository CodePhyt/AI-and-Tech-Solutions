import { prisma } from '@/lib/prisma';
import { verifySession } from '@/lib/auth';
import { cache } from 'react';

/**
 * Ironclad DAL (Data Access Layer)
 * Rules:
 * 1. Must use verifySession() before every private query.
 * 2. All database interactions occur here.
 * 3. Use React cache() for per-request memoization.
 */

export const getLeads = cache(async () => {
    const session = await verifySession();
    if (!session.isAuth) return null;

    try {
        return await prisma.lead.findMany({
            orderBy: { createdAt: 'desc' },
        });
    } catch (error) {
        console.error('DAL Error [getLeads]:', error);
        return [];
    }
});

export const getLeadById = cache(async (id: string) => {
    const session = await verifySession();
    if (!session.isAuth) return null;

    try {
        return await prisma.lead.findUnique({
            where: { id },
        });
    } catch (error) {
        console.error('DAL Error [getLeadById]:', error);
        return null;
    }
});

/**
 * Public Data (Still through DAL for consistency)
 */
export const getSafePublicData = cache(async () => {
    // No session check required for public data
    return {
        agencyName: "My Personal Coordinator",
        tagline: "Premium AI & Technology Consulting",
    };
});
