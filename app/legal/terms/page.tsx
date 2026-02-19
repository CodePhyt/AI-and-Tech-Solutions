export default function TermsPage() {
    return (
        <div className="min-h-screen pt-20 bg-slate-950">
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h1 className="text-5xl font-bold text-white mb-8 border-b border-[#ffd700]/30 pb-4">Terms of Engagement</h1>
                <div className="prose prose-invert max-w-none text-slate-300">
                    <p className="text-sm uppercase tracking-widest mb-8 text-[#ffd700]">Effective Date: {new Date().toLocaleDateString()}</p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">1. Protocol Acceptance</h2>
                    <p>By engaging with Osman Kadir KI & Tech Solutions (&quot;The Firm&quot;), you agree to be bound by these Terms of Engagement. All services are rendered under strict confidentiality and professional standards.</p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">2. Scope of Services</h2>
                    <p>The Firm provides technical consultancy, software architecture, and digital transformation services. We are not a medical facility, legal firm (outside of tech-legal advisory), or financial institution.</p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">3. Confidentiality & NDA</h2>
                    <p>We operate under a default Non-Disclosure Agreement (NDA) for all client interactions. Your proprietary data, trade secrets, and infrastructure details are treated with the highest classification of security.</p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">4. Intellectual Property</h2>
                    <p>Unless otherwise stipulated in a Master Services Agreement (MSA), all code, architectures, and systems developed by The Firm remain our intellectual property until full settlement of invoices, at which point rights are transferred to the Client.</p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">5. Limitation of Liability</h2>
                    <p>The Firm is not liable for indirect, incidental, or consequential damages arising from the use of our software or services. Our liability is limited to the professional fees paid for the specific engagement.</p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">6. Governing Law</h2>
                    <p>These terms are governed by the laws of Germany. Any disputes shall be resolved in the courts of jurisdiction for Neuhaus am Rennweg.</p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">7. Contact & Signal</h2>
                    <p>For legal inquiries, contact legal@osmankadir.tech</p>
                </div>
            </section>
        </div>
    );
}
