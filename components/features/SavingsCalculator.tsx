'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const calculatorSchema = z.object({
    treatment: z.string().min(1, 'Please select a treatment'),
    quoteAmount: z.string().min(1, 'Please enter your quote'),
    country: z.string().min(1, 'Please select your country'),
});

type CalculatorForm = z.infer<typeof calculatorSchema>;

const TREATMENTS = [
    { id: 'veneers', name: 'Dental Veneers', avgCost: 800 },
    { id: 'implants', name: 'Dental Implants', avgCost: 1200 },
    { id: 'hollywood', name: 'Hollywood Smile', avgCost: 5000 },
    { id: 'whitening', name: 'Teeth Whitening', avgCost: 400 },
    { id: 'restoration', name: 'Full Mouth Restoration', avgCost: 12000 },
];

const COUNTRY_MULTIPLIERS = [
    { code: 'us', name: 'United States', symbol: '$', multiplier: 8 },
    { code: 'uk', name: 'United Kingdom', symbol: '£', multiplier: 6 },
    { code: 'au', name: 'Australia', symbol: 'A$', multiplier: 7 },
    { code: 'ca', name: 'Canada', symbol: 'C$', multiplier: 6.5 },
    { code: 'de', name: 'Germany', symbol: '€', multiplier: 5 },
    { code: 'ch', name: 'Switzerland', symbol: 'CHF', multiplier: 10 },
];

export default function SavingsCalculator() {
    const [calculating, setCalculating] = useState(false);
    const [result, setResult] = useState<{ savings: number; percentage: number; symbol: string } | null>(null);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<CalculatorForm>({
        resolver: zodResolver(calculatorSchema),
    });

    const selectedCountry = watch('country');
    const _selectedTreatment = watch('treatment');

    const onSubmit = async (data: CalculatorForm) => {
        setCalculating(true);

        // Simulate calculation delay for effect
        await new Promise(resolve => setTimeout(resolve, 1500));

        const treatment = TREATMENTS.find(t => t.id === data.treatment);
        const country = COUNTRY_MULTIPLIERS.find(c => c.code === data.country);
        const quote = parseFloat(data.quoteAmount.replace(/[^0-9.]/g, ''));

        if (treatment && country) {
            const ourPrice = treatment.avgCost;
            const savings = quote - ourPrice;
            const percentage = (savings / quote) * 100;

            setResult({
                savings: Math.round(savings),
                percentage: Math.round(percentage),
                symbol: country.symbol,
            });
        }

        setCalculating(false);
    };

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Dotted Grid Background */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:40px_40px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-transparent" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">

                {/* Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl font-bold mb-4">
                        Calculate Your <span className="gradient-text">Savings</span>
                    </h2>
                    <p className="text-xl text-slate-400">
                        See how much you can save with Smile Turkey
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 items-start">

                    {/* Calculator Form */}
                    <motion.div
                        className="glass-card p-8"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                            {/* Treatment Selection */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-300 mb-2">
                                    Treatment Type
                                </label>
                                <select
                                    {...register('treatment')}
                                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                                >
                                    <option value="">Select a treatment</option>
                                    {TREATMENTS.map(treatment => (
                                        <option key={treatment.id} value={treatment.id}>
                                            {treatment.name}
                                        </option>
                                    ))}
                                </select>
                                {errors.treatment && (
                                    <p className="text-red-400 text-sm mt-1">{errors.treatment.message}</p>
                                )}
                            </div>

                            {/* Country Selection */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-300 mb-2">
                                    Your Country
                                </label>
                                <select
                                    {...register('country')}
                                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                                >
                                    <option value="">Select your country</option>
                                    {COUNTRY_MULTIPLIERS.map(country => (
                                        <option key={country.code} value={country.code}>
                                            {country.name}
                                        </option>
                                    ))}
                                </select>
                                {errors.country && (
                                    <p className="text-red-400 text-sm mt-1">{errors.country.message}</p>
                                )}
                            </div>

                            {/* Quote Amount */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-300 mb-2">
                                    Your Local Quote {selectedCountry && `(${COUNTRY_MULTIPLIERS.find(c => c.code === selectedCountry)?.symbol})`}
                                </label>
                                <input
                                    type="text"
                                    {...register('quoteAmount')}
                                    placeholder="e.g., 25000"
                                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                                />
                                {errors.quoteAmount && (
                                    <p className="text-red-400 text-sm mt-1">{errors.quoteAmount.message}</p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={calculating}
                                className="w-full py-4 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {calculating ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                        Calculating...
                                    </span>
                                ) : (
                                    'Calculate My Savings'
                                )}
                            </button>
                        </form>
                    </motion.div>

                    {/* Results Display */}
                    <div className="relative h-full min-h-[400px]">
                        <AnimatePresence mode="wait">
                            {!result ? (
                                // Placeholder State
                                <motion.div
                                    key="placeholder"
                                    className="glass-card p-8 h-full flex flex-col items-center justify-center text-center"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                >
                                    <div className="w-24 h-24 bg-sky-500/10 rounded-full flex items-center justify-center mb-6">
                                        <svg className="w-12 h-12 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Your Savings Await</h3>
                                    <p className="text-slate-400">
                                        Fill in the form to see how much you can save
                                    </p>
                                </motion.div>
                            ) : (
                                // Results State
                                <motion.div
                                    key="result"
                                    className="glass-card p-8 h-full flex flex-col justify-center"
                                    initial={{ opacity: 0, scale: 0.9, rotateY: 90 }}
                                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="text-center mb-8">
                                        <p className="text-slate-400 text-sm mb-2">You Save</p>
                                        <motion.h3
                                            className="text-6xl font-bold gradient-text mb-4"
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                        >
                                            {result.symbol}{result.savings.toLocaleString()}
                                        </motion.h3>
                                        <motion.p
                                            className="text-2xl text-green-400 font-semibold"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4 }}
                                        >
                                            That&apos;s {result.percentage}% off!
                                        </motion.p>
                                    </div>

                                    <div className="space-y-4 mb-8">
                                        <div className="flex justify-between items-center p-4 bg-slate-900/50 rounded-lg">
                                            <span className="text-slate-400">Treatment Quality</span>
                                            <span className="text-white font-semibold">Same or Better</span>
                                        </div>
                                        <div className="flex justify-between items-center p-4 bg-slate-900/50 rounded-lg">
                                            <span className="text-slate-400">Warranty</span>
                                            <span className="text-white font-semibold">Lifetime</span>
                                        </div>
                                        <div className="flex justify-between items-center p-4 bg-slate-900/50 rounded-lg">
                                            <span className="text-slate-400">Accommodation</span>
                                            <span className="text-white font-semibold">Included</span>
                                        </div>
                                    </div>

                                    <Link
                                        href="#chat"
                                        className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold rounded-lg text-center transition-all"
                                    >
                                        Book Your Free Consultation
                                    </Link>

                                    <button
                                        onClick={() => setResult(null)}
                                        className="mt-4 text-slate-400 hover:text-white transition-colors text-sm"
                                    >
                                        Calculate Again
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
}
