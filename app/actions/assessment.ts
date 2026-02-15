'use server';

import { AssessmentSchema } from '@/lib/validations/assessment';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

interface FileMetadata {
    name: string;
    type: string;
    size: number;
    url?: string; // Future implementation
}

export async function submitAssessment(formData: FormData) {
    try {
        // 1. Extract and Validate Input
        const rawData = {
            fullName: formData.get('fullName'),
            phone: formData.get('phone'),
            projectScope: formData.get('projectScope'),
            gdprConsent: formData.get('gdprConsent') === 'true',
        };

        const validatedFields = AssessmentSchema.safeParse(rawData);

        if (!validatedFields.success) {
            return {
                success: false,
                error: "Invalid input data. Protocol rejected.",
                details: validatedFields.error.flatten().fieldErrors,
            };
        }

        const data = validatedFields.data;

        // 2. Handle File Metadata (Security Logic)
        // Note: In a production environment, you would stream these to S3/Azure Blob
        // Here we validate constraints as per the Ironclad directive.
        const files = formData.getAll('files') as File[];
        const fileMetadata: FileMetadata[] = [];

        for (const file of files) {
            if (file.size > 5 * 1024 * 1024) {
                throw new Error(`File ${file.name} exceeds 5MB limit.`);
            }
            if (!['image/jpeg', 'image/png', 'application/pdf'].includes(file.type)) {
                throw new Error(`Invalid file type: ${file.type}`);
            }

            // Store metadata (simulating upload)
            fileMetadata.push({
                name: file.name,
                type: file.type,
                size: file.size,
                // url: uploadedUrl
            });
        }

        // 3. Save to Database (Prisma)
        // We map this to the 'Lead' model as a specialized "Assessment" type
        const lead = await prisma.lead.create({
            data: {
                name: data.fullName,
                phone: data.phone,
                message: data.projectScope,
                source: 'secure_assessment_form',
                sentiment: 'HOT', // Project Inquiries are high-intent
            },
        });

        // 4. Update Admin View
        revalidatePath('/admin/dashboard');

        return {
            success: true,
            leadId: lead.id,
        };

    } catch (error) {
        console.error('Ironclad Security Action Error:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "An unexpected error occurred during secure processing.",
        };
    }
}
