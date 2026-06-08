import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// oklch(0.6204 0.195 84.43)
createRoot(document.getElementById('root')!).render(
  <StrictMode >
    <div className="dark">
      <App />
    </div>
  </StrictMode>,
)
