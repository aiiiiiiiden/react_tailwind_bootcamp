export default function Features() {
  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Optimized build process and minimal bundle size for blazing fast performance.',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: '🎨',
      title: 'Beautiful Design',
      description: 'Pre-built components with modern design patterns and best practices.',
      gradient: 'from-pink-400 to-purple-500'
    },
    {
      icon: '📱',
      title: 'Fully Responsive',
      description: 'Works perfectly on all devices from mobile to desktop and everything in between.',
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      icon: '🔒',
      title: 'Secure by Default',
      description: 'Built with security in mind. Enterprise-grade protection out of the box.',
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      icon: '🚀',
      title: 'Easy to Deploy',
      description: 'Deploy to production in minutes with our streamlined deployment process.',
      gradient: 'from-indigo-400 to-purple-500'
    },
    {
      icon: '💪',
      title: 'Developer Experience',
      description: 'Excellent DX with TypeScript support, hot reload, and comprehensive docs.',
      gradient: 'from-red-400 to-pink-500'
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            All the tools and features you need to build amazing products, included by default.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300"
            >

              {/* Gradient Border on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity -z-10 blur-xl`}></div>

              {/* Icon */}
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 group-hover:text-gray-700 transition-colors leading-relaxed">
                {feature.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
