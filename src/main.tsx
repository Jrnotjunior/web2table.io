import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/global.css'

// GitHub Pages serves this repository under a subpath; Hostinger/custom domains serve from the root.
const basename = window.location.hostname === 'jrnotjunior.github.io' ? '/web2table.io' : '/'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
