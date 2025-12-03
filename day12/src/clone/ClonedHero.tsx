export default function ClonedHero() {
  return (
    <div className="h-screen bg-linear-to-br from-blue-600 via-purple-600 to-pink-600 flex flex-col items-center justify-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm mb-8">
            <div className="w-3 h-3 bg-green-400 rounded-full"/>
            <span>🎉 New Feature Released</span>
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Build Something<br />
            <span className="bg-linear-to-r from-yellow-400 via-pink-200 to-purple-300 bg-clip-text text-transparent">
                Amazing
            </span>
        </h1>
        <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">Tailwind CSS와 React로 빠르게 아름다운 웹 애플리케이션을 만드세요.</p>
        <div className="flex sm:flex-row w-fit px-4 gap-4 justify-center mb-20">
            <button className="inline-flex justify-center items-center gap-2 group px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 hover:shadow-2xl hover:scale-105 transition-all">
                Get Started Free <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </button>
            <button className="px-8 py-4 bg-white/10 border-2 border-white/30 hover:bg-white/20 text-white font-bold rounded-lg transition-all">Watch Demo</button>
        </div>
        <div className="flex flex-row items-center justify-center gap-8 text-white/80">
            <div className="flex flex-row items-center gap-2">
                {Array.from({length: 4}).map((_, index) => (
                    <div key={index} className="w-10 h-10 rounded-full bg-linear-to-br from-blue-400 to-purple-400 border-2 border-white -ml-4"></div>
                ))}
                <h2>10,000+ developers</h2>
            </div>
            <div className="flex flex-row items-center gap">
                {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index} className="text-yellow-300 text-xl">★</span>
                ))}
                <h2>4.9/5 rating</h2>
            </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-linear-to-t from-white to-transparent">
        </div>
    </div>
  );
}