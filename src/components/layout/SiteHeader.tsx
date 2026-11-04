import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Brand from '../Brand'
import { navigationItems } from '../../content/navigation'
import { getHomePath } from '../../utils/paths'

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('platform')
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const homePath = getHomePath()
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isHomePage) return
    const sections = navigationItems
      .map(item => item.href.startsWith('#') ? document.getElementById(item.href.slice(1)) : null)
      .filter((section): section is HTMLElement => section !== null)
    if (!sections.length) return

    const observer = new IntersectionObserver(entries => {
      const visible = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActiveSection(visible.target.id)
    }, { rootMargin: '-18% 0px -68% 0px', threshold: [0, 0.15, 0.35, 0.6] })

    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [isHomePage, location.pathname])

  return <header className="site-header" onKeyDown={event => { if (event.key === 'Escape' && open) { setOpen(false); menuButtonRef.current?.focus() } }}>
    <div className="container header-inner">
      <Brand />
      <button ref={menuButtonRef} className="mobile-menu" type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
      <nav id="primary-navigation" className={`main-nav ${open ? 'nav-open' : ''}`} aria-label="Main navigation">
        {navigationItems.map(item => {
          const sectionId = item.href.startsWith('#') ? item.href.slice(1) : ''
          const isActive = isHomePage && activeSection === sectionId
          return <a key={item.label} href={isHomePage ? item.href : `${homePath}${item.href}`} className={isActive ? 'is-active' : undefined} aria-current={isActive ? 'location' : undefined} onClick={() => { setOpen(false); if (isHomePage) setActiveSection(sectionId) }}>{item.label}</a>
        })}
      </nav>
    </div>
  </header>
}
