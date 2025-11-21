function Card() {
  return (
    <div style={{
      width: '300px',
      padding: '24px',
      margin: '20px',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      boxSizing: 'border-box',
      backgroundColor: 'white',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      transition: 'box-shadow 0.3s',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
    }}
    >
      <img src="https://picsum.photos/300/200" alt="Card" style={{width: '100%'}} />
      <h2 style={{ margin: '0 0 12px 0', fontSize: '20px', color: '#1f2937'}}>카드 제목</h2>
      <p style={{margin: '0', color: '#6b7280', lineHeight: '1.5'}}>
        Box Model을 활용해 만든 카드입니다. Padding으로 내부 여백, Margin으로외부 여백을 조절했습니다. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio amet rem, dolorem sit nulla laborum eveniet nesciunt dolor exercitationem? Pariatur, voluptatem provident. Quidem animi nulla temporibus eligendi tempore esse? Vero!
      </p>
      <button style={{
        width: '100%',
        padding: '12px',
        backgroundColor: '#3b82f6',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: '12px',
        outline: 'none',
      }}>
        더 보기
      </button>
    </div>
  )
}

function App() {
  return (
    <>
      {/* 패딩 예제 */}
      <div style={{padding: '0px', backgroundColor: 'blue'}}>
        <p style={{margin: '0px'}}>패딩 예제 : padding: 40px</p>
      </div>
      {/* 마진 예제 */}
      <div style={{margin: '0px', backgroundColor: 'red'}}>
        <p style={{margin: '0px'}}>마진 예제 : margin: 40px</p>
      </div>
      {/* content-box vs border-box 예제 */}
      <div style={{padding: '20px', backgroundColor: 'green'}}>
        <div style={{
          width: '200px',
          padding: '20px',
          border: '2px solid black',
          boxSizing: 'content-box',
          backgroundColor: '#fbbf24',
          marginBottom: '20px',
        }}>
           content-box: 실제 너비 244px
        </div>
        <div style={{
          width: '200px',
          padding: '20px',
          border: '2px solid black',
          boxSizing: 'border-box',
          backgroundColor: '#34d399',
        }}>
          border-box: 실제 너비 200px
        </div>
      </div>
      {/* 카드 컴포넌트 만들기 */}
      <Card />
    </>
  )
}

export default App
