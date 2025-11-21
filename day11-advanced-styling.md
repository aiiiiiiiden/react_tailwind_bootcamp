---
marp: true
theme: default
paginate: true
---

# Day 11: 고급 스타일링 기법
## React + Tailwind Bootcamp

**학습 시간**: 30분
**학습 목표**: Gradient, Shadow, Backdrop 등 고급 기법으로 세련된 UI 만들기

---

## 오늘 배울 내용

1. Gradient 활용법
2. Shadow와 Blur 효과
3. Backdrop 필터
4. 실습: 모던한 UI 컴포넌트

**UI를 한 단계 업그레이드합니다!**

---

## Gradients

```jsx
// Background Gradient
bg-gradient-to-r        // 왼쪽 → 오른쪽
bg-gradient-to-l        // 오른쪽 → 왼쪽
bg-gradient-to-t        // 아래 → 위
bg-gradient-to-b        // 위 → 아래
bg-gradient-to-br       // 왼쪽 위 → 오른쪽 아래
bg-gradient-to-tr       // 왼쪽 아래 → 오른쪽 위

// From/Via/To
from-blue-500    // 시작 색
via-purple-500   // 중간 색
to-pink-500      // 끝 색
```

---

## 실습 1: Gradient 패턴 (5분)

```jsx
export default function GradientDemo() {
  return (
    <div className="p-8 space-y-6">

      {/* 2색 Gradient */}
      <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-xl font-bold">
        2 Color Gradient
      </div>

      {/* 3색 Gradient */}
      <div className="h-32 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white text-xl font-bold">
        3 Color Gradient
      </div>

      {/* Diagonal */}
      <div className="h-32 bg-gradient-to-br from-yellow-400 to-red-500 rounded-lg flex items-center justify-center text-white text-xl font-bold">
        Diagonal Gradient
      </div>

      {/* Text Gradient */}
      <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent text-center">
        Gradient Text
      </h1>

      {/* Subtle Background */}
      <div className="h-32 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center text-gray-900 text-xl font-bold border border-gray-200">
        Subtle Gradient
      </div>

    </div>
  );
}
```

**핵심**: `bg-clip-text text-transparent`로 텍스트 그라데이션

---

## Box Shadow

```jsx
// Shadow Sizes
shadow-sm        // 작은 그림자
shadow           // 기본
shadow-md        // 중간
shadow-lg        // 큰 그림자
shadow-xl        // 매우 큰 그림자
shadow-2xl       // 엄청 큰 그림자
shadow-none      // 그림자 없음

// Colored Shadow (v4)
shadow-blue-500/50    // 파란색 그림자 50% 불투명도
shadow-red-500/25     // 빨간색 그림자 25% 불투명도

// Inner Shadow
shadow-inner     // 내부 그림자
```

---

## 실습 2: Shadow Effects (5분)

```jsx
export default function ShadowDemo() {
  return (
    <div className="p-8 bg-gray-100">

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">

        {['sm', '', 'md', 'lg', 'xl', '2xl'].map((size, i) => (
          <div
            key={i}
            className={`bg-white p-6 rounded-lg shadow${size ? '-' + size : ''} flex items-center justify-center font-semibold text-gray-900`}
          >
            shadow{size ? '-' + size : ''}
          </div>
        ))}

        {/* Colored Shadow */}
        <div className="bg-white p-6 rounded-lg shadow-lg shadow-blue-500/50 flex items-center justify-center font-semibold text-blue-600">
          Blue Shadow
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg shadow-purple-500/50 flex items-center justify-center font-semibold text-purple-600">
          Purple Shadow
        </div>

        {/* Inner Shadow */}
        <div className="bg-gray-200 p-6 rounded-lg shadow-inner flex items-center justify-center font-semibold text-gray-700">
          Inner Shadow
        </div>

        {/* Hover Shadow */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-2xl transition-shadow duration-300 cursor-pointer flex items-center justify-center font-semibold text-gray-900">
          Hover Me
        </div>

      </div>

    </div>
  );
}
```

---

## Blur Effects

```jsx
// Blur
blur-none    blur-sm    blur    blur-md    blur-lg    blur-xl    blur-2xl    blur-3xl

// Backdrop Blur (배경 흐리게)
backdrop-blur-none    backdrop-blur-sm    backdrop-blur    backdrop-blur-md    backdrop-blur-lg
```

**Backdrop Blur**: 반투명 오버레이에 사용!

---

## 실습 3: Glassmorphism (5분)

```jsx
export default function Glassmorphism() {
  return (
    <div
      className="min-h-screen p-8 flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"
      style={{
        backgroundImage: 'url(https://picsum.photos/1920/1080)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >

      {/* Glass Card */}
      <div className="max-w-md w-full">

        {/* Frosted Glass Effect */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">

          <h2 className="text-3xl font-bold text-white mb-4">
            Glassmorphism
          </h2>

          <p className="text-white/90 mb-6 leading-relaxed">
            반투명 배경과 backdrop-blur를 활용한 현대적인 디자인 트렌드입니다.
          </p>

          <div className="space-y-3">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm hover:bg-white/40 border border-white/40 rounded-lg text-white font-semibold transition-all">
              Sign In
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
```

**트렌드**: 2024년 가장 인기 있는 디자인 스타일!

---

## Mix Blend Mode

```jsx
// Blend Modes
mix-blend-normal       mix-blend-multiply     mix-blend-screen
mix-blend-overlay      mix-blend-darken       mix-blend-lighten
mix-blend-color-dodge  mix-blend-color-burn   mix-blend-difference

// 사용 예
<div className="relative">
  <img src="..." className="mix-blend-multiply" />
</div>
```

---

## 실습 4: 현대적인 Hero 섹션 (10분)

```jsx
export default function ModernHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">

      {/* Animated Background Gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          새로운 기능 출시
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          디자인의 새로운
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            패러다임
          </span>
        </h1>

        {/* Description */}
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Tailwind CSS v4와 최신 디자인 트렌드로 만드는
          아름다운 웹 경험을 시작하세요.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group relative px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg overflow-hidden">
            <span className="relative z-10">시작하기</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="relative z-10 opacity-0 group-hover:opacity-100 transition-opacity text-white">시작하기</span>
          </button>

          <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-semibold rounded-lg transition-all">
            더 알아보기
          </button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          {[
            { number: '10K+', label: '사용자' },
            { number: '99%', label: '만족도' },
            { number: '24/7', label: '지원' },
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>

    </section>
  );
}
```

---

## 실습 5: 프리미엄 카드 (5분)

```jsx
export default function PremiumCards() {
  return (
    <div className="min-h-screen bg-gray-900 p-8 flex items-center justify-center">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">

        {/* Basic */}
        <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-2">Basic</h3>
            <div className="text-4xl font-bold text-white mb-6">
              $9<span className="text-xl text-gray-400">/mo</span>
            </div>

            <ul className="space-y-3 mb-8">
              {['Feature 1', 'Feature 2', 'Feature 3'].map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-300">
                  <span className="text-green-400">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <button className="w-full px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-lg transition-all">
              Choose Plan
            </button>
          </div>
        </div>

        {/* Pro (Highlight) */}
        <div className="group relative bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-2xl shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 hover:scale-105 transition-all duration-300">

          {/* Popular Badge */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-yellow-400 text-gray-900 text-sm font-bold rounded-full">
            POPULAR
          </div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
            <div className="text-4xl font-bold text-white mb-6">
              $29<span className="text-xl text-blue-200">/mo</span>
            </div>

            <ul className="space-y-3 mb-8">
              {['Everything in Basic', 'Feature 4', 'Feature 5', 'Priority Support'].map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-white">
                  <span className="text-yellow-300">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <button className="w-full px-6 py-3 bg-white text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-all shadow-lg">
              Choose Plan
            </button>
          </div>
        </div>

        {/* Enterprise */}
        <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
            <div className="text-4xl font-bold text-white mb-6">
              Custom
            </div>

            <ul className="space-y-3 mb-8">
              {['Everything in Pro', 'Custom Solutions', 'Dedicated Support', 'SLA'].map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-300">
                  <span className="text-purple-400">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <button className="w-full px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-lg transition-all">
              Contact Sales
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
```

---

## 핵심 정리

### Gradients
- `bg-gradient-to-*`: 방향
- `from-*`, `via-*`, `to-*`: 색상
- `bg-clip-text text-transparent`: 텍스트 그라데이션

### Shadows & Blur
- `shadow-*`: 그림자 크기
- `shadow-blue-500/50`: 컬러 그림자
- `backdrop-blur-*`: 배경 흐림 (Glassmorphism)

### 고급 기법
- Glassmorphism: `bg-white/10 backdrop-blur-lg`
- Mix Blend Mode: `mix-blend-multiply`
- Animated Backgrounds: blur + pulse

---

## 실전 팁

1. **Gradient 사용**: 배경, 텍스트, 버튼에 활용
2. **Glassmorphism**: 오버레이, 모달에 적합
3. **Colored Shadow**: 브랜드 색상 강조
4. **Backdrop Blur**: 성능 주의 (모바일에서 무거움)
5. **Subtle Gradients**: from-gray-50 to-blue-50 같은 미묘한 그라데이션

---

## 내일 배울 내용

### Day 12: 실전 프로젝트 1 - 랜딩 페이지
- Hero, Features, Testimonials
- 지금까지 배운 모든 기술 종합
- 실습: 완성도 높은 랜딩 페이지

**드디어 실전 프로젝트 시작!**

---

## 과제 (선택)

1. **Glassmorphism 로그인 페이지**
   - 배경 이미지 + frosted glass 효과
   - 입력 폼 + 버튼

2. **Pricing 카드**
   - 3개 플랜
   - 그라데이션 + 그림자 활용

3. **실험**
   - 다양한 blend mode 시도
   - 그라데이션 색상 조합 실험

**수고하셨습니다! 🎉**
**내일부터 실전 프로젝트입니다!**
