import { useState } from 'react'
import { Menu, MoveUpRight, X } from 'lucide-react'
import Brand from '../Brand'
import { navigationItems, platformUrl } from '../../content/siteContent'

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  return <header className="site-header">
    <div className="container header-inner">
      <Brand />
      <button className="mobile-menu" type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
      <nav id="primary-navigation" className={`main-nav ${open ? 'nav-open' : ''}`} aria-label="Main navigation">
        {navigationItems.map(item => <a key={item.label} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
        <a className="nav-cta" href={platformUrl} target="_blank" rel="noreferrer">Open platform <MoveUpRight size={15} /></a>
      </nav>
    </div>
  </header>
}
