export default function App() {
  return (
    <>
    <div className='flex flex-col items-center justify-center h-screen gap-4'>
      <div className='flex items-center justify-center bg-linear-to-r from-blue-500 to-purple-500 w-48 h-48 text-white'>
        <h2>왼쪽에서 오른쪽 그라데이션</h2>
      </div>
      <div className='flex items-center justify-center bg-linear-to-b from-blue-500 to-purple-500 w-48 h-48 text-white'>
        <h2>위에서 아래로 그라데이션</h2>
      </div>
      <div className='flex items-center justify-center bg-linear-to-br via-yellow-500 from-blue-500 to-purple-500 w-48 h-48 text-white text-center'>
        <h2>왼쪽 위에서 오른쪽 아래 그라데이션</h2>
      </div>
      <h2 className='text-2xl font-bold bg-linear-to-br from-blue-500 via-yellow-500 to-purple-500 bg-clip-text text-transparent'>텍스트 그라데이션</h2>
      {/* active 시 버튼 이너 쉐도우 */}
      <button className='px-4 py-2 bg-blue-500 text-white rounded active:shadow-inner active:shadow-gray-900 transition-shadow duration-100'>Active me</button>
      {/* Blur Effect */}
      <div className='blur-sm w-48 h-48 bg-white flex items-center justify-center rounded-xl border-2 border-gray-500'>
        <h2 className='text-2xl font-bold text-gray-900'>Blur Effect</h2>
      </div>
    </div>
    </>
  )
}
