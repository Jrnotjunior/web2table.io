import { Routes, Route } from 'react-router-dom'
import LegalPage from './pages/LegalPage'
import HomePage from './pages/HomePage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy" element={<LegalPage />} />
      <Route path="/terms" element={<LegalPage />} />
      <Route path="/refunds" element={<LegalPage />} />
      <Route path="/consent" element={<LegalPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  )
}
