import { ArrowRight } from 'lucide-react'
import SectionEyebrow from '../SectionEyebrow'
import { capabilities } from '../../content/capabilities'
export default function PlatformSection() {
  return <section className="section platform-section" id="platform">
    <div className="container">
      <div className="section-heading split-heading"><div><SectionEyebrow>The platform</SectionEyebrow><h2>One busy restaurant.<br /><span>One clearer picture.</span></h2></div><p>Restaurant service has a lot of moving parts. Web2Table brings key tasks into a connected workspace, so every role can focus on what comes next.</p></div>
      <div className="capability-grid">{capabilities.map(item => {
        const Icon = item.icon
        return <article className="capability-card" key={item.number}><div className="capability-top"><span className="capability-icon"><Icon size={21} strokeWidth={1.8} /></span><span className="capability-number">{item.number}</span></div><h3>{item.title}</h3><p>{item.description}</p><a href="#how-it-works" aria-label={`Learn how ${item.title} fits into the workflow`}><ArrowRight size={18} /></a></article>
      })}</div>
    </div>
  </section>
}
