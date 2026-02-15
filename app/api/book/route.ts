import { NextResponse } from 'next/server';
import { createPublicLead } from '@/services/dal/leads';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, whatsapp, packageInterest, message, sentiment, source } = body;

        if (!email) {
            return NextResponse.json({ success: false, message: 'Email is required' }, { status: 400 });
        }

        // Use Prisma DAL to create lead
        await createPublicLead({
            email,
            packageInterest,
            source: source || 'booking_api'
        });

        return NextResponse.json({ success: true, message: 'Consultation booked successfully.' });

    } catch (error) {
        console.error("Booking Error", error);
        return NextResponse.json({ success: false, error: 'Failed to book' }, { status: 500 });
    }
}
