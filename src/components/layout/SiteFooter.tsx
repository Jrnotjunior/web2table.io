import { Link } from 'react-router-dom'

const socialIcons = [
  { label: 'Facebook', src: './social-facebook.svg' },
  { label: 'Instagram', src: './social-instagram.svg' },
  { label: 'TikTok', src: './social-tiktok.svg' },
]

export default function SiteFooter() {
  return <footer className="site-footer"><div className="container footer-main"><div className="footer-links"><div><span>LEGAL</span><Link to="/privacy">Privacy Policy</Link><Link to="/terms">Terms of Use</Link><Link to="/cookies">Cookie Policy</Link><Link to="/refunds">Refund Policy</Link><Link to="/consent">Form Consent</Link></div></div></div><div className="footer-socials" aria-label="Social media"><div className="footer-social-icons">{socialIcons.map(icon => <span className="footer-social-icon" key={icon.label} aria-label={icon.label} title={icon.label}><img src={icon.src} alt={icon.label} /></span>)}</div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Web2Table. All rights reserved.</span><span>Thoughtfully built for restaurant teams.</span></div></footer>
}
