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
          <h1>One platform.<br /><span>Every workflow.</span></h1>
          <p className="hero-description">Connect online ordering, POS, kitchen operations, dispatch, delivery, and restaurant management in one complete platform.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#product-tour">Explore the platform <ArrowDownRight size={17} /></a>
            <a className="text-link" href="#how-it-works">See how it works <ArrowDownRight size={17} /></a>
          </div>
          <div className="hero-note"><span className="note-icon"><CircleCheck size={16} /></span><span>One complete system for your restaurant team.</span></div>
        </div>
        <HeroVisual />
      </div>
      <HeroWorkflowStrip />
    </section>
  )
}
