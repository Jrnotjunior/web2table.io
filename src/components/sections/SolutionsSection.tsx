import { ArrowUpRight, Check, Store } from 'lucide-react'
import SectionEyebrow from '../SectionEyebrow'
import { solutionRoles } from '../../content/solutions'

export default function SolutionsSection() {
  return <section className="section solutions-section">
    <div className="container" id="solutions">
      <div className="section-heading centered-heading">
        <SectionEyebrow>Built around real roles</SectionEyebrow>
        <h2>Useful for every part<br /><span>of restaurant service.</span></h2>
        <p>Different responsibilities, one connected operation. Explore how Web2Table supports the people behind each order.</p>
      </div>
      <div className="solutions-role-grid">
        {solutionRoles.map(({ number, role, title, description, points, icon: Icon }) => <article className="solution-role-card" key={number}>
          <div className="solution-role-top"><span className="solution-role-icon"><Icon size={21} strokeWidth={1.8} /></span><span className="solution-role-number">{number}</span></div>
          <span className="solution-role-label">{role}</span>
          <h3>{title}</h3>
          <p>{description}</p>
          <ul>{points.map(point => <li key={point}><Check size={14} />{point}</li>)}</ul>
          <a href="#product-tour" aria-label={`Explore product preview for ${role.toLowerCase()}`}>Explore preview <ArrowUpRight size={15} /></a>
        </article>)}
      </div>
      <div className="solutions-bottom-note"><span><Store size={17} /></span><p><strong>One restaurant. Connected workflows.</strong><br />The goal is to help each role do its part while orders move through the same operation.</p><a href="#how-it-works">See how it works <ArrowUpRight size={16} /></a></div>
    </div>
  </section>
}
