import { useState, type FormEvent } from 'react'
import { CalendarDays } from 'lucide-react'
import { siteConfig } from '../../config/site'
import { websitePackages } from '../../content/packages'
import { openDemoInquiryInGmail } from '../../services/demoInquiry'

const packageOptions = [...websitePackages.map(pkg => pkg.name), 'Not sure yet']

export default function DemoInquiryForm() {
  const [emailNotice, setEmailNotice] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    openDemoInquiryInGmail({
      contactName: form.get('contactName'),
      restaurantName: form.get('restaurantName'),
      email: form.get('email'),
      phone: form.get('phone'),
      restaurantType: form.get('restaurantType'),
      locations: form.get('locations'),
      packageName: form.get('package'),
      demoTime: form.get('demoTime'),
      currentSetup: form.get('currentSetup'),
      details: form.get('details'),
    })
    setEmailNotice(true)
  }

  return <form className="inquiry-form" onSubmit={handleSubmit}>
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
    <button className="button button-lime inquiry-submit" type="submit">Prepare Demo Request Email <CalendarDays size={17} /></button>
    {emailNotice && <p className="inquiry-notice" role="status">Your email app should open with your demo request prepared. Review and send it to complete your inquiry. If no email app opens, email {siteConfig.contactEmail} directly.</p>}
    <p className="inquiry-disclaimer">This form prepares an email for you to review and send; it does not submit or store your details on this website.</p>
  </form>
}
