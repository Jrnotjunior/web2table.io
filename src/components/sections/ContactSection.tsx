import { useState, type FormEvent } from 'react'
import { CalendarDays, CookingPot, CreditCard, MoveUpRight, ShoppingBag, Store, Truck } from 'lucide-react'
import SectionEyebrow from '../SectionEyebrow'
import { platformUrl } from '../../content/siteContent'

const bookingEmail = 'web2table.solutions@gmail.com'
const packageOptions = [
  'Full System',
  'Self Ordering + POS',
  'POS',
  'Self Ordering + POS + Kitchen',
  'Dispatch + Delivery',
  'Self Ordering + Kitchen',
  'POS + Delivery',
  'Not sure yet',
]

export default function ContactSection() {
  const [emailNotice, setEmailNotice] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const fields = [
      ['Contact person', form.get('contactName')],
      ['Restaurant name', form.get('restaurantName')],
      ['Email', form.get('email')],
      ['Phone / messaging number', form.get('phone')],
      ['Restaurant type', form.get('restaurantType')],
      ['Number of locations', form.get('locations')],
      ['Package of interest', form.get('package')],
      ['Preferred demo date and time', form.get('demoTime') || 'Flexible'],
      ['Current POS / ordering setup', form.get('currentSetup') || 'Not provided'],
      ['Additional details', form.get('details') || 'None'],
    ]
    const body = 'Hello Web2Table team,\n\nI would like to arrange a private product walkthrough.\n\n' +
      fields.map(([label, value]) => label + ': ' + String(value || '').trim()).join('\n') +
      '\n\nI have reviewed the website privacy notice and agree to be contacted about this inquiry.'
    const subject = 'Private Web2Table demo inquiry - ' + String(form.get('restaurantName'))
    setEmailNotice(true)
    window.location.href = 'mailto:' + bookingEmail + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body)
  }

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
      <form className="inquiry-form" onSubmit={handleSubmit}>
        <h3>Request a private demo</h3>
        <p>Share a few details so we can prepare a relevant walkthrough. Fields marked * are required.</p>
        <div className="inquiry-fields">
          <label>Contact person *<input name="contactName" autoComplete="name" required maxLength={100} /></label>
          <label>Restaurant name *<input name="restaurantName" required maxLength={120} /></label>
          <label>Email address *<input name="email" type="email" autoComplete="email" required maxLength={254} /></label>
          <label>Phone / messaging number *<input name="phone" type="tel" autoComplete="tel" required maxLength={40} /></label>
          <label>Restaurant type *<select name="restaurantType" required defaultValue=""><option value="" disabled>Select type</option><option>Restaurant</option><option>Café / coffee shop</option><option>Fast food / quick service</option><option>Cloud kitchen</option><option>Food stall</option><option>Other</option></select></label>
          <label>Number of locations *<select name="locations" required defaultValue=""><option value="" disabled>Select number</option><option>1</option><option>2–5</option><option>6–10</option><option>11+</option></select></label>
          <label className="inquiry-wide">Package of interest *<select name="package" required defaultValue=""><option value="" disabled>Choose a package</option>{packageOptions.map(option => <option key={option}>{option}</option>)}</select></label>
          <label className="inquiry-wide">Preferred demo date and time<input name="demoTime" placeholder="e.g. weekday afternoon, or a preferred date" maxLength={120} /></label>
          <label className="inquiry-wide">Current POS or ordering setup<textarea name="currentSetup" rows={2} maxLength={500} placeholder="Optional" /></label>
          <label className="inquiry-wide">Anything else we should know?<textarea name="details" rows={3} maxLength={1000} placeholder="Optional" /></label>
        </div>
        <label className="inquiry-consent"><input type="checkbox" required /> <span>I agree that Web2Table may use these details to respond to my inquiry. See the <a href="./privacy" target="_blank" rel="noreferrer">Privacy Notice</a>.</span></label>
        <button className="button button-lime inquiry-submit" type="submit">Prepare Demo Request <CalendarDays size={17} /></button>
        {emailNotice && <p className="inquiry-notice" role="status">Your email app should open with the request prepared. Please send the email to complete your inquiry. If it doesn't open, email {bookingEmail} directly.</p>}
        <p className="inquiry-disclaimer">This form prepares an email in your own email app; it does not submit or store your details on this website.</p>
      </form>
    </div>
  </section>
}
