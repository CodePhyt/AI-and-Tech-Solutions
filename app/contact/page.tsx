'use client';

import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
    const [showChat, setShowChat] = useState(false);

    const handleGetFreeAnalysis = (e: React.MouseEvent) => {
        e.preventDefault();
        setShowChat(true);
        // Trigger the chatbot to open
        const chatButton = document.querySelector('[aria-label="Open chat"]') as HTMLButtonElement;
        if (chatButton) {
            chatButton.click();
        } else {
            // Fallback if button not found immediately (e.g. relying on hash)
            window.location.hash = '#chat';
        }
    };

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        alert('Message sent successfully! We will get back to you shortly.');
        (e.target as HTMLFormElement).reset();
    };

    return (
        <div className="min-h-screen pt-20">
            <section className="section-container">
                <h1 className="text-5xl font-bold text-white mb-12 text-center">
                    Get In <span className="gradient-text">Touch</span>
                </h1>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="crystal-card p-8">
                        <h2 className="text-2xl font-semibold text-white mb-6">Send Us a Message</h2>
                        <form className="space-y-6" onSubmit={handleSendMessage}>
                            <div>
                                <label className="block text-slate-300 mb-2">Name *</label>
                                <input type="text" required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-sky-500" />
                            </div>
                            <div>
                                <label className="block text-slate-300 mb-2">Email *</label>
                                <input type="email" required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-sky-500" />
                            </div>
                            <div>
                                <label className="block text-slate-300 mb-2">WhatsApp Number</label>
                                <input type="tel" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-sky-500" />
                            </div>
                            <div>
                                <label className="block text-slate-300 mb-2">Message *</label>
                                <textarea rows={5} required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-sky-500"></textarea>
                            </div>
                            <button type="submit" className="btn-primary w-full">Send Message</button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        {/* Get Free Analysis CTA */}
                        <div className="crystal-card p-8 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/30">
                            <div className="flex items-start space-x-4 mb-6">
                                <MessageCircle className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="text-2xl font-semibold text-white mb-2">Get Free Analysis</h3>
                                    <p className="text-slate-300 mb-4">
                                        Chat with our AI assistant to get instant answers and personalized treatment recommendations.
                                    </p>
                                    <button
                                        onClick={handleGetFreeAnalysis}
                                        className="btn-primary flex items-center gap-2 shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50"
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                        Start Free Analysis
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="glass-card p-8">
                            <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-4">
                                    <MapPin className="w-6 h-6 text-sky-500 flex-shrink-0 mt-1" />
                                    <div>
                                        <div className="text-white font-semibold">Location</div>
                                        <div className="text-slate-400">Antalya, Turkey</div>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <Phone className="w-6 h-6 text-sky-500 flex-shrink-0 mt-1" />
                                    <div>
                                        <div className="text-white font-semibold">Phone</div>
                                        <a href="tel:+905302876350" className="text-slate-400 hover:text-sky-400">+90 530 287 63 50</a>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <Mail className="w-6 h-6 text-sky-500 flex-shrink-0 mt-1" />
                                    <div>
                                        <div className="text-white font-semibold">Email</div>
                                        <a href="mailto:nnesipoglu@outlook.com" className="text-slate-400 hover:text-sky-400">nnesipoglu@outlook.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="crystal-card p-4">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202456.79313573768!2d30.635130749999997!3d36.88459505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c39aaeddadadc1%3A0x95c69f73f9e32e33!2sAntalya%2C%20Turkey!5e0!3m2!1sen!2s!4v1234567890"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                className="rounded-lg"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
