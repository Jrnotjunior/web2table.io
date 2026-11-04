import { ArrowDown, ArrowRight, Check } from 'lucide-react'
import SectionEyebrow from '../SectionEyebrow'
import { workflowSteps as steps } from '../../content/workflow'

export default function WorkflowSection() {
  return <section className="section workflow-section" id="how-it-works">
    <div className="container">
      <div className="workflow-heading">
        <div className="workflow-intro">
          <SectionEyebrow>How the work moves</SectionEyebrow>
          <h2>From first click<br /><span>to finished order.</span></h2>
        </div>
        <p>See how Web2Table connects the customer, restaurant team, kitchen, dispatch, and owner in one coordinated restaurant journey.</p>
      </div>

      <div className="workflow-overview" aria-label="Order journey">
        <span>Customer order</span><ArrowRight size={15} /><span>Restaurant team</span><ArrowRight size={15} /><span>Kitchen</span><ArrowRight size={15} /><span>Fulfillment</span><ArrowRight size={15} /><span>Completion</span>
      </div>

      <div className="workflow-journey">
        {steps.map((step, index) => {
          const Icon = step.icon
          return <article className="workflow-stage" key={step.number}>
            <div className="workflow-stage-marker">
              <span>{step.number}</span>
              <div className="workflow-stage-icon"><Icon size={21} strokeWidth={1.8} /></div>
            </div>
            <div className="workflow-stage-content">
              <div className="workflow-stage-topline">
                <span>STAGE {step.number}</span>
                <span className="workflow-handoff">{step.handoff}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <div className="workflow-stage-detail">{step.detail}</div>
              <ul className="workflow-points">
                {step.points.map(point => <li key={point}><Check size={13} />{point}</li>)}
              </ul>
            </div>
            {index < steps.length - 1 && <ArrowDown className="workflow-stage-connector" size={17} aria-hidden="true" />}
          </article>
        })}
      </div>

      <div className="workflow-completion">
        <span className="workflow-completion-icon"><Check size={17} /></span>
        <div><strong>One connected restaurant operation.</strong><p>Every handoff has a place in the journey—from the customer's first order to the team's final update.</p></div>
      </div>
    </div>
  </section>
}
