'use client';

import Link from 'next/link';
import { ArrowRight, Star, CheckCircle, Clock, Award, Play } from 'lucide-react';
import CinematicHero from '@/components/hero/CinematicHero';
import SharidaStorySection from '@/components/homepage/EmmaStorySection';
import SavingsCalculator from '@/components/features/SavingsCalculator';
import DiamondTrustSection from '@/components/homepage/DiamondTrustSection';
import { IMAGE_CATEGORIES } from '@/lib/image-sources';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* S.I.T.E. Framework Implementation */}

      {/* S (STRATEGY/HOOK) - Cinematic Scroll Hero with Image Sequence */}
      <CinematicHero />

      {/* Real Patient Story - Sharida */}
      <SharidaStorySection />

      {/* Quick Hook Section - Your Dream Smile, 70% Cheaper */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 px-6 py-3 crystal-card rounded-full text-sm mb-6">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <span className="text-slate-300 font-semibold">Rated 4.9/5 by 10,000+ patients</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Your Dream Smile
              <br />
              <span className="gradient-text">70% Cheaper</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Premium Dental Tourism in Paradise
            </p>
          </div>

          {/* Featured Treatments Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'Dental Veneers',
                slug: 'dental-veneers',
                price: 'Starting at $250',
                image: '/assets/treatments/veneers.jpg',
                features: ['E-max Porcelain', '10-Year Warranty', 'Natural Look'],
              },
              {
                title: 'Dental Implants',
                slug: 'dental-implants',
                price: 'Starting at $800',
                image: '/assets/treatments/implants.jpg',
                features: ['Straumann/Nobel', 'Lifetime Warranty', 'Permanent Solution'],
              },
              {
                title: 'Hollywood Smile',
                slug: 'hollywood-smile',
                price: 'Starting at $3,500',
                image: '/assets/treatments/hollywood-smile.jpg',
                features: ['Complete Makeover', 'Luxury Package', 'Hotel Included'],
              },
            ].map((treatment) => (
              <div key={treatment.slug} className="crystal-card overflow-hidden group hover:scale-105 transition-transform duration-300">
                <div
                  className="h-64 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${treatment.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
                  <div className="absolute top-4 right-4 px-4 py-2 bg-green-500/90 backdrop-blur-sm rounded-full text-white font-bold">
                    {treatment.price}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">{treatment.title}</h3>

                  <ul className="space-y-2 mb-6">
                    {treatment.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-400">
                        <CheckCircle className="w-5 h-5 text-sky-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/treatments/${treatment.slug}`}
                    className="flex items-center justify-between text-sky-400 hover:text-sky-300 font-semibold group-hover:gap-4 transition-all"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* T (TEXT/PROOF) - Premium Diamond Trust Section */}
      <DiamondTrustSection />


      {/* Journey Timeline with Tech-System Aesthetic */}
      <section className="relative py-24 overflow-hidden">
        {/* Dotted Grid Background */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:30px_30px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-4">
              Your <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-slate-400">From touchdown to transformation</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Arrival',
                description: 'Luxury airport transfer in a Mercedes S-Class to your 5-star beachfront hotel',
                image: IMAGE_CATEGORIES.JOURNEY.arrival,
                icon: '✈️',
              },
              {
                step: '02',
                title: 'Consultation',
                description: 'Meet your specialist, digital scan, custom treatment plan with 3D preview',
                image: IMAGE_CATEGORIES.JOURNEY.consultation,
                icon: '🦷',
              },
              {
                step: '03',
                title: 'Transformation',
                description: 'Premium treatment in our state-of-the-art clinic, then explore Antalya\'s beaches',
                image: IMAGE_CATEGORIES.JOURNEY.transformation,
                icon: '✨',
              },
            ].map((phase, idx) => (
              <div key={idx} className="crystal-card p-8 relative group hover:scale-105 transition-transform">
                <div
                  className="absolute inset-0 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity bg-cover bg-center"
                  style={{ backgroundImage: `url(${phase.image})` }}
                />
                <div className="relative z-10">
                  <div className="text-6xl mb-4">{phase.icon}</div>
                  <div className="text-sm text-sky-400 font-bold mb-2">STEP {phase.step}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{phase.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{phase.description}</p>
                </div>

                {/* Connection line */}
                {idx < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-sky-500/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E (ENGINE/CTA) - Interactive Savings Calculator */}
      <SavingsCalculator />

      {/* Final CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 via-blue-600/20 to-cyan-500/20 blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-6xl font-bold mb-6">
            Ready for Your <span className="gradient-text">Transformation?</span>
          </h2>
          <p className="text-2xl text-slate-400 mb-10">
            Book a free consultation with Safiye, our AI concierge
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="#chat"
              className="btn-primary text-xl px-12 py-6 group"
            >
              Start Chatting with Safiye
              <ArrowRight className="inline-block ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link href="/contact" className="btn-secondary text-xl px-12 py-6">
              Schedule a Call
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-16 text-slate-500">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>No Obligation</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-sky-400" />
              <span>Response in Minutes</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-yellow-500" />
              <span>15+ Years Trusted</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
