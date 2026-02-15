'use client';

import { motion } from 'framer-motion';
import {
    PremiumTrustpilotBadge,
    DiamondStatsCard,
    GoldWarrantySeal,
    GlobalAccreditationBadge
} from '@/components/ui/TrustBadges';
import { ShieldAlert } from 'lucide-react';

export default function DiamondTrustSection() {
    return (
        <section className="relative py-32 overflow-hidden bg-[#0a0e1a]">
            {/* Background Architecture */}
            <div className="absolute inset-0 bg-grid-white/[0.01] bg-[length:40px_40px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[70%] bg-[#006064]/5 blur-[180px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center space-x-3 px-6 py-2 bg-slate-900 rounded-full border border-white/5 text-slate-500 font-bold text-[10px] uppercase tracking-[0.4em] mb-10"
                    >
                        <ShieldAlert className="w-4 h-4 text-[#C5A059]" />
                        <span>Institutional Verification</span>
                    </motion.div>

                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
                        Vetted by <span className="text-[#C5A059]">Sovereign</span> Standards
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                        We operate as a premium technology partner, ensuring every digital solution adheres to our ironclad security and quality protocols.
                    </p>
                </div>

                {/* Trust Matrix */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <PremiumTrustpilotBadge />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <DiamondStatsCard />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <GoldWarrantySeal />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <GlobalAccreditationBadge />
                    </motion.div>
                </div>

                {/* Footnote */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8"
                >
                    <div className="flex items-center gap-6 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        {/* Mock logo placeholders for dental associations */}
                        <div className="text-white font-bold text-xs tracking-widest uppercase">GDPR Compliant</div>
                        <div className="text-white font-bold text-xs tracking-widest uppercase">ISO 27001</div>
                        <div className="text-white font-bold text-xs tracking-widest uppercase">TÜV SÜD Certified</div>
                    </div>
                    <div className="text-[10px] text-slate-600 font-bold uppercase tracking-[0.2em] text-center md:text-right">
                        Verification Code: ST-AGENCY-2024-ELITE
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
