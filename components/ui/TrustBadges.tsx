'use client';

import { ShieldCheck, Globe } from 'lucide-react';

export function PremiumTrustpilotBadge() {
    return (
        <div className="crystal-card p-10 flex flex-col items-center justify-center text-center h-full min-h-[280px] group relative overflow-hidden bg-slate-900/40">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00b67a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 w-full">
                {/* Logo & Star Row */}
                <div className="flex items-center justify-center space-x-3 mb-6">
                    <svg className="w-10 h-10 text-[#00b67a]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span className="text-3xl font-bold text-white tracking-tighter">Trustpilot</span>
                </div>

                {/* Stars */}
                <div className="flex justify-center space-x-1.5 mb-8">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="bg-[#00b67a] p-1.5 rounded-sm shadow-[0_0_15px_rgba(0,182,122,0.3)]">
                            <svg className="w-5 h-5 text-white fill-white" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.603 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </div>
                    ))}
                </div>

                {/* Score & Review Count */}
                <div className="space-y-1">
                    <p className="text-4xl font-black text-white">4.9 / 5</p>
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">Verified Exceptional</p>
                </div>
            </div>
        </div>
    );
}

export function DiamondStatsCard() {
    return (
        <div className="crystal-card p-10 h-full min-h-[280px] flex flex-col justify-center relative overflow-hidden group bg-slate-900/40">
            <div className="absolute inset-0 bg-gradient-to-r from-[#ffd700]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="grid grid-cols-2 gap-8 relative z-10 divide-x divide-white/10">
                {/* Stat 1 */}
                <div className="text-center px-4">
                    <p className="text-5xl font-black text-white mb-2 group-hover:text-[#ffd700] transition-colors">15+</p>
                    <p className="text-[#ffd700] text-[10px] font-black uppercase tracking-[0.2em] mb-1">Tech Years</p>
                    <p className="text-slate-500 text-[9px] uppercase tracking-widest">Global Tenure</p>
                </div>

                {/* Stat 2 */}
                <div className="text-center px-4">
                    <p className="text-5xl font-black text-white mb-2 group-hover:text-green-500 transition-colors">98%</p>
                    <p className="text-green-500 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Peer Success</p>
                    <p className="text-slate-500 text-[9px] uppercase tracking-widest">Rate Verified</p>
                </div>
            </div>
        </div>
    );
}

export function GoldWarrantySeal() {
    return (
        <div className="crystal-card p-10 flex flex-col items-center justify-center text-center h-full min-h-[280px] relative overflow-hidden group bg-slate-900/40 border-[#ffd700]/20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,215,0,0.1),transparent_70%)]" />

            {/* Premium Seal Badge */}
            <div className="relative mb-8 group-hover:scale-110 transition-transform duration-700">
                {/* Outer Ring */}
                <div className="w-24 h-24 rounded-full border-2 border-[#ffd700]/40 flex items-center justify-center p-1.5 shadow-[0_0_30px_rgba(255,215,0,0.2)] bg-slate-950/80">
                    {/* Inner Badge */}
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-[#ffd700] via-[#B08D47] to-[#8C6D2D] flex items-center justify-center shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1/2 bg-white/30 rounded-t-full" />
                        <ShieldCheck className="w-10 h-10 text-slate-950 drop-shadow-md" strokeWidth={1.5} />
                    </div>
                </div>
            </div>

            <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2">Ironclad Pledge</h3>
                <div className="inline-block px-4 py-1 rounded-full bg-[#ffd700]/10 border border-[#ffd700]/20 text-[#ffd700] text-[9px] font-black tracking-[0.2em] uppercase mb-4">
                    Lifetime Integrity
                </div>
                <p className="text-slate-500 text-xs font-medium">Sovereign Protection Standard</p>
            </div>
        </div>
    );
}

export function GlobalAccreditationBadge() {
    return (
        <div className="crystal-card p-10 flex flex-col items-center justify-center text-center h-full min-h-[280px] relative overflow-hidden group bg-slate-900/40">
            <div className="absolute inset-0 bg-gradient-to-br from-[#006064]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="w-16 h-16 rounded-2xl bg-[#006064]/10 border border-[#006064]/20 flex items-center justify-center text-[#006064] mb-8 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(0,96,100,0.2)]">
                <Globe className="w-8 h-8" />
            </div>

            <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Global Liaison</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[180px] mx-auto">
                    Operating under international health coordination protocols.
                </p>
                <div className="mt-6 flex justify-center space-x-2">
                    <div className="w-1 h-1 rounded-full bg-[#ffd700]" />
                    <div className="w-1 h-1 rounded-full bg-[#ffd700]/40" />
                    <div className="w-1 h-1 rounded-full bg-[#ffd700]/40" />
                </div>
            </div>
        </div>
    );
}
