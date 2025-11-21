import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import GridTutorial from './GridTutorial.tsx'
// import GridBasePageLayout from './GridBasePageLayout.tsx'
// import GridAreaBasePageLayout from './GridAreaBasePageLayout.tsx'
// import CardGallery from './CardGallery.tsx'
import GridBaseDashboardLayout from './GridBaseDashboardLayout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <GridTutorial /> */}
    {/* <GridBasePageLayout /> */}
    {/* <GridAreaBasePageLayout /> */}
    {/* <CardGallery /> */}
    <GridBaseDashboardLayout />
  </StrictMode>,
)
