'use client';

import Link from 'next/link';
import { ArrowRight, MessageSquare, Globe, Zap, Terminal, Cpu } from 'lucide-react';
import CinematicHero from '@/components/hero/CinematicHero';
import TechPillars from '@/components/homepage/TechPillars';
import BrightPlanTable from '@/components/sections/BrightPlanTable';
import { useLang } from '@/lib/lang-context';

function CommandCenter() {
  const { lang } = useLang();
  const de = lang === 'de';

  const features = [
    {
      icon: Globe,
      color: '#ffd700',
      title: de ? 'Globales Netzwerk' : 'Global Network',
      desc: de
        ? 'Grenzüberschreitende Tech-Partnerschaften von Neuhaus am Rennweg in die Welt.'
        : 'Cross-border tech partnerships from Neuhaus am Rennweg to the world.',
    },
    {
      icon: Zap,
      color: '#00d4ff',
      title: de ? 'Smarte Effizienz' : 'Smart Efficiency',
      desc: de
        ? 'IoT-Automatisierung & KI-Workflows. Messbarer ROI bei jedem Deployment.'
        : 'IoT-driven automation and AI workflows. Measurable ROI on every deployment.',
    },
    {
      icon: Terminal,
      color: '#00d4ff',
      title: de ? 'Souveräne Systeme' : 'Sovereign Systems',
      desc: de
        ? 'Kein Vendor Lock-in. Volle Kontrolle über Stack, Daten und Infrastruktur.'
        : 'No vendor lock-in. Full ownership of your stack, data, and infrastructure.',
    },
    {
      icon: Cpu,
      color: '#ffd700',
      title: de ? 'Elite Engineering' : 'Elite Engineering',
      desc: de
        ? 'Next.js, Python, LangGraph — präzise entwickelte Lösungen für komplexe Probleme.'
        : 'Next.js, Python, LangGraph — precision-engineered solutions for complex problems.',
    },
  ];

  const stats = [
    { val: 'tägl.', label: de ? 'ArXiv Update' : 'ArXiv Daily' },
    { val: '12+', label: de ? 'Agenten' : 'Agents' },
    { val: '<24h', label: de ? 'Deploy-Zeit' : 'Deploy Time' },
  ];

  return (
    <section className="relative py-32 overflow-hidden border-t border-white/5">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00d4ff]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left: Pitch */}
          <div className="space-y-10">
            <div>
              <span className="text-[#00d4ff] font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">
                — {de ? 'Kommandozentrale' : 'Command Center'}
              </span>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tighter">
                {de ? (
                  <>
                    Dein digitaler<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#ffd700]">
                      Partner
                    </span>{' '}wartet
                  </>
                ) : (
                  <>
                    Your Digital<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#ffd700]">
                      Partner
                    </span>{' '}Awaits
                  </>
                )}
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed font-light max-w-lg">
                {de
                  ? 'Ein einziger Architekt orchestriert jeden Bereich deiner digitalen Operation — von autonomen KI-Agenten bis zur globalen Handelsinfrastruktur.'
                  : 'One architect orchestrating every dimension of your digital operation — from autonomous AI agents to global trade infrastructure.'}
              </p>
            </div>

            {/* Feature bullets */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map(({ icon: Icon, color, title, desc }) => (
                <div key={title} className="flex gap-4 items-start group">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 border"
                    style={{ background: `${color}08`, borderColor: `${color}20` }}
                  >
                    <Icon className="w-5 h-5" style={{ color }} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1 uppercase tracking-wide">{title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: CTA card */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#00d4ff]/10 via-[#ffd700]/5 to-transparent blur-3xl rounded-full" />
            <div
              className="relative p-10 rounded-2xl border"
              style={{
                background: 'linear-gradient(135deg, rgba(10,26,34,0.95) 0%, rgba(10,10,10,0.95) 100%)',
                borderColor: 'rgba(0,212,255,0.2)',
                boxShadow: '0 0 60px rgba(0,212,255,0.06)',
              }}
            >
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-8 pb-4 border-b border-white/5">
                <div className="w-2 h-2 rounded-full bg-red-500/60" />
                <div className="w-2 h-2 rounded-full bg-[#ffd700]/60" />
                <div className="w-2 h-2 rounded-full bg-[#00d4ff]/60" />
                <span className="ml-3 text-[10px] font-mono text-slate-600 tracking-widest uppercase">
                  codephyt.init()
                </span>
              </div>

              <div className="mb-8 space-y-2">
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {de ? 'Jetzt starten' : 'Start Your Transformation'}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {de
                    ? 'Schreib mir direkt — ich antworte in der Regel innerhalb von 24 Stunden.'
                    : 'Message me directly — typical response within 24 hours.'}
                </p>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-y border-white/5">
                {stats.map(({ val, label }) => (
                  <div key={label} className="text-center">
                    <div className="text-xl font-black text-[#00d4ff]">{val}</div>
                    <div className="text-[9px] font-bold text-slate-600 uppercase tracking-widest mt-1">{label}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-xl font-black uppercase tracking-[0.2em] text-[10px] transition-all"
                  style={{
                    background: 'linear-gradient(135deg, #00d4ff, #0090a8)',
                    color: '#0a0a0a',
                    boxShadow: '0 0 30px rgba(0,212,255,0.2)',
                  }}
                >
                  {de ? 'Kontakt aufnehmen' : 'Get Priority Access'}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/about"
                  className="w-full flex items-center justify-center gap-3 py-4 bg-white/5 text-slate-400 font-bold rounded-xl hover:bg-white/10 transition-all uppercase tracking-[0.2em] text-[10px] border border-white/10 hover:border-[#00d4ff]/20"
                >
                  {de ? 'Über Osman Kadir' : 'About Osman Kadir'}
                  <MessageSquare className="w-4 h-4" />
                </Link>
              </div>

              <p className="mt-6 text-center text-[9px] font-black text-slate-700 uppercase tracking-[0.3em]">
                DSGVO Compliant · End-to-End Encrypted
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <CinematicHero />
      <TechPillars />
      <BrightPlanTable />
      <CommandCenter />
    </div>
  );
}
