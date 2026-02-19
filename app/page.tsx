import React from 'react';
import DigitalTwinChat from '@/components/ares/DigitalTwinChat';
import TrustBadge from '@/components/ares/TrustBadge';
import { Network } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00d4ff]/10 via-[#0a0a0a] to-[#0a0a0a] pointer-events-none" />
      <div className="absolute inset-0 grid grid-cols-[repeat(20,minmax(0,1fr))] opacity-[0.03] pointer-events-none">
        {Array.from({ length: 400 }).map((_, i) => (
          <div key={i} className="border border-[#00d4ff]" />
        ))}
      </div>

      <div className="relative z-10 w-full px-4 flex flex-col items-center gap-8">
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] text-xs tracking-widest uppercase mb-4">
            <Network className="w-3 h-3" />
            Project Ares Protocol
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#e5e5e5] to-[#999]">
            OSMAN KADIR
            <span className="block text-[#00d4ff] text-2xl md:text-3xl font-light mt-2">KI & TECH LÖSUNGEN</span>
          </h1>
          <p className="text-gray-400 max-w-md mx-auto text-sm md:text-base font-light">
            Elite B2B Sourcing • Autonomous AI Systems • Production Logic
          </p>
        </div>

        {/* The Digital Twin Terminal */}
        <div className="flex flex-col items-center gap-4 w-full">
          <TrustBadge />
          <DigitalTwinChat />
        </div>

        {/* Footer Status */}
        <div className="flex items-center gap-4 text-xs text-gray-600 font-mono mt-8">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
            SYSTEM NORMAL
          </span>
          <span className="text-[#00d4ff]/30">|</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-[#ffd700] rounded-full"></span>
            GERMAN ENGINEERING
          </span>
        </div>
      </div>
    </div>
  );
}
