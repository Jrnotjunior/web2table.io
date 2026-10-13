import { Check, Clock3, CookingPot, CreditCard, ShoppingBag, Sparkles, Store, Truck } from 'lucide-react'

export default function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="Illustration of connected restaurant operations">
      <div className="visual-image" aria-hidden="true">
        <div className="workflow-orbit workflow-orbit-one" />
        <div className="workflow-orbit workflow-orbit-two" />
        <div className="workflow-core"><Store size={34} /></div>
        <span className="workflow-node workflow-node-top"><ShoppingBag size={19} /></span>
        <span className="workflow-node workflow-node-left"><CreditCard size={19} /></span>
        <span className="workflow-node workflow-node-right"><CookingPot size={19} /></span>
        <span className="workflow-node workflow-node-bottom"><Truck size={19} /></span>
      </div>
      <div className="floating-card order-card">
        <div className="mini-card-top"><span className="status-dot" />Order workflow <span className="mini-live">CONNECTED</span></div>
        <div className="order-row"><span className="order-icon"><ShoppingBag size={17} /></span><span><strong>New order</strong><small>Sent to the team</small></span><Check className="check-icon" size={17} /></div>
        <div className="order-divider" />
        <div className="order-row"><span className="order-icon order-icon-orange"><CookingPot size={17} /></span><span><strong>Kitchen prep</strong><small>Ready for handoff</small></span><Clock3 className="muted-icon" size={16} /></div>
      </div>
      <div className="floating-card team-card">
        <div className="team-avatars"><span>O</span><span>C</span><span>K</span></div>
        <div><strong>One connected team</strong><small>Owner · Cashier · Kitchen</small></div>
        <span className="team-check"><Check size={14} /></span>
      </div>
      <div className="visual-stamp"><Sparkles size={16} /><span>Made for<br />restaurant life</span></div>
    </div>
  )
}
