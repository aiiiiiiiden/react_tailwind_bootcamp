---
marp: true
theme: default
paginate: true
---

# Day 14: 종합 복습 & 최종 프로젝트
## React + Tailwind Bootcamp

**학습 시간**: 30분 (+ 복습 시간)
**학습 목표**: 14일간 배운 모든 것을 정리하고 포트폴리오 프로젝트 완성

---

## 14일간의 여정 🚀

### Week 1: 기초 다지기
- ✅ Day 1-3: CSS Box Model, Flexbox, Grid
- ✅ Day 4-7: Tailwind 기본, Spacing, Typography, 레이아웃

### Week 2: 실전 적용
- ✅ Day 8-9: 반응형 디자인, Container Queries
- ✅ Day 10-11: Interactive States, 고급 스타일링
- ✅ Day 12-13: 랜딩 페이지, 대시보드
- 🎯 Day 14: 종합 복습 & 포트폴리오

---

## 핵심 개념 요약

### 1. Box Model
```jsx
// Padding: 내부 여백
p-4  px-6  py-2  pt-4

// Margin: 외부 여백
m-4  mx-auto  my-6  -mt-4

// Border
border  border-2  border-gray-200  rounded-lg
```

---

## 핵심 개념 요약

### 2. Flexbox (1차원)
```jsx
// Container
flex  flex-col  flex-row
justify-center  justify-between
items-center  items-start
gap-4

// Items
flex-1  flex-shrink-0
```

---

## 핵심 개념 요약

### 3. Grid (2차원)
```jsx
// Container
grid  grid-cols-3  grid-cols-[200px_1fr]
gap-6

// Items
col-span-2  row-span-2

// Responsive
grid-cols-1 md:grid-cols-2 lg:grid-cols-4
```

---

## 핵심 개념 요약

### 4. Responsive Design
```jsx
// Breakpoints (Mobile-First)
sm:   // 640px
md:   // 768px
lg:   // 1024px
xl:   // 1280px
2xl:  // 1536px

// Usage
text-sm md:text-base lg:text-lg
hidden md:block
```

---

## 핵심 개념 요약

### 5. Interactive States
```jsx
// States
hover:bg-blue-600
focus:ring-2
active:scale-95
group-hover:text-blue-600

// Transitions
transition-colors  duration-300
transition-all  ease-in-out
```

---

## 핵심 개념 요약

### 6. 고급 스타일링
```jsx
// Gradients
bg-gradient-to-r from-blue-500 to-purple-500

// Shadows
shadow-lg  shadow-2xl  shadow-blue-500/50

// Glassmorphism
bg-white/10 backdrop-blur-lg border-white/20
```

---

## 최종 프로젝트: E-commerce Card Gallery

### 목표
- 모든 배운 기술을 하나의 프로젝트에 통합
- 포트폴리오에 사용할 수 있는 품질
- 실무 수준의 코드 품질

---

## 프로젝트 구조

```
src/
├── App.jsx
├── components/
│   ├── ProductCard.jsx
│   ├── Filters.jsx
│   ├── SearchBar.jsx
│   └── ShoppingCart.jsx
├── data/
│   └── products.js
└── index.css
```

---

## Step 1: Product Data

```jsx
// data/products.js
export const products = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    price: 299,
    originalPrice: 399,
    image: 'https://picsum.photos/400/300?1',
    category: 'Electronics',
    rating: 4.5,
    reviews: 128,
    badge: 'Best Seller',
    inStock: true
  },
  {
    id: 2,
    name: 'Smart Watch Series 5',
    price: 449,
    originalPrice: null,
    image: 'https://picsum.photos/400/300?2',
    category: 'Electronics',
    rating: 4.8,
    reviews: 256,
    badge: 'New',
    inStock: true
  },
  {
    id: 3,
    name: 'Designer Backpack',
    price: 89,
    originalPrice: 129,
    image: 'https://picsum.photos/400/300?3',
    category: 'Fashion',
    rating: 4.3,
    reviews: 64,
    badge: 'Sale',
    inStock: true
  },
  // ... more products
];

export const categories = ['All', 'Electronics', 'Fashion', 'Home', 'Sports'];
```

---

## Step 2: Product Card Component

```jsx
// components/ProductCard.jsx
export default function ProductCard({ product, onAddToCart }) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="@container group relative bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-blue-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      {/* Badge */}
      {product.badge && (
        <div className={`
          absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-bold
          ${product.badge === 'New' ? 'bg-blue-500 text-white' : ''}
          ${product.badge === 'Sale' ? 'bg-red-500 text-white' : ''}
          ${product.badge === 'Best Seller' ? 'bg-yellow-400 text-gray-900' : ''}
        `}>
          {product.badge}
        </div>
      )}

      {/* Favorite Button */}
      <button className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95">
        <span className="text-xl">🤍</span>
      </button>

      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Discount Badge */}
        {discount > 0 && (
          <div className="absolute bottom-4 right-4 px-3 py-1 bg-red-500 text-white font-bold rounded-full text-sm">
            -{discount}%
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">

        {/* Category */}
        <div className="text-sm text-gray-500 mb-2">{product.category}</div>

        {/* Title */}
        <h3 className="text-lg @md:text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex">
            {[1, 2, 3, 4, 5].map(star => (
              <span key={star} className={star <= Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}>
                ★
              </span>
            ))}
          </div>
          <span className="text-sm text-gray-500">
            {product.rating} ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-2xl @md:text-3xl font-bold text-gray-900">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-lg text-gray-400 line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>

        {/* Stock Status */}
        <div className="flex items-center gap-2 mb-4">
          <span className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></span>
          <span className={`text-sm ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => onAddToCart(product)}
          disabled={!product.inStock}
          className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white font-semibold rounded-lg transition-all hover:shadow-lg active:scale-95 disabled:cursor-not-allowed"
        >
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>

      </div>

    </div>
  );
}
```

---

## Step 3: Filters & Search

```jsx
// components/Filters.jsx
export default function Filters({ selectedCategory, onCategoryChange, categories }) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`
            px-6 py-2 rounded-full font-medium transition-all
            ${selectedCategory === category
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }
          `}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

// components/SearchBar.jsx
export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative max-w-md w-full">
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search products..."
        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all"
      />
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
        🔍
      </div>
    </div>
  );
}
```

---

## Step 4: Main App

```jsx
// App.jsx
import { useState } from 'react';
import ProductCard from './components/ProductCard';
import Filters from './components/Filters';
import SearchBar from './components/SearchBar';
import { products, categories } from './data/products';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    // Show notification (you can add a toast here)
    alert(`Added ${product.name} to cart!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between gap-4">

            {/* Logo */}
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ShopHub
            </div>

            {/* Search (Desktop) */}
            <div className="hidden md:block flex-1 max-w-md">
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
            </div>

            {/* Cart */}
            <button className="relative px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
              <span className="flex items-center gap-2">
                🛒 Cart
                {cart.length > 0 && (
                  <span className="px-2 py-0.5 bg-white text-blue-600 text-xs font-bold rounded-full">
                    {cart.length}
                  </span>
                )}
              </span>
            </button>

          </div>

          {/* Search (Mobile) */}
          <div className="md:hidden mt-4">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Discover Amazing Products
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Shop the latest trends with the best prices. Free shipping on orders over $50.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex justify-center">
          <Filters
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            categories={categories}
          />
        </div>

        {/* Results Count */}
        <div className="mb-6 text-gray-600">
          Showing {filteredProducts.length} products
          {searchQuery && ` for "${searchQuery}"`}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">😕</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              No products found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filter to find what you're looking for.
            </p>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            ShopHub
          </div>
          <p className="text-gray-400 mb-6">
            Your one-stop shop for everything amazing.
          </p>
          <p className="text-gray-500 text-sm">
            © 2025 ShopHub. Built with React + Tailwind CSS.
          </p>
        </div>
      </footer>

    </div>
  );
}
```

---

## 완성! 🎉

### 사용된 기술들
✅ Responsive Grid Layout
✅ Container Queries (@container)
✅ Interactive States (hover, active, group)
✅ Gradients & Shadows
✅ Transitions & Transforms
✅ Glassmorphism (backdrop-blur)
✅ State Management (useState)
✅ Search & Filter Logic

---

## Best Practices 체크리스트

### 성능
- ✅ 이미지 최적화 (적절한 크기)
- ✅ Transition은 특정 속성만
- ✅ 불필요한 re-render 방지

### 접근성
- ✅ Semantic HTML (header, main, footer)
- ✅ Alt text for images
- ✅ Focus states (focus:ring)
- ✅ Keyboard navigation

### 코드 품질
- ✅ 컴포넌트 분리
- ✅ 재사용 가능한 구조
- ✅ 일관된 naming convention
- ✅ Props validation (TypeScript 권장)

---

## 최적화 팁

### 1. Tailwind 빌드 최적화
```js
// vite.config.js
export default {
  build: {
    cssCodeSplit: true,
    minify: 'terser'
  }
}
```

### 2. 컴포넌트 최적화
```jsx
// React.memo for expensive components
const ProductCard = React.memo(({ product }) => { ... });

// useMemo for filtered data
const filtered = useMemo(() =>
  products.filter(...),
  [products, filters]
);
```

---

## 다음 단계 로드맵

### 1. 즉시 적용 (1-2주)
- 개인 프로젝트에 Tailwind 도입
- 포트폴리오 사이트 리뉴얼
- 작은 프로젝트로 연습

### 2. 심화 학습 (1-2개월)
- Tailwind + Next.js
- Headless UI / Radix UI
- Framer Motion (애니메이션)
- TypeScript 통합

### 3. 실무 레벨 (3-6개월)
- Design System 구축
- Component Library 제작
- 성능 최적화 마스터
- 협업 워크플로우

---

## 추천 리소스

### 공식 문서
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Tailwind UI](https://tailwindui.com/) (유료 컴포넌트)

### 학습 자료
- [Tailwind Labs YouTube](https://www.youtube.com/@TailwindLabs)
- [Frontend Mentor](https://www.frontendmentor.io/) (실습 프로젝트)

### 커뮤니티
- [Tailwind Discord](https://tailwindcss.com/discord)
- [Reddit r/tailwindcss](https://reddit.com/r/tailwindcss)

### 도구
- [Tailwind Play](https://play.tailwindcss.com/) (온라인 playground)
- [Tailwind Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)

---

## 14일 완주를 축하합니다! 🎊

### 당신은 이제...
✅ CSS 레이아웃의 기초를 완벽히 이해합니다
✅ Tailwind CSS를 자유자재로 다룹니다
✅ 반응형 디자인을 쉽게 구현합니다
✅ 인터랙티브한 UI를 만들 수 있습니다
✅ 실전 프로젝트를 완성할 수 있습니다

### 다음은?
1. 배운 내용을 실제 프로젝트에 적용
2. 포트폴리오에 오늘 만든 프로젝트 추가
3. 오픈소스 프로젝트 기여 시작
4. 개인 블로그에 학습 내용 정리

---

## 마지막 조언

### "완벽보다 완성이 중요합니다"
- 작은 프로젝트라도 끝까지 완성하세요
- 실수는 최고의 학습 도구입니다
- 꾸준함이 재능을 이깁니다

### "계속 배우세요"
- 웹 기술은 계속 발전합니다
- 커뮤니티에 참여하세요
- 다른 사람의 코드를 많이 읽으세요

### "공유하세요"
- 배운 것을 블로그에 기록하세요
- GitHub에 코드를 올리세요
- 다른 초보자를 도와주세요

---

## 감사합니다! 🙏

### 여러분은 해냈습니다!

14일 동안 매일 30분씩 투자한 여러분의 노력이
결실을 맺었습니다.

이제 여러분은 **Tailwind CSS 전문가**입니다.

계속 성장하는 개발자가 되세요! 🚀

---

## 최종 과제

### 1. 포트폴리오 프로젝트
- 오늘 만든 E-commerce 완성하기
- 개인화 (색상, 제품, 브랜딩)
- GitHub에 배포

### 2. 14일 회고
- 무엇을 배웠나요?
- 가장 유용한 기술은?
- 다음 목표는?

### 3. 공유하기
- Twitter/LinkedIn에 완주 인증
- #TailwindCSS #100DaysOfCode
- 다른 학습자들과 교류

**해피 코딩! 💻✨**
