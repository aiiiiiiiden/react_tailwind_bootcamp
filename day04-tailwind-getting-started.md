---
marp: true
theme: default
paginate: true
---

# Day 4: Tailwind CSS v4 시작하기
## React + Tailwind Bootcamp

**학습 시간**: 30분
**학습 목표**: Tailwind 철학을 이해하고 기본 사용법 익히기

---

## 오늘 배울 내용

1. Tailwind CSS란 무엇인가?
2. Utility-first 접근법
3. Tailwind v4 설정 (간소화!)
4. 실습: 기존 CSS를 Tailwind로 변환

**왜 Tailwind인가?**
CSS를 작성하는 방식을 완전히 바꿔줍니다. 더 빠르고, 더 일관성 있게!

---

## Tailwind CSS란?

### 전통적인 CSS
```jsx
<button className="primary-button">Click me</button>

<style>
.primary-button {
  padding: 8px 16px;
  background-color: #3b82f6;
  color: white;
  border-radius: 4px;
}
</style>
```

### Tailwind CSS
```jsx
<button className="px-4 py-2 bg-blue-500 text-white rounded">
  Click me
</button>
```

**차이점**: CSS 파일 없이, 클래스명으로 스타일 적용!

---

## Utility-First 접근법

### 전통적 방식 (Semantic CSS)
```css
.card { ... }
.card-header { ... }
.card-body { ... }
.card-footer { ... }
```
**문제점**: 클래스명 짓기 어렵고, CSS 파일이 계속 커짐

### Utility-First (Tailwind)
```jsx
<div className="p-6 bg-white rounded-lg shadow">
  <h2 className="text-xl font-bold mb-4">Title</h2>
  <p className="text-gray-600">Content</p>
</div>
```
**장점**: 재사용 가능, 일관성, CSS 파일 불필요

---

## Tailwind의 장점

1. **빠른 개발**
   - CSS 파일 왔다갔다 안 해도 됨
   - 클래스명 고민 불필요

2. **일관성**
   - 디자인 시스템이 내장됨
   - 색상, 간격, 크기가 체계적

3. **최적화**
   - 사용한 클래스만 빌드
   - 최종 CSS 파일 매우 작음

4. **반응형 쉬움**
   - `md:`, `lg:` 접두사로 간단히 처리

---

## Tailwind v4의 새로운 점

### v3 vs v4

**v3 (기존)**
- `tailwind.config.js` 필요
- PostCSS 설정 복잡

**v4 (2024)**
- 설정 파일 거의 불필요
- CSS 파일 하나로 끝
- 더 빠른 빌드
- CSS 변수 기반

---

## 실습 1: Tailwind 설치 (5분)

```bash
# 1. Vite + React 프로젝트 생성
npm create vite@latest my-tailwind-app -- --template react
cd my-tailwind-app

# 2. Tailwind 설치
npm install -D tailwindcss@next @tailwindcss/vite@next

# 3. Vite 설정 (vite.config.js)
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})

# 4. CSS 파일에 Tailwind 추가 (src/index.css)
@import "tailwindcss";

# 5. 실행
npm run dev
```

---

## 핵심 Utility 클래스 - Spacing

### Padding & Margin
```jsx
p-4    // padding: 1rem (16px)
px-4   // padding-left & padding-right
py-2   // padding-top & padding-bottom
pt-4   // padding-top
m-4    // margin: 1rem
mx-auto // margin-left & margin-right: auto (중앙 정렬)
```

**Spacing Scale**: 0, 0.5, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24...
- `p-4` = 1rem = 16px
- `p-8` = 2rem = 32px

---

## 핵심 Utility 클래스 - Colors

```jsx
// Background
bg-blue-500     // 파란색 배경
bg-red-500      // 빨간색 배경
bg-gray-100     // 회색 배경 (밝음)

// Text
text-white      // 흰색 텍스트
text-gray-600   // 회색 텍스트
text-blue-500   // 파란색 텍스트

// Border
border-gray-200 // 회색 테두리
```

**Color Scale**: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900
- 50: 가장 밝음
- 500: 기본
- 900: 가장 어두움

---

## 핵심 Utility 클래스 - Typography

```jsx
// 크기
text-sm       // 14px
text-base     // 16px (기본)
text-lg       // 18px
text-xl       // 20px
text-2xl      // 24px

// 굵기
font-normal   // 400
font-medium   // 500
font-bold     // 700

// 정렬
text-left
text-center
text-right
```

---

## 핵심 Utility 클래스 - Layout

```jsx
// Display
flex          // display: flex
grid          // display: grid
block         // display: block
hidden        // display: none

// Flexbox
justify-center    // justify-content: center
items-center      // align-items: center
gap-4            // gap: 1rem

// Width & Height
w-full       // width: 100%
w-64         // width: 16rem
h-screen     // height: 100vh
```

---

## 실습 2: 버튼 만들기 (5분)

```jsx
// 기존 CSS 방식
<button style={{
  padding: '8px 16px',
  backgroundColor: '#3b82f6',
  color: 'white',
  borderRadius: '4px',
  border: 'none',
  cursor: 'pointer'
}}>
  Click me
</button>

// Tailwind 방식
<button className="px-4 py-2 bg-blue-500 text-white rounded border-0 cursor-pointer">
  Click me
</button>

// 더 간단히 (Tailwind는 reset이 적용되어 있음)
<button className="px-4 py-2 bg-blue-500 text-white rounded">
  Click me
</button>
```

---

## 실습 3: 카드 변환하기 (10분)

**Before: Inline Style**
```jsx
<div style={{
  width: '300px',
  padding: '24px',
  border: '1px solid #e5e7eb',
  borderRadius: '8px',
  backgroundColor: 'white',
  boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
}}>
  <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>
    제목
  </h2>
  <p style={{ color: '#6b7280', lineHeight: '1.5' }}>
    내용입니다.
  </p>
</div>
```

---

## 실습 3: 카드 변환하기 (계속)

**After: Tailwind**
```jsx
<div className="w-[300px] p-6 border border-gray-200 rounded-lg bg-white shadow">
  <h2 className="text-xl font-bold mb-3">
    제목
  </h2>
  <p className="text-gray-600 leading-normal">
    내용입니다.
  </p>
</div>
```

**훨씬 간결하고 읽기 쉽습니다!**

---

## Arbitrary Values: 커스텀 값

```jsx
// 기본 값이 없을 때
w-[300px]          // width: 300px
bg-[#1da1f2]       // background-color: #1da1f2
text-[22px]        // font-size: 22px
top-[117px]        // top: 117px

// 대괄호 안에 원하는 값 입력
```

**주의**: 가능하면 기본 scale 사용 권장 (일관성)

---

## 실습 4: 네비게이션 바 변환 (10분)

**Before: Inline Style**
```jsx
<nav style={{
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '16px 24px',
  backgroundColor: '#1f2937',
  color: 'white'
}}>
  <div style={{ fontSize: '24px', fontWeight: 'bold' }}>Logo</div>
  <div style={{ display: 'flex', gap: '24px' }}>
    <a href="#" style={{ color: 'white' }}>Home</a>
    <a href="#" style={{ color: 'white' }}>About</a>
  </div>
</nav>
```

---

## 실습 4: 네비게이션 바 변환 (계속)

**After: Tailwind**
```jsx
<nav className="flex justify-between items-center px-6 py-4 bg-gray-800 text-white">
  <div className="text-2xl font-bold">Logo</div>
  <div className="flex gap-6">
    <a href="#" className="text-white">Home</a>
    <a href="#" className="text-white">About</a>
  </div>
</nav>
```

**비교**:
- `display: flex` → `flex`
- `justify-content: space-between` → `justify-between`
- `align-items: center` → `items-center`
- `padding: 16px 24px` → `px-6 py-4`

---

## Tailwind 클래스 순서 (권장)

```jsx
// 1. Layout (display, position)
// 2. Spacing (margin, padding)
// 3. Sizing (width, height)
// 4. Typography (font, text)
// 5. Visual (background, border, shadow)
// 6. Misc (cursor, opacity)

<div className="
  flex justify-center items-center
  p-4 m-2
  w-full h-64
  text-xl font-bold
  bg-blue-500 border border-gray-200 rounded shadow
  cursor-pointer
">
```

**일관된 순서 = 읽기 쉬운 코드**

---

## Tailwind IntelliSense

**VS Code 확장 설치 필수!**
- 자동완성
- 클래스 미리보기
- 오류 감지

```bash
# VS Code에서 검색
Tailwind CSS IntelliSense
```

**생산성이 10배 올라갑니다!**

---

## 자주 쓰는 조합 패턴

```jsx
// 중앙 정렬 박스
<div className="flex justify-center items-center h-screen">

// 기본 버튼
<button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">

// 카드
<div className="p-6 bg-white rounded-lg shadow">

// 입력창
<input className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500">

// 컨테이너 (중앙 정렬, 최대 너비)
<div className="max-w-6xl mx-auto px-4">
```

---

## 핵심 정리

### Tailwind의 핵심
1. **Utility-first**: 작은 단위 클래스 조합
2. **일관성**: 디자인 시스템 내장
3. **빠른 개발**: CSS 파일 불필요
4. **최적화**: 사용한 것만 빌드

### 자주 쓰는 클래스
- Spacing: `p-4`, `m-4`, `mx-auto`
- Colors: `bg-blue-500`, `text-white`
- Layout: `flex`, `grid`, `justify-center`
- Typography: `text-xl`, `font-bold`

---

## 실전 팁

1. **IntelliSense 필수**: 자동완성 없이는 힘듭니다
2. **공식 문서 참조**: https://tailwindcss.com/docs
3. **클래스 순서 일관성**: 가독성 향상
4. **재사용 컴포넌트**: 반복되면 컴포넌트로 추출
5. **기본 scale 우선**: Arbitrary values는 최후의 수단

---

## 내일 배울 내용

### Day 5: Spacing과 Sizing 시스템
- Tailwind의 spacing scale 완벽 이해
- Width, Height 제어
- 실습: 다양한 크기의 컴포넌트

**Tailwind의 핵심인 spacing을 마스터합니다!**

---

## 과제 (선택)

1. **기존 프로젝트 변환**
   - 어제 만든 카드를 Tailwind로 변환
   - 모든 inline style 제거

2. **버튼 컬렉션**
   - Primary, Secondary, Danger 버튼 만들기
   - 각각 다른 색상과 크기

3. **실험**
   - Tailwind 공식 문서 탐색
   - 다양한 color scale 시도 (blue-100, blue-500, blue-900)

**수고하셨습니다! 🎉**
