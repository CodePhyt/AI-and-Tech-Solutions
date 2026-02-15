'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AssessmentSchema } from '@/lib/validations/assessment';
import { Upload, FileText, User, Phone, CheckCircle2, AlertCircle, ShieldCheck, ArrowRight, Camera, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { submitAssessment } from '@/app/actions/assessment';

export default function AssessmentForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [serverError, setServerError] = useState<string | null>(null);
    const [files, setFiles] = useState<File[]>([]);
    const [submittedData, setSubmittedData] = useState<any>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(AssessmentSchema),
    });

    const onDrop = (e: React.DragEvent) => {
        e.preventDefault();
        const droppedFiles = Array.from(e.dataTransfer.files);
        handleFiles(droppedFiles);
    };

    const handleFiles = (newFiles: File[]) => {
        const validFiles = newFiles.filter(f =>
            ['image/jpeg', 'image/png', 'application/pdf'].includes(f.type) && f.size <= 5 * 1024 * 1024
        );
        setFiles(prev => [...prev, ...validFiles]);
    };

    const onSubmit = async (data: any) => {
        setIsSubmitting(true);
        setServerError(null);

        try {
            const formData = new FormData();
            formData.append('fullName', data.fullName);
            formData.append('phone', data.phone);
            formData.append('projectScope', data.projectScope);
            formData.append('gdprConsent', String(data.gdprConsent));

            files.forEach((file) => {
                formData.append('files', file);
            });

            const result = await submitAssessment(formData);

            if (result.success) {
                setSubmittedData(data);

                // Sync with Session Cache
                if (typeof window !== 'undefined') {
                    const assessmentData = {
                        name: data.fullName,
                        phone: data.phone,
                        treatment: 'Project Inquiry',
                        notes: data.projectScope,
                        email: 'Pending Verification'
                    };
                    sessionStorage.setItem('tech_intake_data', JSON.stringify(assessmentData));
                    window.dispatchEvent(new Event('assessmentCompleted'));
                }

                setIsSuccess(true);
            } else {
                setSubmittedData(data); // Store anyway to allow WhatsApp fallback
                setServerError(result.error || 'Something went wrong');
            }
        } catch (err) {
            setServerError('A database sync error occurred. You can still finalise your intake via Direct WhatsApp below.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="crystal-card p-16 text-center max-w-2xl mx-auto border-[#C5A059]/30"
            >
                <div className="w-24 h-24 bg-[#00f3ff]/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-[#00f3ff]/30 shadow-[0_0_30px_rgba(0,243,255,0.2)]">
                    <ShieldCheck className="w-12 h-12 text-[#00f3ff]" />
                </div>
                <h3 className="text-4xl font-bold text-white mb-6 tracking-tight">Protocol Initiated</h3>
                <p className="text-slate-400 text-xl leading-relaxed mb-8">
                    Your "Sovereign Intake" profile has been secured. A Senior Technical Architect will contact you within
                    <span className="text-white font-bold"> 24 Hours</span> to finalize your Technical Roadmap.
                </p>

                <div className="flex flex-col gap-4">
                    <button
                        onClick={() => {
                            const message = encodeURIComponent(
                                `*Sovereign Intake Protocol Request*\n\n` +
                                `*Name:* ${submittedData?.fullName}\n` +
                                `*Signal:* ${submittedData?.phone}\n` +
                                `*Project Scope:* ${submittedData?.projectScope}`
                            );
                            window.open(`https://wa.me/905302876350?text=${message}`, '_blank');
                        }}
                        className="w-full bg-[#25D366] text-white font-black py-5 rounded-xl shadow-[0_20px_40px_rgba(37,211,102,0.2)] hover:shadow-[0_20px_40px_rgba(37,211,102,0.4)] transition-all flex items-center justify-center gap-4 uppercase tracking-[0.2em] text-[10px]"
                    >
                        Verify & Send via WhatsApp
                        <Phone className="w-4 h-4" />
                    </button>

                    <div className="p-4 bg-slate-900/50 rounded-xl border border-white/5 text-[9px] text-slate-500 font-bold uppercase tracking-[0.2em]">
                        Reference: TK-INTAKE-{Math.floor(Math.random() * 900000 + 100000)}
                    </div>
                </div>
            </motion.div>
        );
    }

    return (
        <section className="py-32 relative overflow-hidden bg-slate-950" id="assessment">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#006064]/5 blur-[150px] rounded-full" />

            <div className="section-container relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center space-x-3 px-6 py-2 bg-[#C5A059]/10 rounded-full border border-[#C5A059]/20 text-[#C5A059] font-bold text-[10px] uppercase tracking-[0.3em] mb-10"
                        >
                            <ShieldCheck className="w-4 h-4" />
                            <span>Encrypted Sovereign Intake</span>
                        </motion.div>

                        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
                            Secure Your <span className="text-[#C5A059]">Digital Future</span>
                        </h2>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
                            Detailed technical analysis by Osman Kadir and our Engineering Board.
                            Professional execution starts here.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="crystal-card p-10 md:p-16 space-y-12 border-white/5 bg-slate-900/40">
                        {/* Step 1: Identity */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-3">
                                    <User className="w-4 h-4 text-[#C5A059]" /> Full Name
                                </label>
                                <input
                                    {...register('fullName')}
                                    placeholder="Your Name"
                                    className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/30 outline-none transition-all placeholder-slate-700"
                                />
                                {errors.fullName && <p className="text-red-400 text-[10px] uppercase font-bold tracking-widest mt-2">{errors.fullName.message as string}</p>}
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-3">
                                    <Phone className="w-4 h-4 text-[#C5A059]" /> WhatsApp Signal
                                </label>
                                <input
                                    {...register('phone')}
                                    placeholder="+44 7700 000000"
                                    className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/30 outline-none transition-all placeholder-slate-700"
                                />
                                {errors.phone && <p className="text-red-400 text-[10px] uppercase font-bold tracking-widest mt-2">{errors.phone.message as string}</p>}
                            </div>
                        </div>

                        {/* Step 2: Scope */}
                        <div className="space-y-3">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-3">
                                <FileText className="w-4 h-4 text-[#C5A059]" /> Project Objectives & Scope
                            </label>
                            <textarea
                                {...register('projectScope')}
                                rows={4}
                                placeholder="Describe your current infrastructure and your ultimate technical goals..."
                                className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/30 outline-none transition-all resize-none placeholder-slate-700 font-light"
                            ></textarea>
                            {errors.projectScope && <p className="text-red-400 text-[10px] uppercase font-bold tracking-widest mt-2">{errors.projectScope.message as string}</p>}
                        </div>

                        {/* WhatsApp File Submission Notice */}
                        <div className="bg-[#25D366]/10 border border-[#25D366]/20 rounded-2xl p-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#25D366]/20 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Cpu className="w-6 h-6 text-[#25D366]" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm mb-2">Technical Documents & Specs</h4>
                                    <p className="text-slate-400 text-xs leading-relaxed mb-3">
                                        Please send any architecture diagrams, specs, or existing codebases directly via WhatsApp after submitting this form. This ensures secure, immediate delivery to our engineering team.
                                    </p>
                                    <div className="flex items-center gap-2 text-[#25D366] text-[10px] font-bold uppercase tracking-widest">
                                        <Phone className="w-3 h-3" />
                                        <span>+90 530 287 63 50</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* GDPR */}
                        <div className="flex items-start gap-4 p-6 bg-slate-950/50 rounded-2xl border border-white/5">
                            <div className="relative flex items-center">
                                <input
                                    type="checkbox"
                                    {...register('gdprConsent')}
                                    className="w-5 h-5 accent-[#C5A059] cursor-pointer"
                                />
                            </div>
                            <label className="text-[11px] text-slate-500 leading-relaxed font-medium">
                                I provide explicit consent for the processing of my project data. I understand this information is strictly for the formulation of a technical proposal and is protected under NDA-compliant agency protocols. See <a href="/legal/privacy" className="text-[#00f3ff] hover:underline">Privacy Protocol</a>.
                            </label>
                        </div>
                        {errors.gdprConsent && <p className="text-red-400 text-[10px] uppercase font-bold tracking-widest mt-2">{errors.gdprConsent.message as string}</p>}

                        {serverError && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="p-8 bg-red-500/10 border border-red-500/20 rounded-2xl space-y-6"
                            >
                                <div className="flex items-center gap-4 text-red-400 text-xs font-bold uppercase tracking-widest">
                                    <AlertCircle className="w-6 h-6 flex-shrink-0" />
                                    <span>Sync Failed: Database Offline</span>
                                </div>
                                <p className="text-slate-400 text-xs leading-relaxed">
                                    Our primary server is undergoing maintenance. Please use the direct agency liaison below to submit your project data securely.
                                </p>
                                <button
                                    type="button"
                                    onClick={() => {
                                        const values = submittedData || {};
                                        const message = encodeURIComponent(
                                            `*Manual Sovereign Intake Submission*\n\n` +
                                            `*Name:* ${values.fullName || 'Not Provided'}\n` +
                                            `*Signal:* ${values.phone || 'Not Provided'}\n` +
                                            `*Scope:* ${values.projectScope || 'Not Provided'}`
                                        );
                                        window.open(`https://wa.me/905302876350?text=${message}`, '_blank');
                                    }}
                                    className="w-full bg-[#25D366] text-white font-black py-4 rounded-xl flex items-center justify-center gap-3 uppercase tracking-widest text-[9px]"
                                >
                                    Submit via WhatsApp (Secure)
                                    <Phone className="w-4 h-4" />
                                </button>
                            </motion.div>
                        )}

                        <button
                            disabled={isSubmitting}
                            type="button"
                            onClick={() => {
                                const formValues = {
                                    fullName: (document.querySelector('input[name="fullName"]') as HTMLInputElement)?.value,
                                    phone: (document.querySelector('input[name="phone"]') as HTMLInputElement)?.value,
                                    projectScope: (document.querySelector('textarea[name="projectScope"]') as HTMLTextAreaElement)?.value
                                };

                                const message = encodeURIComponent(
                                    `*Sovereign Intake Protocol Request*\n\n` +
                                    `*Name:* ${formValues.fullName || 'Not Provided'}\n` +
                                    `*Signal:* ${formValues.phone || 'Not Provided'}\n` +
                                    `*Project Scope:* ${formValues.projectScope || 'Not Provided'}\n\n` +
                                    `_I will send project specs/documents in the next message._`
                                );
                                window.open(`https://wa.me/905302876350?text=${message}`, '_blank');
                            }}
                            className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white !py-6 rounded-xl text-sm tracking-[0.2em] font-black uppercase flex items-center justify-center gap-4 relative overflow-hidden group shadow-[0_20px_40px_rgba(37,211,102,0.3)] transition-all"
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    Processing Intake...
                                </>
                            ) : (
                                <>
                                    <Phone className="w-5 h-5" />
                                    Submit via WhatsApp
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-12 flex items-center justify-center space-x-8 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700">
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5" />
                            <span className="text-[10px] font-bold uppercase tracking-widest">SSL Encrypted</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5" />
                            <span className="text-[10px] font-bold uppercase tracking-widest">GDPR Secure</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
