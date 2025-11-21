---
marp: true
theme: default
paginate: true
---

<!-- _class: lead -->

# Day 03 FAQ

---

## Q1. `*`로 margin과 padding을 0으로 설정했는데도 상단과 좌측에 여백이 생기는 이유는?

### 질문 상세

```css
* {
  margin: 0;
  padding: 0;
}

div {
  height: 100px;
}
```

위와 같이 설정했는데도 div 요소의 상단과 좌측에 여백(margin)이 생깁니다. 왜 그런가요?

---

### 답변

- `*` 선택자는 모든 요소에 스타일을 적용하지만,  
  **브라우저의 기본 스타일시트(user agent stylesheet)**가 먼저 적용된 후에 우리의 CSS가 적용됩니다.
- 특히 `<body>` 태그는 브라우저마다 기본적으로 8px 정도의 margin을 가지고 있습니다.
- `*` 선택자로 모든 요소의 margin을 0으로 설정했더라도,  
  **body의 기본 margin이 여전히 남아있을 수 있습니다.**

---

### 해결 방법

#### 방법 1: body에 명시적으로 margin 제거

```css
* {
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
}
```

---

#### 방법 2: CSS Reset 또는 Normalize.css 사용

```css
/* 간단한 CSS Reset */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  margin: 0;
}
```

---

# Day 03 FAQ

## Q1. `*`로 margin과 padding을 0으로 설정했는데도 상단과 좌측에 여백이 생기는 이유는?

### 질문 상세

```css
* {
  margin: 0;
  padding: 0;
}

div {
  height: 100px;
}
```

위와 같이 설정했는데도 div 요소의 상단과 좌측에 여백(margin)이 생깁니다. 왜 그런가요?

### 답변

`*` 선택자는 모든 요소에 스타일을 적용하지만, **브라우저의 기본 스타일시트(user agent stylesheet)**가 먼저 적용된 후에 우리의 CSS가 적용됩니다.

특히 `<body>` 태그는 브라우저마다 기본적으로 8px 정도의 margin을 가지고 있습니다. `*` 선택자로 모든 요소의 margin을 0으로 설정했더라도, body의 기본 margin이 여전히 남아있을 수 있습니다.

### 해결 방법

#### 방법 1: body에 명시적으로 margin 제거

```css
* {
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
}
```

#### 방법 2: CSS Reset 또는 Normalize.css 사용

```css
/* 간단한 CSS Reset */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
}
```

#### 방법 3: 현대적인 방법 (개선된 리셋)

```css
/* 더 포괄적인 리셋 */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
  font-family: system-ui, -apple-system, sans-serif;
}
```

### 핵심 포인트

- `*` 선택자만으로는 브라우저의 기본 스타일을 완전히 제거할 수 없음
- `html`과 `body` 태그에 명시적으로 margin과 padding을 0으로 설정하는 것이 좋음
- 프로젝트 시작 시 CSS Reset 또는 Normalize.css를 사용하는 것을 권장

---

## Q2. `height: 100%`를 설정했는데 화면을 가득 채우지 못하는 이유는?

### 질문 상세

```tsx
function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          backgroundColor: "green",
        }}
      >
        <div style={{ flex: 1 }}>navbar</div>
        <div style={{ flex: 1 }}>content</div>
        <div style={{ flex: 1 }}>footer</div>
      </div>
    </>
  );
}
```

위와 같이 `height: '100%'`를 설정했는데 초록색 배경이 화면을 가득 채우지 못합니다. 왜 그런가요?

### 답변

`height: 100%`는 **부모 요소의 높이를 기준**으로 계산됩니다. 따라서 부모 요소의 높이가 명시적으로 설정되어 있지 않으면, `height: 100%`는 제대로 작동하지 않습니다.

React 앱의 경우, DOM 구조는 다음과 같습니다:

```
html → body → #root → App의 div
```

App의 div에 `height: 100%`를 설정하면, 부모인 `#root`의 높이를 참조합니다. 하지만 `#root`의 높이가 명시적으로 설정되어 있지 않으면, 자식 요소의 내용만큼만 높이가 결정되므로 화면을 가득 채우지 못합니다.

### 해결 방법

#### 방법 1: 모든 부모 요소에 height: 100% 설정 (CSS 파일)

```css
/* index.css 또는 App.css */
html,
body,
#root {
  height: 100%;
  margin: 0;
  padding: 0;
}
```

이렇게 하면 html부터 시작해서 모든 부모 요소가 100% 높이를 가지게 되어, App의 div가 화면 전체를 채울 수 있습니다.

#### 방법 2: viewport height 사용 (권장)

```tsx
function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          backgroundColor: "green",
        }}
      >
        <div style={{ flex: 1 }}>navbar</div>
        <div style={{ flex: 1 }}>content</div>
        <div style={{ flex: 1 }}>footer</div>
      </div>
    </>
  );
}
```

`100vh` (viewport height)는 부모 요소와 관계없이 **뷰포트(브라우저 창)의 높이**를 기준으로 하므로, 부모 요소의 높이 설정 없이도 화면을 가득 채울 수 있습니다.

#### 방법 3: 조합 방식 (가장 안정적)

```css
/* index.css */
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

#root {
  min-height: 100%;
  /* 또는 min-height: 100vh; */
}
```

```tsx
function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          backgroundColor: "green",
        }}
      >
        <div style={{ flex: 1 }}>navbar</div>
        <div style={{ flex: 1 }}>content</div>
        <div style={{ flex: 1 }}>footer</div>
      </div>
    </>
  );
}
```

### 핵심 포인트

- `height: 100%`는 부모 요소의 높이에 의존함
- 부모 요소의 높이가 설정되지 않으면 작동하지 않음
- React에서는 `html`, `body`, `#root` 모두에 높이를 설정해야 함
- `100vh`를 사용하면 부모 높이 설정 없이 화면 전체를 채울 수 있음 (권장)
- 모바일에서는 주소창 때문에 `100vh`가 의도와 다르게 작동할 수 있으니 주의 필요

---

## Q3. CSS 단위 `100%`, `100vh`, `100em`, `100px`의 차이는?

### 질문 상세

CSS에서 크기를 지정할 때 `100%`, `100vh`, `100em`, `100px` 같은 다양한 단위를 사용하는데, 각각 어떤 차이가 있나요? 언제 어떤 단위를 사용해야 하나요?

### 답변

CSS 단위는 크게 **절대 단위**와 **상대 단위**로 나뉩니다.

#### 1. `px` (픽셀) - 절대 단위

```css
div {
  width: 100px;
  height: 100px;
}
```

- **기준**: 화면의 물리적 픽셀
- **특징**: 고정된 크기, 반응형에 불리
- **언제 사용**: 아이콘, 테두리, 그림자 등 고정된 크기가 필요한 경우
- **예시**: `border: 1px solid black;`, `width: 300px;`

#### 2. `%` (퍼센트) - 상대 단위 (부모 기준)

```css
/* 부모가 500px이면, 이 div는 250px */
.parent {
  width: 500px;
}

.child {
  width: 50%; /* 부모의 50% = 250px */
}
```

- **기준**: 부모 요소의 크기
- **특징**: 부모에 의존적, 반응형에 유리
- **언제 사용**: 부모 요소에 대한 비율로 크기를 설정할 때
- **예시**:
  - `width: 50%` → 부모 너비의 50%
  - `height: 100%` → 부모 높이의 100% (부모에 높이가 설정되어 있어야 함)
  - `padding: 5%` → 부모 너비의 5% (주의: padding도 너비 기준)

#### 3. `vh` / `vw` (뷰포트 단위) - 상대 단위 (뷰포트 기준)

```css
div {
  height: 100vh; /* 뷰포트 높이의 100% */
  width: 50vw; /* 뷰포트 너비의 50% */
}
```

- **기준**: 브라우저 뷰포트(화면) 크기
- **특징**:
  - `1vh` = 뷰포트 높이의 1%
  - `1vw` = 뷰포트 너비의 1%
  - 부모 요소와 무관하게 항상 뷰포트 기준
- **언제 사용**: 전체 화면 레이아웃, 히어로 섹션, 모달 등
- **예시**:
  - `height: 100vh` → 화면 전체 높이
  - `width: 100vw` → 화면 전체 너비
  - `font-size: 5vw` → 뷰포트 너비에 따라 변하는 텍스트
- **주의사항**: 모바일에서 주소창이 나타나거나 사라질 때 `100vh` 값이 변할 수 있음

#### 4. `em` - 상대 단위 (폰트 크기 기준)

```css
.parent {
  font-size: 16px;
}

.child {
  font-size: 2em; /* 부모의 font-size × 2 = 32px */
  padding: 1em; /* 자기 자신의 font-size × 1 = 32px */
  margin: 0.5em; /* 자기 자신의 font-size × 0.5 = 16px */
}
```

- **기준**:
  - `font-size` 속성: 부모 요소의 font-size
  - 다른 속성 (padding, margin 등): 자기 자신의 font-size
- **특징**: 중첩될수록 배율이 곱해짐 (cascading)
- **언제 사용**: 폰트 크기에 비례하는 여백이 필요할 때
- **예시**:
  ```css
  h1 {
    font-size: 2em; /* 부모의 2배 크기 */
    margin-bottom: 1em; /* 자신의 font-size만큼 여백 */
  }
  ```

#### 5. `rem` - 상대 단위 (루트 폰트 크기 기준) - 보너스!

```css
html {
  font-size: 16px; /* 기본값 */
}

div {
  font-size: 2rem; /* 루트(html)의 font-size × 2 = 32px */
  padding: 1rem; /* 루트(html)의 font-size × 1 = 16px */
}
```

- **기준**: 루트 요소(html)의 font-size (보통 16px)
- **특징**: em과 달리 중첩되어도 항상 html 기준
- **언제 사용**: 일관된 크기 체계가 필요할 때 (em보다 예측 가능)
- **현대 개발에서 가장 권장되는 단위**

### 비교 표

| 단위    | 기준      | 타입 | 반응형 | 사용 예시              |
| ------- | --------- | ---- | ------ | ---------------------- |
| `px`    | 픽셀      | 절대 | ❌     | 테두리, 아이콘 크기    |
| `%`     | 부모 요소 | 상대 | ✅     | 레이아웃, 너비 조절    |
| `vh/vw` | 뷰포트    | 상대 | ✅     | 전체 화면, 히어로 섹션 |
| `em`    | 폰트 크기 | 상대 | ✅     | 폰트에 비례하는 여백   |
| `rem`   | 루트 폰트 | 상대 | ✅     | 전반적인 크기 체계     |

### 실전 예시

```css
/* 전체 화면을 채우는 컨테이너 */
.hero {
  height: 100vh;
  width: 100vw;
}

/* 부모의 절반 크기 */
.half-width {
  width: 50%;
}

/* 일관된 여백 체계 (rem 권장) */
.card {
  padding: 1rem; /* 16px */
  margin: 2rem; /* 32px */
  border-radius: 0.5rem; /* 8px */
}

/* 폰트 크기에 비례하는 여백 */
h1 {
  font-size: 2rem; /* 32px */
  margin-bottom: 0.5em; /* 32px × 0.5 = 16px */
}

/* 고정 크기가 필요한 경우 */
.icon {
  width: 24px;
  height: 24px;
}
```

### 핵심 포인트

- **px**: 절대 단위, 고정된 크기 필요 시 사용
- **%**: 부모 요소 기준, 부모가 없거나 높이 미설정 시 작동 안 함
- **vh/vw**: 뷰포트(화면) 기준, 부모와 무관하게 화면 크기에 반응
- **em**: 폰트 크기 기준, 중첩 시 복잡해질 수 있음
- **rem**: html 기준, 일관된 크기 체계에 최적 (현대 웹 개발에서 가장 권장)
- 반응형 디자인에는 상대 단위(`%`, `vh`, `rem`)를 우선적으로 사용

---

## Q4. Grid 레이아웃에서 `gridTemplateColumns`를 주로 사용하는 이유는?

### 질문 상세

CSS Grid를 사용할 때 `gridTemplateRows`보다 `gridTemplateColumns`를 더 많이 사용하는 것 같은데, 웹의 스크롤 사용성과 관련이 있나요?

### 답변

네, 정확합니다! **웹의 자연스러운 스크롤 방향** 때문에 `gridTemplateColumns`를 주로 사용합니다.

#### 웹 스크롤의 특성

웹페이지는 기본적으로 **세로 스크롤(vertical scroll)**이 자연스럽습니다:

- ✅ **세로 스크롤**: 마우스 휠, 터치 제스처로 쉽게 조작 가능
- ❌ **가로 스크롤**: 사용자 경험이 좋지 않고, 모바일에서는 특히 불편함
- 사용자들은 아래로 스크롤하는 것에 익숙하지만, 좌우로 스크롤하는 것은 어색하게 느낌

#### gridTemplateColumns vs gridTemplateRows

```css
/* ✅ 권장: 열(columns)을 정의하고, 행은 자동으로 늘어남 */
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* 3개 열 */
  /* 행은 자동으로 추가됨 - 세로 스크롤 발생 */
}

/* ❌ 비권장: 행(rows)을 정의하면 가로 스크롤 발생 가능 */
.grid-container {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr; /* 3개 행 */
  grid-auto-flow: column; /* 열이 자동으로 추가됨 - 가로 스크롤 발생 */
}
```

#### 동작 방식 비교

**1. gridTemplateColumns 사용 시 (일반적인 경우)**

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3열 고정 */
  gap: 20px;
}
```

```
┌─────────┬─────────┬─────────┐
│ Item 1  │ Item 2  │ Item 3  │
├─────────┼─────────┼─────────┤
│ Item 4  │ Item 5  │ Item 6  │  ↓ 세로 스크롤
├─────────┼─────────┼─────────┤  (자연스러움)
│ Item 7  │ Item 8  │ Item 9  │
└─────────┴─────────┴─────────┘
         ↓ 계속 아래로...
```

- 열의 개수는 고정 (3개)
- 아이템이 많아지면 **자동으로 새로운 행이 추가**됨
- **세로 스크롤** 발생 → 사용자 경험 좋음

**2. gridTemplateRows 사용 시 (특수한 경우)**

```css
.grid {
  display: grid;
  grid-template-rows: repeat(3, 1fr); /* 3행 고정 */
  grid-auto-flow: column; /* 열 방향으로 흐름 */
  gap: 20px;
}
```

```
┌──────┬──────┬──────┬──────→ 가로 스크롤
│Item 1│Item 4│Item 7│       (불편함)
├──────┼──────┼──────┤
│Item 2│Item 5│Item 8│
├──────┼──────┼──────┤
│Item 3│Item 6│Item 9│
└──────┴──────┴──────┘
```

- 행의 개수는 고정 (3개)
- 아이템이 많아지면 **새로운 열이 추가**됨
- **가로 스크롤** 발생 → 사용자 경험 나쁨

#### 실전 예시

```tsx
// ✅ 좋은 예: 카드 그리드 레이아웃
function ProductGrid() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)", // 3열 고정
        gap: "20px",
        padding: "20px",
      }}
    >
      {/* 100개의 상품이 있어도 자동으로 행이 추가되고 세로 스크롤 */}
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}

// 반응형으로 개선
function ResponsiveGrid() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
      }}
    >
      {/* 화면 크기에 따라 열 개수가 자동 조정 */}
      {items.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
}
```

#### gridTemplateRows를 사용하는 경우

가로 스크롤이 의도된 특수한 경우에만 사용:

```css
/* 수평 타임라인, 캐러셀 등 */
.horizontal-timeline {
  display: grid;
  grid-template-rows: auto auto auto;
  grid-auto-flow: column;
  overflow-x: auto; /* 의도적인 가로 스크롤 */
}
```

```tsx
// 예: 가로 스크롤 갤러리
function HorizontalGallery() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "300px",
        gridAutoFlow: "column",
        gridAutoColumns: "250px",
        gap: "10px",
        overflowX: "auto", // 의도적인 가로 스크롤
        padding: "20px",
      }}
    >
      {images.map((img) => (
        <img key={img.id} src={img.url} />
      ))}
    </div>
  );
}
```

### 핵심 포인트

- 웹은 **세로 스크롤**이 자연스럽고, **가로 스크롤**은 사용자 경험이 나쁨
- `gridTemplateColumns`로 열을 고정하면 → 행이 자동 추가 → 세로 스크롤 발생 ✅
- `gridTemplateRows`로 행을 고정하면 → 열이 자동 추가 → 가로 스크롤 발생 ❌
- 대부분의 레이아웃에서는 `gridTemplateColumns` 사용 권장
- 가로 스크롤이 의도된 경우(캐러셀, 타임라인 등)에만 `gridTemplateRows` + `grid-auto-flow: column` 사용
- 반응형을 위해서는 `repeat(auto-fit, minmax(250px, 1fr))` 같은 패턴을 활용

---

## Q5. Flex 아이템을 오른쪽으로 정렬하려면 어떻게 해야 하나요?

### 질문 상세

```tsx
<h1 style={{ flex: 1, backgroundColor: "lightgreen" }}>Hello World</h1>
```

위와 같은 flex 아이템을 오른쪽으로 정렬하려면 어떻게 해야 하나요?

### 답변

Flex 아이템을 오른쪽으로 정렬하는 방법은 **무엇을 정렬하려는지**에 따라 달라집니다:

1. **텍스트만** 오른쪽 정렬 → `textAlign: 'right'`
2. **아이템 자체**를 오른쪽 배치 → `marginLeft: 'auto'` (가장 많이 사용)
3. **모든 아이템**을 오른쪽 배치 → 부모에 `justifyContent: 'flex-end'`

#### 1. 텍스트만 오른쪽 정렬 (아이템은 그대로)

```tsx
<h1
  style={{
    flex: 1,
    backgroundColor: "lightgreen",
    textAlign: "right", // 텍스트만 오른쪽 정렬
  }}
>
  Hello World
</h1>
```

**결과:**

```
┌──────────────────────────────────────┐
│                        Hello World   │  ← 텍스트만 오른쪽
└──────────────────────────────────────┘
배경색은 여전히 전체를 차지함 (flex: 1)
```

#### 2. 아이템 자체를 오른쪽 배치 - `marginLeft: 'auto'` (⭐ 가장 많이 사용)

```tsx
// 부모 컨테이너
<div style={{ display: "flex" }}>
  <h1
    style={{
      backgroundColor: "lightgreen",
      marginLeft: "auto", // 이 아이템을 오른쪽으로 밀어냄
    }}
  >
    Hello World
  </h1>
</div>
```

**결과:**

```
┌──────────────────────────────────────┐
│                        ┌──────────┐  │
│                        │Hello World│  │  ← 아이템 자체가 오른쪽
│                        └──────────┘  │
└──────────────────────────────────────┘
```

**동작 원리:**

- `marginLeft: 'auto'`는 왼쪽 여백을 최대한 확보
- 결과적으로 요소가 오른쪽으로 밀려남
- 네비게이션 바에서 로그인 버튼을 오른쪽에 배치할 때 자주 사용

#### 3. 모든 아이템을 오른쪽 배치 - 부모에 `justifyContent: 'flex-end'`

```tsx
<div
  style={{
    display: "flex",
    justifyContent: "flex-end", // 모든 자식을 오른쪽으로
  }}
>
  <h1 style={{ backgroundColor: "lightgreen" }}>Hello World</h1>
  <button>Click Me</button>
</div>
```

**결과:**

```
┌──────────────────────────────────────┐
│              ┌──────────┐┌────────┐  │
│              │Hello World││Click Me│  │  ← 모든 아이템이 오른쪽
│              └──────────┘└────────┘  │
└──────────────────────────────────────┘
```

#### 4. 특정 아이템만 오른쪽, 나머지는 왼쪽 - `marginLeft: 'auto'`

```tsx
<div style={{ display: "flex" }}>
  <div>Left Item</div>
  <div>Left Item 2</div>
  <div style={{ marginLeft: "auto" }}>Right Item</div>
</div>
```

**결과:**

```
┌──────────────────────────────────────┐
│ Left Item  Left Item 2   Right Item  │
└──────────────────────────────────────┘
 ←────────────────────────→ ←─────────→
   왼쪽 그룹              오른쪽 아이템
```

**실전 예시: 네비게이션 바**

```tsx
function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        padding: "1rem",
        backgroundColor: "#333",
        color: "white",
      }}
    >
      <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Logo</div>
      <div style={{ marginLeft: "2rem" }}>Home</div>
      <div style={{ marginLeft: "1rem" }}>About</div>

      {/* 로그인 버튼을 오른쪽으로 */}
      <button style={{ marginLeft: "auto" }}>Login</button>
    </nav>
  );
}
```

**결과:**

```
┌──────────────────────────────────────┐
│ Logo   Home   About          [Login] │
└──────────────────────────────────────┘
```

#### 5. 여러 아이템을 양쪽 끝에 배치 - `justifyContent: 'space-between'`

```tsx
<div
  style={{
    display: "flex",
    justifyContent: "space-between",
  }}
>
  <h1>Left Side</h1>
  <h1>Right Side</h1>
</div>
```

**결과:**

```
┌──────────────────────────────────────┐
│ Left Side              Right Side    │
└──────────────────────────────────────┘
```

### 방법 비교표

| 방법                              | 사용 위치            | 효과                       | 주요 용도                  |
| --------------------------------- | -------------------- | -------------------------- | -------------------------- |
| `textAlign: 'right'`              | 아이템 자체          | 텍스트만 오른쪽 정렬       | 텍스트 정렬                |
| `marginLeft: 'auto'`              | 아이템 자체          | 아이템을 오른쪽으로 밀어냄 | 특정 요소만 오른쪽 배치 ⭐ |
| `marginRight: 'auto'`             | 아이템 자체          | 아이템을 왼쪽으로 밀어냄   | 특정 요소만 왼쪽 배치      |
| `justifyContent: 'flex-end'`      | 부모 (flex 컨테이너) | 모든 아이템을 오른쪽 정렬  | 전체 오른쪽 정렬           |
| `justifyContent: 'space-between'` | 부모 (flex 컨테이너) | 양쪽 끝에 배치             | 좌우 분산 배치             |
| `alignSelf: 'flex-end'`           | 아이템 자체          | 교차축 기준 오른쪽 정렬    | 세로 방향 정렬             |

### 실전 팁

```tsx
// ❌ flex: 1을 사용하면 전체 공간을 차지하므로 오른쪽 정렬 효과 없음
<h1 style={{flex: 1, marginLeft: 'auto'}}>Hello</h1>
// → 이미 전체를 차지하고 있어서 marginLeft가 의미 없음

// ✅ flex: 1을 제거하고 marginLeft: 'auto' 사용
<h1 style={{marginLeft: 'auto'}}>Hello</h1>
// → 요소가 오른쪽으로 이동함

// ✅ 또는 flex: 1 유지하고 textAlign 사용
<h1 style={{flex: 1, textAlign: 'right'}}>Hello</h1>
// → 전체 공간을 차지하되, 텍스트만 오른쪽 정렬
```

### 핵심 포인트

- **텍스트만** 정렬: `textAlign: 'right'`
- **특정 아이템**을 오른쪽으로: `marginLeft: 'auto'` ⭐ (가장 많이 사용)
- **모든 아이템**을 오른쪽으로: 부모에 `justifyContent: 'flex-end'`
- **양쪽 끝** 배치: 부모에 `justifyContent: 'space-between'`
- `flex: 1`과 `marginLeft: 'auto'`는 함께 사용해도 효과 없음 (이미 전체 공간 차지)
- 네비게이션 바의 로그인 버튼처럼 특정 요소만 오른쪽에 배치할 때는 `marginLeft: 'auto'`가 최적

---

## Q6. Grid에서 아이템 개수와 정의한 열/행 개수가 다를 때 어떻게 관리하나요?

### 질문 상세

Grid를 사용할 때 `gridTemplateColumns`나 `gridTemplateRows`로 정의한 개수와 실제 하위 요소의 개수가 다르면 예상치 못한 렌더링 결과가 발생하는 것 같은데, 이런 경우 어떻게 관리하는 게 좋을까요?

### 답변

Grid에서 **정의한 열/행 개수**와 **실제 아이템 개수**가 다를 때 발생하는 문제는 `grid-auto-rows`, `grid-auto-columns`, 그리고 `repeat(auto-fit/auto-fill)`로 해결할 수 있습니다.

#### 문제 상황 예시

```tsx
// 3열 그리드를 정의했지만, 아이템이 5개인 경우
<div
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr", // 3열 정의
    gap: "10px",
  }}
>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div> {/* 4번째 아이템 - 새로운 행으로 */}
  <div>Item 5</div> {/* 5번째 아이템 */}
</div>
```

**렌더링 결과:**

```
┌────────┬────────┬────────┐
│ Item 1 │ Item 2 │ Item 3 │  ← 1행 (정의된 크기)
├────────┼────────┼────────┤
│ Item 4 │ Item 5 │        │  ← 2행 (자동 생성, 크기가 다를 수 있음)
└────────┴────────┴────────┘
```

**문제점:**

- 4, 5번 아이템이 들어간 2번째 행의 높이가 **명시적으로 정의되지 않음**
- 기본적으로 `auto` 크기가 되어 내용에 따라 높이가 달라짐
- 1행과 2행의 높이가 다를 수 있어 일관성이 떨어짐

---

### 해결 방법

#### 방법 1: `grid-auto-rows` 사용 - 추가 행의 크기 정의 ⭐

```tsx
<div
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr", // 3열 정의
    gridAutoRows: "100px", // 자동 생성되는 행의 높이를 100px로 고정
    gap: "10px",
  }}
>
  {items.map((item) => (
    <div key={item.id}>{item.name}</div>
  ))}
</div>
```

**설명:**

- `gridTemplateColumns`: 열 개수와 크기를 정의 (3열)
- `gridAutoRows`: 정의되지 않은 **추가 행**의 크기를 지정
- 아이템이 몇 개든 상관없이 각 행의 높이가 일정하게 유지됨

**렌더링 결과:**

```
┌────────┬────────┬────────┐
│ Item 1 │ Item 2 │ Item 3 │  ← 100px
├────────┼────────┼────────┤
│ Item 4 │ Item 5 │        │  ← 100px (grid-auto-rows 적용)
└────────┴────────┴────────┘
```

#### 방법 2: `repeat(auto-fit, minmax())` 사용 - 반응형 그리드 (권장) ⭐⭐

```tsx
<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gridAutoRows: "200px",
    gap: "10px",
  }}
>
  {items.map((item) => (
    <div key={item.id}>{item.name}</div>
  ))}
</div>
```

**설명:**

- `repeat(auto-fit, ...)`: 화면 크기에 맞춰 **열 개수를 자동 조정**
- `minmax(200px, 1fr)`: 최소 200px, 최대 1fr
- 아이템이 몇 개든, 화면이 얼마나 크든 자동으로 배치
- **가장 유연하고 권장되는 방법**

**동작:**

```
큰 화면:
┌────────┬────────┬────────┬────────┐
│ Item 1 │ Item 2 │ Item 3 │ Item 4 │
├────────┼────────┼────────┼────────┤
│ Item 5 │        │        │        │
└────────┴────────┴────────┴────────┘

작은 화면:
┌────────┬────────┐
│ Item 1 │ Item 2 │
├────────┼────────┤
│ Item 3 │ Item 4 │
├────────┼────────┤
│ Item 5 │        │
└────────┴────────┘
```

#### 방법 3: `grid-template-rows`도 함께 정의

```tsx
<div
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr", // 3열
    gridTemplateRows: "repeat(auto-fill, 100px)", // 필요한 만큼 100px 행 생성
    gap: "10px",
  }}
>
  {items.map((item) => (
    <div key={item.id}>{item.name}</div>
  ))}
</div>
```

**주의:**

- 이 방법은 행의 개수를 미리 예측해야 함
- 일반적으로는 `gridAutoRows`를 사용하는 것이 더 유연함

#### 방법 4: React에서 조건부 렌더링으로 아이템 개수 제한

```tsx
function GridLayout({ items }: { items: Item[] }) {
  const MAX_ITEMS = 6; // 3열 × 2행 = 6개
  const displayItems = items.slice(0, MAX_ITEMS);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "repeat(2, 100px)", // 정확히 2행만
        gap: "10px",
      }}
    >
      {displayItems.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
```

**사용 시기:**

- 고정된 레이아웃이 필요한 경우 (예: 대시보드)
- 아이템 개수를 정확히 제어해야 하는 경우

---

### `auto-fit` vs `auto-fill` 차이

```tsx
// auto-fit: 빈 공간을 채우도록 확장
<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'
}}>
  {/* 아이템이 적으면 각 아이템이 더 커짐 */}
</div>

// auto-fill: 빈 공간을 그대로 유지
<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))'
}}>
  {/* 아이템이 적어도 200px 크기 유지 */}
</div>
```

**시각적 차이 (아이템 2개일 때):**

```
auto-fit:
┌─────────────────────┬─────────────────────┐
│      Item 1         │      Item 2         │  ← 공간을 가득 채움
└─────────────────────┴─────────────────────┘

auto-fill:
┌──────────┬──────────┬          │          ┐
│  Item 1  │  Item 2  │   빈 공간           │  ← 200px씩 유지
└──────────┴──────────┴──────────┴──────────┘
```

---

### 실전 예시

#### 1. 상품 카드 그리드 (권장)

```tsx
function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gridAutoRows: "auto", // 내용에 따라 높이 조정
        gap: "20px",
        padding: "20px",
      }}
    >
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "16px",
          }}
        >
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}
```

#### 2. 대시보드 고정 레이아웃

```tsx
function Dashboard({ widgets }: { widgets: Widget[] }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "repeat(2, 200px)",
        gridAutoRows: "200px", // 추가 위젯이 있을 경우 대비
        gap: "16px",
      }}
    >
      {widgets.map((widget) => (
        <div
          key={widget.id}
          style={{
            backgroundColor: "#f5f5f5",
            borderRadius: "8px",
            padding: "16px",
          }}
        >
          {widget.content}
        </div>
      ))}
    </div>
  );
}
```

#### 3. 반응형 갤러리

```tsx
function Gallery({ images }: { images: string[] }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
        gridAutoRows: "150px", // 정사각형 그리드
        gap: "8px",
      }}
    >
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`Gallery ${idx}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      ))}
    </div>
  );
}
```

---

### 핵심 포인트

- **문제**: Grid에서 정의한 열/행보다 아이템이 많으면 추가 행/열이 자동 생성되지만 크기가 불일치
- **해결 1**: `gridAutoRows` 또는 `gridAutoColumns`로 추가 행/열의 크기 지정 ⭐
- **해결 2**: `repeat(auto-fit, minmax(...))` 사용하여 반응형으로 자동 조정 ⭐⭐ (가장 권장)
- **auto-fit vs auto-fill**:
  - `auto-fit`: 빈 공간을 채우도록 아이템 확장
  - `auto-fill`: 빈 공간 유지, 최소 크기 보존
- **실무 팁**:
  - 동적 아이템 개수 → `repeat(auto-fit, minmax(...))`
  - 고정 레이아웃 → `gridTemplateColumns` + `gridTemplateRows` + `gridAutoRows`
  - 일관된 높이 필요 → `gridAutoRows: '200px'` 같은 고정값
  - 내용에 따라 높이 조정 → `gridAutoRows: 'auto'`

---

## Q7. `gridTemplateColumns: 'repeat(12, 1fr)'`을 왜 Bootstrap 스타일이라고 하나요?

### 질문 상세

CSS Grid에서 12 컬럼 레이아웃을 "Bootstrap 스타일"이라고 부르는 이유가 궁금합니다.

### 답변

Bootstrap이 **12 컬럼 그리드 시스템을 대중화**시켰기 때문입니다.

#### 역사적 배경

- **Bootstrap (2011년~)**: Twitter에서 만든 CSS 프레임워크로, 12 컬럼 그리드 시스템을 도입하여 웹 레이아웃의 표준으로 자리잡음
- **12의 장점**: 2, 3, 4, 6으로 나눠지므로 다양한 레이아웃 조합이 가능
  - 2등분: 6 + 6
  - 3등분: 4 + 4 + 4
  - 4등분: 3 + 3 + 3 + 3
  - 비대칭: 3 + 9, 4 + 8, 2 + 10 등

#### Bootstrap의 그리드 시스템

```html
<!-- Bootstrap 방식 -->
<div class="row">
  <div class="col-4">1/3 너비</div>
  <div class="col-4">1/3 너비</div>
  <div class="col-4">1/3 너비</div>
</div>

<div class="row">
  <div class="col-3">1/4 너비</div>
  <div class="col-9">3/4 너비</div>
</div>
```

#### CSS Grid로 동일하게 구현

```tsx
// 12 컬럼 그리드 정의
<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)", // Bootstrap 스타일
    gap: "10px",
  }}
>
  {/* 3등분 레이아웃 */}
  <div style={{ gridColumn: "span 4" }}>1/3 너비</div>
  <div style={{ gridColumn: "span 4" }}>1/3 너비</div>
  <div style={{ gridColumn: "span 4" }}>1/3 너비</div>
</div>
```

#### 다른 프레임워크들의 채택

Bootstrap의 영향력으로 많은 CSS 프레임워크가 12 컬럼 시스템을 채택:

| 프레임워크   | 기본 컬럼 수 |
| ------------ | ------------ |
| Bootstrap    | 12           |
| Foundation   | 12           |
| Tailwind CSS | 12           |
| Bulma        | 12           |
| Material UI  | 12           |

#### 왜 "Bootstrap 스타일"인가?

- Bootstrap이 12 컬럼 그리드를 **최초로 대중화**
- 웹 개발자들 사이에서 12 컬럼 = Bootstrap의 대명사가 됨
- CSS Grid로 직접 구현해도 "Bootstrap 스타일"이라고 부르는 관습이 생김

#### 실전 예시

```tsx
// Bootstrap 스타일 12 컬럼 그리드
function BootstrapStyleLayout() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        gap: "20px",
      }}
    >
      {/* 사이드바 (3/12 = 25%) + 메인 콘텐츠 (9/12 = 75%) */}
      <aside style={{ gridColumn: "span 3", backgroundColor: "#f0f0f0" }}>
        Sidebar
      </aside>
      <main style={{ gridColumn: "span 9", backgroundColor: "#e0e0e0" }}>
        Main Content
      </main>
    </div>
  );
}
```

### 핵심 포인트

- Bootstrap(2011년~)이 12 컬럼 그리드 시스템을 웹 레이아웃의 표준으로 만듦
- 12는 2, 3, 4, 6으로 나눠지므로 유연한 레이아웃 구성 가능
- 대부분의 CSS 프레임워크가 이 패턴을 따름
- CSS Grid의 `repeat(12, 1fr)`은 Bootstrap 그리드와 동일한 개념을 네이티브 CSS로 구현한 것
- 실제로 Bootstrap만의 것은 아니지만, 워낙 영향력이 커서 "12 컬럼 그리드 ≈ Bootstrap 스타일"로 통용됨
