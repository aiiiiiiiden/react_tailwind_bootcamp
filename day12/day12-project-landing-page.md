---
marp: true
theme: default
paginate: true
---

# Day 12: 실전 프로젝트 - 랜딩 페이지
## React + Tailwind Bootcamp

**학습 시간**: 30분 (+ 추가 실습 권장)
**학습 목표**: 지금까지 배운 모든 기술을 활용해 완성도 높은 랜딩 페이지 제작

---

## 프로젝트 개요

### 만들 것
- Hero Section (메인 비주얼)
- Features Section (기능 소개)
- Testimonials (고객 후기)
- CTA (Call-to-Action)
- Footer

### 사용할 기술
✅ Responsive Design
✅ Gradients & Shadows
✅ Interactive States
✅ Glassmorphism
✅ Animations

---

## 프로젝트 구조

```
src/
├── App.jsx
├── components/
│   ├── Hero.jsx
│   ├── Features.jsx
│   ├── Testimonials.jsx
│   ├── CTA.jsx
│   └── Footer.jsx
└── index.css
```

**시작하기**:
```bash
npm create vite@latest landing-page -- --template react
cd landing-page
npm install -D tailwindcss @tailwindcss/vite
```

---

## Step 1: Hero Section (10분)

```jsx
// components/Hero.jsx
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">

      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white text-sm mb-8 hover:bg-white/30 transition-all">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          🎉 New Feature Released
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
          Build Something
          <br />
          <span className="bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 bg-clip-text text-transparent">
            Amazing
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          Tailwind CSS와 React로 빠르게 아름다운 웹 애플리케이션을 만드세요.
          코드 작성 시간을 절반으로 줄입니다.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <button className="group px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 hover:shadow-2xl hover:scale-105 transition-all">
            <span className="flex items-center gap-2">
              Get Started Free
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>

          <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 text-white font-bold rounded-lg transition-all">
            Watch Demo
          </button>
        </div>

        {/* Social Proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 border-2 border-white"></div>
              ))}
            </div>
            <span className="text-sm">10,000+ developers</span>
          </div>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map(i => (
              <span key={i} className="text-yellow-300 text-xl">★</span>
            ))}
            <span className="ml-2 text-sm">4.9/5 rating</span>
          </div>
        </div>

      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>

    </section>
  );
}
```

---

## Step 2: Features Section (10분)

```jsx
// components/Features.jsx
export default function Features() {
  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Optimized build process and minimal bundle size for blazing fast performance.',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: '🎨',
      title: 'Beautiful Design',
      description: 'Pre-built components with modern design patterns and best practices.',
      gradient: 'from-pink-400 to-purple-500'
    },
    {
      icon: '📱',
      title: 'Fully Responsive',
      description: 'Works perfectly on all devices from mobile to desktop and everything in between.',
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      icon: '🔒',
      title: 'Secure by Default',
      description: 'Built with security in mind. Enterprise-grade protection out of the box.',
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      icon: '🚀',
      title: 'Easy to Deploy',
      description: 'Deploy to production in minutes with our streamlined deployment process.',
      gradient: 'from-indigo-400 to-purple-500'
    },
    {
      icon: '💪',
      title: 'Developer Experience',
      description: 'Excellent DX with TypeScript support, hot reload, and comprehensive docs.',
      gradient: 'from-red-400 to-pink-500'
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            All the tools and features you need to build amazing products, included by default.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300"
            >

              {/* Gradient Border on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity -z-10 blur-xl`}></div>

              {/* Icon */}
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text" style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}>
                {feature.title}
              </h3>

              <p className="text-gray-600 group-hover:text-gray-700 transition-colors leading-relaxed">
                {feature.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
```

---

## Step 3: Testimonials Section (5분)

```jsx
// components/Testimonials.jsx
export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO at TechCorp',
      avatar: '👩‍💼',
      content: 'This tool has completely transformed how we build products. The speed and quality are unmatched.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'Lead Developer',
      avatar: '👨‍💻',
      content: 'Best developer experience I\'ve ever had. The documentation is excellent and support is amazing.',
      rating: 5
    },
    {
      name: 'Emma Wilson',
      role: 'Product Designer',
      avatar: '👩‍🎨',
      content: 'Beautiful components that are easy to customize. Our design system has never looked better.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Loved by Developers
          </h2>
          <p className="text-xl text-gray-600">
            See what our users have to say
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
```

---

## Step 4: CTA Section (3분)

```jsx
// components/CTA.jsx
export default function CTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Get Started?
        </h2>

        <p className="text-xl text-blue-100 mb-10 leading-relaxed">
          Join thousands of developers building amazing products with our platform.
          Start your free trial today, no credit card required.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 hover:shadow-2xl hover:scale-105 transition-all">
            Start Free Trial
          </button>
          <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 text-white font-bold rounded-lg transition-all">
            Schedule Demo
          </button>
        </div>

        <p className="mt-6 text-blue-100 text-sm">
          No credit card required • 14-day free trial • Cancel anytime
        </p>

      </div>
    </section>
  );
}
```

---

## Step 5: Footer (2분)

```jsx
// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              MyApp
            </div>
            <p className="text-gray-400 text-sm">
              Building the future of web development.
            </p>
          </div>

          {/* Links */}
          {[
            { title: 'Product', links: ['Features', 'Pricing', 'Updates'] },
            { title: 'Company', links: ['About', 'Blog', 'Careers'] },
            { title: 'Support', links: ['Help Center', 'Contact', 'Status'] }
          ].map((column, i) => (
            <div key={i}>
              <h3 className="font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, j) => (
                  <li key={j}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 MyApp. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
```

---

## App.jsx: 모두 합치기

```jsx
// App.jsx
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
```

---

## 완성! 🎉

### 체크리스트
✅ 반응형 디자인 (모바일, 태블릿, 데스크톱)
✅ 인터랙티브 효과 (hover, scale)
✅ 그라데이션과 glassmorphism
✅ 부드러운 transitions
✅ 접근성 (semantic HTML)

### 개선 아이디어
- 네비게이션 바 추가
- 스크롤 애니메이션 (Framer Motion)
- 다크 모드 toggle
- 이미지 최적화 (Next.js Image)

---

## 실전 팁

1. **컴포넌트 분리**: 재사용성 향상
2. **일관된 Spacing**: 4, 8, 12, 16, 20 패턴 유지
3. **색상 제한**: 2-3가지 주요 색상만 사용
4. **성능**: 불필요한 애니메이션 자제
5. **테스트**: 실제 기기에서 확인

---

## 내일 배울 내용

### Day 13: 실전 프로젝트 2 - 대시보드
- 복잡한 레이아웃 구성
- 데이터 시각화 컴포넌트
- 실습: Admin 대시보드

**더 복잡한 실전 프로젝트!**

---

## 오늘의 과제

### 필수
1. 완성된 랜딩 페이지 실행해보기
2. 자신만의 색상/텍스트로 커스터마이징

### 선택
1. 네비게이션 바 추가
2. 추가 섹션 만들기 (Pricing, FAQ)
3. 스크롤 애니메이션 추가

**수고하셨습니다! 🎉**
