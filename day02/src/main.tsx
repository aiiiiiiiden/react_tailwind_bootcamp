import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavigationBar from './NavigationBar.tsx'
import Contents from './Contents.tsx'
import Sidebar from './Sidebar.tsx'
import Footer from './Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
      <NavigationBar />
      <div style={{display: 'flex', flex: 1}}>
        <Sidebar />
        <Contents />
      </div>
      <Footer />
    </div>
  </StrictMode>,
)
