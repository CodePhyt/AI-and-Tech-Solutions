'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { IMAGE_CATEGORIES, TRANSFORMATION_GROUPS } from '@/lib/image-sources';
import {
    Filter,
    Maximize2,
    ChevronLeft,
    ChevronRight,
    Plus,
    X,
    Sparkles,
    ShieldCheck
} from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';

export default function SmileGalleryPage() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [activeImage, setActiveImage] = useState<any>(null);

    const categories = ['All', 'Veneers', 'Implants', 'Hollywood Smile', 'Restorative'];

    const galleryItems = [
        {
            id: 1,
            title: 'Full Hollywood Makeover',
            category: 'Hollywood Smile',
            description: '20 E-max porcelain veneers for a natural bleached look.',
            before: IMAGE_CATEGORIES.TRANSFORMATIONS.veneers_hollywood_female.before,
            after: IMAGE_CATEGORIES.TRANSFORMATIONS.veneers_hollywood_female.after
        },
        {
            id: 2,
            title: 'Arch Rehabilitation',
            category: 'Implants',
            description: 'All-on-6 protocol with premium titanium ceramic bridges.',
            before: IMAGE_CATEGORIES.TRANSFORMATIONS.full_arch_restoration_male.before,
            after: IMAGE_CATEGORIES.TRANSFORMATIONS.full_arch_restoration_male.after
        },
        {
            id: 3,
            title: 'Gap Correction & Contouring',
            category: 'Veneers',
            description: 'Strategic bonding and 8 veneers to correct diastema.',
            before: IMAGE_CATEGORIES.TRANSFORMATIONS.veneer_repair_female.before,
            after: IMAGE_CATEGORIES.TRANSFORMATIONS.veneer_repair_female.after
        },
        // Using other transformations from the image-sources if available
        ...Object.values(TRANSFORMATION_GROUPS).slice(3).map((group: any, idx) => ({
            id: 10 + idx,
            title: `Aesthetic Transformation #${10 + idx}`,
            category: idx % 2 === 0 ? 'Restorative' : 'Hollywood Smile',
            description: 'Institutional grade clinical restoration following our Ironclad protocol.',
            before: group.before,
            after: group.after
        }))
    ];

    const filteredItems = selectedCategory === 'All'
        ? galleryItems
        : galleryItems.filter(item => item.category === selectedCategory);

    return (
        <div className="min-h-screen pt-24 pb-20 bg-slate-950">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="text-[#C5A059] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Manifest Results</span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
                            Sovereign <span className="text-[#C5A059]">Gallery</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                            Verified clinical transformations. No filters. Just precision artistry and the <span className="text-white font-semibold">Diamond Treatment Protocol</span>.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Filter Bar */}
                <ScrollReveal delay={0.2}>
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${selectedCategory === cat
                                        ? 'bg-[#C5A059] text-white border-[#C5A059] shadow-[0_0_20px_rgba(197,160,89,0.3)]'
                                        : 'text-slate-400 border-white/10 hover:border-[#C5A059]/40'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </ScrollReveal>

                {/* Gallery Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item, idx) => (
                            <motion.div
                                layout
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, delay: idx * 0.05 }}
                                className="group cursor-pointer"
                                onClick={() => setActiveImage(item)}
                            >
                                <div className="crystal-card p-3 border-[#C5A059]/10 hover:border-[#C5A059]/40 transition-all bg-slate-900/40 relative overflow-hidden">
                                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6">
                                        {/* After Image (Visible) */}
                                        <Image
                                            src={item.after}
                                            alt={item.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />

                                        {/* Before Image (Hidden, shown as small preview) */}
                                        <div className="absolute bottom-4 left-4 w-20 h-20 rounded-lg overflow-hidden border-2 border-white/20 shadow-2xl z-20 grayscale hover:grayscale-0 transition-all group-hover:w-24 group-hover:h-24">
                                            <Image src={item.before} alt="Before" fill className="object-cover" />
                                            <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                                                <span className="text-[8px] font-bold text-white uppercase tracking-tighter">Before</span>
                                            </div>
                                        </div>

                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                            <div className="flex items-center text-[#C5A059] text-[10px] font-bold uppercase tracking-widest mb-2">
                                                <Sparkles className="w-4 h-4 mr-2" /> Transformation Protocol
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                            <div className="flex justify-between items-center">
                                                <span className="text-slate-400 text-xs">{item.category}</span>
                                                <Maximize2 className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-5 pb-5">
                                        <p className="text-slate-500 text-sm leading-relaxed line-clamp-1">{item.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Trust Footer */}
                <ScrollReveal>
                    <div className="mt-32 p-12 crystal-card border-[#C5A059]/20 text-center max-w-4xl mx-auto">
                        <div className="flex justify-center mb-8">
                            <div className="w-16 h-16 rounded-2xl bg-[#C5A059]/10 border border-[#C5A059]/20 flex items-center justify-center text-[#C5A059]">
                                <ShieldCheck className="w-8 h-8" />
                            </div>
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-6">Authenticity Guarantee</h2>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            Every case displayed is a real patient of our partner clinics, overseen by our Personal Coordinators. We operate with absolute clinical transparency—no stock photos, no digital enhancements, just genuine professional results.
                        </p>
                    </div>
                </ScrollReveal>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {activeImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-slate-950/95 backdrop-blur-xl"
                    >
                        <button
                            onClick={() => setActiveImage(null)}
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
                        >
                            <X className="w-10 h-10" />
                        </button>

                        <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <span className="inline-block px-4 py-2 rounded-lg bg-[#C5A059]/20 text-[#C5A059] text-xs font-bold uppercase tracking-widest">Baseline State</span>
                                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/5 grayscale saturate-50">
                                    <Image src={activeImage.before} alt="Before" fill className="object-cover" />
                                </div>
                            </div>
                            <div className="space-y-6">
                                <span className="inline-block px-4 py-2 rounded-lg bg-green-500/20 text-green-500 text-xs font-bold uppercase tracking-widest">Institutional Result</span>
                                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-[#C5A059]/40 shadow-[0_0_50px_rgba(197,160,89,0.2)]">
                                    <Image src={activeImage.after} alt="After" fill className="object-cover" />
                                </div>
                            </div>

                            <div className="lg:col-span-2 text-center mt-8">
                                <h3 className="text-3xl font-bold text-white mb-4">{activeImage.title}</h3>
                                <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8 font-medium">
                                    {activeImage.description}
                                </p>
                                <div className="flex justify-center items-center space-x-12 text-slate-500 uppercase font-bold text-[10px] tracking-[0.3em]">
                                    <div className="flex items-center"><Plus className="w-4 h-4 mr-2 text-[#C5A059]" /> {activeImage.category}</div>
                                    <div className="flex items-center"><Plus className="w-4 h-4 mr-2 text-[#C5A059]" /> Vetted Specialist</div>
                                    <div className="flex items-center"><Plus className="w-4 h-4 mr-2 text-[#C5A059]" /> Ironclad Protocol</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
