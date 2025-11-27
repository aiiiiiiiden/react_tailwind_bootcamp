export default function AspectRatioGrid() {
    const images = Array.from({ length: 12 }, (_, i) => i + 1);
    return (
        <div className="p-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {images.map((_, index) => (
                    <div key={index} className="aspect-square bg-linear-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-2xl font-bold hover:scale-105 transition-transform">
                        {index}
                    </div>
                ))}
            </div>
        </div>
    );
}