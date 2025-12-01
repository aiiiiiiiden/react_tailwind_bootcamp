export default function BackdropPage() {
  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center'
    style={{
      backgroundImage: 'url(https://picsum.photos/1920/1080)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
    >
        {/* Glass Card */}
      <div className='max-w-md w-full'>
        {/* Frosted Glass Effect */}
        <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl'>
          <h2 className='text-3xl font-bold text-white mb-4'>Glassmorphism</h2>
          <p className='text-white/90 mb-6 leading-relaxed'>
            Glassmorphism is a modern design trend that uses frosted glass effects and backdrop blur to create a modern and stylish look.
          </p>
          <div className='space-y-3'>
            <input type='email' placeholder='Email' className='w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50' />
            <input type='password' placeholder='Password' className='w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50' />
            <button className='w-full px-4 py-3 bg-white/30 backdrop-blur-sm hover:bg-white/40 border border-white/40 rounded-lg text-white font-semibold transition-all'>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}