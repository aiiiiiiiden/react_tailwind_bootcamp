export default function BlogPostLayout() {
    return (
        <div className='fixed inset-0 z-50 bg-black/50 flex items-center justify-center'>
            <article className='bg-white p-6 m-6 rounded-lg shadow-xl w-full max-w-screen min-w-xl'>
                <header className='mb-8'>
                    <div className='flex items-center gap-2 text-sm text-gray-500 mb-4'>
                        <span className='px-3 py-1 bg-blue-100 text-blue-600 rounded-full font-medium'>React</span>
                        <span>·</span>
                        <time>2025년 1월 19일</time>
                        <span>·</span>
                        <span>5분 읽기</span>
                    </div>
                    <h1 className='text-5xl font-bold text-gray-900 mb-4 leading-tight'>Tailwind CSS로 만드는 아름다운 타이포그래피</h1>
                    <p className='text-xl text-gray-600 leading-relaxed'>색상과 타이포그래피를 활용해 전문적인 디자인을 만드는 방법을 알아봅니다.</p>
                </header>
                {/* Author */}
                <div className='flex items-center gap-4 pb-8 mb-8 border-b border-gray-200'>
                    <div>
                        <div className='font-semibold text-gray-900'>John Doe</div>
                        <div className='text-sm text-gray-500'>Senior Developer</div>
                    </div>
                </div>
                {/* Content */}
                <div className='mb-8 prose prose-lg'>
                    <h2 className='text-3xl font-bold text-gray-900 mt-12 mb-4'>타이포그래피의 중요성</h2>
                    <p className='text-base text-gray-700 leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, illum delectus deleniti optio non, beatae illo neque, officiis blanditiis assumenda recusandae odio explicabo animi porro numquam? Quisquam quibusdam dolore aperiam? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem porro vel vitae. Quas blanditiis, hic ipsa natus debitis sapiente. Quam magnam aspernatur tenetur distinctio ut aliquam. Architecto ipsa ipsum sint?</p>
                    <blockquote className='border-l-4 border-blue-500 pl-4 py-2 my-6 italic text-gray-600 bg-blue-50'>"타이포그래피는 디자인의 98%를 차지한다." - Oliver Reichenstein</blockquote>
                    <h3 className='text-2xl font-semibold text-gray-900 mt-8 mb-4'>핵심 원칙</h3>
                    <ul className='space-y-2 mb-6'>
                        <li className='flex items-start gap-2'>
                            <span className='text-blue-500 mt-1'>✓</span>
                            <span className='text-gray-700'>일관된 크기 체계 사용</span>
                        </li>
                        <li className='flex items-start gap-2'>
                            <span className='text-blue-500 mt-1'>✓</span>
                            <span className='text-gray-700'>적절한 행간 설정</span>
                        </li>
                        <li className='flex items-start gap-2'>
                            <span className='text-blue-500 mt-1'>✓</span>
                            <span className='text-gray-700'>색상 대비 확보</span>
                        </li>
                    </ul>
                    <div className='bg-gray-50 border border-gray-200 rounded-lg p-6 my-8'>
                        <h4 className='text-lg font-semibold text-gray-900 mb-2'>💡 팁</h4>
                        <p className='text-gray-700 text-sm leading-relaxed'>본문 텍스트는 gray-700 정도를 사용하면 순수 검정보다 눈이 편합니다. 제목은 gray-900으로 대비를 줍니다.</p>
                    </div>
                    <p className='text-gray-700 leading-relaxed'>이러한 원칙을 따르면 누구나 쉽게 읽을 수 있는 아름다운 콘텐츠를 만들 수 있습니다.</p>
                </div>
                {/* Footer */}
                <footer className='mb-8 flex items-center justify-between'>
                    <div className='flex gap-2'>
                        <span className='text-sm text-gray-500'>태그:</span>
                        <span className='text-sm text-blue-600 hover:underline cursor-pointer'>Tailwind</span>
                        <span className='text-sm text-blue-600 hover:underline cursor-pointer'>Design</span>
                    </div>
                    <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors'>공유하기</button>
                </footer>
            </article>
        </div>
    )
}