import { ArrowRight } from 'lucide-react'
import type { capabilities } from '../../../content/capabilities'

type Capability = (typeof capabilities)[number]

export default function CapabilityCard({ item }: { item: Capability }) {
  const Icon = item.icon
  return (
    <article className="capability-card">
      <div className="capability-top">
        <span className="capability-icon"><Icon size={21} strokeWidth={1.8} /></span>
        <span className="capability-number">{item.number}</span>
      </div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <a href="#how-it-works" aria-label={`Learn how ${item.title} fits into the workflow`}>
        <ArrowRight size={18} />
      </a>
    </article>
  )
}
