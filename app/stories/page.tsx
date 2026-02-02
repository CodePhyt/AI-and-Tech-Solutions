'use client';

import React from 'react';
import Image from 'next/image';
import { IMAGE_CATEGORIES } from '@/lib/image-sources';
import {
    Star,
    CheckCircle,
    MapPin,
    Clock,
    Quote,
    ShieldCheck,
    Play,
    ArrowRight
} from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Link from 'next/link';

export default function StoriesPage() {
    const stories = [
        {
            name: 'Sarah M.',
            age: 34,
            from: 'London, UK',
            treatment: 'Hollywood Smile (18 Veneers)',
            duration: '7 days',
            rating: 5,
            image: IMAGE_CATEGORIES.PATIENT_PORTRAITS.sarah_uk,
            quote: 'I came to Antalya with severe dental anxiety and left with the most beautiful smile I could have imagined.',
            story: 'After years of hiding my smile due to discolored and misaligned teeth, I finally took the leap. The digital smile design showed me exactly what to expect, and the results exceeded it. The coordination was flawless.',
            before: IMAGE_CATEGORIES.TRANSFORMATIONS.veneers_hollywood_female.before,
            after: IMAGE_CATEGORIES.TRANSFORMATIONS.veneers_hollywood_female.after
        },
        {
            name: 'Michael R.',
            age: 52,
            from: 'New York, USA',
            treatment: 'Full Mouth Restoration (All-on-6)',
            duration: '14 days',
            rating: 5,
            image: IMAGE_CATEGORIES.PATIENT_PORTRAITS.michael_usa,
            quote: 'I got my life back. Being able to eat, speak, and smile confidently again is priceless.',
            story: 'Decades of dental problems left me with severe bone loss and missing teeth. I was quoted $65,000 in the US. Smile Turkey handled the Straumann implants and German ceramics at a fraction of the cost.',
            before: IMAGE_CATEGORIES.TRANSFORMATIONS.full_arch_restoration_male.before,
            after: IMAGE_CATEGORIES.TRANSFORMATIONS.full_arch_restoration_male.after
        },
        {
            name: 'Emma K.',
            age: 28,
            from: 'Melbourne, Australia',
            treatment: 'Dental Veneers (10 teeth)',
            duration: '5 days',
            rating: 5,
            image: IMAGE_CATEGORIES.PATIENT_PORTRAITS.emma_australia,
            quote: 'The attention to detail was incredible. They matched the veneers to my natural teeth perfectly.',
            story: 'As a wedding photographer, I was self-conscious about my chipped front teeth. The process was so easy - they handled everything from airport pickup to hotel booking. My new veneers look so natural.',
            before: IMAGE_CATEGORIES.TRANSFORMATIONS.veneer_repair_female.before,
            after: IMAGE_CATEGORIES.TRANSFORMATIONS.veneer_repair_female.after
        }
    ];

    return (
        <div className="min-h-screen pt-24 pb-20 bg-slate-950">
            {/* Background Architecture */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-[#C5A059]/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] left-[-10%] w-[40%] h-[40%] bg-[#006064]/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <ScrollReveal>
                    <div className="text-center mb-24">
                        <span className="text-[#C5A059] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Proof of Excellence</span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
                            Success <span className="text-[#C5A059]">Stories</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                            Peer-reviewed transformations from our global patient base. Every story is a testament to our <span className="text-white font-semibold">Ironclad Protocol</span>.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32">
                    {[
                        { label: 'Verified Patients', value: '10,000+' },
                        { label: 'Nations Served', value: '60+' },
                        { label: 'Patient Rating', value: '4.9/5' },
                        { label: 'Clinical Success', value: '98%' }
                    ].map((stat, i) => (
                        <ScrollReveal key={i} delay={i * 0.1}>
                            <div className="crystal-card p-8 border-[#C5A059]/10 text-center group hover:border-[#C5A059]/30 transition-all">
                                <div className="text-3xl font-bold text-white mb-2 group-hover:text-[#C5A059] transition-colors">{stat.value}</div>
                                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Stories List */}
                <div className="space-y-32">
                    {stories.map((story, index) => (
                        <ScrollReveal key={index}>
                            <div className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                                {/* Text Content */}
                                <div className="flex-1 space-y-8">
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-[#C5A059]/30">
                                            <Image
                                                src={story.image}
                                                alt={story.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-white tracking-tight">{story.name}</h3>
                                            <div className="flex items-center text-slate-500 text-xs font-medium">
                                                <MapPin className="w-3 h-3 mr-1 text-[#C5A059]" />
                                                {story.from}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <Quote className="absolute -top-6 -left-6 w-12 h-12 text-[#C5A059]/10" />
                                        <p className="text-2xl md:text-3xl font-bold text-white leading-tight italic">
                                            "{story.quote}"
                                        </p>
                                    </div>

                                    <p className="text-slate-400 text-lg leading-relaxed">
                                        {story.story}
                                    </p>

                                    <div className="flex flex-wrap gap-4 pt-4">
                                        <div className="px-4 py-2 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/20 text-[#C5A059] text-[10px] font-bold uppercase tracking-widest">
                                            {story.treatment}
                                        </div>
                                        <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 text-[10px] font-bold uppercase tracking-widest flex items-center">
                                            <Clock className="w-3.5 h-3.5 mr-2 text-[#C5A059]" />
                                            {story.duration}
                                        </div>
                                    </div>

                                    <div className="pt-8 flex items-center text-green-500/80 text-[10px] font-bold uppercase tracking-widest">
                                        <ShieldCheck className="w-5 h-5 mr-3" />
                                        Verified Patient Outcome • Brighton Protocol Verified
                                    </div>
                                </div>

                                {/* Comparison Component */}
                                <div className="flex-1 w-full max-w-2xl">
                                    <div className="crystal-card p-4 border-[#C5A059]/20 bg-slate-900/40 relative group overflow-hidden">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="relative space-y-3">
                                                <div className="relative aspect-square rounded-2xl overflow-hidden grayscale opacity-60">
                                                    <Image src={story.before} alt="Before" fill className="object-cover" />
                                                </div>
                                                <span className="block text-center text-[10px] font-bold text-slate-500 uppercase tracking-widest">Baseline State</span>
                                            </div>
                                            <div className="relative space-y-3">
                                                <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-[#C5A059]/40 shadow-[0_0_30px_rgba(197,160,89,0.2)]">
                                                    <Image src={story.after} alt="After" fill className="object-cover" />
                                                </div>
                                                <span className="block text-center text-[10px] font-bold text-[#C5A059] uppercase tracking-widest">Institutional Result</span>
                                            </div>
                                        </div>
                                        {/* Overlay Hover Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                                            <div className="px-6 py-3 bg-[#C5A059] rounded-full text-white font-bold text-sm shadow-xl flex items-center">
                                                <Play className="w-4 h-4 mr-2 fill-white" /> View Full Case Study
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Final CTA */}
                <ScrollReveal>
                    <div className="mt-40 crystal-card p-16 border-[#C5A059]/20 bg-slate-900/40 relative overflow-hidden text-center">
                        <div className="max-w-3xl mx-auto relative z-10">
                            <h2 className="text-4xl font-bold text-white mb-6">Will yours be our next success story?</h2>
                            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                                Our medical consultants are ready to review your case within the hour. Get your private, no-obligation protocol today.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <Link href="/assessment" className="btn-primary px-12 py-5 w-full sm:w-auto">
                                    Start Secure Assessment
                                </Link>
                                <button onClick={() => window.open('https://wa.me/905000000000', '_blank')} className="btn-secondary px-12 py-5 w-full sm:w-auto flex items-center justify-center">
                                    Consult via WhatsApp <ArrowRight className="w-4 h-4 ml-2" />
                                </button>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
}
