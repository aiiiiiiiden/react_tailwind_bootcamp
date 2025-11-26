import { useState } from 'react';
export default function ResposiveNavigation() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-gray-100 text-white h-16 backdrop-blur-sm border-b border-gray-300">
            <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    MyApp
                </div>
                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8">
                    <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
                    <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
                    <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
                </div>
                {/* Mobile Menu Button */}
                <button className="md:hidden p-2 text-gray-600 hover:text-gray-900" onClick={() => setIsOpen(!isOpen)}>
                    <svg className="w-6 h-6" fill="none" stroke="#6b7280" viewBox="0 0 24 24">
                    {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                    </svg>
                </button>
            </div>
            {isOpen && (
                <div className="md:hidden pb-4 space-y-2 bg-gray-100 text-gray-900 border-t border-b border-gray-300">
                    <a href="#features" className="block px-4 py-2 rounded hover:bg-gray-800">Features</a>
                    <a href="#pricing" className="block px-4 py-2 rounded hover:bg-gray-800">Pricing</a>
                    <a href="#about" className="block px-4 py-2 rounded hover:bg-gray-800">About</a>
                </div>
            )}
        </div>
    );
}