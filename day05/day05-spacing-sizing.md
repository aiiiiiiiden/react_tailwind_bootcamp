---
marp: true
theme: default
paginate: true
---

# Day 5: Spacing과 Sizing 시스템

## React + Tailwind Bootcamp

**학습 시간**: 30분
**학습 목표**: Tailwind의 spacing scale을 완벽히 이해하고 활용하기

---

## 오늘 배울 내용

1. Spacing Scale의 체계
2. Padding과 Margin 마스터
3. Width와 Height 제어
4. 실습: 다양한 크기의 컴포넌트

**왜 중요한가?**
Spacing과 Sizing은 UI의 일관성을 만드는 핵심입니다!

---

## Tailwind Spacing Scale

### 기본 단위: 0.25rem (4px)

```
0   -> 0px
1   -> 0.25rem (4px)
2   -> 0.5rem (8px)
3   -> 0.75rem (12px)
4   -> 1rem (16px)
5   -> 1.25rem (20px)
6   -> 1.5rem (24px)
8   -> 2rem (32px)
10  -> 2.5rem (40px)
12  -> 3rem (48px)
16  -> 4rem (64px)
20  -> 5rem (80px)
24  -> 6rem (96px)
```

**기억하기**: 4의 배수로 증가 (일관성!)

---

## Padding 클래스

```jsx
// 모든 방향
p-0    p-1    p-2    p-4    p-6    p-8

// 수평 (horizontal: left + right)
px-4   px-6   px-8

// 수직 (vertical: top + bottom)
py-2   py-4   py-6

// 개별 방향
pt-4   // padding-top
pr-4   // padding-right
pb-4   // padding-bottom
pl-4   // padding-left
```

---

## Margin 클래스

```jsx
// 모든 방향
m-0    m-1    m-2    m-4    m-6    m-8

// 수평 (horizontal)
mx-4   mx-6   mx-8   mx-auto  // auto는 중앙 정렬!

// 수직 (vertical)
my-2   my-4   my-6

// 개별 방향
mt-4   // margin-top
mr-4   // margin-right
mb-4   // margin-bottom
ml-4   // margin-left

// 음수 마진 (negative)
-mt-4  -mx-2
```

---

## 실습 1: Spacing 체험 (5분)

```jsx
export default function SpacingDemo() {
  return (
    <div className="p-8 bg-gray-100">
      {/* 다양한 padding */}
      <div className="mb-4">
        <div className="p-2 bg-blue-500 text-white mb-2">p-2 (8px)</div>
        <div className="p-4 bg-blue-500 text-white mb-2">p-4 (16px)</div>
        <div className="p-8 bg-blue-500 text-white mb-2">p-8 (32px)</div>
      </div>

      {/* 방향별 padding */}
      <div>
        <div className="px-8 py-2 bg-green-500 text-white mb-2">
          px-8 py-2 (가로 넓음)
        </div>
        <div className="px-2 py-8 bg-green-500 text-white">
          px-2 py-8 (세로 넓음)
        </div>
      </div>
    </div>
  );
}
```

---

## mx-auto: 중앙 정렬의 비밀

```jsx
// 중앙 정렬
<div className="w-64 mx-auto bg-blue-500 p-4">
  가운데 정렬된 박스
</div>

// 오른쪽 정렬
<div className="w-64 ml-auto bg-blue-500 p-4">
  오른쪽 정렬된 박스
</div>

// 왼쪽 정렬 (기본)
<div className="w-64 mr-auto bg-blue-500 p-4">
  왼쪽 정렬된 박스
</div>
```

**핵심**: `mx-auto`는 `margin: 0 auto`와 같습니다!

---

## Width 클래스

```jsx
// 고정 크기 (spacing scale 사용)
w-0    w-1    w-2    w-4    w-8    w-16   w-32   w-64

// 분수
w-1/2    // 50%
w-1/3    // 33.333%
w-2/3    // 66.666%
w-1/4    // 25%
w-3/4    // 75%
w-full   // 100%

// 특별한 값
w-screen    // 100vw
w-min       // min-content
w-max       // max-content
w-fit       // fit-content

// Arbitrary
w-[300px]
w-[50%]
```

---

## Height 클래스

```jsx
// 고정 크기
h-0    h-1    h-2    h-4    h-8    h-16   h-32   h-64

// 분수
h-1/2    h-1/3    h-2/3    h-1/4    h-3/4    h-full

// 특별한 값
h-screen    // 100vh
h-min       // min-content
h-max       // max-content
h-fit       // fit-content

// Arbitrary
h-[300px]
h-[80vh]
```

---

## 실습 2: 다양한 크기의 박스 (5분)

```jsx
export default function SizingDemo() {
  return (
    <div className="p-8 space-y-4">
      {/* 고정 너비 */}
      <div className="w-32 h-32 bg-blue-500 text-white flex items-center justify-center">
        w-32 h-32
      </div>

      {/* 비율 너비 */}
      <div className="w-1/2 h-16 bg-green-500 text-white flex items-center justify-center">
        w-1/2 (50%)
      </div>

      {/* 전체 너비 */}
      <div className="w-full h-16 bg-red-500 text-white flex items-center justify-center">
        w-full (100%)
      </div>

      {/* 커스텀 크기 */}
      <div className="w-[300px] h-[100px] bg-purple-500 text-white flex items-center justify-center">
        w-[300px] h-[100px]
      </div>
    </div>
  );
}
```

---

## Max/Min Width/Height

```jsx
// 최대 너비
max-w-xs      // 20rem (320px)
max-w-sm      // 24rem (384px)
max-w-md      // 28rem (448px)
max-w-lg      // 32rem (512px)
max-w-xl      // 36rem (576px)
max-w-2xl     // 42rem (672px)
max-w-4xl     // 56rem (896px)
max-w-6xl     // 72rem (1152px)
max-w-full    // 100%
max-w-screen-lg   // 1024px

// 최소 너비
min-w-0       min-w-full    min-w-[200px]

// 최대/최소 높이
max-h-screen  min-h-screen  max-h-[500px]
```

---

## 실습 3: 반응형 컨테이너 (5분)

```jsx
export default function ResponsiveContainer() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* 반응형 컨테이너 */}
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4">반응형 컨테이너</h1>
        <p className="text-gray-600 mb-4">
          이 컨테이너는 최대 너비가 896px이며, 화면 중앙에 정렬됩니다. 작은
          화면에서는 너비가 100%가 됩니다.
        </p>

        {/* 내부 그리드 */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-blue-100 p-4 rounded">Box 1</div>
          <div className="bg-blue-100 p-4 rounded">Box 2</div>
          <div className="bg-blue-100 p-4 rounded">Box 3</div>
        </div>
      </div>
    </div>
  );
}
```

**패턴**: `max-w-* mx-auto` = 중앙 정렬 + 최대 너비 제한

---

## Space Between: gap의 대안

```jsx
// Flexbox/Grid gap (권장)
<div className="flex gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

// Space utilities (자식 간 간격)
<div className="space-x-4">  {/* 가로 간격 */}
  <span>Item 1</span>
  <span>Item 2</span>
</div>

<div className="space-y-4">  {/* 세로 간격 */}
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

**차이**: `gap`은 flex/grid에서, `space-*`는 일반 block에서 사용

---

## 실습 4: 카드 컴포넌트 완성 (10분)

```jsx
export default function Card({ title, description, imageUrl }) {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* 이미지 */}
      <img
        src={imageUrl || "https://picsum.photos/400/200"}
        alt={title}
        className="w-full h-48 object-cover"
      />

      {/* 콘텐츠 */}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{title || "카드 제목"}</h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {description ||
            "카드 설명입니다. Tailwind의 spacing을 활용해 일관된 여백을 만들었습니다."}
        </p>

        {/* 태그 */}
        <div className="flex gap-2 mb-4">
          <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">
            React
          </span>
          <span className="px-3 py-1 bg-green-100 text-green-600 text-sm rounded-full">
            Tailwind
          </span>
        </div>

        {/* 버튼 */}
        <button className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
          더 보기
        </button>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>2시간 전</span>
          <span>❤️ 24</span>
        </div>
      </div>
    </div>
  );
}
```

---

## 실습 4: 사용하기

```jsx
export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <Card
        title="Tailwind CSS 마스터하기"
        description="Spacing과 Sizing을 완벽하게 이해하면 일관성 있는 UI를 빠르게 만들 수 있습니다."
      />
    </div>
  );
}
```

---

## 실전 패턴 모음

```jsx
// 1. 페이지 컨테이너
<div className="max-w-7xl mx-auto px-4 py-8">

// 2. 섹션 간격
<section className="py-16 px-4">

// 3. 카드 그리드
<div className="grid grid-cols-3 gap-6 p-6">

// 4. 입력 폼
<div className="space-y-4">
  <input className="w-full px-4 py-2" />
  <input className="w-full px-4 py-2" />
</div>

// 5. 버튼 그룹
<div className="flex gap-2">
  <button className="px-4 py-2">Cancel</button>
  <button className="px-4 py-2">Confirm</button>
</div>
```

---

## Aspect Ratio (v4 내장)

```jsx
// 16:9 비율 유지
<div className="aspect-video bg-gray-200">
  <img src="..." className="w-full h-full object-cover" />
</div>

// 1:1 정사각형
<div className="aspect-square bg-gray-200">
  Content
</div>

// 4:3
<div className="aspect-4/3 bg-gray-200">
  Content
</div>

// 커스텀
<div className="aspect-[4/3] bg-gray-200">
```

---

## Object Fit & Position

```jsx
// 이미지 크기 조절
<img src="..." className="w-full h-64 object-cover" />    // 꽉 채움
<img src="..." className="w-full h-64 object-contain" />  // 비율 유지
<img src="..." className="w-full h-64 object-fill" />     // 늘림

// 위치 조절
<img src="..." className="object-center" />  // 중앙
<img src="..." className="object-top" />     // 위
<img src="..." className="object-bottom" />  // 아래
```

---

## 핵심 정리

### Spacing

- **Scale**: 0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24
- **Padding**: `p-*`, `px-*`, `py-*`, `pt-*`...
- **Margin**: `m-*`, `mx-*`, `my-*`, `mx-auto` (중앙)
- **Gap**: `gap-*` (flex/grid에서)
- **Space**: `space-x-*`, `space-y-*`

### Sizing

- **Width**: `w-*`, `w-1/2`, `w-full`, `w-screen`
- **Height**: `h-*`, `h-1/2`, `h-full`, `h-screen`
- **Max/Min**: `max-w-*`, `min-w-*`, `max-h-*`, `min-h-*`

---

## 실전 팁

1. **일관성 유지**: spacing scale을 벗어나지 마세요
2. **4의 배수**: 4, 8, 12, 16, 24 위주로 사용
3. **mx-auto 활용**: 중앙 정렬의 기본
4. **max-w 설정**: 읽기 좋은 너비 유지
5. **gap 우선**: margin 대신 gap 사용

---

## 내일 배울 내용

### Day 6: Color와 Typography

- Color palette 완벽 활용
- 폰트 크기, 굵기, 행간
- 실습: 타이포그래피 시스템 구축

**색상과 타이포그래피로 디자인 완성!**

---

## 과제 (선택)

1. **프로필 카드**

   - 이미지, 이름, 설명, 버튼
   - 적절한 spacing 활용

2. **그리드 갤러리**

   - 3열 그리드
   - 각 아이템에 일관된 간격

3. **실험**
   - 모든 spacing 값을 바꿔가며 느낌 파악
   - `max-w-*` 값에 따른 가독성 비교

**수고하셨습니다! 🎉**
