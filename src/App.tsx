import SiteHeader from './components/layout/SiteHeader'
import SiteFooter from './components/layout/SiteFooter'
import HeroSection from './components/sections/HeroSection'
import PlatformSection from './components/sections/PlatformSection'
import ProductShowcaseSection from './components/sections/ProductShowcaseSection'
import WorkflowSection from './components/sections/WorkflowSection'
import SolutionsSection from './components/sections/SolutionsSection'
import AboutSection from './components/sections/AboutSection'
import ContactSection from './components/sections/ContactSection'
import './styles/app.css'

export default function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <PlatformSection />
        <ProductShowcaseSection />
        <WorkflowSection />
        <SolutionsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
