import { Routes, Route } from 'react-router-dom'
import SiteHeader from './components/layout/SiteHeader'
import SiteFooter from './components/layout/SiteFooter'
import LegalPage from './pages/LegalPage'
import HeroSection from './components/sections/HeroSection'
import PlatformSection from './components/sections/PlatformSection'
import ProductShowcaseSection from './components/sections/ProductShowcaseSection'
import WorkflowSection from './components/sections/WorkflowSection'
import SolutionsSection from './components/sections/SolutionsSection'
import AboutSection from './components/sections/AboutSection'
import ContactSection from './components/sections/ContactSection'
import PackagesSection from './components/sections/PackagesSection'

function HomePage() {
  return <><SiteHeader /><main><HeroSection /><PlatformSection /><ProductShowcaseSection /><WorkflowSection /><SolutionsSection /><AboutSection /><PackagesSection /><ContactSection /></main><SiteFooter /></>
}

export default function App() {
  return <><Routes><Route path="/" element={<HomePage />} /><Route path="/privacy" element={<LegalPage />} /><Route path="/terms" element={<LegalPage />} /><Route path="/refunds" element={<LegalPage />} /><Route path="/consent" element={<LegalPage />} /><Route path="*" element={<HomePage />} /></Routes></>
}
