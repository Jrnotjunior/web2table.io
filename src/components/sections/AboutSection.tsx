import { ArrowRight } from 'lucide-react'
import SectionEyebrow from '../SectionEyebrow'
import AboutIllustration from './about/AboutIllustration'

export default function AboutSection() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-grid">
        <AboutIllustration />
        <div className="about-copy">
          <SectionEyebrow>Why Web2Table</SectionEyebrow>
          <h2>One restaurant brand.<br /><span>Every branch connected.</span></h2>
          <p>Whether you operate one location or several, Web2Table gives the owner a centralized view while each branch has its own dedicated storefront and operational workspace.</p>
          <p>Branch teams focus on their own orders and day-to-day work, while owners can oversee the wider restaurant operation from one place.</p>
          <a className="text-link" href="#contact">Get to know Web2Table <ArrowRight size={17} /></a>
        </div>
      </div>
    </section>
  )
}
