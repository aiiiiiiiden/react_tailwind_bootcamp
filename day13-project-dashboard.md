---
marp: true
theme: default
paginate: true
---

# Day 13: 실전 프로젝트 - Admin 대시보드
## React + Tailwind Bootcamp

**학습 시간**: 30분 (+ 추가 실습 권장)
**학습 목표**: 복잡한 레이아웃과 데이터 시각화가 있는 대시보드 제작

---

## 프로젝트 개요

### 만들 것
- Sidebar Navigation
- Top Header
- Stats Cards
- Charts & Graphs
- Data Tables
- Activity Feed

### 핵심 기술
✅ Complex Grid Layouts
✅ Container Queries
✅ Data Visualization
✅ Responsive Sidebar
✅ Interactive Tables

---

## 프로젝트 시작

```bash
npm create vite@latest dashboard -- --template react
cd dashboard
npm install -D tailwindcss @tailwindcss/vite
```

**파일 구조**:
```
src/
├── App.jsx
├── components/
│   ├── Sidebar.jsx
│   ├── Header.jsx
│   ├── StatsGrid.jsx
│   ├── Charts.jsx
│   └── ActivityFeed.jsx
└── data/
    └── mockData.js
```

---

## Step 1: Mock Data (2분)

```jsx
// data/mockData.js
export const stats = [
  { label: 'Total Revenue', value: '$45,231.89', change: '+20.1%', trend: 'up', icon: '💰' },
  { label: 'Subscriptions', value: '+2,350', change: '+180.1%', trend: 'up', icon: '👥' },
  { label: 'Sales', value: '+12,234', change: '+19%', trend: 'up', icon: '📈' },
  { label: 'Active Now', value: '+573', change: '+201', trend: 'up', icon: '🟢' },
];

export const recentSales = [
  { name: 'Olivia Martin', email: 'olivia@email.com', amount: '+$1,999.00' },
  { name: 'Jackson Lee', email: 'jackson@email.com', amount: '+$39.00' },
  { name: 'Isabella Nguyen', email: 'isabella@email.com', amount: '+$299.00' },
  { name: 'William Kim', email: 'william@email.com', amount: '+$99.00' },
  { name: 'Sofia Davis', email: 'sofia@email.com', amount: '+$39.00' },
];

export const activities = [
  { type: 'sale', message: 'New sale recorded', time: '2 min ago' },
  { type: 'user', message: 'New user registered', time: '5 min ago' },
  { type: 'subscription', message: 'Subscription renewed', time: '10 min ago' },
  { type: 'payment', message: 'Payment received', time: '15 min ago' },
];
```

---

## Step 2: Sidebar (5분)

```jsx
// components/Sidebar.jsx
import { useState } from 'react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { icon: '📊', label: 'Dashboard', active: true },
    { icon: '👥', label: 'Customers', active: false },
    { icon: '📦', label: 'Products', active: false },
    { icon: '💳', label: 'Orders', active: false },
    { icon: '📈', label: 'Analytics', active: false },
    { icon: '⚙️', label: 'Settings', active: false },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:sticky top-0 left-0 z-50
        h-screen
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        lg:translate-x-0
        transition-transform duration-300
        w-64 bg-gray-900 text-white
        flex flex-col
      `}>

        {/* Logo */}
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-xl">
              📊
            </div>
            <span className="text-xl font-bold">Dashboard</span>
          </div>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`
                w-full flex items-center gap-3 px-4 py-3 rounded-lg
                transition-all duration-200
                ${item.active
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }
              `}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-800">
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              JD
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-medium truncate">John Doe</div>
              <div className="text-sm text-gray-400 truncate">john@example.com</div>
            </div>
          </div>
        </div>

      </aside>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-900 text-white rounded-lg shadow-lg"
      >
        {isOpen ? '✕' : '☰'}
      </button>
    </>
  );
}
```

---

## Step 3: Header (3분)

```jsx
// components/Header.jsx
export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-200 backdrop-blur-sm bg-white/80">
      <div className="px-4 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-4">

          {/* Search */}
          <div className="flex-1 max-w-xl">
            <div className="relative">
              <input
                type="search"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                🔍
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">

            {/* Notifications */}
            <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
              <span className="text-xl">🔔</span>
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Messages */}
            <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
              <span className="text-xl">💬</span>
              <span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full"></span>
            </button>

            {/* User Menu */}
            <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
              <span className="hidden md:block text-sm font-medium text-gray-700">John Doe</span>
            </button>

          </div>

        </div>
      </div>
    </header>
  );
}
```

---

## Step 4: Stats Grid (5분)

```jsx
// components/StatsGrid.jsx
import { stats } from '../data/mockData';

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="@container bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >

          <div className="flex items-center justify-between mb-4">
            <span className="text-3xl">{stat.icon}</span>
            <span className={`
              px-2 py-1 rounded-full text-xs font-semibold
              ${stat.trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}
            `}>
              {stat.change}
            </span>
          </div>

          <div className="space-y-1">
            <p className="text-sm text-gray-600">{stat.label}</p>
            <p className="text-2xl @md:text-3xl font-bold text-gray-900">
              {stat.value}
            </p>
          </div>

        </div>
      ))}
    </div>
  );
}
```

---

## Step 5: Charts Section (5분)

```jsx
// components/Charts.jsx
import { recentSales, activities } from '../data/mockData';

export default function Charts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

      {/* Main Chart */}
      <div className="lg:col-span-2 @container bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg @md:text-xl font-semibold text-gray-900 mb-6">
          Revenue Overview
        </h3>

        {/* Simple Bar Chart Placeholder */}
        <div className="h-64 @md:h-80 flex items-end justify-between gap-2">
          {[40, 70, 45, 80, 60, 90, 75, 85, 65, 95, 70, 80].map((height, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-2">
              <div
                className="w-full bg-gradient-to-t from-blue-600 to-purple-600 rounded-t hover:opacity-80 transition-opacity cursor-pointer"
                style={{ height: `${height}%` }}
              ></div>
              <span className="text-xs text-gray-500 hidden @md:block">
                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Sales */}
      <div className="@container bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg @md:text-xl font-semibold text-gray-900 mb-6">
          Recent Sales
        </h3>

        <div className="space-y-4">
          {recentSales.map((sale, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                {sale.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-900 truncate text-sm @md:text-base">
                  {sale.name}
                </p>
                <p className="text-xs @md:text-sm text-gray-500 truncate">
                  {sale.email}
                </p>
              </div>
              <div className="font-semibold text-gray-900 text-sm @md:text-base">
                {sale.amount}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
```

---

## Step 6: Activity Feed (5분)

```jsx
// components/ActivityFeed.jsx
import { activities } from '../data/mockData';

export default function ActivityFeed() {
  const getIconAndColor = (type) => {
    const map = {
      sale: { icon: '💰', color: 'blue' },
      user: { icon: '👤', color: 'green' },
      subscription: { icon: '⭐', color: 'purple' },
      payment: { icon: '💳', color: 'pink' },
    };
    return map[type] || map.sale;
  };

  return (
    <div className="@container bg-white rounded-xl p-6 border border-gray-200">
      <h3 className="text-lg @md:text-xl font-semibold text-gray-900 mb-6">
        Recent Activity
      </h3>

      <div className="space-y-4">
        {activities.map((activity, index) => {
          const { icon, color } = getIconAndColor(activity.type);

          return (
            <div key={index} className="flex items-start gap-4">
              <div className={`
                w-10 h-10 rounded-full flex items-center justify-center text-xl flex-shrink-0
                bg-${color}-100
              `}>
                {icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm @md:text-base font-medium text-gray-900">
                  {activity.message}
                </p>
                <p className="text-xs @md:text-sm text-gray-500">
                  {activity.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <button className="w-full mt-6 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
        View All Activity
      </button>
    </div>
  );
}
```

---

## Step 7: Main Layout (5분)

```jsx
// App.jsx
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatsGrid from './components/StatsGrid';
import Charts from './components/Charts';
import ActivityFeed from './components/ActivityFeed';

export default function App() {
  return (
    <div className="flex h-screen bg-gray-50">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Header */}
        <Header />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-4 lg:p-8 space-y-6">

            {/* Page Title */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Dashboard
              </h1>
              <p className="text-gray-600">
                Welcome back! Here's what's happening today.
              </p>
            </div>

            {/* Stats */}
            <StatsGrid />

            {/* Charts */}
            <Charts />

            {/* Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ActivityFeed />

              {/* Additional Widget */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Upgrade to Pro
                </h3>
                <p className="text-blue-100 mb-6">
                  Get access to advanced analytics, custom reports, and priority support.
                </p>
                <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                  Upgrade Now
                </button>
              </div>
            </div>

          </div>
        </main>

      </div>

    </div>
  );
}
```

---

## 완성! 🎉

### 체크리스트
✅ 반응형 사이드바 (모바일 드로어)
✅ Sticky 헤더
✅ Container queries 활용
✅ 데이터 시각화
✅ 인터랙티브 컴포넌트

### 개선 아이디어
- 실제 차트 라이브러리 (Chart.js, Recharts)
- 다크 모드 지원
- 데이터 필터링 기능
- 실시간 업데이트 (WebSocket)

---

## 핵심 패턴 정리

### Layout
```jsx
// Sidebar + Main
<div className="flex h-screen">
  <Sidebar />
  <Main />
</div>

// Sticky Header
<header className="sticky top-0 z-30">

// Scrollable Content
<main className="flex-1 overflow-y-auto">
```

---

## 실전 팁

1. **Container Queries**: 재사용 컴포넌트에 활용
2. **z-index 관리**: 10, 20, 30, 40, 50 단위로
3. **Loading States**: 스켈레톤 UI 추가
4. **Error Handling**: 빈 상태 디자인
5. **성능**: Virtual scrolling (긴 리스트)

---

## 내일 배울 내용

### Day 14: 종합 복습 & 포트폴리오 프로젝트
- 14일간 배운 내용 총정리
- E-commerce 카드 레이아웃
- Best Practices & 최적화
- 다음 단계 로드맵

**마지막 날! 모든 것을 마무리합니다!**

---

## 오늘의 과제

### 필수
1. 대시보드 완성하고 실행
2. 다양한 화면 크기에서 테스트

### 선택
1. 차트 라이브러리 통합 (Recharts)
2. 다크 모드 추가
3. 추가 페이지 만들기 (Settings, Profile)
4. 애니메이션 추가 (Framer Motion)

**수고하셨습니다! 🎉**
**내일은 마지막 날입니다!**
