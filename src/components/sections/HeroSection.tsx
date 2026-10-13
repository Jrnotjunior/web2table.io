import { ArrowDownRight, CircleCheck } from 'lucide-react'
import SectionEyebrow from '../SectionEyebrow'
import HeroVisual from './hero/HeroVisual'
import HeroWorkflowStrip from './hero/HeroWorkflowStrip'

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <SectionEyebrow>Restaurant operations, connected</SectionEyebrow>
          <h1>More flow.<br /><span>Less juggling.</span></h1>
          <p className="hero-description">The tools behind a smoother restaurant day. Connect online orders, counter service, kitchen workflows, and delivery in one place.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#packages">Explore Packages <ArrowDownRight size={17} /></a>
            <a className="text-link" href="#how-it-works">See how it works <ArrowDownRight size={17} /></a>
          </div>
          <div className="hero-note"><span className="note-icon"><CircleCheck size={16} /></span><span>Built around the way restaurant teams work.</span></div>
        </div>
        <HeroVisual />
      </div>
      <HeroWorkflowStrip />
    </section>
  )
}
