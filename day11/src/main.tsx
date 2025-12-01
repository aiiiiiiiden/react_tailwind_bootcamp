import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PremiumCards from './PremiumCards.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PremiumCards />
  </StrictMode>,
)
