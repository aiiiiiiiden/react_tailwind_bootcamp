---
marp: true
theme: default
paginate: true
---

# Day 2: Flexbox 마스터하기

## React + Tailwind Bootcamp

**학습 시간**: 30분
**학습 목표**: Flexbox로 모든 1차원 레이아웃 자유자재로 다루기

---

## 오늘 배울 내용

1. Flexbox가 해결하는 문제
2. Container 속성 vs Item 속성
3. 정렬의 모든 것
4. 실습: 네비게이션 바, 버튼 그룹

**왜 Flexbox인가?**
90%의 레이아웃 문제를 간단하게 해결합니다. Tailwind를 쓰더라도 개념은 필수입니다.

---

## Flexbox 이전의 세상

```jsx
// 옛날 방식: float를 이용한 정렬
<div style={{ overflow: "hidden" }}>
  <div style={{ float: "left" }}>왼쪽</div>
  <div style={{ float: "right" }}>오른쪽</div>
</div>
```

**문제점**:

- 수직 정렬이 어려움
- clearfix 같은 핵이 필요
- 코드가 복잡하고 직관적이지 않음

---

## Flexbox로 해결

```jsx
// Flexbox: 3줄로 끝
<div style={{ display: "flex", justifyContent: "space-between" }}>
  <div>왼쪽</div>
  <div>오른쪽</div>
</div>
```

**장점**:

- 직관적
- 강력한 정렬 기능
- 반응형에 유리

---

## Flexbox 핵심 개념

### 두 가지 역할

**Container (부모)**

```jsx
<div style={{ display: "flex" }}>
  {" "}
  {/* Container */}
  <div>Item 1</div> {/* Item */}
  <div>Item 2</div> {/* Item */}
</div>
```

- Container는 배치 규칙을 정의
- Item은 개별 동작을 정의

---

## Main Axis vs Cross Axis

```
flex-direction: row (기본값)
────────────────────────────→ Main Axis
│  [Item1] [Item2] [Item3]
↓ Cross Axis

flex-direction: column
│  [Item1]
│  [Item2]
│  [Item3]
↓ Main Axis
```

**중요**: 축에 따라 정렬 속성이 달라집니다!

---

## Container 속성 #1: flex-direction

```jsx
export default function FlexDirectionDemo() {
  return (
    <div style={{ padding: "20px" }}>
      {/* Row (가로) */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            padding: "20px",
            backgroundColor: "#3b82f6",
            color: "white",
          }}
        >
          1
        </div>
        <div
          style={{
            padding: "20px",
            backgroundColor: "#3b82f6",
            color: "white",
          }}
        >
          2
        </div>
        <div
          style={{
            padding: "20px",
            backgroundColor: "#3b82f6",
            color: "white",
          }}
        >
          3
        </div>
      </div>

      {/* Column (세로) */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div
          style={{
            padding: "20px",
            backgroundColor: "#ef4444",
            color: "white",
          }}
        >
          1
        </div>
        <div
          style={{
            padding: "20px",
            backgroundColor: "#ef4444",
            color: "white",
          }}
        >
          2
        </div>
        <div
          style={{
            padding: "20px",
            backgroundColor: "#ef4444",
            color: "white",
          }}
        >
          3
        </div>
      </div>
    </div>
  );
}
```

---

## Container 속성 #2: justify-content

**Main Axis 방향 정렬**

```jsx
const justifyOptions = [
  "flex-start", // 시작점
  "flex-end", // 끝점
  "center", // 중앙
  "space-between", // 양끝 배치, 사이 균등
  "space-around", // 양 옆 포함 균등
  "space-evenly", // 완전 균등
];
```

---

## 실습 1: justify-content 체험 (5분)

```jsx
export default function JustifyContentDemo() {
  const [justify, setJustify] = React.useState("flex-start");

  return (
    <div style={{ padding: "20px" }}>
      <select
        value={justify}
        onChange={(e) => setJustify(e.target.value)}
        style={{ marginBottom: "20px", padding: "8px" }}
      >
        <option>flex-start</option>
        <option>flex-end</option>
        <option>center</option>
        <option>space-between</option>
        <option>space-around</option>
        <option>space-evenly</option>
      </select>

      <div
        style={{
          display: "flex",
          justifyContent: justify,
          gap: "10px",
          padding: "20px",
          backgroundColor: "#f3f4f6",
        }}
      >
        <div
          style={{
            padding: "20px",
            backgroundColor: "#3b82f6",
            color: "white",
          }}
        >
          A
        </div>
        <div
          style={{
            padding: "20px",
            backgroundColor: "#3b82f6",
            color: "white",
          }}
        >
          B
        </div>
        <div
          style={{
            padding: "20px",
            backgroundColor: "#3b82f6",
            color: "white",
          }}
        >
          C
        </div>
      </div>
    </div>
  );
}
```

---

## Container 속성 #3: align-items

**Cross Axis 방향 정렬**

```jsx
const alignOptions = [
  "flex-start", // 시작점
  "flex-end", // 끝점
  "center", // 중앙
  "stretch", // 늘리기 (기본값)
  "baseline", // 텍스트 기준선
];
```

---

## 실습 2: 완벽한 중앙 정렬 (2분)

```jsx
// 가장 많이 쓰는 패턴
export default function CenterDemo() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center", // 가로 중앙
        alignItems: "center", // 세로 중앙
        height: "300px",
        backgroundColor: "#f3f4f6",
      }}
    >
      <div
        style={{
          padding: "40px",
          backgroundColor: "#3b82f6",
          color: "white",
          borderRadius: "8px",
        }}
      >
        완벽한 중앙!
      </div>
    </div>
  );
}
```

**암기하세요**: 중앙 정렬 = `justify-center` + `align-center`

---

## Container 속성 #4: gap

```jsx
// 예전 방식: margin으로 간격
<div style={{ display: 'flex' }}>
  <div style={{ marginRight: '10px' }}>A</div>
  <div style={{ marginRight: '10px' }}>B</div>
  <div>C</div>  {/* 마지막은 margin 없음 */}
</div>

// 현대 방식: gap 사용
<div style={{ display: 'flex', gap: '10px' }}>
  <div>A</div>
  <div>B</div>
  <div>C</div>  {/* 깔끔! */}
</div>
```

**실무 팁**: 항상 `gap`을 사용하세요.

---

## Item 속성 #1: flex-grow

```jsx
export default function FlexGrowDemo() {
  return (
    <div style={{ display: "flex", gap: "10px", padding: "20px" }}>
      {/* 고정 크기 */}
      <div
        style={{
          width: "100px",
          padding: "20px",
          backgroundColor: "#6b7280",
          color: "white",
        }}
      >
        고정
      </div>

      {/* 남은 공간 차지 */}
      <div
        style={{
          flexGrow: 1,
          padding: "20px",
          backgroundColor: "#3b82f6",
          color: "white",
        }}
      >
        flex-grow: 1 (나머지 공간 차지)
      </div>
    </div>
  );
}
```

---

## Item 속성 #2: flex 단축 속성

```jsx
// flex: grow shrink basis
flex: 1; // flex: 1 1 0% (균등 분할)
flex: "0 0 auto"; // flex: 0 0 auto (고정)
```

**자주 쓰는 패턴**:

```jsx
<div style={{ display: "flex", gap: "20px" }}>
  <aside style={{ flex: "0 0 200px" }}>사이드바 (고정 200px)</aside>
  <main style={{ flex: 1 }}>메인 콘텐츠 (나머지 차지)</main>
</div>
```

---

## 실습 3: 네비게이션 바 만들기 (8분)

```jsx
export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 24px",
        backgroundColor: "#1f2937",
        color: "white",
      }}
    >
      {/* 로고 */}
      <div style={{ fontSize: "24px", fontWeight: "bold" }}>Logo</div>

      {/* 메뉴 */}
      <div style={{ display: "flex", gap: "24px" }}>
        <a href="#" style={{ color: "white", textDecoration: "none" }}>
          Home
        </a>
        <a href="#" style={{ color: "white", textDecoration: "none" }}>
          About
        </a>
        <a href="#" style={{ color: "white", textDecoration: "none" }}>
          Contact
        </a>
      </div>

      {/* 버튼 */}
      <button
        style={{
          padding: "8px 16px",
          backgroundColor: "#3b82f6",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Login
      </button>
    </nav>
  );
}
```

---

## 실습 4: 버튼 그룹 만들기 (5분)

```jsx
export default function ButtonGroup() {
  return (
    <div style={{ padding: "20px" }}>
      {/* 기본 버튼 그룹 */}
      <div
        style={{
          display: "flex",
          gap: "8px",
          marginBottom: "20px",
        }}
      >
        <button
          style={{
            padding: "8px 16px",
            backgroundColor: "#3b82f6",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Button 1
        </button>
        <button
          style={{
            padding: "8px 16px",
            backgroundColor: "#3b82f6",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Button 2
        </button>
        <button
          style={{
            padding: "8px 16px",
            backgroundColor: "#3b82f6",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Button 3
        </button>
      </div>

      {/* 양 끝 배치 */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <button
          style={{
            padding: "8px 16px",
            backgroundColor: "#6b7280",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Cancel
        </button>
        <button
          style={{
            padding: "8px 16px",
            backgroundColor: "#3b82f6",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
```

---

## 실전 패턴 모음

```jsx
// 패턴 1: 카드 내부 레이아웃
<div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
  <h2>Title</h2>
  <p style={{ flex: 1 }}>Content</p>  {/* 남은 공간 차지 */}
  <button>Action</button>
</div>

// 패턴 2: 아이콘 + 텍스트
<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
  <span>📧</span>
  <span>Email</span>
</div>

// 패턴 3: 태그 리스트
<div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
  <span style={{ padding: '4px 12px', backgroundColor: '#e5e7eb', borderRadius: '12px' }}>React</span>
  <span style={{ padding: '4px 12px', backgroundColor: '#e5e7eb', borderRadius: '12px' }}>Tailwind</span>
</div>
```

---

## 핵심 정리

### Container 속성 (부모)

- `display: flex` - Flexbox 활성화
- `flex-direction` - 방향 (row/column)
- `justify-content` - Main axis 정렬
- `align-items` - Cross axis 정렬
- `gap` - 간격

### Item 속성 (자식)

- `flex: 1` - 남은 공간 차지
- `flex: 0 0 auto` - 고정 크기

---

## 실전 팁

1. **중앙 정렬은 암기**: `justify-center` + `align-center`
2. **gap 사용**: margin으로 간격 주지 마세요
3. **flex: 1 활용**: 남은 공간 채우기
4. **flex-wrap**: 줄바꿈이 필요하면 `flex-wrap: wrap`

---

## 내일 배울 내용

### Day 3: CSS Grid 기초

- 2차원 레이아웃의 강자
- Grid template areas
- 실습: 대시보드 레이아웃

**Grid vs Flexbox**: 언제 무엇을 쓸까?

---

## 과제 (선택)

1. **반응형 네비게이션**

   - 모바일: 햄버거 메뉴
   - 데스크톱: 가로 메뉴

2. **카드 리스트**

   - 카드 3개를 가로로 배치
   - flex-wrap으로 화면 크기에 따라 줄바꿈

3. **실험**
   - justify-content와 align-items의 모든 조합 시도
   - flex-direction을 바꿔가며 축 이해하기

**수고하셨습니다! 🎉**
