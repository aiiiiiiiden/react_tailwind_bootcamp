export default function HeroSection() {
    return (
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600">
            {/* content */}
            <div className="relative z-10 text-center text-white px-4 max-w-4xl">
                <h1 className="text-6xl font-bold mb-6">
                    Beautiful Landing Page
                </h1>
                <p className="text-xl mb-8">
                    Create stunning designs with Tailwind CSS
                </p>
                <div className="flex gap-4 justify-center">
                    <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                        Get Started
                    </button>
                    <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                        Learn More
                    </button>
                </div>
            </div>
            {/* scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
                    <div className="w-1 h-2 bg-white rounded-full"></div>
                </div>
            </div>
        </section>
    );
}