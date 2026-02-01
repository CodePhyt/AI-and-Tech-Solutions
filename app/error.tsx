'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Home, RefreshCcw } from 'lucide-react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log error to console in development
        console.error('Application error:', error);
    }, [error]);

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
            <div className="max-w-2xl w-full text-center">
                <div className="crystal-card p-12">
                    {/* Error Icon */}
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-red-500/20 to-pink-500/20 flex items-center justify-center">
                        <span className="text-5xl">⚠️</span>
                    </div>

                    {/* Error Message */}
                    <h1 className="text-4xl font-bold text-white mb-4">
                        Bir Şeyler Ters Gitti
                    </h1>
                    <p className="text-xl text-slate-300 mb-2">
                        Something Went Wrong
                    </p>
                    <p className="text-slate-400 mb-8">
                        Üzgünüz, beklenmeyen bir hata oluştu. Lütfen tekrar deneyin veya ana sayfaya dönün.
                        <br />
                        <span className="text-sm">
                            We're sorry, an unexpected error occurred. Please try again or return home.
                        </span>
                    </p>

                    {/* Error Details (Development Only) */}
                    {process.env.NODE_ENV === 'development' && error.message && (
                        <div className="mb-8 p-4 bg-slate-900/50 rounded-lg border border-red-500/20">
                            <p className="text-sm text-red-400 font-mono break-all">
                                {error.message}
                            </p>
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={reset}
                            className="btn-primary flex items-center justify-center space-x-2"
                        >
                            <RefreshCcw className="w-5 h-5" />
                            <span>Try Again / Tekrar Dene</span>
                        </button>

                        <Link
                            href="/"
                            className="btn-secondary flex items-center justify-center space-x-2"
                        >
                            <Home className="w-5 h-5" />
                            <span>Go Home / Ana Sayfa</span>
                        </Link>
                    </div>

                    {/* Support Info */}
                    <div className="mt-8 pt-8 border-t border-white/10">
                        <p className="text-slate-400 text-sm mb-2">
                            Bu sorun devam ederse bizimle iletişime geçin:
                            <br />
                            If this problem persists, please contact us:
                        </p>
                        <a
                            href="mailto:nnesipoglu@outlook.com"
                            className="text-sky-400 hover:text-sky-300 transition-colors"
                        >
                            nnesipoglu@outlook.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
