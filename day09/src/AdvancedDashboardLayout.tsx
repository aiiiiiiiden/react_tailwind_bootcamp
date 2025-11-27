const stats = [
    { label: 'Total Revenue', value: '$45,231', change: '+20.1%', color: 'blue' },
    { label: 'New Users', value: '2,345', change: '+12.5%', color: 'green' },
    { label: 'Total Orders', value: '1,234', change: '-4.3%', color: 'red' },
    { label: 'Conversion', value: '3.24%', change: '+1.2%', color: 'purple' },
]

function TrafficSources() {
    return (
        <div className="@container col-span-2">
            <div className=" bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100 h-full">
                <h2 className="text-lg @md:text-xl font-semibold text-gray-900 mb-4">Traffic Sources</h2>
                <div className="space-y-4">
                    {[{ name: "Organic Search", value: 45, color: "blue" }, { name: "Direct", value: 30, color: "green" }, { name: "Social Media", value: 15, color: "purple" }, { name: "Referral", value: 10, color: "yellow" }].map((source, i) => (
                        <div key={i}>
                            <div className="flex justify-between text-sm mb-1">
                                <span className="text-gray-700">{source.name}</span>
                                <span className="font-semibold text-gray-900">
                                    {source.value}%
                                </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                    className={`bg-${source.color}-500 h-2 rounded-full transition-all`}
                                    style={{ width: `${source.value}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function Stats() {
    return (
        <>
            {stats.map((stat, i) => (
                <div key={i} className="@container">
                    <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100">
                        <div className="text-xs md:text-sm text-gray-600 mb-1 md:mb-2">{stat.label}</div>
                        <div className="flex items-end justify-between">
                            <div className="text-2xl @md:text-3xl font-bold text-gray-900">{stat.value}</div>
                            <div className={`text-xs md:text-sm font-semibold ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>{stat.change}</div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

function Charts() {
    return (
        <div className="@container lg:col-span-2">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-lg @md:text-xl font-semibold text-gray-900 mb-4">Sales Overview</h2>
                <div className="h-64 md:h-80 bg-white rounded-lg flex items-center justify-center">
                    <div className="text-center">
                        <div className="text-6xl mb-4">📊</div>
                        <p className="text-gray-600 text-sm md:text-base">Chart Placeholder</p>
                    </div>   
                </div>
            </div>
        </div>
    );
}

function RecentActivity() {
    return (
        <div className="@container">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100 h-full">
                <h2 className="text-lg @md:text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
                <div className="space-y-4">
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className="flex gap-3 pb-4 border-b border-gray-100 last:border-0">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                                <span className="text-blue-600 font-semibold">U{i}</span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">User {i} made a purchase</p>
                                <p className="text-xs text-gray-500">{i} minutes ago</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function Header() {
    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="px-4 py-4 flex items-center justify-between">
                <h1 className="text-xl md:text-2xl font-bold text-gray-900">Dashboard</h1>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm md:text-base">
                    New Report
                </button>
            </div>
        </header>
    );
}

function TopProducts() {
    return (
        <div className="@container">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-lg @md:text-xl font-semibold text-gray-900 mb-4">Top Products</h2>
                <div className="space-y-3">
                    {["Product A", "Product B", "Product C", "Product D"].map((name, i) => (
                        <div key={i}>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-purple-500 rounded flex-shrink-0"></div>
                                <div>
                                    <div className="text-sm font-medium text-gray-900">{name}</div>
                                    <div className="text-xs text-gray-500">{(i + 1) * 123} sales</div>
                                </div>
                            </div>
                            <div className="text-sm font-semibold text-gray-900">
                                ${(i + 1) * 1234}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function AdvancedDashboardLayout() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <Header />
            <div className="p-4 md:p-6 lg:p-8">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
                    <Stats />
                </div>
                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
                    {/* Charts - 2/3 width on desktop */}
                    <Charts />
                    {/* Recent Activity - 1/3 width on desktop */}
                    <RecentActivity />
                </div>
                {/* Bottom Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
                    {/* Top Products */}
                    <TopProducts />
                    {/* Traffic Sources */}
                    <TrafficSources />
                </div>
            </div>
        </div>
    );
}