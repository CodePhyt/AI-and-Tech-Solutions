'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Check, Loader2 } from 'lucide-react';

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

const treatments = [
    'Hollywood Smile',
    'Dental Implants',
    'All-on-4 Implants',
    'Veneers',
    'Teeth Whitening',
    'Not Sure / Need Consultation'
];

const budgets = [
    '€2,000 - €5,000',
    '€5,000 - €10,000',
    '€10,000 - €15,000',
    '€15,000+'
];

const timelines = [
    'Within 1 month',
    '1-3 months',
    '3-6 months',
    '6+ months',
    'Just exploring'
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

        // Save to session storage for chat widget
        if (typeof window !== 'undefined') {
            sessionStorage.setItem('smile_assessment_data', JSON.stringify(formData));
            // Dispatch a custom event to notify other components (like ChatWidget) immediately
            window.dispatchEvent(new Event('assessmentCompleted'));
        }

        setIsSubmitting(false);
        setIsComplete(true);
    };

    const canProceed = () => {
        switch (step) {
            case 1:
                return formData.name && formData.email && formData.phone;
            case 2:
                return formData.treatment;
            case 3:
                return formData.budget && formData.timeline;
            case 4:
                return true;
            default:
                return false;
        }
    };

    if (isComplete) {
        return (
            <div className="min-h-[70vh] flex items-center justify-center px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-2xl w-full text-center crystal-card p-10"
                >
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/30">
                        <Check className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-4xl font-bold text-white mb-4">
                        Analysis Complete!
                    </h1>
                    <p className="text-xl text-slate-300 mb-8">
                        Thank you, {formData.name}! Sarah (our AI Concierge) has received your details.
                    </p>
                    <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-6 mb-8 text-left">
                        <h3 className="font-semibold text-sky-400 mb-3 uppercase tracking-wider text-sm">Next Steps</h3>
                        <ul className="space-y-3 text-slate-300">
                            <li className="flex items-start gap-3">
                                <div className="p-1 bg-emerald-500/20 rounded-full mt-0.5">
                                    <Check className="w-3 h-3 text-emerald-400" />
                                </div>
                                <span>Sarah is analyzing your case details</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="p-1 bg-emerald-500/20 rounded-full mt-0.5">
                                    <Check className="w-3 h-3 text-emerald-400" />
                                </div>
                                <span>Generating personalized treatment options</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="p-1 bg-emerald-500/20 rounded-full mt-0.5">
                                    <Check className="w-3 h-3 text-emerald-400" />
                                </div>
                                <span>Calculating estimated cost savings</span>
                            </li>
                        </ul>
                    </div>

                    <div className="grid gap-4">
                        <a
                            href="/#chat"
                            className="w-full block py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] transition-all transform hover:scale-[1.02]"
                        >
                            Chat with Sarah Now
                        </a>
                        <a
                            href="/"
                            className="w-full block py-4 bg-white/5 border border-white/10 text-slate-300 font-semibold rounded-xl hover:bg-white/10 transition-colors"
                        >
                            Return to Homepage
                        </a>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto px-6 py-12">
            {/* Progress Bar */}
            <div className="mb-12">
                <div className="flex items-center justify-between mb-3">
                    <h2 className="text-sm font-medium text-sky-400">Step {step} of {totalSteps}</h2>
                    <span className="text-sm text-slate-400">{Math.round((step / totalSteps) * 100)}% Complete</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-sky-400 to-blue-500 shadow-[0_0_10px_rgba(56,189,248,0.5)]"
                        initial={{ width: 0 }}
                        animate={{ width: `${(step / totalSteps) * 100}%` }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
            </div>

            <div className="crystal-card p-8 md:p-10 relative min-h-[500px] flex flex-col">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={step}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="flex-grow"
                    >
                        {/* Step 1: Personal Info */}
                        {step === 1 && (
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold text-white">Let's start with your details</h2>
                                <p className="text-slate-400">We'll use this information to create your personalized treatment plan.</p>

                                <div className="grid gap-5">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">Full Name *</label>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => updateField('name', e.target.value)}
                                            className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent text-white placeholder-slate-600 outline-none transition-all"
                                            placeholder="John Smith"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">Email Address *</label>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => updateField('email', e.target.value)}
                                            className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent text-white placeholder-slate-600 outline-none transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">Phone Number *</label>
                                        <input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => updateField('phone', e.target.value)}
                                            className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent text-white placeholder-slate-600 outline-none transition-all"
                                            placeholder="+44 7123 456789"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">Age (Optional)</label>
                                        <input
                                            type="number"
                                            value={formData.age}
                                            onChange={(e) => updateField('age', e.target.value)}
                                            className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent text-white placeholder-slate-600 outline-none transition-all"
                                            placeholder="35"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 2: Treatment Selection */}
                        {step === 2 && (
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold text-white">Treatment Preference</h2>
                                <p className="text-slate-400">Select the treatment that best matches your needs.</p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {treatments.map((treatment) => (
                                        <button
                                            key={treatment}
                                            onClick={() => updateField('treatment', treatment)}
                                            className={`p-5 border rounded-xl text-left transition-all relative overflow-hidden group ${formData.treatment === treatment
                                                ? 'border-sky-500 bg-sky-500/10'
                                                : 'border-white/10 bg-slate-900/30 hover:border-sky-500/50 hover:bg-slate-900/50'
                                                }`}
                                        >
                                            <div className="flex items-center justify-between relative z-10">
                                                <span className={`font-medium ${formData.treatment === treatment ? 'text-sky-400' : 'text-slate-300 group-hover:text-white'}`}>{treatment}</span>
                                                {formData.treatment === treatment && (
                                                    <div className="w-6 h-6 rounded-full bg-sky-500 flex items-center justify-center">
                                                        <Check className="w-4 h-4 text-white" />
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
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-3xl font-bold text-white mb-2">Budget & Timeline</h2>
                                    <p className="text-slate-400">Help us customize a plan that fits you.</p>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-sky-400 mb-3 uppercase tracking-wider">Estimated Budget</label>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {budgets.map((budget) => (
                                            <button
                                                key={budget}
                                                onClick={() => updateField('budget', budget)}
                                                className={`p-4 border rounded-xl transition-all ${formData.budget === budget
                                                    ? 'border-sky-500 bg-sky-500/10 text-white shadow-[0_0_15px_rgba(14,165,233,0.2)]'
                                                    : 'border-white/10 bg-slate-900/30 text-slate-300 hover:border-sky-500/50 hover:bg-slate-900/50'
                                                    }`}
                                            >
                                                <span className="font-medium">{budget}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-sky-400 mb-3 uppercase tracking-wider">Planned Timeline</label>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {timelines.map((timeline) => (
                                            <button
                                                key={timeline}
                                                onClick={() => updateField('timeline', timeline)}
                                                className={`p-4 border rounded-xl transition-all ${formData.timeline === timeline
                                                    ? 'border-sky-500 bg-sky-500/10 text-white shadow-[0_0_15px_rgba(14,165,233,0.2)]'
                                                    : 'border-white/10 bg-slate-900/30 text-slate-300 hover:border-sky-500/50 hover:bg-slate-900/50'
                                                    }`}
                                            >
                                                <span className="font-medium">{timeline}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 4: Additional Notes */}
                        {step === 4 && (
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold text-white">Almost done!</h2>
                                <p className="text-slate-400">Any specific dental concerns or questions?</p>

                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">Additional Notes (Optional)</label>
                                    <textarea
                                        value={formData.notes}
                                        onChange={(e) => updateField('notes', e.target.value)}
                                        rows={5}
                                        className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent text-white placeholder-slate-600 outline-none transition-all resize-none"
                                        placeholder="E.g., I have a metal allergy, I want zirconium crowns..."
                                    />
                                </div>

                                {/* Summary */}
                                <div className="bg-slate-900/40 border border-white/5 rounded-2xl p-6">
                                    <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                                        Summary
                                    </h3>
                                    <dl className="space-y-3 text-sm">
                                        <div className="flex justify-between border-b border-white/5 pb-2">
                                            <dt className="text-slate-400">Name:</dt>
                                            <dd className="font-medium text-white">{formData.name}</dd>
                                        </div>
                                        <div className="flex justify-between border-b border-white/5 pb-2">
                                            <dt className="text-slate-400">Treatment:</dt>
                                            <dd className="font-medium text-white">{formData.treatment}</dd>
                                        </div>
                                        <div className="flex justify-between border-b border-white/5 pb-2">
                                            <dt className="text-slate-400">Budget:</dt>
                                            <dd className="font-medium text-white">{formData.budget}</dd>
                                        </div>
                                        <div className="flex justify-between">
                                            <dt className="text-slate-400">Timeline:</dt>
                                            <dd className="font-medium text-white">{formData.timeline}</dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8 pt-8 border-t border-white/10">
                    <button
                        onClick={prevStep}
                        disabled={step === 1}
                        className="flex items-center gap-2 px-6 py-3 text-slate-400 font-medium rounded-full hover:text-white hover:bg-white/5 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                        <ChevronLeft className="w-5 h-5" />
                        Back
                    </button>

                    {step < totalSteps ? (
                        <button
                            onClick={nextStep}
                            disabled={!canProceed()}
                            className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-full hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5"
                        >
                            Next
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    ) : (
                        <button
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold rounded-full hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all disabled:opacity-50 transform hover:-translate-y-0.5"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Submitting...
                                </>
                            ) : (
                                <>
                                    Submit for Analysis
                                    <Check className="w-5 h-5" />
                                </>
                            )}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
