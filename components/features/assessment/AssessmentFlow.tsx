'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Check, Loader2, ShieldCheck, User, Mail, Phone, Calendar, Briefcase, Calculator, Clock, MessageSquare, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { TREATMENTS } from '@/lib/treatments';

interface FormData {
    name: string;
    email: string;
    phone: string;
    age: string;
    treatment: string;
    budget: string;
    timeline: string;
    notes: string;
}

const treatmentOptions = Object.keys(TREATMENTS).map(key => ({
    label: TREATMENTS[key as keyof typeof TREATMENTS].name,
    value: key
})).concat([{ label: 'Full Smile Reconstruction', value: 'full-reconstruction' }, { label: 'Urgent Consultation', value: 'urgent' }]);

const budgets = [
    '£2,000 - £5,000',
    '£5,000 - £10,000',
    '£10,000 - £15,000',
    '£15,000+'
];

const timelines = [
    'Immediate (Next 30 Days)',
    'Strategic (1-3 Months)',
    'Planning (3-6 Months)',
    'Exploring Options'
];

export default function AssessmentFlow() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        age: '',
        treatment: '',
        budget: '',
        timeline: '',
        notes: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    const totalSteps = 4;

    const updateField = (field: keyof FormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const nextStep = () => {
        if (step < totalSteps) setStep(step + 1);
    };

    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        if (typeof window !== 'undefined') {
            sessionStorage.setItem('smile_assessment_data', JSON.stringify(formData));
            window.dispatchEvent(new Event('assessmentCompleted'));
        }

        setIsSubmitting(false);
        setIsComplete(true);
    };

    const canProceed = () => {
        switch (step) {
            case 1: return formData.name && formData.email && formData.phone;
            case 2: return formData.treatment;
            case 3: return formData.budget && formData.timeline;
            case 4: return true;
            default: return false;
        }
    };

    if (isComplete) {
        return (
            <div className="min-h-[80vh] flex items-center justify-center px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-2xl w-full text-center crystal-card p-12 border-[#C5A059]/30"
                >
                    <div className="w-24 h-24 bg-[#C5A059]/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-[#C5A059]/30 shadow-[0_0_40px_rgba(197,160,89,0.3)]">
                        <ShieldCheck className="w-12 h-12 text-[#C5A059]" />
                    </div>

                    <h1 className="text-4xl font-bold text-white mb-6 tracking-tight">
                        Intake Secured
                    </h1>

                    <p className="text-xl text-slate-400 mb-10 leading-relaxed font-light">
                        Excellent work, <span className="text-white font-bold">{formData.name}</span>. Your case file has been prioritized. Safiye AI is now cross-referencing your profile with our clinical availability.
                    </p>

                    <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-8 mb-10 text-left relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5">
                            <Briefcase className="w-24 h-24" />
                        </div>
                        <h3 className="text-[10px] font-black text-[#C5A059] mb-5 uppercase tracking-[0.3em]">Agency Next Steps</h3>
                        <ul className="space-y-4">
                            {[
                                'Clinical Vetting by Senior Specialist Board',
                                'Verification of Case Complexity & Requirements',
                                'Secure Transfer of Assessment to Safiye AI',
                                'Drafting of Custom BrightPlan™ Coordination'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-slate-300 text-sm">
                                    <div className="w-5 h-5 rounded-full bg-[#C5A059]/20 flex items-center justify-center flex-shrink-0">
                                        <Check className="w-3 h-3 text-[#C5A059]" />
                                    </div>
                                    <span className="font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                        <button
                            onClick={() => {
                                const message = encodeURIComponent(
                                    `*Sovereign Intake Protocol Request*\n\n` +
                                    `*Name:* ${formData.name}\n` +
                                    `*Email:* ${formData.email}\n` +
                                    `*Phone:* ${formData.phone}\n` +
                                    `*Treatment:* ${formData.treatment}\n` +
                                    `*Budget:* ${formData.budget}\n` +
                                    `*Timeline:* ${formData.timeline}\n` +
                                    `*Subject Strategy:* ${formData.notes || 'N/A'}`
                                );
                                window.open(`https://wa.me/905302876350?text=${message}`, '_blank');
                            }}
                            className="bg-[#25D366] text-white font-bold py-5 rounded-xl shadow-[0_20px_40px_rgba(37,211,102,0.2)] hover:shadow-[0_20px_40px_rgba(37,211,102,0.4)] transition-all flex items-center justify-center gap-3 group tracking-widest text-[10px] uppercase"
                        >
                            Finalise via WhatsApp
                            <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        </button>
                        <Link
                            href="/?chat=open"
                            className="bg-[#C5A059] text-white font-bold py-5 rounded-xl shadow-[0_20px_40px_rgba(197,160,89,0.2)] hover:shadow-[0_20px_40px_rgba(197,160,89,0.4)] transition-all flex items-center justify-center gap-3 group tracking-widest text-[10px] uppercase"
                        >
                            Consult with Safiye
                            <MessageSquare className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-6 py-20">
            {/* Progress Bar */}
            <div className="mb-20">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#C5A059]/20 border border-[#C5A059]/30 flex items-center justify-center">
                            <span className="text-[#C5A059] text-xs font-black">{step}</span>
                        </div>
                        <h2 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Sovereign Intake Protocol</h2>
                    </div>
                    <span className="text-[10px] font-black text-[#C5A059] uppercase tracking-widest">{Math.round((step / totalSteps) * 100)}% Verified</span>
                </div>
                <div className="h-1 bg-slate-900 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-[#C5A059] shadow-[0_0_15px_rgba(197,160,89,0.5)]"
                        initial={{ width: 0 }}
                        animate={{ width: `${(step / totalSteps) * 100}%` }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
            </div>

            <div className="crystal-card p-10 md:p-16 relative min-h-[550px] flex flex-col bg-slate-900/40 border-white/5">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={step}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
                        className="flex-grow"
                    >
                        {/* Step 1: Personal Info */}
                        {step === 1 && (
                            <div className="space-y-10">
                                <div>
                                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Identity Verification</h2>
                                    <p className="text-slate-400 font-light">Enter your secure contact credentials to initiate coordination.</p>
                                </div>

                                <div className="grid gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-3">
                                            <User className="w-4 h-4 text-[#C5A059]" /> Full Legal Name
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => updateField('name', e.target.value)}
                                            className="w-full px-6 py-5 bg-slate-950/50 border border-white/10 rounded-xl focus:border-[#C5A059] text-white placeholder-slate-800 outline-none transition-all font-light"
                                            placeholder="John Smith"
                                        />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-3">
                                                <Mail className="w-4 h-4 text-[#C5A059]" /> Secure Email
                                            </label>
                                            <input
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => updateField('email', e.target.value)}
                                                className="w-full px-6 py-5 bg-slate-950/50 border border-white/10 rounded-xl focus:border-[#C5A059] text-white placeholder-slate-800 outline-none transition-all font-light"
                                                placeholder="john@example.com"
                                            />
                                        </div>

                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-3">
                                                <Phone className="w-4 h-4 text-[#C5A059]" /> WhatsApp Preferred
                                            </label>
                                            <input
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => updateField('phone', e.target.value)}
                                                className="w-full px-6 py-5 bg-slate-950/50 border border-white/10 rounded-xl focus:border-[#C5A059] text-white placeholder-slate-800 outline-none transition-all font-light"
                                                placeholder="+44 7123 456789"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 2: Treatment Selection */}
                        {step === 2 && (
                            <div className="space-y-10">
                                <div>
                                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Clinical Blueprint</h2>
                                    <p className="text-slate-400 font-light">Which reconstruction architecture are you interested in?</p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {treatmentOptions.map((option) => (
                                        <button
                                            key={option.value}
                                            onClick={() => updateField('treatment', option.label)}
                                            className={`p-6 border rounded-2xl text-left transition-all relative overflow-hidden group ${formData.treatment === option.label
                                                ? 'border-[#C5A059] bg-[#C5A059]/10 shadow-[0_0_20px_rgba(197,160,89,0.1)]'
                                                : 'border-white/5 bg-slate-950/40 hover:border-[#C5A059]/30 hover:bg-slate-950/60'
                                                }`}
                                        >
                                            <div className="flex items-center justify-between relative z-10">
                                                <span className={`text-sm font-bold tracking-tight ${formData.treatment === option.label ? 'text-white' : 'text-slate-400 group-hover:text-white'}`}>{option.label}</span>
                                                {formData.treatment === option.label && (
                                                    <div className="w-5 h-5 rounded-full bg-[#C5A059] flex items-center justify-center">
                                                        <Check className="w-3 h-3 text-white" />
                                                    </div>
                                                )}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Step 3: Budget & Timeline */}
                        {step === 3 && (
                            <div className="space-y-12">
                                <div>
                                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Valuation & Deployment</h2>
                                    <p className="text-slate-400 font-light">Determine your strategic investment and timeline.</p>
                                </div>

                                <div className="space-y-8">
                                    <div>
                                        <label className="text-[10px] font-black text-[#C5A059] mb-4 uppercase tracking-[0.3em] block flex items-center gap-3">
                                            <Calculator className="w-4 h-4" /> Estimated Budget Allocation
                                        </label>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            {budgets.map((budget) => (
                                                <button
                                                    key={budget}
                                                    onClick={() => updateField('budget', budget)}
                                                    className={`p-4 border rounded-xl transition-all text-xs font-bold ${formData.budget === budget
                                                        ? 'border-[#C5A059] bg-[#C5A059]/10 text-white shadow-[0_0_15px_rgba(197,160,89,0.2)]'
                                                        : 'border-white/5 bg-slate-950/40 text-slate-500 hover:border-[#C5A059]/30 hover:text-white'
                                                        }`}
                                                >
                                                    {budget}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-[10px] font-black text-[#C5A059] mb-4 uppercase tracking-[0.3em] block flex items-center gap-3">
                                            <Clock className="w-4 h-4" /> Planned Deployment
                                        </label>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            {timelines.map((timeline) => (
                                                <button
                                                    key={timeline}
                                                    onClick={() => updateField('timeline', timeline)}
                                                    className={`p-4 border rounded-xl transition-all text-xs font-bold ${formData.timeline === timeline
                                                        ? 'border-[#C5A059] bg-[#C5A059]/10 text-white shadow-[0_0_15px_rgba(197,160,89,0.2)]'
                                                        : 'border-white/5 bg-slate-950/40 text-slate-500 hover:border-[#C5A059]/30 hover:text-white'
                                                        }`}
                                                >
                                                    {timeline}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 4: Final Notes */}
                        {step === 4 && (
                            <div className="space-y-10">
                                <div>
                                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Final Directives</h2>
                                    <p className="text-slate-400 font-light">Provide any specific clinical directives or questions.</p>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-3">
                                        <MessageSquare className="w-4 h-4 text-[#C5A059]" /> Additional Clinical Context
                                    </label>
                                    <textarea
                                        value={formData.notes}
                                        onChange={(e) => updateField('notes', e.target.value)}
                                        rows={6}
                                        className="w-full px-6 py-5 bg-slate-950/50 border border-white/10 rounded-2xl focus:border-[#C5A059] text-white placeholder-slate-800 outline-none transition-all resize-none font-light"
                                        placeholder="Note any previous surgeries, allergies, or specific material preferences..."
                                    />
                                </div>

                                {/* Intelligent Summary Panel */}
                                <div className="bg-[#C5A059]/5 border border-[#C5A059]/20 rounded-2xl p-8 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-10">
                                        <ShieldCheck className="w-12 h-12 text-[#C5A059]" />
                                    </div>
                                    <h3 className="text-[10px] font-black text-white mb-6 uppercase tracking-[0.3em] flex items-center gap-3">
                                        <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse"></span>
                                        Protocol Pre-Verification
                                    </h3>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                        <div>
                                            <p className="text-[9px] text-[#C5A059] uppercase font-black tracking-widest mb-1">Subject</p>
                                            <p className="text-white text-xs font-bold truncate">{formData.name || '---'}</p>
                                        </div>
                                        <div>
                                            <p className="text-[9px] text-[#C5A059] uppercase font-black tracking-widest mb-1">Blueprint</p>
                                            <p className="text-white text-xs font-bold truncate">{formData.treatment || '---'}</p>
                                        </div>
                                        <div>
                                            <p className="text-[9px] text-[#C5A059] uppercase font-black tracking-widest mb-1">Allocation</p>
                                            <p className="text-white text-xs font-bold truncate">{formData.budget || '---'}</p>
                                        </div>
                                        <div>
                                            <p className="text-[9px] text-[#C5A059] uppercase font-black tracking-widest mb-1">Schedule</p>
                                            <p className="text-white text-xs font-bold truncate">{formData.timeline || '---'}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Architecture */}
                <div className="flex items-center justify-between mt-12 pt-10 border-t border-white/5">
                    <button
                        onClick={prevStep}
                        disabled={step === 1}
                        className="flex items-center gap-3 px-8 py-4 text-slate-500 font-bold uppercase tracking-widest text-[10px] rounded-xl hover:text-white hover:bg-white/5 transition-all disabled:opacity-0 disabled:pointer-events-none group"
                    >
                        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-[#C5A059]" />
                        Previous Phase
                    </button>

                    {step < totalSteps ? (
                        <button
                            onClick={nextStep}
                            disabled={!canProceed()}
                            className="bg-[#C5A059] text-white font-black px-12 py-5 rounded-xl text-[10px] uppercase tracking-[0.2em] shadow-[0_15px_30px_rgba(197,160,89,0.2)] hover:shadow-[0_15px_30px_rgba(197,160,89,0.4)] transition-all disabled:opacity-30 flex items-center gap-4 group hover:-translate-y-1"
                        >
                            Next Protocol
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    ) : (
                        <button
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            className="bg-green-600 text-white font-black px-12 py-5 rounded-xl text-[10px] uppercase tracking-[0.2em] shadow-[0_15px_30px_rgba(22,163,74,0.2)] hover:shadow-[0_15px_30px_rgba(22,163,74,0.4)] transition-all disabled:opacity-50 flex items-center gap-4 group hover:-translate-y-1"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Verifying...
                                </>
                            ) : (
                                <>
                                    Finalise Intake
                                    <ShieldCheck className="w-4 h-4" />
                                </>
                            )}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
