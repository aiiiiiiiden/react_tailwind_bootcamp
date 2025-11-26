---
marp: true
theme: default
paginate: true
---

# Day 8: 반응형 디자인 기초
## React + Tailwind Bootcamp

**학습 시간**: 30분
**학습 목표**: Tailwind의 반응형 시스템을 완벽히 이해하고 활용하기

---

## 오늘 배울 내용

1. Breakpoint 시스템 이해
2. Mobile-First 접근법
3. 반응형 유틸리티 활용
4. 실습: 반응형 네비게이션

**2주차 시작!**
이제부터는 더 고급 기술을 배웁니다.

---

## Tailwind Breakpoints

```jsx
// 기본 Breakpoints
sm   // 640px  이상 (스마트폰 가로)
md   // 768px  이상 (태블릿 세로)
lg   // 1024px 이상 (태블릿 가로, 작은 노트북)
xl   // 1280px 이상 (데스크톱)
2xl  // 1536px 이상 (큰 데스크톱)

// 사용법
<div className="text-sm md:text-base lg:text-lg">
  // 모바일: text-sm
  // 태블릿: text-base
  // 데스크톱: text-lg
</div>
```

**핵심**: Prefix가 없으면 모든 크기에 적용 (기본값)

---

## Mobile-First 철학

```jsx
// ❌ Desktop-First (구시대)
.text { font-size: 18px; }
@media (max-width: 768px) {
  .text { font-size: 14px; }
}

// ✅ Mobile-First (현대)
.text { font-size: 14px; }
@media (min-width: 768px) {
  .text { font-size: 18px; }
}

// Tailwind (Mobile-First)
<div className="text-sm md:text-lg">
```

**이유**: 모바일 트래픽이 더 많고, Progressive Enhancement에 유리

---

## 실습 1: 반응형 텍스트 (5분)

```jsx
export default function ResponsiveText() {
  return (
    <div className="p-8">

      {/* 크기 변화 */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-8">
        화면 크기를 바꿔보세요!
      </h1>

      {/* 정렬 변화 */}
      <p className="text-left md:text-center lg:text-right text-gray-600 mb-8">
        모바일: 왼쪽 정렬<br />
        태블릿: 가운데 정렬<br />
        데스크톱: 오른쪽 정렬
      </p>

      {/* 색상 변화 */}
      <div className="p-6 bg-blue-500 md:bg-green-500 lg:bg-purple-500 text-white rounded-lg">
        <p className="text-center">
          모바일: 파란색<br />
          태블릿: 초록색<br />
          데스크톱: 보라색
        </p>
      </div>

    </div>
  );
}
```

**브라우저 DevTools로 화면 크기 조절해보세요!**

---

## 반응형 레이아웃: Display

```jsx
// 숨기기/보이기
<div className="hidden md:block">
  태블릿 이상에서만 보임
</div>

<div className="block md:hidden">
  모바일에서만 보임
</div>

// Flex 방향 전환
<div className="flex flex-col md:flex-row">
  {/* 모바일: 세로 배치, 태블릿 이상: 가로 배치 */}
</div>

// Grid 열 개수
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
  {/* 모바일: 1열, 스마트폰: 2열, 데스크톱: 4열 */}
</div>
```

---

## 실습 2: 반응형 카드 그리드 (5분)

```jsx
export default function ResponsiveCardGrid() {
  const items = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">

      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        반응형 카드 그리드
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {items.map((num) => (
          <div
            key={num}
            className="bg-white p-6 md:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-4xl mb-4">📦</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Card {num}
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              반응형 카드입니다.
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}
```

**화면 크기에 따라 1열 → 2열 → 3열 → 4열 변화!**

---

## 실습 3: 반응형 네비게이션 (10분)

```jsx
import { useState } from 'react';

export default function ResponsiveNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="text-xl font-bold">MyApp</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="#" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Services</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Contact</a>
            <button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#" className="block px-4 py-2 rounded hover:bg-gray-800">Home</a>
            <a href="#" className="block px-4 py-2 rounded hover:bg-gray-800">About</a>
            <a href="#" className="block px-4 py-2 rounded hover:bg-gray-800">Services</a>
            <a href="#" className="block px-4 py-2 rounded hover:bg-gray-800">Contact</a>
            <button className="w-full px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 mt-2">
              Sign Up
            </button>
          </div>
        )}

      </div>
    </nav>
  );
}
```

---

## 반응형 Spacing

```jsx
// Padding
<div className="p-4 md:p-8 lg:p-12">
  // 모바일: 16px, 태블릿: 32px, 데스크톱: 48px
</div>

// Margin
<div className="mb-4 md:mb-8 lg:mb-12">

// Gap
<div className="grid gap-4 md:gap-6 lg:gap-8">
```

**패턴**: 작은 화면 → 작은 간격, 큰 화면 → 큰 간격

---

## 반응형 Width & Height

```jsx
// Width
<div className="w-full md:w-1/2 lg:w-1/3">
  // 모바일: 100%, 태블릿: 50%, 데스크톱: 33.3%
</div>

// Max Width
<div className="max-w-sm md:max-w-2xl lg:max-w-4xl mx-auto">
  // 중앙 정렬 + 반응형 최대 너비
</div>

// Height
<div className="h-64 md:h-96 lg:h-screen">
```

---

## Container: 반응형 컨테이너

```jsx
// Tailwind Container (기본 제공)
<div className="container mx-auto px-4">
  {/* 자동으로 breakpoint에 맞춰 max-width 설정 */}
</div>

// 커스텀 컨테이너 (더 흔함)
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/*
    모바일: px-4 (16px)
    스마트폰: px-6 (24px)
    데스크톱: px-8 (32px)
  */}
</div>
```

---

## 실습 4: 반응형 Hero 섹션 (10분)

```jsx
export default function ResponsiveHero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-600 to-purple-600">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <div className="text-white text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Build Amazing
              <br />
              <span className="text-blue-200">Products</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Tailwind CSS를 활용해 빠르고 아름다운 웹 애플리케이션을 만드세요.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-6 py-3 md:px-8 md:py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-lg">
                Get Started
              </button>
              <button className="px-6 py-3 md:px-8 md:py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Image/Placeholder */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 aspect-square flex items-center justify-center">
              <div className="text-9xl">🚀</div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
```

---

## 반응형 디버깅 팁

```jsx
// 개발 중 현재 breakpoint 표시
export default function BreakpointIndicator() {
  if (process.env.NODE_ENV === 'production') return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black text-white px-3 py-2 rounded-lg text-sm font-mono z-50">
      <div className="sm:hidden">xs</div>
      <div className="hidden sm:block md:hidden">sm</div>
      <div className="hidden md:block lg:hidden">md</div>
      <div className="hidden lg:block xl:hidden">lg</div>
      <div className="hidden xl:block 2xl:hidden">xl</div>
      <div className="hidden 2xl:block">2xl</div>
    </div>
  );
}
```

**App.jsx에 추가하면 현재 breakpoint를 쉽게 확인!**

---

## 실전 반응형 패턴

```jsx
// 1. 사이드바 → 상단바
<div className="flex flex-col lg:flex-row">
  <aside className="w-full lg:w-64">Sidebar</aside>
  <main className="flex-1">Content</main>
</div>

// 2. 카드 스택 → 그리드
<div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-6">

// 3. 모바일: 풀 너비, 데스크톱: 제한 너비
<div className="w-full lg:max-w-4xl lg:mx-auto">

// 4. 이미지: 위 → 옆
<div className="flex flex-col md:flex-row gap-6">
  <img className="w-full md:w-1/3" />
  <div className="flex-1">Content</div>
</div>
```

---

## 핵심 정리

### Breakpoints
- `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px), `2xl` (1536px)
- **Mobile-First**: 작은 화면부터, 큰 화면에 prefix 추가

### 자주 쓰는 패턴
- **텍스트**: `text-2xl md:text-4xl lg:text-6xl`
- **Grid**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- **Flex**: `flex-col md:flex-row`
- **숨기기**: `hidden md:block`, `block md:hidden`
- **간격**: `p-4 md:p-8 lg:p-12`

---

## 실전 팁

1. **Mobile-First**: 항상 모바일부터 디자인
2. **브라우저 DevTools**: Responsive mode로 테스트
3. **실제 기기 테스트**: 에뮬레이터만으로는 부족
4. **3 Breakpoints 충분**: 보통 기본, md, lg만 사용
5. **Container 패턴**: `max-w-* mx-auto px-4`

---

## 내일 배울 내용

### Day 9: 반응형 레이아웃 고급
- Container Queries (v4 신기능!)
- 반응형 Grid와 Flexbox 고급 패턴
- 실습: 반응형 대시보드

**더 고급 반응형 기법을 배웁니다!**

---

## 과제 (선택)

1. **반응형 랜딩 페이지**
   - Hero, Features, CTA 섹션
   - 모바일, 태블릿, 데스크톱 대응

2. **반응형 네비게이션**
   - 햄버거 메뉴 (모바일)
   - 가로 메뉴 (데스크톱)

3. **실험**
   - 모든 breakpoint에서 레이아웃 확인
   - Chrome DevTools의 다양한 기기 프로필 테스트

**수고하셨습니다! 🎉**
