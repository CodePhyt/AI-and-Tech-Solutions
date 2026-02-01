'use client';

import { motion } from 'framer-motion';
import { BentoVideoCard } from '@/components/ui/BentoGrid';
import { PremiumTrustpilotBadge, DiamondStatsCard, GoldWarrantySeal } from '@/components/ui/TrustBadges';

export default function DiamondTrustSection() {
    return (
        <section className="relative py-24 overflow-hidden bg-slate-900/50">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:40px_40px]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-blue-500/5 blur-[120px] rounded-full" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold mb-4">
                        Trusted by <span className="gradient-text">Thousands</span>
                    </h2>
                    <p className="text-xl text-slate-400">Real patients, real results, real reviews</p>
                </div>

                {/* Diamond Layout Grid */}
                <div className="grid lg:grid-cols-12 gap-6">

                    {/* Hero Video Section - Spans Full Width on Mobile, 8 Cols on Desktop */}
                    <div className="lg:col-span-8 lg:row-span-2 h-full min-h-[400px]">
                        <motion.div
                            className="h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <BentoVideoCard
                                videoUrl="/videos/testimonial-1.mp4"
                                thumbnail="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop"
                                title="Watch Emma's Transformation"
                                description="Hollywood Smile in 7 Days"
                            />
                        </motion.div>
                    </div>

                    {/* Right Column Stack - Spans 4 Cols */}
                    <div className="lg:col-span-4 space-y-6">

                        {/* Trustpilot Badge */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <PremiumTrustpilotBadge />
                        </motion.div>

                        {/* Stats Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <DiamondStatsCard />
                        </motion.div>

                    </div>

                    {/* Bottom Full Span or Split - Let's put Warranty underneath the column stack or maybe make it a 3-col row at bottom? 
                        Actually, the plan was a "Trust Bar" below.
                        Let's adjust:
                        Top: Video (Wide)
                        Bottom: 3 columns (Trustpilot, Stats, Warranty)
                        
                        Wait, the user liked the "Grid" feel but wanted it "Higher Quality". 
                        The layout I just coded above is:
                        [ Video (2/3) ] [ Trustpilot ]
                                        [ Stats ]
                        
                        Where does Warranty go?
                        Let's put Warranty in the 3rd slot of the right column? 
                        Or maybe make the Video full width top, and 3 cards below. 
                        User originally had a grid.
                        
                        Let's try the "Hero + Trust Bar" approach mentioned in the plan:
                        [ Video Hero (Full Width) ]
                        [ Trustpilot ] [ Stats ] [ Warranty ]
                    */}
                </div>

                {/* Alternative Layout: Hero + Trust Bar */}
                <div className="mt-8 grid md:grid-cols-3 gap-6">
                    {/* Logic above was mixed. Let's stick to the "Hero + Trust Bar" as it's cleaner.
                        Actually, I will redesign the Grid above to be: 
                        Row 1: Video (Full)
                        Row 2: Trust Cards (3 cols)
                    */}
                </div>
            </div>
        </section>
    );
}
