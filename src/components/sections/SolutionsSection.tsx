import { ArrowUpRight, Bike, Check, CookingPot, CreditCard, Gift, ShoppingBag, Store, Truck, Users } from 'lucide-react'
import SectionEyebrow from '../SectionEyebrow'

const solutions = [
  { number: '01', role: 'RESTAURANT OWNERS', title: 'Stay on top of the whole operation.', description: 'Keep key management tasks together, from product updates and employee access to sales visibility.', points: ['Sales overview', 'Products & employees', 'Role-based access'], icon: Store },
  { number: '02', role: 'CASHIERS', title: 'Keep the counter moving.', description: 'Handle in-store orders and payments with a point-of-sale workflow designed for busy service.', points: ['Create orders', 'Record payments', 'Print receipts'], icon: CreditCard },
  { number: '03', role: 'KITCHEN TEAMS', title: 'See what needs to be prepared.', description: 'Focus on incoming orders, item quantities, and clear preparation status without counter-side clutter.', points: ['Order queue', 'Items & quantities', 'Ready status'], icon: CookingPot },
  { number: '04', role: 'DISPATCHERS', title: 'Make every handoff clearer.', description: 'Coordinate pickup orders and delivery assignments as orders move out of the kitchen.', points: ['Pickup coordination', 'Delivery assignments', 'Order progress'], icon: Truck },
  { number: '05', role: 'RIDERS', title: 'Know which delivery comes next.', description: 'Keep assigned delivery tasks and progress updates in a focused rider workflow.', points: ['Assigned deliveries', 'Delivery details', 'Status updates'], icon: Bike },
  { number: '06', role: 'CUSTOMERS', title: 'Order with fewer steps.', description: 'Browse the restaurant menu online and follow a simpler path from choosing items to placing an order.', points: ['Online menu', 'Cart & checkout', 'Order updates'], icon: ShoppingBag },
  { number: '07', role: 'LOYALTY CUSTOMERS', title: 'Make return visits count.', description: 'Where loyalty is enabled, eligible customers can collect points and use available rewards.', points: ['Earn points', 'View eligible rewards', 'Redeem before payment'], icon: Gift },
  { number: '08', role: 'RESTAURANT TEAMS', title: 'Give each person the right view.', description: 'Role-based access helps staff concentrate on the tasks relevant to their part of service.', points: ['Role-focused screens', 'Clear responsibilities', 'Connected order flow'], icon: Users },
]

export default function SolutionsSection() {
  return <section className="section solutions-section" id="solutions">
    <div className="container">
      <div className="section-heading centered-heading">
        <SectionEyebrow>Built around real roles</SectionEyebrow>
        <h2>Useful for every part<br /><span>of restaurant service.</span></h2>
        <p>Different responsibilities, one connected operation. Explore how Web2Table supports the people behind each order.</p>
      </div>
      <div className="solutions-role-grid">
        {solutions.map(({ number, role, title, description, points, icon: Icon }) => <article className="solution-role-card" key={number}>
          <div className="solution-role-top"><span className="solution-role-icon"><Icon size={21} strokeWidth={1.8} /></span><span className="solution-role-number">{number}</span></div>
          <span className="solution-role-label">{role}</span>
          <h3>{title}</h3>
          <p>{description}</p>
          <ul>{points.map(point => <li key={point}><Check size={14} />{point}</li>)}</ul>
          <a href="#product-tour" aria-label={`Explore product preview for ${role.toLowerCase()}`}>Explore preview <ArrowUpRight size={15} /></a>
        </article>)}
      </div>
      <div className="solutions-bottom-note"><span><Store size={17} /></span><p><strong>One restaurant. Connected workflows.</strong><br />The goal is to help each role do its part while orders move through the same operation.</p><a href="#how-it-works">See how it works <ArrowUpRight size={16} /></a></div>
    </div>
  </section>
}
