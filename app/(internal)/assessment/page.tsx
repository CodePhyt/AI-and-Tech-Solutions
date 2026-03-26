import AssessmentFlow from '@/components/features/assessment/AssessmentFlow';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function AssessmentPage() {
    return (
        <main className="min-h-screen bg-[#0f0f0f] relative overflow-hidden">
            <Header />
            {/* Background Effects */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f] via-[#050505]/50 to-[#0f0f0f]" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00f3ff]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#006064]/10 rounded-full blur-3xl" />

            <div className="relative z-10 pt-20 pb-20">
                <div className="container mx-auto px-4 text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        Project <span className="text-[#00f3ff]">Inquiry Protocol</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Initiate your sovereign tech journey. Define your parameters, seeking our architectural expertise.
                    </p>
                </div>
                <AssessmentFlow />
            </div>
            <Footer />
        </main>
    );
}
