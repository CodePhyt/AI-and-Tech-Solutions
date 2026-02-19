'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Server } from 'lucide-react';

export default function TrustBadge() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex items-center gap-4 py-3 px-5 rounded-full border border-[#00d4ff]/20 bg-[#00d4ff]/5 backdrop-blur-md"
        >
            <div className="relative">
                <ShieldCheck className="w-5 h-5 text-[#00d4ff]" />
                <span className="absolute -top-1 -right-1 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00d4ff] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00d4ff]"></span>
                </span>
            </div>

            <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-[#00d4ff] font-bold">
                    Sovereign AI Architecture
                </span>
                <span className="text-[9px] text-slate-400 flex items-center gap-2">
                    <Lock className="w-3 h-3" /> 100% On-Premise Execution
                    <span className="text-[#ffd700]"> • GDPR Compliant</span>
                </span>
            </div>
        </motion.div>
    );
}
