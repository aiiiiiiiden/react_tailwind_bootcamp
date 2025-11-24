# Tailwind CSS FAQ

## Q: 컴포넌트를 어느 하이라키에서 사용하던 overlay로 화면을 덮게 만들려면 어떻게 해야 하나요?

### A: `fixed` positioning과 `inset-0`을 사용하세요

컴포넌트를 DOM 트리의 어느 위치에 있든 화면 전체를 덮는 overlay로 만들려면 다음 Tailwind 클래스들을 조합하면 됩니다:

```tsx
<div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>
  {/* 실제 콘텐츠 */}
</div>
```

### 주요 클래스 설명

| 클래스 | CSS 속성 | 설명 |
|--------|----------|------|
| `fixed` | `position: fixed` | 뷰포트 기준으로 고정 위치 지정 |
| `inset-0` | `top: 0; right: 0; bottom: 0; left: 0` | 뷰포트 전체를 덮도록 확장 |
| `z-50` | `z-index: 50` | 다른 요소들 위에 표시 (필요에 따라 조정) |
| `bg-black/50` | `background-color: rgb(0 0 0 / 0.5)` | 반투명 검은색 배경 (50% 투명도) |
| `flex items-center justify-center` | flex 중앙 정렬 | 내부 콘텐츠를 화면 중앙에 배치 |

### 완전한 예제

```tsx
export default function Alert() {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>
      <div className='bg-white p-6 border-l-4 border-blue-500 rounded-lg shadow-xl max-w-md w-full mx-4'>
        <h1 className='text-xl font-bold text-gray-900 mb-2'>Alert</h1>
        <p className='text-gray-700'>This alert appears as an overlay!</p>
      </div>
    </div>
  )
}
```

### 왜 작동하나요?

- **`position: fixed`**: 요소를 일반적인 문서 흐름에서 제거하고 뷰포트를 기준으로 배치합니다. 따라서 부모 요소의 위치나 계층 구조에 관계없이 항상 뷰포트를 기준으로 위치가 결정됩니다.
- **`inset-0`**: `top: 0`, `right: 0`, `bottom: 0`, `left: 0`의 축약형으로, 뷰포트의 모든 면에 붙어서 전체 화면을 덮습니다.
- **`z-index`**: 다른 요소들 위에 overlay가 표시되도록 합니다. 값이 클수록 위에 표시됩니다.

### 추가 팁

**닫기 기능 추가:**
```tsx
export default function Alert({ onClose }: { onClose: () => void }) {
  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'
      onClick={onClose} // 배경 클릭 시 닫기
    >
      <div
        className='bg-white p-6 rounded-lg shadow-xl max-w-md w-full mx-4'
        onClick={(e) => e.stopPropagation()} // 내부 클릭 시 이벤트 전파 방지
      >
        <h1>Alert</h1>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}
```

**스크롤 방지:**
```tsx
// body에 overflow-hidden을 추가하여 배경 스크롤 방지
useEffect(() => {
  document.body.style.overflow = 'hidden'
  return () => {
    document.body.style.overflow = 'unset'
  }
}, [])
```

**애니메이션 추가:**
```tsx
// 페이드 인 효과
<div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-in fade-in duration-200'>
  <div className='bg-white p-6 rounded-lg shadow-xl animate-in zoom-in-95 duration-200'>
    {/* 내용 */}
  </div>
</div>
```

---

## Q: CSS 파일에서 "unknown at rule @theme" 오류가 발생하는 이유는 무엇인가요?

### A: Tailwind CSS v4의 새로운 `@theme` 문법을 IDE나 린터가 아직 인식하지 못하기 때문입니다

Tailwind CSS v4에서는 CSS 변수를 정의하는 새로운 방식으로 `@theme` at-rule을 도입했습니다. 그러나 일부 개발 도구들이 이 새로운 문법을 아직 인식하지 못해서 경고나 오류를 표시할 수 있습니다.

### `@theme`이란?

Tailwind CSS v4에서 디자인 토큰(색상, 간격, 폰트 등)을 정의하는 새로운 방식입니다:

```css
@import 'tailwindcss';

@theme {
  --color-primary: #3b82f6;
  --color-secondary: #8b5cf6;
  --font-display: 'Inter', sans-serif;
}
```

### 해결 방법

#### 1. VS Code 설정 조정 (권장)

`settings.json` 파일에 다음 설정을 추가하여 CSS 린터의 `@theme` 경고를 무시합니다:

```json
{
  "css.lint.unknownAtRules": "ignore"
}
```

**설정 방법:**
1. `Cmd/Ctrl + Shift + P`로 Command Palette 열기
2. "Preferences: Open Settings (JSON)" 검색
3. 위 설정 추가 후 저장

#### 2. Tailwind CSS IntelliSense 확장 업데이트

VS Code를 사용하는 경우, Tailwind CSS IntelliSense 확장을 최신 버전으로 업데이트하세요. 최신 버전은 v4 문법을 지원합니다.

1. VS Code 확장 탭 열기 (`Cmd/Ctrl + Shift + X`)
2. "Tailwind CSS IntelliSense" 검색
3. 업데이트 버튼이 있다면 클릭

#### 3. 프로젝트별 설정 (팀 프로젝트용)

프로젝트 루트에 `.vscode/settings.json` 파일을 만들어 팀 전체가 동일한 설정을 사용하도록 할 수 있습니다:

```json
{
  "css.lint.unknownAtRules": "ignore",
  "css.customData": [".vscode/css-custom-data.json"]
}
```

그리고 `.vscode/css-custom-data.json` 파일에 `@theme` 정의를 추가:

```json
{
  "version": 1.1,
  "atDirectives": [
    {
      "name": "@theme",
      "description": "Define Tailwind CSS v4 design tokens"
    }
  ]
}
```

### 참고 사항

- 이 경고는 **실제 오류가 아닙니다**. Tailwind는 정상적으로 작동하며, IDE가 새로운 문법을 인식하지 못할 뿐입니다.
- 빌드나 개발 서버 실행에는 영향을 주지 않습니다.
- 위 설정들은 IDE의 경고만 제거하는 것이며, Tailwind의 동작에는 영향을 주지 않습니다.
