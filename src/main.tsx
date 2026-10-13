import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { getAppBasePath } from './utils/paths'
import './styles/global.css'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={getAppBasePath()}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
