/**
 * Centralized Image Source Management
 * Ensures no duplicate images across the platform
 */

export const IMAGE_CATEGORIES = {
    // Project Transformation Images
    TRANSFORMATIONS: {
        veneers_hollywood_female: {
            before: '/assets/stories/sarah-before.png',
            after: '/assets/stories/sarah-after.png',
            context: 'Enterprise AI implementation - female executive'
        },
        full_arch_restoration_male: {
            before: '/assets/stories/michael-before.png',
            after: '/assets/stories/michael-after.png',
            context: 'Complete smart home automation - male client'
        },
        veneer_repair_female: {
            before: '/assets/stories/emma-before.png',
            after: '/assets/stories/emma-after.png',
            context: 'Trade platform optimization - female client'
        },
        implant_crowns_male: {
            before: '/assets/stories/ahmed-before.png',
            after: '/assets/stories/ahmed-after.png',
            context: 'Consulting & infrastructure upgrade - male client'
        },
        veneers_whitening_female: {
            before: '/assets/stories/lisa-before.png',
            after: '/assets/stories/lisa-after.png',
            context: 'Digital media transformation - female client'
        },
        full_upper_arch_senior: {
            before: '/assets/stories/carlos-before.png',
            after: '/assets/stories/carlos-after.png',
            context: 'Legacy system modernization - senior executive'
        }
    },

    // Client Portrait Images
    CLIENT_PORTRAITS: {
        sarah_uk: '/assets/stories/sarah-profile.png',
        michael_usa: '/assets/stories/michael-profile.png',
        emma_australia: '/assets/stories/emma-profile.png',
        ahmed_uae: '/assets/stories/ahmed-profile.png',
        lisa_canada: '/assets/stories/lisa-profile.png',
        carlos_spain: '/assets/stories/carlos-profile.png'
    },

    // Blog Article Cover Images - Premium Generated Assets
    BLOG_COVERS: {
        ai_automation_guide: '/assets/blog/ai-automation-guide.jpg',
        neural_networks_intro: '/assets/blog/neural-networks-intro.jpg',
        smart_home_guide: '/assets/blog/smart-home-guide.png',
        choosing_tech_stack: '/assets/blog/choosing-tech-stack.png',
        cloud_architecture: '/assets/blog/cloud-architecture.png',
        api_integration: '/assets/blog/api-integration.png',
        tech_trends: '/assets/blog/tech-trends.png',
        digital_transformation: '/assets/blog/digital-transformation.png',
        platform_comparison: '/assets/blog/platform-comparison.png',
        cost_optimization: '/assets/blog/cost-optimization.png',
        ai_implementation_hero: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
        automation_vs_ai: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
        cloud_computing: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
        composite_bonding: 'https://images.unsplash.com/photo-1609840114035-1c29046a8af3?auto=format&fit=crop&w=800&q=80',
        gum_disease: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f72?auto=format&fit=crop&w=800&q=80',
        full_mouth_recon: 'https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?auto=format&fit=crop&w=800&q=80',
        hollywood_smile_pkg: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
        teeth_extraction: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
        bridges_vs_implants: 'https://images.unsplash.com/photo-1598256989766-3d2f9d3a7749?auto=format&fit=crop&w=800&q=80',
        porcelain_vs_emax: 'https://images.unsplash.com/photo-1603533800204-f584e03d9878?auto=format&fit=crop&w=800&q=80',
        snap_on_dentures: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80',
        tmj_treatment: 'https://images.unsplash.com/photo-1512413914633-b5043f4041ea?auto=format&fit=crop&w=800&q=80',
        pediatric_dentistry: 'https://images.unsplash.com/photo-1596700810757-0b1a069fc68a?auto=format&fit=crop&w=800&q=80',
        best_time_turkey: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80',
        packing_tips: 'https://images.unsplash.com/photo-1565514020176-892eb1036662?auto=format&fit=crop&w=800&q=80',
        post_treatment_travel: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80',
        insurance_coverage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80',
        language_barriers: 'https://images.unsplash.com/photo-1543269664-56d93c1b41a6?auto=format&fit=crop&w=800&q=80',
        combining_vacation: 'https://images.unsplash.com/photo-1519817914152-22d216bb9170?auto=format&fit=crop&w=800&q=80',
        choosing_hotel: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
        culture_etiquette: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=800&q=80',
        implants_cost_5yr: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80',
        treatment_plan: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
        dental_anxiety: 'https://images.unsplash.com/photo-1515377905703-c4788e51af93?auto=format&fit=crop&w=800&q=80',
        diet_nutrition: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80',
        veneers_care: 'https://images.unsplash.com/photo-1570215985069-b5eb604439f5?auto=format&fit=crop&w=800&q=80',
        hidden_costs: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
        financing_options: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=800&q=80',
        savings_analysis: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&w=800&q=80',
        currency_exchange: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&w=800&q=80',
        safety_turkey: 'https://images.unsplash.com/photo-1527838832700-50592524d78c?auto=format&fit=crop&w=800&q=80',
        regular_checkups: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f72?auto=format&fit=crop&w=800&q=80',
        warranty_policies: 'https://images.unsplash.com/photo-1631541909061-71e349d1f203?auto=format&fit=crop&w=800&q=80'
    },

    // About Page ESTC Values - Premium Quality Images
    ESTC: {
        excellence: '/assets/about/excellence.png', // ✅ Generated - Premium office interior
        safety: '/assets/about/safety.png', // ✅ Generated - Security protocols
        transparency: '/assets/about/transparency.png', // ✅ Generated - Digital consultation
        care: '/assets/about/care.png' // ✅ Generated - Compassionate team
    },

    // Home Page Journey Steps
    JOURNEY: {
        arrival: '/assets/journey/arrival-nano.png', // Luxury transfer/airport
        consultation: '/assets/journey/consultation-nano.png', // Digital tech planning
        transformation: '/assets/journey/transformation-nano.png' // Antalya beach/office
    },

    // Office Facility Images
    OFFICE_FACILITIES: {
        reception_area: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
        meeting_room: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
        tech_lab: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=800&q=80',
        server_room: '/assets/about/safety.png',
        design_monitors: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
        ai_systems: 'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&w=800&q=80',
        waiting_lounge: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
        workstation: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
        office_exterior: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
    },

    // Misc Images
    MISC: {
        antalya_cityscape: 'https://images.unsplash.com/photo-1569163139394-de4798aa62b6?q=80&w=1920&auto=format&fit=crop'
    },

    // Alias for backward compatibility
    TESTIMONIALS: {
        sarah_before: '/assets/stories/sarah-before.png',
        sarah_after: '/assets/stories/sarah-after.png',
        michael_before: '/assets/stories/michael-before.png',
        michael_after: '/assets/stories/michael-after.png',
        emma_before: '/assets/stories/emma-before.png',
        emma_after: '/assets/stories/emma-after.png',
        ahmed_before: '/assets/stories/ahmed-before.png',
        ahmed_after: '/assets/stories/ahmed-after.png',
        lisa_before: '/assets/stories/lisa-before.png',
        lisa_after: '/assets/stories/lisa-after.png',
        carlos_before: '/assets/stories/carlos-before.png',
        carlos_after: '/assets/stories/carlos-after.png'
    }
} as const;

export const TRANSFORMATION_GROUPS = IMAGE_CATEGORIES.TRANSFORMATIONS;

/**
 * Helper function to get image by category and key
 */
export function getImage(category: keyof typeof IMAGE_CATEGORIES, key: string): string {
    const cat = IMAGE_CATEGORIES[category] as Record<string, string>;
    return cat[key] || '';
}

/**
 * Get transformation pair
 */
export function getTransformation(key: keyof typeof IMAGE_CATEGORIES.TRANSFORMATIONS) {
    return IMAGE_CATEGORIES.TRANSFORMATIONS[key];
}
