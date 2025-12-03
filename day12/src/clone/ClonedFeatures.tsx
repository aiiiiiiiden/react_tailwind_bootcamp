export default function ClonedFeatures() {
    const features = [
        {
            icon: '⚡',
            title: 'Lightning Fast',
            description: 'Optimized build process and minimal bundle size for blazing fast performance.',
        },
        {
            icon: '🎨',
            title: 'Beautiful Design',
            description: 'Pre-built components with modern design patterns and best practices.',
        },
        {
            icon: '📱',
            title: 'Fully Responsive',
            description: 'Works perfectly on all devices from mobile to desktop and everything in between.',
        },
        {
            icon: '🔒',
            title: 'Secure by Default',
            description: 'Built with security in mind. Enterprise-grade protection out of the box.',
        },
        {
            icon: '🚀',
            title: 'Easy to Deploy',
            description: 'Deploy to production in minutes with our streamlined deployment process.',
        },
        {
            icon: '💪',
            title: 'Developer Experience',
            description: 'Excellent DX with TypeScript support, hot reload, and comprehensive docs.',
        }
    ];
    
    return (
        <section className="py-20 px-4 bg-white">
            <h1 className="text-4xl font-bold text-center mb-12">Everything You Need</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">All the tools and features you need to build amazing products, included by default.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                {features.map((feature) => (
                    <div className="group bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300" key={feature.title}>
                        <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                            {feature.icon}
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:bg-clip-text group-hover:from-yellow-400 group-hover:via-pink-200 group-hover:to-purple-300 transition-transform duration-300">{feature.title}</h2>
                        <p className="text-gray-600 group-hover:text-gray-700 transition-colors leading-relaxed">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}