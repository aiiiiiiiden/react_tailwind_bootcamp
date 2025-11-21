---
marp: true
theme: default
paginate: true
---

# Day 6: Color와 Typography
## React + Tailwind Bootcamp

**학습 시간**: 30분
**학습 목표**: 색상과 타이포그래피로 전문적인 디자인 완성하기

---

## 오늘 배울 내용

1. Tailwind Color Palette 완벽 이해
2. Typography Scale과 활용
3. Line Height와 Letter Spacing
4. 실습: 타이포그래피 시스템 구축

**왜 중요한가?**
색상과 타이포그래피는 디자인의 90%를 결정합니다!

---

## Tailwind Color System

### Color Scale: 50 ~ 900

```
slate-50    // 가장 밝음 (거의 흰색)
slate-100
slate-200
slate-300
slate-400
slate-500   // 기본 (중간)
slate-600
slate-700
slate-800
slate-900   // 가장 어두움 (거의 검정)
slate-950   // v4: 더 어두움
```

---

## 주요 Color Palette

```jsx
// Gray 계열
slate-*    // 차가운 회색
gray-*     // 중성 회색
zinc-*     // 따뜻한 회색
neutral-*  // 자연스러운 회색
stone-*    // 돌 같은 회색

// Primary Colors
blue-*     // 파란색 (신뢰, 전문성)
green-*    // 초록색 (성공, 긍정)
red-*      // 빨간색 (경고, 위험)
yellow-*   // 노란색 (주의)
purple-*   // 보라색 (창의적)
```

---

## 실습 1: Color Scale 체험 (5분)

```jsx
export default function ColorScale() {
  const scales = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

  return (
    <div className="p-8 space-y-8">

      {/* Blue Scale */}
      <div>
        <h2 className="text-xl font-bold mb-4">Blue Scale</h2>
        <div className="space-y-2">
          {scales.map(scale => (
            <div
              key={scale}
              className={`bg-blue-${scale} p-4 rounded`}
              style={{ color: scale >= 500 ? 'white' : 'black' }}
            >
              blue-{scale}
            </div>
          ))}
        </div>
      </div>

      {/* Gray Scale */}
      <div>
        <h2 className="text-xl font-bold mb-4">Gray Scale</h2>
        <div className="space-y-2">
          {scales.map(scale => (
            <div
              key={scale}
              className={`bg-gray-${scale} p-4 rounded`}
              style={{ color: scale >= 500 ? 'white' : 'black' }}
            >
              gray-{scale}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
```

---

## Color 적용 위치

```jsx
// Background
bg-blue-500         // 배경색
hover:bg-blue-600   // 호버 시 배경색

// Text
text-gray-900       // 텍스트 색
text-white          // 흰색 텍스트

// Border
border-gray-200     // 테두리 색
border-2            // 테두리 두께
border             // 1px 테두리

// Ring (Focus 효과)
ring-2              // 2px ring
ring-blue-500       // ring 색상
focus:ring-2        // focus 시 ring
```

---

## 실용적인 Color 조합

```jsx
// 1. 기본 카드
<div className="bg-white border border-gray-200">

// 2. 어두운 카드
<div className="bg-gray-800 text-white">

// 3. 컬러풀한 카드
<div className="bg-blue-50 border border-blue-200">

// 4. 강조 박스
<div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800">

// 5. 성공 메시지
<div className="bg-green-50 text-green-800 border border-green-200">
```

---

## 실습 2: Alert 컴포넌트 (5분)

```jsx
function Alert({ type = 'info', children }) {
  const styles = {
    info: 'bg-blue-50 text-blue-800 border-blue-200',
    success: 'bg-green-50 text-green-800 border-green-200',
    warning: 'bg-yellow-50 text-yellow-800 border-yellow-200',
    error: 'bg-red-50 text-red-800 border-red-200',
  };

  return (
    <div className={`p-4 border-l-4 rounded ${styles[type]}`}>
      {children}
    </div>
  );
}

export default function AlertDemo() {
  return (
    <div className="p-8 space-y-4">
      <Alert type="info">정보: 새로운 업데이트가 있습니다.</Alert>
      <Alert type="success">성공: 저장되었습니다.</Alert>
      <Alert type="warning">주의: 확인이 필요합니다.</Alert>
      <Alert type="error">오류: 다시 시도해주세요.</Alert>
    </div>
  );
}
```

---

## Typography Scale

```jsx
// Font Size
text-xs      // 12px
text-sm      // 14px
text-base    // 16px (기본)
text-lg      // 18px
text-xl      // 20px
text-2xl     // 24px
text-3xl     // 30px
text-4xl     // 36px
text-5xl     // 48px
text-6xl     // 60px
text-7xl     // 72px
text-8xl     // 96px
text-9xl     // 128px
```

---

## Font Weight

```jsx
font-thin        // 100
font-extralight  // 200
font-light       // 300
font-normal      // 400 (기본)
font-medium      // 500
font-semibold    // 600
font-bold        // 700
font-extrabold   // 800
font-black       // 900
```

**실전**: `font-normal`, `font-medium`, `font-semibold`, `font-bold`만 주로 사용

---

## 실습 3: Typography 체계 (5분)

```jsx
export default function TypographySystem() {
  return (
    <div className="max-w-2xl mx-auto p-8">

      {/* Headings */}
      <h1 className="text-4xl font-bold mb-2">Heading 1</h1>
      <h2 className="text-3xl font-bold mb-2">Heading 2</h2>
      <h3 className="text-2xl font-bold mb-2">Heading 3</h3>
      <h4 className="text-xl font-semibold mb-2">Heading 4</h4>
      <h5 className="text-lg font-semibold mb-4">Heading 5</h5>

      {/* Body Text */}
      <p className="text-base text-gray-700 mb-4 leading-relaxed">
        일반 본문 텍스트입니다. text-base (16px)와 leading-relaxed를 사용했습니다.
        가독성이 좋은 행간을 제공합니다.
      </p>

      <p className="text-sm text-gray-600 mb-4">
        작은 텍스트입니다. text-sm (14px)를 사용합니다.
        부가 설명이나 캡션에 적합합니다.
      </p>

      <p className="text-xs text-gray-500">
        더 작은 텍스트입니다. text-xs (12px)를 사용합니다.
        메타 정보나 라벨에 사용됩니다.
      </p>

    </div>
  );
}
```

---

## Line Height (행간)

```jsx
leading-none      // 1
leading-tight     // 1.25
leading-snug      // 1.375
leading-normal    // 1.5 (기본)
leading-relaxed   // 1.625
leading-loose     // 2
```

**실전**:
- 제목: `leading-tight` 또는 `leading-snug`
- 본문: `leading-normal` 또는 `leading-relaxed`

---

## Text Alignment & Decoration

```jsx
// 정렬
text-left         // 왼쪽 (기본)
text-center       // 중앙
text-right        // 오른쪽
text-justify      // 양쪽 정렬

// 장식
underline         // 밑줄
line-through      // 취소선
no-underline      // 밑줄 제거

// 대소문자
uppercase         // 대문자
lowercase         // 소문자
capitalize        // 첫글자 대문자
normal-case       // 기본
```

---

## 실습 4: 블로그 포스트 레이아웃 (10분)

```jsx
export default function BlogPost() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">

      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full font-medium">
            React
          </span>
          <span>·</span>
          <time>2025년 1월 19일</time>
          <span>·</span>
          <span>5분 읽기</span>
        </div>

        <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Tailwind CSS로 만드는 아름다운 타이포그래피
        </h1>

        <p className="text-xl text-gray-600 leading-relaxed">
          색상과 타이포그래피를 활용해 전문적인 디자인을 만드는 방법을 알아봅니다.
        </p>
      </header>

      {/* Author */}
      <div className="flex items-center gap-4 pb-8 mb-8 border-b border-gray-200">
        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
          JD
        </div>
        <div>
          <div className="font-semibold text-gray-900">John Doe</div>
          <div className="text-sm text-gray-500">Senior Developer</div>
        </div>
      </div>

      {/* Content */}
      <div className="prose prose-lg">
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
          타이포그래피의 중요성
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          좋은 타이포그래피는 콘텐츠를 더 읽기 쉽고 이해하기 쉽게 만듭니다.
          Tailwind CSS는 일관된 타이포그래피 시스템을 제공해 이를 쉽게 구현할 수 있게 합니다.
        </p>

        <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-6 italic text-gray-600 bg-blue-50">
          "타이포그래피는 디자인의 98%를 차지한다." - Oliver Reichenstein
        </blockquote>

        <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          핵심 원칙
        </h3>

        <ul className="space-y-2 mb-6">
          <li className="flex items-start gap-2">
            <span className="text-blue-500 mt-1">✓</span>
            <span className="text-gray-700">일관된 크기 체계 사용</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 mt-1">✓</span>
            <span className="text-gray-700">적절한 행간 설정</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 mt-1">✓</span>
            <span className="text-gray-700">색상 대비 확보</span>
          </li>
        </ul>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">💡 팁</h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            본문 텍스트는 gray-700 정도를 사용하면 순수 검정보다 눈이 편합니다.
            제목은 gray-900으로 대비를 줍니다.
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          이러한 원칙을 따르면 누구나 쉽게 읽을 수 있는 아름다운 콘텐츠를 만들 수 있습니다.
        </p>
      </div>

      {/* Footer */}
      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <span className="text-sm text-gray-500">태그:</span>
            <span className="text-sm text-blue-600 hover:underline cursor-pointer">Tailwind</span>
            <span className="text-sm text-blue-600 hover:underline cursor-pointer">Design</span>
          </div>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
            공유하기
          </button>
        </div>
      </footer>

    </article>
  );
}
```

---

## Text Color 실전 조합

```jsx
// 1. 제목
text-gray-900 dark:text-white

// 2. 본문
text-gray-700 dark:text-gray-300

// 3. 부제목/설명
text-gray-600 dark:text-gray-400

// 4. 메타 정보
text-gray-500 dark:text-gray-500

// 5. 링크
text-blue-600 hover:text-blue-700

// 6. 비활성화
text-gray-400
```

---

## Font Family (v4)

```jsx
// Tailwind v4는 시스템 폰트 사용
font-sans        // 기본 (Inter, system-ui 등)
font-serif       // 세리프체
font-mono        // 고정폭 (코드용)

// 커스텀 폰트 (CSS에서 정의)
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap');

@theme {
  --font-sans: 'Noto Sans KR', sans-serif;
}
```

---

## 실전 타이포그래피 시스템

```jsx
// Typography.jsx - 재사용 컴포넌트
export function H1({ children, className = '' }) {
  return (
    <h1 className={`text-4xl font-bold text-gray-900 leading-tight ${className}`}>
      {children}
    </h1>
  );
}

export function H2({ children, className = '' }) {
  return (
    <h2 className={`text-3xl font-bold text-gray-900 leading-tight ${className}`}>
      {children}
    </h2>
  );
}

export function Body({ children, className = '' }) {
  return (
    <p className={`text-base text-gray-700 leading-relaxed ${className}`}>
      {children}
    </p>
  );
}

export function Caption({ children, className = '' }) {
  return (
    <p className={`text-sm text-gray-500 ${className}`}>
      {children}
    </p>
  );
}
```

---

## Opacity (불투명도)

```jsx
// Text Opacity
text-gray-900/50     // 50% 불투명도
text-blue-500/75     // 75% 불투명도

// Background Opacity
bg-black/50          // 반투명 검정 (overlay)
bg-white/90          // 거의 불투명한 흰색

// Border Opacity
border-gray-200/50
```

**v4 특징**: `/` 문법으로 간단히 opacity 적용!

---

## 핵심 정리

### Colors
- **Scale**: 50 (밝음) ~ 900 (어두움)
- **Gray 선택**: slate (차가움), gray (중성), zinc (따뜻함)
- **Text**: gray-900 (제목), gray-700 (본문), gray-500 (메타)
- **Background**: white, gray-50, gray-100

### Typography
- **Size**: text-base (본문), text-xl~4xl (제목)
- **Weight**: font-normal, font-medium, font-semibold, font-bold
- **Leading**: leading-tight (제목), leading-relaxed (본문)
- **Color**: text-gray-700 (본문), text-gray-900 (제목)

---

## 실전 팁

1. **색상 일관성**: 프로젝트 전체에 같은 gray 계열 사용
2. **대비 확보**: 배경과 텍스트 색상 차이 충분히
3. **행간**: 본문은 `leading-relaxed` 필수
4. **컴포넌트화**: H1, H2, Body 등 타이포그래피 컴포넌트 만들기
5. **opacity 활용**: 미묘한 색상 변화에 `/50`, `/75` 사용

---

## 내일 배울 내용

### Day 7: 레이아웃 패턴 실전
- 자주 쓰이는 레이아웃 패턴
- Flexbox vs Grid 선택 기준
- 실습: 완전한 페이지 레이아웃

**1주차 마무리하며 실전 패턴 정복!**

---

## 과제 (선택)

1. **Color Theme 만들기**
   - Primary, Secondary, Success, Danger 색상 정의
   - 버튼 컴포넌트에 적용

2. **블로그 레이아웃**
   - 제목, 부제, 본문, 캡션 구분
   - 일관된 타이포그래피 시스템

3. **실험**
   - 다양한 gray 계열 비교 (slate, gray, zinc)
   - leading 값에 따른 가독성 차이 확인

**수고하셨습니다! 🎉**
