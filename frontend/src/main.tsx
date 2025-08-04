import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { UnderMaintenance } from './components/UnderMaintenance.tsx'

// Set dark mode as default
document.documentElement.classList.add('dark');
const isUnderMaintenance = import.meta.env.VITE_UNDER_MAINTENANCE === "true";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isUnderMaintenance ? <UnderMaintenance /> : <App />}
  </StrictMode>,
)
