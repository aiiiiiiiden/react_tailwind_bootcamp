---
marp: true
theme: default
paginate: true
---

# Day 1: CSS Box Model의 완벽한 이해

## React + Tailwind Bootcamp

**학습 시간**: 30분
**학습 목표**: Box Model을 완벽히 이해하고 실전에 적용하기

---

## 오늘 배울 내용

1. Box Model이란 무엇인가?
2. Margin, Padding, Border의 차이
3. box-sizing의 중요성
4. 실습: 카드 컴포넌트 만들기

**왜 중요한가?**
모든 CSS 레이아웃의 기초입니다. 이것을 이해하지 못하면 원하는 디자인을 구현할 수 없습니다.

---

## Box Model 구조

```
┌─────────────────────────────────┐
│        Margin (외부 여백)         │
│  ┌───────────────────────────┐  │
│  │    Border (테두리)         │  │
│  │  ┌─────────────────────┐  │  │
│  │  │  Padding (내부 여백) │  │  │
│  │  │  ┌───────────────┐  │  │  │
│  │  │  │   Content     │  │  │  │
│  │  │  │   (내용)      │  │  │  │
│  │  │  └───────────────┘  │  │  │
│  │  └─────────────────────┘  │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

---

## Margin vs Padding

### Margin (외부 여백)

- 요소와 **다른 요소** 사이의 공간
- 배경색이 적용되지 않음
- 마진 겹침(Margin Collapse) 발생 가능

### Padding (내부 여백)

- 콘텐츠와 **테두리** 사이의 공간
- 배경색이 적용됨
- 요소의 클릭 영역에 포함

---

## 실습 1: Margin vs Padding 체험하기

```jsx
// App.jsx
export default function App() {
  return (
    <div style={{ padding: "20px", backgroundColor: "#f0f0f0" }}>
      {/* Padding 예제 */}
      <div
        style={{
          padding: "20px",
          backgroundColor: "#3b82f6",
          color: "white",
          marginBottom: "20px",
        }}
      >
        Padding 20px - 파란 영역이 넓어짐
      </div>

      {/* Margin 예제 */}
      <div
        style={{
          margin: "20px",
          backgroundColor: "#ef4444",
          color: "white",
          padding: "10px",
        }}
      >
        Margin 20px - 주변과 거리가 생김
      </div>
    </div>
  );
}
```

---

## 실습 1: 직접 해보기 (5분)

1. 새 React 프로젝트 생성 (또는 기존 프로젝트 사용)
2. 위 코드를 복사해서 실행
3. 다음을 시도해보세요:
   - padding 값을 `40px`로 변경
   - margin 값을 `0px`로 변경
   - backgroundColor를 다른 색으로 변경

**관찰하기**: Padding은 내부가 넓어지고, Margin은 다른 요소와의 거리가 변합니다.

---

## Box-Sizing: content-box vs border-box

### content-box (기본값)

```css
width: 200px;
padding: 20px;
border: 2px;
/* 실제 너비 = 200 + 40 + 4 = 244px */
```

### border-box (권장)

```css
width: 200px;
padding: 20px;
border: 2px;
/* 실제 너비 = 200px (padding, border 포함) */
```

---

## 실습 2: Box-Sizing 비교

```jsx
export default function BoxSizingDemo() {
  return (
    <div style={{ padding: "20px" }}>
      {/* content-box */}
      <div
        style={{
          width: "200px",
          padding: "20px",
          border: "2px solid black",
          boxSizing: "content-box",
          backgroundColor: "#fbbf24",
        }}
      >
        content-box: 실제 너비 244px
      </div>

      {/* border-box */}
      <div
        style={{
          width: "200px",
          padding: "20px",
          border: "2px solid black",
          boxSizing: "border-box",
          backgroundColor: "#34d399",
        }}
      >
        border-box: 실제 너비 200px
      </div>
    </div>
  );
}
```

---

## 왜 border-box를 사용할까?

### 문제 상황

```css
.container {
  width: 100%;
  padding: 20px; /* content-box면 화면 밖으로 삐져나감! */
}
```

### 해결책

```css
* {
  box-sizing: border-box; /* 모든 요소에 적용 */
}
```

**실무 팁**: 거의 모든 프로젝트에서 `border-box`를 기본값으로 사용합니다.

---

## 실습 3: 카드 컴포넌트 만들기 (15분)

목표: Box Model을 활용해 실전 카드 컴포넌트 제작

```jsx
export default function Card() {
  return (
    <div
      style={{
        width: "300px",
        padding: "24px",
        margin: "20px",
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        boxSizing: "border-box",
        backgroundColor: "white",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ margin: "0 0 12px 0", fontSize: "20px" }}>카드 제목</h2>
      <p style={{ margin: "0", color: "#6b7280", lineHeight: "1.5" }}>
        Box Model을 활용해 만든 카드입니다. Padding으로 내부 여백, Margin으로
        외부 여백을 조절했습니다.
      </p>
    </div>
  );
}
```

---

## 실습 3: 개선하기

위 카드를 다음과 같이 개선해보세요:

1. **이미지 추가**

   - 카드 상단에 이미지 영역 추가
   - `<img>` 태그 사용

2. **버튼 추가**

   - 하단에 "더 보기" 버튼 추가
   - padding으로 버튼 크기 조절

3. **Hover 효과**
   - 마우스 오버 시 그림자 진하게

---

## 실습 3: 개선 예시

```jsx
export default function ImprovedCard() {
  return (
    <div
      style={{
        width: "300px",
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        boxSizing: "border-box",
        backgroundColor: "white",
        overflow: "hidden",
        transition: "box-shadow 0.3s",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.1)")
      }
    >
      {/* 이미지 */}
      <img
        src="https://picsum.photos/300/200"
        alt="Card"
        style={{ width: "100%", display: "block" }}
      />

      {/* 콘텐츠 */}
      <div style={{ padding: "24px" }}>
        <h2 style={{ margin: "0 0 12px 0", fontSize: "20px" }}>카드 제목</h2>
        <p style={{ margin: "0 0 16px 0", color: "#6b7280" }}>
          개선된 카드 컴포넌트입니다.
        </p>

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
          더 보기
        </button>
      </div>
    </div>
  );
}
```

---

## 핵심 정리

### 오늘 배운 것

1. **Box Model 구조**: Content → Padding → Border → Margin
2. **Padding**: 내부 여백, 배경색 적용, 클릭 영역 포함
3. **Margin**: 외부 여백, 배경색 미적용
4. **box-sizing: border-box**: 크기 계산이 직관적

### 실전 팁

- 항상 `box-sizing: border-box` 사용
- Padding으로 클릭 영역 확보
- Margin으로 요소 간 간격 조절

---

## 내일 배울 내용

### Day 2: Flexbox 마스터하기

- Flex container와 item
- justify-content, align-items
- 실습: 네비게이션 바, 버튼 그룹

---

## 과제 (선택)

1. **카드 컴포넌트 3개 만들기**

   - 각각 다른 크기와 스타일
   - 이미지, 텍스트, 버튼 포함

2. **실험하기**
   - padding/margin 값을 극단적으로 변경 (0px, 100px)
   - border 스타일 변경 (solid, dashed, dotted)
   - box-sizing을 content-box로 변경했을 때 어떻게 달라지는지 확인

**수고하셨습니다! 🎉**
