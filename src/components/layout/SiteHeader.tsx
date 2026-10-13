import { useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Brand from '../Brand'
import { navigationItems } from '../../content/siteContent'

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const homePath = window.location.hostname === 'jrnotjunior.github.io' ? '/web2table.io/' : '/'
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  return <header className="site-header">
    <div className="container header-inner">
      <Brand />
      <button ref={menuButtonRef} className="mobile-menu" type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
      <nav id="primary-navigation" className={`main-nav ${open ? 'nav-open' : ''}`} aria-label="Main navigation" onKeyDown={event => { if (event.key === 'Escape' && open) { setOpen(false); menuButtonRef.current?.focus() } }}>
        {navigationItems.map(item => <a key={item.label} href={isHomePage ? item.href : `${homePath}${item.href}`} onClick={() => setOpen(false)}>{item.label}</a>)}
      </nav>
    </div>
  </header>
}
