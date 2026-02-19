'use client';

import { Share2, Link as LinkIcon, Check } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ShareButtonsProps {
    url: string;
    title: string;
    description?: string;
}

export default function ShareButtons({ url, title, description = '' }: ShareButtonsProps) {
    const [copied, setCopied] = useState(false);
    const [showShare, setShowShare] = useState(false);

    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);
    const _encodedDesc = encodeURIComponent(description);

    const shareLinks = {
        whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    };

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    // Check if native share is available (mostly mobile)
    const nativeShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title,
                    text: description,
                    url,
                });
            } catch (err) {
                console.error('Share failed:', err);
            }
        } else {
            setShowShare(!showShare);
        }
    };

    return (
        <div className="relative">
            {/* Main Share Button */}
            <button
                onClick={nativeShare}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
                <Share2 className="w-4 h-4" />
                <span className="text-sm">Share</span>
            </button>

            {/* Share Options Dropdown */}
            <AnimatePresence>
                {showShare && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        className="absolute top-full mt-2 right-0 crystal-card p-3 w-48 z-50"
                    >
                        <div className="space-y-2">
                            {/* WhatsApp */}
                            <a
                                href={shareLinks.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors group"
                            >
                                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                                    <span className="text-lg">💬</span>
                                </div>
                                <span className="text-sm text-slate-300">WhatsApp</span>
                            </a>

                            {/* LinkedIn */}
                            <a
                                href={shareLinks.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors group"
                            >
                                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                                    <span className="text-lg">💼</span>
                                </div>
                                <span className="text-sm text-slate-300">LinkedIn</span>
                            </a>

                            {/* Copy Link */}
                            <button
                                onClick={copyToClipboard}
                                className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors group w-full"
                            >
                                <div className="w-8 h-8 rounded-full bg-slate-500/20 flex items-center justify-center group-hover:bg-slate-500/30 transition-colors">
                                    {copied ? (
                                        <Check className="w-4 h-4 text-green-400" />
                                    ) : (
                                        <LinkIcon className="w-4 h-4 text-slate-400" />
                                    )}
                                </div>
                                <span className="text-sm text-slate-300">
                                    {copied ? 'Copied!' : 'Copy Link'}
                                </span>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
