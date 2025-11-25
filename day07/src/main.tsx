import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import StickyHeader from './StickyHeader.tsx'
// import SidebarLayout from './SidebarLayout.tsx'
// import HeroSection from './HeroSection.tsx'
// import CardGrid from './CardGrid.tsx'
// import SplitScreen from './SplitScreen.tsx'
import LandingPage from './LandingPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <StickyHeader /> */}
    {/* <SidebarLayout /> */}
    {/* <HeroSection /> */}
    {/* <CardGrid /> */}
    {/* <SplitScreen /> */}
    <LandingPage />
  </StrictMode>,
)
