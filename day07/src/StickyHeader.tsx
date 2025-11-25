export default function StickyHeader() {
    return (
        <div className="min-h-screen bg-zinc-100">
            {/* Sticky Header */}
            <header className="bg-zinc-200 sticky top-0 z-50">
                <div className="px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-gray-900">Logo</div>
                        <nav className="flex gap-6">
                            <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
                            <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
                            <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
                        </nav>
                    </div>
                </div>
            </header>
            {/* Content */}
            <main>
                <div className="h-[200vh] bg-gradient-to-b from-blue-200 to-white p-4">
                    <h1 className="text-4xl font-bold">Hello World</h1>
                    <p className="text-gray-600 mt-4">This is a sticky header example.</p>
                </div>
            </main>
        </div>
    );
}