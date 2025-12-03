export default function CTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Get Started?
        </h2>

        <p className="text-xl text-blue-100 mb-10 leading-relaxed">
          Join thousands of developers building amazing products with our platform.
          Start your free trial today, no credit card required.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 hover:shadow-2xl hover:scale-105 transition-all">
            Start Free Trial
          </button>
          <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 text-white font-bold rounded-lg transition-all">
            Schedule Demo
          </button>
        </div>

        <p className="mt-6 text-blue-100 text-sm">
          No credit card required • 14-day free trial • Cancel anytime
        </p>

      </div>
    </section>
  );
}
