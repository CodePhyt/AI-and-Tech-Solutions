import Link from 'next/link';
import { ArrowLeft, CheckCircle, Clock, DollarSign, Award, Stethoscope, Calendar } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ShareButtons from '@/components/ui/ShareButtons';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { TREATMENTS } from '@/lib/treatments';

export async function generateStaticParams() {
    return Object.keys(TREATMENTS).map((slug) => ({
        slug,
    }));
}

export default async function TreatmentPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const { slug } = params;

    const treatment = TREATMENTS[slug as keyof typeof TREATMENTS];

    if (!treatment) {
        return (
            <div className="min-h-screen pt-20 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Treatment Not Found</h1>
                    <Link href="/" className="text-[#C5A059] hover:text-white transition-colors">
                        Return to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-20">
            {/* Breadcrumbs */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
                <Breadcrumbs />
            </div>

            {/* Back Button and Share */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center pb-4">
                <Link href="/" className="inline-flex items-center text-slate-400 hover:text-[#C5A059] transition-colors group text-sm font-medium">
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>
                {/* ShareButtons logic here - keeping simple for now or assuming it exists */}
                <div className="flex items-center space-x-4">
                    <ShareButtons
                        url={typeof window !== 'undefined' ? window.location.href : ''}
                        title={treatment.name}
                        description={treatment.shortDescription}
                    />
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[500px] overflow-hidden">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url(${treatment.imageUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                    <div className="max-w-3xl">
                        <span className="text-[#C5A059] font-bold tracking-widest uppercase text-sm mb-4 block">{treatment.category} Protocol</span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">{treatment.name}</h1>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">{treatment.shortDescription}</p>

                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center space-x-3 crystal-card px-6 py-4 border-[#C5A059]/10">
                                <DollarSign className="w-6 h-6 text-[#C5A059]" />
                                <div>
                                    <p className="text-xs text-slate-400 uppercase tracking-wider">Starting at</p>
                                    <p className="text-2xl font-bold text-white">£{treatment.pricing.basePrice.GBP}</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3 crystal-card px-6 py-4 border-[#C5A059]/10">
                                <Clock className="w-6 h-6 text-[#C5A059]" />
                                <div>
                                    <p className="text-xs text-slate-400 uppercase tracking-wider">Protocol Duration</p>
                                    <p className="text-lg font-bold text-white">{treatment.procedureDetails.duration}</p>
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
                        {/* Clinical Overview */}
                        <ScrollReveal>
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-6">Clinical Overview</h3>
                                <div className="prose prose-invert max-w-none">
                                    <p className="text-slate-300 text-lg leading-relaxed">{treatment.fullDescription}</p>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Procedure Protocol Steps */}
                        <ScrollReveal>
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-8">The Journey Protocol</h3>
                                <div className="space-y-6">
                                    {treatment.steps.map((step, index) => (
                                        <div key={index} className="flex space-x-6 crystal-card p-6 border-white/5 hover:border-[#C5A059]/20 transition-colors group">
                                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#C5A059]/10 flex items-center justify-center text-[#C5A059] font-bold text-xl group-hover:bg-[#C5A059] group-hover:text-white transition-colors">
                                                {step.order}
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                                                <p className="text-slate-400 leading-relaxed">{step.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Included Features */}
                        <ScrollReveal>
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-8">Strategic Inclusions</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {treatment.features.map((feature: string, index: number) => (
                                        <div key={index} className="flex items-center space-x-3 crystal-card p-4 border-white/5">
                                            <CheckCircle className="w-5 h-5 text-[#C5A059] flex-shrink-0" />
                                            <span className="text-slate-300 font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* FAQs */}
                        <ScrollReveal>
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-8">Common Inquiries</h3>
                                <div className="space-y-4">
                                    {treatment.faqs.map((faq, index) => (
                                        <div key={index} className="crystal-card p-6 border-white/5">
                                            <h4 className="text-lg font-bold text-[#C5A059] mb-3">{faq.question}</h4>
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
                            <div className="crystal-card p-8 border-[#C5A059]/30 bg-[#C5A059]/5 shadow-[0_0_30px_rgba(197,160,89,0.1)]">
                                <div className="text-center mb-8">
                                    <p className="text-[#C5A059] font-bold uppercase tracking-widest text-xs mb-2">Agency Preferred Rate</p>
                                    <div className="flex items-baseline justify-center space-x-2">
                                        <p className="text-6xl font-bold text-white">£{treatment.pricing.basePrice.GBP}</p>
                                    </div>
                                    <p className="text-sm text-slate-400 mt-2">{treatment.pricing.unit}</p>
                                </div>

                                <div className="space-y-6 mb-8 text-sm">
                                    <div className="flex items-center justify-between py-2 border-b border-white/5">
                                        <div className="flex items-center text-slate-400">
                                            <Stethoscope className="w-4 h-4 mr-2 text-[#C5A059]" />
                                            <span>Anesthesia</span>
                                        </div>
                                        <span className="text-white font-medium">{treatment.procedureDetails.anesthesia}</span>
                                    </div>
                                    <div className="flex items-center justify-between py-2 border-b border-white/5">
                                        <div className="flex items-center text-slate-400">
                                            <Calendar className="w-4 h-4 mr-2 text-[#C5A059]" />
                                            <span>Duration</span>
                                        </div>
                                        <span className="text-white font-medium">{treatment.procedureDetails.duration}</span>
                                    </div>
                                    <div className="flex items-center justify-between py-2 border-b border-white/5">
                                        <div className="flex items-center text-slate-400">
                                            <Clock className="w-4 h-4 mr-2 text-[#C5A059]" />
                                            <span>Recovery</span>
                                        </div>
                                        <span className="text-white font-medium">{treatment.procedureDetails.recoveryTime}</span>
                                    </div>
                                </div>

                                <Link href="/assessment" className="btn-primary w-full block text-center py-4 mb-4">
                                    Get Intelligent Quote
                                </Link>

                                <p className="text-[10px] text-slate-500 text-center uppercase tracking-widest">
                                    Ironclad Security • Direct Agency Rates • 24/7 Human Support
                                </p>
                            </div>

                            {/* Trust Signals */}
                            <div className="crystal-card p-6 border-white/5 space-y-4">
                                <div className="flex items-center space-x-3">
                                    <Award className="w-5 h-5 text-[#C5A059]" />
                                    <div>
                                        <p className="text-sm font-bold text-white">Protocol Guaranteed</p>
                                        <p className="text-xs text-slate-400">Vetted by Personal Coordinator</p>
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
