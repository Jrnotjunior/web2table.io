import { CalendarDays, CookingPot, CreditCard, MoveUpRight, ShoppingBag, Store, Truck } from 'lucide-react'
import SectionEyebrow from '../SectionEyebrow'
import { platformUrl } from '../../content/siteContent'

const bookingEmail = 'web2table.solutions@gmail.com'
const bookingSubject = encodeURIComponent('Book a Web2Table Demo')
const bookingBody = encodeURIComponent('Hello Web2Table team,\n\nI would like to book a private demo for my restaurant.\n\nRestaurant name:\nPreferred date and time:\nNumber of locations:\nContact number:\n\nThank you.')

export default function ContactSection() {
  return <section className="contact-section" id="contact"><div className="container contact-panel"><div className="contact-decoration"><span /><span /><span /></div><div className="contact-content"><SectionEyebrow>Private product walkthrough</SectionEyebrow><h2>See Web2Table<br />in action.</h2><p>Book a private demo and we’ll walk you through the parts of Web2Table most relevant to your restaurant.</p><a className="button button-lime" href={`mailto:${bookingEmail}?subject=${bookingSubject}&body=${bookingBody}`}>Book a Demo <CalendarDays size={17} /></a><small>Already have access? <a href={platformUrl} target="_blank" rel="noreferrer">Open the platform <MoveUpRight size={12} /></a></small></div><div className="contact-visual"><div className="contact-orbit orbit-one" /><div className="contact-orbit orbit-two" /><div className="contact-center"><Store size={31} /><span>web2table</span></div><div className="orbit-node node-one"><ShoppingBag size={19} /></div><div className="orbit-node node-two"><CookingPot size={19} /></div><div className="orbit-node node-three"><Truck size={19} /></div><div className="orbit-node node-four"><CreditCard size={19} /></div></div></div></section>
}
