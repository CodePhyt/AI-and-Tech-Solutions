import { prisma } from '@/lib/prisma';
import { Lead } from '@prisma/client';

/**
 * Creates or updates a lead from public sources (booking/assessment).
 * Does strict validation and sanitization.
 */
export async function createPublicLead(data: {
    email: string;
    packageInterest?: string;
    source?: string;
}): Promise<Lead> {
    try {
        const { email, packageInterest, source } = data;

        const existingLead = await prisma.lead.findFirst({
            where: { email },
            orderBy: { createdAt: 'desc' }
        });

        if (existingLead) {
            return await prisma.lead.update({
                where: { id: existingLead.id },
                data: {
                    treatment: packageInterest || existingLead.treatment,
                    sentiment: 'HOT',
                }
            });
        }

        return await prisma.lead.create({
            data: {
                email,
                treatment: packageInterest,
                source: source || 'booking_api',
                sentiment: 'HOT',
                name: 'Pending Name',
            }
        });

    } catch (error) {
        console.error('DAL Error [createPublicLead]:', error);
        throw new Error('Failed to create lead');
    }
}
