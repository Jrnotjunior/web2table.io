import { useEffect } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import LegalPage from './pages/LegalPage'
import HomePage from './pages/HomePage'
import ConsentBanner from './components/legal/ConsentBanner'
import SiteHeader from './components/layout/SiteHeader'
import SiteFooter from './components/layout/SiteFooter'

function NotFoundPage() {
  useEffect(() => {
    document.title = 'Page Not Found | Web2Table'
  }, [])

  return (
    <>
      <SiteHeader />
      <main className="legal-page">
        <div className="container legal-container">
          <p className="legal-kicker">WEB2TABLE</p>
          <h1>Page not found</h1>
          <p className="legal-intro">Sorry, we couldn’t find the page you were looking for. It may have moved or the address may be incorrect.</p>
          <p><Link to="/">Return to the homepage</Link></p>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<LegalPage />} />
        <Route path="/terms" element={<LegalPage />} />
        <Route path="/refunds" element={<LegalPage />} />
        <Route path="/consent" element={<LegalPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ConsentBanner />
    </>
  )
}
