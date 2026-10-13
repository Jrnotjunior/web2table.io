import { CookingPot, CreditCard, MoveUpRight, ShoppingBag, Store, Truck } from 'lucide-react'
import SectionEyebrow from '../SectionEyebrow'
import { platformUrl } from '../../content/siteContent'
import DemoInquiryForm from './DemoInquiryForm'

export default function ContactSection() {
  return <section className="contact-section" id="contact">
    <div className="container contact-panel">
      <div className="contact-decoration"><span /><span /><span /></div>
      <div className="contact-content">
        <SectionEyebrow>Private product walkthrough</SectionEyebrow>
        <h2>See Web2Table<br />in action.</h2>
        <p>Tell us about your restaurant and we’ll arrange a private walkthrough focused on the tools you need.</p>
        <small>Already have access? <a href={platformUrl} target="_blank" rel="noreferrer">Client Login <MoveUpRight size={12} /></a></small>
        <div className="contact-visual"><div className="contact-orbit orbit-one" /><div className="contact-orbit orbit-two" /><div className="contact-center"><Store size={31} /><span>web2table</span></div><div className="orbit-node node-one"><ShoppingBag size={19} /></div><div className="orbit-node node-two"><CookingPot size={19} /></div><div className="orbit-node node-three"><Truck size={19} /></div><div className="orbit-node node-four"><CreditCard size={19} /></div></div>
      </div>
      <DemoInquiryForm />
    </div>
  </section>
}
