import { ArrowUpRight, Check } from 'lucide-react'
import type { solutionRoles } from '../../../content/solutions'

type SolutionRole = (typeof solutionRoles)[number]

export default function SolutionRoleCard({ item }: { item: SolutionRole }) {
  const Icon = item.icon
  return (
    <article className="solution-role-card">
      <div className="solution-role-top">
        <span className="solution-role-icon"><Icon size={21} strokeWidth={1.8} /></span>
        <span className="solution-role-number">{item.number}</span>
      </div>
      <span className="solution-role-label">{item.role}</span>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <ul>{item.points.map(point => <li key={point}><Check size={14} />{point}</li>)}</ul>
      <a href="#product-tour" aria-label={`Explore product preview for ${item.role.toLowerCase()}`}>Explore preview <ArrowUpRight size={15} /></a>
    </article>
  )
}
