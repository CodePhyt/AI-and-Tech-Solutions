/**
 * Centralized Image Source Management
 * Ensures no duplicate images across the platform
 */

export const IMAGE_CATEGORIES = {
    // Patient Transformation Images
    TRANSFORMATIONS: {
        veneers_hollywood_female: {
            before: '/assets/stories/sarah-before.png',
            after: '/assets/stories/sarah-after.png',
            context: 'Hollywood smile veneers - female patient'
        },
        full_arch_restoration_male: {
            before: '/assets/stories/michael-before.png',
            after: '/assets/stories/michael-after.png',
            context: 'All-on-6 full mouth restoration - male patient'
        },
        veneer_repair_female: {
            before: '/assets/stories/emma-before.png',
            after: '/assets/stories/emma-after.png',
            context: '10 veneer cosmetic repair - female patient'
        },
        implant_crowns_male: {
            before: '/assets/stories/ahmed-before.png',
            after: '/assets/stories/ahmed-after.png',
            context: '4 dental implants with crowns - male patient'
        },
        veneers_whitening_female: {
            before: '/assets/stories/lisa-before.png',
            after: '/assets/stories/lisa-after.png',
            context: '16 veneers Hollywood smile - female patient'
        },
        full_upper_arch_senior: {
            before: '/assets/stories/carlos-before.png',
            after: '/assets/stories/carlos-after.png',
            context: 'Full upper arch implants - senior male patient'
        }
    },

    // Patient Portrait Images
    PATIENT_PORTRAITS: {
        sarah_uk: '/assets/stories/sarah-profile.png',
        michael_usa: '/assets/stories/michael-profile.png',
        emma_australia: '/assets/stories/emma-profile.png',
        ahmed_uae: '/assets/stories/ahmed-profile.png',
        lisa_canada: '/assets/stories/lisa-profile.png',
        carlos_spain: '/assets/stories/carlos-profile.png'
    },

    // Blog Article Cover Images - Premium Generated Assets
    BLOG_COVERS: {
        dental_tourism_guide: '/assets/blog/dental-tourism-guide.jpg',
        veneers_vs_crowns: '/assets/blog/veneers-vs-crowns.jpg',
        all_on_4_guide: '/assets/blog/all-on-4-guide.png',
        choosing_clinic: '/assets/blog/choosing-clinic.png',
        whitening_science: '/assets/blog/whitening-science.png',
        implant_recovery: '/assets/blog/implant-recovery.png',
        tourism_myths: '/assets/blog/tourism-myths.png',
        digital_smile_design: '/assets/blog/digital-smile-design.png',
        destination_comparison: '/assets/blog/destination-comparison.png',
        cost_breakdown: '/assets/blog/cost-breakdown.png'
    },

    // About Page ESTC Values - Premium Quality Images
    ESTC: {
        excellence: '/assets/about/excellence.png', // ✅ Generated - Premium clinic interior
        safety: '/assets/about/safety.png', // ✅ Generated - Sterilization protocols
        transparency: '/assets/about/transparency.png', // ✅ Generated - Digital consultation
        care: '/assets/about/care.png' // ✅ Generated - Compassionate team
    },

    // Home Page Journey Steps
    JOURNEY: {
        arrival: '/assets/journey/arrival-nano.png', // Luxury transfer/airport
        consultation: '/assets/journey/consultation-nano.png', // Digital dental planning
        transformation: '/assets/journey/transformation-nano.png' // Antalya beach/clinic
    },

    // Clinic Facility Images
    CLINIC_FACILITIES: {
        reception_area: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
        treatment_room: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
        cbct_scanner: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=800&q=80',
        sterilization: '/assets/about/safety.png',
        smile_design_monitor: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
        cadcam_milling: 'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&w=800&q=80',
        waiting_lounge: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
        dental_chair: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
        clinic_exterior: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
    },

    // Misc Images
    MISC: {
        antalya_cityscape: 'https://images.unsplash.com/photo-1569163139394-de4798aa62b6?q=80&w=1920&auto=format&fit=crop'
    }
} as const;

/**
 * Helper function to get image by category and key
 */
export function getImage(category: keyof typeof IMAGE_CATEGORIES, key: string): string {
    const cat = IMAGE_CATEGORIES[category] as any;
    return cat[key] || '';
}

/**
 * Get transformation pair
 */
export function getTransformation(key: keyof typeof IMAGE_CATEGORIES.TRANSFORMATIONS) {
    return IMAGE_CATEGORIES.TRANSFORMATIONS[key];
}
