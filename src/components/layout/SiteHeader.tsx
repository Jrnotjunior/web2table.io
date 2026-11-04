import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { CalendarDays, GitBranch, Info, Layers, LayoutGrid, Menu, Store, X } from 'lucide-react'
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
  const navigationIcons = {
    Platform: Store,
    Features: LayoutGrid,
    Workflow: GitBranch,
    Solutions: Layers,
    About: Info,
    'Request a Demo': CalendarDays,
  }

  useEffect(() => {
    if (!isHomePage) return
    const sections = navigationItems
      .map(item => item.href.startsWith('#') ? document.getElementById(item.href.slice(1)) : null)
      .filter((section): section is HTMLElement => section !== null)
    if (!sections.length) return

    const updateActiveSection = () => {
      const headerHeight = document.querySelector('.site-header')?.getBoundingClientRect().height ?? 0
      const activationPosition = window.scrollY + headerHeight + 2
      const orderedSections = [...sections].sort((a, b) =>
        (a.getBoundingClientRect().top + window.scrollY) -
        (b.getBoundingClientRect().top + window.scrollY)
      )
      const active = orderedSections.reduce<HTMLElement | null>((current, section) => {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY
        return sectionTop <= activationPosition ? section : current
      }, null) ?? orderedSections[0]
      setActiveSection(current => current === active.id ? current : active.id)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)
    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [isHomePage, location.pathname])

  return <header className="site-header" onKeyDown={event => { if (event.key === 'Escape' && open) { setOpen(false); menuButtonRef.current?.focus() } }}>
    <div className="container header-inner">
      <Brand />
      <button ref={menuButtonRef} className="mobile-menu" type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
      <nav id="primary-navigation" className={`main-nav ${open ? 'nav-open' : ''}`} aria-label="Main navigation">
        {navigationItems.map(item => {
          const sectionId = item.href.startsWith('#') ? item.href.slice(1) : ''
          const isActive = isHomePage && activeSection === sectionId
          const Icon = navigationIcons[item.label as keyof typeof navigationIcons]
          return <a key={item.label} href={isHomePage ? item.href : `${homePath}${item.href}`} className={isActive ? 'is-active' : undefined} aria-current={isActive ? 'location' : undefined} onClick={() => { setOpen(false) }}><Icon size={14} strokeWidth={1.8} aria-hidden="true" /><span>{item.label}</span></a>
        })}
      </nav>
    </div>
  </header>
}
