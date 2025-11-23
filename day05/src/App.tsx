import './App.css'

function App() {
  return (
    <div className='flex flex-col gap-4'>
      <h1>Spacing and Sizing</h1>
      <div className='bg-amber-500'>no margin, no padding</div>
      <div className='bg-green-500 p-4'>padding all 4px</div>
      <div className='bg-amber-500 m-4'>margin all 4px</div>
      <div className='bg-blue-600 p-4 m-4'>padding 4px, margin 4px</div>
      <div className='bg-red-500 pt-4 pl-4'>padding top 4px, padding left 4px</div>
      <div className='bg-yellow-500 mt-4 mx-4'>margin top 4px, margin left and right 4px</div>
      <div className='bg-purple-500 mx-auto px-4'>margin left and right auto, padding left and right 4px</div>
      <div className='bg-pink-500 ml-auto px-4 mr-4'>오른족 정렬된 박스, 오른쪽 마진 추가</div>
      <div className='bg-orange-500 mr-auto px-4 ml-4'>왼쪽 정렬된 박스, 왼쪽 마진 추가</div>

      <h1>Width and Height</h1>
      {/* w-2 */}
      <div className='bg-green-500 w-2'>width 2</div>
      {/* w-1/2 */}
      <div className='bg-green-500 w-1/2'>width 50%</div>
      {/* w-full */}
      <div className='bg-blue-500 w-full p-4'>width 100%, padding 4px, margin 4px</div>
      {/* w-screen */}
      <div className='bg-red-500 w-screen'>width 100vw</div>
      {/* w-min */}
      <div className='bg-yellow-500 w-min'>width min-content</div>
      {/* w-max */}
      <div className='bg-purple-500 w-max'>width max-content</div>
      {/* w-fit */}
      <div className='bg-pink-500 w-fit'>width fit-content</div>
      {/* w-[300px] */}
      <div className='bg-orange-500 w-[300px]'>width 300px</div>
      {/* h-2 */}
      <div className='bg-green-500 h-2'>height 2</div>
      {/* h-1/2 */}
      <div className='bg-green-500 h-1/2'>height 50%</div>
      {/* h-full */}
      <div className='bg-blue-500 h-full'>height 100%</div>
      {/* h-screen */}
      <div className='bg-red-500 h-screen'>height 100vh</div>
      {/* h-min */}
      <div className='bg-yellow-500 h-min'>height min-content</div>
      {/* h-max */}
      <div className='bg-purple-500 h-max'>height max-content</div>
      {/* h-fit */}
      <div className='bg-pink-500 h-fit p-4'>height fit-content, padding 4px</div>
      <h1>Responsive Container</h1>
      {/* max-w-6xl */}
      <div className='bg-blue-500 max-w-xl min-w-sm'>max-w-xl, min-w-sm</div>
      {/* max-h-[500px] */}
      <div className='bg-green-500 min-h-[500px]'>max-h-[500px]</div>
    </div>
  )
}

export default App
