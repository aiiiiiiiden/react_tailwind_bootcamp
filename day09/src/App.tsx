export default function App() {
  return (
    <>
      {/* 기존 Media Query */}
      <div className="text-md md:text-lg">
        <h1>화면이 768px 이상이면 텍스트 크기가 커집니다.</h1>
      </div>
      {/* Container Query */}
      <div className="@container bg-gray-100">
        <div className="text-sm @md:text-lg">
          <h1>부모가 768px 이상이면 텍스트 크기가 커집니다.</h1>
        </div>
      </div>
      {/* Container Query 활용 */}
      <div className="p-8 space-y-8 bg-zinc-200">
        <div className="@container max-w-4xl bg-gray-100 p-4">
          <div className="bg-white p-4 rounded-lg">
            <h3 className="text-sm @md:text-xl font-bold">
              넓은 컨테이너
            </h3>
            <p className="text-xs @md:text-base text-gray-600 mt-2">
              이 카드는 부모가 넓으면 큰 글씨, 좁으면 작은 글씨를 사용합니다.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
