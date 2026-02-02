import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-20">
            {/* Hero */}
            <section className="relative h-96 flex items-center overflow-hidden">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'url(/assets/antalya/coastline-golden-hour.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-[#006064]/80 to-slate-950/50"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                        Coordination <span className="text-[#C5A059]">Mastery</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl">
                        Your private advocate for elite dental tourism in Antalya.
                    </p>
                </div>
            </section>

            {/* Story */}
            <section className="section-container">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-white underline decoration-[#C5A059] underline-offset-8">The Agency Pivot</h2>
                        <p className="text-slate-300 text-lg leading-relaxed">
                            For years, we operated as a premier clinic. But we realized patients needed more than just a dentist—they needed a <span className="text-[#C5A059]">Personal Coordinator</span> to navigate the complexities of international care.
                        </p>
                        <p className="text-slate-300 text-lg leading-relaxed">
                            Today, we are an elite agency. We don't just own a building; we vet the top 3% of Turkish dental talent. Led by Safiye Yılmaz and our medical consultant Dr. Nesip, we ensure your journey is managed with white-glove precision.
                        </p>
                        <p className="text-slate-300 text-lg leading-relaxed">
                            From the moment you fill out our Secure Assessment to your final flight home, you aren't just a patient—you are an agency client. We protect your results, your budget, and your time.
                        </p>
                    </div>
                    <div className="crystal-card p-4 border-[#C5A059]/30 shadow-[0_0_30px_rgba(197,160,89,0.1)]">
                        <img
                            src="/assets/clinics/clinic-lobby-01.jpg"
                            alt="Agency Headquarters"
                            className="w-full h-96 object-cover rounded-xl"
                        />
                    </div>
                </div>
            </section>

            {/* Why Antalya */}
            <section className="section-container bg-gradient-to-b from-slate-950 to-slate-900">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Why <span className="gradient-text">Antalya</span>?
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        More than just dental tourism - it's a complete wellness experience
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: 'Mediterranean Paradise',
                            description: 'Recover by pristine beaches and ancient ruins while enjoying 300+ days of sunshine',
                        },
                        {
                            title: 'Premium Care, Lower Costs',
                            description: 'Save up to 70% compared to Western countries without sacrificing quality',
                        },
                        {
                            title: 'Complete Journey',
                            description: 'All-inclusive packages with airport transfers, luxury hotels, and sightseeing',
                        },
                    ].map((item, index) => (
                        <div key={index} className="crystal-card p-8">
                            <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>
                            <p className="text-slate-400">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Values - ESTC with Images */}
            <section className="section-container">
                <h2 className="text-4xl font-bold text-white text-center mb-16">Our Values</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: 'Excellence', desc: 'Premium materials and techniques', img: '/assets/about/excellence.png' },
                        { title: 'Safety', desc: 'International hygiene standards', img: '/assets/about/safety.png' },
                        { title: 'Transparency', desc: 'Clear pricing, no hidden fees', img: '/assets/about/transparency.png' },
                        { title: 'Care', desc: 'Personalized, compassionate service', img: '/assets/about/care.png' },
                    ].map((value, i) => (
                        <div key={i} className="crystal-card overflow-hidden group hover:scale-105 transition-transform">
                            {/* Background Image */}
                            <div
                                className="h-48 bg-cover bg-center relative"
                                style={{ backgroundImage: `url(${value.img})` }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950"></div>
                            </div>
                            {/* Content */}
                            <div className="p-6 text-center">

                                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                                <p className="text-slate-400 text-sm">{value.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
