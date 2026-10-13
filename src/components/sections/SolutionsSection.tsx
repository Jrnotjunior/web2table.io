import { ArrowUpRight, Store } from 'lucide-react'
import SectionEyebrow from '../SectionEyebrow'
import { solutionRoles } from '../../content/solutions'
import SolutionRoleCard from './solutions/SolutionRoleCard'

export default function SolutionsSection() {
  return <section className="section solutions-section">
    <div className="container" id="solutions">
      <div className="section-heading centered-heading">
        <SectionEyebrow>Built around real roles</SectionEyebrow>
        <h2>Useful for every part<br /><span>of restaurant service.</span></h2>
        <p>Different responsibilities, one connected operation. Explore how Web2Table supports the people behind each order.</p>
      </div>
      <div className="solutions-role-grid">
        {solutionRoles.map(item => <SolutionRoleCard key={item.number} item={item} />)}
      </div>
      <div className="solutions-bottom-note"><span><Store size={17} /></span><p><strong>One restaurant. Connected workflows.</strong><br />The goal is to help each role do its part while orders move through the same operation.</p><a href="#how-it-works">See how it works <ArrowUpRight size={16} /></a></div>
    </div>
  </section>
}
