import { useState, type FormEvent } from 'react'
import { CalendarDays } from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteConfig } from '../../config/site'
import { openDemoInquiryInGmail } from '../../services/demoInquiry'
import InquiryFields from './demo-inquiry/InquiryFields'


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
    <InquiryFields />
    <label className="inquiry-consent"><input type="checkbox" required /> <span>I understand this form prepares an email for me to review and send myself; this website does not submit or store my details. See the <Link to="/privacy" target="_blank" rel="noreferrer">Privacy Notice</Link>.</span></label>
    <button className="button button-lime inquiry-submit" type="submit">Prepare Demo Request Email <CalendarDays size={17} /></button>
    {emailNotice && <p className="inquiry-notice" role="status">Your email app should open with your demo request prepared. Review and send it to complete your inquiry. If no email app opens, email {siteConfig.contactEmail} directly.</p>}
    <p className="inquiry-disclaimer">This form prepares an email for you to review and send; it does not submit or store your details on this website.</p>
  </form>
}
