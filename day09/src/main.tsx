import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
// import ProductGrid from './ProductGrid.tsx'
// import AutoGrid from './AutoGrid.tsx'
// import AspectRatioGrid from './AspectRatioGrid.tsx'
import AdvancedDashboardLayout from './AdvancedDashboardLayout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <ProductGrid /> */}
    {/* <AutoGrid /> */}
    {/* <AspectRatioGrid /> */}
    <AdvancedDashboardLayout />
  </StrictMode>,
)
