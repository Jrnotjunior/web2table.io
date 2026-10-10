import { MoveUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Brand from '../Brand'
import { platformUrl } from '../../content/siteContent'

export default function SiteFooter() {
  return <footer className="site-footer"><div className="container footer-main"><div className="footer-brand"><Brand light /><p>Restaurant operations, connected.</p></div><div className="footer-links"><div><span>EXPLORE</span><a href="/#platform">Platform</a><a href="/#solutions">Solutions</a><a href="/#how-it-works">How it works</a></div><div><span>WEB2TABLE</span><a href="/#about">About</a><a href="/#contact">Contact</a><a href={platformUrl} target="_blank" rel="noopener noreferrer">Open platform <MoveUpRight size={13} /></a></div><div><span>LEGAL</span><Link to="/privacy">Privacy Policy</Link><Link to="/terms">Terms of Use</Link><Link to="/cookies">Cookie Policy</Link><Link to="/refunds">Refund Policy</Link><Link to="/consent">Form Consent</Link></div></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Web2Table. All rights reserved.</span><span>Thoughtfully built for restaurant teams.</span></div></footer>
}
