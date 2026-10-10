import { useState } from 'react'
import { BarChart3, Check, ChefHat, CircleDollarSign, ClipboardList, CreditCard, Package, Search, ShoppingBag, Store, Truck, Users } from 'lucide-react'
import SectionEyebrow from '../SectionEyebrow'

const views = [
  { id: 'owner', label: 'Owner dashboard', eyebrow: 'RESTAURANT MANAGEMENT', title: 'See the bigger picture.', description: 'A management workspace for sales, products, and employees.', icon: Store },
  { id: 'pos', label: 'Cashier POS', eyebrow: 'POINT OF SALE', title: 'Keep counter orders moving.', description: 'A focused order screen for cashier workflows and payment handling.', icon: CreditCard },
  { id: 'kitchen', label: 'Kitchen workflow', eyebrow: 'KITCHEN OPERATIONS', title: 'Make the next step clear.', description: 'A kitchen view centered on incoming orders, products, and quantities.', icon: ChefHat },
] as const

type ViewId = typeof views[number]['id']

function OwnerPreview() {
  return <div className="showcase-screen owner-preview">
    <aside className="preview-sidebar"><div className="preview-app-mark"><Store size={15} /><span>Web2Table</span></div><span className="preview-side-label">WORKSPACE</span><div className="preview-side-item is-active"><BarChart3 size={14} /> Overview</div><div className="preview-side-item"><ClipboardList size={14} /> Sales</div><div className="preview-side-item"><Package size={14} /> Products</div><div className="preview-side-item"><Users size={14} /> Employees</div><div className="preview-side-foot">RESTAURANT OWNER</div></aside>
    <div className="preview-main"><div className="preview-topbar"><span>Restaurant Operation</span><span className="preview-status"><i /> Workspace</span></div><div className="preview-greeting"><div><small>OVERVIEW</small><h4>Business at a glance</h4></div><span className="preview-date">Sales overview</span></div><div className="preview-metrics"><div><span>Total sales</span><strong>₱ 24,850.00</strong><small>Sample display</small></div><div><span>Orders</span><strong>128</strong><small>Sample display</small></div><div><span>Products</span><strong>36</strong><small>Catalog overview</small></div></div><div className="preview-data-card"><div className="preview-card-heading"><strong>Recent activity</strong><span>Illustrative preview</span></div><div className="preview-table-head"><span>ORDER</span><span>STATUS</span><span>TOTAL</span></div><div className="preview-table-row"><span>#1028 <small>Counter order</small></span><b className="preview-pill">Completed</b><strong>₱ 680.00</strong></div><div className="preview-table-row"><span>#1027 <small>Online order</small></span><b className="preview-pill">Preparing</b><strong>₱ 425.00</strong></div><div className="preview-table-row"><span>#1026 <small>Pickup</small></span><b className="preview-pill">Ready</b><strong>₱ 310.00</strong></div></div></div>
  </div>
}

function PosPreview() {
  return <div className="showcase-screen pos-preview"><div className="preview-pos-top"><div><span className="preview-kicker">COUNTER</span><h4>New order</h4></div><span className="preview-order-badge">ORDER #1029</span></div><div className="preview-search"><Search size={14} /><span>Search menu items</span></div><div className="preview-pos-layout"><div className="preview-menu-grid"><div className="preview-menu-item"><span className="preview-food-icon">B</span><b>Classic Burger</b><small>₱ 180.00</small><i>+</i></div><div className="preview-menu-item"><span className="preview-food-icon">P</span><b>Creamy Pasta</b><small>₱ 220.00</small><i>+</i></div><div className="preview-menu-item"><span className="preview-food-icon">F</span><b>Fries</b><small>₱ 95.00</small><i>+</i></div><div className="preview-menu-item"><span className="preview-food-icon">D</span><b>Iced Tea</b><small>₱ 65.00</small><i>+</i></div></div><div className="preview-cart"><strong>Current order</strong><div><span>Classic Burger <small>× 2</small></span><b>₱ 360.00</b></div><div><span>Fries <small>× 1</small></span><b>₱ 95.00</b></div><div className="preview-cart-total"><span>Total</span><strong>₱ 455.00</strong></div><span className="preview-pay"><CircleDollarSign size={14} /> Proceed to payment</span></div></div></div>
}

function KitchenPreview() {
  return <div className="showcase-screen kitchen-preview"><div className="preview-kitchen-top"><div><span className="preview-kicker">KITCHEN DISPLAY</span><h4>Orders in progress</h4></div><span className="preview-live"><i /> LIVE WORKFLOW</span></div><div className="preview-kitchen-columns"><div className="preview-kitchen-card"><div className="preview-kitchen-card-head"><strong>Order #1028</strong><span>12:42</span></div><div className="preview-kitchen-product"><span>Classic Burger</span><b>× 2</b></div><div className="preview-kitchen-product"><span>Fries</span><b>× 1</b></div><span className="preview-kitchen-state">Preparing</span></div><div className="preview-kitchen-card"><div className="preview-kitchen-card-head"><strong>Order #1027</strong><span>12:44</span></div><div className="preview-kitchen-product"><span>Creamy Pasta</span><b>× 1</b></div><div className="preview-kitchen-product"><span>Iced Tea</span><b>× 2</b></div><span className="preview-kitchen-state is-ready"><Check size={12} /> Ready for handoff</span></div></div><div className="preview-kitchen-note"><Truck size={14} /> Keep order items and quantities easy to scan.</div></div>
}

export default function ProductShowcaseSection() {
  const [activeView, setActiveView] = useState<ViewId>('owner')
  const current = views.find(view => view.id === activeView) ?? views[0]
  return <section className="section product-showcase-section" id="product-tour">
    <div className="container">
      <div className="section-heading split-heading showcase-heading"><div><SectionEyebrow>Inside Web2Table</SectionEyebrow><h2>Meet the platform.<br /><span>See the workflow.</span></h2></div><p>Explore a preview of the tools behind restaurant operations. These interface previews are built for this website from Web2Table's actual feature areas—not stock photos or images taken from another product.</p></div>
      <div className="showcase-tabs" role="tablist" aria-label="Product interface previews">{views.map(view => { const Icon = view.icon; return <button key={view.id} type="button" role="tab" aria-selected={activeView === view.id} className={activeView === view.id ? 'showcase-tab is-active' : 'showcase-tab'} onClick={() => setActiveView(view.id)}><Icon size={16} />{view.label}</button> })}</div>
      <div className="showcase-feature">
        <div className="showcase-copy"><span className="showcase-eyebrow"><i />{current.eyebrow}</span><h3>{current.title}</h3><p>{current.description}</p><a className="showcase-text-link" href="https://jrnotjunior.github.io/restaurant-ordering-platform/" target="_blank" rel="noreferrer">Explore the platform <span>↗</span></a></div>
        <div className="showcase-preview" role="tabpanel" aria-label={current.label + ' preview'}>{activeView === 'owner' ? <OwnerPreview /> : activeView === 'pos' ? <PosPreview /> : <KitchenPreview />}</div>
      </div>
      <p className="showcase-disclaimer">Interface previews for illustration. Values and orders shown are sample data, not live restaurant records.</p>
    </div>
  </section>
}
