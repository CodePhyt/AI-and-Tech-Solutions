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
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/50"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                        The <span className="gradient-text">Boutique</span> Experience
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl">
                        Your journey to a perfect smile in the heart of the Mediterranean
                    </p>
                </div>
            </section>

            {/* Story */}
            <section className="section-container">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-white">Our Story</h2>
                        <p className="text-slate-300 text-lg leading-relaxed">
                            Founded in 2009, Smile Turkey was born from a simple vision: to make world-class dental care accessible to everyone,
                            without compromising on quality or luxury.
                        </p>
                        <p className="text-slate-300 text-lg leading-relaxed">
                            We've helped over 10,000 patients from around the world achieve their dream smiles, combining cutting-edge dental
                            technology with the warm hospitality and natural beauty of Antalya.
                        </p>
                        <p className="text-slate-300 text-lg leading-relaxed">
                            Every patient receives personalized care from our expert team, luxury accommodations, and the opportunity to recover
                            in one of the world's most beautiful destinations.
                        </p>
                    </div>
                    <div className="crystal-card p-8">
                        <img
                            src="/assets/clinics/clinic-lobby-01.jpg"
                            alt="Our dental team"
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
