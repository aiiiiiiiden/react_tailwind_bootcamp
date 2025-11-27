---
marp: true
theme: default
paginate: true
---

# Day 9: 반응형 레이아웃 고급

## React + Tailwind Bootcamp

**학습 시간**: 30분
**학습 목표**: Container Queries와 고급 반응형 패턴 마스터하기

---

## 오늘 배울 내용

1. Container Queries (Tailwind v4 신기능)
2. 반응형 Grid 고급 패턴
3. Auto-fit vs Auto-fill
4. 실습: 완전 반응형 대시보드

**v4의 강력한 기능들을 배웁니다!**

---

## Container Queries란?

### 기존 Media Query

```jsx
// 화면 크기 기준
<div className="md:text-lg">// 화면이 768px 이상이면 text-lg</div>
```

### Container Query (v4)

```jsx
// 부모 컨테이너 크기 기준
<div className="@container">
  <div className="@md:text-lg">// 부모가 768px 이상이면 text-lg</div>
</div>
```

**차이**: 화면이 아니라 **부모 컨테이너** 크기에 반응!

---

## Container Queries 활용

```jsx
export default function ContainerQueryDemo() {
  return (
    <div className="p-8 space-y-8">
      {/* 좁은 컨테이너 */}
      <div className="@container max-w-md bg-gray-100 p-4">
        <div className="bg-white p-4 rounded-lg">
          <h3 className="text-sm @md:text-xl font-bold">좁은 컨테이너</h3>
          <p className="text-xs @md:text-base text-gray-600 mt-2">
            이 카드는 부모가 좁으면 작은 글씨, 넓으면 큰 글씨를 사용합니다.
          </p>
        </div>
      </div>

      {/* 넓은 컨테이너 */}
      <div className="@container max-w-4xl bg-gray-100 p-4">
        <div className="bg-white p-4 rounded-lg">
          <h3 className="text-sm @md:text-xl font-bold">넓은 컨테이너</h3>
          <p className="text-xs @md:text-base text-gray-600 mt-2">
            같은 컴포넌트지만 부모가 넓어서 큰 글씨로 표시됩니다!
          </p>
        </div>
      </div>
    </div>
  );
}
```

---

## Container Query Breakpoints

```jsx
@xs   // 20rem (320px)
@sm   // 24rem (384px)
@md   // 28rem (448px)
@lg   // 32rem (512px)
@xl   // 36rem (576px)
@2xl  // 42rem (672px)
@3xl  // 48rem (768px)
@4xl  // 56rem (896px)
@5xl  // 64rem (1024px)
@6xl  // 72rem (1152px)
@7xl  // 80rem (1280px)
```

**사용법**: `@container` 설정 후 `@md:` prefix 사용

---

## 실습 1: 반응형 카드 (5분)

```jsx
function ProductCard({ product }) {
  return (
    <div className="@container bg-white rounded-lg shadow-sm overflow-hidden">
      {/* 이미지와 콘텐츠 */}
      <div className="flex flex-col @md:flex-row">
        {/* 이미지 */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full @md:w-48 h-48 object-cover"
        />

        {/* 콘텐츠 */}
        <div className="p-4 @md:p-6 flex-1">
          <h3 className="text-lg @md:text-xl font-bold text-gray-900 mb-2">
            {product.name}
          </h3>
          <p className="text-sm @md:text-base text-gray-600 mb-4">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xl @md:text-2xl font-bold text-blue-600">
              ${product.price}
            </span>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm @md:text-base">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductGrid() {
  const products = [
    {
      name: "Product 1",
      price: 99,
      image: "https://picsum.photos/400/300?1",
      description: "고품질 제품",
    },
    {
      name: "Product 2",
      price: 149,
      image: "https://picsum.photos/400/300?2",
      description: "최고의 선택",
    },
  ];

  return (
    <div className="p-8 space-y-4">
      {/* 좁은 그리드 */}
      <div className="max-w-md">
        {products.map((p, i) => (
          <ProductCard key={i} product={p} />
        ))}
      </div>

      {/* 넓은 그리드 */}
      <div className="max-w-4xl">
        {products.map((p, i) => (
          <ProductCard key={i} product={p} />
        ))}
      </div>
    </div>
  );
}
```

---

## Auto-fit vs Auto-fill

### Auto-fill

```jsx
// 빈 공간이 생김
<div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
  {/* 카드가 250px씩, 남는 공간은 빈 칸으로 */}
</div>
```

### Auto-fit

```jsx
// 빈 공간 없이 꽉 채움
<div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
  {/* 카드가 250px씩, 남는 공간은 카드가 늘어남 */}
</div>
```

**차이**: auto-fill은 빈 칸, auto-fit은 늘려서 채움

---

## 실습 2: 자동 반응형 그리드 (5분)

```jsx
export default function AutoGrid() {
  const items = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <div className="p-8 space-y-12">
      <div>
        <h2 className="text-2xl font-bold mb-4">Auto-fill (빈 공간 유지)</h2>
        <div
          className="grid gap-4"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          }}
        >
          {items.map((i) => (
            <div
              key={i}
              className="bg-blue-500 text-white p-8 rounded-lg text-center font-bold"
            >
              {i}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Auto-fit (빈 공간 채움)</h2>
        <div
          className="grid gap-4"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          }}
        >
          {items.map((i) => (
            <div
              key={i}
              className="bg-green-500 text-white p-8 rounded-lg text-center font-bold"
            >
              {i}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

**브라우저 크기를 바꿔보세요! 차이가 보입니다.**

---

## Aspect Ratio Grid

```jsx
export default function AspectRatioGrid() {
  const images = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className="p-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {images.map((i) => (
          <div
            key={i}
            className="aspect-square bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-2xl font-bold hover:scale-105 transition-transform"
          >
            {i}
          </div>
        ))}
      </div>
    </div>
  );
}
```

**핵심**: `aspect-square`로 정사각형 유지, `grid-cols-*`로 반응형

---

## 실습 3: 반응형 대시보드 (15분)

```jsx
export default function ResponsiveDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl md:text-2xl font-bold text-gray-900">
            Dashboard
          </h1>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm md:text-base">
            New Report
          </button>
        </div>
      </header>

      <div className="p-4 md:p-6 lg:p-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
          {[
            {
              label: "Total Revenue",
              value: "$45,231",
              change: "+20.1%",
              color: "blue",
            },
            {
              label: "New Users",
              value: "2,345",
              change: "+12.5%",
              color: "green",
            },
            {
              label: "Total Orders",
              value: "1,234",
              change: "-4.3%",
              color: "red",
            },
            {
              label: "Conversion",
              value: "3.24%",
              change: "+1.2%",
              color: "purple",
            },
          ].map((stat, i) => (
            <div key={i} className="@container">
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="text-xs md:text-sm text-gray-600 mb-1 md:mb-2">
                  {stat.label}
                </div>
                <div className="flex items-end justify-between">
                  <div className="text-2xl @md:text-3xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div
                    className={`text-xs md:text-sm font-semibold ${
                      stat.change.startsWith("+")
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {stat.change}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Chart - 2/3 width on desktop */}
          <div className="lg:col-span-2 @container">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-lg @md:text-xl font-semibold text-gray-900 mb-4">
                Sales Overview
              </h2>
              <div className="h-64 md:h-80 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📊</div>
                  <p className="text-gray-600 text-sm md:text-base">
                    Chart Placeholder
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity - 1/3 width on desktop */}
          <div className="@container">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-lg @md:text-xl font-semibold text-gray-900 mb-4">
                Recent Activity
              </h2>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="flex gap-3 pb-4 border-b border-gray-100 last:border-0"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 font-semibold">U{i}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        User {i} made a purchase
                      </p>
                      <p className="text-xs text-gray-500">{i} minutes ago</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-6 md:mt-8">
          {/* Top Products */}
          <div className="@container">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-lg @md:text-xl font-semibold text-gray-900 mb-4">
                Top Products
              </h2>
              <div className="space-y-3">
                {["Product A", "Product B", "Product C", "Product D"].map(
                  (name, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded flex-shrink-0"></div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {(i + 1) * 123} sales
                          </div>
                        </div>
                      </div>
                      <div className="text-sm font-semibold text-gray-900">
                        ${(i + 1) * 1234}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Traffic Sources */}
          <div className="@container">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-lg @md:text-xl font-semibold text-gray-900 mb-4">
                Traffic Sources
              </h2>
              <div className="space-y-4">
                {[
                  { name: "Organic Search", value: 45, color: "blue" },
                  { name: "Direct", value: 30, color: "green" },
                  { name: "Social Media", value: 15, color: "purple" },
                  { name: "Referral", value: 10, color: "yellow" },
                ].map((source, i) => (
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
        </div>
      </div>
    </div>
  );
}
```

---

## 핵심 정리

### Container Queries

- `@container`: 컨테이너로 지정
- `@md:`, `@lg:`: 컨테이너 크기 기준 스타일
- **장점**: 재사용 가능한 반응형 컴포넌트

### Auto Grid

- `auto-fill`: 빈 공간 유지
- `auto-fit`: 빈 공간 채움
- **패턴**: `grid-cols-[repeat(auto-fit,minmax(250px,1fr))]`

### 반응형 대시보드

- Stats: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`
- Main: `grid-cols-1 lg:grid-cols-3`
- `lg:col-span-2`: 데스크톱에서 2칸 차지

---

## 실전 팁

1. **Container Query 활용**: 재사용 컴포넌트에 필수
2. **Auto-fit 선호**: 대부분의 경우 auto-fit이 더 자연스러움
3. **Aspect Ratio**: 이미지 그리드는 `aspect-*` 사용
4. **Mobile-First**: 여전히 작은 화면부터!
5. **실제 콘텐츠 테스트**: 더미 데이터만으로는 부족

---

## 내일 배울 내용

### Day 10: Interactive States

- Hover, Focus, Active 상태
- Transitions와 Transforms
- 실습: 인터랙티브 버튼, 카드

**사용자 인터랙션을 위한 스타일링!**

---

## 과제 (선택)

1. **Container Query 카드**

   - 좁을 때: 세로 레이아웃
   - 넓을 때: 가로 레이아웃

2. **Auto-fit 갤러리**

   - 이미지 12개
   - 자동으로 반응형 그리드

3. **실험**
   - Auto-fill vs Auto-fit 직접 비교
   - Container Query와 Media Query 차이 체험

**수고하셨습니다! 🎉**
