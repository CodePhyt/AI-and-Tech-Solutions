'use client';

import Link from 'next/link';
import { Home, Terminal, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/assets/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-2xl w-full text-center relative z-10"
            >
                <div className="crystal-card p-12 border-[#ffd700]/30 shadow-[0_0_50px_rgba(255,215,0,0.1)] backdrop-blur-xl bg-slate-900/80">

                    <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="w-32 h-32 mx-auto mb-8 rounded-full border border-dashed border-[#ffd700]/30 flex items-center justify-center relative"
                    >
                        <div className="absolute inset-2 rounded-full border border-[#ffd700]/10 animate-ping" />
                        <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#ffd700] to-[#B08D47]">404</span>
                    </motion.div>

                    <h1 className="text-4xl font-bold text-white mb-2 uppercase tracking-widest">
                        Signal Lost
                    </h1>
                    <div className="flex items-center justify-center gap-2 text-[#ffd700] mb-8">
                        <AlertTriangle className="w-4 h-4" />
                        <span className="text-xs font-mono">ERR_DESTINATION_UNREACHABLE</span>
                    </div>

                    <p className="text-slate-400 mb-10 max-w-md mx-auto leading-relaxed">
                        The requested vector does not exist in our current coordinate system. It may have been deprecated or moved to a secure sector.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/"
                            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#ffd700] text-black font-bold rounded-xl overflow-hidden"
                        >
                            <Home className="w-5 h-5" />
                            <span>Return to Base</span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </Link>

                        <Link
                            href="/services"
                            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-800 text-white font-bold rounded-xl border border-white/5 hover:border-[#ffd700]/50 transition-colors"
                        >
                            <Terminal className="w-5 h-5 text-[#ffd700]" />
                            <span>View Capabilities</span>
                        </Link>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/5">
                        <p className="text-xs font-mono text-slate-600">
                            SYSTEM_ID: OSMAN_KADIR_V1.0 // TRACE_COMPLETE
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
