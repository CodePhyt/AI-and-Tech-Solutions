import { z } from 'zod';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = ["image/jpeg", "image/png", "application/pdf"];

export const AssessmentSchema = z.object({
    fullName: z.string().min(2, "Name is too short").max(100),
    phone: z.string().min(5, "Invalid phone number"),
    dentalHistory: z.string().min(10, "Please provide more details about your dental history").max(2000),
    gdprConsent: z.boolean().refine(val => val === true, "GDPR consent is mandatory"),
});

// Since files are handled differently in Server Actions (FormData),
// we'll validate the metadata manually or using a refined schema if needed.
