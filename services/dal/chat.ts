import { prisma } from '@/lib/prisma';
import { cache } from 'react';

export async function upsertChatSession(userToken: string) {
    try {
        // Checking if model access should be pluralized (Prisma standard)
        return await (prisma as any).chatSession.upsert({
            where: { userToken },
            update: {},
            create: { userToken }
        });
    } catch (error) {
        console.error('DAL Error [upsertChatSession]:', error);
        return null;
    }
}

export async function saveChatMessage(sessionToken: string, role: string, content: string, image?: string) {
    try {
        const session = await (prisma as any).chatSession.findUnique({
            where: { userToken: sessionToken }
        });

        if (!session) return null;

        return await (prisma as any).message.create({
            data: {
                role,
                content,
                image: image || null,
                chatSessionId: session.id
            }
        });
    } catch (error) {
        console.error('DAL Error [saveChatMessage]:', error);
        return null;
    }
}

export const getChatSessionMessages = cache(async (sessionToken: string) => {
    try {
        const session = await (prisma as any).chatSession.findUnique({
            where: { userToken: sessionToken },
            include: { messages: { orderBy: { createdAt: 'asc' } } }
        });
        return session?.messages || [];
    } catch (error) {
        console.error('DAL Error [getChatSessionMessages]:', error);
        return [];
    }
});
