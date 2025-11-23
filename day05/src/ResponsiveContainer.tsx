export default function ResponsiveContainer()
{
    return (
        <>
            <div className='min-h-screen bg-gray-100 p-8'>
                <div className='max-w-4xl mx-auto bg-white p-6 rounded-lg shadow min-w-xs'>
                    <h1 className='text-2xl font-bold mb-4'>Responsive Container</h1>
                    <p className='text-gray-600 mb-4'>This container has a maximum width of 4xl and is centered on the page.</p>
                    {/* 내부 그리드 */}
                    <div className='grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-4'>
                        <div className='bg-blue-100 p-4 rounded'>Box 1</div>
                        <div className='bg-blue-100 p-4 rounded'>Box 2</div>
                        <div className='bg-blue-100 p-4 rounded'>Box 3</div>
                    </div>
                    {/* Space Utilities */}
                    {/* inline-block을 space-x-4로 간격 조정 */}
                    <div className='space-x-4 mt-16'>
                        <span className='bg-blue-100 p-4 rounded'>Box 1</span>
                        <span className='bg-blue-100 p-4 rounded'>Box 2</span>
                        <span className='bg-blue-100 p-4 rounded'>Box 3</span>
                    </div>
                    {/* block을 space-y-4로 간격 조정 */}
                    <div className='space-y-4 mt-16'>
                        {/* <div className='bg-blue-100 p-4 rounded'>Box 1</div> */}
                        <div className='bg-blue-100 p-4 rounded'>Box 1</div>
                        <div className='bg-blue-100 p-4 rounded'>Box 2</div>
                        <div className='bg-blue-100 p-4 rounded'>Box 3</div>
                    </div>
                </div>
            </div>
        </>
    )
}