import { ArrowRight, Check, MoveUpRight } from 'lucide-react'
import SectionEyebrow from '../SectionEyebrow'
import { workflowSteps as steps, platformUrl } from '../../content/siteContent'
export default function WorkflowSection() {
  return <section className="section workflow-section">
    <div className="container workflow-layout" id="how-it-works">
      <div className="workflow-copy"><SectionEyebrow>A smoother handoff</SectionEyebrow><h2>Every role knows<br />what happens <span>next.</span></h2><p>Less guessing between the counter, kitchen, and dispatch. A shared order flow helps your team stay in step as the day gets busy.</p><a className="button button-light" href={platformUrl} target="_blank" rel="noreferrer">Explore the platform <MoveUpRight size={16} /></a><div className="workflow-footnote"><Check size={15} /> Designed around role-based workflows</div></div>
      <div className="steps-list">{steps.map((step, index) => {
        const Icon = step.icon
        return <article className="step-row" key={step.title}><div className="step-index">{String(index + 1).padStart(2, '0')}</div><div className="step-icon"><Icon size={21} /></div><div className="step-copy"><h3>{step.title}</h3><p>{step.text}</p></div><ArrowRight className="step-arrow" size={18} /></article>
      })}<div className="steps-bottom"><span className="steps-bottom-mark"><Check size={14} /></span>One connected flow, from order to handoff.</div></div>
    </div>
  </section>
}
