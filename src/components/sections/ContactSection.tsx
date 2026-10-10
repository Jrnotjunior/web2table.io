import { CookingPot, CreditCard, MoveUpRight, ShoppingBag, Store, Truck } from 'lucide-react'
import SectionEyebrow from '../SectionEyebrow'
import { platformUrl } from '../../content/siteContent'

export default function ContactSection() {
  return <section className="contact-section" id="contact"><div className="container contact-panel"><div className="contact-decoration"><span /><span /><span /></div><div className="contact-content"><SectionEyebrow>Take the next step</SectionEyebrow><h2>Ready to bring your<br />restaurant into sync?</h2><p>Explore the Web2Table platform and see how connected restaurant workflows can fit your operation.</p><a className="button button-lime" href={platformUrl} target="_blank" rel="noreferrer">Explore Web2Table <MoveUpRight size={17} /></a><small>Already have access? Open the platform to continue.</small></div><div className="contact-visual"><div className="contact-orbit orbit-one" /><div className="contact-orbit orbit-two" /><div className="contact-center"><Store size={31} /><span>web2table</span></div><div className="orbit-node node-one"><ShoppingBag size={19} /></div><div className="orbit-node node-two"><CookingPot size={19} /></div><div className="orbit-node node-three"><Truck size={19} /></div><div className="orbit-node node-four"><CreditCard size={19} /></div></div></div></section>
}
