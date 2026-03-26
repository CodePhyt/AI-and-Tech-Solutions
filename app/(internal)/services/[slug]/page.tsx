import Link from 'next/link';
import { ArrowLeft, CheckCircle, Clock, DollarSign, Award, Code, Cpu } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ShareButtons from '@/components/ui/ShareButtons';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { SERVICES } from '@/lib/services';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return Object.keys(SERVICES).map((slug) => ({
        slug,
    }));
}

export default async function ServicePage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const { slug } = params;

    const service = SERVICES[slug as keyof typeof SERVICES];

    if (!service) {
        notFound();
    }

    return (
        <div className="min-h-screen pt-20 bg-slate-950">
            {/* Breadcrumbs */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
                <Breadcrumbs />
            </div>

            {/* Back Button and Share */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center pb-4">
                <Link href="/services" className="inline-flex items-center text-slate-400 hover:text-[#ffd700] transition-colors group text-sm font-medium">
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Solutions
                </Link>
                <div className="flex items-center space-x-4">
                    <ShareButtons
                        url={`https://osmankadir.tech/services/${slug}`}
                        title={service.title}
                        description={service.shortDescription}
                    />
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[500px] overflow-hidden">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url(${service.imageUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                    <div className="max-w-3xl">
                        <span className="text-[#ffd700] font-bold tracking-widest uppercase text-sm mb-4 block">{service.category} Architecture</span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">{service.title}</h1>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">{service.shortDescription}</p>

                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center space-x-3 crystal-card px-6 py-4 border-[#ffd700]/10 bg-slate-900/50">
                                <DollarSign className="w-6 h-6 text-[#ffd700]" />
                                <div>
                                    <p className="text-xs text-slate-400 uppercase tracking-wider">Investment Scale</p>
                                    <p className="text-2xl font-bold text-white">{service.price.amount} {service.price.currency}</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3 crystal-card px-6 py-4 border-[#ffd700]/10 bg-slate-900/50">
                                <Clock className="w-6 h-6 text-[#ffd700]" />
                                <div>
                                    <p className="text-xs text-slate-400 uppercase tracking-wider">Timeline</p>
                                    <p className="text-lg font-bold text-white">{service.processDetails[1]?.duration || 'Variable'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-3 gap-16">
                    {/* Left Column - Details */}
                    <div className="lg:col-span-2 space-y-16">
                        {/* Technical Overview */}
                        <ScrollReveal>
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-6">Technical Overview</h3>
                                <div className="prose prose-invert max-w-none">
                                    <p className="text-slate-300 text-lg leading-relaxed">{service.fullDescription}</p>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Implementation Protocol Steps */}
                        <ScrollReveal>
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-8">Implementation Protocol</h3>
                                <div className="space-y-6">
                                    {service.processDetails.map((step, index) => (
                                        <div key={index} className="flex space-x-6 crystal-card p-6 border-white/5 hover:border-[#ffd700]/20 transition-colors group bg-slate-900/30">
                                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#ffd700]/10 flex items-center justify-center text-[#ffd700] font-bold text-xl group-hover:bg-[#ffd700] group-hover:text-white transition-colors">
                                                {index + 1}
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                                                <p className="text-slate-400 leading-relaxed">{step.description}</p>
                                                <p className="text-[#ffd700] text-xs font-bold mt-2 uppercase tracking-widest">{step.duration}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Tech Stack Components */}
                        <ScrollReveal>
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-8">Core Architecture</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {service.techStack.map((tech, index) => (
                                        <div key={index} className="flex items-center space-x-3 crystal-card p-4 border-white/5 bg-slate-900/30">
                                            <Code className="w-5 h-5 text-[#ffd700] flex-shrink-0" />
                                            <span className="text-slate-300 font-medium">{tech}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Included Features */}
                        <ScrollReveal>
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-8">System Capabilities</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {service.features.map((feature, index) => (
                                        <div key={index} className="flex items-center space-x-3 crystal-card p-4 border-white/5 bg-slate-900/30">
                                            <CheckCircle className="w-5 h-5 text-[#ffd700] flex-shrink-0" />
                                            <span className="text-slate-300 font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* FAQs */}
                        <ScrollReveal>
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-8">Technical Q&A</h3>
                                <div className="space-y-4">
                                    {service.faqs.map((faq, index) => (
                                        <div key={index} className="crystal-card p-6 border-white/5 bg-slate-900/30">
                                            <h4 className="text-lg font-bold text-[#ffd700] mb-3">{faq.question}</h4>
                                            <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Right Column - Strategic Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-8">
                            {/* Comparison/Action Card */}
                            <div className="crystal-card p-8 border-[#ffd700]/30 bg-[#ffd700]/5 shadow-[0_0_30px_rgba(255,215,0,0.1)]">
                                <div className="text-center mb-8">
                                    <p className="text-[#ffd700] font-bold uppercase tracking-widest text-xs mb-2">{service.price.label}</p>
                                    <div className="flex items-baseline justify-center space-x-2">
                                        <p className="text-4xl font-bold text-white">{service.price.amount} {service.price.currency}</p>
                                    </div>
                                    <p className="text-sm text-slate-400 mt-2">{service.price.details}</p>
                                </div>

                                <div className="space-y-6 mb-8 text-sm">
                                    {service.processDetails.map((phase, idx) => (
                                        <div key={idx} className="flex items-center justify-between py-2 border-b border-white/5">
                                            <div className="flex items-center text-slate-400">
                                                <Cpu className="w-4 h-4 mr-2 text-[#ffd700]" />
                                                <span>Phase {idx + 1}</span>
                                            </div>
                                            <span className="text-white font-medium truncate max-w-[120px]">{phase.title}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link href="/assessment" className="btn-primary w-full block text-center py-4 mb-4">
                                    Initiate Project
                                </Link>

                                <p className="text-[10px] text-slate-500 text-center uppercase tracking-widest">
                                    NDA Protected • Sovereign Ops • 24/7 Support
                                </p>
                            </div>

                            {/* Trust Signals */}
                            <div className="crystal-card p-6 border-white/5 space-y-4 bg-slate-900/40">
                                <div className="flex items-center space-x-3">
                                    <Award className="w-5 h-5 text-[#ffd700]" />
                                    <div>
                                        <p className="text-sm font-bold text-white">Sovereign Standard</p>
                                        <p className="text-xs text-slate-400">Architected by Osman Kadir</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
