---
marp: true
theme: default
paginate: true
---

# FAQ - 자주 묻는 질문

## React + Tailwind Bootcamp

**목적**: 학습 중 자주 발생하는 질문에 대한 답변 모음

---

## Q: Reset을 통해 box-sizing: border-box를 적용하는 방법이 있어?

**A: 네, 여러 가지 방법이 있습니다!**

가장 일반적이고 권장되는 방법들을 소개합니다.

---

## 방법 1: 간단한 CSS Reset (추천)

```css
/* src/index.css */

/* Universal Box Sizing */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* 추가 기본 Reset */
* {
  margin: 0;
  padding: 0;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
}
```

**장점**: 간단하고 가볍고, 정확히 필요한 것만 포함

---

## 방법 2: Josh Comeau의 Modern CSS Reset

```css
/* src/index.css */

/*
  Josh's Custom CSS Reset
  https://www.joshwcomeau.com/css/custom-css-reset/
*/

*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

#root,
#__next {
  isolation: isolate;
}
```

**장점**: 현대적인 best practices 포함, React/Next.js에 최적화

---

## 방법 3: Eric Meyer's CSS Reset (클래식)

```css
/* src/index.css */

/* Eric Meyer's CSS Reset */
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* Box Sizing */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* HTML5 display-role reset */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}
```

**장점**: 가장 포괄적, 모든 브라우저 일관성
**단점**: 파일 크기가 큼

---

## 방법 4: Normalize.css (NPM 패키지)

```bash
# 설치
npm install normalize.css
```

```jsx
// src/main.jsx 또는 src/index.jsx
import "normalize.css";
import "./index.css";
```

```css
/* src/index.css */
/* normalize.css 이후 box-sizing 추가 */
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

**장점**: 브라우저 기본 스타일을 보존하면서 일관성 확보
**단점**: 별도 패키지 설치 필요

---

## 방법 5: Tailwind CSS 사용 시 (자동 적용!)

**좋은 소식**: Tailwind CSS를 사용하면 `box-sizing: border-box`가 **자동으로 적용**됩니다!

```css
/* src/index.css */
@import "tailwindcss";

/* Tailwind의 Preflight가 자동으로 다음을 포함합니다:
   - box-sizing: border-box
   - margin/padding reset
   - 기타 normalize 작업
*/
```

**Tailwind Preflight가 자동으로 해주는 것들**:

- ✅ `box-sizing: border-box`
- ✅ Margin/Padding reset
- ✅ 기본 line-height
- ✅ 폰트 스무딩
- ✅ 이미지 최적화

---

## Tailwind Preflight 비활성화 시

만약 Tailwind의 자동 reset을 끄고 싶다면:

```js
// tailwind.config.js
export default {
  corePlugins: {
    preflight: false, // Preflight 비활성화
  },
};
```

```css
/* src/index.css */
@import "tailwindcss";

/* 수동으로 box-sizing 추가 */
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

**주의**: Preflight를 끄면 수동으로 reset을 추가해야 합니다!

---

## 실전 권장 방법

### React + Tailwind 프로젝트 (이 커리큘럼)

```css
/* src/index.css */
@import "tailwindcss";

/* Tailwind가 box-sizing을 자동으로 설정하므로 추가 작업 불필요! */
/* 필요시 커스텀 스타일만 추가 */
```

### React (Tailwind 없이)

```css
/* src/index.css */

/* Josh Comeau's Modern Reset (추천) */
*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}
```

---

## 비교표

| 방법               | 파일 크기 | 포괄성 | 현대성 | 추천도     |
| ------------------ | --------- | ------ | ------ | ---------- |
| 간단한 Reset       | ⭐        | ⭐⭐   | ⭐⭐⭐ | ⭐⭐⭐     |
| Josh Comeau Reset  | ⭐⭐      | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Eric Meyer Reset   | ⭐⭐⭐    | ⭐⭐⭐ | ⭐⭐   | ⭐⭐⭐     |
| Normalize.css      | ⭐⭐      | ⭐⭐⭐ | ⭐⭐   | ⭐⭐⭐     |
| Tailwind Preflight | ⭐        | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

---

## 실습: Box-sizing 적용 확인하기

```jsx
// App.jsx
export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Box-Sizing Test</h1>

      <div
        style={{
          width: "200px",
          padding: "20px",
          border: "5px solid blue",
          backgroundColor: "lightblue",
          marginBottom: "20px",
        }}
      >
        <p>이 박스의 전체 너비는?</p>
        <p>
          border-box라면: 200px
          <br />
          content-box라면: 250px (200 + 20*2 + 5*2)
        </p>
      </div>

      <button
        onClick={() => {
          const div = document.querySelector("div div");
          const computedStyle = window.getComputedStyle(div);
          alert(`box-sizing: ${computedStyle.boxSizing}`);
        }}
        style={{
          padding: "10px 20px",
          backgroundColor: "#3b82f6",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Check box-sizing
      </button>
    </div>
  );
}
```

---

## DevTools로 확인하기

### Chrome DevTools에서 Box Model 확인

1. **F12** 또는 **우클릭 → 검사**
2. Elements 탭에서 요소 선택
3. Computed 탭 클릭
4. Box Model 다이어그램 확인

**표시되는 정보**:

- Content (파란색)
- Padding (초록색)
- Border (노란색)
- Margin (주황색)

**box-sizing: border-box**인 경우:
→ Width/Height가 border까지 포함

---

## 핵심 정리

### ✅ 해야 할 것

1. **Tailwind 사용 시**: 아무것도 안 해도 됨 (Preflight 자동 적용)
2. **Tailwind 없이**: Josh Comeau의 Modern Reset 추천
3. **프로젝트 시작 시**: 항상 box-sizing 설정 확인

### ❌ 하지 말아야 할 것

1. Reset 없이 프로젝트 시작
2. 여러 Reset을 동시에 사용
3. box-sizing을 요소별로 다르게 설정

### 💡 Best Practice

```css
/* 프로젝트 시작 시 항상 index.css 최상단에 */
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

---

## 추가 리소스

### 추천 Reset/Normalize

- [Josh Comeau's Reset](https://www.joshwcomeau.com/css/custom-css-reset/)
- [Modern CSS Reset by Andy Bell](https://piccalil.li/blog/a-modern-css-reset/)
- [Tailwind Preflight](https://tailwindcss.com/docs/preflight)
- [Normalize.css](https://necolas.github.io/normalize.css/)

### 학습 자료

- [MDN: box-sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)
- [CSS-Tricks: Box Sizing](https://css-tricks.com/box-sizing/)

---

## Q: div에 margin: 0, padding: 0을 설정했는데 div 사이에 여백이 생기는 이유가 뭐예요?

**A: `<p>` 태그와 같은 자식 요소의 기본 margin 때문입니다!**

### 문제 상황

```jsx
<div style={{ padding: "0px", backgroundColor: "blue" }}>
  <p>패딩 예제 : padding: 40px</p>
</div>;
{
  /* 마진 예제 */
}
<div style={{ margin: "0px", backgroundColor: "red" }}>
  <p>마진 예제 : margin: 40px</p>
</div>;
```

위 코드에서 div의 padding과 margin을 0px로 설정했는데도 두 div 사이에 여백이 생깁니다.

---

### 원인

브라우저는 `<p>` 태그에 **기본 margin**을 적용합니다:

```css
/* 브라우저 기본 스타일 */
p {
  margin-block-start: 1em; /* 위쪽 margin: 약 16px */
  margin-block-end: 1em; /* 아래쪽 margin: 약 16px */
}
```

**무슨 일이 일어나는가?**

1. 첫 번째 div 내부의 `<p>`가 아래쪽에 1em margin을 가짐
2. 두 번째 div 내부의 `<p>`가 위쪽에 1em margin을 가짐
3. 이 두 margin이 **collapse(병합)**되어 여백으로 보임

---

### 해결 방법

#### 방법 1: CSS Reset 사용 (추천)

```css
/* src/index.css */
* {
  margin: 0;
  padding: 0;
}
```

모든 요소의 기본 margin/padding을 제거합니다.

#### 방법 2: `<p>` 태그에 직접 스타일 적용

```jsx
<div style={{padding: '0px', backgroundColor: 'blue'}}>
  <p style={{margin: 0}}>패딩 예제 : padding: 40px</p>
</div>
<div style={{margin: '0px', backgroundColor: 'red'}}>
  <p style={{margin: 0}}>마진 예제 : margin: 40px</p>
</div>
```

#### 방법 3: Tailwind Utility 사용

```jsx
<div className="p-0 bg-blue-500">
  <p className="m-0">패딩 예제</p>
</div>
<div className="m-0 bg-red-500">
  <p className="m-0">마진 예제</p>
</div>
```

---

### 추가로 알아두면 좋은 것

**Margin Collapse(마진 병합)**

```jsx
<div style={{backgroundColor: 'blue'}}>
  <p style={{margin: '20px 0'}}>첫 번째</p>
</div>
<div style={{backgroundColor: 'red'}}>
  <p style={{margin: '30px 0'}}>두 번째</p>
</div>
```

- 첫 번째 p의 하단 margin: 20px
- 두 번째 p의 상단 margin: 30px
- 실제 여백: **30px** (큰 값으로 병합됨, 50px이 아님!)

**Margin Collapse를 방지하는 방법**:

- `overflow: hidden` 또는 `overflow: auto` 적용
- `border` 또는 `padding` 추가
- `display: flex` 또는 `display: grid` 사용

---

### DevTools로 확인하기

1. **F12** → Elements 탭
2. `<p>` 태그 선택
3. Computed 탭에서 Box Model 확인
4. margin 값 확인 (보통 16px로 표시됨)

---

### 핵심 정리

- ✅ **div에만 스타일을 주면 안 됨** → 자식 요소도 확인 필요
- ✅ **`<p>`, `<h1>` 등은 기본 margin을 가짐** → Reset CSS로 제거
- ✅ **Tailwind를 사용하면 Preflight가 자동으로 reset** → 문제 발생 안 함
- ✅ **DevTools로 정확한 여백 원인 파악** → Computed 탭 활용

---

## Q: box-sizing 예제 코드에서 두 div 사이에 여백이 생기는 이유가 뭐예요?

**A: 첫 번째 div에 `marginBottom: '20px'`가 명시적으로 설정되어 있기 때문입니다!**

### 문제 상황

```jsx
<div style={{
  width: '200px',
  padding: '20px',
  border: '2px solid black',
  boxSizing: 'content-box',
  backgroundColor: '#fbbf24',
  marginBottom: '20px',  // 👈 여기!
}}>
  content-box: 실제 너비 244px
</div>
<div style={{
  width: '200px',
  padding: '20px',
  border: '2px solid black',
  boxSizing: 'border-box',
  backgroundColor: '#34d399',
}}>
  border-box: 실제 너비 200px
</div>
```

---

### 원인

첫 번째 div의 스타일에 `marginBottom: '20px'`가 **의도적으로** 설정되어 있습니다.

**왜 이렇게 했을까요?**

1. **시각적 구분**: 두 박스를 명확하게 구분하기 위해
2. **가독성**: 예제를 보기 편하게 하기 위해
3. **실전 연습**: 실제 개발에서도 요소 간 간격을 자주 설정함

---

### 여백을 제거하려면?

#### 방법 1: `marginBottom` 제거

```jsx
<div
  style={{
    width: "200px",
    padding: "20px",
    border: "2px solid black",
    boxSizing: "content-box",
    backgroundColor: "#fbbf24",
    // marginBottom: '20px', ← 이 줄 제거
  }}
>
  content-box: 실제 너비 244px
</div>
```

#### 방법 2: `marginBottom`을 0으로 변경

```jsx
<div
  style={{
    width: "200px",
    padding: "20px",
    border: "2px solid black",
    boxSizing: "content-box",
    backgroundColor: "#fbbf24",
    marginBottom: "0px", // 0으로 변경
  }}
>
  content-box: 실제 너비 244px
</div>
```

#### 방법 3: Tailwind 사용

```jsx
<div className="w-[200px] p-5 border-2 border-black box-content bg-amber-400 mb-0">
  content-box: 실제 너비 244px
</div>
<div className="w-[200px] p-5 border-2 border-black box-border bg-emerald-400">
  border-box: 실제 너비 200px
</div>
```

---

### 앞의 FAQ와의 차이점

#### 이전 FAQ: 의도하지 않은 여백

```jsx
// margin: 0을 설정했는데도 여백이 생김 (의도하지 않음)
<div style={{ margin: "0px" }}>
  <p>텍스트</p> // ← p 태그의 기본 margin 때문
</div>
```

**원인**: 자식 요소의 **기본 스타일**
**해결**: CSS Reset 필요

#### 이번 FAQ: 의도적인 여백

```jsx
// marginBottom을 명시적으로 설정 (의도함)
<div style={{ marginBottom: "20px" }}>텍스트</div>
```

**원인**: **명시적으로 설정한 margin**
**해결**: margin 값 수정 또는 제거

---

### 핵심 정리

- ✅ **코드를 잘 읽어보자** → 명시적으로 설정된 스타일이 있는지 확인
- ✅ **`marginBottom`은 자주 사용됨** → 요소 간 간격을 위해 일부러 추가
- ✅ **의도적 여백 vs 의도하지 않은 여백** → 원인이 다르니 구분해서 해결
- ✅ **DevTools 활용** → Computed 탭에서 margin 값이 어디서 왔는지 확인

---

### DevTools로 확인하기

1. **F12** → Elements 탭
2. 첫 번째 div 선택
3. **Styles 탭** 확인
   - `marginBottom: 20px` 표시됨
   - 옆에 파일 위치 링크 표시 (예: App.tsx:67)
4. **Computed 탭** 확인
   - margin-bottom: 20px 표시
   - 어느 스타일에서 왔는지 표시

**Tip**: Styles 탭에서 margin 옆의 체크박스를 해제하면 임시로 비활성화할 수 있습니다!

---

## Q: index.css를 tsx 파일에 import하면 자동으로 모든 하위 컴포넌트에도 적용되나요?

**A: 네! CSS import는 글로벌하게 적용되어 모든 컴포넌트에서 사용할 수 있습니다.**

### 작동 원리

```tsx
// src/main.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // 👈 여기서 한 번만 import
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

**무슨 일이 일어나나요?**

1. **번들러(Vite/Webpack)가 CSS를 처리**

   - `import './index.css'`를 만나면 CSS 파일을 읽음
   - CSS 내용을 JavaScript 번들에 포함
   - 브라우저가 로드할 때 `<style>` 태그로 HTML에 주입

2. **CSS는 글로벌 스타일시트로 적용됨**

   - 어느 파일에서 import하든 상관없이 전역으로 적용
   - 모든 컴포넌트에서 접근 가능
   - 컴포넌트 계층과 무관

3. **결과적으로 모든 컴포넌트가 스타일 사용 가능**
   ```tsx
   // App.tsx - import 없이도 index.css 스타일 사용 가능
   export default function App() {
     return <div className="container">Hello</div>;
   }
   ```

---

### 실제 브라우저에서 확인하기

개발자 도구(F12)로 확인하면:

```html
<!-- 브라우저에서 실제로 렌더링된 HTML -->
<html>
  <head>
    <style>
      /* index.css의 내용이 여기에 주입됨 */
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      /* ... */
    </style>
  </head>
  <body>
    <div id="root">
      <div class="container">Hello</div>
    </div>
  </body>
</html>
```

Vite가 CSS를 `<style>` 태그로 변환해서 HTML `<head>`에 자동으로 넣어줍니다!

---

### 여러 곳에서 CSS를 import하면?

```tsx
// main.tsx
import "./index.css";

// App.tsx
import "./index.css"; // 중복 import

// Button.tsx
import "./index.css"; // 중복 import
```

**결과**: CSS는 **한 번만** 적용됩니다!

번들러가 똑똑하게 중복을 제거하므로 걱정할 필요 없습니다.

---

### 컴포넌트 전용 스타일은?

전역이 아닌 **컴포넌트 전용 스타일**이 필요하다면:

#### 방법 1: CSS Modules

```tsx
// Button.module.css
.button {
  background: blue;
  color: white;
}
```

```tsx
// Button.tsx
import styles from "./Button.module.css";

export default function Button() {
  return <button className={styles.button}>Click</button>;
}
```

**장점**: 스타일이 해당 컴포넌트에만 적용 (고유한 클래스명 생성)

#### 방법 2: Tailwind CSS (권장)

```tsx
// Button.tsx
export default function Button() {
  return <button className="bg-blue-500 text-white px-4 py-2">Click</button>;
}
```

**장점**: 별도 CSS 파일 불필요, 유틸리티 클래스만 사용

#### 방법 3: Styled Components (CSS-in-JS)

```tsx
import styled from "styled-components";

const StyledButton = styled.button`
  background: blue;
  color: white;
`;

export default function Button() {
  return <StyledButton>Click</StyledButton>;
}
```

**장점**: JavaScript 안에서 CSS 작성, 동적 스타일 쉬움

---

### Best Practice: 어디서 import 해야 할까?

#### ✅ 권장: 진입점(Entry Point)에서 import

```tsx
// src/main.tsx (또는 src/index.tsx)
import "./index.css";
```

**이유**:

- 앱 시작 시 한 번만 로드
- 명확한 구조
- 다른 개발자가 찾기 쉬움

#### ⚠️ 비권장: 여러 컴포넌트에서 import

```tsx
// App.tsx
import "./index.css";

// Header.tsx
import "./index.css";

// Footer.tsx
import "./index.css";
```

**문제점**:

- 어디서 import했는지 추적하기 어려움
- 불필요한 중복 코드

---

### CSS Import 순서가 중요한 이유

```tsx
// main.tsx
import "./reset.css"; // 1. Reset 먼저
import "./index.css"; // 2. 기본 스타일
import "./custom.css"; // 3. 커스텀 스타일 마지막
```

**CSS는 순서대로 적용**되므로:

- 나중에 import한 스타일이 우선순위가 높음
- Reset은 항상 맨 먼저
- 커스텀 스타일은 마지막에

---

### Tailwind CSS의 경우

```tsx
// main.tsx
import "./index.css"; // @import "tailwindcss" 포함
```

```css
/* index.css */
@import "tailwindcss";

/* 커스텀 스타일 */
.custom-class {
  /* ... */
}
```

**Tailwind도 동일하게 작동**:

- 한 번 import하면 전역 적용
- 모든 컴포넌트에서 Tailwind 클래스 사용 가능

---

### 핵심 정리

- ✅ **CSS import는 글로벌하게 적용** → 모든 컴포넌트에서 사용 가능
- ✅ **컴포넌트 계층과 무관** → App의 하위 컴포넌트든 상관없음
- ✅ **진입점에서 한 번만 import** → main.tsx 또는 index.tsx
- ✅ **번들러가 자동 처리** → Vite/Webpack이 `<style>` 태그로 변환
- ✅ **중복 import는 자동 제거** → 여러 곳에서 import해도 한 번만 적용
- ✅ **import 순서 중요** → 나중에 import한 스타일이 우선순위 높음

---

### 비교: CSS Import vs JavaScript Import

#### JavaScript Import (컴포넌트)

```tsx
import Button from "./Button"; // Button은 사용한 곳에서만 렌더링
```

- **로컬 스코프**: 사용한 파일에서만 접근 가능

#### CSS Import (스타일)

```tsx
import "./styles.css"; // 전체 앱에 글로벌 적용
```

- **글로벌 스코프**: 모든 파일에서 클래스명 사용 가능

---

### 실습: 확인해보기

```tsx
// main.tsx
import "./index.css";

// App.tsx (import 없음)
export default function App() {
  return <div className="test-class">Hello</div>;
}
```

```css
/* index.css */
.test-class {
  background: yellow;
  padding: 20px;
}
```

**결과**: App.tsx에서 `import './index.css'` 없이도 스타일이 적용됩니다!

---

## 끝

**Happy Coding! 💻✨**
