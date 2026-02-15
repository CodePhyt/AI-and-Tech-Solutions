import { z } from 'zod';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = ["image/jpeg", "image/png", "application/pdf"];

export const AssessmentSchema = z.object({
    fullName: z.string().min(2, "Name is too short").max(100),
    phone: z.string().min(5, "Invalid signal frequency"),
    projectScope: z.string().min(10, "Please define your technical parameters").max(2000),
    gdprConsent: z.boolean().refine(val => val === true, "Protocol acceptance is mandatory"),
});
