'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export interface FAQItem {
    question: string;
    answer: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="space-y-4 w-full">
            {items.map((item, index) => (
                <div key={index} className="border border-white/10 rounded-2xl bg-corporate-navy overflow-hidden shadow-lg shadow-black/20">
                    <button 
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                    >
                        <span className="text-lg font-bold text-white pr-8">{item.question}</span>
                        <motion.div 
                            animate={{ rotate: openIndex === index ? 180 : 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="flex-shrink-0"
                        >
                            <ChevronDown className="w-6 h-6 text-corporate-blue" />
                        </motion.div>
                    </button>
                    <AnimatePresence initial={false}>
                        {openIndex === index && (
                            <motion.div 
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                            >
                                <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-white/5 mt-2">
                                    {item.answer}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
}
