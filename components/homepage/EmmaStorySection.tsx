'use client';

import { useState } from 'react';
import { Play, Star, Quote, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import VideoModal from '@/components/ui/VideoModal';

export default function SharidaStorySection() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <section className="relative py-24 overflow-hidden bg-[#0B1215]">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Visual Side */}
                    <div className="relative group">
                        {/* Before/After Card */}
                        <div className="relative z-10 transform transition-transform duration-500 group-hover:scale-[1.02]">
                            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />

                            <div className="relative h-[600px] rounded-2xl overflow-hidden bg-slate-900 border border-slate-800">
                                {/* Split Image Layout */}
                                <div className="absolute inset-0 flex flex-col">
                                    <div className="h-1/2 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-black/40 z-10 flex items-center justify-center">
                                            <span className="bg-black/60 px-4 py-1 rounded-full text-sm font-bold text-white/80 backdrop-blur-sm border border-white/10">BEFORE</span>
                                        </div>
                                        <img
                                            src="/assets/stories/emma-before.png" // Keeping asset but treating as Sharida for now
                                            alt="Sharida Before"
                                            className="w-full h-full object-cover"
                                            onError={(e) => { e.currentTarget.src = '/placeholder-before.jpg' }}
                                        />
                                    </div>
                                    <div className="h-1/2 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-black/20 z-10 flex items-center justify-center">
                                            <span className="bg-gradient-to-r from-purple-500 to-indigo-500 px-4 py-1 rounded-full text-sm font-bold text-white shadow-lg">AFTER</span>
                                        </div>
                                        <img
                                            src="/assets/stories/emma-after.png" // Keeping asset but treating as Sharida for now
                                            alt="Sharida After"
                                            className="w-full h-full object-cover"
                                            onError={(e) => { e.currentTarget.src = '/placeholder-after.jpg' }}
                                        />
                                    </div>
                                </div>

                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                                    <button
                                        onClick={() => setIsVideoOpen(true)}
                                        className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 text-white hover:scale-110 hover:bg-white/20 transition-all cursor-pointer pointer-events-auto shadow-2xl group-hover:shadow-purple-500/20"
                                    >
                                        <Play className="w-8 h-8 ml-1 fill-white" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Profile Badge */}
                        <div className="absolute -bottom-6 -right-6 z-20 bg-[#1A2329] p-4 rounded-xl border border-white/10 shadow-xl flex items-center gap-4 max-w-xs">

                            <div>
                                <h4 className="text-white font-bold">Sharida's Journey</h4>
                                <a
                                    href="https://www.youtube.com/@SharidaM"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1 mt-1"
                                >
                                    <span>@SharidaM</span>
                                </a>
                                <div className="flex text-yellow-500 text-xs mt-1">
                                    <Star className="w-3 h-3 fill-current" />
                                    <Star className="w-3 h-3 fill-current" />
                                    <Star className="w-3 h-3 fill-current" />
                                    <Star className="w-3 h-3 fill-current" />
                                    <Star className="w-3 h-3 fill-current" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div>
                        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-500/10 rounded-full border border-purple-500/20 text-purple-400 font-semibold text-sm mb-6">
                            <Play className="w-4 h-4 fill-current" />
                            <span>Real Patient Story</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            "I finally feel like <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Myself</span> again."
                        </h2>

                        <p className="text-xl text-slate-300 leading-relaxed pl-6 relative z-10">
                            "I have always wanted that perfect Hollywood smile, but it is VERY expensive in the United States. Dental tourism allowed us to get quality dental work at a fraction of the price!"
                        </p>
                        <div className="mt-4 pl-6 text-sm text-slate-500 space-y-1">
                            <p>* Video courtesy of Sharida M</p>
                            <p>* Filmed at Dental Centre Turkey</p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 mb-10">
                            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                                <div className="text-3xl font-bold text-white mb-1">20+</div>
                                <div className="text-sm text-slate-400">Veneers & Crowns</div>
                            </div>
                            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                                <div className="text-3xl font-bold text-white mb-1">5</div>
                                <div className="text-sm text-slate-400">Days in Antalya</div>
                            </div>
                            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                                <div className="text-3xl font-bold text-white mb-1">75%</div>
                                <div className="text-sm text-slate-400">Cost Savings</div>
                            </div>
                            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                                <div className="text-3xl font-bold text-purple-400 mb-1">Lifetime</div>
                                <div className="text-sm text-slate-400">Warranty</div>
                            </div>
                        </div>

                        <button
                            onClick={() => setIsVideoOpen(true)}
                            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-3 text-lg group w-full sm:w-auto transform hover:-translate-y-1"
                        >
                            <Play className="w-5 h-5 fill-current" />
                            Watch Sharida's Transformation
                        </button>
                    </div> {/* End of Content Side */}

                </div>
            </div>

            <VideoModal
                isOpen={isVideoOpen}
                onClose={() => setIsVideoOpen(false)}
                videoId="R-NB3J3QIiA"
            />
        </section >
    );
}
