function App() {
  return (
    <div>
      {/* 예전 방식 : 수직 정렬이 어려움*/}
      <div style={{ overflow: 'hidden', backgroundColor: 'blue' }}>
        <div style={{ float: 'left' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
        <div style={{ float: 'right' }}>오른쪽</div>
      </div>
      {/* Flexbox 방식 */}
      <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'red' }}>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis aliquid officia numquam neque quas nihil incidunt corporis hic ipsum, rerum, possimus vitae odio amet iste. Veniam suscipit laboriosam a illum?</div>
        <div style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>오른쪽</div>
      </div>
      {/* Flexbox Main Axis vs Cross Axis */}
      <p>flex-direction: row 예시</p>
      <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: 'green' }}>
        <div>A</div>
        <div>B</div>
        <div>C</div>
      </div>
      <p>flex-direction: column, inline-flex 예시</p>
      <div style={{ display: 'inline-flex', flexDirection: 'column', backgroundColor: 'yellow' }}>
        <div>A</div>
        <div>B</div>
        <div>C</div>
      </div>
      {/* justify-content */}
      <p>justify-content: flex-start 예시</p>
      <div style={{ display: 'flex', justifyContent: 'flex-start', backgroundColor: 'purple' }}>
        <div>A</div>
        <div>B</div>
        <div>C</div>
      </div>
      {/* justify-content: flex-end 예시 */}
      <p>justify-content: flex-end 예시</p>
      <div style={{ display: 'flex', justifyContent: 'flex-end', backgroundColor: 'orange' }}>
        <div>A</div>
        <div>B</div>
        <div>C</div>
      </div>
      {/* justify-content: center 예시 */}
      <p>justify-content: center 예시</p>
      <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'pink' }}>
        <div>A</div>
        <div>B</div>
        <div>C</div>
      </div>
      {/* align-items */}
      <p>flex-direction: column, align-items: flex-start 예시</p>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', backgroundColor: 'brown', height: '100px' }}>
        <div>A</div>
        <div>B</div>
        <div>C</div>
      </div>
      {/* align-items: flex-end 예시 */}
      <p>flex-direction: column, align-items: flex-end 예시</p>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', backgroundColor: 'gray', height: '100px' }}>
        <div>A</div>
        <div>B</div>
        <div>C</div>
      </div>
      {/* 완벽한 중앙 정렬 */}
      <p>완벽한 중앙 정렬 예시</p>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'cyan', height: '100px' }}>
        <div>A</div>
        <div>B</div>
        <div>C</div>
      </div>
      {/* 예전 방식 margin으로 간격 조절하기 */}
      <p>예전 방식 margin으로 간격 조절하기</p>
      <div style={{ display: 'flex', backgroundColor: 'teal', height: '100px' }}>
        <div style={{ marginRight: '10px' }}>A</div>
        <div style={{ marginRight: '10px' }}>B</div>
        <div>C</div>
      </div>
      {/* 현재 방식 gap 사용하기 */}
      <p>현재 방식 gap 사용하기</p>
      <div style={{ display: 'flex', gap: '10px', backgroundColor: 'indigo', height: '100px' }}>
        <div>A</div>
        <div>B</div>
        <div>C</div>
      </div>
      {/* flex-grow */}
      <p>flex-grow 예시 : 내용물을 표시한 후 남은 공간을 균등하게</p>
      <div style={{ display: 'flex', backgroundColor: 'lime', height: '100px' }}>
        <div style={{ flexGrow: 1 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
        <div style={{ flexGrow: 1 }}>B</div>
        <div style={{ flexGrow: 1 }}>C</div>
      </div>
      {/* flex: 1 */}
      <p>flex: 1 예시 : 공간을 균등하게</p>
      <div style={{ display: 'flex', backgroundColor: 'lime', height: '100px' }}>
        <div style={{ flex: 1 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
        <div style={{ flex: 1 }}>B</div>
        <div style={{ flex: 1 }}>C</div>
      </div>
      {/* flex: 0 0 너비 */}
      <p>flex: none 예시 : 너비를 고정하고 남은 공간을 균등하게</p>
      <div style={{ display: 'flex', backgroundColor: 'lightblue', height: '100px' }}>
        <div style={{ flex: '0 0 200px' }}>네비게이션 바 영역.</div>
        <div style={{ flex: 1 }}>컨텐츠 영역. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      </div>
    </div>
  )
}

export default App
