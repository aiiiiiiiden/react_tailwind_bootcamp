---
marp: true
theme: default
paginate: true
---

# FAQ - 자주 묻는 질문

## Day 04: Tailwind CSS 시작하기

**목적**: Tailwind CSS 학습 중 자주 발생하는 질문에 대한 답변 모음

---

## Q: Vanilla CSS와 Tailwind CSS로 만든 카드가 왜 다르게 보이나요?

다음 두 카드는 동일하게 보여야 하는데, 실제로는 약간 다르게 렌더링됩니다:

```jsx
<div className="flex flex-row items-center justify-center m-4 gap-4">
  {/* Vanilla CSS 카드 */}
  <div style={{
    width: '300px',
    padding: '24px',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    backgroundColor: 'white',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  }}>
    <h2 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '12px'}}>
      Title
    </h2>
    <p style={{color: '#6b7280', lineHeight: '1.5'}}>Content</p>
  </div>

  {/* Tailwind CSS 카드 */}
  <div className="w-[300px] p-6 border border-gray-200 rounded-lg bg-white shadow">
    <h2 className="text-xl font-bold mb-3">Title</h2>
    <p className="text-gray-600 leading-normal">Content</p>
  </div>
</div>
```

---

## A: Tailwind의 Preflight(CSS Reset) 때문입니다!

Tailwind CSS는 자동으로 **Preflight**라는 CSS Reset을 적용합니다. 이것이 두 카드의 차이를 만듭니다.

---

## 주요 차이점

### 1. **box-sizing 차이**

**Vanilla CSS** (기본):
```css
/* 브라우저 기본값 */
div {
  box-sizing: content-box; /* width에 padding/border 포함 안 됨 */
}
```

**Tailwind CSS** (Preflight 적용):
```css
*, *::before, *::after {
  box-sizing: border-box; /* width에 padding/border 포함됨 */
}
```

**결과**:
- Vanilla 카드: 실제 너비 = 300px + (24px × 2) + (1px × 2) = **350px**
- Tailwind 카드: 실제 너비 = **300px** (padding과 border 포함)

---

## 주요 차이점 (계속)

### 2. **기본 margin 제거**

**Vanilla CSS**:
```css
/* h2, p에 브라우저 기본 margin 존재 */
h2 { margin: 0.83em 0; }
p { margin: 1em 0; }
```

**Tailwind Preflight**:
```css
/* 모든 heading, paragraph의 기본 margin 제거 */
h1, h2, h3, h4, h5, h6, p {
  margin: 0;
}
```

**결과**: Vanilla 카드의 제목과 문단에 예상치 못한 여백이 생길 수 있음

---

## 주요 차이점 (계속)

### 3. **폰트 렌더링**

**Tailwind Preflight**:
```css
body {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

**결과**: Tailwind 카드의 텍스트가 더 부드럽게 렌더링됨

---

## 주요 차이점 (계속)

### 4. **line-height 차이**

**Vanilla CSS**:
```jsx
<p style={{lineHeight: '1.5'}}>Content</p>
```

**Tailwind CSS**:
```jsx
<p className="leading-normal">Content</p>
```

Tailwind의 `leading-normal`은 `line-height: 1.5`와 동일하지만, Preflight가 적용된 기준선이 다릅니다.

---

## 완전히 동일하게 만들려면?

### 방법 1: Vanilla CSS에도 Reset 적용

```css
/* src/index.css */
*,
*::before,
*::after {
  box-sizing: border-box;
}

h1, h2, h3, h4, h5, h6, p {
  margin: 0;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

---

## 완전히 동일하게 만들려면? (계속)

### 방법 2: Tailwind Preflight 비활성화 (권장 안 함)

```css
/* src/index.css */
@import "tailwindcss" layer(utilities);

/* Preflight를 수동으로 제어 */
```

**주의**: Preflight를 비활성화하면 Tailwind의 많은 이점이 사라집니다.

---

## 완전히 동일하게 만들려면? (계속)

### 방법 3: Vanilla CSS 카드를 Tailwind 기준에 맞춤

```jsx
{/* Vanilla CSS 카드 - box-sizing 고려 */}
<div style={{
  width: '348px',  // 300 + 24*2 (padding)
  padding: '24px',
  border: '1px solid #e5e7eb',
  borderRadius: '8px',
  backgroundColor: 'white',
  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
}}>
  <h2 style={{
    fontSize: '20px',
    fontWeight: 'bold',
    marginTop: 0,      // 기본 margin 제거
    marginBottom: '12px'
  }}>
    Title
  </h2>
  <p style={{
    color: '#6b7280',
    lineHeight: '1.5',
    margin: 0          // 기본 margin 제거
  }}>
    Content
  </p>
</div>
```

---

## Preflight의 다른 주요 변경사항

### 1. **border 스타일 정규화**
```css
*, *::before, *::after {
  border-width: 0;
  border-style: solid;
  border-color: theme('borderColor.DEFAULT', currentColor);
}
```

### 2. **이미지 기본 스타일**
```css
img, video {
  max-width: 100%;
  height: auto;
}
```

### 3. **버튼 스타일 정규화**
```css
button, [role="button"] {
  cursor: pointer;
}
```

---

## 실습: 차이 확인하기

### 개발자 도구로 확인해보세요

1. **브라우저 개발자 도구 열기** (F12 또는 Cmd+Opt+I)
2. **Elements 탭**에서 두 카드 선택
3. **Computed** 탭에서 다음 값 비교:
   - `box-sizing`
   - `width` (실제 계산된 너비)
   - `margin` (h2, p 요소)
   - `font-family`

---

## 핵심 정리

### Tailwind CSS = Utility Classes + Preflight

1. **Preflight는 필수**
   - 일관된 크로스 브라우저 경험
   - 예측 가능한 레이아웃
   - 브라우저 기본 스타일 제거

2. **Vanilla CSS와 섞어 쓸 때 주의**
   - Preflight가 적용됨을 항상 염두
   - box-sizing: border-box 고려
   - 기본 margin/padding 제거됨

3. **권장 사항**
   - Tailwind 프로젝트에서는 **Tailwind만 사용**
   - 불가피하게 inline style 사용 시 Preflight 고려

---

## 추가 질문

### Q: Preflight 없이 Tailwind를 쓸 수 있나요?

**A**: 가능하지만 **매우 권장하지 않습니다**.

Preflight를 비활성화하면:
- ❌ 브라우저마다 다른 기본 스타일
- ❌ 예측 불가능한 spacing
- ❌ box-sizing 문제
- ❌ Tailwind 클래스가 의도대로 작동 안 함

**결론**: Preflight는 Tailwind의 핵심 기능입니다!

---

## Q: Preflight를 비활성화하면 구체적으로 어떤 이점이 사라지나요?

**A**: 10가지 핵심 이점을 잃게 됩니다. 실제 예시와 함께 알아봅시다.

---

## 사라지는 이점 1: box-sizing 통일

### Preflight가 있을 때:
```css
*, *::before, *::after {
  box-sizing: border-box;
}
```

```jsx
// ✅ 예측 가능한 크기
<div className="w-64 p-4 border-2">
  {/* 실제 너비: 256px (16rem) */}
  {/* padding과 border 포함 */}
</div>
```

### Preflight가 없을 때:
```jsx
// ❌ 예측 불가능
<div className="w-64 p-4 border-2">
  {/* 실제 너비: 256px + 32px (padding) + 4px (border) = 292px */}
  {/* 레이아웃 깨짐! */}
</div>
```

**문제**: 모든 요소의 크기를 계산할 때마다 padding/border를 고려해야 함

---

## 사라지는 이점 2: 기본 margin/padding 제거

### Preflight가 있을 때:
```css
h1, h2, h3, h4, h5, h6, p, blockquote, figure, ul, ol {
  margin: 0;
  padding: 0;
}
```

```jsx
// ✅ 정확한 spacing 제어
<div className="space-y-4">
  <h2 className="mb-2">Title</h2>  {/* 정확히 8px 아래 여백 */}
  <p>Content</p>
</div>
```

### Preflight가 없을 때:
```jsx
// ❌ 예상치 못한 여백
<div className="space-y-4">
  <h2 className="mb-2">Title</h2>
  {/* 브라우저 기본 margin + Tailwind margin = 예측 불가능 */}
  <p>Content</p>
  {/* 브라우저 기본 margin 추가 */}
</div>
```

**문제**: Chrome vs Safari vs Firefox마다 다른 기본 margin

---

## 사라지는 이점 3: 폰트 렌더링 최적화

### Preflight가 있을 때:
```css
body {
  font-family: ui-sans-serif, system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

**결과**: 모든 OS/브라우저에서 부드러운 폰트 렌더링

### Preflight가 없을 때:
- Windows: 거친 폰트 렌더링
- macOS: 브라우저마다 다른 렌더링
- Linux: 일관성 없는 폰트

**비교**:
```jsx
// Preflight O: 부드럽고 선명
<p className="text-gray-900">Beautiful Text</p>

// Preflight X: 거칠고 흐림
<p className="text-gray-900">Jagged Text</p>
```

---

## 사라지는 이점 4: border 스타일 정규화

### Preflight가 있을 때:
```css
*, *::before, *::after {
  border-width: 0;
  border-style: solid;
}
```

```jsx
// ✅ border 클래스만으로 충분
<div className="border border-gray-200">
  {/* border: 1px solid #e5e7eb */}
</div>
```

### Preflight가 없을 때:
```jsx
// ❌ border 스타일을 명시해야 함
<div className="border border-gray-200" style={{borderStyle: 'solid'}}>
  {/* Tailwind만으로는 부족 */}
</div>
```

**문제**: 브라우저 기본값은 `border-style: none`

---

## 사라지는 이점 5: 이미지/비디오 반응형

### Preflight가 있을 때:
```css
img, video {
  max-width: 100%;
  height: auto;
}
```

```jsx
// ✅ 자동 반응형
<img src="large.jpg" alt="Big Image" />
{/* 부모 요소를 넘지 않음 */}
```

### Preflight가 없을 때:
```jsx
// ❌ 이미지가 넘침
<img src="large.jpg" alt="Big Image" />
{/* 원본 크기 그대로, 레이아웃 깨짐 */}

// 수동으로 추가해야 함
<img src="large.jpg" className="max-w-full h-auto" alt="Big Image" />
```

---

## 사라지는 이점 6: 버튼 커서 스타일

### Preflight가 있을 때:
```css
button, [role="button"] {
  cursor: pointer;
}
```

```jsx
// ✅ 버튼에 자동으로 pointer 커서
<button className="px-4 py-2 bg-blue-500">Click</button>
```

### Preflight가 없을 때:
```jsx
// ❌ 기본 커서 (화살표)
<button className="px-4 py-2 bg-blue-500">Click</button>
{/* UX 저하 */}

// 수동으로 추가해야 함
<button className="px-4 py-2 bg-blue-500 cursor-pointer">Click</button>
```

---

## 사라지는 이점 7: 일관된 line-height

### Preflight가 있을 때:
```css
body {
  line-height: 1.5;
}
```

```jsx
// ✅ 읽기 좋은 기본 줄 간격
<p className="text-base">
  Long paragraph text...
</p>
```

### Preflight가 없을 때:
```jsx
// ❌ 브라우저 기본값 (보통 1.2)
<p className="text-base">
  Long paragraph text...
  {/* 줄 간격이 좁아서 읽기 힘듦 */}
</p>
```

---

## 사라지는 이점 8: form 요소 정규화

### Preflight가 있을 때:
```css
button, input, select, textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: inherit;
}
```

```jsx
// ✅ 일관된 폰트
<div className="font-sans text-base">
  <input type="text" className="border p-2" />
  {/* body의 폰트를 상속 */}
</div>
```

### Preflight가 없을 때:
```jsx
// ❌ input만 다른 폰트
<div className="font-sans text-base">
  <input type="text" className="border p-2" />
  {/* Arial이나 system 기본 폰트 사용 */}
</div>
```

---

## 사라지는 이점 9: 리스트 스타일 제거

### Preflight가 있을 때:
```css
ol, ul {
  list-style: none;
  padding: 0;
}
```

```jsx
// ✅ 깔끔한 리스트
<ul className="space-y-2">
  <li className="flex items-center gap-2">
    <CheckIcon /> Item 1
  </li>
</ul>
```

### Preflight가 없을 때:
```jsx
// ❌ bullet/숫자 + 기본 padding
<ul className="space-y-2">
  <li className="flex items-center gap-2">
    • <CheckIcon /> Item 1  {/* bullet이 중복 */}
  </li>
</ul>
```

---

## 사라지는 이점 10: 크로스 브라우저 일관성

### Preflight가 있을 때:
```jsx
// ✅ 모든 브라우저에서 동일
<div className="p-4 text-base leading-normal">
  Content
</div>
```

**동일한 렌더링**:
- Chrome ✅
- Safari ✅
- Firefox ✅
- Edge ✅

### Preflight가 없을 때:
```jsx
// ❌ 브라우저마다 다름
<div className="p-4 text-base leading-normal">
  Content
</div>
```

**다른 렌더링**:
- Chrome: margin 1em
- Safari: margin 1.12em
- Firefox: margin 1em, 다른 line-height
- Edge: 미묘하게 다른 폰트 크기

---

## 실제 프로젝트 영향 비교

### Preflight 있음 (✅):
```jsx
// 카드 컴포넌트
<div className="w-64 p-6 bg-white border rounded-lg">
  <img src="product.jpg" alt="Product" />
  <h3 className="text-xl font-bold mt-4">Product Name</h3>
  <p className="text-gray-600 mt-2">Description</p>
  <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
    Buy Now
  </button>
</div>
```

**결과**:
- ✅ 모든 브라우저에서 동일
- ✅ 레이아웃 예측 가능
- ✅ 이미지 자동 반응형
- ✅ 버튼에 pointer 커서

---

## 실제 프로젝트 영향 비교 (계속)

### Preflight 없음 (❌):
```jsx
// 같은 카드 컴포넌트
<div className="w-64 p-6 bg-white border rounded-lg"
     style={{boxSizing: 'border-box', borderStyle: 'solid'}}>
  <img src="product.jpg" alt="Product"
       className="max-w-full h-auto" />
  <h3 className="text-xl font-bold mt-4"
      style={{margin: 0, marginTop: '1rem'}}>
    Product Name
  </h3>
  <p className="text-gray-600 mt-2"
     style={{margin: 0, marginTop: '0.5rem'}}>
    Description
  </p>
  <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
          style={{fontFamily: 'inherit'}}>
    Buy Now
  </button>
</div>
```

**결과**:
- ❌ 2배 이상 긴 코드
- ❌ inline style과 className 혼재
- ❌ 여전히 브라우저 차이 존재 가능
- ❌ 유지보수 악몽

---

## Preflight를 비활성화하는 방법 (참고용)

### Tailwind v4:
```css
/* src/index.css */
@import "tailwindcss/theme";
@import "tailwindcss/utilities";
/* preflight 제외 */
```

### 부분 비활성화:
```css
@import "tailwindcss";

/* 특정 요소만 브라우저 기본값 복원 */
ul, ol {
  list-style: revert;
  padding-left: revert;
}
```

**경고**: 정말 필요한 경우만 사용하세요!

---

## 결론: Preflight는 필수

### Preflight 없이 Tailwind 사용 = 🔥

1. **개발 속도 50% 감소**
   - 모든 요소에 추가 스타일 필요
   - 브라우저 차이 수동 해결

2. **코드 2배 증가**
   - inline style 혼재
   - 반복적인 reset 코드

3. **버그 증가**
   - 브라우저마다 다른 동작
   - 예측 불가능한 레이아웃

4. **Tailwind 장점 상실**
   - 일관성 없음
   - 유틸리티 클래스만으로 부족

**Preflight = Tailwind의 DNA**

---

## 참고 자료

**Tailwind CSS Preflight 공식 문서**:
https://tailwindcss.com/docs/preflight

**브라우저 기본 스타일 차이**:
- https://cssreset.com/what-is-a-css-reset/
- https://meyerweb.com/eric/tools/css/reset/

**box-sizing 설명**:
- https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing

---

## Q: Tailwind CSS의 단점은 무엇인가요?

**A**: Tailwind CSS도 완벽하지 않습니다. 주요 단점과 해결 방법을 알아봅시다.

---

## 단점 1: HTML이 지저분해 보임 (긴 클래스명)

### 문제점:
```jsx
// 😰 클래스명이 너무 길다!
<button className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-lg hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200">
  Click me
</button>
```

### 해결 방법:

#### 1. **컴포넌트 추출** (✅ 가장 권장)
```jsx
// components/Button.jsx
export function PrimaryButton({ children, ...props }) {
  return (
    <button
      className="inline-flex items-center justify-center px-6 py-3
                 text-base font-medium text-white bg-gradient-to-r
                 from-blue-500 to-indigo-600 rounded-lg shadow-lg
                 hover:from-blue-600 hover:to-indigo-700"
      {...props}
    >
      {children}
    </button>
  )
}

// 사용
<PrimaryButton>Click me</PrimaryButton>
```

---

## 단점 1 해결 방법 (계속)

#### 2. **CSS 변수 활용**
```css
/* src/index.css */
@import "tailwindcss";

@theme {
  --color-brand-primary: #3b82f6;
  --color-brand-secondary: #6366f1;
}
```

```jsx
<button className="px-6 py-3 bg-[--color-brand-primary] text-white">
  Click me
</button>
```

#### 3. **clsx/classnames 라이브러리** (조건부 스타일)
```jsx
import clsx from 'clsx'

<button className={clsx(
  'px-6 py-3 rounded-lg',
  isPrimary && 'bg-blue-500 text-white',
  isSecondary && 'bg-gray-200 text-gray-800',
  isDisabled && 'opacity-50 cursor-not-allowed'
)}>
```

---

## 단점 2: 학습 곡선 (클래스명 외우기)

### 문제점:
- `justify-content: center`가 `justify-center`인지 `justify-items-center`인지?
- `margin-left`는 `ml-4`? `mx-4`? `m-left-4`?
- 수백 개의 클래스명을 외워야 함

### 해결 방법:

#### 1. **Tailwind CSS IntelliSense** (VS Code 확장)
```bash
# VS Code에서 설치
Tailwind CSS IntelliSense
```

**기능**:
- ✅ 자동완성 (타이핑하면 제안)
- ✅ 클래스 미리보기 (hover 시 CSS 값 표시)
- ✅ 문법 강조
- ✅ 린팅 (잘못된 클래스명 경고)

---

## 단점 2 해결 방법 (계속)

#### 2. **공식 문서 활용**
```
https://tailwindcss.com/docs
```
- 검색 기능이 매우 빠름 (Cmd+K)
- 모든 클래스 예시 포함
- 복사-붙여넣기 가능한 예제

#### 3. **치트시트 활용**
```
https://nerdcave.com/tailwind-cheat-sheet
https://tailwindcomponents.com/cheatsheet
```

#### 4. **반복 사용으로 자연스럽게 암기**
- 자주 쓰는 클래스는 금방 외워짐
- `flex`, `grid`, `p-4`, `text-center` 등
- 2-3주면 기본 클래스는 암기됨

---

## 단점 3: 관심사의 분리 위반?

### 문제점:
```jsx
// HTML과 CSS가 섞여 있다?
<div className="flex justify-center items-center p-4 bg-blue-500">
```

전통적인 CSS 사상:
- HTML: 구조
- CSS: 스타일
- JS: 동작

**"HTML에 스타일을 넣는 건 inline style과 뭐가 다른가?"**

---

## 단점 3 해결 방법

### 현대적 관점: **컴포넌트가 관심사**

```jsx
// ❌ 과거: 파일 타입으로 분리
styles.css
index.html
script.js

// ✅ 현재: 컴포넌트로 분리
Button/
  Button.jsx  (구조 + 스타일 + 동작)
  Button.test.js

Card/
  Card.jsx
  Card.test.js
```

**React/Vue/Svelte 등 컴포넌트 기반 개발에서는**:
- 컴포넌트 = 하나의 관심사
- 스타일도 컴포넌트의 일부
- Tailwind는 이 철학과 완벽히 맞음

---

## 단점 3 해결 방법 (계속)

### CSS와의 실제 차이점:

```jsx
// Inline Style ❌
<div style={{display: 'flex', padding: '16px'}}>
// 문제: 반응형 불가, 상태 불가, 재사용 불가

// Tailwind ✅
<div className="flex p-4 hover:bg-blue-500 md:p-8">
// 장점: 반응형, 상태, 재사용 가능
```

**결론**: Tailwind는 inline style이 아니라 **디자인 시스템**입니다.

---

## 단점 4: 반복되는 클래스 조합 (코드 중복)

### 문제점:
```jsx
// 같은 스타일을 계속 반복
<button className="px-4 py-2 bg-blue-500 text-white rounded">
  Button 1
</button>
<button className="px-4 py-2 bg-blue-500 text-white rounded">
  Button 2
</button>
<button className="px-4 py-2 bg-blue-500 text-white rounded">
  Button 3
</button>
```

### 해결 방법:

#### 1. **컴포넌트 추출** (가장 권장)
```jsx
function Button({ children }) {
  return (
    <button className="px-4 py-2 bg-blue-500 text-white rounded">
      {children}
    </button>
  )
}
```

---

## 단점 4 해결 방법 (계속)

#### 2. **상수로 추출**
```jsx
const BUTTON_CLASSES = "px-4 py-2 bg-blue-500 text-white rounded"

<button className={BUTTON_CLASSES}>Button 1</button>
<button className={BUTTON_CLASSES}>Button 2</button>
```

#### 3. **@apply 지시자** (⚠️ 신중하게 사용)
```css
/* src/index.css */
@import "tailwindcss";

.btn-primary {
  @apply px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600;
}
```

```jsx
<button className="btn-primary">Button</button>
```

**주의**: `@apply`를 남용하면 Tailwind의 이점이 사라집니다!

---

## 단점 5: 디버깅이 어려움

### 문제점:
```jsx
// 개발자 도구에서 스타일 찾기 힘듦
<div className="flex items-center justify-between p-4 bg-white
                 border border-gray-200 rounded-lg shadow-sm">
```

브라우저 개발자 도구:
```css
.flex { display: flex; }
.items-center { align-items: center; }
.justify-between { justify-content: space-between; }
/* ... 수십 개의 클래스 */
```

### 해결 방법:

#### 1. **Tailwind CSS IntelliSense**
- VS Code에서 클래스에 마우스 오버 → CSS 값 즉시 확인

---

## 단점 5 해결 방법 (계속)

#### 2. **브라우저 확장 프로그램**
```
Tailwind CSS Devtools (Chrome/Firefox)
```

**기능**:
- Tailwind 클래스를 그룹화해서 보여줌
- 실제 CSS 값과 매핑
- 클래스 검색 기능

#### 3. **컴포넌트 이름으로 찾기**
```jsx
// ✅ 의미 있는 컴포넌트명
function ProductCard() {
  return <div className="...">
}

// ❌ 의미 없는 div
<div className="...">
```

개발자 도구에서 `ProductCard` 컴포넌트를 찾으면 됨!

---

## 단점 6: 커스터마이징이 복잡할 수 있음

### 문제점:
- 기본 디자인 시스템에 없는 값 필요
- 회사 브랜드 컬러 추가
- 특정 spacing 값 필요

### 해결 방법:

#### 1. **Arbitrary Values** (임의 값)
```jsx
// 빠른 해결: 대괄호 사용
<div className="w-[347px] bg-[#1da1f2] top-[117px]">
```

**주의**: 남용하면 일관성이 깨짐. 자주 쓰는 값은 theme에 추가!

---

## 단점 6 해결 방법 (계속)

#### 2. **Tailwind v4 CSS Variables** (✅ 권장)
```css
/* src/index.css */
@import "tailwindcss";

@theme {
  /* 브랜드 컬러 */
  --color-brand-primary: #1da1f2;
  --color-brand-secondary: #14171a;

  /* 커스텀 spacing */
  --spacing-header: 72px;

  /* 커스텀 폰트 */
  --font-family-brand: 'Inter', sans-serif;
}
```

```jsx
<div className="bg-brand-primary h-[--spacing-header] font-brand">
```

---

## 단점 7: 최종 번들 크기 걱정?

### 문제점 (과거):
- Tailwind v3: 사용하지 않는 클래스도 포함될 수 있음
- 수동 purge 설정 필요

### 해결 (현재):

#### **Tailwind v4: 자동 최적화** ✅
```css
/* 사용한 클래스만 자동으로 포함 */
```

**실제 번들 크기**:
- 작은 프로젝트: ~5-10KB (gzipped)
- 중간 프로젝트: ~10-20KB (gzipped)
- 큰 프로젝트: ~20-30KB (gzipped)

**비교**:
- Bootstrap: ~25KB (gzipped, 전체 포함)
- Material-UI: ~80KB+ (gzipped)

---

## 단점 요약 & 해결책 정리

| 단점 | 심각도 | 해결 방법 |
|------|--------|----------|
| 긴 클래스명 | 🟡 중간 | 컴포넌트 추출 |
| 학습 곡선 | 🟡 중간 | IntelliSense + 공식 문서 |
| 관심사 분리 | 🟢 낮음 | 컴포넌트 기반 사고 |
| 코드 중복 | 🟡 중간 | 컴포넌트 재사용 |
| 디버깅 | 🟢 낮음 | DevTools + 컴포넌트명 |
| 커스터마이징 | 🟡 중간 | CSS Variables (v4) |
| 번들 크기 | 🟢 낮음 | 자동 최적화 (v4) |

**결론**: 대부분의 단점은 **컴포넌트 추출**로 해결됩니다!

---

## 실전 팁: 단점을 최소화하는 방법

### 1. **3번 이상 반복되면 컴포넌트로**
```jsx
// ❌ 반복
<div className="p-4 bg-white rounded-lg shadow">...</div>
<div className="p-4 bg-white rounded-lg shadow">...</div>
<div className="p-4 bg-white rounded-lg shadow">...</div>

// ✅ 컴포넌트
function Card({ children }) {
  return <div className="p-4 bg-white rounded-lg shadow">{children}</div>
}
```

### 2. **IntelliSense는 필수**
- VS Code 확장 설치
- 자동완성 없이는 비효율적

### 3. **공식 문서를 즐겨찾기**
- 가장 빠르고 정확한 참고 자료

---

## Tailwind를 사용하지 말아야 할 때

### ❌ 이런 경우는 Tailwind가 안 맞을 수 있습니다:

1. **매우 복잡한 애니메이션 중심 사이트**
   - GSAP, Framer Motion 같은 라이브러리와 함께 CSS-in-JS가 더 나음

2. **기존 대형 레거시 프로젝트**
   - 마이그레이션 비용이 너무 큼
   - 점진적 도입도 어려움

3. **팀이 Tailwind를 싫어함**
   - 팀 합의가 중요
   - 강요하면 생산성 하락

4. **완전히 커스텀한 디자인 시스템**
   - 모든 값이 unique
   - Tailwind의 제약이 오히려 방해

---

## 참고 자료

**Tailwind CSS 단점 토론**:
- https://tailwindcss.com/docs/reusing-styles
- https://adamwathan.me/css-utility-classes-and-separation-of-concerns/

**커뮤니티 의견**:
- Reddit: r/tailwindcss
- Twitter: #tailwindcss

**대안 비교**:
- CSS Modules
- styled-components
- Emotion
- Vanilla Extract

---

## 다음 학습

**Day 05: Spacing과 Sizing 시스템**
- Tailwind의 spacing scale 완벽 이해
- padding, margin의 체계적 사용
- width, height 제어

**Preflight를 이해하면 Tailwind를 더 잘 활용할 수 있습니다!** 🎉
