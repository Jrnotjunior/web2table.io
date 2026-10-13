import { CreditCard, CookingPot, MonitorSmartphone, ShoppingBag, Truck } from 'lucide-react'

export default function AboutIllustration() {
  return (
    <div className="about-art">
      <div className="about-illustration" role="img" aria-label="Web2Table workflow illustration connecting ordering, point of sale, kitchen preparation, and delivery">
        <div className="about-illustration-ring ring-one" />
        <div className="about-illustration-ring ring-two" />
        <span className="about-node node-top"><ShoppingBag size={22} /></span>
        <span className="about-node node-left"><CreditCard size={22} /></span>
        <span className="about-node node-right"><CookingPot size={22} /></span>
        <span className="about-node node-bottom"><Truck size={22} /></span>
        <span className="about-illustration-center"><MonitorSmartphone size={34} /><strong>web2table</strong></span>
      </div>
      <div className="about-note">
        <span className="about-note-icon"><MonitorSmartphone size={19} /></span>
        <span><strong>Technology that fits service</strong><small>Made for the real pace of restaurants.</small></span>
      </div>
    </div>
  )
}
