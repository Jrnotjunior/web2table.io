import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

type Choice = 'accepted' | 'essential-only'
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
  return <aside className="cookie-consent" aria-label="Cookie preferences"><div className="cookie-consent-copy"><strong>Your privacy choices</strong><p>This site currently has no optional analytics or advertising tracking intentionally enabled. You can continue with essential storage only. Read our <Link to="/cookies">Cookie Policy</Link> and <Link to="/privacy">Privacy Policy</Link>.</p></div><div className="cookie-consent-actions"><button type="button" className="cookie-button cookie-button-secondary" onClick={() => choose('essential-only')}>Essential only</button><button type="button" className="cookie-button cookie-button-primary" onClick={() => choose('accepted')}>Acknowledge</button></div></aside>
}
