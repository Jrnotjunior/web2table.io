import { Link } from 'react-router-dom'

export default function SiteFooter() {
  return <footer className="site-footer"><div className="container footer-main"><div className="footer-links"><div><span>LEGAL</span><Link to="/privacy">Privacy Policy</Link><Link to="/terms">Terms of Use</Link><Link to="/cookies">Cookie Policy</Link><Link to="/refunds">Refund Policy</Link><Link to="/consent">Form Consent</Link></div></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Web2Table. All rights reserved.</span><span>Thoughtfully built for restaurant teams.</span></div></footer>
}
