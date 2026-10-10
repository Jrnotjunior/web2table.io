import { ArrowDownRight, ArrowRight, Check, CircleCheck, Clock3, CookingPot, ShoppingBag, Sparkles } from 'lucide-react'
import SectionEyebrow from '../SectionEyebrow'
export default function HeroSection() {
  return <section className="hero" id="home">
    <div className="hero-glow" />
    <div className="container hero-grid">
      <div className="hero-copy">
        <SectionEyebrow>Restaurant operations, connected</SectionEyebrow>
        <h1>More flow.<br /><span>Less juggling.</span></h1>
        <p className="hero-description">The tools behind a smoother restaurant day. Connect online orders, counter service, kitchen workflows, and delivery in one place.</p>
        <div className="hero-actions">
          <a className="button button-dark" href="#platform">Explore the platform <ArrowRight size={17} /></a>
          <a className="text-link" href="#how-it-works">See how it works <ArrowDownRight size={17} /></a>
        </div>
        <div className="hero-note"><span className="note-icon"><CircleCheck size={16} /></span><span>Built around the way restaurant teams work.</span></div>
      </div>
      <div className="hero-visual" aria-label="Illustration of connected restaurant operations">
        <div className="visual-image"><img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85" alt="Restaurant staff using a point-of-sale terminal" /></div>
        <div className="floating-card order-card">
          <div className="mini-card-top"><span className="status-dot" />Order workflow <span className="mini-live">CONNECTED</span></div>
          <div className="order-row"><span className="order-icon"><ShoppingBag size={17} /></span><span><strong>New order</strong><small>Sent to the team</small></span><Check className="check-icon" size={17} /></div>
          <div className="order-divider" />
          <div className="order-row"><span className="order-icon order-icon-orange"><CookingPot size={17} /></span><span><strong>Kitchen prep</strong><small>Ready for handoff</small></span><Clock3 className="muted-icon" size={16} /></div>
        </div>
        <div className="floating-card team-card"><div className="team-avatars"><span>O</span><span>C</span><span>K</span></div><div><strong>One connected team</strong><small>Owner · Cashier · Kitchen</small></div><span className="team-check"><Check size={14} /></span></div>
        <div className="visual-stamp"><Sparkles size={16} /><span>Made for<br />restaurant life</span></div>
      </div>
    </div>
    <div className="container hero-bottom"><span>ONE CONNECTED WORKFLOW</span><div className="workflow-line"><i /><b>Order</b><i /><b>Prepare</b><i /><b>Handoff</b><i /></div><span>FROM FIRST CLICK TO PICKUP</span></div>
  </section>
}
