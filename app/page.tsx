import Link from 'next/link';
import { CheckCircle, Play, ShieldCheck, ArrowRight, MessageSquare, Globe, Calculator } from 'lucide-react';
import CinematicHero from '@/components/hero/CinematicHero';
import TechPillars from '@/components/homepage/TechPillars';
import DiamondTrustSection from '@/components/homepage/DiamondTrustSection';
import BrightPlanTable from '@/components/sections/BrightPlanTable';
import AssessmentForm from '@/components/sections/AssessmentForm';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0e1a]">
      {/* S.I.T.E. Framework - Institutional Agency Edition */}

      {/* STRATEGY: Cinematic Agency Hook */}
      <CinematicHero />

      {/* CORE: Technical Pillars */}
      <TechPillars />

      {/* THE PIVOT: Reconstruction Tiers & Valuation */}
      <BrightPlanTable />

      {/* TRUST: Global Standards & International Accreditation */}
      <DiamondTrustSection />

      {/* CONVERSION: Sovereign Intake (Secure Portal) */}
      <div id="assessment-anchor" className="scroll-mt-24">
        <AssessmentForm />
      </div>

      {/* JOURNEY LOGISTICS & AGENCY SUPPORT */}
      <section className="relative py-32 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-[#006064]/5 to-slate-950" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div>
                <span className="text-[#C5A059] font-black tracking-[0.4em] uppercase text-[10px] mb-6 block">Command & Control</span>
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight tracking-tighter">
                  Your Personal <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] to-[#B08D47]">Liaison</span> Awaits
                </h2>
                <p className="text-xl text-slate-400 leading-relaxed font-light">
                  We orchestrate every dimension of your digital journey. From initial blueprinting with **Custom Agents** to secure infrastructure, our agency ensures an ironclad execution protocol.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#C5A059]">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h4 className="text-white font-bold text-sm tracking-tight uppercase">Global Vetting</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">Only systems matching our strict enterprise security and performance criteria are deployed to your network.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#C5A059]">
                    <Calculator className="w-6 h-6" />
                  </div>
                  <h4 className="text-white font-bold text-sm tracking-tight uppercase">Valuation Engine</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">Direct-to-value engineering ensures you receive maximum efficiency gains without compromising code quality.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#C5A059]/20 to-transparent blur-3xl rounded-full" />
              <div className="crystal-card p-12 relative bg-slate-900/40 border-white/5 shadow-2xl">
                <div className="mb-10 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#1a2b2c] to-[#0a0e1a] border border-[#C5A059]/30 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(197,160,89,0.2)]">
                    <ShieldCheck className="w-10 h-10 text-[#C5A059]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Initiate Private Protocol</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">Join forward-thinking enterprises that transformed their operations under our agency's coordination.</p>
                </div>

                <div className="space-y-4">
                  <Link
                    href="/assessment"
                    className="w-full flex items-center justify-center gap-4 py-5 bg-[#C5A059] text-white font-black rounded-xl hover:shadow-[0_0_40px_rgba(197,160,89,0.4)] transition-all uppercase tracking-[0.2em] text-[10px]"
                  >
                    Get Priority Access
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="w-full flex items-center justify-center gap-4 py-5 bg-white/5 text-slate-400 font-bold rounded-xl hover:bg-white/10 transition-all uppercase tracking-[0.2em] text-[10px] border border-white/10"
                  >
                    Speak with Agency Expert
                    <MessageSquare className="w-4 h-4" />
                  </Link>
                </div>

                <p className="mt-8 text-center text-[9px] font-black text-slate-600 uppercase tracking-[0.3em]">
                  Encrypted Liaison • Response time: \u003c 14 minutes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
