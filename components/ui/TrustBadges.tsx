'use client';

import { motion } from 'framer-motion';

export function PremiumTrustpilotBadge() {
    return (
        <div className="crystal-card p-6 flex flex-col items-center justify-center text-center h-full min-h-[200px] group relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00b67a]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 w-full">
                {/* Logo & Star Row */}
                <div className="flex items-center justify-center space-x-3 mb-4">
                    <svg className="w-8 h-8 text-[#00b67a]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span className="text-2xl font-bold text-white tracking-tight">Trustpilot</span>
                </div>

                {/* Stars */}
                <div className="flex justify-center space-x-1 mb-4 bg-[#00b67a] p-2 rounded-lg w-fit mx-auto shadow-[0_0_15px_rgba(0,182,122,0.4)]">
                    {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-6 h-6 text-white fill-white" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.603 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    ))}
                </div>

                {/* Score & Review Count */}
                <div className="space-y-1">
                    <p className="text-4xl font-black text-white">5 / 5</p>
                    <p className="text-slate-400 text-sm font-medium">Based on 4,832 reviews</p>
                </div>
            </div>
        </div>
    );
}

export function DiamondStatsCard() {
    return (
        <div className="crystal-card p-6 h-full min-h-[200px] flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="grid grid-cols-2 gap-4 relative z-10 divide-x divide-white/10">
                {/* Stat 1 */}
                <div className="text-center px-4">
                    <p className="text-4xl font-black text-white mb-1 group-hover:scale-110 transition-transform duration-300">15+</p>
                    <p className="text-sky-400 text-xs font-bold uppercase tracking-widest mb-1">Years</p>
                    <p className="text-slate-500 text-[10px] uppercase tracking-wide">Excellence</p>
                </div>

                {/* Stat 2 */}
                <div className="text-center px-4">
                    <p className="text-4xl font-black text-white mb-1 group-hover:scale-110 transition-transform duration-300">98%</p>
                    <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-1">Recommend</p>
                    <p className="text-slate-500 text-[10px] uppercase tracking-wide">Success Rate</p>
                </div>
            </div>
        </div>
    );
}

export function GoldWarrantySeal() {
    return (
        <div className="crystal-card p-6 flex flex-col items-center justify-center text-center h-full min-h-[200px] relative overflow-hidden group bg-gradient-to-br from-slate-900 to-slate-950 border-amber-500/20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,158,11,0.15),transparent_70%)]" />

            {/* Premium Seal Badge */}
            <div className="relative mb-4 group-hover:scale-105 transition-transform duration-500">
                {/* Outer Ring */}
                <div className="w-20 h-20 rounded-full border-2 border-amber-500/30 flex items-center justify-center p-1 shadow-[0_0_20px_rgba(245,158,11,0.3)] bg-slate-950/50">
                    {/* Inner Badge */}
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 flex items-center justify-center shadow-inner relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1/2 bg-white/25 rounded-t-full" />
                        <svg className="w-8 h-8 text-slate-900 drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="relative z-10">
                <h3 className="text-lg font-bold text-white mb-1">Lifetime Warranty</h3>
                <div className="inline-block px-3 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-bold tracking-widest uppercase mb-2">
                    Implant Coverage
                </div>
                <p className="text-slate-400 text-xs">Industry-Leading Protection</p>
            </div>
        </div>
    );
}
