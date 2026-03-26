export default function CookiePolicyPage() {
    return (
        <div className="min-h-screen pt-20">
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h1 className="text-5xl font-bold text-white mb-8">Cookie Policy</h1>
                <div className="prose prose-invert max-w-none">
                    <div className="text-slate-400 leading-relaxed space-y-6">
                        <p className="text-lg">Last updated: {new Date().toLocaleDateString()}</p>

                        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. What Are Cookies</h2>
                        <p>Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience.</p>

                        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. How We Use Cookies</h2>
                        <p>We use cookies to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Remember your preferences and settings</li>
                            <li>Understand how you use our website</li>
                            <li>Improve website performance</li>
                            <li>Provide essential website functionality</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Types of Cookies</h2>
                        <p><strong>Essential Cookies:</strong> Required for the website to function properly.</p>
                        <p><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website.</p>
                        <p><strong>Functionality Cookies:</strong> Remember your choices and provide enhanced features.</p>

                        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Managing Cookies</h2>
                        <p>You can control cookies through your browser settings. Note that disabling cookies may affect the functionality of our website.</p>

                        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Contact</h2>
                        <p>Questions about our cookie policy? Email nnesipoglu@outlook.com</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
