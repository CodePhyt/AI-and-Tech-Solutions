import { IMAGE_CATEGORIES } from '@/lib/image-sources';

export default function ClinicsPage() {
    const facilities = [
        {
            image: IMAGE_CATEGORIES.CLINIC_FACILITIES.reception_area,
            title: 'Modern Reception',
            description: 'Welcoming lobby with Turkish design elements and multilingual staff'
        },
        {
            image: IMAGE_CATEGORIES.CLINIC_FACILITIES.treatment_room,
            title: 'Private Treatment Rooms',
            description: 'Soundproofed rooms with panoramic views and latest dental chairs'
        },
        {
            image: IMAGE_CATEGORIES.CLINIC_FACILITIES.cbct_scanner,
            title: '3D CBCT Scanner',
            description: 'Cone beam CT for precise implant planning and diagnostics'
        },
        {
            image: IMAGE_CATEGORIES.CLINIC_FACILITIES.sterilization,
            title: 'Sterilization Center',
            description: 'Hospital-grade autoclave systems and instrument tracking'
        },
        {
            image: IMAGE_CATEGORIES.CLINIC_FACILITIES.smile_design_monitor,
            title: 'Digital Smile Design',
            description: 'Interactive screens for previewing your transformation'
        },
        {
            image: IMAGE_CATEGORIES.CLINIC_FACILITIES.cadcam_milling,
            title: 'CAD/CAM Lab',
            description: 'In-house crown and veneer fabrication for same-day service'
        },
        {
            image: IMAGE_CATEGORIES.CLINIC_FACILITIES.waiting_lounge,
            title: 'VIP Lounge',
            description: 'Comfortable waiting area with Mediterranean views and refreshments'
        },
        {
            image: IMAGE_CATEGORIES.CLINIC_FACILITIES.dental_chair,
            title: 'Advanced Equipment',
            description: 'LED surgical lights, intraoral cameras, and sedation systems'
        },
        {
            image: IMAGE_CATEGORIES.CLINIC_FACILITIES.clinic_exterior,
            title: 'Clinic Exterior',
            description: 'Modern facility in premium Antalya medical district'
        }
    ];

    return (
        <div className="min-h-screen pt-20">
            <section className="section-container">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        World-Class <span className="gradient-text">Facilities</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        State-of-the-art dental technology and luxury patient experience in the heart of Antalya, Turkey
                    </p>
                </div>

                {/* Facility Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {facilities.map((facility, i) => (
                        <div key={i} className="crystal-card overflow-hidden hover:glow transition-all duration-300 group">
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={facility.image}
                                    alt={facility.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">{facility.title}</h3>
                                <p className="text-slate-400">{facility.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="crystal-card p-8 hover:glow transition-all">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            <span className="gradient-text">Medical Excellence</span>
                        </h2>
                        <ul className="space-y-4 text-slate-300">
                            <li className="flex items-start">
                                <svg className="w-6 h-6 text-sky-400 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span><strong>JCI Accreditation</strong> - International healthcare quality standards</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-6 h-6 text-sky-400 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span><strong>ISO 9001:2015</strong> - Certified quality management systems</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-6 h-6 text-sky-400 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span><strong>HEPA Air Filtration</strong> - Medical-grade air purification throughout clinic</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-6 h-6 text-sky-400 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span><strong>Premium Materials</strong> - Straumann, Nobel Biocare, E-max, Zirconia</span>
                            </li>
                        </ul>
                    </div>
                    <div className="glass-card p-8 hover:glow transition-all">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            <span className="gradient-text">Patient Comfort</span>
                        </h2>
                        <ul className="space-y-4 text-slate-300">
                            <li className="flex items-start">
                                <svg className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span><strong>5-Star Hotel Partnerships</strong> - Luxury beachfront accommodations</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span><strong>VIP Airport Transfer</strong> - Private car service to/from hotel and clinic</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span><strong>Multilingual Staff</strong> - English, German, Russian, Arabic, Dutch speakers</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span><strong>All-Inclusive Packages</strong> - Treatment, accommodation, transfers included</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 text-center crystal-card p-12 rounded-3xl">
                    <h2 className="text-3xl font-bold text-white mb-4">Experience Premium Dental Care</h2>
                    <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                        Schedule a virtual tour of our facilities and meet our team before you travel.
                    </p>
                    <a href="#chat" className="btn-primary inline-block">
                        Book Virtual Consultation
                    </a>
                </div>
            </section>
        </div>
    );
}
