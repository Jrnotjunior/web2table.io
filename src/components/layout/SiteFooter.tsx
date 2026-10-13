import { Link } from 'react-router-dom'

const socialIcons = [
  { label: 'Facebook', src: `${import.meta.env.BASE_URL}social-facebook.svg` },
  { label: 'Instagram', src: `${import.meta.env.BASE_URL}social-instagram.svg` },
  { label: 'TikTok', src: `${import.meta.env.BASE_URL}social-tiktok.svg` },
]

export default function SiteFooter() {
  return <footer className="site-footer"><div className="container footer-main"><div className="footer-links"><div><Link to="/privacy">Privacy Policy</Link><Link to="/terms">Terms of Use</Link><Link to="/refunds">Refund Policy</Link><Link to="/consent">Form Consent</Link></div></div></div><div className="footer-socials" aria-label="Social media"><div className="footer-social-icons">{socialIcons.map(icon => <span className="footer-social-icon" key={icon.label} aria-label={icon.label} title={icon.label}><img src={icon.src} alt={icon.label} /></span>)}</div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Web2Table. All rights reserved.</span><span>Restaurant operations, connected</span></div></footer>
}
