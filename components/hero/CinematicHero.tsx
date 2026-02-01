'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CinematicHero() {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    return (
        <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 h-screen overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    onLoadedData={() => setIsVideoLoaded(true)}
                    className="w-full h-full object-cover opacity-70"
                >
                    <source src="/hero-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950"></div>
            </div>

            {/* Overlay Content */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="h-screen flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-center px-6 max-w-4xl pointer-events-auto"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                            Transform Your Smile in{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                                Antalya
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-lg">
                            World-class dental care with 70% savings. Premium materials, luxury experience.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/assessment"
                                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:scale-105 transition-transform shadow-xl hover:shadow-cyan-500/50"
                            >
                                Get Free Assessment
                            </a>
                            <a
                                href="/treatments"
                                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-colors shadow-lg"
                            >
                                Explore Treatments
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 text-sm flex flex-col items-center gap-2 pointer-events-none"
            >
                <span className="drop-shadow-md">Scroll to explore</span>
                <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-white/60 rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
}
