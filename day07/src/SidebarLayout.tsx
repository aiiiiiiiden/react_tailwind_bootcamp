export default function SidebarLayout() {
    return (
        <div className="flex h-screen bg-zinc-100">
            {/* Sidebar */}
            <aside className="flex flex-col h-full w-64 bg-zinc-800 text-white">
                <div className="p-6 border-b border-zinc-600">
                    <h2 className="text-xl font-bold">Logo</h2>
                </div>
                <div className="flex flex-col justify-between flex-1">
                    <nav className="flex flex-col p-4 gap-2">
                        <a href="#" className="block px-4 py-2 rounded hover:bg-zinc-700">
                            <span className="text-xl">📊 Dashboard</span>
                        </a>
                        <a href="#" className="block px-4 py-2 rounded hover:bg-zinc-700">
                            <span className="text-xl">👤 Users</span>
                        </a>
                        <a href="#" className="block px-4 py-2 rounded hover:bg-zinc-700">
                            <span className="text-xl">⚙️ Settings</span>
                        </a>
                    </nav>
                    <footer className="p-6 border-t border-zinc-600">
                        <p className="text-sm text-zinc-400">© 2025 Company. All rights reserved.</p>
                    </footer>
                </div>
            </aside>
            {/* Main Content */}
            <div className="flex flex-col flex-1">
                {/* Header */}
                <header className="bg-white border-zinc-200 flex items-center p-6">
                    <h1 className="text-xl font-bold">Page Title</h1>
                </header>
                {/* Content */}
                <main className="flex-1 overflow-auto bg-gray-50 p-6">
                    <div className="max-w-7xl mx-auto">
                        <p>Main content</p>
                    </div>
                </main>
            </div>
        </div>
    );
}