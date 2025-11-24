import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Alert from './Alert.tsx'
import BlogPostLayout from './BlogPostLayout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* Alert 컴포넌트 */}
    <Alert type='error'>
      <h1>Alert</h1>
      <p>This is an error alert</p>
    </Alert>
    <Alert type='warning'>
      <h1>Alert</h1>
      <p>This is a warning alert</p>
    </Alert>
    <Alert type='success'>
      <h1>Alert</h1>
      <p>This is a success alert</p>
    </Alert>
    <Alert type='info'>
      <h1>Alert</h1>
      <p>This is an info alert</p>
    </Alert>
    <BlogPostLayout />
  </StrictMode>,
)
