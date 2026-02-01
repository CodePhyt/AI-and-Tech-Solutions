'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { IMAGE_CATEGORIES } from '@/lib/image-sources';

interface BentoGridProps {
    children: ReactNode;
    className?: string;
}

interface BentoCardProps {
    children: ReactNode;
    className?: string;
    size?: 'small' | 'medium' | 'large' | 'tall' | 'wide';
    hoverable?: boolean;
}

export function BentoGrid({ children, className = '' }: BentoGridProps) {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 ${className}`}>
            {children}
        </div>
    );
}

export function BentoCard({
    children,
    className = '',
    size = 'medium',
    hoverable = true
}: BentoCardProps) {

    const sizeClasses = {
        small: 'md:col-span-2 lg:col-span-2 md:row-span-1',
        medium: 'md:col-span-2 lg:col-span-2 md:row-span-2',
        large: 'md:col-span-4 lg:col-span-4 md:row-span-2',
        tall: 'md:col-span-2 lg:col-span-2 md:row-span-3',
        wide: 'md:col-span-4 lg:col-span-3 md:row-span-1',
    };

    return (
        <motion.div
            className={`
        crystal-card overflow-hidden
        ${sizeClasses[size]}
        ${hoverable ? 'hover:scale-[1.02] cursor-pointer' : ''}
        ${className}
      `}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
}

// Specialized Bento Cards

interface VideoCardProps {
    videoUrl: string;
    thumbnail: string;
    title: string;
    description?: string;
}

export function BentoVideoCard({ videoUrl, thumbnail, title, description }: VideoCardProps) {
    return (
        <div className="relative h-full group" role="article" aria-label={`Video: ${title}`}>
            {/* Thumbnail */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 group-hover:opacity-0"
                style={{ backgroundImage: `url(${thumbnail})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
            </div>

            {/* Video (plays on hover) */}
            <video
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                src={videoUrl}
                autoPlay
                loop
                muted
                playsInline
            />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-xl">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-end p-8 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent">
                <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">{title}</h3>
                {description && <p className="text-slate-200 text-sm font-medium drop-shadow-md">{description}</p>}
            </div>
        </div>
    );
}

interface TrustBadgeCardProps {
    rating: number;
    reviews: number;
    platform: string;
}

export function BentoTrustBadge({ rating, reviews, platform }: TrustBadgeCardProps) {
    // Fixed star positions to prevent hydration mismatch
    const starPositions = [
        { left: 15, top: 20, delay: 0, duration: 3 },
        { left: 85, top: 15, delay: 0.5, duration: 2.5 },
        { left: 45, top: 80, delay: 1, duration: 3.5 },
        { left: 70, top: 60, delay: 0.3, duration: 2.8 },
        { left: 25, top: 45, delay: 0.8, duration: 3.2 },
        { left: 60, top: 25, delay: 0.2, duration: 2.7 },
        { left: 10, top: 70, delay: 1.2, duration: 3.3 },
        { left: 90, top: 50, delay: 0.6, duration: 2.9 },
        { left: 40, top: 10, delay: 0.4, duration: 3.1 },
        { left: 75, top: 85, delay: 1.5, duration: 2.6 },
        { left: 50, top: 40, delay: 0.9, duration: 3.4 },
        { left: 20, top: 90, delay: 1.1, duration: 2.4 },
    ];

    return (
        <div
            className="h-full flex flex-col items-center justify-center p-8 text-center relative overflow-hidden bg-gradient-to-br from-slate-900/50 to-slate-900/80"
            role="region"
            aria-label={`${rating} out of 5 stars from ${reviews} reviews on ${platform}`}
        >
            {/* Floating Stars Animation */}
            <div className="absolute inset-0 pointer-events-none">
                {starPositions.map((pos, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-yellow-400 blur-[1px]"
                        style={{
                            left: `${pos.left}%`,
                            top: `${pos.top}%`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.3, 0.8, 0.3],
                            scale: [0.8, 1.2, 0.8],
                        }}
                        transition={{
                            duration: pos.duration,
                            repeat: Infinity,
                            delay: pos.delay,
                        }}
                    >
                        ⭐
                    </motion.div>
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10">
                <div className="flex items-center justify-center mb-6 space-x-1">
                    {[...Array(5)].map((_, i) => (
                        <svg
                            key={i}
                            className={`w-8 h-8 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)] ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'}`}
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    ))}
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 mb-2 drop-shadow-sm">{rating}/5</p>
                    <div className="h-px w-24 bg-white/10 my-4"></div>
                    <p className="text-slate-300 font-medium text-lg mb-1">{reviews.toLocaleString()} Reviews</p>
                    <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-[#00b67a]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                        <p className="text-[#00b67a] font-bold text-lg tracking-wide">{platform}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

interface MapCardProps {
    location: string;
    coordinates?: { lat: number; lng: number };
}

export function BentoMapCard({ location }: MapCardProps) {
    return (
        <div className="relative h-full overflow-hidden group" role="region" aria-label={`Location: ${location}`}>
            {/* Map Background */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                    backgroundImage: `url(${IMAGE_CATEGORIES.MISC.antalya_cityscape})`,
                }}
            >
                <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px] group-hover:backdrop-blur-0 transition-all duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
            </div>

            {/* Pulsing Location Dot */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <motion.div
                    className="relative"
                    animate={{
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                >
                    <div className="w-4 h-4 bg-sky-500 rounded-full box-shadow-[0_0_20px_#0ea5e9]"></div>
                    <motion.div
                        className="absolute inset-0 bg-sky-400 rounded-full"
                        animate={{
                            scale: [1, 3, 1],
                            opacity: [0.8, 0, 0.8],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                        }}
                    />
                </motion.div>
            </div>

            {/* Location Label */}
            <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-card p-4 bg-slate-950/80 border-slate-700/50 backdrop-blur-md">
                    <div className="flex items-center space-x-3">
                        <div className="p-2 bg-sky-500/20 rounded-full">
                            <svg className="w-5 h-5 text-sky-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <span className="text-white font-bold text-lg tracking-wide">{location}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

interface WarrantyCardProps {
    years: string;
    type: string;
}

export function BentoWarrantyCard({ years, type }: WarrantyCardProps) {
    return (
        <div
            className="h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-amber-500/10 to-transparent relative overflow-hidden group"
            role="region"
            aria-label={`${years} years ${type} warranty coverage`}
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(245,158,11,0.15),transparent_70%)]"></div>

            {/* Gold Seal */}
            <motion.div
                className="relative mb-6"
                animate={{
                    rotate: [0, 360],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                <svg className="w-28 h-28 text-yellow-500 drop-shadow-[0_0_15px_rgba(234,179,8,0.3)]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center transform rotate-[0deg] !important"> {/* Counter-rotate if needed, but here simple layout */}
                        <p className="text-sm text-slate-900 font-bold tracking-widest uppercase mb-[-2px]">Lifetime</p>
                        <p className="text-[10px] text-slate-800 font-black tracking-widest">YEARS</p>
                    </div>
                </div>
            </motion.div>

            <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2">{type} Warranty</h3>
                <div className="h-1 w-12 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-2 opacity-50"></div>
                <p className="text-slate-300 text-sm font-medium tracking-wide">Industry-Leading Coverage</p>
            </div>
        </div>
    );
}
