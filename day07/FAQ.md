# Tailwind CSS FAQ - Day 7: 레이아웃 패턴

## Q: Sticky Header가 스크롤할 때 다른 요소들 뒤로 가려지는데 어떻게 해결하나요?

### A: `z-index` 속성을 추가하여 레이어 순서를 조정하세요

Sticky Header가 다른 요소들에 가려지는 것은 z-index가 낮거나 설정되지 않았기 때문입니다. Tailwind의 `z-*` 유틸리티를 사용하여 해결할 수 있습니다.

```tsx
<header className="sticky top-0 z-50 bg-white border-b border-gray-200">
  <div className="max-w-7xl mx-auto px-4 py-4">
    <nav>Navigation content...</nav>
  </div>
</header>
```

### 주요 클래스 설명

| 클래스 | CSS 속성 | 설명 |
|--------|----------|------|
| `sticky` | `position: sticky` | 스크롤 시 특정 위치에 고정 |
| `top-0` | `top: 0` | 뷰포트 상단에 고정 |
| `z-50` | `z-index: 50` | 다른 요소보다 위에 표시 |
| `bg-white` | `background-color: white` | 배경색 설정 (투명도 방지) |

### 왜 작동하나요?

- **`position: sticky`**: 일반 흐름에서는 `relative`처럼 동작하다가, 스크롤 시 지정된 위치(`top: 0`)에 도달하면 `fixed`처럼 고정됩니다.
- **`z-index: 50`**: 다른 콘텐츠(기본 z-index: 0)보다 높은 레이어에 배치되어 항상 위에 표시됩니다.
- **배경색**: 투명한 배경이면 뒤의 콘텐츠가 비쳐 보이므로 `bg-white` 같은 불투명한 배경이 필요합니다.

### 추가 팁

**반투명 헤더 만들기:**
```tsx
<header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b">
  <nav>...</nav>
</header>
```

**z-index 값 선택 가이드:**
- `z-10`: 일반 오버레이
- `z-20`: 드롭다운, 툴팁
- `z-30`: 모달 배경
- `z-40`: 모달 콘텐츠
- `z-50`: 네비게이션, 헤더
- `z-auto`: 기본값 (스택 컨텍스트에 따름)

**여러 sticky 요소가 있을 때:**
```tsx
{/* Sticky Header - 가장 위 */}
<header className="sticky top-0 z-50 bg-white">...</header>

{/* Sticky Sidebar - 헤더 아래 */}
<aside className="sticky top-16 z-40">...</aside>
```

---

## Q: Sidebar Layout에서 사이드바 높이가 화면 전체를 차지하지 않는 이유는?

### A: 부모 컨테이너에 `h-screen`을 설정하고 Flexbox를 사용하세요

사이드바가 화면 전체 높이를 차지하려면 부모 컨테이너의 높이가 뷰포트 높이와 같아야 하고, Flexbox로 레이아웃을 구성해야 합니다.

```tsx
export default function SidebarLayout() {
  return (
    <div className="flex h-screen">
      {/* Sidebar - 고정 너비 */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="p-6 border-b border-gray-700">
          <h2 className="text-xl font-bold">Dashboard</h2>
        </div>
        <nav className="flex-1 overflow-auto p-4">
          {/* Navigation items */}
        </nav>
      </aside>

      {/* Main Content - 나머지 공간 */}
      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-white border-b">
          {/* Header content */}
        </header>
        <main className="flex-1 overflow-auto bg-gray-50 p-6">
          {/* Main content */}
        </main>
      </div>
    </div>
  );
}
```

### 주요 클래스 설명

| 클래스 | CSS 속성 | 설명 |
|--------|----------|------|
| `h-screen` | `height: 100vh` | 뷰포트 높이 100% |
| `flex` | `display: flex` | Flexbox 컨테이너 생성 |
| `flex-col` | `flex-direction: column` | 세로 방향 배치 |
| `flex-1` | `flex: 1 1 0%` | 남은 공간 모두 차지 |
| `overflow-auto` | `overflow: auto` | 내용이 넘치면 스크롤 생성 |
| `w-64` | `width: 16rem` | 고정 너비 (256px) |

### 왜 작동하나요?

- **`h-screen`**: 최상위 컨테이너의 높이를 뷰포트 높이(100vh)로 설정합니다.
- **`flex`**: 자식 요소들을 Flexbox로 배치하여 사이드바와 메인 영역이 가로로 나란히 놓입니다.
- **`flex-1`**: 메인 영역이 사이드바를 제외한 나머지 공간을 모두 차지하게 합니다.
- **`overflow-auto`**: 각 영역의 콘텐츠가 많아지면 개별적으로 스크롤할 수 있습니다.

### 추가 팁

**반응형 사이드바:**
```tsx
{/* 모바일에서는 숨기고, 데스크톱에서만 보이기 */}
<aside className="hidden md:flex w-64 bg-gray-900 flex-col">
  {/* Sidebar content */}
</aside>

{/* 모바일 메뉴 버튼 */}
<button className="md:hidden">
  Menu
</button>
```

**접을 수 있는 사이드바:**
```tsx
const [collapsed, setCollapsed] = useState(false);

<aside className={`${collapsed ? 'w-20' : 'w-64'} transition-all duration-300 bg-gray-900`}>
  <button onClick={() => setCollapsed(!collapsed)}>
    Toggle
  </button>
</aside>
```

**스크롤 영역 구분:**
```tsx
<aside className="w-64 bg-gray-900 flex flex-col h-screen">
  {/* 고정 영역 - 로고 */}
  <div className="p-6 border-b border-gray-700">
    <h2>Logo</h2>
  </div>

  {/* 스크롤 가능한 네비게이션 */}
  <nav className="flex-1 overflow-y-auto p-4">
    {/* 많은 메뉴 항목들... */}
  </nav>

  {/* 고정 영역 - 사용자 정보 */}
  <div className="p-6 border-t border-gray-700">
    <div>User Profile</div>
  </div>
</aside>
```

---

## Q: `max-w-7xl mx-auto px-4` 패턴은 언제 사용하나요?

### A: 콘텐츠를 중앙 정렬하고 최대 너비를 제한할 때 사용하는 표준 Container 패턴입니다

이 패턴은 반응형 웹사이트에서 콘텐츠가 너무 넓어지는 것을 방지하고, 모든 화면 크기에서 읽기 좋은 레이아웃을 유지하기 위해 사용됩니다.

```tsx
export default function Page() {
  return (
    <div>
      {/* 전체 너비 배경 */}
      <section className="bg-blue-600 py-20">
        {/* 제한된 너비의 콘텐츠 */}
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl text-white">Title</h1>
          <p className="text-white">Content with maximum width</p>
        </div>
      </section>

      {/* 다른 섹션도 동일한 패턴 */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl">Features</h2>
        </div>
      </section>
    </div>
  );
}
```

### 주요 클래스 설명

| 클래스 | CSS 속성 | 설명 |
|--------|----------|------|
| `max-w-7xl` | `max-width: 80rem` | 최대 너비 1280px로 제한 |
| `mx-auto` | `margin-left: auto; margin-right: auto` | 가로 중앙 정렬 |
| `px-4` | `padding-left: 1rem; padding-right: 1rem` | 양옆 여백 16px |

### 왜 작동하나요?

- **`max-w-7xl`**: 큰 화면에서 콘텐츠가 너무 넓게 펼쳐지는 것을 방지합니다. 1280px을 넘지 않습니다.
- **`mx-auto`**: 좌우 margin을 자동으로 계산하여 가운데 정렬합니다.
- **`px-4`**: 작은 화면에서 콘텐츠가 화면 가장자리에 붙지 않도록 양옆에 여백을 줍니다.

### 다양한 Container 크기

```tsx
{/* 다양한 최대 너비 옵션 */}
<div className="max-w-sm mx-auto px-4">   {/* 384px - 좁은 폼 */}</div>
<div className="max-w-md mx-auto px-4">   {/* 448px - 카드, 모달 */}</div>
<div className="max-w-lg mx-auto px-4">   {/* 512px - 블로그 포스트 */}</div>
<div className="max-w-xl mx-auto px-4">   {/* 576px */}</div>
<div className="max-w-2xl mx-auto px-4">  {/* 672px - 긴 글 */}</div>
<div className="max-w-4xl mx-auto px-4">  {/* 896px */}</div>
<div className="max-w-6xl mx-auto px-4">  {/* 1152px */}</div>
<div className="max-w-7xl mx-auto px-4">  {/* 1280px - 일반 페이지 */}</div>
<div className="max-w-full mx-auto px-4"> {/* 제한 없음 */}</div>
```

### 추가 팁

**반응형 패딩:**
```tsx
{/* 화면 크기에 따라 다른 패딩 */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* 모바일: 16px, 태블릿: 24px, 데스크톱: 32px */}
</div>
```

**Section 패턴:**
```tsx
{/* 섹션마다 일관된 패딩 */}
<section className="py-12 md:py-20 px-4">
  <div className="max-w-7xl mx-auto">
    <h2>Section Title</h2>
  </div>
</section>
```

**전체 너비 배경 + 제한된 콘텐츠:**
```tsx
{/* 배경은 전체 너비, 콘텐츠는 제한된 너비 */}
<div className="bg-gradient-to-r from-blue-600 to-purple-600">
  <div className="max-w-7xl mx-auto px-4 py-20">
    <h1 className="text-white">Full-width background, limited content</h1>
  </div>
</div>
```

**Grid와 함께 사용:**
```tsx
<section className="py-20 px-4">
  <div className="max-w-7xl mx-auto">
    {/* Container 안에서 Grid 사용 */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>Card 1</div>
      <div>Card 2</div>
      <div>Card 3</div>
    </div>
  </div>
</section>
```

---

## Q: Grid가 반응형으로 작동하지 않고 모든 화면에서 같은 열 개수를 보여주는데 왜 그런가요?

### A: Tailwind의 반응형 prefix를 올바르게 사용해야 합니다

Tailwind CSS는 mobile-first 방식을 사용하므로, 기본 클래스는 모바일에 적용되고, 더 큰 화면에는 prefix를 붙여야 합니다.

```tsx
{/* ❌ 잘못된 방법 - 모든 화면에서 3열 */}
<div className="grid grid-cols-3 gap-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>

{/* ✅ 올바른 방법 - 반응형 */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

### Breakpoint 이해하기

| Prefix | 최소 너비 | 디바이스 |
|--------|----------|---------|
| (없음) | 0px | 모든 화면 (모바일) |
| `sm:` | 640px | 큰 모바일, 작은 태블릿 |
| `md:` | 768px | 태블릿 |
| `lg:` | 1024px | 데스크톱 |
| `xl:` | 1280px | 큰 데스크톱 |
| `2xl:` | 1536px | 매우 큰 화면 |

### 실전 예제

```tsx
{/* 카드 그리드 - 완벽한 반응형 */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {items.map(item => (
    <div key={item.id} className="bg-white p-6 rounded-lg shadow">
      {item.content}
    </div>
  ))}
</div>

{/*
  - 모바일 (< 640px): 1열
  - 작은 태블릿 (≥ 640px): 2열
  - 데스크톱 (≥ 1024px): 3열
  - 큰 데스크톱 (≥ 1280px): 4열
*/}
```

### 추가 팁

**다양한 반응형 패턴:**
```tsx
{/* 갤러리 - auto-fit으로 자동 조정 */}
<div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
  {/* 항목들이 자동으로 줄바꿈됩니다 */}
</div>

{/* 대시보드 위젯 */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
  <div className="lg:col-span-2">큰 위젯</div>
  <div>작은 위젯</div>
</div>

{/* 리스트 vs 그리드 */}
<div className="flex flex-col md:grid md:grid-cols-2 gap-4">
  {/* 모바일: 리스트, 태블릿 이상: 그리드 */}
</div>
```

**Gap 크기도 반응형으로:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
  {/* 화면이 클수록 간격도 넓어집니다 */}
</div>
```

**특정 화면에서만 Grid 사용:**
```tsx
{/* 모바일은 Flex, 데스크톱은 Grid */}
<div className="flex flex-col lg:grid lg:grid-cols-3 gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

---

## Q: Hero Section을 화면 전체 높이로 만들었는데 콘텐츠가 중앙에 오지 않아요. 어떻게 해야 하나요?

### A: `flex items-center justify-center`를 조합하여 완벽한 중앙 정렬을 만드세요

Hero Section을 화면 전체 높이로 만들고 콘텐츠를 중앙에 배치하려면 Flexbox의 중앙 정렬 기능을 사용해야 합니다.

```tsx
export default function HeroSection() {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600">
      <div className="text-center text-white px-4 max-w-4xl">
        <h1 className="text-6xl font-bold mb-6">
          Beautiful Landing Page
        </h1>
        <p className="text-xl mb-8">
          Create stunning designs with Tailwind CSS
        </p>
        <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg">
          Get Started
        </button>
      </div>
    </section>
  );
}
```

### 주요 클래스 설명

| 클래스 | CSS 속성 | 설명 |
|--------|----------|------|
| `h-screen` | `height: 100vh` | 화면 전체 높이 |
| `flex` | `display: flex` | Flexbox 컨테이너 |
| `items-center` | `align-items: center` | 세로 중앙 정렬 |
| `justify-center` | `justify-content: center` | 가로 중앙 정렬 |

### 다양한 중앙 정렬 방법

```tsx
{/* 방법 1: Flexbox (권장) */}
<div className="h-screen flex items-center justify-center">
  <div>Content</div>
</div>

{/* 방법 2: Grid */}
<div className="h-screen grid place-items-center">
  <div>Content</div>
</div>

{/* 방법 3: Absolute positioning */}
<div className="h-screen relative">
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <div>Content</div>
  </div>
</div>
```

### 추가 팁

**상단 네비게이션이 있을 때:**
```tsx
{/* 네비게이션 높이를 빼고 나머지를 Hero로 */}
<div>
  <nav className="h-16 bg-white">Navigation</nav>
  <section className="h-[calc(100vh-4rem)] flex items-center justify-center">
    <div>Hero Content</div>
  </section>
</div>
```

**배경 이미지와 오버레이:**
```tsx
<section className="relative h-screen flex items-center justify-center bg-cover bg-center"
         style={{backgroundImage: "url('/hero-bg.jpg')"}}>
  {/* 어두운 오버레이 */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* 콘텐츠 */}
  <div className="relative z-10 text-center text-white px-4">
    <h1>Title</h1>
  </div>
</section>
```

**스크롤 인디케이터 추가:**
```tsx
<section className="relative h-screen flex items-center justify-center">
  <div className="text-center">
    <h1>Hero Content</h1>
  </div>

  {/* 하단 스크롤 힌트 */}
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  </div>
</section>
```

**반응형 높이:**
```tsx
{/* 모바일에서는 auto, 데스크톱에서는 전체 화면 */}
<section className="min-h-screen md:h-screen flex items-center justify-center py-12 md:py-0">
  <div className="text-center px-4">
    {/* Content */}
  </div>
</section>
```

---

## Q: Flexbox와 Grid 중 어떤 것을 언제 사용해야 하나요?

### A: 1차원 레이아웃은 Flexbox, 2차원 레이아웃은 Grid를 사용하세요

**Flexbox**와 **Grid**는 각각 다른 목적으로 설계되었으며, 상황에 따라 적절히 선택해야 합니다.

### Flexbox를 사용해야 할 때

```tsx
{/* ✅ 네비게이션 바 */}
<nav className="flex items-center justify-between px-4 py-2">
  <div>Logo</div>
  <div className="flex gap-4">
    <a href="#">Home</a>
    <a href="#">About</a>
  </div>
</nav>

{/* ✅ 버튼 그룹 */}
<div className="flex gap-2">
  <button>Cancel</button>
  <button>Save</button>
</div>

{/* ✅ 중앙 정렬 */}
<div className="flex items-center justify-center h-screen">
  <div>Centered Content</div>
</div>

{/* ✅ 카드 내부 레이아웃 */}
<div className="flex flex-col gap-4">
  <img src="..." />
  <h3>Title</h3>
  <p>Description</p>
  <button>Action</button>
</div>
```

### Grid를 사용해야 할 때

```tsx
{/* ✅ 카드 그리드 */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>

{/* ✅ 대시보드 레이아웃 */}
<div className="grid grid-cols-3 grid-rows-3 gap-4">
  <div className="col-span-2 row-span-2">Main Widget</div>
  <div>Small Widget 1</div>
  <div>Small Widget 2</div>
</div>

{/* ✅ 페이지 레이아웃 */}
<div className="grid grid-cols-[200px_1fr] grid-rows-[60px_1fr_40px] h-screen">
  <header className="col-span-2">Header</header>
  <aside>Sidebar</aside>
  <main>Content</main>
  <footer className="col-span-2">Footer</footer>
</div>

{/* ✅ 갤러리 */}
<div className="grid grid-cols-4 gap-2">
  {images.map(img => <img key={img.id} src={img.url} />)}
</div>
```

### 비교표

| 특성 | Flexbox | Grid |
|------|---------|------|
| **차원** | 1차원 (행 또는 열) | 2차원 (행과 열) |
| **주 용도** | 컴포넌트 내부 정렬 | 페이지 레이아웃 |
| **콘텐츠** | 콘텐츠 중심 | 레이아웃 중심 |
| **적합한 경우** | 방향이 하나, 크기 불규칙 | 행과 열이 모두 필요 |
| **예시** | 네비게이션, 버튼, 카드 내부 | 카드 그리드, 대시보드 |

### 함께 사용하기

실제로는 Flexbox와 Grid를 함께 사용하는 경우가 많습니다:

```tsx
{/* Grid로 카드 배치 + Flex로 카드 내부 구성 */}
<div className="grid grid-cols-3 gap-6">
  <div className="flex flex-col gap-4 p-6 bg-white rounded-lg">
    <img src="..." className="w-full" />
    <h3 className="text-xl font-bold">Title</h3>
    <p className="flex-1 text-gray-600">Description</p>
    <button className="w-full">Button</button>
  </div>
</div>

{/* Grid로 전체 레이아웃 + Flex로 헤더 구성 */}
<div className="grid grid-cols-[250px_1fr] h-screen">
  <aside>Sidebar</aside>
  <div className="flex flex-col">
    <header className="flex items-center justify-between px-6 py-4">
      <h1>Title</h1>
      <nav className="flex gap-4">
        <a>Link 1</a>
        <a>Link 2</a>
      </nav>
    </header>
    <main className="flex-1 overflow-auto">Content</main>
  </div>
</div>
```

### 선택 기준 요약

**Flexbox를 선택하세요:**
- 한 방향으로만 정렬할 때
- 아이템 크기가 콘텐츠에 따라 달라질 때
- 중앙 정렬, 공간 분배가 필요할 때
- 네비게이션, 툴바, 버튼 그룹

**Grid를 선택하세요:**
- 행과 열이 모두 필요할 때
- 복잡한 레이아웃 구조
- 아이템을 정확한 위치에 배치할 때
- 카드 그리드, 갤러리, 대시보드

**둘 다 가능하면:**
- 간단한 경우: Flexbox (더 직관적)
- 복잡한 경우: Grid (더 강력함)

---

## Q: 레이아웃에 의도하지 않은 좌우 여백이 생기는데 왜 그런가요?

### A: Padding이 중첩되어 적용되었기 때문입니다

여러 요소에 `px-*`나 `p-*` 클래스를 중첩해서 사용하면 패딩이 누적되어 예상보다 큰 여백이 생길 수 있습니다.

```tsx
{/* ❌ 문제가 있는 코드 - 패딩 중첩 */}
<main className="px-4">  {/* 좌우 16px 패딩 */}
  <div className="p-4">  {/* 추가로 좌우 16px 패딩 */}
    <h1>Hello World</h1>  {/* 실제로는 좌우 각 32px 여백 */}
  </div>
</main>

{/* ✅ 개선된 코드 - 패딩 한 곳에만 적용 */}
<main>
  <div className="px-4 py-4">  {/* 좌우 16px 패딩만 */}
    <h1>Hello World</h1>
  </div>
</main>
```

### Margin vs Padding 이해하기

| 속성 | Tailwind 클래스 | 설명 | 언제 사용? |
|------|----------------|------|-----------|
| **Margin** | `m-*`, `mx-*`, `my-*`, `mt-*`, `mb-*` | 요소의 **바깥쪽** 여백 | 요소 간 간격을 만들 때 |
| **Padding** | `p-*`, `px-*`, `py-*`, `pt-*`, `pb-*` | 요소의 **안쪽** 여백 | 요소 내부 콘텐츠와 테두리 사이 공간 |

### 시각적 비교

```tsx
{/* Margin - 요소 바깥쪽 여백 */}
<div className="bg-blue-500 p-4">
  <div className="bg-white m-4">  {/* 파란색 배경과 흰색 박스 사이에 공간 */}
    Content
  </div>
</div>

{/* Padding - 요소 안쪽 여백 */}
<div className="bg-blue-500 p-4">  {/* 파란색 영역이 늘어남 */}
  <div className="bg-white">
    Content
  </div>
</div>
```

### 실제 문제 사례

```tsx
{/* 문제: 헤더와 메인의 좌우 정렬이 안 맞음 */}
<div className="min-h-screen bg-zinc-100">
  <header>
    <div className="px-4 py-4">  {/* 좌우 16px */}
      <div className="flex items-center justify-between">
        <div>Logo</div>
        <nav className="flex gap-6">
          <a href="#">Home</a>
        </nav>
      </div>
    </div>
  </header>

  <main className="px-4">  {/* 좌우 16px */}
    <div className="p-4">  {/* 추가로 모든 방향 16px */}
      <h1>Hello World</h1>  {/* 실제로는 좌우 각 32px! */}
    </div>
  </main>
</div>
```

**문제점**: 헤더의 콘텐츠는 좌우 16px 여백, 메인의 콘텐츠는 좌우 32px 여백으로 정렬이 맞지 않습니다.

### 해결 방법

```tsx
{/* ✅ 해결: 일관된 패딩 적용 */}
<div className="min-h-screen bg-zinc-100">
  <header className="px-4 py-4">  {/* 헤더에 직접 패딩 */}
    <div className="flex items-center justify-between">
      <div>Logo</div>
      <nav className="flex gap-6">
        <a href="#">Home</a>
      </nav>
    </div>
  </header>

  <main className="px-4">  {/* 메인에만 패딩 */}
    <div className="py-4">  {/* 세로 패딩만 추가 */}
      <h1>Hello World</h1>  {/* 좌우는 16px로 헤더와 동일 */}
    </div>
  </main>
</div>
```

### 추가 팁

**1. 배경색으로 패딩 확인:**
```tsx
{/* 패딩이 어디에 적용되는지 배경색으로 확인 */}
<div className="px-4 bg-red-200">  {/* 빨간색 영역이 패딩 포함 */}
  <div className="bg-blue-200">
    Content
  </div>
</div>
```

**2. 개발자 도구 활용:**
- 브라우저 개발자 도구(F12)로 요소 검사
- Computed 탭에서 실제 margin/padding 값 확인
- Box Model 다이어그램으로 시각적 확인

**3. 일관된 패딩 패턴 사용:**
```tsx
{/* Container 패턴: 최상위에서만 패딩 적용 */}
<section className="px-4 py-12">
  <div className="max-w-7xl mx-auto">
    {/* 내부에는 패딩 추가하지 않음 */}
    <h2>Title</h2>
    <p>Content</p>
  </div>
</section>
```

**4. Space-y로 수직 간격:**
```tsx
{/* 자식 요소 간 간격은 space-y 사용 (margin 기반) */}
<div className="px-4 space-y-4">
  <div className="bg-white p-4">Card 1</div>
  <div className="bg-white p-4">Card 2</div>
  <div className="bg-white p-4">Card 3</div>
</div>
```

**5. 음수 마진으로 패딩 상쇄:**
```tsx
{/* 부모의 패딩을 자식이 상쇄 (특수한 경우에만) */}
<div className="px-4">
  <div className="-mx-4 bg-blue-500">  {/* 양옆으로 16px 확장 */}
    Full width
  </div>
</div>
```

### 핵심 정리

- **Margin**: 요소 간 간격 (바깥쪽)
- **Padding**: 콘텐츠와 테두리 사이 간격 (안쪽)
- **중첩 주의**: 같은 방향에 여러 패딩/마진 적용 시 누적됨
- **일관성 유지**: 섹션마다 동일한 수평 패딩 사용으로 정렬 맞추기

---

## Q: header와 main 요소가 좌우를 가득 채우지 않고 여백이 생기는 이유가 뭔가요?

### A: 브라우저 기본 스타일의 `body` margin 때문이거나, 요소가 block이 아니기 때문입니다

`<header>`와 `<main>`은 기본적으로 block 요소여서 좌우를 가득 채워야 하지만, 브라우저 기본 스타일이나 CSS 설정 문제로 여백이 생길 수 있습니다.

### 원인 1: 브라우저 기본 `body` margin

대부분의 브라우저는 `body` 태그에 기본 margin(보통 8px)을 적용합니다.

```tsx
{/* 브라우저 기본 스타일 */}
body {
  margin: 8px;  /* 브라우저 기본값 */}
```

**확인 방법:**
- 개발자 도구(F12)로 `body` 요소 검사
- Computed 탭에서 margin 값 확인

**해결 방법 1: Tailwind Preflight 확인**

Tailwind CSS v4는 자동으로 Preflight(CSS Reset)를 적용하여 이 문제를 해결합니다. `index.css`에 Tailwind가 제대로 import되었는지 확인하세요:

```css
/* src/index.css */
@import "tailwindcss";
```

**해결 방법 2: 수동으로 body margin 제거**

```css
/* src/index.css */
@import "tailwindcss";

body {
  margin: 0;
}
```

또는 Tailwind 클래스 사용:

```tsx
// main.tsx 또는 App.tsx
<body className="m-0">
  <App />
</body>
```

### 원인 2: Container나 Wrapper에 max-width가 있는 경우

부모 요소에 `max-w-*` 클래스가 있으면 좌우에 자동으로 여백이 생깁니다.

```tsx
{/* ❌ 문제: max-width로 인한 여백 */}
<div className="max-w-7xl mx-auto">  {/* 1280px 이하로 제한 */}
  <header>Header</header>
  <main>Main</main>
</div>

{/* ✅ 해결: 전체 너비 유지 */}
<div>
  <header>Header</header>
  <main>Main</main>
</div>
```

### 원인 3: 요소가 block이 아닌 경우

드물지만, CSS가 요소를 `inline` 또는 `inline-block`으로 변경한 경우:

```tsx
{/* ❌ 문제: inline 요소는 좌우를 채우지 않음 */}
<header className="inline-block">Header</header>

{/* ✅ 해결: block으로 변경 */}
<header className="block">Header</header>
```

### 원인 4: padding과 margin의 착각

실제로는 좌우를 가득 채우지만, 내부 콘텐츠에 padding이 있어서 여백처럼 보이는 경우:

```tsx
{/* header/main은 전체 너비지만, 콘텐츠에 패딩이 있음 */}
<header className="bg-white">  {/* 실제로는 전체 너비 */}
  <div className="px-4">  {/* 이 패딩 때문에 여백처럼 보임 */}
    <nav>Navigation</nav>
  </div>
</header>
```

**확인 방법:**
```tsx
{/* 배경색을 추가해서 실제 요소의 너비 확인 */}
<header className="bg-red-500">
  <div className="px-4 bg-blue-500">
    {/* 빨간색이 화면 끝까지 가면 header는 전체 너비임 */}
    <nav>Navigation</nav>
  </div>
</header>
```

### 완전한 해결 예제

```tsx
{/* ✅ 전체 너비를 차지하는 레이아웃 */}
export default function FullWidthLayout() {
  return (
    <div className="min-h-screen">
      {/* Header - 배경은 전체 너비, 콘텐츠는 제한 */}
      <header className="bg-white border-b">  {/* 전체 너비 */}
        <div className="max-w-7xl mx-auto px-4 py-4">  {/* 콘텐츠만 제한 */}
          <nav className="flex items-center justify-between">
            <div>Logo</div>
            <div className="flex gap-6">
              <a href="#">Home</a>
              <a href="#">About</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Main - 배경은 전체 너비, 콘텐츠는 제한 */}
      <main className="bg-gray-50">  {/* 전체 너비 */}
        <div className="max-w-7xl mx-auto px-4 py-12">  {/* 콘텐츠만 제한 */}
          <h1>Content</h1>
        </div>
      </main>
    </div>
  );
}
```

### 추가 팁

**1. 전체 너비 배경 패턴:**
```tsx
{/* 배경색/이미지는 전체 너비, 콘텐츠는 중앙 정렬 */}
<section className="bg-blue-600 py-20">  {/* 전체 너비 배경 */}
  <div className="max-w-7xl mx-auto px-4">  {/* 제한된 콘텐츠 */}
    <h2>Title</h2>
  </div>
</section>
```

**2. 개발자 도구로 디버깅:**
```
1. F12로 개발자 도구 열기
2. Elements 탭에서 header/main 요소 선택
3. Computed 탭에서 실제 width 확인
4. Box Model 다이어그램으로 margin/padding 확인
```

**3. 배경색으로 시각화:**
```tsx
{/* 각 요소에 다른 배경색을 주어 실제 크기 확인 */}
<div className="bg-red-100">  {/* 최외곽 */}
  <header className="bg-blue-100">  {/* header 실제 크기 */}
    <div className="px-4 bg-green-100">  {/* 패딩 영역 */}
      Content
    </div>
  </header>
</div>
```

**4. width 클래스 명시적 사용:**
```tsx
{/* 확실하게 전체 너비 지정 */}
<header className="w-full bg-white">
  <div className="max-w-7xl mx-auto px-4">
    Content
  </div>
</header>
```

**5. CSS Grid를 사용한 전체 레이아웃:**
```tsx
{/* Grid로 전체 레이아웃 구성 */}
<div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
  <header className="bg-white px-4 py-4">
    Header
  </header>
  <main className="bg-gray-50 px-4">
    Main Content
  </main>
  <footer className="bg-gray-900 text-white px-4 py-8">
    Footer
  </footer>
</div>
```

### 핵심 정리

**문제 진단 체크리스트:**
1. ✅ `body`에 기본 margin이 있는가? → Tailwind Preflight 확인
2. ✅ 부모 요소에 `max-w-*`가 있는가? → 구조 재확인
3. ✅ 요소가 `block`인가? → `display` 속성 확인
4. ✅ 실제 여백인가, padding인가? → 배경색으로 시각화

**기본 원칙:**
- `<header>`, `<main>`, `<footer>` 등은 기본적으로 block 요소 (전체 너비)
- 배경은 전체 너비로, 콘텐츠는 `max-w-*`로 제한하는 패턴 사용
- Tailwind Preflight가 브라우저 기본 스타일을 리셋함
- 의심스러우면 `w-full` 클래스로 명시적 지정

---

## Q: `sticky top-0 z-50` 세 가지 클래스가 어떻게 함께 작동하여 sticky header를 만드나요?

### A: 각 클래스가 고유한 역할을 수행하며, 세 가지가 조합되어 완벽한 sticky header를 만듭니다

`sticky top-0 z-50`는 sticky header의 **필수 3요소**입니다. 각각이 없으면 제대로 작동하지 않습니다.

```tsx
<header className="sticky top-0 z-50 bg-white border-b">
  <nav>Navigation</nav>
</header>
```

### 각 클래스의 역할

| 클래스 | CSS 속성 | 역할 | 없으면 어떻게 되나? |
|--------|----------|------|-------------------|
| `sticky` | `position: sticky` | **스크롤 시 고정** 동작 활성화 | 일반 요소처럼 스크롤과 함께 사라짐 |
| `top-0` | `top: 0px` | **어디에** 고정될지 위치 지정 | 고정되지 않음 (위치 미지정) |
| `z-50` | `z-index: 50` | **다른 요소 위에** 표시 | 콘텐츠에 가려질 수 있음 |

### 1. `sticky` - 고정 동작 활성화

`position: sticky`는 **하이브리드 포지셔닝**입니다:

- **평소**: `relative`처럼 동작 (문서 흐름 안에 있음)
- **스크롤 시**: 지정된 위치에 도달하면 `fixed`처럼 고정됨

```tsx
{/* ❌ sticky 없이 */}
<header className="top-0 z-50">  {/* 일반 요소로 스크롤과 함께 사라짐 */}
  <nav>Navigation</nav>
</header>

{/* ✅ sticky 있음 */}
<header className="sticky top-0 z-50">  {/* 스크롤해도 화면 상단에 고정 */}
  <nav>Navigation</nav>
</header>
```

**시각적 설명:**
```
스크롤 전:
┌─────────────────┐
│ [Header]        │ ← 원래 위치 (상단)
├─────────────────┤
│ Content         │
│ Content         │
└─────────────────┘

스크롤 중:
┌─────────────────┐
│ [Header] ← 고정! │ ← top: 0 위치에 고정됨
├─────────────────┤
│ Content         │ ← 콘텐츠만 스크롤됨
│ Content         │
└─────────────────┘
```

### 2. `top-0` - 고정 위치 지정

`top: 0`은 sticky가 **어디에** 고정될지를 결정합니다.

```tsx
{/* 상단에 고정 */}
<header className="sticky top-0">
  {/* 뷰포트 최상단(0px)에 고정됨 */}
</header>

{/* 상단에서 64px 떨어진 곳에 고정 */}
<header className="sticky top-16">
  {/* 뷰포트 상단에서 64px 아래에 고정됨 */}
</header>

{/* ❌ top 값 없이 sticky만 사용 */}
<header className="sticky">
  {/* 고정 위치가 지정되지 않아 작동하지 않음! */}
</header>
```

**다양한 `top` 값:**
```tsx
{/* 네비게이션 바 아래에 고정되는 서브 헤더 */}
<nav className="sticky top-0 z-50 h-16">Main Nav</nav>
<div className="sticky top-16 z-40">  {/* 네비게이션(64px) 아래에 고정 */}
  Sub Header
</div>
```

### 3. `z-50` - 레이어 순서 제어

`z-index`는 요소들의 **쌓임 순서**를 결정합니다. 숫자가 클수록 위에 표시됩니다.

```tsx
{/* ❌ z-index 없이 */}
<header className="sticky top-0 bg-white">
  <nav>Navigation</nav>
</header>
<main>
  <div className="relative z-10">  {/* 이 요소가 헤더 위에 올라옴! */}
    Content
  </div>
</main>

{/* ✅ z-index 있음 */}
<header className="sticky top-0 z-50 bg-white">  {/* z-50으로 최상위 */}
  <nav>Navigation</nav>
</header>
<main>
  <div className="relative z-10">  {/* z-10이므로 헤더 아래에 */}
    Content
  </div>
</main>
```

**z-index 레이어 가이드:**
```
z-50  ← Sticky Header, Navigation (최상위)
z-40  ← Modal Content
z-30  ← Modal Backdrop
z-20  ← Dropdown, Tooltip
z-10  ← Normal Overlays
z-0   ← Regular Content (기본값)
```

### 세 가지가 함께 작동하는 방식

```tsx
export default function StickyHeaderDemo() {
  return (
    <div className="min-h-screen">
      {/*
        1. sticky: 스크롤 시 고정 동작 활성화
        2. top-0: 뷰포트 최상단에 고정
        3. z-50: 다른 모든 콘텐츠 위에 표시
        4. bg-white: 뒤 콘텐츠가 비치지 않도록 불투명 배경
      */}
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold">Logo</div>
            <div className="flex gap-6">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </div>
          </nav>
        </div>
      </header>

      <main className="px-4">
        <div className="h-[200vh] py-8">
          <h1 className="text-4xl font-bold">Scroll Down!</h1>
          <p className="mt-4">헤더가 상단에 고정되는 것을 확인하세요.</p>
        </div>
      </main>
    </div>
  );
}
```

### 각 클래스가 빠졌을 때의 문제

```tsx
{/* ❌ Case 1: sticky 없음 - 고정되지 않고 스크롤과 함께 사라짐 */}
<header className="top-0 z-50 bg-white">
  <nav>Navigation</nav>
</header>

{/* ❌ Case 2: top-0 없음 - 고정 위치가 지정되지 않아 작동 안 함 */}
<header className="sticky z-50 bg-white">
  <nav>Navigation</nav>
</header>

{/* ❌ Case 3: z-50 없음 - 다른 요소에 가려질 수 있음 */}
<header className="sticky top-0 bg-white">
  <nav>Navigation</nav>
</header>

{/* ✅ 완벽: 세 가지 모두 있음 */}
<header className="sticky top-0 z-50 bg-white">
  <nav>Navigation</nav>
</header>
```

### 추가 팁

**1. 배경색 필수:**
```tsx
{/* ❌ 배경색 없으면 뒤 콘텐츠가 비침 */}
<header className="sticky top-0 z-50">
  <nav>Navigation</nav>
</header>

{/* ✅ 불투명 배경 */}
<header className="sticky top-0 z-50 bg-white">
  <nav>Navigation</nav>
</header>

{/* ✅ 반투명 배경 + blur */}
<header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm">
  <nav>Navigation</nav>
</header>
```

**2. 여러 sticky 요소가 있을 때:**
```tsx
{/* 메인 헤더 */}
<header className="sticky top-0 z-50 bg-white h-16">
  Main Navigation
</header>

{/* 서브 헤더 - 메인 헤더 아래에 고정 */}
<div className="sticky top-16 z-40 bg-gray-100 h-12">
  Sub Navigation (메인 헤더 64px 아래)
</div>

{/* 사이드바 - 헤더들 아래 레이어 */}
<aside className="sticky top-20 z-30">
  Sidebar
</aside>
```

**3. 모바일 반응형:**
```tsx
{/* 모바일에서는 sticky 비활성화, 데스크톱에서만 활성화 */}
<header className="md:sticky md:top-0 z-50 bg-white">
  <nav>Navigation</nav>
</header>

{/* 모바일에서 다른 높이 */}
<header className="sticky top-0 z-50 bg-white h-14 md:h-16">
  <nav>Navigation</nav>
</header>
```

**4. 그림자로 고정 상태 강조:**
```tsx
{/* 스크롤 시 그림자 추가로 시각적 구분 */}
<header className="sticky top-0 z-50 bg-white border-b shadow-sm">
  <nav>Navigation</nav>
</header>
```

**5. 부모 컨테이너 주의사항:**
```tsx
{/* ❌ 부모에 overflow: hidden이 있으면 sticky 작동 안 함 */}
<div className="overflow-hidden">
  <header className="sticky top-0 z-50">  {/* 작동하지 않음! */}
    Navigation
  </header>
</div>

{/* ✅ overflow 제거 또는 다른 방법 사용 */}
<div>
  <header className="sticky top-0 z-50">  {/* 정상 작동 */}
    Navigation
  </header>
</div>
```

### 핵심 정리

**필수 3요소:**
1. **`sticky`**: 스크롤 시 고정 동작 활성화
2. **`top-0`**: 고정될 위치 지정 (필수!)
3. **`z-50`**: 다른 요소 위에 표시

**추가 권장사항:**
- 배경색 필수: `bg-white` 또는 `bg-white/90 backdrop-blur-sm`
- 시각적 구분: `border-b` 또는 `shadow-sm`
- 부모 요소에 `overflow: hidden` 금지

**작동 원리:**
```
sticky    → "스크롤 시 고정해줘"
top-0     → "뷰포트 상단(0px)에 고정해줘"
z-50      → "다른 요소들 위에 표시해줘"
bg-white  → "뒤 콘텐츠 안 보이게 불투명하게"
```

이 네 가지 조합이 **완벽한 sticky header**를 만듭니다!

---

## Q: Hero Section에 `relative h-screen`을 적용하는 이유가 뭔가요?

### A: `h-screen`은 전체 화면 높이를 차지하고, `relative`는 absolute 자식 요소들의 위치 기준점이 되기 때문입니다

Hero Section에서 `relative h-screen`은 **필수 조합**입니다. 각각이 중요한 역할을 하며, 함께 사용될 때 완벽한 Hero Section을 만듭니다.

```tsx
<section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600">
  {/* 메인 콘텐츠 */}
  <div className="relative z-10 text-center text-white">
    <h1>Title</h1>
  </div>

  {/* 스크롤 인디케이터 - absolute 위치 */}
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
    <div>Scroll</div>
  </div>
</section>
```

### 각 클래스의 역할

| 클래스 | CSS 속성 | 역할 | 없으면? |
|--------|----------|------|---------|
| `h-screen` | `height: 100vh` | 화면 전체 높이 차지 | Hero가 작게 보임 |
| `relative` | `position: relative` | absolute 자식의 위치 기준점 | absolute 요소가 잘못된 위치에 표시됨 |

### 1. `h-screen` - 전체 화면 높이

Hero Section은 방문자가 가장 먼저 보는 화면이므로 **화면 전체**를 차지해야 임팩트가 큽니다.

```tsx
{/* ❌ h-screen 없이 - 콘텐츠만큼만 높이 차지 */}
<section className="relative flex items-center justify-center bg-blue-600">
  <div className="text-white">
    <h1>Title</h1>  {/* 콘텐츠 크기만큼만 높이 차지 */}
  </div>
</section>

{/* ✅ h-screen 있음 - 화면 전체 높이 */}
<section className="relative h-screen flex items-center justify-center bg-blue-600">
  <div className="text-white">
    <h1>Title</h1>  {/* 화면 전체를 차지하며 중앙 정렬 */}
  </div>
</section>
```

**시각적 비교:**
```
h-screen 없이:
┌─────────────────┐
│ Title           │ ← 콘텐츠만큼만
│                 │
├─────────────────┤
│ (빈 공간)       │
│                 │
└─────────────────┘

h-screen 있음:
┌─────────────────┐
│                 │
│     Title       │ ← 화면 전체를 차지
│                 │
│                 │
└─────────────────┘
```

### 2. `relative` - Absolute 요소의 기준점

Hero Section은 보통 여러 레이어로 구성됩니다:
- 배경 이미지/그라디언트
- 어두운 오버레이 (`absolute`)
- 메인 콘텐츠 (중앙 정렬)
- 스크롤 인디케이터 (`absolute`)
- 장식 요소들 (`absolute`)

`relative`가 없으면 `absolute` 요소들이 **부모가 아닌 전체 페이지**를 기준으로 위치가 결정됩니다.

```tsx
{/* ❌ relative 없이 - absolute 요소가 잘못된 위치에 */}
<section className="h-screen flex items-center justify-center bg-blue-600">
  <div>Content</div>
  <div className="absolute bottom-8">
    {/* 이 요소는 section이 아니라 body를 기준으로 위치함! */}
    Scroll Indicator
  </div>
</section>

{/* ✅ relative 있음 - absolute 요소가 section 기준으로 위치 */}
<section className="relative h-screen flex items-center justify-center bg-blue-600">
  <div>Content</div>
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
    {/* 이 요소는 section 하단 중앙에 정확히 위치함 */}
    Scroll Indicator
  </div>
</section>
```

### 실전 예제: 완전한 Hero Section

```tsx
export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600">

      {/* 배경 오버레이 - absolute */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* 배경 패턴 - absolute */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[url('/pattern.svg')] bg-repeat"></div>
      </div>

      {/* 메인 콘텐츠 - relative로 레이어 순서 제어 */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <h1 className="text-6xl font-bold mb-6 leading-tight">
          Beautiful Landing Page
        </h1>
        <p className="text-xl mb-8 text-blue-100">
          Create stunning designs with Tailwind CSS
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50">
            Get Started
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10">
            Learn More
          </button>
        </div>
      </div>

      {/* 스크롤 인디케이터 - absolute */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>

    </section>
  );
}
```

### Position 기준점 이해하기

```tsx
{/* relative가 없을 때 */}
<section className="h-screen">  {/* position: static (기본값) */}
  <div className="absolute bottom-0">
    {/* ❌ 가장 가까운 positioned 조상을 찾음
         → section은 static이므로 건너뜀
         → body를 기준으로 위치함! */}
  </div>
</section>

{/* relative가 있을 때 */}
<section className="relative h-screen">  {/* position: relative */}
  <div className="absolute bottom-0">
    {/* ✅ 가장 가까운 positioned 조상을 찾음
         → section이 relative이므로 여기가 기준!
         → section 하단에 정확히 위치함 */}
  </div>
</section>
```

### 레이어 구조 시각화

```tsx
<section className="relative h-screen">
  {/* 레이어 1 (맨 아래): 배경 */}
  <div className="absolute inset-0 bg-image"></div>

  {/* 레이어 2: 오버레이 */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* 레이어 3 (맨 위): 콘텐츠 */}
  <div className="relative z-10 text-white">
    Content
  </div>
</section>
```

**레이어 순서:**
```
┌─────────────────┐
│ z-10: Content   │ ← 맨 위
│ bg-black/50     │ ← 중간 (오버레이)
│ bg-image        │ ← 맨 아래 (배경)
└─────────────────┘
```

### 추가 팁

**1. 배경 이미지 패턴:**
```tsx
{/* 배경 이미지 + 어두운 오버레이 */}
<section
  className="relative h-screen flex items-center justify-center bg-cover bg-center"
  style={{backgroundImage: "url('/hero-bg.jpg')"}}
>
  {/* 어두운 오버레이로 텍스트 가독성 향상 */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* 콘텐츠는 오버레이 위에 */}
  <div className="relative z-10 text-white">
    <h1>Title</h1>
  </div>
</section>
```

**2. 비디오 배경:**
```tsx
<section className="relative h-screen overflow-hidden">
  {/* 배경 비디오 */}
  <video
    className="absolute inset-0 w-full h-full object-cover"
    autoPlay
    loop
    muted
  >
    <source src="/hero-video.mp4" type="video/mp4" />
  </video>

  {/* 오버레이 */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>

  {/* 콘텐츠 */}
  <div className="relative z-10 flex items-center justify-center h-full text-white">
    <h1>Title</h1>
  </div>
</section>
```

**3. 반응형 높이:**
```tsx
{/* 모바일에서는 min-h-screen, 데스크톱에서는 h-screen */}
<section className="relative min-h-screen md:h-screen flex items-center justify-center">
  <div className="relative z-10 text-center py-12 md:py-0">
    <h1 className="text-4xl md:text-6xl">Title</h1>
  </div>
</section>
```

**4. 여러 Hero Section:**
```tsx
{/* 첫 번째 Hero - 전체 화면 */}
<section className="relative h-screen">
  <h1>Hero 1</h1>
</section>

{/* 두 번째 Hero - 작은 크기 */}
<section className="relative h-[80vh]">  {/* 화면의 80% */}
  <h1>Hero 2</h1>
</section>

{/* 세 번째 Hero - 고정 높이 */}
<section className="relative h-[600px]">  {/* 600px 고정 */}
  <h1>Hero 3</h1>
</section>
```

**5. inset-0 단축 속성:**
```tsx
{/* absolute로 전체 영역 덮기 */}
<div className="absolute inset-0">
  {/* inset-0 = top-0 right-0 bottom-0 left-0 */}
  {/* section 전체를 덮음 */}
</div>

{/* 동일한 의미 (verbose) */}
<div className="absolute top-0 right-0 bottom-0 left-0">
  {/* section 전체를 덮음 */}
</div>
```

**6. 네비게이션과 함께 사용:**
```tsx
<div>
  {/* Sticky Navigation - 64px 높이 */}
  <nav className="sticky top-0 z-50 h-16 bg-white">
    Navigation
  </nav>

  {/* Hero Section - 네비게이션 높이 제외 */}
  <section className="relative h-[calc(100vh-4rem)] flex items-center justify-center">
    {/* 100vh - 64px = 화면 높이 - 네비게이션 높이 */}
    <div className="relative z-10">
      <h1>Hero Content</h1>
    </div>
  </section>
</div>
```

### 핵심 정리

**필수 조합:**
- **`h-screen`**: 화면 전체 높이 (100vh)
- **`relative`**: absolute 자식 요소들의 위치 기준점

**작동 원리:**
```
h-screen  → 화면 전체 높이 차지
relative  → absolute 자식들의 기준점 제공
flex items-center justify-center → 메인 콘텐츠 중앙 정렬
```

**레이어 구조:**
1. `absolute inset-0` → 배경 레이어 (맨 아래)
2. `absolute inset-0 bg-black/50` → 오버레이 (중간)
3. `relative z-10` → 메인 콘텐츠 (맨 위)
4. `absolute bottom-8` → 스크롤 인디케이터 등

**기억할 점:**
- `relative` 없이 `absolute` 사용하면 → body 기준으로 위치함
- `h-screen` 없이 Hero 만들면 → 작고 임팩트 없음
- `inset-0`는 전체 영역을 덮는 단축 속성
- 반응형에서는 `min-h-screen`이나 `h-[80vh]` 고려

---

## Q: Grid 콘텐츠가 `h-screen`을 넘어가면 스크롤 시 배경이 잘려서 흰색이 나오는데 어떻게 해결하나요?

### A: `h-screen` 대신 `min-h-screen`을 사용하세요

`h-screen`은 **정확히** 100vh로 높이를 고정하므로, 콘텐츠가 많아지면 section을 벗어나 배경색이 적용되지 않습니다. `min-h-screen`을 사용하면 **최소** 100vh를 유지하면서도 콘텐츠가 많을 때 자동으로 늘어납니다.

### 문제 상황

```tsx
{/* ❌ 문제: h-screen으로 고정 높이 */}
<section className="py-20 px-4 bg-zinc-200 h-screen">
  <div className="text-center mb-8">
    <h2>왜 Tailwind CSS인가?</h2>
    <p>개발자들이 선택하는 이유</p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {items.map((item) => (
      <div key={item.id} className="bg-white p-8 rounded-xl">
        {/* 카드 콘텐츠 */}
      </div>
    ))}
  </div>
</section>
```

**문제점:**
```
┌─────────────────────┐
│ bg-zinc-200         │
│ [Grid Cards]        │
│ [Grid Cards]        │
│ [Grid Cards]        │ ← h-screen (100vh) 끝
├─────────────────────┤
│ 흰색 배경!          │ ← section 밖이므로 배경 없음
│ [Grid Cards]        │
│ [More Cards]        │
└─────────────────────┘
```

### 해결 방법 1: `min-h-screen` 사용 (권장)

```tsx
{/* ✅ 해결: min-h-screen으로 변경 */}
<section className="py-20 px-4 bg-zinc-200 min-h-screen">
  <div className="text-center mb-8">
    <h2 className="text-4xl font-bold text-gray-900">
      왜 Tailwind CSS인가?
    </h2>
    <p className="text-xl text-gray-600">
      개발자들이 선택하는 이유
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {items.map((item, index) => (
      <div
        key={index}
        className="flex flex-col gap-2 items-center justify-center bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center"
      >
        <div className="text-4xl">{item.icon}</div>
        <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
        <p className="text-gray-600">{item.desc}</p>
      </div>
    ))}
  </div>
</section>
```

**결과:**
```
┌─────────────────────┐
│ bg-zinc-200         │
│ [Grid Cards]        │
│ [Grid Cards]        │
│ [Grid Cards]        │ ← 최소 100vh
│ bg-zinc-200         │ ← 콘텐츠만큼 자동 확장!
│ [Grid Cards]        │
│ [More Cards]        │
└─────────────────────┘
```

### `h-screen` vs `min-h-screen` 비교

| 클래스 | CSS 속성 | 동작 | 언제 사용? |
|--------|----------|------|-----------|
| `h-screen` | `height: 100vh` | **정확히** 100vh 고정 | Hero Section, 고정 높이 필요할 때 |
| `min-h-screen` | `min-height: 100vh` | **최소** 100vh, 콘텐츠에 따라 확장 | Grid, 동적 콘텐츠 섹션 |

### 시각적 비교

```tsx
{/* h-screen - 고정 높이 */}
<div className="h-screen bg-blue-500">
  {/*
    높이 100vh 고정
    콘텐츠가 많으면 overflow
    콘텐츠가 적으면 빈 공간
  */}
</div>

{/* min-h-screen - 최소 높이 */}
<div className="min-h-screen bg-blue-500">
  {/*
    최소 100vh 보장
    콘텐츠가 많으면 자동 확장
    콘텐츠가 적으면 100vh 유지
  */}
</div>
```

### 해결 방법 2: `h-screen` 제거

콘텐츠 양에 따라 높이를 결정하고, padding으로만 여백 조절:

```tsx
{/* padding으로만 높이 조절 */}
<section className="py-20 px-4 bg-zinc-200">
  <div className="text-center mb-8">
    <h2>Title</h2>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {/* Grid items */}
  </div>
</section>
```

### 해결 방법 3: Container로 감싸기

전체 페이지에 배경색을 적용:

```tsx
{/* 최상위 wrapper에 배경 */}
<div className="bg-zinc-200">
  <section className="py-20 px-4 h-screen">
    {/* Grid content */}
  </section>
  {/* 다른 섹션들도 같은 배경 공유 */}
</div>
```

### 실전 사례별 선택 가이드

#### Case 1: Hero Section
```tsx
{/* ✅ h-screen 사용 - 정확히 화면 크기 */}
<section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600">
  <div className="text-center text-white">
    <h1>Hero Title</h1>
  </div>
</section>
```

#### Case 2: 카드 그리드 Section
```tsx
{/* ✅ min-h-screen 사용 - 콘텐츠에 따라 확장 */}
<section className="py-20 px-4 bg-gray-50 min-h-screen">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* 카드들 */}
  </div>
</section>
```

#### Case 3: 일반 Content Section
```tsx
{/* ✅ 높이 지정 없음 - 콘텐츠 크기만큼 */}
<section className="py-20 px-4 bg-white">
  <div className="max-w-7xl mx-auto">
    <h2>Content Section</h2>
    <p>Some content...</p>
  </div>
</section>
```

#### Case 4: Sidebar Layout
```tsx
{/* ✅ h-screen 사용 - 사이드바는 항상 전체 높이 */}
<div className="flex h-screen">
  <aside className="w-64 bg-gray-900">
    Sidebar
  </aside>
  <main className="flex-1 overflow-auto">
    {/* 메인 콘텐츠는 스크롤 */}
  </main>
</div>
```

### 추가 팁

**1. overflow 제어:**
```tsx
{/* h-screen + overflow-auto로 스크롤 영역 만들기 */}
<section className="h-screen overflow-auto bg-zinc-200 py-20 px-4">
  <div className="grid grid-cols-3 gap-4">
    {/* section 내부에서만 스크롤 */}
  </div>
</section>
```

**2. 반응형 높이:**
```tsx
{/* 모바일은 콘텐츠만큼, 데스크톱은 최소 100vh */}
<section className="py-20 px-4 bg-zinc-200 md:min-h-screen">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {/* Grid content */}
  </div>
</section>
```

**3. 여러 섹션의 배경 통일:**
```tsx
{/* 각 섹션마다 min-h-screen */}
<div>
  <section className="min-h-screen bg-gray-50 py-20">
    Section 1
  </section>
  <section className="min-h-screen bg-white py-20">
    Section 2
  </section>
  <section className="min-h-screen bg-gray-50 py-20">
    Section 3
  </section>
</div>
```

**4. Container 최대 너비와 함께:**
```tsx
<section className="min-h-screen bg-gray-50 py-20 px-4">
  <div className="max-w-7xl mx-auto">
    {/* 콘텐츠는 제한된 너비, 배경은 전체 너비 */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Grid items */}
    </div>
  </div>
</section>
```

**5. 높이 계산식 사용:**
```tsx
{/* 네비게이션 높이 제외하고 나머지 화면 */}
<nav className="h-16 bg-white sticky top-0">Navigation</nav>
<section className="min-h-[calc(100vh-4rem)] bg-zinc-200 py-20">
  {/* 100vh - 64px (네비게이션 높이) */}
  <div className="grid grid-cols-3 gap-4">
    {/* Grid content */}
  </div>
</section>
```

### 핵심 정리

**문제:**
- `h-screen`은 정확히 100vh로 고정
- 콘텐츠가 많으면 section 밖으로 넘침
- 넘친 부분은 배경색이 없어서 흰색으로 보임

**해결:**
```tsx
{/* ❌ 고정 높이 */}
<section className="h-screen bg-zinc-200">

{/* ✅ 최소 높이 (권장) */}
<section className="min-h-screen bg-zinc-200">
```

**선택 가이드:**
- **Hero Section**: `h-screen` (정확한 화면 크기)
- **Grid/List Section**: `min-h-screen` (콘텐츠에 따라 확장)
- **Content Section**: 높이 지정 없음 (콘텐츠 크기만큼)
- **Sidebar**: `h-screen` + `overflow-auto` (고정 높이 + 스크롤)

**기억할 점:**
- `h-*`는 고정 높이 (fixed height)
- `min-h-*`는 최소 높이 (minimum height, can grow)
- `max-h-*`는 최대 높이 (maximum height, can shrink)
- 동적 콘텐츠에는 대부분 `min-h-screen` 사용이 적절

---

## Q: Split Screen 레이아웃에서 `flex-col`일 때 `flex-1`이 높이를 차지하지 않는데 왜 그런가요?

### A: 부모의 높이가 명확하지 않거나, Tailwind에 없는 커스텀 클래스(`flex-2` 등)를 사용했기 때문입니다

`flex-row`(가로 배치)일 때는 `flex-1`이 **너비**를 분배하지만, `flex-col`(세로 배치)일 때는 `flex-1`이 **높이**를 분배합니다. 높이 분배가 제대로 작동하려면 부모의 높이가 명확해야 합니다.

### 문제 상황

```tsx
{/* ❌ 문제가 있는 코드 */}
<div className="min-h-screen flex flex-col md:flex-row">
  {/* Left Side */}
  <div className="flex-2 bg-blue-600 text-white flex items-center justify-center p-12">
    <div className="max-w-md">
      <h1>Welcome Back</h1>
      <p>Login to continue</p>
    </div>
  </div>

  {/* Right Side */}
  <div className="flex flex-1 flex-col bg-white justify-center p-12">
    <h2>Login</h2>
    <form className="w-full space-y-6">
      {/* Form fields */}
    </form>
  </div>
</div>
```

**문제점:**
1. **`flex-2`는 Tailwind에 기본적으로 없는 클래스입니다!** → 적용되지 않음
2. `min-h-screen`이 있지만, 콘텐츠가 적으면 정확히 100vh만 차지
3. Right Side의 `flex flex-1 flex-col`에서 첫 번째 `flex`가 불필요 (혼란 유발)

### Tailwind의 Flex 클래스

| 클래스 | CSS 속성 | 설명 |
|--------|----------|------|
| `flex-1` | `flex: 1 1 0%` | grow 1, shrink 1, basis 0% |
| `flex-auto` | `flex: 1 1 auto` | grow 1, shrink 1, basis auto |
| `flex-initial` | `flex: 0 1 auto` | grow 0, shrink 1, basis auto |
| `flex-none` | `flex: none` | grow 0, shrink 0 |
| ~~`flex-2`~~ | ❌ **없음** | Tailwind 기본 제공 안 함 |

### 해결 방법 1: `h-screen` 사용 (권장)

부모에 명확한 높이를 주고, 동일한 비율로 분할:

```tsx
{/* ✅ 해결: h-screen으로 명확한 높이 지정 */}
<div className="h-screen flex flex-col md:flex-row">
  {/* Left Side - 동일 비율 */}
  <div className="flex-1 bg-blue-600 text-white flex items-center justify-center p-12">
    <div className="max-w-md">
      <h1 className="text-4xl font-bold mb-6">Welcome Back</h1>
      <p className="text-xl text-blue-100 leading-relaxed">
        Login to continue
      </p>
    </div>
  </div>

  {/* Right Side - 동일 비율 */}
  <div className="flex-1 bg-white flex items-center justify-center p-12">
    <div className="w-full max-w-md">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Login</h2>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            placeholder="••••••••"
          />
        </div>
        <button className="w-full px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
          Login
        </button>
      </form>
    </div>
  </div>
</div>
```

### 해결 방법 2: 커스텀 비율 (2:1)

한쪽을 더 크게 만들고 싶다면 `grow` 값을 커스터마이징:

```tsx
{/* Left가 Right의 2배 크기 */}
<div className="h-screen flex flex-col md:flex-row">
  {/* Left Side - 2배 */}
  <div className="grow-[2] bg-blue-600">
    Content
  </div>

  {/* Right Side - 1배 */}
  <div className="flex-1 bg-white">
    Content
  </div>
</div>
```

또는 `tailwind.config.js`에 커스텀 클래스 추가:

```js
// tailwind.config.js
export default {
  theme: {
    extend: {
      flex: {
        '2': '2 1 0%',
        '3': '3 1 0%',
      }
    }
  }
}
```

### `flex-row` vs `flex-col`에서 flex-1의 차이

```tsx
{/* flex-row: flex-1이 너비를 분배 */}
<div className="flex flex-row h-screen">
  <div className="flex-1 bg-blue-500">  {/* 너비 50% */}
    Left
  </div>
  <div className="flex-1 bg-green-500">  {/* 너비 50% */}
    Right
  </div>
</div>

{/* flex-col: flex-1이 높이를 분배 */}
<div className="flex flex-col h-screen">
  <div className="flex-1 bg-blue-500">  {/* 높이 50% */}
    Top
  </div>
  <div className="flex-1 bg-green-500">  {/* 높이 50% */}
    Bottom
  </div>
</div>
```

**핵심 차이:**
```
flex-row (가로):
├─────────┬─────────┤
│ flex-1  │ flex-1  │ ← 너비 분배
│ (50%)   │ (50%)   │
└─────────┴─────────┘

flex-col (세로):
┌─────────────────┐
│ flex-1 (50%)    │ ← 높이 분배
├─────────────────┤
│ flex-1 (50%)    │
└─────────────────┘
```

### `min-h-screen` vs `h-screen` 차이

```tsx
{/* ❌ min-h-screen: 콘텐츠가 적으면 정확히 100vh */}
<div className="min-h-screen flex flex-col">
  <div className="flex-1">Top</div>  {/* 콘텐츠만큼만 */}
  <div className="flex-1">Bottom</div>  {/* 콘텐츠만큼만 */}
  {/* flex-1이 제대로 작동 안 할 수 있음 */}
</div>

{/* ✅ h-screen: 항상 정확히 100vh */}
<div className="h-screen flex flex-col">
  <div className="flex-1">Top</div>  {/* 50vh */}
  <div className="flex-1">Bottom</div>  {/* 50vh */}
  {/* flex-1이 정확히 작동 */}
</div>
```

### 반응형 Split Screen 완전한 예제

```tsx
export default function SplitScreen() {
  return (
    {/* 모바일: 세로, 데스크톱: 가로 */}
    <div className="min-h-screen md:h-screen flex flex-col md:flex-row">

      {/* Left Side */}
      <div className="flex-1 bg-blue-600 text-white flex items-center justify-center p-12">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold mb-6">
            Welcome Back
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            Login to continue
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 bg-white flex items-center justify-center p-12">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Login
          </h2>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="••••••••"
              />
            </div>

            <button className="w-full px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Login
            </button>
          </form>
        </div>
      </div>

    </div>
  );
}
```

### 추가 팁

**1. 불필요한 flex 제거:**
```tsx
{/* ❌ 혼란스러운 코드 */}
<div className="flex flex-1 flex-col">
  {/* flex와 flex-col이 중복, flex-1은 부모에게 적용 */}
</div>

{/* ✅ 명확한 코드 */}
<div className="flex-1 flex flex-col">
  {/* flex-1은 부모의 flex에 대한 grow 비율 */}
  {/* flex flex-col은 자식들을 세로 배치 */}
</div>

{/* ✅ 더 명확한 코드 (중앙 정렬만 필요한 경우) */}
<div className="flex-1 flex items-center justify-center">
  {/* flex-1: 부모 기준 grow 비율 */}
  {/* flex items-center justify-center: 내부 콘텐츠 중앙 */}
</div>
```

**2. 커스텀 비율:**
```tsx
{/* 왼쪽 40%, 오른쪽 60% */}
<div className="h-screen flex">
  <div className="w-2/5 bg-blue-600">Left (40%)</div>
  <div className="w-3/5 bg-white">Right (60%)</div>
</div>

{/* 또는 flex-grow 사용 */}
<div className="h-screen flex">
  <div className="grow-[2] bg-blue-600">Left (40%)</div>
  <div className="grow-[3] bg-white">Right (60%)</div>
</div>
```

**3. 모바일에서 순서 바꾸기:**
```tsx
<div className="flex flex-col-reverse md:flex-row">
  {/* 모바일: Right가 위, Left가 아래 */}
  {/* 데스크톱: Left가 왼쪽, Right가 오른쪽 */}
  <div className="flex-1">Left</div>
  <div className="flex-1">Right</div>
</div>
```

**4. 최소/최대 너비 제한:**
```tsx
<div className="flex flex-row">
  {/* 왼쪽은 최소 300px, 최대 400px */}
  <div className="min-w-[300px] max-w-[400px] bg-blue-600">
    Left
  </div>

  {/* 오른쪽은 나머지 공간 차지 */}
  <div className="flex-1 bg-white">
    Right
  </div>
</div>
```

**5. overflow 처리:**
```tsx
{/* 각 영역 독립적으로 스크롤 */}
<div className="h-screen flex">
  <div className="flex-1 overflow-auto bg-blue-600">
    {/* Left 영역만 스크롤 */}
    <div className="h-[200vh]">Long content...</div>
  </div>

  <div className="flex-1 overflow-auto bg-white">
    {/* Right 영역만 스크롤 */}
    <div className="h-[200vh]">Long content...</div>
  </div>
</div>
```

### 핵심 정리

**문제 원인:**
1. **`flex-2`는 Tailwind 기본 클래스가 아님** → 적용 안 됨
2. `min-h-screen`은 명확한 높이가 아님 → `flex-col`에서 `flex-1` 작동 불안정
3. 불필요한 `flex` 클래스 중복 → 혼란

**해결책:**
```tsx
{/* ❌ 문제 */}
<div className="min-h-screen flex flex-col">
  <div className="flex-2">...</div>  {/* flex-2 없음! */}
  <div className="flex flex-1 flex-col">...</div>  {/* flex 중복 */}
</div>

{/* ✅ 해결 */}
<div className="h-screen flex flex-col md:flex-row">
  <div className="flex-1">...</div>  {/* 1:1 비율 */}
  <div className="flex-1">...</div>  {/* 1:1 비율 */}
</div>
```

**Flex 방향별 분배:**
- `flex-row`: `flex-1`이 **너비** 분배
- `flex-col`: `flex-1`이 **높이** 분배 (부모 높이 필요!)

**커스텀 비율이 필요하면:**
- `grow-[2]`, `grow-[3]` 사용
- 또는 `w-2/5`, `w-3/5` 같은 width 클래스
- 또는 `tailwind.config.js`에 커스텀 flex 값 추가

**기억할 점:**
- Tailwind 기본: `flex-1`, `flex-auto`, `flex-initial`, `flex-none`만 있음
- `flex-col`에서 높이 분배하려면 부모에 명확한 높이(`h-screen`) 필요
- 반응형: `flex-col md:flex-row` 패턴 사용
