const items = Array.from({ length: 8 }, (_, i) => i + 1);
export default function ResponsiveCardGrid() {
    return (
        <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                반응형 카드 그리드
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {items.map((item) => (
                    <div key={item} className="bg-white p-6 md:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <div className="text-4xl mb-4">📦</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            Card {item}
                        </h3>
                        <p className="text-gray-600 text-sm md:text-base">
                            Card {item}는 반응형 카드입니다.
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}