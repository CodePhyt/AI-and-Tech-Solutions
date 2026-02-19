

interface TestimonialCardProps {
    name: string;
    treatment: string;
    location: string;
    rating: number;
    review: string;
    imageUrl?: string;
    date?: string;
}

export default function TestimonialCard({
    name,
    treatment,
    location,
    rating,
    review,
    imageUrl,
    date,
}: TestimonialCardProps) {
    return (
        <div className="glass-card p-6 space-y-4 hover:glow transition-all duration-300">
            {/* Header */}
            <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                    {/* Avatar */}
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center text-2xl font-bold text-white">
                        {imageUrl ? (
                            <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
                        ) : (
                            name.charAt(0).toUpperCase()
                        )}
                    </div>

                    {/* Info */}
                    <div>
                        <h4 className="font-bold text-white text-lg">{name}</h4>
                        <p className="text-sm text-slate-400">{location}</p>
                        {date && <p className="text-xs text-slate-500">{date}</p>}
                    </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, index) => (
                        <svg
                            key={index}
                            className={`w-5 h-5 ${index < rating ? 'text-yellow-500 fill-yellow-500' : 'text-slate-600'
                                }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                            />
                        </svg>
                    ))}
                </div>
            </div>

            {/* Treatment Badge */}
            <div className="inline-flex px-3 py-1 text-xs bg-sky-500/10 border border-sky-500/20 rounded-full text-sky-400">
                {treatment}
            </div>

            {/* Review Text */}
            <p className="text-slate-300 leading-relaxed">{review}</p>

            {/* Verified Badge */}
            <div className="flex items-center text-green-400 text-sm">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                    />
                </svg>
                Verified Patient
            </div>
        </div>
    );
}
