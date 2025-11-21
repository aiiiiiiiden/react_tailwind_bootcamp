function GridTutorial() {

  return (
    <div style={{height: '100vh', display: 'flex', flexDirection: 'column'}}>
      <p>flex는 1차원 : gap 10px, justifyContent: 'space-around'을 이용해 3개의 요소를 균등 분할</p>
      <div style={{display: 'flex', justifyContent: 'space-around', gap: '10px', backgroundColor: 'red'}}>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
      </div>
      {/* 일반적인 grid는 2차원 */}
      <p>grid는 2차원 : gap 10px, gridTemplateColumns을 이용해 3열 균등 분할</p>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: '10px', backgroundColor: 'blue'}}>
        <h1>Hello World</h1>
        <h1 style={{backgroundColor: 'green'}}>Hello World</h1>
        <h1>Hello World</h1>
        <h1 style={{backgroundColor: 'yellow'}}>Hello World</h1>
        <h1 style={{backgroundColor: 'purple'}}>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
      </div>
      {/* grid를 사용해  비율, 고정, 유동, 여러 조합하기 */}
      <p>grid를 사용해  비율, 고정, 유동, 여러 조합하기</p>
      <div style={{display: 'grid', gridTemplateColumns: '200px 1fr 300px 2fr 1fr', backgroundColor: 'green'}}>
        <h1 style={{backgroundColor: 'orange'}}>Hello World</h1>
        <h1 style={{backgroundColor: 'pink'}}>Hello World</h1>
        <h1 style={{backgroundColor: 'lightblue'}}>Hello World</h1>
        <h1 style={{backgroundColor: 'brown'}}>Hello World</h1>
        <h1 style={{backgroundColor: 'gray'}}>Hello World</h1>
      </div>
      {/* 2열 균등 그리드 */}
      <p>2열 균등 그리드 : gridTemplateColumns: '1fr 1fr'을 이용해 2열 균등 분할</p>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', backgroundColor: 'red'}}>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
      </div>
      {/* 3열 균등 그리드 */}
      <p>3열 균등 그리드 : gridTemplateColumns: '1fr 1fr 1fr'을 이용해 3열 균등 분할</p>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', backgroundColor: 'red'}}>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1 style={{backgroundColor: 'green'}}>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
      </div>
      {/* 사이드바 레이아웃 */}
      <p>사이드바 레이아웃 : gridTemplateColumns: '200px 1fr'을 이용해 사이드바 레이아웃</p>
      <div style={{display: 'grid', gridTemplateColumns: '200px 1fr', gap: '10px', backgroundColor: 'lightyellow', flex: 1}}>
        <h1>Hello World</h1>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <h1 style={{flex: 1, backgroundColor: 'lightgreen'}}>Hello World</h1>
          <h1 style={{flex: 1, backgroundColor: 'lightgreen'}}>Hello World</h1>
        </div>
      </div>
    </div>
  )
}

export default GridTutorial
