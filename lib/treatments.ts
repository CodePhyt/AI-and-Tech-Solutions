export type Currency = 'GBP' | 'USD' | 'EUR';

export interface TreatmentPrice {
    GBP: number;
    USD: number;
    EUR: number;
}

export interface ProcedureStep {
    order: number;
    title: string;
    description: string;
    icon?: string;
}

export interface TreatmentFAQ {
    question: string;
    answer: string;
}

export interface Treatment {
    id: string;
    slug: string;
    name: string;
    category: 'Cosmetic' | 'Surgical' | 'Restorative' | 'General';
    shortDescription: string;
    fullDescription: string;
    imageUrl: string;
    features: string[];
    pricing: {
        basePrice: TreatmentPrice;
        unit: string;
        packages?: Array<{
            title: string;
            price: TreatmentPrice;
            includes: string[];
        }>;
    };
    procedureDetails: {
        duration: string;
        visit1Length: string;
        visit2Length: string;
        gapBetweenVisits: string;
        anesthesia: string;
        recoveryTime: string;
    };
    steps: ProcedureStep[];
    faqs: TreatmentFAQ[];
}

export const TREATMENTS: Record<string, Treatment> = {
    'all-on-6': {
        id: 'treat-001',
        slug: 'all-on-6',
        name: 'All-on-6 (Per Jaw)',
        category: 'Surgical',
        shortDescription: 'Full arch rehabilitation on 6 implants. Maximum stability and load distribution.',
        fullDescription: 'The All-on-6 dental implant procedure creates a permanent prosthesis by using six dental implants. It acts as an anchor for a bridge or over-denture. Six implants are placed in the lower or upper jaw to anchor prosthetic teeth in place permanently.',
        imageUrl: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=1200&q=80',
        features: [
            '6 Precision Implants',
            'Maximum Stability',
            'Full Arch Restoration',
            'Computer-Guided Surgery',
            'Premium Porcelain Bridge',
            'Lifetime Warranty'
        ],
        pricing: {
            basePrice: { GBP: 7200, USD: 9240, EUR: 8400 },
            unit: 'Per Jaw'
        },
        procedureDetails: {
            duration: '2 Visits',
            visit1Length: '3-5 Days',
            visit2Length: '5-7 Days',
            gapBetweenVisits: '3-6 Months',
            anesthesia: 'Local (Sedation available)',
            recoveryTime: '1-2 weeks (initial)'
        },
        steps: [
            { order: 1, title: 'Consultation & CT Scan', description: 'Comprehensive digital imaging and surgical planning.' },
            { order: 2, title: 'Implant Placement', description: 'Six implants are surgically placed into the jawbone.' },
            { order: 3, title: 'Temporary Bridge', description: 'A fixed temporary bridge is attached for immediate function.' },
            { order: 4, title: 'Final Restoration', description: 'After healing, the permanent porcelain bridge is fitted.' }
        ],
        faqs: [
            { question: 'Why choose All-on-6 over All-on-4?', answer: 'All-on-6 provides additional stability and is often recommended for patients with higher bone density or larger jaw structures.' },
            { question: 'How long do they last?', answer: 'With proper care, the implants are designed to last a lifetime.' }
        ]
    },
    'dental-veneers': {
        id: 'treat-002',
        slug: 'dental-veneers',
        name: 'Porcelain Veneers / E-max',
        category: 'Cosmetic',
        shortDescription: 'Transform your smile with custom-made laminates. Correct discoloration, chips, and gaps.',
        fullDescription: 'Veneers are thin shells of porcelain bonded to the front of your teeth. We offer E.max and Laminate veneers for a Hollywood Smile makeover, providing natural light reflection and superior aesthetics.',
        imageUrl: '/assets/treatments/veneers-hero.jpg',
        features: [
            'E-max Porcelain Materials',
            'Color-Matched to Your Teeth',
            'Stain-Resistant Surface',
            'Minimally Invasive',
            'Natural Light Reflection',
            '3-5 Day Treatment'
        ],
        pricing: {
            basePrice: { GBP: 225, USD: 300, EUR: 265 },
            unit: 'Per Tooth'
        },
        procedureDetails: {
            duration: '5-7 Days',
            visit1Length: 'Single Visit',
            visit2Length: 'N/A',
            gapBetweenVisits: 'N/A',
            anesthesia: 'Local',
            recoveryTime: '1-2 days'
        },
        steps: [
            { order: 1, title: 'Smile Design', description: 'Digital planning and tooth preparation.' },
            { order: 2, title: 'Temporary Veneers', description: 'Protective temporaries while your custom veneers are crafted.' },
            { order: 3, title: 'Final Bonding', description: 'The permanent porcelain shells are bonded to your teeth.' }
        ],
        faqs: [
            { question: 'How long do veneers last?', answer: 'Porcelain veneers typically last 10-15 years with excellent oral hygiene.' },
            { question: 'Will my teeth be shaved?', answer: 'Only a minimal amount of enamel (0.3-0.5mm) is typically removed.' }
        ]
    },
    'zirconium-crowns': {
        id: 'treat-003',
        slug: 'zirconium-crowns',
        name: 'Zirconium Crowns',
        category: 'Restorative',
        shortDescription: 'Full coverage caps for damaged teeth. Strength of metal with porcelain aesthetics.',
        fullDescription: 'Crowns encase the entire tooth, providing structural support. Zirconium crowns are metal-free, biocompatible, and highly durable, making them ideal for both front and back teeth.',
        imageUrl: 'https://images.unsplash.com/photo-1603533800204-f584e03d9878?auto=format&fit=crop&w=1200&q=80',
        features: [
            'High Strength Zirconia',
            'Metal-Free Biocompatibility',
            'Natural Aesthetics',
            'Protects Damaged Teeth',
            'Custom Color Matching',
            '5-7 Day Treatment'
        ],
        pricing: {
            basePrice: { GBP: 175, USD: 225, EUR: 200 },
            unit: 'Per Crown'
        },
        procedureDetails: {
            duration: '5-7 Days',
            visit1Length: 'Single Visit',
            visit2Length: 'N/A',
            gapBetweenVisits: 'N/A',
            anesthesia: 'Local',
            recoveryTime: '1-2 days'
        },
        steps: [
            { order: 1, title: 'Preparation', description: 'Reshaping the tooth to accommodate the crown.' },
            { order: 2, title: 'Digital Impression', description: 'High-precision scanning of the prepared tooth.' },
            { order: 3, title: 'Fitting', description: 'Permanent placement of the zirconium crown.' }
        ],
        faqs: [
            { question: 'Are zirconium crowns better than PFM?', answer: 'Yes, they offer better aesthetics as there is no dark metal line at the gum area.' },
            { question: 'How durable are they?', answer: 'Zirconium is incredibly strong and resistant to chipping.' }
        ]
    },
    'teeth-whitening': {
        id: 'treat-004',
        slug: 'teeth-whitening',
        name: 'Laser Teeth Whitening',
        category: 'Cosmetic',
        shortDescription: 'Instant brightening using advanced laser technology. Up to 8 shades whiter.',
        fullDescription: 'Professional in-office whitening using a high-concentration gel activated by a laser light source. Removes deep stains from coffee, tea, and smoking in just one session.',
        imageUrl: '/assets/treatments/whitening-hero.jpg',
        features: [
            'Up to 8 Shades Lighter',
            'Professional Concentration',
            'Laser Activated',
            'Enamel Safe',
            '1-Hour Procedure',
            'Zero Sensitivity Formula'
        ],
        pricing: {
            basePrice: { GBP: 175, USD: 220, EUR: 200 },
            unit: 'Per Session'
        },
        procedureDetails: {
            duration: '1 Hour',
            visit1Length: '1 Hour',
            visit2Length: 'N/A',
            gapBetweenVisits: 'N/A',
            anesthesia: 'None',
            recoveryTime: '24 hours'
        },
        steps: [
            { order: 1, title: 'Preparation', description: 'Gums are protected with a special barrier.' },
            { order: 2, title: 'Gel Application', description: 'Professional whitening gel is applied to teeth.' },
            { order: 3, title: 'Laser Activation', description: 'Laser light activates the gel for rapid whitening.' }
        ],
        faqs: [
            { question: 'How long does it last?', answer: 'Results typically last 1-2 years depending on your lifestyle and diet.' },
            { question: 'Does it cause sensitivity?', answer: 'Most patients experience little to no sensitivity with our modern laser systems.' }
        ]
    },
    'root-canal': {
        id: 'treat-005',
        slug: 'root-canal',
        name: 'Root Canal Treatment',
        category: 'Restorative',
        shortDescription: 'Save an infected tooth from extraction. Pain-free endodontics.',
        fullDescription: 'Removal of infected pulp/nerve tissue from inside the tooth. The canal is cleaned, disinfected, and sealed to prevent further infection and save the natural tooth structure.',
        imageUrl: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80',
        features: [
            'Saves Natural Teeth',
            'Advanced Disinfection',
            'Precision Microscopy',
            'Pain-Free Technique',
            'Prevents Extractions',
            'Long-Term Success'
        ],
        pricing: {
            basePrice: { GBP: 120, USD: 150, EUR: 140 },
            unit: 'Per Tooth/Canal'
        },
        procedureDetails: {
            duration: '1-2 Hours',
            visit1Length: '1-2 Days',
            visit2Length: 'N/A',
            gapBetweenVisits: 'N/A',
            anesthesia: 'Local',
            recoveryTime: '1-3 days'
        },
        steps: [
            { order: 1, title: 'Access', description: 'An opening is made in the crown to access the pulp chamber.' },
            { order: 2, title: 'Cleaning', description: 'Files are used to remove the infected nerve and shape the canals.' },
            { order: 3, title: 'Filling', description: 'Canals are filled with gutta-percha and sealed.' }
        ],
        faqs: [
            { question: 'Is a root canal painful?', answer: 'With modern local anesthesia, the procedure is no more uncomfortable than a standard filling.' },
            { question: 'Do I need a crown after?', answer: 'Generally yes, as root-canal-treated teeth can become more brittle over time.' }
        ]
    },
    'gum-contouring': {
        id: 'treat-006',
        slug: 'gum-contouring',
        name: 'Laser Gum Contouring',
        category: 'Cosmetic',
        shortDescription: 'Reshape your gum line to fix a gummy smile. Precision laser treatment.',
        fullDescription: 'Using a diode laser, excess gum tissue is vaporized to reveal more of the tooth crown and create a symmetrical gum line. Ideal for patients who feel their teeth look too short.',
        imageUrl: '/assets/treatments/veneers-hero.jpg',
        features: [
            'Precision Laser Reshaping',
            'Fast Healing',
            'No Scapel/Stitches',
            'Immediate Visual Results',
            'Minimally Invasive',
            'Symmetrical Smile'
        ],
        pricing: {
            basePrice: { GBP: 150, USD: 200, EUR: 180 },
            unit: 'Per Quadrant'
        },
        procedureDetails: {
            duration: '1 Hour',
            visit1Length: '1 Day',
            visit2Length: 'N/A',
            gapBetweenVisits: 'N/A',
            anesthesia: 'Local',
            recoveryTime: '2-5 days'
        },
        steps: [
            { order: 1, title: 'Marking', description: 'Careful mapping of the new gum line.' },
            { order: 2, title: 'Laser Reshaping', description: 'Precision removal of excess tissue with a diode laser.' },
            { order: 3, title: 'Aftercare', description: 'Cleaning and application of protective gel.' }
        ],
        faqs: [
            { question: 'Is it permanent?', answer: 'Yes, once the gum tissue is reshaped with the laser, it typically does not grow back.' },
            { question: 'Does it hurt?', answer: 'The laser cauterizes as it cuts, meaning very little pain and virtually no bleeding.' }
        ]
    },
    'sinus-lift': {
        id: 'treat-007',
        slug: 'sinus-lift',
        name: 'Sinus Lifting',
        category: 'Surgical',
        shortDescription: 'Bone augmentation for the upper jaw to allow for implant placement.',
        fullDescription: 'A surgical procedure to add bone to the upper jaw in the area of molars and premolars, lifting the sinus membrane to create enough space for dental implants.',
        imageUrl: '/assets/treatments/implants-hero.jpg',
        features: [
            'Enables Upper Implants',
            'Advanced Bone Grafting',
            'Precision Surgical Access',
            'Restores Bone Volume',
            'High Success Rate',
            'Prerequisite for Many'
        ],
        pricing: {
            basePrice: { GBP: 250, USD: 350, EUR: 300 },
            unit: 'Per Side'
        },
        procedureDetails: {
            duration: '1-2 Hours',
            visit1Length: 'Surgery Only',
            visit2Length: 'N/A',
            gapBetweenVisits: 'N/A',
            anesthesia: 'Local',
            recoveryTime: '1-2 weeks'
        },
        steps: [
            { order: 1, title: 'Incision', description: 'Small access window created in the jawbone.' },
            { order: 2, title: 'Membrane Elevation', description: 'The sinus membrane is gently lifted upwards.' },
            { order: 3, title: 'Bone Grafting', description: 'Bone substitute material is packed into the space.' }
        ],
        faqs: [
            { question: 'Why do I need this?', answer: 'If your sinus is too close to the jaw or bone has been lost, there is not enough depth for an implant.' },
            { question: 'How long before implants?', answer: 'Typically 4-6 months of healing is required before placing implants in the grafted bone.' }
        ]
    },
    'composite-bonding': {
        id: 'treat-008',
        slug: 'composite-bonding',
        name: 'Composite Bonding',
        category: 'Cosmetic',
        shortDescription: 'Non-invasive repair for chipped or misshapen teeth. No drilling required.',
        fullDescription: 'Artistic application of high-grade composite resin to sculpt the shape of the tooth. Ideal for minor cosmetic improvements like closing gaps or fixing chips in a single visit.',
        imageUrl: '/assets/treatments/veneers-hero.jpg',
        features: [
            'Zero Tooth Preparation',
            'Single Visit',
            'Immediate Results',
            'Reversible Procedure',
            'Affordable Transformation',
            'Minimally Invasive'
        ],
        pricing: {
            basePrice: { GBP: 100, USD: 130, EUR: 115 },
            unit: 'Per Tooth'
        },
        procedureDetails: {
            duration: '2-3 Hours',
            visit1Length: 'Single Visit',
            visit2Length: 'N/A',
            gapBetweenVisits: 'N/A',
            anesthesia: 'None usually',
            recoveryTime: 'Immediate'
        },
        steps: [
            { order: 1, title: 'Etching', description: 'The tooth surface is slightly roughened to aid bonding.' },
            { order: 2, title: 'Resin Application', description: 'High-grade resin is sculpted to the desired shape.' },
            { order: 3, title: 'Curing & Polishing', description: 'UV light hardens the resin, followed by high-gloss polishing.' }
        ],
        faqs: [
            { question: 'Does bonding stain?', answer: 'Yes, composite resin can stain over time from coffee, tea, or smoking.' },
            { question: 'How long does it last?', answer: 'Typically 5-7 years before touch-ups or replacement are needed.' }
        ]
    },
    'all-on-4': {
        id: 'treat-009',
        slug: 'all-on-4',
        name: 'All-on-4 System',
        category: 'Surgical',
        shortDescription: 'Full arch rehabilitation on just 4 implants. Immediate function.',
        fullDescription: 'A specialized technique where 2 straight and 2 angled implants support a full fixed bridge. This system often avoids the need for bone grafting by utilizing existing bone optimally.',
        imageUrl: '/assets/treatments/implants-hero.jpg',
        features: [
            '4 Strategic Implants',
            'Avoids Bone Grafting',
            'Immediate Functionality',
            'Full Set of Teeth',
            'Fixed Solution',
            'Lifetime Warranty'
        ],
        pricing: {
            basePrice: { GBP: 5600, USD: 7240, EUR: 6600 },
            unit: 'Per Jaw'
        },
        procedureDetails: {
            duration: '2 Visits',
            visit1Length: '3-5 Days',
            visit2Length: '5-7 Days',
            gapBetweenVisits: '3-6 Months',
            anesthesia: 'Local/Sedation',
            recoveryTime: '1-2 weeks (initial)'
        },
        steps: [
            { order: 1, title: 'Surgical Prep', description: 'CT scanning and guide fabrication.' },
            { order: 2, title: 'Implant Placement', description: 'Four implants placed at strategic angles.' },
            { order: 3, title: 'Temporary Fixed Bridge', description: 'Provisional teeth attached within 24-48 hours.' },
            { order: 4, title: 'Final Hybrid Bridge', description: 'The permanent restoration is fitted after healing.' }
        ],
        faqs: [
            { question: 'Can I eat immediately?', answer: 'You will follow a soft-food diet for the first few weeks as the implants integrate.' },
            { question: 'Is it a removable denture?', answer: 'No, it is a fixed bridge that only a dentist can remove.' }
        ]
    },
    'hollywood-smile': {
        id: 'treat-010',
        slug: 'hollywood-smile',
        name: 'Hollywood Smile Makeover',
        category: 'Cosmetic',
        shortDescription: 'The ultimate aesthetic package. 20-28 units of Zirconia or E.max.',
        fullDescription: 'A comprehensive smile transformation considering your facial features, skin tone, and lip line. Ideally includes 20-28 units of high-grade porcelain to create a perfect, symmetrical smile.',
        imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80',
        features: [
            'Full Mouth Harmony',
            '20-28 Units Included',
            'Digital Smile Design',
            'Premium Porcelain/E-max',
            'Luxury Coordination',
            'Complete Rejuvenation'
        ],
        pricing: {
            basePrice: { GBP: 3500, USD: 4500, EUR: 4000 },
            unit: 'Full Mouth (20 Teeth)'
        },
        procedureDetails: {
            duration: '5-7 Days',
            visit1Length: 'Single Visit',
            visit2Length: 'N/A',
            gapBetweenVisits: 'N/A',
            anesthesia: 'Local',
            recoveryTime: '1-2 weeks'
        },
        steps: [
            { order: 1, title: 'Analysis', description: 'Photographic and digital analysis of your facial structure.' },
            { order: 2, title: 'Preparation', description: 'Minimal tooth preparation according to the plan.' },
            { order: 3, title: 'Final Placement', description: 'Seating the full set of custom-made restorations.' }
        ],
        faqs: [
            { question: 'How many teeth are included?', answer: 'Typically 20 units (10 upper, 10 lower) to create a visible transformation.' },
            { question: 'Is whitening included?', answer: 'Yes, often whitening of remaining natural teeth is part of the protocol.' }
        ]
    },
    'dental-implants': {
        id: 'treat-011',
        slug: 'dental-implants',
        name: 'Sovereign Dental Implants',
        category: 'Surgical',
        shortDescription: 'The gold standard in tooth replacement. Vetted titanium and zirconia systems.',
        fullDescription: 'Our dental implant protocol utilizes only premium global brands like Straumann and Nobel Biocare. Each placement is computer-guided for micron-level precision, ensuring lifelong stability and natural aesthetic integration.',
        imageUrl: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=1200&q=80',
        features: [
            'Premium Grade Titanium',
            'Computer-Guided Placement',
            'Lifetime Clinical Warranty',
            'Immediate Loading Options',
            'Digital Surgical Blueprint',
            'Sedation Dentistry Available'
        ],
        pricing: {
            basePrice: { GBP: 450, USD: 580, EUR: 520 },
            unit: 'Per Implant (Fixture Only)'
        },
        procedureDetails: {
            duration: '2 Visits',
            visit1Length: '2-3 Days',
            visit2Length: '5-7 Days',
            gapBetweenVisits: '3 Months',
            anesthesia: 'Local/Sedation',
            recoveryTime: '1 week (initial)'
        },
        steps: [
            { order: 1, title: 'Digital Scannometry', description: '3D CBCT imaging to map bone density and nerve locations.' },
            { order: 2, title: 'Surgical Placement', description: 'Precision installation of the implant fixture under local anesthesia.' },
            { order: 3, title: 'Healing Phase', description: 'Osteointegration period where the implant fuses with the jawbone.' },
            { order: 4, title: 'Prosthetic Loading', description: 'Fitting of the final abutment and custom porcelain crown.' }
        ],
        faqs: [
            { question: 'What brands do you use?', answer: 'We exclusively coordinate with Straumann, Nobel Biocare, and Osstem systems.' },
            { question: 'Is the procedure painful?', answer: 'With modern techniques and optional sedation, most patients report minimal discomfort similar to a standard extraction.' }
        ]
    },
    'full-mouth-restoration': {
        id: 'treat-012',
        slug: 'full-mouth-restoration',
        name: 'Full Mouth Reconstruction',
        category: 'Restorative',
        shortDescription: 'Comprehensive rehabilitation for complex cases. Restoring function and aesthetics.',
        fullDescription: 'The pinnacle of restorative dentistry. This protocol involves a strategic combination of implants, crowns, and veneers to reconstruct a collapsed bite, replace missing teeth, and transform the entire oral architecture.',
        imageUrl: 'https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?auto=format&fit=crop&w=1200&q=80',
        features: [
            'Total Arch Reconstruction',
            'Bite Alignment Correction',
            'Multidisciplinary Team',
            'Advanced Material Suite',
            'Full Functional Recovery',
            'Luxury Agency Concierge'
        ],
        pricing: {
            basePrice: { GBP: 8500, USD: 10900, EUR: 9800 },
            unit: 'Full Reconstructive Package'
        },
        procedureDetails: {
            duration: '2-3 Visits',
            visit1Length: '7 Days',
            visit2Length: '10 Days',
            gapBetweenVisits: '3-4 Months',
            anesthesia: 'General/Sedation',
            recoveryTime: '2-3 weeks'
        },
        steps: [
            { order: 1, title: 'Architectural Planning', description: 'Complete mapping of the current oral state and desired outcome.' },
            { order: 2, title: 'Foundation Stabilization', description: 'Addressing underlying bone or gum issues and placing implants if needed.' },
            { order: 3, title: 'Provisional Phase', description: 'Modeling the new bite with high-precision temporary restorations.' },
            { order: 4, title: 'Final Deployment', description: 'Installation of permanent E-max or Zirconia reconstructions.' }
        ],
        faqs: [
            { question: 'How long does the total process take?', answer: 'Depending on complexity, it can range from 1 to 6 months including healing phases.' },
            { question: 'Who performs the surgery?', answer: 'Only senior oral surgeons with at least 15 years of reconstructive experience.' }
        ]
    }
};
