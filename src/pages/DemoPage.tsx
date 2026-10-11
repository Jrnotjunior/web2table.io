import { useState } from 'react'
import { ArrowLeft, Bike, Check, ChefHat, CircleDollarSign, ClipboardList, PackageCheck, Plus, RotateCcw, ShoppingBag, Store, Truck, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import '../styles/demo.css'

type Role = 'Customer' | 'Cashier' | 'Kitchen' | 'Dispatcher' | 'Owner'
type DemoOrder = { id: number; items: { name: string; price: number; quantity: number }[]; status: 'New' | 'Preparing' | 'Ready' | 'Completed'; type: 'Pickup' | 'Delivery' }

const menu = [
  { name: 'Chicken Rice', price: 150 },
  { name: 'Beef Burger', price: 180 },
  { name: 'Iced Tea', price: 50 },
]

const roleOptions: { name: Role; icon: typeof Store; subtitle: string }[] = [
  { name: 'Customer', icon: ShoppingBag, subtitle: 'Place a sample order' },
  { name: 'Cashier', icon: CircleDollarSign, subtitle: 'Review incoming orders' },
  { name: 'Kitchen', icon: ChefHat, subtitle: 'Prepare orders' },
  { name: 'Dispatcher', icon: Truck, subtitle: 'Handle the handoff' },
  { name: 'Owner', icon: Store, subtitle: 'View the operation' },
]

export default function DemoPage() {
  const [role, setRole] = useState<Role>('Customer')
  const [cart, setCart] = useState<Record<string, number>>({})
  const [orders, setOrders] = useState<DemoOrder[]>([])
  const [nextId, setNextId] = useState(1001)
  const [orderType, setOrderType] = useState<'Pickup' | 'Delivery'>('Pickup')
  const [notice, setNotice] = useState('This is a safe demo using sample data only.')
  const activeOrder = orders[0]
  const total = menu.reduce((sum, item) => sum + item.price * (cart[item.name] || 0), 0)

  function placeOrder() {
    const items = menu.filter(item => (cart[item.name] || 0) > 0).map(item => ({ ...item, quantity: cart[item.name] }))
    if (!items.length) { setNotice('Choose at least one menu item before placing an order.'); return }
    setOrders(current => [{ id: nextId, items, status: 'New', type: orderType }, ...current])
    setNextId(id => id + 1)
    setCart({})
    setRole('Cashier')
    setNotice('Sample order created. Switch roles to follow it through the restaurant.')
  }

  function advanceOrder() {
    if (!activeOrder) return
    const nextStatus: Record<DemoOrder['status'], DemoOrder['status']> = { New: 'Preparing', Preparing: 'Ready', Ready: 'Completed', Completed: 'Completed' }
    setOrders(current => current.map(order => order.id === activeOrder.id ? { ...order, status: nextStatus[order.status] } : order))
    setNotice(activeOrder.status === 'New' ? 'Kitchen preparation started.' : activeOrder.status === 'Preparing' ? 'Order marked ready for handoff.' : activeOrder.status === 'Ready' ? 'Demo order completed.' : 'This demo order is already complete.')
  }

  function resetDemo() {
    setRole('Customer'); setCart({}); setOrders([]); setNextId(1001); setOrderType('Pickup')
    setNotice('Demo reset. Start again by adding items to the sample menu.')
  }

  return <div className="demo-page">
    <header className="demo-topbar"><Link to="/" className="demo-back"><ArrowLeft size={16} /> Back to website</Link><span className="demo-badge"><span /> INTERACTIVE DEMO</span><button type="button" className="demo-reset" onClick={resetDemo}><RotateCcw size={14} /> Reset demo</button></header>
    <main className="demo-wrap">
      <div className="demo-intro"><span className="demo-eyebrow">EXPLORE THE WORKFLOW</span><h1>One order.<br /><span>Every role connected.</span></h1><p>Try a sample restaurant workflow. Place an order, follow it through preparation, and complete the handoff.</p><div className="demo-safe-note"><Check size={15} /> Sample data only — no real payments or restaurant records.</div></div>
      <div className="demo-role-tabs" aria-label="Demo roles">{roleOptions.map(({ name, icon: Icon, subtitle }) => <button type="button" key={name} className={role === name ? 'demo-role-tab is-active' : 'demo-role-tab'} onClick={() => setRole(name)}><Icon size={18} /><span><strong>{name}</strong><small>{subtitle}</small></span></button>)}</div>
      <div className="demo-workspace">
        <section className="demo-screen">
          <div className="demo-screen-heading"><div><span className="demo-eyebrow">SAMPLE RESTAURANT</span><h2>{role === 'Owner' ? 'Restaurant overview' : role === 'Customer' ? 'Order your favorites' : role === 'Cashier' ? 'New orders' : role === 'Kitchen' ? 'Kitchen queue' : 'Order handoff'}</h2></div><span className="demo-live"><i /> DEMO MODE</span></div>
          {role === 'Customer' && <div className="demo-customer-view"><div className="demo-menu-heading"><div><h3>Everyday Kitchen</h3><p>Fresh favorites, made to order.</p></div><span className="demo-open-label">OPEN</span></div><div className="demo-menu-list">{menu.map(item => <article className="demo-menu-item" key={item.name}><div className="demo-food-icon"><ShoppingBag size={18} /></div><div className="demo-menu-details"><strong>{item.name}</strong><small>Sample menu item</small><b>₱{item.price.toFixed(2)}</b></div><div className="demo-quantity"><button type="button" aria-label={'Remove one '+item.name} onClick={() => setCart(current => ({ ...current, [item.name]: Math.max(0, (current[item.name] || 0) - 1) }))}>−</button><span>{cart[item.name] || 0}</span><button type="button" aria-label={'Add one '+item.name} onClick={() => setCart(current => ({ ...current, [item.name]: (current[item.name] || 0) + 1 }))}><Plus size={13} /></button></div></article>)}</div><div className="demo-checkout"><label>Order type<select value={orderType} onChange={event => setOrderType(event.target.value as 'Pickup' | 'Delivery')}><option>Pickup</option><option>Delivery</option></select></label><div className="demo-total"><span>Sample total</span><strong>₱{total.toFixed(2)}</strong></div><button className="demo-primary" type="button" onClick={placeOrder}>Place sample order <ShoppingBag size={15} /></button></div></div>}
          {role !== 'Customer' && <div className="demo-role-view">{role === 'Owner' ? <div className="demo-stats"><article><span>Sample sales</span><strong>₱{orders.reduce((sum, order) => sum + order.items.reduce((s, item) => s + item.price * item.quantity, 0), 0).toFixed(2)}</strong><small>From this demo session</small></article><article><span>Demo orders</span><strong>{orders.length}</strong><small>Sample orders created</small></article><article><span>Products</span><strong>{menu.length}</strong><small>Example menu items</small></article></div> : null}
            {!activeOrder ? <div className="demo-empty"><ClipboardList size={30} /><h3>No sample orders yet</h3><p>Switch to Customer to add items and place your first sample order.</p><button type="button" className="demo-secondary" onClick={() => setRole('Customer')}>Go to customer menu</button></div> : <article className="demo-order-card"><div className="demo-order-top"><div><span className="demo-order-number">ORDER #{activeOrder.id}</span><h3>{activeOrder.type} order</h3></div><span className={'demo-status status-'+activeOrder.status.toLowerCase()}>{activeOrder.status}</span></div><div className="demo-order-items">{activeOrder.items.map(item => <div key={item.name}><span>{item.name}<small>₱{item.price.toFixed(2)} each</small></span><strong>× {item.quantity}</strong></div>)}</div><div className="demo-order-total"><span>Sample total</span><strong>₱{activeOrder.items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}</strong></div>{role === 'Cashier' && activeOrder.status === 'New' && <p className="demo-role-tip">Review the sample order, then send it to the kitchen.</p>}{role === 'Kitchen' && activeOrder.status !== 'New' && <p className="demo-role-tip">The kitchen can see item names, quantities, and preparation status.</p>}{role === 'Dispatcher' && activeOrder.status !== 'Ready' && activeOrder.status !== 'Completed' && <p className="demo-role-tip">Dispatch becomes available after the kitchen marks the order ready.</p>}<div className="demo-next-step"><span>{activeOrder.status === 'New' ? 'NEXT STEP' : activeOrder.status === 'Preparing' ? 'IN PROGRESS' : activeOrder.status === 'Ready' ? 'READY FOR HANDOFF' : 'WORKFLOW COMPLETE'}</span><strong>{activeOrder.status === 'New' ? 'Kitchen prepares the order' : activeOrder.status === 'Preparing' ? 'Mark the order ready' : activeOrder.status === 'Ready' ? 'Complete pickup or delivery' : 'Order completed successfully'}</strong></div><button type="button" className="demo-primary" onClick={advanceOrder} disabled={activeOrder.status === 'Completed'}>{activeOrder.status === 'New' ? 'Send to kitchen' : activeOrder.status === 'Preparing' ? 'Mark ready' : activeOrder.status === 'Ready' ? (activeOrder.type === 'Pickup' ? 'Complete pickup' : 'Complete delivery') : 'Order completed'} <PackageCheck size={15} /></button></article>}
          </div>}
          <div className="demo-notice" role="status">{notice}</div>
        </section>
        <aside className="demo-flow-panel"><span className="demo-eyebrow">ORDER JOURNEY</span><h3>From menu to handoff</h3>{[{label:'Order received',detail:'Customer places an order',status:'New'},{label:'In preparation',detail:'Kitchen prepares the items',status:'Preparing'},{label:'Ready for handoff',detail:'Pickup or delivery can proceed',status:'Ready'},{label:'Completed',detail:'Order is handed off',status:'Completed'}].map((step,index) => { const state=activeOrder ? ['New','Preparing','Ready','Completed'].indexOf(activeOrder.status) : -1; return <div key={step.status} className={'demo-flow-step '+(state>=index?'is-done':'')}><span className="demo-flow-marker">{state>=index?<Check size={13}/>:String(index+1).padStart(2,'0')}</span><div><strong>{step.label}</strong><small>{step.detail}</small></div></div> })}<div className="demo-flow-footer"><Users size={16} /><span>Each role has a clear part in the same workflow.</span></div></aside>
      </div>
      <div className="demo-bottom-cta"><div><span className="demo-eyebrow">READY TO TAKE THE NEXT STEP?</span><h2>See what Web2Table can do for your restaurant.</h2></div><a href="https://jrnotjunior.github.io/restaurant-ordering-platform/" target="_blank" rel="noreferrer">Open the platform <Bike size={15} /></a></div>
    </main>
  </div>
}
