export default function PremiumCards() {
  return (
    <div className="min-h-screen bg-gray-900 p-8 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
            {/* basic */}
            <div className="group relative bg-linear-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300">
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"  ></div>
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-2">Basic</h3>
                    <div className="text-4xl font-bold text-white mb-6">
                        FREE
                    </div>
                    <ul className="space-y-3 mb-8">
                        {["Feature 1", "Feature 2", "Feature 3"].map((feature, i) => (
                            <li key={i} className="flex items-center gap-2 text-gray-300">
                                <span className="text-green-400">✓</span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* pro(highlight) */}
            <div className="group relative bg-linear-to-br from-blue-600 to-purple-600 p-8 rounded-2xl shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 hover:scale-105 transition-all duration-300">
                {/* Popular Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-yellow-400 text-gray-900 text-sm font-bold rounded-full">POPULAR</div>
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
                    <div className="text-4xl font-bold text-white mb-6">
                        $29<span className="text-xl text-blue-200">/mo</span>
                    </div>
                </div>
                <ul className="space-y-3 mb-8">
                    {["Feature 1", "Feature 2", "Feature 3"].map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-white">
                            <span className="text-yellow-300">✓</span>
                            {feature}
                        </li>
                    ))}
                </ul>
                <button className="w-full px-6 py-3 bg-white text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-all shadow-lg">
                    Choose Plan</button>
            </div>
            {/* enterprise */}
            <div className="group relative bg-linear-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300">
                <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"  ></div>
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                    <div className="text-4xl font-bold text-white mb-6">Custom</div>
                </div>
                <ul className="space-y-3 mb-8">
                    {["Feature 1", "Feature 2", "Feature 3"].map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-300">
                            <span className="text-purple-400">✓</span>
                            {feature}
                        </li>
                    ))}
                </ul>
                <button className="w-full px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-lg transition-all">
                    Contact Sales
                </button>
            </div>
        </div>
    </div>
  )
}