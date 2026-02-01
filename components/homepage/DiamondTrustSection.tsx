'use client';

import { motion } from 'framer-motion';

import { PremiumTrustpilotBadge, DiamondStatsCard, GoldWarrantySeal } from '@/components/ui/TrustBadges';

export default function DiamondTrustSection() {
    return (
        <section className="relative py-24 overflow-hidden bg-slate-900/50">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:40px_40px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[50%] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4">
                        Trusted by <span className="gradient-text">Thousands</span>
                    </h2>
                    <p className="text-xl text-slate-400">Real patients, real results, real reviews</p>
                </div>

                {/* Diamond Layout */}
                <div className="space-y-8">



                    {/* 2. Trust Bar (3 Columns) */}
                    <div className="grid md:grid-cols-3 gap-6">

                        {/* Trustpilot */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <PremiumTrustpilotBadge />
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <DiamondStatsCard />
                        </motion.div>

                        {/* Implants */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <GoldWarrantySeal />
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}
