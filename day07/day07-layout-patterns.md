---
marp: true
theme: default
paginate: true
---

# Day 7: 레이아웃 패턴 실전
## React + Tailwind Bootcamp

**학습 시간**: 30분
**학습 목표**: 실전에서 자주 쓰이는 레이아웃 패턴 마스터하기

---

## 오늘 배울 내용

1. 자주 쓰이는 레이아웃 패턴
2. Flexbox vs Grid 선택 기준
3. 반응형 레이아웃 기초
4. 실습: 완전한 페이지 레이아웃

**1주차 마무리!**
지금까지 배운 모든 것을 종합합니다.

---

## 레이아웃 패턴 #1: Sticky Header

```jsx
export default function StickyHeaderLayout() {
  return (
    <div className="min-h-screen">

      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-900">Logo</div>
            <nav className="flex gap-6">
              <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="h-[200vh] bg-gradient-to-b from-blue-50 to-white">
          <h1 className="text-4xl font-bold">스크롤해보세요!</h1>
          <p className="text-gray-600 mt-4">헤더가 고정됩니다.</p>
        </div>
      </main>

    </div>
  );
}
```

**핵심**: `sticky top-0 z-50`

---

## 레이아웃 패턴 #2: Sidebar Layout

```jsx
export default function SidebarLayout() {
  return (
    <div className="flex h-screen">

      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="p-6 border-b border-gray-700">
          <h2 className="text-xl font-bold">Dashboard</h2>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <a href="#" className="block px-4 py-2 rounded bg-gray-800 hover:bg-gray-700">
            📊 Dashboard
          </a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">
            👤 Users
          </a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">
            ⚙️ Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center px-6">
          <h1 className="text-xl font-semibold">Page Title</h1>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto bg-gray-50 p-6">
          <div className="max-w-7xl mx-auto">
            <p>메인 콘텐츠 영역</p>
          </div>
        </main>
      </div>

    </div>
  );
}
```

**핵심**: `flex h-screen` + 사이드바 고정 너비 + 메인 `flex-1`

---

## 레이아웃 패턴 #3: Hero Section

```jsx
export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600">

      {/* Background Pattern (Optional) */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,...')] bg-repeat"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <h1 className="text-6xl font-bold mb-6 leading-tight">
          아름다운 랜딩 페이지를<br />몇 분 만에 만드세요
        </h1>
        <p className="text-xl mb-8 text-blue-100 leading-relaxed">
          Tailwind CSS를 활용하면 복잡한 디자인도 쉽게 구현할 수 있습니다.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
            시작하기
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
            더 알아보기
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>

    </section>
  );
}
```

**핵심**: `h-screen flex items-center justify-center`

---

## 레이아웃 패턴 #4: Card Grid

```jsx
export default function CardGrid() {
  const items = [
    { title: '빠른 개발', icon: '⚡', desc: 'Utility-first로 빠르게 개발' },
    { title: '반응형', icon: '📱', desc: '모든 화면 크기 대응' },
    { title: '커스터마이징', icon: '🎨', desc: '자유로운 디자인' },
    { title: '최적화', icon: '🚀', desc: '작은 번들 크기' },
    { title: '생산성', icon: '💪', desc: '개발자 경험 향상' },
    { title: '커뮤니티', icon: '👥', desc: '활발한 커뮤니티' },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            왜 Tailwind CSS인가?
          </h2>
          <p className="text-xl text-gray-600">
            개발자들이 선택하는 이유
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
```

**핵심**: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

---

## 레이아웃 패턴 #5: Split Screen

```jsx
export default function SplitScreen() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">

      {/* Left Side */}
      <div className="flex-1 bg-blue-600 text-white flex items-center justify-center p-12">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold mb-6">
            Welcome Back
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            로그인하여 계속 진행하세요.
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 bg-white flex items-center justify-center p-12">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            로그인
          </h2>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                이메일
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                비밀번호
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="••••••••"
              />
            </div>

            <button className="w-full px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              로그인
            </button>
          </form>

        </div>
      </div>

    </div>
  );
}
```

**핵심**: `flex flex-col md:flex-row` (모바일: 세로, 데스크톱: 가로)

---

## Flexbox vs Grid 선택 가이드

### Flexbox 사용
```jsx
// ✅ 1차원 레이아웃
<div className="flex gap-4">
  <button>Button 1</button>
  <button>Button 2</button>
</div>

// ✅ 중앙 정렬
<div className="flex items-center justify-center h-screen">
  <div>Content</div>
</div>

// ✅ 네비게이션, 헤더, 푸터
<nav className="flex justify-between items-center">
```

---

## Flexbox vs Grid 선택 가이드 (계속)

### Grid 사용
```jsx
// ✅ 2차원 레이아웃
<div className="grid grid-cols-3 gap-4">
  <div>1</div><div>2</div><div>3</div>
  <div>4</div><div>5</div><div>6</div>
</div>

// ✅ 갤러리, 카드 그리드
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

// ✅ 페이지 레이아웃
<div className="grid grid-cols-[200px_1fr] grid-rows-[60px_1fr]">
```

**결론**: 한 방향 → Flex, 행+열 → Grid

---

## 실습: 완전한 랜딩 페이지 (15분)

```jsx
export default function LandingPage() {
  return (
    <div className="min-h-screen">

      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              MyApp
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
            </div>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Build Amazing Products<br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Faster Than Ever
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Tailwind CSS를 활용해 빠르고 아름다운 웹 애플리케이션을 만드세요.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 shadow-lg shadow-blue-500/50 transition-all">
              Get Started Free
            </button>
            <button className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-lg hover:bg-gray-50 border border-gray-200">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to build modern web apps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '⚡', title: 'Lightning Fast', desc: 'Optimized for performance' },
              { icon: '🎨', title: 'Beautiful Design', desc: 'Stunning UI components' },
              { icon: '📱', title: 'Responsive', desc: 'Works on all devices' },
              { icon: '🔒', title: 'Secure', desc: 'Enterprise-grade security' },
              { icon: '🚀', title: 'Easy Deploy', desc: 'Deploy in minutes' },
              { icon: '💪', title: 'Powerful API', desc: 'Comprehensive API' },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Join thousands of developers building amazing products
          </p>
          <button className="px-10 py-5 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 shadow-xl text-lg">
            Start Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">MyApp</div>
              <p className="text-gray-400">
                Building the future of web development.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Updates</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 MyApp. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
```

---

## 반응형 Breakpoints

```jsx
// Tailwind Breakpoints
sm:   // 640px 이상
md:   // 768px 이상
lg:   // 1024px 이상
xl:   // 1280px 이상
2xl:  // 1536px 이상

// 사용 예
<div className="
  grid
  grid-cols-1      // 모바일: 1열
  md:grid-cols-2   // 태블릿: 2열
  lg:grid-cols-3   // 데스크톱: 3열
  gap-4
">
```

**Mobile-First**: 기본값은 모바일, 큰 화면에 prefix 추가

---

## 자주 쓰는 반응형 패턴

```jsx
// 1. 숨기기/보이기
<div className="hidden md:block">데스크톱에만 보임</div>
<div className="block md:hidden">모바일에만 보임</div>

// 2. 방향 전환
<div className="flex flex-col md:flex-row">

// 3. 크기 변화
<h1 className="text-3xl md:text-5xl lg:text-6xl">

// 4. 간격 조정
<div className="p-4 md:p-8 lg:p-12">

// 5. 그리드 조정
<div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
```

---

## 핵심 정리

### 자주 쓰는 레이아웃 패턴
1. **Sticky Header**: `sticky top-0 z-50`
2. **Sidebar**: `flex h-screen` + 고정 너비
3. **Hero**: `h-screen flex items-center justify-center`
4. **Card Grid**: `grid grid-cols-* gap-*`
5. **Split Screen**: `flex flex-col md:flex-row`

### Flexbox vs Grid
- **Flex**: 1차원, 네비게이션, 중앙 정렬
- **Grid**: 2차원, 갤러리, 페이지 레이아웃

---

## 실전 팁

1. **Container 패턴**: `max-w-7xl mx-auto px-4`
2. **Section 패턴**: `py-20 px-4`
3. **반응형**: Mobile-first, 작은 화면부터
4. **z-index**: `z-10`, `z-20`, `z-50` 사용
5. **backdrop-blur**: 반투명 헤더에 `backdrop-blur-sm`

---

## 1주차 완료! 🎉

### 지금까지 배운 것
✅ CSS Box Model, Flexbox, Grid
✅ Tailwind CSS 기본과 Utility-first
✅ Spacing, Sizing 시스템
✅ Color와 Typography
✅ 실전 레이아웃 패턴

### 다음 주 (Week 2)
- 반응형 디자인 심화
- Interactive States (Hover, Focus)
- 고급 스타일링 기법
- 실전 프로젝트

---

## 주말 과제

1. **완전한 랜딩 페이지**
   - Hero, Features, Pricing, Footer
   - 반응형 디자인 적용

2. **대시보드 레이아웃**
   - Sidebar + Header + Main
   - Grid로 위젯 배치

3. **복습**
   - 지난 1주일 강의 다시 보기
   - 직접 타이핑하며 실습

**다음 주에 더 심화된 내용으로 만나요! 🚀**
