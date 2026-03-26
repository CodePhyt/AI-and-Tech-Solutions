'use server'

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function approveQuote(messageId: string, formData: FormData): Promise<void> {
    try {
        await prisma.message.update({
            where: { id: messageId },
            data: { syncStatus: 'REPLIED' }
        });
        revalidatePath('/ares-command');
    } catch (error) {
        console.error("Failed to approve quote:", error);
    }
}

export async function deployOutboundLead(leadId: string, formData: FormData): Promise<void> {
    try {
        await prisma.outboundLead.update({
            where: { id: leadId },
            data: { status: 'DEPLOYING' }
        });
        revalidatePath('/ares-command');
    } catch (error) {
        console.error("Failed to deploy outbound lead:", error);
    }
}
