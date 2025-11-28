---
marp: true
theme: default
paginate: true
---

# Day 10: Interactive States
## React + Tailwind Bootcamp

**학습 시간**: 30분
**학습 목표**: Hover, Focus 등 인터랙티브 상태를 활용한 동적 UI 만들기

---

## 오늘 배울 내용

1. Hover, Focus, Active 상태
2. Transitions와 Animations
3. Transform (Scale, Rotate 등)
4. 실습: 인터랙티브 버튼, 카드

**UI에 생명을 불어넣습니다!**

---

## State Variants

```jsx
// Hover (마우스 오버)
hover:bg-blue-700

// Focus (포커스 시 - 입력창, 버튼)
focus:ring-2 focus:ring-blue-500

// Active (클릭하는 순간)
active:scale-95

// Disabled (비활성화)
disabled:opacity-50 disabled:cursor-not-allowed

// Group Hover (부모 hover 시)
group-hover:text-blue-600

// Peer (형제 요소 상태에 따라)
peer-focus:text-blue-600
```

---

## 실습 1: Hover States (5분)

```jsx
export default function HoverDemo() {
  return (
    <div className="p-8 space-y-8">

      {/* 배경색 변화 */}
      <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg">
        Hover Me (배경색 변화)
      </button>

      {/* 그림자 변화 */}
      <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg border border-gray-200 cursor-pointer transition-shadow">
        Hover Me (그림자 진해짐)
      </div>

      {/* 텍스트 색상 변화 */}
      <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
        Hover Me (밑줄 생김)
      </a>

      {/* 테두리 변화 */}
      <div className="p-6 border-2 border-gray-200 hover:border-blue-500 rounded-lg cursor-pointer transition-colors">
        Hover Me (테두리 색 변화)
      </div>

      {/* 불투명도 변화 */}
      <img
        src="https://picsum.photos/200"
        alt="Demo"
        className="rounded-lg hover:opacity-80 transition-opacity cursor-pointer"
      />

    </div>
  );
}
```

---

## Transitions

```jsx
// 기본 transition
transition              // 모든 속성
transition-colors       // 색상만
transition-opacity      // 불투명도만
transition-shadow       // 그림자만
transition-transform    // Transform만
transition-all          // 모든 속성 (주의: 성능)

// Duration (시간)
duration-75    // 75ms
duration-100   // 100ms
duration-150   // 150ms
duration-200   // 200ms (기본)
duration-300   // 300ms
duration-500   // 500ms
duration-700   // 700ms
duration-1000  // 1000ms

// Timing Function
ease-linear    ease-in    ease-out    ease-in-out
```

---

## 실습 2: 부드러운 Transitions (5분)

```jsx
export default function TransitionDemo() {
  return (
    <div className="p-8 space-y-6">

      {/* 빠른 전환 */}
      <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-150">
        Fast (150ms)
      </button>

      {/* 보통 전환 */}
      <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-300">
        Normal (300ms)
      </button>

      {/* 느린 전환 */}
      <button className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors duration-700">
        Slow (700ms)
      </button>

      {/* 여러 속성 동시 전환 */}
      <div className="inline-block px-8 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 hover:shadow-lg transition-all duration-300 cursor-pointer">
        Multiple Properties
      </div>

    </div>
  );
}
```

**브라우저에서 차이를 느껴보세요!**

---

## Transform

```jsx
// Scale (크기)
scale-0       scale-50      scale-75
scale-90      scale-95      scale-100     scale-105     scale-110
hover:scale-105

// Rotate (회전)
rotate-0      rotate-45     rotate-90     rotate-180
hover:rotate-6    hover:-rotate-6

// Translate (이동)
translate-x-0     translate-x-1     translate-y-4
hover:translate-y-1   hover:-translate-x-2

// Skew (기울임)
skew-x-12     skew-y-6
```

---

## 실습 3: Transform 효과 (5분)

```jsx
export default function TransformDemo() {
  return (
    <div className="p-8 grid grid-cols-2 md:grid-cols-3 gap-8">

      {/* Scale */}
      <div className="text-center">
        <div className="w-32 h-32 bg-blue-500 rounded-lg mx-auto hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center justify-center text-white font-bold">
          Scale
        </div>
      </div>

      {/* Rotate */}
      <div className="text-center">
        <div className="w-32 h-32 bg-green-500 rounded-lg mx-auto hover:rotate-12 transition-transform duration-300 cursor-pointer flex items-center justify-center text-white font-bold">
          Rotate
        </div>
      </div>

      {/* Translate */}
      <div className="text-center">
        <div className="w-32 h-32 bg-purple-500 rounded-lg mx-auto hover:-translate-y-2 transition-transform duration-300 cursor-pointer flex items-center justify-center text-white font-bold">
          Lift
        </div>
      </div>

      {/* Scale + Shadow */}
      <div className="text-center">
        <div className="w-32 h-32 bg-red-500 rounded-lg mx-auto hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer flex items-center justify-center text-white font-bold">
          Combo
        </div>
      </div>

      {/* Rotate + Scale */}
      <div className="text-center">
        <div className="w-32 h-32 bg-yellow-500 rounded-lg mx-auto hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-pointer flex items-center justify-center text-gray-900 font-bold">
          Multi
        </div>
      </div>

      {/* 3D Effect */}
      <div className="text-center">
        <div className="w-32 h-32 bg-pink-500 rounded-lg mx-auto hover:scale-105 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex items-center justify-center text-white font-bold">
          3D
        </div>
      </div>

    </div>
  );
}
```

---

## Focus States (입력 폼)

```jsx
export default function FocusDemo() {
  return (
    <div className="p-8 max-w-md mx-auto space-y-6">

      {/* 기본 Focus */}
      <input
        type="text"
        placeholder="Focus me"
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all"
      />

      {/* Ring만 */}
      <input
        type="email"
        placeholder="Email"
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
      />

      {/* 배경색 변화 */}
      <textarea
        placeholder="Message"
        rows={4}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:bg-blue-50 focus:border-blue-500 transition-all resize-none"
      />

    </div>
  );
}
```

**핵심**: `focus:outline-none`으로 기본 outline 제거 후 커스텀 스타일

---

## Group Hover

```jsx
export default function GroupHoverDemo() {
  return (
    <div className="p-8 space-y-4">

      {/* Card with Group Hover */}
      <div className="group p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all cursor-pointer">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
          Hover the Card
        </h3>
        <p className="text-gray-600 group-hover:text-gray-900 transition-colors">
          카드에 마우스를 올리면 제목과 설명 색이 모두 변합니다.
        </p>
        <button className="mt-4 px-4 py-2 bg-gray-100 group-hover:bg-blue-500 group-hover:text-white rounded-lg transition-all">
          Learn More
        </button>
      </div>

      {/* Navigation Item */}
      <a href="#" className="group flex items-center gap-3 p-4 rounded-lg hover:bg-gray-100 transition-colors">
        <div className="w-10 h-10 bg-blue-500 group-hover:bg-blue-600 rounded-lg flex items-center justify-center text-white transition-colors">
          📧
        </div>
        <div>
          <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
            Messages
          </div>
          <div className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
            5 new messages
          </div>
        </div>
      </a>

    </div>
  );
}
```

**패턴**: 부모에 `group`, 자식에 `group-hover:*`

---

## 실습 4: 인터랙티브 버튼 컬렉션 (10분)

```jsx
export default function ButtonCollection() {
  return (
    <div className="p-8 space-y-8">

      <h2 className="text-3xl font-bold text-gray-900 mb-8">Button Collection</h2>

      {/* Primary Buttons */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-900">Primary Buttons</h3>
        <div className="flex flex-wrap gap-4">

          {/* Basic */}
          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors">
            Basic
          </button>

          {/* With Shadow */}
          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 hover:shadow-lg text-white font-semibold rounded-lg transition-all">
            Shadow
          </button>

          {/* With Scale */}
          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 hover:scale-105 active:scale-95 text-white font-semibold rounded-lg transition-all">
            Scale
          </button>

          {/* 3D Effect */}
          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 hover:shadow-xl hover:-translate-y-1 active:translate-y-0 text-white font-semibold rounded-lg transition-all">
            3D Lift
          </button>

        </div>
      </div>

      {/* Outline Buttons */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-900">Outline Buttons</h3>
        <div className="flex flex-wrap gap-4">

          <button className="px-6 py-3 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold rounded-lg transition-all">
            Outline
          </button>

          <button className="px-6 py-3 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white hover:shadow-lg font-semibold rounded-lg transition-all">
            With Shadow
          </button>

        </div>
      </div>

      {/* Ghost Buttons */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-900">Ghost Buttons</h3>
        <div className="flex flex-wrap gap-4">

          <button className="px-6 py-3 text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-colors">
            Ghost
          </button>

          <button className="px-6 py-3 text-gray-600 hover:bg-gray-100 hover:text-gray-900 font-semibold rounded-lg transition-all">
            Subtle
          </button>

        </div>
      </div>

      {/* Icon Buttons */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-900">Icon Buttons</h3>
        <div className="flex flex-wrap gap-4">

          <button className="w-12 h-12 bg-blue-500 hover:bg-blue-600 hover:scale-110 text-white rounded-full transition-all flex items-center justify-center text-xl">
            ❤️
          </button>

          <button className="w-12 h-12 bg-green-500 hover:bg-green-600 hover:rotate-12 text-white rounded-full transition-all flex items-center justify-center text-xl">
            ⭐
          </button>

          <button className="w-12 h-12 border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white rounded-full transition-all flex items-center justify-center text-xl">
            📧
          </button>

        </div>
      </div>

      {/* Loading Button */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-900">States</h3>
        <div className="flex flex-wrap gap-4">

          <button className="px-6 py-3 bg-gray-300 text-gray-500 font-semibold rounded-lg cursor-not-allowed" disabled>
            Disabled
          </button>

          <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg flex items-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Loading...
          </button>

        </div>
      </div>

    </div>
  );
}
```

---

## 실습 5: 인터랙티브 카드 (5분)

```jsx
export default function InteractiveCards() {
  const cards = [
    { title: 'Card 1', icon: '🚀', color: 'blue' },
    { title: 'Card 2', icon: '⚡', color: 'yellow' },
    { title: 'Card 3', icon: '🎨', color: 'purple' },
  ];

  return (
    <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <div
            key={i}
            className="group relative bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-blue-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden"
          >

            {/* Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Content */}
            <div className="relative z-10">
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-900 transition-colors mb-4">
                Hover to see the magic! 마우스를 올려보세요.
              </p>
              <button className="px-4 py-2 bg-gray-100 group-hover:bg-blue-500 group-hover:text-white rounded-lg transition-all">
                Learn More →
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
```

---

## Animations (v4)

```jsx
// 기본 Animations
animate-spin       // 회전
animate-ping       // 확대/축소 반복
animate-pulse      // 불투명도 반복
animate-bounce     // 튕김

// 사용 예
<div className="animate-spin">⚙️</div>
<div className="animate-pulse">💓</div>
<div className="animate-bounce">⬇️</div>
```

---

## 핵심 정리

### States
- **hover**: 마우스 오버
- **focus**: 입력 포커스
- **active**: 클릭 순간
- **group-hover**: 부모 호버 시
- **disabled**: 비활성화

### Transitions
- `transition-colors` (색상)
- `transition-transform` (변형)
- `duration-300` (시간)

### Transforms
- `scale-105` (확대)
- `rotate-6` (회전)
- `-translate-y-2` (위로 이동)

---

## 실전 팁

1. **적절한 Duration**: 대부분 200-300ms가 적당
2. **Transition 최적화**: `transition-all` 대신 특정 속성만
3. **Scale은 미묘하게**: 105-110% 정도가 자연스러움
4. **Focus는 필수**: 접근성을 위해 focus 스타일 꼭 추가
5. **Group Hover**: 카드 같은 컴포넌트에 매우 유용

---

## 내일 배울 내용

### Day 11: 고급 스타일링 기법
- Gradient, Shadow, Backdrop
- Custom Utilities (v4)
- 실습: 모던한 UI 컴포넌트

**더 세련된 디자인 기법을 배웁니다!**

---

## 과제 (선택)

1. **버튼 라이브러리**
   - 다양한 스타일의 버튼 10개
   - 각각 다른 hover 효과

2. **카드 갤러리**
   - 인터랙티브 효과가 있는 카드 6개
   - Group hover 활용

3. **실험**
   - 다양한 transition duration 비교
   - Transform 조합 시도

**수고하셨습니다! 🎉**
