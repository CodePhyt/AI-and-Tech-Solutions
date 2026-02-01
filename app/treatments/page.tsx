'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';

const TREATMENTS = [
    {
        title: 'Dental Veneers',
        slug: 'dental-veneers',
        price: 'Starting at €250',
        description: 'Transform your smile with premium porcelain veneers. Custom-made for a natural, perfect look.',
        image: '/assets/treatments/veneers-hero.jpg',
        features: ['E-max Porcelain', '10-Year Warranty', 'Stain Resistant'],
    },
    {
        title: 'Dental Implants',
        slug: 'dental-implants',
        price: 'Starting at €400',
        description: 'Permanent solution for missing teeth. Premium Straumann implants with lifetime warranty.',
        image: '/assets/treatments/implants-hero.jpg',
        features: ['Lifetime Warranty', '98% Success Rate', 'Swiss Technology'],
    },
    {
        title: 'Teeth Whitening',
        slug: 'teeth-whitening',
        price: 'Starting at €200',
        description: 'Professional laser whitening for a brighter smile in just one hour.',
        image: '/assets/treatments/whitening-hero.jpg',
        features: ['8 Shades Whiter', 'Safe & Painless', 'Instant Results'],
    },
    {
        title: 'Hollywood Smile',
        slug: 'hollywood-smile',
        price: 'Starting at €3,500',
        description: 'Complete smile makeover including veneers, whitening, and gum contouring.',
        image: '/assets/treatments/hollywood-smile-hero.jpg',
        features: ['Full Makeover', 'Digital Design', 'VIP Service'],
    },
    {
        title: 'Full Mouth Restoration',
        slug: 'full-mouth-restoration',
        price: 'Starting at €6,000',
        description: 'Comprehensive restoration for complex cases using implants, crowns, and bridges.',
        image: '/assets/treatments/full-restoration-hero.jpg',
        features: ['Functional Restore', 'Aesthetic Focus', 'Complex Cases'],
    },
];

export default function TreatmentsIndexPage() {
    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Our Premium <span className="gradient-text">Treatments</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        World-class dental care using the latest technology and premium materials at a fraction of the cost.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TREATMENTS.map((treatment) => (
                        <Link
                            key={treatment.slug}
                            href={`/treatments/${treatment.slug}`}
                            className="crystal-card group overflow-hidden hover:scale-[1.02] transition-transform duration-300"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${treatment.image})` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                                    <div className="px-3 py-1 bg-sky-500/90 backdrop-blur-sm rounded-full text-xs font-bold text-white">
                                        {treatment.price}
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
                                    {treatment.title}
                                </h3>
                                <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                                    {treatment.description}
                                </p>

                                <ul className="space-y-2 mb-6">
                                    {treatment.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-slate-300 text-sm">
                                            <CheckCircle className="w-4 h-4 text-sky-400 mr-2 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex items-center text-sky-400 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                                    View Details <ArrowRight className="w-4 h-4 ml-2" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
