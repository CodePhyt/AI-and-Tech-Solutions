'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Check, Loader2, Server, Shield, Globe, Cpu, Video, Code } from 'lucide-react';
import { SERVICES } from '@/lib/services';

// Tech-focused type definitions
type AssessmentStep = 1 | 2 | 3 | 4;

interface FormData {
    name: string;
    email: string;
    phone: string;
    serviceId: string | null;
    budget: string | null;
    timeline: string | null;
    notes: string;
    gdprConsent: boolean;
}

const BUDGET_OPTIONS = [
    { id: 'seed', label: 'Seed / MVP', range: '€5k - €15k' },
    { id: 'growth', label: 'Growth Phase', range: '€15k - €50k' },
    { id: 'scale', label: 'Scale / Enterprise', range: '€50k+' },
    { id: 'custom', label: 'Custom / Retainer', range: 'TBD' }
];

const TIMELINE_OPTIONS = [
    { id: 'urgent', label: 'Urgent Deployment', duration: '< 4 Weeks' },
    { id: 'standard', label: 'Standard Cycle', duration: '1-3 Months' },
    { id: 'strategic', label: 'Strategic Roadmap', duration: '3-6 Months' },
    { id: 'flexible', label: 'Flexible / Ongoing', duration: 'Retainer' }
];

export default function AssessmentFlow() {
    const [step, setStep] = useState<AssessmentStep>(1);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    // Form State
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        serviceId: null,
        budget: null,
        timeline: null,
        notes: '',
        gdprConsent: false
    });

    const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

    // Handlers
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormData]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSelectService = (slug: string) => {
        setFormData(prev => ({ ...prev, serviceId: slug })); // Using slug as ID
        if (errors.serviceId) setErrors(prev => ({ ...prev, serviceId: undefined }));
    };

    const handleSelectBudget = (id: string) => {
        setFormData(prev => ({ ...prev, budget: id }));
        if (errors.budget) setErrors(prev => ({ ...prev, budget: undefined }));
    };

    const handleSelectTimeline = (id: string) => {
        setFormData(prev => ({ ...prev, timeline: id }));
        if (errors.timeline) setErrors(prev => ({ ...prev, timeline: undefined }));
    };

    const validateStep = (currentStep: AssessmentStep): boolean => {
        const newErrors: Partial<Record<keyof FormData, string>> = {};
        let isValid = true;

        switch (currentStep) {
            case 1:
                if (!formData.name.trim()) newErrors.name = 'Identity required.';
                if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Valid secure channel required.';
                if (!formData.phone.trim()) newErrors.phone = 'Contact signal required.';
                break;
            case 2:
                if (!formData.serviceId) newErrors.serviceId = 'Select a tech pillar.';
                break;
            case 3:
                if (!formData.budget) newErrors.budget = 'Define investment parameters.';
                if (!formData.timeline) newErrors.timeline = 'Set temporal constraints.';
                break;
            case 4:
                if (!formData.gdprConsent) newErrors.gdprConsent = 'Protocol acceptance required.';
                if (formData.notes.length < 10) newErrors.notes = 'System requires minimum 10 characters for directives.';
                break;
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            isValid = false;
        }

        return isValid;
    };

    const nextStep = () => {
        if (validateStep(step)) {
            setStep(prev => Math.min(prev + 1, 4) as AssessmentStep);
        }
    };

    const prevStep = () => {
        setStep(prev => Math.max(prev - 1, 1) as AssessmentStep);
    };

    const handleSubmit = async () => {
        if (!validateStep(4)) return;

        setLoading(true);

        try {
            const submissionFormData = new FormData();
            submissionFormData.append('fullName', formData.name);
            submissionFormData.append('phone', formData.phone);

            // Combine all technical details into projectScope
            const service = formData.serviceId ? SERVICES[formData.serviceId] : null;
            const serviceName = service ? service.title : 'Not Selected';
            const budgetLabel = BUDGET_OPTIONS.find(b => b.id === formData.budget)?.label || 'Not Selected';
            const timelineLabel = TIMELINE_OPTIONS.find(t => t.id === formData.timeline)?.label || 'Not Selected';

            const technicalManifest = `
Service Pillar: ${serviceName}
Investment Scale: ${budgetLabel} (${formData.budget})
Timeline Horizon: ${timelineLabel} (${formData.timeline})
Contact Email: ${formData.email}

Directives & Notes:
${formData.notes}
            `.trim();

            submissionFormData.append('projectScope', technicalManifest);
            submissionFormData.append('gdprConsent', String(formData.gdprConsent));

            // Use the server action
            const { submitAssessment } = await import('@/app/actions/assessment');
            const result = await submitAssessment(submissionFormData);

            if (result.success) {
                // Store minimal info for ChatWidget to pick up
                sessionStorage.setItem('nexus_assessment_data', JSON.stringify({
                    name: formData.name.split(' ')[0],
                    treatment: serviceName,
                    budget: budgetLabel
                }));
                // Dispatch event for ChatWidget
                window.dispatchEvent(new Event('assessmentCompleted'));

                setSuccess(true);
            } else {
                console.error('Submission failed', result.error);
                setErrors(prev => ({ ...prev, gdprConsent: 'Protocol synchronization failed. Please try again.' }));
            }
        } catch (error) {
            console.error('Submission error', error);
            setErrors(prev => ({ ...prev, gdprConsent: 'Network protocol error.' }));
        } finally {
            setLoading(false);
        }
    };

    const getServiceIcon = (category: string) => {
        // Simple mapping based on category string
        if (category.includes('AI') || category.includes('Intelligence')) return <Cpu className="w-6 h-6" />;
        if (category.includes('Smart') || category.includes('IoT')) return <Server className="w-6 h-6" />;
        if (category.includes('Global') || category.includes('Trade')) return <Globe className="w-6 h-6" />;
        if (category.includes('Consulting')) return <Shield className="w-6 h-6" />;
        if (category.includes('Media')) return <Video className="w-6 h-6" />;
        return <Code className="w-6 h-6" />;
    };

    if (success) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-2xl mx-auto text-center p-12 bg-[#1a1a1a]/50 backdrop-blur-xl border border-[#00f3ff]/20 rounded-2xl shadow-[0_0_50px_rgba(0,243,255,0.1)]"
            >
                <div className="w-24 h-24 bg-[#00f3ff]/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-[#00f3ff]/30">
                    <Check className="w-12 h-12 text-[#00f3ff]" />
                </div>
                <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Protocol Initiated</h2>
                <p className="text-slate-400 text-lg mb-8">
                    Your parameters have been securely received. Nexus is analyzing your request and will establish a secure channel shortly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="px-8 py-3 bg-[#1a1a1a] border border-white/10 text-white font-medium rounded-lg hover:bg-white/5 transition-all"
                    >
                        Return to Base
                    </Link>
                </div>
            </motion.div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-12 relative">
                <div className="h-1 bg-[#1a1a1a] rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-[#00f3ff] to-[#d4af37]"
                        initial={{ width: 0 }}
                        animate={{ width: `${(step / 4) * 100}%` }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                </div>
                <div className="flex justify-between mt-4 text-xs font-medium uppercase tracking-widest text-slate-500">
                    <span className={step >= 1 ? "text-[#00f3ff]" : ""}>Identity</span>
                    <span className={step >= 2 ? "text-[#00f3ff]" : ""}>Tech Pillars</span>
                    <span className={step >= 3 ? "text-[#00f3ff]" : ""}>Investment</span>
                    <span className={step >= 4 ? "text-[#00f3ff]" : ""}>Directives</span>
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Step 1: Identity Verification */}
                    {step === 1 && (
                        <div className="space-y-8">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Identity Verification</h2>
                                <p className="text-slate-400">Secure entry for protocol initialization.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-[#00f3ff] font-bold">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Enter your full name"
                                        className={`w-full bg-[#1a1a1a]/50 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00f3ff] focus:ring-1 focus:ring-[#00f3ff] transition-all`}
                                    />
                                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-[#00f3ff] font-bold">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="secure@domain.com"
                                        className={`w-full bg-[#1a1a1a]/50 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00f3ff] focus:ring-1 focus:ring-[#00f3ff] transition-all`}
                                    />
                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-xs uppercase tracking-widest text-[#00f3ff] font-bold">Phone / Signal</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="+1 (555) 000-0000"
                                        className={`w-full bg-[#1a1a1a]/50 border ${errors.phone ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00f3ff] focus:ring-1 focus:ring-[#00f3ff] transition-all`}
                                    />
                                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 2: Tech Pillars (Services) */}
                    {step === 2 && (
                        <div className="space-y-8">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Tech Pillar Selection</h2>
                                <p className="text-slate-400">Define the core architecture for your initiative.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {Object.values(SERVICES).map((service) => (
                                    <button
                                        key={service.slug}
                                        onClick={() => handleSelectService(service.slug)}
                                        className={`group relative p-6 text-left rounded-xl border transition-all duration-300 hover:border-[#00f3ff]/50 hover:shadow-[0_0_20px_rgba(0,243,255,0.1)] ${formData.serviceId === service.slug
                                            ? 'bg-[#1a1a1a] border-[#00f3ff] shadow-[0_0_20px_rgba(0,243,255,0.2)]'
                                            : 'bg-[#1a1a1a]/30 border-white/5'
                                            }`}
                                    >
                                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-colors ${formData.serviceId === service.slug ? 'bg-[#00f3ff] text-[#0f0f0f]' : 'bg-white/5 text-[#00f3ff] group-hover:bg-[#00f3ff]/20'
                                            }`}>
                                            {getServiceIcon(service.category)}
                                        </div>
                                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00f3ff] transition-colors">{service.title}</h3>
                                        <p className="text-sm text-slate-400 line-clamp-2">{service.shortDescription}</p>
                                    </button>
                                ))}
                            </div>
                            {errors.serviceId && <p className="text-red-500 text-center text-sm mt-4">{errors.serviceId}</p>}
                        </div>
                    )}

                    {/* Step 3: Investment & Timeline */}
                    {step === 3 && (
                        <div className="space-y-12">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Parameters & Deployment</h2>
                                <p className="text-slate-400">Establish budget velocity and timeline constraints.</p>
                            </div>

                            <div className="space-y-4">
                                <label className="text-xs uppercase tracking-widest text-[#00f3ff] font-bold block mb-4">Investment Scale</label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                                    {BUDGET_OPTIONS.map((option) => (
                                        <button
                                            key={option.id}
                                            onClick={() => handleSelectBudget(option.id)}
                                            className={`p-4 rounded-xl border text-center transition-all ${formData.budget === option.id
                                                ? 'bg-[#1a1a1a] border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                                                : 'bg-[#1a1a1a]/30 border-white/5 hover:border-[#d4af37]/50'
                                                }`}
                                        >
                                            <div className={`text-lg font-bold mb-1 ${formData.budget === option.id ? 'text-[#d4af37]' : 'text-white'}`}>
                                                {option.range}
                                            </div>
                                            <div className="text-xs text-slate-400 uppercase tracking-wider">{option.label}</div>
                                        </button>
                                    ))}
                                </div>
                                {errors.budget && <p className="text-red-500 text-xs mt-1">{errors.budget}</p>}
                            </div>

                            <div className="space-y-4">
                                <label className="text-xs uppercase tracking-widest text-[#00f3ff] font-bold block mb-4">Timeline Horizon</label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                                    {TIMELINE_OPTIONS.map((option) => (
                                        <button
                                            key={option.id}
                                            onClick={() => handleSelectTimeline(option.id)}
                                            className={`p-4 rounded-xl border text-center transition-all ${formData.timeline === option.id
                                                ? 'bg-[#1a1a1a] border-[#00f3ff] shadow-[0_0_15px_rgba(0,243,255,0.2)]'
                                                : 'bg-[#1a1a1a]/30 border-white/5 hover:border-[#00f3ff]/50'
                                                }`}
                                        >
                                            <div className={`text-lg font-bold mb-1 ${formData.timeline === option.id ? 'text-[#00f3ff]' : 'text-white'}`}>
                                                {option.duration}
                                            </div>
                                            <div className="text-xs text-slate-400 uppercase tracking-wider">{option.label}</div>
                                        </button>
                                    ))}
                                </div>
                                {errors.timeline && <p className="text-red-500 text-xs mt-1">{errors.timeline}</p>}
                            </div>
                        </div>
                    )}

                    {/* Step 4: Final Directives */}
                    {step === 4 && (
                        <div className="space-y-8">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Final Directives</h2>
                                <p className="text-slate-400">Additional context for the architectural team.</p>
                            </div>

                            <div className="space-y-4">
                                <label className="text-xs uppercase tracking-widest text-[#00f3ff] font-bold">Project Brief / Specific Goals</label>
                                <textarea
                                    name="notes"
                                    value={formData.notes}
                                    onChange={handleInputChange}
                                    placeholder="Describe your project goals, technical constraints, or specific requirements..."
                                    rows={6}
                                    className="w-full bg-[#1a1a1a]/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00f3ff] focus:ring-1 focus:ring-[#00f3ff] transition-all resize-none"
                                />
                                {errors.notes && <p className="text-red-500 text-xs mt-1">{errors.notes}</p>}
                            </div>

                            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5 space-y-4">
                                <h3 className="text-white font-bold flex items-center gap-2">
                                    <Shield className="w-5 h-5 text-[#d4af37]" />
                                    Protocol Summary
                                </h3>
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <span className="text-slate-500 block text-xs uppercase">Identity</span>
                                        <span className="text-white font-medium">{formData.name}</span>
                                    </div>
                                    <div>
                                        <span className="text-slate-500 block text-xs uppercase">Contact</span>
                                        <span className="text-white font-medium truncate">{formData.email}</span>
                                    </div>
                                    <div>
                                        <span className="text-slate-500 block text-xs uppercase">Tech Pillar</span>
                                        <span className="text-[#00f3ff] font-medium">
                                            {formData.serviceId ? SERVICES[formData.serviceId]?.title : 'Not Selected'}
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-slate-500 block text-xs uppercase">Investment</span>
                                        <span className="text-[#d4af37] font-medium">
                                            {BUDGET_OPTIONS.find(b => b.id === formData.budget)?.range || '-'}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 p-4 bg-[#00f3ff]/5 rounded-lg border border-[#00f3ff]/20">
                                <div className="pt-1">
                                    <input
                                        type="checkbox"
                                        id="gdpr"
                                        checked={formData.gdprConsent}
                                        onChange={(e) => {
                                            setFormData(prev => ({ ...prev, gdprConsent: e.target.checked }));
                                            if (e.target.checked && errors.gdprConsent) setErrors(prev => ({ ...prev, gdprConsent: undefined }));
                                        }}
                                        className="w-4 h-4 rounded border-[#00f3ff] text-[#00f3ff] bg-transparent focus:ring-[#00f3ff]"
                                    />
                                </div>
                                <label htmlFor="gdpr" className="text-xs text-slate-400 cursor-pointer">
                                    I acknowledge that I am initiating a sovereign tech inquiry. My data will be processed according to the
                                    <a href="/legal/privacy" className="text-[#00f3ff] hover:underline ml-1">Privacy Protocol</a>.
                                </label>
                            </div>
                            {errors.gdprConsent && <p className="text-red-500 text-xs mt-1 text-center">{errors.gdprConsent}</p>}
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="mt-12 flex justify-between pt-8 border-t border-white/5">
                <button
                    onClick={prevStep}
                    disabled={step === 1 || loading}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${step === 1
                        ? 'opacity-0 pointer-events-none'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                        }`}
                >
                    <ChevronLeft className="w-5 h-5" />
                    Back
                </button>

                {step < 4 ? (
                    <button
                        onClick={nextStep}
                        className="flex items-center gap-2 px-8 py-3 bg-[#00f3ff] text-[#0f0f0f] font-bold rounded-lg hover:bg-[#00c4cf] hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all"
                    >
                        Next Phase
                        <ChevronRight className="w-5 h-5" />
                    </button>
                ) : (
                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="flex items-center gap-2 px-10 py-3 bg-gradient-to-r from-[#d4af37] to-[#aa8c2c] text-[#0f0f0f] font-bold rounded-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {loading ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Processing...
                            </>
                        ) : (
                            <>
                                Initiate Protocol
                                <ChevronRight className="w-5 h-5" />
                            </>
                        )}
                    </button>
                )}
            </div>
        </div>
    );
}
