export default function Loading() {
    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center">
            <div className="text-center">
                {/* Animated Logo/Spinner */}
                <div className="relative w-24 h-24 mx-auto mb-8">
                    {/* Outer ring */}
                    <div className="absolute inset-0 rounded-full border-4 border-sky-500/20"></div>

                    {/* Spinning gradient ring */}
                    <div className="absolute inset-0 rounded-full border-4 border-t-sky-500 border-r-cyan-500 border-b-transparent border-l-transparent animate-spin"></div>

                    {/* Inner pulsing dot */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-500 to-cyan-500 animate-pulse"></div>
                    </div>
                </div>

                {/* Loading Text */}
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold text-white animate-pulse">
                        Yükleniyor...
                    </h2>
                    <p className="text-slate-400 text-sm">Loading...</p>
                </div>

                {/* Loading Bar */}
                <div className="mt-8 w-64 mx-auto">
                    <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-sky-500 to-cyan-500 animate-[shimmer_1.5s_ease-in-out_infinite]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
