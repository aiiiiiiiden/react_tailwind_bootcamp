const items: { title: string, icon: string, desc: string }[] = [
    { title: '빠른 개발', icon: '⚡', desc: 'Utility-first로 빠르게 개발' },
    { title: '반응형', icon: '📱', desc: '모든 화면 크기 대응' },
    { title: '커스터마이징', icon: '🎨', desc: '자유로운 디자인' },
    { title: '최적화', icon: '🚀', desc: '작은 번들 크기' },
    { title: '생산성', icon: '💪', desc: '개발자 경험 향상' },
    { title: '커뮤니티', icon: '👥', desc: '활발한 커뮤니티' },
];

export default function CardGrid() {
    return (
        <section className="py-20 px-4 bg-zinc-200 min-h-screen">
            {/* section title */}
            <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-gray-900">
                    왜 Tailwind CSS인가?
                </h2>
                <p className="text-xl text-gray-600">
                    개발자들이 선택하는 이유
                </p>
            </div>
            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((item, index) => (
                    <div key={index} className="flex flex-col gap-2 items-center justify-center bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center">
                        <div className="text-4xl">{item.icon}</div>
                        <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}