import { useState } from 'react'
import SectionEyebrow from '../SectionEyebrow'
import { productShowcaseViews, type ProductShowcaseViewId } from '../../content/productShowcase'
import { siteConfig } from '../../config/site'

const platformUrl = siteConfig.platformUrl
import { OwnerPreview, PosPreview, KitchenPreview, CustomerPreview, DispatcherPreview, RiderPreview } from './product-showcase/PreviewScreens'

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
