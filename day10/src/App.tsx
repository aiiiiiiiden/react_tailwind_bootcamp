export default function App() {
  return (
    <>
    <div className='flex flex-col items-center justify-center h-screen gap-4'>
      <h1>States</h1>
      {/* 마우스 오버 */}
      <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>Hover me</button>
      {/* Focus */}
      <input type='text' className='px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500' placeholder='Focus me' />
      {/* Active */}
      <button className='px-4 py-2 bg-blue-500 text-white rounded active:bg-blue-700'>Active me</button>
      {/* hover 시 그림자 변화 */}
      <button className='px-4 py-2 bg-blue-500 text-white rounded hover:shadow-lg hover:shadow-gray-300'>Hover me</button>
      {/* active 시 테두리 변화 */}
      <div className='box-border h-16 text-center flex items-center justify-center'>
        <button className='px-4 py-2 bg-blue-500 text-white rounded active:border-2 active:border-blue-700'>Active me</button>
      </div>
      <h1>Transforms</h1>
      {/* hover 시 크기 변화 */}
      <button className='px-4 py-2 bg-blue-500 text-white rounded hover:scale-110 transition-transform duration-100'>Hover me</button>
      {/* hover 시 회전 변화 */}
      <button className='px-4 py-2 bg-blue-500 text-white rounded hover:rotate-4 transition-transform duration-100'>Hover me</button>
      {/* hover 시 이동 변화 */}
      <button className='px-4 py-2 bg-blue-500 text-white rounded hover:-translate-x-2 transition-transform duration-100'>Hover me</button>
      {/* hover 시 skew */}
      <button className='px-4 py-2 bg-blue-500 text-white rounded hover:skew-x-12 hover:skew-y-6 transition-transform duration-100'>Hover me</button>
      <h1>Focus States</h1>
      {/* 기본 Focus 효과 : outline-none으로 기본 아웃라인 제거 후 설정 */}
      <input type='text' className='px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-100' placeholder='Focus me' />
      {/* 배경색 변화 */}
      <textarea className='px-4 py-2 border border-gray-300 rounded focus:outline-none focus:bg-blue-50 focus:border-blue-500 transition-all duration-100' placeholder='Message' />
      <h1>Loading Button</h1>
      <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg flex items-center gap-2">
        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
        </svg>
        Loading...
      </button>
    </div>
    </>
  )
}
