import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

type Choice = 'acknowledged' | 'essential-only'
const storageKey = 'web2table-cookie-choice-v1'

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    try { setVisible(!window.localStorage.getItem(storageKey)) } catch { setVisible(true) }
  }, [])
  const choose = (choice: Choice) => {
    try { window.localStorage.setItem(storageKey, choice) } catch { /* Storage may be disabled; do not block the site. */ }
    setVisible(false)
  }
  if (!visible) return null
  return <aside className="cookie-consent" aria-label="Cookie preferences"><div className="cookie-consent-copy"><strong>Your privacy choices</strong><p>No optional analytics or advertising tracking is intentionally enabled at present, but the deployed site still needs a technical audit. These buttons only save your banner preference; they do not enable or disable tracking technologies. “Essential only” records that preference, while “Acknowledge” dismisses the notice. Read our <Link to="/cookies">Cookie Policy</Link> and <Link to="/privacy">Privacy Policy</Link>.</p></div><div className="cookie-consent-actions"><button type="button" className="cookie-button cookie-button-secondary" onClick={() => choose('essential-only')}>Essential only</button><button type="button" className="cookie-button cookie-button-primary" onClick={() => choose('acknowledged')}>Acknowledge</button></div></aside>
}
