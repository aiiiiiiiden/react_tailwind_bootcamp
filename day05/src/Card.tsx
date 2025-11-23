export default function Card()
{
    return (
        <div className='max-w-sm mx-auto min-w-[200px] bg-white rounded-lg shadow'>
            <img src='https://picsum.photos/400/200' alt='Card Image' className='w-full h-48 object-cover rounded-t-lg' />
            <div className='p-2'>
                <h3 className='text-lg font-bold'>Card Title</h3>
                <p className='text-gray-600 leading-relaxed mb-2'>Card Description</p>
                {/* 태그 */}
                <div className='flex gap-2 mb-2 flex-wrap'>
                    <span className='px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full'>React</span>
                    <span className='px-3 py-1 bg-green-100 text-green-600 text-sm rounded-full'>Tailwind</span>
                    <span className='px-3 py-1 bg-green-100 text-green-600 text-sm rounded-full'>TypeScript</span>
                    <span className='px-3 py-1 bg-green-100 text-green-600 text-sm rounded-full'>JavaScript</span>
                    <span className='px-3 py-1 bg-green-100 text-green-600 text-sm rounded-full'>Vite</span>
                </div>
                {/* 버튼 */}
                <button className='w-full px-4 py-2 bg-blue-500 text-white rounded-sm hover:bg-blue-700 transition-colors'>더 보기</button>
            </div>
            <div className='px-4 py-2 bg-gray-50 border-t border-gray-200'>
                <div className='flex items-center justify-between text-sm text-gray-500'>
                    <span>2시간 전</span>
                    <span>❤️ 24</span>
                </div>
            </div>
        </div>
    )
}