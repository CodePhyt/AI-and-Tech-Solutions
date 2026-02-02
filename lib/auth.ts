import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

/**
 * Ironclad Agency Security: Verify User Session
 * Used within the Data Access Layer (DAL) to prevent middleware bypass.
 */
export async function verifySession() {
    const cookieStore = await cookies();
    const session = cookieStore.get('session')?.value;

    if (!session) {
        // In a real app, you would verify the JWT/Session ID here
        return { isAuth: false, userId: null };
    }

    // Placeholder for real session verification logic
    return { isAuth: true, userId: 'admin-123' };
}

/**
 * Guard for Admin Routes
 */
export async function protectAdmin() {
    const session = await verifySession();
    if (!session.isAuth) {
        redirect('/login');
    }
    return session;
}
