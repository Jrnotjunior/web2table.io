import { ArrowRight } from 'lucide-react'
import SectionEyebrow from '../SectionEyebrow'
import AboutIllustration from './about/AboutIllustration'

export default function AboutSection() {
  return (
    <section className="section about-section">
      <div className="container about-grid" id="about">
        <AboutIllustration />
        <div className="about-copy">
          <SectionEyebrow>Why Web2Table</SectionEyebrow>
          <h2>Good service takes a team.<br /><span>Great tools help it click.</span></h2>
          <p>Restaurants balance customers, orders, people, and timing all at once. Web2Table is being built to help bring those everyday moving parts together, with practical tools designed around restaurant workflows.</p>
          <p>Our goal is simple: make the work behind a great guest experience feel more connected and manageable.</p>
          <a className="text-link" href="#contact">Get to know Web2Table <ArrowRight size={17} /></a>
        </div>
      </div>
    </section>
  )
}
