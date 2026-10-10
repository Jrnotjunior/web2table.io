import { useState, type ReactNode } from 'react'
import { ArrowDownRight, ArrowRight, Check, CircleCheck, Clock3, CookingPot, CreditCard, Menu, MonitorSmartphone, MoveUpRight, PackageCheck, ShoppingBag, Sparkles, Store, Truck, Users, X } from 'lucide-react'
import './styles/app.css'

const appUrl = 'https://jrnotjunior.github.io/restaurant-ordering-platform/'

const navigation = [
  { label: 'Platform', href: '#platform' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'About', href: '#about' },
]

const capabilities = [
  { icon: ShoppingBag, number: '01', title: 'Online ordering', description: 'Give customers a simple way to discover your menu and place orders, wherever they are.' },
  { icon: CreditCard, number: '02', title: 'Point of sale', description: 'Bring walk-in sales, payments, receipts, and day-to-day counter service into one flow.' },
  { icon: CookingPot, number: '03', title: 'Kitchen workflow', description: 'Help the kitchen see what needs to be prepared and keep order handoffs clear.' },
  { icon: Truck, number: '04', title: 'Dispatch & delivery', description: 'Coordinate pickup and delivery handoffs with a clearer view of order progress.' },
  { icon: Users, number: '05', title: 'Team access', description: 'Give owners and staff the tools they need, with access based on their role.' },
  { icon: Store, number: '06', title: 'Restaurant management', description: 'Manage products, employees, and sales from a connected restaurant workspace.' },
]

const steps = [
  { icon: ShoppingBag, title: 'An order comes in', text: 'Customers order online or your cashier enters an in-store order.' },
  { icon: CookingPot, title: 'The team gets to work', text: 'The kitchen prepares the order while the front of house handles payment and service.' },
  { icon: PackageCheck, title: 'Ready for handoff', text: 'Staff can follow the order through preparation, pickup, and dispatch.' },
]

function Brand({ light = false }: { light?: boolean }) {
  return <a className={`brand ${light ? 'brand-light' : ''}`} href="#home" aria-label="Web2Table home"><span className="brand-mark"><span /><span /><span /></span><span>web<span>2</span>table</span></a>
}

function Header() {
  const [open, setOpen] = useState(false)
  return <header className="site-header">
    <div className="container header-inner">
      <Brand />
      <button className="mobile-menu" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
      <nav className={`main-nav ${open ? 'nav-open' : ''}`} aria-label="Main navigation">
        {navigation.map(item => <a key={item.label} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
        <a className="nav-cta" href={appUrl} target="_blank" rel="noreferrer">Open platform <MoveUpRight size={15} /></a>
      </nav>
    </div>
  </header>
}

function SectionEyebrow({ children }: { children: ReactNode }) {
  return <div className="eyebrow"><span />{children}</div>
}

function Hero() {
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

function PlatformSection() {
  return <section className="section platform-section" id="platform">
    <div className="container">
      <div className="section-heading split-heading"><div><SectionEyebrow>The platform</SectionEyebrow><h2>One busy restaurant.<br /><span>One clearer picture.</span></h2></div><p>Restaurant service has a lot of moving parts. Web2Table brings key tasks into a connected workspace, so every role can focus on what comes next.</p></div>
      <div className="capability-grid">{capabilities.map(item => {
        const Icon = item.icon
        return <article className="capability-card" key={item.number}><div className="capability-top"><span className="capability-icon"><Icon size={21} strokeWidth={1.8} /></span><span className="capability-number">{item.number}</span></div><h3>{item.title}</h3><p>{item.description}</p><a href="#how-it-works" aria-label={`Learn how ${item.title} fits into the workflow`}><ArrowRight size={18} /></a></article>
      })}</div>
    </div>
  </section>
}

function WorkflowSection() {
  return <section className="section workflow-section" id="how-it-works">
    <div className="container workflow-layout">
      <div className="workflow-copy"><SectionEyebrow>A smoother handoff</SectionEyebrow><h2>Every role knows<br />what happens <span>next.</span></h2><p>Less guessing between the counter, kitchen, and dispatch. A shared order flow helps your team stay in step as the day gets busy.</p><a className="button button-light" href={appUrl} target="_blank" rel="noreferrer">Explore the platform <MoveUpRight size={16} /></a><div className="workflow-footnote"><Check size={15} /> Designed around role-based workflows</div></div>
      <div className="steps-list">{steps.map((step, index) => {
        const Icon = step.icon
        return <article className="step-row" key={step.title}><div className="step-index">{String(index + 1).padStart(2, '0')}</div><div className="step-icon"><Icon size={21} /></div><div className="step-copy"><h3>{step.title}</h3><p>{step.text}</p></div><ArrowRight className="step-arrow" size={18} /></article>
      })}<div className="steps-bottom"><span className="steps-bottom-mark"><Check size={14} /></span>One connected flow, from order to handoff.</div></div>
    </div>
  </section>
}

function SolutionsSection() {
  return <section className="section solutions-section" id="solutions">
    <div className="container"><div className="section-heading centered-heading"><SectionEyebrow>For the whole team</SectionEyebrow><h2>The right view for<br /><span>the role at hand.</span></h2><p>Give each person a clearer way to do their part, while the restaurant works as one team.</p></div>
      <div className="solutions-grid">
        <article className="solution-card owner-card"><div className="solution-image owner-image"><img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85" alt="Restaurant owner and team planning together" loading="lazy" /><span className="image-label">01 / OWNERS</span></div><div className="solution-body"><h3>See the bigger picture.</h3><p>Manage products, employees, and sales with a more connected view of restaurant operations.</p><ul><li><Check size={15} /> Sales visibility</li><li><Check size={15} /> Product management</li><li><Check size={15} /> Team access</li></ul></div></article>
        <article className="solution-card team-card-large"><div className="solution-image team-image"><img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=85" alt="Restaurant team preparing food in a kitchen" loading="lazy" /><span className="image-label">02 / RESTAURANT TEAMS</span></div><div className="solution-body"><h3>Keep service moving.</h3><p>Help cashiers, kitchen staff, and dispatch coordinate their work as orders move through the restaurant.</p><ul><li><Check size={15} /> Clear order status</li><li><Check size={15} /> Kitchen preparation</li><li><Check size={15} /> Pickup and dispatch</li></ul></div></article>
      </div>
    </div>
  </section>
}

function AboutSection() {
  return <section className="section about-section" id="about"><div className="container about-grid"><div className="about-art"><img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=85" alt="Warm, welcoming restaurant dining space" loading="lazy" /><div className="about-note"><span className="about-note-icon"><MonitorSmartphone size={19} /></span><span><strong>Technology that fits service</strong><small>Made for the real pace of restaurants.</small></span></div></div><div className="about-copy"><SectionEyebrow>Why Web2Table</SectionEyebrow><h2>Good service takes a team.<br /><span>Great tools help it click.</span></h2><p>Restaurants balance customers, orders, people, and timing all at once. Web2Table is being built to help bring those everyday moving parts together, with practical tools designed around restaurant workflows.</p><p>Our goal is simple: make the work behind a great guest experience feel more connected and manageable.</p><a className="text-link" href="#contact">Get to know Web2Table <ArrowRight size={17} /></a></div></div></section>
}

function ContactSection() {
  return <section className="contact-section" id="contact"><div className="container contact-panel"><div className="contact-decoration"><span /><span /><span /></div><div className="contact-content"><SectionEyebrow>Take the next step</SectionEyebrow><h2>Ready to bring your<br />restaurant into sync?</h2><p>Explore the Web2Table platform and see how connected restaurant workflows can fit your operation.</p><a className="button button-lime" href={appUrl} target="_blank" rel="noreferrer">Explore Web2Table <MoveUpRight size={17} /></a><small>Already have access? Open the platform to continue.</small></div><div className="contact-visual"><div className="contact-orbit orbit-one" /><div className="contact-orbit orbit-two" /><div className="contact-center"><Store size={31} /><span>web2table</span></div><div className="orbit-node node-one"><ShoppingBag size={19} /></div><div className="orbit-node node-two"><CookingPot size={19} /></div><div className="orbit-node node-three"><Truck size={19} /></div><div className="orbit-node node-four"><CreditCard size={19} /></div></div></div></section>
}

function Footer() {
  return <footer className="site-footer"><div className="container footer-main"><div className="footer-brand"><Brand light /><p>Restaurant operations, connected.</p></div><div className="footer-links"><div><span>EXPLORE</span><a href="#platform">Platform</a><a href="#solutions">Solutions</a><a href="#how-it-works">How it works</a></div><div><span>WEB2TABLE</span><a href="#about">About</a><a href="#contact">Contact</a><a href={appUrl} target="_blank" rel="noreferrer">Open platform <MoveUpRight size={13} /></a></div></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Web2Table. All rights reserved.</span><span>Thoughtfully built for restaurant teams.</span></div></footer>
}

function App() {
  return <><Header /><main><Hero /><PlatformSection /><WorkflowSection /><SolutionsSection /><AboutSection /><ContactSection /></main><Footer /></>
}

export default App
