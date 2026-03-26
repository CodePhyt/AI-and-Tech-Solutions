import { Code, Cpu, Shield, Zap } from "lucide-react";

export default function CareersPage() {
    return (
        <div className="min-h-screen pt-20 bg-slate-950">
            <section className="section-container">
                <div className="text-center mb-16">
                    <span className="text-[#ffd700] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Recruitment Protocol</span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                        Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] to-[#B08D47]">Vanguard</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
                        We don&apos;t hire employees. We recruit operatives. Architects, Cryptographers, and Engineers building the sovereign web.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto crystal-card p-10 border-white/10 bg-slate-900/60 backdrop-blur-md">
                    <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/5 pb-4">Initiate Candidacy</h2>
                    <form className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <label className="block text-xs font-bold text-[#ffd700] uppercase tracking-widest mb-3">Codename / Name</label>
                                <input type="text" className="w-full bg-slate-950 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-[#ffd700] focus:ring-1 focus:ring-[#ffd700]/30 outline-none transition-all" placeholder="Enter identification..." />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-[#ffd700] uppercase tracking-widest mb-3">Secure Comms (Email)</label>
                                <input type="email" className="w-full bg-slate-950 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-[#ffd700] focus:ring-1 focus:ring-[#ffd700]/30 outline-none transition-all" placeholder="Encrypted channel..." />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-[#ffd700] uppercase tracking-widest mb-3">Specialization Vector</label>
                            <select className="w-full bg-slate-950 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-[#ffd700] focus:ring-1 focus:ring-[#ffd700]/30 outline-none transition-all appearance-none cursor-pointer">
                                <option>Systems Architecture</option>
                                <option>AI / Machine Learning</option>
                                <option>Cybersecurity / InfoSec</option>
                                <option>Frontend Experience</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-[#ffd700] uppercase tracking-widest mb-3">Manifesto / Cover Letter</label>
                            <textarea rows={5} className="w-full bg-slate-950 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-[#ffd700] focus:ring-1 focus:ring-[#ffd700]/30 outline-none transition-all resize-none" placeholder="Brief us on your capabilities..."></textarea>
                        </div>
                        <button type="submit" className="btn-primary w-full py-5 text-lg">Transmit Application</button>
                    </form>
                </div>

                <div className="mt-20 grid md:grid-cols-4 gap-6 text-center">
                    {[
                        { icon: Code, label: "Clean Code" },
                        { icon: Shield, label: "OpSec First" },
                        { icon: Cpu, label: "High Performance" },
                        { icon: Zap, label: "Rapid Deployment" },
                    ].map((item, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center gap-4 opacity-50 hover:opacity-100 transition-opacity">
                            <item.icon className="w-6 h-6 text-[#ffd700]" />
                            <span className="text-xs font-bold text-white uppercase tracking-widest">{item.label}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
