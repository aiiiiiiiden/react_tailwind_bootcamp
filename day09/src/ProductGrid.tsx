const products = [
    { name: 'Product 1', price: 100, image: 'https://picsum.photos/400/300?1', description: 'This is the first product' },
    { name: 'Product 2', price: 200, image: 'https://picsum.photos/400/300?2', description: 'This is the second product' },
    { name: 'Product 3', price: 300, image: 'https://picsum.photos/400/300?3', description: 'This is the third product' },
];

function ProductCard({ product }: { product: { name: string, price: number, image: string, description: string } }) {
    return (
        <div className="@container bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="flex flex-col @md:flex-row">
                <img src={product.image} alt={product.name} className="w-full @md:w-48 h-48 object-cover" />
                <div className="p-4 @md:p-6 flex-1">
                    <h3 className="text-lg @md:text-xl font-bold text-gray-900 mb-2">
                        {product.name}
                    </h3>
                    <p className="text-sm @md:text-base text-gray-600 mb-4">
                        {product.description}
                    </p>
                    <div className="flex items-center justify-between gap-2">
                        <span className="text-xl @md:text-2xl font-bold text-blue-600">
                            ${product.price}
                        </span>
                        <button className="px-4 py-2 min-w-24 w-full bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm @md:text-base">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function ProductGrid() {
  return (
    <div className="p-8">
        {/* 좁은 그리드 */}
        <div className="max-w-md space-y-4 my-4">
            {products.map((product) => (
                <ProductCard key={product.name} product={product} />
            ))}
        </div>
        {/* 넓은 그리드 */}
        <div className="max-w-4xl space-y-4">
            {products.map((product) => (
                <ProductCard key={product.name} product={product} />
            ))}
        </div>
    </div>
  );
}