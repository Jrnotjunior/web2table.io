import { useState } from 'react'
import { BarChart3, Check, ChefHat, CircleDollarSign, ClipboardList, CreditCard, ShoppingBag, Package, Search, Store, Truck, Users, UserRound, MapPin, Bike } from 'lucide-react'
import SectionEyebrow from '../SectionEyebrow'
import { productShowcaseViews, type ProductShowcaseViewId } from '../../content/productShowcase'
import { platformUrl } from '../../content/siteContent'

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


function CustomerPreview() {
  return <div className="showcase-screen customer-preview"><div className="preview-customer-header"><div><Store size={15} /><strong>Restaurant Menu</strong></div><span>Browse · Order · Enjoy</span></div><div className="preview-customer-welcome"><span className="preview-kicker">FRESH FROM OUR KITCHEN</span><h4>What sounds good today?</h4><p>Choose your favorites and add them to your order.</p></div><div className="preview-customer-categories"><span className="is-active">Popular</span><span>Mains</span><span>Sides</span><span>Drinks</span></div><div className="preview-customer-menu"><div className="preview-customer-item"><span className="preview-food-icon">B</span><div><b>Classic Burger</b><small>House favorite</small></div><strong>₱ 180.00</strong><button type="button" aria-label="Add Classic Burger">+</button></div><div className="preview-customer-item"><span className="preview-food-icon">P</span><div><b>Creamy Pasta</b><small>Rich and comforting</small></div><strong>₱ 220.00</strong><button type="button" aria-label="Add Creamy Pasta">+</button></div><div className="preview-customer-item"><span className="preview-food-icon">F</span><div><b>Golden Fries</b><small>Made to share</small></div><strong>₱ 95.00</strong><button type="button" aria-label="Add Golden Fries">+</button></div></div><div className="preview-customer-footer"><span><ShoppingBag size={14} /> Your order <b>2 items</b></span><strong>View cart&nbsp; ↗</strong></div></div>
}

function DispatcherPreview() {
  return <div className="showcase-screen dispatcher-preview"><div className="preview-dispatch-top"><div><span className="preview-kicker">DISPATCH DESK</span><h4>Order handoffs</h4></div><span className="preview-order-badge">TODAY</span></div><div className="preview-dispatch-tabs"><span className="is-active">Delivery</span><span>Pickup</span><span>Dine-in</span></div><div className="preview-dispatch-stats"><div><small>Needs dispatch</small><strong>04</strong></div><div><small>Pickup orders</small><strong>03</strong></div><div><small>Out for delivery</small><strong>02</strong></div></div><div className="preview-dispatch-list"><div className="preview-dispatch-row"><span className="preview-dispatch-icon"><Store size={15} /></span><div><b>Order #1031</b><small>Customer pickup · Ready</small></div><span className="preview-dispatch-tag">Pickup</span></div><div className="preview-dispatch-row"><span className="preview-dispatch-icon"><Truck size={15} /></span><div><b>Order #1030</b><small>Delivery · Assign rider</small></div><span className="preview-dispatch-tag is-alert">Assign</span></div><div className="preview-dispatch-row"><span className="preview-dispatch-icon"><Truck size={15} /></span><div><b>Order #1029</b><small>Delivery · In transit</small></div><span className="preview-dispatch-tag">Active</span></div></div><div className="preview-dispatch-note"><MapPin size={14} /> Dispatch and pickup coordination</div></div>
}

function RiderPreview() {
  return <div className="showcase-screen rider-preview"><div className="preview-rider-top"><div><span className="preview-kicker">RIDER WORKSPACE</span><h4>My deliveries</h4></div><span className="preview-live"><i /> ON SHIFT</span></div><div className="preview-rider-tabs"><span className="is-active">Active deliveries</span><span>Delivery history</span></div><div className="preview-rider-summary"><span>Assigned to you</span><strong>2 deliveries</strong><small>Illustrative sample</small></div><div className="preview-rider-card"><div className="preview-rider-card-head"><span><Truck size={15} /> <b>Order #1030</b></span><span className="preview-rider-status">Ready for pickup</span></div><div className="preview-rider-address"><MapPin size={15} /><div><small>DELIVER TO</small><strong>Customer address</strong><span>Contact customer and follow delivery steps</span></div></div><div className="preview-rider-actions"><span>Delivery task</span><b>Update delivery&nbsp; ↗</b></div></div><div className="preview-rider-card is-secondary"><div className="preview-rider-card-head"><span><Check size={15} /> <b>Order #1026</b></span><span className="preview-rider-status is-done">Delivered</span></div><div className="preview-rider-address"><MapPin size={15} /><div><small>DELIVERY STATUS</small><strong>Completed</strong><span>Update delivery progress clearly</span></div></div></div></div>
}

export default function ProductShowcaseSection() {
  const [activeView, setActiveView] = useState<ProductShowcaseViewId>('owner')
  const current = productShowcaseViews.find(view => view.id === activeView) ?? productShowcaseViews[0]
  return <section className="section product-showcase-section" id="product-tour">
    <div className="container">
      <div className="section-heading split-heading showcase-heading"><div><SectionEyebrow>Inside Web2Table</SectionEyebrow><h2>Meet the platform.<br /><span>See the workflow.</span></h2></div><p>Explore a preview of the tools behind restaurant operations. These interface previews are built for this website from Web2Table's actual feature areas—not stock photos or images taken from another product.</p></div>
      <div className="showcase-tabs" role="tablist" aria-label="Product interface previews" onKeyDown={event => {
        const currentIndex = productShowcaseViews.findIndex(view => view.id === activeView)
        let nextIndex = currentIndex
        if (event.key === 'ArrowRight') nextIndex = (currentIndex + 1) % productShowcaseViews.length
        else if (event.key === 'ArrowLeft') nextIndex = (currentIndex - 1 + productShowcaseViews.length) % productShowcaseViews.length
        else if (event.key === 'Home') nextIndex = 0
        else if (event.key === 'End') nextIndex = productShowcaseViews.length - 1
        else return
        event.preventDefault()
        const nextView = productShowcaseViews[nextIndex]
        setActiveView(nextView.id)
        document.getElementById('showcase-tab-' + nextView.id)?.focus()
      }}>{productShowcaseViews.map(view => { const Icon = view.icon; return <button key={view.id} id={'showcase-tab-' + view.id} type="button" role="tab" aria-controls="showcase-panel" tabIndex={activeView === view.id ? 0 : -1} aria-selected={activeView === view.id} className={activeView === view.id ? 'showcase-tab is-active' : 'showcase-tab'} onClick={() => setActiveView(view.id)}><Icon size={16} />{view.label}</button> })}</div>
      <div className="showcase-feature">
        <div className="showcase-copy"><span className="showcase-eyebrow"><i />{current.eyebrow}</span><h3>{current.title}</h3><p>{current.description}</p><a className="showcase-text-link" href={platformUrl} target="_blank" rel="noreferrer">Explore the platform <span>↗</span></a></div>
        <div id="showcase-panel" className="showcase-preview" role="tabpanel" aria-labelledby={'showcase-tab-' + activeView} tabIndex={0}>{activeView === 'owner' ? <OwnerPreview /> : activeView === 'pos' ? <PosPreview /> : activeView === 'kitchen' ? <KitchenPreview /> : activeView === 'customer' ? <CustomerPreview /> : activeView === 'dispatcher' ? <DispatcherPreview /> : <RiderPreview />}</div>
      </div>
      <p className="showcase-disclaimer">Interface previews for illustration. Values and orders shown are sample data, not live restaurant records.</p>
    </div>
  </section>
}
