import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, User, Calendar, ArrowLeft, Share2, Tag, BookOpen, Heart, MessageCircle } from 'lucide-react';
import { Metadata } from 'next';
import { blogPosts } from '@/lib/blog-data';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ShareButtons from '@/components/ui/ShareButtons';


export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
    const article = blogPosts.find((p) => p.slug === params.slug);

    if (!article) {
        notFound();
    }

    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumbs */}
                <div className="mb-6">
                    <Breadcrumbs />
                </div>

                {/* Back Button */}
                <Link
                    href="/blog"
                    className="inline-flex items-center space-x-2 text-sky-400 hover:text-sky-300 transition-colors mb-8 group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span>Back to Blog</span>
                </Link>
            </div>
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{ backgroundImage: `url(${article.image})` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950"></div>
                </div>

                <div className="section-container relative z-10">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-sky-400 hover:text-cyan-400 mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Blog
                    </Link>

                    <div className="max-w-4xl">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="px-4 py-2 bg-sky-500/20 border border-sky-500/30 rounded-full text-sky-400 text-sm font-semibold">
                                {article.category}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            {article.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-slate-400">
                            <div className="flex items-center gap-2">
                                <User className="w-5 h-5" />
                                <span>{article.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-5 h-5" />
                                <span>{article.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5" />
                                <span>{article.readTime}</span>
                            </div>
                            <ShareButtons
                                url={typeof window !== 'undefined' ? window.location.href : ''}
                                title={article.title}
                                description={article.excerpt}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <section className="section-container">
                <div className="max-w-4xl mx-auto">
                    <div className="crystal-card p-8 md:p-12">
                        <div className="prose prose-invert prose-lg max-w-none">
                            <div
                                className="article-content text-slate-300 leading-relaxed space-y-6"
                                dangerouslySetInnerHTML={{
                                    __html: article.content
                                        .split('\n')
                                        .map((line: string) => {
                                            const trimmed = line.trim();
                                            const formatInline = (text: string) =>
                                                text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>');

                                            if (line.startsWith('## ')) {
                                                return '<h2 class="text-3xl font-bold text-white mt-12 mb-6">' + formatInline(line.slice(3)) + '</h2>';
                                            }
                                            if (line.startsWith('### ')) {
                                                return '<h3 class="text-2xl font-semibold text-white mt-8 mb-4">' + formatInline(line.slice(4)) + '</h3>';
                                            }
                                            if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
                                                return '<li class="ml-6 list-disc marker:text-sky-400 pl-2 mb-2">' + formatInline(trimmed.slice(2)) + '</li>';
                                            }
                                            if (/^\d+\.\s/.test(trimmed)) {
                                                return '<li class="ml-6 list-decimal marker:text-sky-400 pl-2 mb-2">' + formatInline(trimmed.replace(/^\d+\.\s/, '')) + '</li>';
                                            }
                                            if (trimmed) {
                                                return '<p class="mb-4">' + formatInline(line) + '</p>';
                                            }
                                            return '';
                                        })
                                        .join('')
                                }}
                            />
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="crystal-card p-8 mt-12 text-center bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/20">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Ready to Transform Your Smile?
                        </h3>
                        <p className="text-slate-300 mb-6">
                            Get a free virtual consultation and personalized treatment plan
                        </p>
                        <Link href="/assessment" className="btn-primary inline-block">
                            Get Free Assessment
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
