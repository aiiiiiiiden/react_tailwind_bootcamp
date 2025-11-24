import './App.css'

function App() {
  return (
    <div className='space-y-2 m-4'>
      {/* Background Colors */}
      <div className='space-y-2'>
        <div className='bg-blue-500 p-4'>bg-blue-500</div>
        <div className='bg-green-500 p-4'>bg-green-500</div>
        <div className='bg-red-500 p-4'>bg-red-500</div>
        <div className='bg-yellow-500 p-4'>bg-yellow-500</div>
        <div className='bg-purple-500 p-4'>bg-purple-500</div>
        <div className='bg-orange-500 p-4'>bg-orange-500</div>
      </div>
      {/* Text Colors */}
      <div className='space-y-2'>
        <div className='text-blue-500 p-4'>text-blue-500</div>
        <div className='text-green-500 p-4'>text-green-500</div>
        <div className='text-red-500 p-4'>text-red-500</div>
        <div className='text-yellow-500 p-4'>text-yellow-500</div>
        <div className='text-purple-500 p-4'>text-purple-500</div>
        <div className='text-orange-500 p-4'>text-orange-500</div>
      </div>
      {/* Border Colors */}
      <div className='space-y-2'>
        <div className='border border-blue-500 p-4'>border-blue-500</div>
        <div className='border border-green-500 p-4'>border-green-500</div>
        <div className='border border-red-500 p-4'>border-red-500</div>
        <div className='border border-yellow-500 p-4'>border-yellow-500</div>
        <div className='border border-purple-500 p-4'>border-purple-500</div>
        <div className='border border-orange-500 p-4'>border-orange-500</div>
      </div>
      {/* Ring Focus 효과 */}
      <div className='space-y-2'>
        <input type='text' className='w-full p-4 border border-gray-300 rounded-lg focus:ring-2' placeholder='Focus me' />
      </div>
      {/* 실용적인 Color 조합 */}
      <div className='space-y-2'>
        {/* 기본 카드 */}
        <div className='bg-white border border-gray-200 p-4'>bg-white border border-gray-200</div>
        {/* 어두운 카드 */}
        <div className='bg-gray-800 text-white p-4'>bg-gray-800 text-white</div>
        {/* 컬러풀한 카드 */}
        <div className='bg-blue-50 border border-blue-200 p-4'>bg-blue-50 border border-blue-200</div>
        {/* 강조 박스 */}
        <div className='bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-4'>bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800</div>
        {/* 성공 메시지 */}
        <div className='bg-green-50 text-green-800 border border-green-200 p-4'>bg-green-50 text-green-800 border border-green-200</div>
      </div>
      {/* Typography Scale */}
      <div className='max-w-2xl mx-auto p-8 space-y-4'>
        {/* Headings */}
        <h1 className='text-4xl font-bold'>Heading 1</h1>
        <h2 className='text-3xl font-bold'>Heading 2</h2>
        <h3 className='text-2xl font-bold'>Heading 3</h3>
        <h4 className='text-xl font-semibold'>Heading 4</h4>
        <h5 className='text-lg font-semibold'>Heading 5</h5>
        {/* Body Text */}
        <p className='text-base text-gray-700 leading-relaxed'>일반 텍스트입니다. text-base (16px)와 leading-relaxed를 사용했습니다. 가독성이 좋은 행간을 제공합니다.</p>
        {/* Small Text */}
        <p className='text-sm text-gray-600'>작은 텍스트입니다. text-sm (14px)를 사용합니다. 부가 설명이나 캡션에 적합합니다.</p>
        {/* Smallest Text */}
        <p className='text-xs text-gray-500'>더 작은 텍스트입니다. text-xs (12px)를 사용합니다. 메타 정보나 라벨에 사용됩니다.</p>
      </div>
    </div>
  );
}

export default App
