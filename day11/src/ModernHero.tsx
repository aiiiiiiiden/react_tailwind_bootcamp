export default function ModernHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-blue-600 via-purple-600 to-pink-600">
        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm mb-8">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                New Feature Released
            </div>

            {/* Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
                Build Something Amazing
                <br />
                <span className="bg-linear-to-r from-yellow-400 via-pink-200 to-purple-300 bg-clip-text text-transparent">
                    with Tailwind CSS
                </span>
            </h1>

            {/* Description */}
            <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                Tailwind CSS와 React로 빠르게 아름다운 웹 애플리케이션을 만드세요.
                코드 작성 시간을 절반으로 줄입니다.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group relative px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-br from-blue-500 to-purple-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    <span className="relative z-10 transition-opacity text-gray-900 group-hover:text-white">Get Started</span>
                </button>
                <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-semibold rounded-lg transition-all">
                    Learn More
                </button>
            </div>

            {/* Stats */}
            <div className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
                {[
                    { number: '10K+', label: '사용자' },
                    { number: '99%', label: '만족도' },
                    { number: '24/7', label: '지원' },
                ].map((stat, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
                        <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                        <div className="text-sm text-white/60">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}