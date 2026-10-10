import { Check } from 'lucide-react'
import SectionEyebrow from '../SectionEyebrow'
export default function SolutionsSection() {
  return <section className="section solutions-section" id="solutions">
    <div className="container"><div className="section-heading centered-heading"><SectionEyebrow>For the whole team</SectionEyebrow><h2>The right view for<br /><span>the role at hand.</span></h2><p>Give each person a clearer way to do their part, while the restaurant works as one team.</p></div>
      <div className="solutions-grid">
        <article className="solution-card owner-card"><div className="solution-image owner-image"><img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85" alt="Restaurant owner and team planning together" loading="lazy" /><span className="image-label">01 / OWNERS</span></div><div className="solution-body"><h3>See the bigger picture.</h3><p>Manage products, employees, and sales with a more connected view of restaurant operations.</p><ul><li><Check size={15} /> Sales visibility</li><li><Check size={15} /> Product management</li><li><Check size={15} /> Team access</li></ul></div></article>
        <article className="solution-card team-card-large"><div className="solution-image team-image"><img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=85" alt="Restaurant team preparing food in a kitchen" loading="lazy" /><span className="image-label">02 / RESTAURANT TEAMS</span></div><div className="solution-body"><h3>Keep service moving.</h3><p>Help cashiers, kitchen staff, and dispatch coordinate their work as orders move through the restaurant.</p><ul><li><Check size={15} /> Clear order status</li><li><Check size={15} /> Kitchen preparation</li><li><Check size={15} /> Pickup and dispatch</li></ul></div></article>
      </div>
    </div>
  </section>
}
