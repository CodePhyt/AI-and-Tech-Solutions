import Image from 'next/image';
import { IMAGE_CATEGORIES } from '@/lib/image-sources';

export default function StoriesPage() {
    const stories = [
        {
            name: 'Sarah M.',
            age: 34,
            from: 'London, UK',
            treatment: 'Hollywood Smile (18 Veneers)',
            duration: '7 days',
            rating: 5,
            image: IMAGE_CATEGORIES.PATIENT_PORTRAITS.sarah_uk,
            quote: 'I came to Antalya with severe dental anxiety and left with the most beautiful smile I could have imagined. The team was so patient and gentle.',
            story: 'After years of hiding my smile due to discolored and misaligned teeth, I finally took the leap. The digital smile design showed me exactly what to expect, and the results exceeded it. I spent a week in Antalya, staying at a beautiful hotel near the clinic. The whole experience felt like a luxury vacation where I just happened to get my dream smile. Six months later, I still catch myself smiling in every reflection.',
            before: IMAGE_CATEGORIES.TRANSFORMATIONS.veneers_hollywood_female.before,
            after: IMAGE_CATEGORIES.TRANSFORMATIONS.veneers_hollywood_female.after
        },
        {
            name: 'Michael R.',
            age: 52,
            from: 'New York, USA',
            treatment: 'Full Mouth Restoration (All-on-6)',
            duration: '14 days',
            rating: 5,
            image: IMAGE_CATEGORIES.PATIENT_PORTRAITS.michael_usa,
            quote: 'I got my life back. Being able to eat, speak, and smile confidently again is priceless. The investment was worth every penny.',
            story: 'Decades of dental problems left me with severe bone loss and missing teeth. I was quoted $65,000 in the US for full mouth implants. I found Smile Turkey and couldn\'t believe the difference in cost for the same materials - Straumann implants and German ceramics. I stayed for two weeks, got temporary teeth on day three, and returned three months later for the final teeth. The coordination was flawless. My family says I look 15 years younger.',
            before: IMAGE_CATEGORIES.TRANSFORMATIONS.full_arch_restoration_male.before,
            after: IMAGE_CATEGORIES.TRANSFORMATIONS.full_arch_restoration_male.after
        },
        {
            name: 'Emma K.',
            age: 28,
            from: 'Melbourne, Australia',
            treatment: 'Dental Veneers (10 teeth)',
            duration: '5 days',
            rating: 5,
            image: IMAGE_CATEGORIES.PATIENT_PORTRAITS.emma_australia,
            quote: 'The attention to detail was incredible. They matched the veneers to my natural teeth perfectly. Nobody can tell they\'re not real.',
            story: 'As a wedding photographer, I\'m always behind the camera, never in front of it. But my own engagement photos were coming up and I was self-conscious about my chipped front teeth and gaps. I discovered Smile Turkey through a friend\'s recommendation. The process was so easy - they handled everything from airport pickup to hotel booking. My new veneers look so natural that even my close friends thought I just had professional whitening. The best part? I saved enough compared to Australian prices to also upgrade my camera gear!',
            before: IMAGE_CATEGORIES.TRANSFORMATIONS.veneer_repair_female.before,
            after: IMAGE_CATEGORIES.TRANSFORMATIONS.veneer_repair_female.after
        },
        {
            name: 'Ahmed S.',
            age: 45,
            from: 'Dubai, UAE',
            treatment: 'Dental Implants (4 teeth) + Whitening',
            duration: '10 days',
            rating: 5,
            image: IMAGE_CATEGORIES.PATIENT_PORTRAITS.ahmed_uae,
            quote: 'Professional beyond expectations. The clinic was spotless, the technology was cutting-edge, and the results speak for themselves.',
            story: 'I work in hospitality where appearance matters. After losing teeth in an accident years ago, I lived with a partial denture that was uncomfortable and embarrassing. I chose Smile Turkey after extensive research - they use the same Nobel Biocare implants my Dubai dentist quoted but at a fraction of the cost. The CT scan and surgical guide made the procedure precise and minimally invasive. I had temporary crowns the same day. The healing was smooth, and I combined the follow-up visit with a beach vacation in Antalya. Best decision I\'ve made for myself.',
            before: IMAGE_CATEGORIES.TRANSFORMATIONS.implant_crowns_male.before,
            after: IMAGE_CATEGORIES.TRANSFORMATIONS.implant_crowns_male.after
        },
        {
            name: 'Lisa T.',
            age: 39,
            from: 'Toronto, Canada',
            treatment: 'Hollywood Smile (16 Veneers)',
            duration: '8 days',
            rating: 5,
            image: IMAGE_CATEGORIES.PATIENT_PORTRAITS.lisa_canada,
            quote: 'The digital preview was so accurate. I approved my smile design, and that\'s exactly what I got. The confidence boost is incredible.',
            story: 'I\'m a corporate lawyer, and first impressions are everything in my field. Years of coffee and red wine had taken a toll on my teeth, and simple whitening wasn\'t enough anymore. I wanted a complete transformation but the $45,000 quote in Toronto was out of reach. Smile Turkey offered the exact same result - E-max veneers in the shade I wanted - for $5,500 including hotel and transfers. I took a "working vacation," had video calls from my beach hotel, and returned with a smile that makes me feel like a million bucks. My colleagues think I just came back refreshed from vacation. Little do they know!',
            before: IMAGE_CATEGORIES.TRANSFORMATIONS.veneers_whitening_female.before,
            after: IMAGE_CATEGORIES.TRANSFORMATIONS.veneers_whitening_female.after
        },
        {
            name: 'Carlos M.',
            age: 61,
            from: 'Madrid, Spain',
            treatment: 'Implants + Crowns (Full upper arch)',
            duration: '12 days',
            rating: 5,
            image: IMAGE_CATEGORIES.PATIENT_PORTRAITS.carlos_spain,
            quote: 'More than 30 years of dental shame ended in just two weeks. I can finally smile at my grandchildren without embarrassment.',
            story: 'I had avoided dentists for decades due to a traumatic experience as a child. By the time I found Smile Turkey, my upper teeth were in terrible condition. The team was incredibly understanding of my anxiety. They explained every step, gave me sedation options, and never rushed me. The All-on-6 solution gave me a full arch of new teeth in two weeks. I stayed for the initial surgery, healed at a beautiful resort (they arranged everything), and came back for finals. My wife cried when she saw the results. So did I. Now I smile non-stop and my grandkids say Abuelo looks happy again.',
            before: IMAGE_CATEGORIES.TRANSFORMATIONS.full_upper_arch_senior.before,
            after: IMAGE_CATEGORIES.TRANSFORMATIONS.full_upper_arch_senior.after
        }
    ];

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="section-container">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-5xl font-bold text-white mb-6">
                        Real Patients, Real <span className="gradient-text">Transformations</span>
                    </h1>
                    <p className="text-xl text-slate-400">
                        Over 10,000 patients from 60+ countries have trusted us with their smiles. Here are just a few of their stories.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    <div className="crystal-card p-6 text-center">
                        <p className="text-4xl font-bold gradient-text mb-2">10,000+</p>
                        <p className="text-slate-400">Happy Patients</p>
                    </div>
                    <div className="crystal-card p-6 text-center">
                        <p className="text-4xl font-bold gradient-text mb-2">60+</p>
                        <p className="text-slate-400">Countries</p>
                    </div>
                    <div className="crystal-card p-6 text-center">
                        <p className="text-4xl font-bold gradient-text mb-2">4.9/5</p>
                        <p className="text-slate-400">Average Rating</p>
                    </div>
                    <div className="crystal-card p-6 text-center">
                        <p className="text-4xl font-bold gradient-text mb-2">98%</p>
                        <p className="text-slate-400">Success Rate</p>
                    </div>
                </div>

                {/* Stories Grid */}
                <div className="space-y-16">
                    {stories.map((story, index) => (
                        <div
                            key={index}
                            className={`crystal-card hover:glow transition-all duration-300 overflow-hidden ${index % 2 === 0 ? '' : 'md:flex-row-reverse'
                                }`}
                        >
                            <div className="grid md:grid-cols-2 gap-8 p-8">
                                {/* Left: Patient Info & Story */}
                                <div className="space-y-6">
                                    {/* Patient Header */}
                                    <div className="flex items-start space-x-4">
                                        <div
                                            className="w-20 h-20 rounded-full bg-cover bg-center border-4 border-sky-500"
                                            style={{ backgroundImage: `url(${story.image})` }}
                                        ></div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-white">{story.name}, {story.age}</h3>
                                            <p className="text-slate-400">{story.from}</p>
                                            <div className="flex items-center mt-2">
                                                {[...Array(story.rating)].map((_, i) => (
                                                    <svg
                                                        key={i}
                                                        className="w-5 h-5 text-yellow-500 fill-yellow-500"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Treatment Info */}
                                    <div className="flex gap-4">
                                        <div className="px-4 py-2 bg-sky-500/10 border border-sky-500/20 rounded-full text-sky-400 text-sm">
                                            {story.treatment}
                                        </div>
                                        <div className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm">
                                            {story.duration}
                                        </div>
                                    </div>

                                    {/* Quote */}
                                    <blockquote className="border-l-4 border-sky-500 pl-4 italic text-lg text-slate-300">
                                        "{story.quote}"
                                    </blockquote>

                                    {/* Full Story */}
                                    <p className="text-slate-400 leading-relaxed">
                                        {story.story}
                                    </p>

                                    {/* Verified Badge */}
                                    <div className="flex items-center text-green-400">
                                        <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className="font-semibold">Verified Patient • Treated in 2023-2024</span>
                                    </div>
                                </div>

                                {/* Right: Before/After Images */}
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <p className="text-sm text-slate-500 uppercase tracking-wide">Before</p>
                                        <div
                                            className="w-full h-64 rounded-xl bg-cover bg-center"
                                            style={{ backgroundImage: `url(${story.before})` }}
                                        ></div>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-sm text-sky-400 uppercase tracking-wide flex items-center">
                                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            After
                                        </p>
                                        <div
                                            className="w-full h-64 rounded-xl bg-cover bg-center border-2 border-sky-500 glow"
                                            style={{ backgroundImage: `url(${story.after})` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-16 text-center crystal-card p-12 rounded-3xl">
                    <h2 className="text-3xl font-bold text-white mb-4">Ready for Your Own Transformation?</h2>
                    <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                        Join thousands of satisfied patients who chose Smile Turkey for their dental journey. Free consultation, no obligation.
                    </p>
                    <a href="#chat" className="btn-primary inline-block">
                        Get Your Free Consultation
                    </a>
                </div>
            </section>
        </div>
    );
}
