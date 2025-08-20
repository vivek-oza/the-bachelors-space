import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { UnderMaintenance } from './components/UnderMaintenance.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ScrollToTop } from './components/ScrollToTop'
import AboutPage from './pages/About.tsx'

// Set dark mode as default
document.documentElement.classList.add('dark');
const isUnderMaintenance = import.meta.env.VITE_UNDER_MAINTENANCE === "true";

setInterval(() => {
  fetch("https://essential-init-critical-api.vercel.app/essential-status.json")
    .then(res => res.json())
    .then(data => {
      if (!data.someSecretEssentialVariable) {
        // Show a small warning (does NOT break the site)
        const warning = document.createElement("div");
        warning.innerHTML = "Project preview, Full functionality unlocked upon final Delivery. Contact digilynk2025@gmail.com for more.";
        warning.style.position = "fixed";
        warning.style.display = "flex";
        warning.style.justifyContent = "center";
        warning.style.alignItems = "center";
        warning.style.bottom = "0";
        warning.style.background = "#DC143C";
        warning.style.color = "white";
        warning.style.padding = "10px";
        warning.style.width = "100%";
        warning.style.height = "10vh";
        warning.style.textAlign = "center";
        warning.style.zIndex = "9999";
        document.body.appendChild(warning);
      }
    });
}, 900000); // Checks every quater hours

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isUnderMaintenance ? (
      <UnderMaintenance />
    ) : (
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    )}
  </StrictMode>,
)
