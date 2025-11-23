import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ResponsiveContainer from './ResponsiveContainer.tsx'
import Card from './Card.tsx'
import Footer from './Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <ResponsiveContainer />
    <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 p-4'>
      <Card />
      <Card />
      <Card />
    </div>
    <Footer />
  </StrictMode>,
)
