export default function NavigationBar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 24px', backgroundColor: '#1f2937', color: 'white' }}>
      <div style={{ flex: '0 0 176px', fontSize: '24px', fontWeight: 'bold', backgroundColor: 'white', color: 'black' }}>Logo</div>
      <div style={{ flex: 1, display: 'flex', gap: '24px', justifyContent: 'flex-end', backgroundColor: 'blue'}}>
        <a href="#" style={{ color: 'white' }}>Home</a>
        <a href="#" style={{ color: 'white' }}>About</a>
        <a href="#" style={{ color: 'white' }}>Services</a>
        <a href="#" style={{ color: 'white' }}>Contact</a>
      </div>
    </nav>
  )
}