export default function GridAreaBasePageLayout() {
  return (
    <div style={{
        display: 'grid',
        gridTemplateAreas: `
            "header header header"
            "sidebar main main"
            "footer footer footer"
        `,
        gridTemplateColumns: '200px 1fr',
        gridTemplateRows: '100px 1fr 100px',
        gap: '0',
        height: '100vh'
    }}>
        <div style={{gridArea: 'header', backgroundColor: 'lightyellow'}}>header</div>
        <div style={{gridArea: 'sidebar', backgroundColor: 'lightgreen'}}>sidebar</div>
        <div style={{gridArea: 'main', backgroundColor: 'lightpink'}}>main</div>
        <div style={{gridArea: 'footer', backgroundColor: 'lightskyblue'}}>footer</div>
    </div>
  )
}