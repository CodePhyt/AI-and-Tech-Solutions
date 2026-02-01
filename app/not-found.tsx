'use client';

import Link from 'next/link';
import { Home, Search, ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
            <div className="max-w-2xl w-full text-center">
                <div className="crystal-card p-12">
                    {/* 404 Icon */}
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-sky-500/20 to-cyan-500/20 flex items-center justify-center">
                        <span className="text-6xl font-bold gradient-text">404</span>
                    </div>

                    {/* Error Message */}
                    <h1 className="text-4xl font-bold text-white mb-4">
                        Sayfa Bulunamadı
                    </h1>
                    <p className="text-xl text-slate-300 mb-2">
                        Page Not Found
                    </p>
                    <p className="text-slate-400 mb-8 max-w-md mx-auto">
                        Aradığınız sayfa mevcut değil veya taşınmış olabilir.
                        <br />
                        <span className="text-sm">
                            The page you're looking for doesn't exist or may have been moved.
                        </span>
                    </p>

                    {/* Quick Links */}
                    <div className="mb-8">
                        <p className="text-slate-400 mb-4 text-sm">
                            Belki bunlar aradığınız yerlerdendir:
                            <br />
                            Perhaps you're looking for one of these:
                        </p>
                        <div className="flex flex-wrap gap-2 justify-center">
                            <Link href="/treatments" className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm text-slate-300 transition-colors">
                                Tedaviler / Treatments
                            </Link>
                            <Link href="/stories" className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm text-slate-300 transition-colors">
                                Hikayeler / Stories
                            </Link>
                            <Link href="/blog" className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm text-slate-300 transition-colors">
                                Blog
                            </Link>
                            <Link href="/contact" className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm text-slate-300 transition-colors">
                                İletişim / Contact
                            </Link>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/"
                            className="btn-primary flex items-center justify-center space-x-2"
                        >
                            <Home className="w-5 h-5" />
                            <span>Go Home / Ana Sayfa</span>
                        </Link>

                        <button
                            onClick={() => window.history.back()}
                            className="btn-secondary flex items-center justify-center space-x-2"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            <span>Go Back / Geri Dön</span>
                        </button>
                    </div>

                    {/* Search Suggestion */}
                    <div className="mt-8 pt-8 border-t border-white/10">
                        <div className="flex items-center justify-center space-x-2 text-slate-400">
                            <Search className="w-5 h-5" />
                            <p className="text-sm">
                                Ya da bizimle iletişime geçin / Or contact us for help
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
