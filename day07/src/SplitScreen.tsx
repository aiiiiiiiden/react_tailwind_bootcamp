export default function SplitScreen() {
    return (
        <div className="min-h-screen h-screen flex flex-col md:flex-row"> 
            {/* Left Side */}
            <div className="grow-[2] bg-blue-600 text-white flex items-center justify-center p-12">
                <div className="max-w-md">
                    <h1 className="text-4xl font-bold mb-6">Welcome Back</h1>
                    <p className="text-xl text-blue-100 leading-relaxed">Login to continue</p>
                </div>
            </div>
            {/* Right Side */}
            <div className="flex flex-1 flex-col bg-white justify-center p-12">
                <div className="mr-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Login</h2>
                </div>
                <form className="w-full space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="your@email.com" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                        <input type="password" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="••••••••" />
                    </div>
                </form>
            </div>
        </div>
    );
}