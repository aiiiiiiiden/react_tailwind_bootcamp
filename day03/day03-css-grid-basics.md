---
marp: true
theme: default
paginate: true
---

# Day 3: CSS Grid 기초
## React + Tailwind Bootcamp

**학습 시간**: 30분
**학습 목표**: Grid로 복잡한 2차원 레이아웃 마스터하기

---

## 오늘 배울 내용

1. Grid vs Flexbox: 언제 무엇을 쓸까?
2. Grid 용어와 개념
3. Template을 이용한 레이아웃
4. 실습: 대시보드 레이아웃

**왜 Grid인가?**
복잡한 페이지 레이아웃을 몇 줄로 끝낼 수 있습니다.

---

## Flexbox vs Grid

### Flexbox (1차원)
```
[Item1] [Item2] [Item3]  →  한 방향
```
**사용 시기**: 네비게이션, 버튼 그룹, 카드 내부

### Grid (2차원)
```
[Header    Header   Header]
[Sidebar   Main     Main  ]  →  행과 열
[Footer    Footer   Footer]
```
**사용 시기**: 페이지 레이아웃, 갤러리, 대시보드

---

## Grid 기본 구조

```jsx
export default function BasicGrid() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',  // 3개 열, 균등 분할
      gap: '16px',
      padding: '20px'
    }}>
      <div style={{ padding: '20px', backgroundColor: '#3b82f6', color: 'white' }}>1</div>
      <div style={{ padding: '20px', backgroundColor: '#3b82f6', color: 'white' }}>2</div>
      <div style={{ padding: '20px', backgroundColor: '#3b82f6', color: 'white' }}>3</div>
      <div style={{ padding: '20px', backgroundColor: '#3b82f6', color: 'white' }}>4</div>
      <div style={{ padding: '20px', backgroundColor: '#3b82f6', color: 'white' }}>5</div>
      <div style={{ padding: '20px', backgroundColor: '#3b82f6', color: 'white' }}>6</div>
    </div>
  );
}
```

---

## Grid 용어

```
    Column 1    Column 2    Column 3
Row 1 [ Cell ]    [ Cell ]    [ Cell ]
Row 2 [ Cell ]    [ Cell ]    [ Cell ]

Track: 행(Row) 또는 열(Column)
Cell: 개별 칸
Area: 여러 Cell의 조합
```

---

## fr 단위: 분수(fraction)

```jsx
// 1:1:1 비율
gridTemplateColumns: '1fr 1fr 1fr'

// 1:2:1 비율
gridTemplateColumns: '1fr 2fr 1fr'

// 고정 + 유동
gridTemplateColumns: '200px 1fr'  // 사이드바 200px, 나머지 메인

// 여러 조합
gridTemplateColumns: '200px 1fr 200px'  // 사이드바-메인-사이드바
```

**fr = 남은 공간을 비율로 분배**

---

## 실습 1: 다양한 Grid 패턴 (5분)

```jsx
export default function GridPatterns() {
  return (
    <div style={{ padding: '20px' }}>

      {/* 2열 균등 */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '10px',
        marginBottom: '20px'
      }}>
        <div style={{ padding: '20px', backgroundColor: '#3b82f6', color: 'white' }}>1</div>
        <div style={{ padding: '20px', backgroundColor: '#3b82f6', color: 'white' }}>2</div>
        <div style={{ padding: '20px', backgroundColor: '#3b82f6', color: 'white' }}>3</div>
        <div style={{ padding: '20px', backgroundColor: '#3b82f6', color: 'white' }}>4</div>
      </div>

      {/* 3열 균등 */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '10px',
        marginBottom: '20px'
      }}>
        <div style={{ padding: '20px', backgroundColor: '#10b981', color: 'white' }}>1</div>
        <div style={{ padding: '20px', backgroundColor: '#10b981', color: 'white' }}>2</div>
        <div style={{ padding: '20px', backgroundColor: '#10b981', color: 'white' }}>3</div>
      </div>

      {/* 사이드바 레이아웃 */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '200px 1fr',
        gap: '10px'
      }}>
        <div style={{ padding: '20px', backgroundColor: '#ef4444', color: 'white' }}>Sidebar</div>
        <div style={{ padding: '20px', backgroundColor: '#f59e0b', color: 'white' }}>Main</div>
      </div>

    </div>
  );
}
```

---

## repeat(): 반복을 쉽게

```jsx
// 똑같이 반복
gridTemplateColumns: '1fr 1fr 1fr 1fr'

// repeat 사용
gridTemplateColumns: 'repeat(4, 1fr)'

// 복잡한 패턴 반복
gridTemplateColumns: 'repeat(3, 100px 1fr)'  // 100px 1fr 100px 1fr 100px 1fr
```

---

## Grid Item 배치: grid-column

```jsx
export default function GridSpan() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '10px',
      padding: '20px'
    }}>

      {/* 2칸 차지 */}
      <div style={{
        gridColumn: 'span 2',  // 2개 열 차지
        padding: '20px',
        backgroundColor: '#3b82f6',
        color: 'white'
      }}>
        Span 2
      </div>

      <div style={{ padding: '20px', backgroundColor: '#6b7280', color: 'white' }}>1</div>

      {/* 3칸 차지 (전체) */}
      <div style={{
        gridColumn: 'span 3',  // 3개 열 차지
        padding: '20px',
        backgroundColor: '#10b981',
        color: 'white'
      }}>
        Span 3 (Full Width)
      </div>

      <div style={{ padding: '20px', backgroundColor: '#6b7280', color: 'white' }}>2</div>
      <div style={{ padding: '20px', backgroundColor: '#6b7280', color: 'white' }}>3</div>
      <div style={{ padding: '20px', backgroundColor: '#6b7280', color: 'white' }}>4</div>

    </div>
  );
}
```

---

## 실습 2: 전형적인 페이지 레이아웃 (10분)

```jsx
export default function PageLayout() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '200px 1fr',
      gridTemplateRows: '60px 1fr 60px',
      gap: '0',
      height: '100vh'
    }}>

      {/* Header: 전체 너비 */}
      <header style={{
        gridColumn: 'span 2',
        padding: '20px',
        backgroundColor: '#1f2937',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ fontSize: '20px', fontWeight: 'bold' }}>Logo</div>
        <nav style={{ display: 'flex', gap: '20px' }}>
          <a href="#" style={{ color: 'white' }}>Home</a>
          <a href="#" style={{ color: 'white' }}>About</a>
        </nav>
      </header>

      {/* Sidebar */}
      <aside style={{
        padding: '20px',
        backgroundColor: '#f3f4f6'
      }}>
        <h3 style={{ margin: '0 0 16px 0' }}>Menu</h3>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{ marginBottom: '8px' }}>Dashboard</li>
          <li style={{ marginBottom: '8px' }}>Settings</li>
          <li style={{ marginBottom: '8px' }}>Profile</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main style={{
        padding: '20px',
        backgroundColor: 'white',
        overflow: 'auto'
      }}>
        <h1>Main Content</h1>
        <p>Grid를 활용한 전형적인 페이지 레이아웃입니다.</p>
      </main>

      {/* Footer: 전체 너비 */}
      <footer style={{
        gridColumn: 'span 2',
        padding: '20px',
        backgroundColor: '#1f2937',
        color: 'white',
        textAlign: 'center'
      }}>
        © 2025 My App
      </footer>

    </div>
  );
}
```

---

## Grid Template Areas: 직관적인 레이아웃

```jsx
export default function GridAreas() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateAreas: `
        "header header header"
        "sidebar main main"
        "footer footer footer"
      `,
      gridTemplateColumns: '200px 1fr 1fr',
      gridTemplateRows: '60px 1fr 60px',
      gap: '10px',
      height: '100vh',
      padding: '10px'
    }}>

      <header style={{ gridArea: 'header', backgroundColor: '#3b82f6', color: 'white', padding: '20px' }}>
        Header
      </header>

      <aside style={{ gridArea: 'sidebar', backgroundColor: '#6b7280', color: 'white', padding: '20px' }}>
        Sidebar
      </aside>

      <main style={{ gridArea: 'main', backgroundColor: '#10b981', color: 'white', padding: '20px' }}>
        Main
      </main>

      <footer style={{ gridArea: 'footer', backgroundColor: '#ef4444', color: 'white', padding: '20px' }}>
        Footer
      </footer>

    </div>
  );
}
```

---

## 실습 3: 카드 갤러리 (5분)

```jsx
export default function CardGallery() {
  const cards = Array.from({ length: 9 }, (_, i) => i + 1);

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '20px',
      padding: '20px'
    }}>
      {cards.map((num) => (
        <div key={num} style={{
          padding: '40px',
          backgroundColor: '#f3f4f6',
          borderRadius: '8px',
          textAlign: 'center',
          fontSize: '24px',
          fontWeight: 'bold',
          border: '2px solid #e5e7eb'
        }}>
          Card {num}
        </div>
      ))}
    </div>
  );
}
```

---

## 실습 4: 대시보드 레이아웃 (10분)

```jsx
export default function Dashboard() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridTemplateRows: 'auto',
      gap: '16px',
      padding: '20px',
      backgroundColor: '#f9fafb',
      minHeight: '100vh'
    }}>

      {/* Header: 전체 너비 */}
      <div style={{
        gridColumn: 'span 4',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ margin: 0 }}>Dashboard</h1>
      </div>

      {/* Stats Cards: 각각 1칸 */}
      <div style={{
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <div style={{ fontSize: '14px', color: '#6b7280' }}>Total Users</div>
        <div style={{ fontSize: '32px', fontWeight: 'bold', marginTop: '8px' }}>1,234</div>
      </div>

      <div style={{
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <div style={{ fontSize: '14px', color: '#6b7280' }}>Revenue</div>
        <div style={{ fontSize: '32px', fontWeight: 'bold', marginTop: '8px' }}>$56,789</div>
      </div>

      <div style={{
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <div style={{ fontSize: '14px', color: '#6b7280' }}>Orders</div>
        <div style={{ fontSize: '32px', fontWeight: 'bold', marginTop: '8px' }}>890</div>
      </div>

      <div style={{
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <div style={{ fontSize: '14px', color: '#6b7280' }}>Growth</div>
        <div style={{ fontSize: '32px', fontWeight: 'bold', marginTop: '8px', color: '#10b981' }}>+23%</div>
      </div>

      {/* Chart: 3칸 */}
      <div style={{
        gridColumn: 'span 3',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        minHeight: '300px'
      }}>
        <h2 style={{ margin: '0 0 16px 0' }}>Sales Chart</h2>
        <div style={{ height: '250px', backgroundColor: '#f3f4f6', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          Chart Placeholder
        </div>
      </div>

      {/* Activity: 1칸 */}
      <div style={{
        gridColumn: 'span 1',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{ margin: '0 0 16px 0' }}>Activity</h3>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{ marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid #e5e7eb' }}>New user signup</li>
          <li style={{ marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid #e5e7eb' }}>Order #1234</li>
          <li style={{ marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid #e5e7eb' }}>Payment received</li>
        </ul>
      </div>

    </div>
  );
}
```

---

## 자주 쓰는 Grid 패턴

```jsx
// 1. 자동 채우기 (반응형)
gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))'

// 2. 12열 시스템 (Bootstrap 스타일)
gridTemplateColumns: 'repeat(12, 1fr)'

// 3. 고정 사이드바
gridTemplateColumns: '250px 1fr'

// 4. 3열 레이아웃
gridTemplateColumns: '1fr 2fr 1fr'  // 사이드바-메인-사이드바
```

---

## Grid vs Flexbox 선택 가이드

### Grid 사용
- 페이지 전체 레이아웃
- 행과 열이 모두 중요한 경우
- 갤러리, 대시보드
- 복잡한 배치

### Flexbox 사용
- 컴포넌트 내부 레이아웃
- 한 방향 정렬
- 네비게이션, 버튼 그룹
- 단순한 배치

**함께 사용**: Grid로 전체 레이아웃, Flexbox로 세부 정렬

---

## 핵심 정리

### Grid Container
- `display: grid` - Grid 활성화
- `grid-template-columns` - 열 정의
- `grid-template-rows` - 행 정의
- `gap` - 간격
- `grid-template-areas` - 영역 이름 정의

### Grid Item
- `grid-column: span N` - N개 열 차지
- `grid-area` - 영역 이름 할당

---

## 실전 팁

1. **fr 단위 활용**: 반응형에 유리
2. **repeat() 사용**: 코드 간결화
3. **auto-fill/auto-fit**: 자동 반응형
4. **grid-template-areas**: 복잡한 레이아웃은 areas로
5. **gap 사용**: margin 대신 gap

---

## 내일 배울 내용

### Day 4: Tailwind CSS v4 시작하기
- Tailwind 철학과 설정
- Utility-first 접근법
- 기존 CSS를 Tailwind로 변환
- 드디어 Tailwind 시작!

---

## 과제 (선택)

1. **갤러리 레이아웃**
   - 이미지 9개를 3x3 그리드로 배치
   - 첫 번째 이미지는 2x2 크기

2. **복잡한 대시보드**
   - Header, Sidebar, Main, Footer
   - Main 영역에 Grid로 위젯 배치

3. **실험**
   - `repeat(auto-fill, minmax(200px, 1fr))` 시도
   - 창 크기를 바꿔가며 반응 확인

**수고하셨습니다! 🎉**
**내일부터 본격적으로 Tailwind를 배웁니다!**
