export default function GridBasePageLayout() {
  return (
    <div style={{
        display: 'grid', 
        gridTemplateColumns: '200px 1fr', 
        gridTemplateRows: '100px 1fr 100px',
        gap: '0', 
        height: '100vh'
    }}>
        <div style={{gridColumn: 'span 2', backgroundColor: 'red'}}>header</div>
        <div style={{backgroundColor: 'lightgreen'}}>sidebar</div>
        <div style={{backgroundColor: 'green'}}>main content</div>
        <div style={{gridColumn: 'span 2', backgroundColor: 'lightskyblue'}}>footer</div>
    </div>
  )
}