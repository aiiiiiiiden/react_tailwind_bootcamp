export default function LandingPage() {
    return (
        <div className="min-h-screen">

            {/* Sticky Navigation */}
            <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        MyApp
                        </div>
                        <div className="hidden md:flex gap-8">
                            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
                            <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
                            <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
                        </div>
                        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        Sign Up
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
                <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
                    Build Amazing Products<br />
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Faster Than Ever
                    </span>
                </h1>
                <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Tailwind CSS를 활용해 빠르고 아름다운 웹 애플리케이션을 만드세요.
                </p>
                <div className="flex gap-4 justify-center">
                    <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 shadow-lg shadow-blue-500/50 transition-all">
                    Get Started Free
                    </button>
                    <button className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-lg hover:bg-gray-50 border border-gray-200">
                    Watch Demo
                    </button>
                </div>
                </div>
            </section>

            {/* Features */}
            <section id="features" className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Powerful Features
                    </h2>
                    <p className="text-xl text-gray-600">
                    Everything you need to build modern web apps
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                    { icon: '⚡', title: 'Lightning Fast', desc: 'Optimized for performance' },
                    { icon: '🎨', title: 'Beautiful Design', desc: 'Stunning UI components' },
                    { icon: '📱', title: 'Responsive', desc: 'Works on all devices' },
                    { icon: '🔒', title: 'Secure', desc: 'Enterprise-grade security' },
                    { icon: '🚀', title: 'Easy Deploy', desc: 'Deploy in minutes' },
                    { icon: '💪', title: 'Powerful API', desc: 'Comprehensive API' },
                    ].map((feature, i) => (
                    <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                        <div className="text-5xl mb-4">{feature.icon}</div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                        {feature.title}
                        </h3>
                        <p className="text-gray-600">
                        {feature.desc}
                        </p>
                    </div>
                    ))}
                </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-blue-600">
                <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-white mb-6">
                    Ready to Get Started?
                </h2>
                <p className="text-xl text-blue-100 mb-10">
                    Join thousands of developers building amazing products
                </p>
                <button className="px-10 py-5 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 shadow-xl text-lg">
                    Start Free Trial
                </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12 px-4">
                <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                    <div className="text-2xl font-bold mb-4">MyApp</div>
                    <p className="text-gray-400">
                        Building the future of web development.
                    </p>
                    </div>
                    <div>
                    <h3 className="font-semibold mb-4">Product</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-white">Features</a></li>
                        <li><a href="#" className="hover:text-white">Pricing</a></li>
                        <li><a href="#" className="hover:text-white">Updates</a></li>
                    </ul>
                    </div>
                    <div>
                    <h3 className="font-semibold mb-4">Company</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-white">About</a></li>
                        <li><a href="#" className="hover:text-white">Blog</a></li>
                        <li><a href="#" className="hover:text-white">Careers</a></li>
                    </ul>
                    </div>
                    <div>
                    <h3 className="font-semibold mb-4">Legal</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-white">Privacy</a></li>
                        <li><a href="#" className="hover:text-white">Terms</a></li>
                        <li><a href="#" className="hover:text-white">Contact</a></li>
                    </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                    <p>© 2025 MyApp. All rights reserved.</p>
                </div>
                </div>
            </footer>
        </div>
    );
}