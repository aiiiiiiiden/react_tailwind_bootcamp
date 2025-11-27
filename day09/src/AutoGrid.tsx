export default function AutoGrid() {
    const items = Array.from({ length: 12 }, (_, i) => i + 1);
    return (
        <div className="p-8 space-y-12">
            <div>
                <h2 className="text-2xl font-bold mb-4">Auto-fill (빈 공간 유지)</h2>
                <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
                    {items.map((item) => (
                        <div key={item} className="bg-blue-500 text-white p-8 rounded-lg text-center font-bold">
                            {item}
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h2 className="text-2xl font-bold mb-4">Auto-fit (빈 공간 채움)</h2>
                <div className="grid gap-4 grid-cols-" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                    {items.map((item) => (
                        <div key={item} className="bg-green-500 text-white p-8 rounded-lg text-center font-bold">
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}