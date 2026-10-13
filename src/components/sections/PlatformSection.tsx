import SectionEyebrow from '../SectionEyebrow'
import { capabilities } from '../../content/capabilities'
import CapabilityCard from './platform/CapabilityCard'

export default function PlatformSection() {
  return <section className="section platform-section" id="platform">
    <div className="container">
      <div className="section-heading split-heading"><div><SectionEyebrow>The platform</SectionEyebrow><h2>One busy restaurant.<br /><span>One clearer picture.</span></h2></div><p>Restaurant service has a lot of moving parts. Web2Table brings key tasks into a connected workspace, so every role can focus on what comes next.</p></div>
      <div className="capability-grid">{capabilities.map(item => <CapabilityCard key={item.number} item={item} />)}</div>
    </div>
  </section>
}
