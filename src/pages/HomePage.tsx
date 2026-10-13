import { useEffect } from 'react'
import SiteLayout from '../components/layout/SiteLayout'
import HeroSection from '../components/sections/HeroSection'
import PlatformSection from '../components/sections/PlatformSection'
import ProductShowcaseSection from '../components/sections/ProductShowcaseSection'
import WorkflowSection from '../components/sections/WorkflowSection'
import SolutionsSection from '../components/sections/SolutionsSection'
import AboutSection from '../components/sections/AboutSection'
import PackagesSection from '../components/sections/PackagesSection'
import ContactSection from '../components/sections/ContactSection'

export default function HomePage() {
  useEffect(() => {
    document.title = 'Web2Table | Restaurant Ordering & Management Platform'
  }, [])

  return (
    <SiteLayout>
      <main>
        <HeroSection />
        <PlatformSection />
        <ProductShowcaseSection />
        <WorkflowSection />
        <SolutionsSection />
        <AboutSection />
        <PackagesSection />
        <ContactSection />
      </main>
    </SiteLayout>
  )
}
