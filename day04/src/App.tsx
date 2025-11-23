import './App.css';

function App() {

  return (
    <div className="flex flex-col h-screen m-0 p-0">
      <div className="flex flex-row">
        {/* 전통적인 CSS 사용 */}
        <button className='primary-button'>
          Click me
        </button>
        {/* Tailwind CSS 사용 */}
        <button className="px-4 py-2 m-2 bg-blue-500 text-white rounded">
          Click me
        </button>
      </div>
      {/* Tailwind CSS - Spacing, Colors, Typography */}
      <div className="p-4 m-4 bg-gray-100 rounded-lg border-green-700 border-2">
        <h1 className="text-2xl font-bold">Title</h1>
        <p className="text-gray-600 leading-normal text-right">Content</p>
      </div>
      {/* Tailwind CSS - Layout */}
      <div className="flex flex-col items-center justify-center bg-amber-200 m-4 p-4 rounded-lg border-blue-700 border-2 gap-2 h-full">
        <h1 className="text-4xl font-bold">Hello World</h1>
        <p className="text-gray-600 leading-normal text-center">Content</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Click me</button>
      </div>
      {/* 버튼 만들기 실습 */}
      <div>
        {/* 기존 버튼 */}
        <button style={{
          padding: '8px 16px',
          margin: '8px 16px',
          backgroundColor: '#3b82f6',
          color: 'white',
          borderRadius: '4px',
          border: 'none',
          cursor: 'pointer'
        }}>Click me</button>
        {/* Tailwind CSS 버튼 */}
        <button className="px-4 py-2 mx-2 my-1 bg-blue-500 text-white border-0 rounded cursor-pointer">
          Click me
        </button>
      </div>
      {/* 카드 변환하기 */}
      <div className="flex flex-row items-center justify-center m-4 gap-4">
        {/* vanila css 카드 */}
        <div style={{
          width: '300px',
          padding: '24px',
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          backgroundColor: 'white',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        }}>
          <h2 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '12px'}}>Title</h2>
          <p style={{color: '#6b7280', lineHeight: '1.5'}}>Content</p>
        </div>
        {/* tailwind css 카드 */}
        <div className="w-[300px] p-6 border border-gray-200 rounded-lg bg-white shadow">
          <h2 className="text-xl font-bold mb-3">Title</h2>
          <p className="text-gray-600 leading-normal">Content</p>
        </div>
      </div>
      {/* 네비게이션바 변환하기 */}
      <div className="flex flex-col gap-4 background-color-gray-800 text-white">
        {/* vanila css 네비게이션바 */}
        <nav style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px 24px',
          backgroundColor: '#1f2937',
          color: 'white',
        }}>
          <div style={{fontSize: '24px', fontWeight: 'bold'}}>Logo</div>
          <div style={{display: 'flex', gap: '24px'}}>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
        </nav>
        {/* tailwind css 네비게이션바 */}
        <nav className="flex justify-between items-center px-6 py-4 bg-gray-800 text-white">
          <div className="text-2xl font-bold">Logo</div>
          <div className="flex gap-6">
            <a href="#" className="text-white">Home</a>
            <a href="#" className="text-white">About</a>
            <a href="#" className="text-white">Contact</a>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default App
