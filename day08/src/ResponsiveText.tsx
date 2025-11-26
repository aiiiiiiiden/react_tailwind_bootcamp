export default function ResponsiveText() {
    return (
        <div className="p-8">
            {/* 크기 변화 */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-8">
                화면 크기를 바꿔보세요!
            </h1>
            {/* 정렬 변화 */}
            <p className="text-left md:text-center lg:text-right text-gray-600 mb-8">
                모바일: 왼쪽 정렬<br />
                태블릿: 가운데 정렬<br />
                데스크톱: 오른쪽 정렬
            </p>
            {/* 색상 변화 */}
            <div className="p-6 bg-blue-500 md:bg-green-500 lg:bg-purple-500 text-white rounded-lg">
                <p className="text-center">
                    모바일: 파란색<br />
                    태블릿: 초록색<br />
                    데스크톱: 보라색
                </p>
            </div>
            {/* 숨기기/보이기 */}
            <div className="hidden md:block">
                태블릿 이상에서만 보임
            </div>
            <div className="block md:hidden">
                모바일에서만 보임
            </div>
            {/* Flex 방향 전환 */}
            <div className="flex flex-col md:flex-row">
                <div>Left Column</div>
                <div>Right Column</div>
            </div>
            {/* Grid 열 개수 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </div>
            {/* 반응형 Spacing */}
            <div className="p-4 md:p-8 lg:p-12">
                <p>모바일: 16px, 태블릿: 32px, 데스크톱: 48px</p>
            </div>
            {/* 반응형 Width & Height */}
            <div className="w-full md:w-1/2 lg:w-1/3">
                <p>모바일: 100%, 태블릿: 50%, 데스크톱: 33.3%</p>
            </div>
            {/* 반응형 Container */}
            <div className="container mx-auto px-4">
                <p>모바일: 100%, 태블릿: 50%, 데스크톱: 33.3%</p>
            </div>
        </div>
    );
}