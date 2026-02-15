import { Cpu, Globe, Lock, Code } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-20 bg-slate-950">
            {/* Hero */}
            <section className="relative h-96 flex items-center overflow-hidden">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'url(/assets/tech-hero-abstract.jpg)', // Placeholder or reuse existing tech bg if available
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-[#006064]/40 to-slate-950/50"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                        Sovereign <span className="text-[#C5A059]">Architecture</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl">
                        Building the digital backbone of the future.
                    </p>
                </div>
            </section>

            {/* Story */}
            <section className="section-container">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-white underline decoration-[#C5A059] underline-offset-8">The Technical Evolution</h2>
                        <p className="text-slate-300 text-lg leading-relaxed">
                            Established to bridge the gap between legacy systems and sovereign future-tech. We realized that enterprises didn&apos;t just need software—they needed a <span className="text-[#C5A059]">Sovereign Architect</span> to navigate the complexities of AI, IoT, and Global Trade.
                        </p>
                        <p className="text-slate-300 text-lg leading-relaxed">
                            Today, Osman Kadir Solutions acts as a high-tier consultancy. We don&apos;t just write code; we engineer value protocols. Led by Osman Kadir, we ensure your digital transformation is managed with military-grade precision and engineering excellence.
                        </p>
                        <p className="text-slate-300 text-lg leading-relaxed">
                            From the moment you initiate our Secure Assessment to the final deployment, you align with a vision of digital sovereignty. We protect your data, your infrastructure, and your future.
                        </p>
                    </div>
                    <div className="crystal-card p-4 border-[#C5A059]/30 shadow-[0_0_30px_rgba(197,160,89,0.1)] h-96 bg-slate-900/50 flex items-center justify-center">
                        <Cpu className="w-32 h-32 text-[#C5A059]/50 animate-pulse" />
                    </div>
                </div>
            </section>

            {/* Why Us */}
            <section className="section-container bg-gradient-to-b from-slate-950 to-slate-900">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Why <span className="text-[#00f3ff]">Osman Kadir Tech</span>?
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        More than just development - it&apos;s a complete sovereign ecosystem
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: 'Sovereign Control',
                            description: 'Retain absolute ownership of your data and infrastructure. No vendor lock-in.',
                            icon: <Lock className="w-8 h-8 text-[#00f3ff] mb-4" />
                        },
                        {
                            title: 'Elite Engineering',
                            description: 'Systems architected by top-tier talent using cutting-edge stacks (Next.js, Python, Rust).',
                            icon: <Code className="w-8 h-8 text-[#00f3ff] mb-4" />
                        },
                        {
                            title: 'Global Logistics',
                            description: 'Integrated solutions that bridge digital systems with physical real-world trade.',
                            icon: <Globe className="w-8 h-8 text-[#00f3ff] mb-4" />
                        },
                    ].map((item, index) => (
                        <div key={index} className="crystal-card p-8 hover:border-[#00f3ff]/30 transition-all group">
                            {item.icon}
                            <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-[#00f3ff] transition-colors">{item.title}</h3>
                            <p className="text-slate-400">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Values */}
            <section className="section-container">
                <h2 className="text-4xl font-bold text-white text-center mb-16">Core Principles</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: 'Precision', desc: 'Mathematical accuracy in every line of code', icon: Code },
                        { title: 'Security', desc: 'Zero-trust architecture by default', icon: Lock },
                        { title: 'Transparency', desc: 'Open protocols and clear documentation', icon: Globe },
                        { title: 'Innovation', desc: 'Relentless pursuit of the bleeding edge', icon: Cpu },
                    ].map((value, i) => (
                        <div key={i} className="crystal-card overflow-hidden group hover:scale-105 transition-transform bg-slate-900/40 p-10 flex flex-col items-center text-center border-white/5 hover:border-[#C5A059]/20">
                            <div className="w-16 h-16 bg-[#C5A059]/10 rounded-full flex items-center justify-center mb-6 text-[#C5A059]">
                                <value.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                            <p className="text-slate-400 text-sm">{value.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
