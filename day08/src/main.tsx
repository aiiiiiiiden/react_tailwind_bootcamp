import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ResponsiveCardGrid from './ResponsiveCardGrid.tsx'
import ResposiveNavigation from './ResposiveNavigation.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ResposiveNavigation />
    <ResponsiveCardGrid />
  </StrictMode>,
)
