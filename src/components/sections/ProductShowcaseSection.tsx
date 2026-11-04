import { useState } from 'react'
import SectionEyebrow from '../SectionEyebrow'
import { productShowcaseViews, type ProductShowcaseViewId } from '../../content/productShowcase'
import ShowcaseTabs from './product-showcase/ShowcaseTabs'
import ShowcaseFeature from './product-showcase/ShowcaseFeature'
import ShowcasePreview from './product-showcase/ShowcasePreview'

export default function ProductShowcaseSection() {
  const [activeView, setActiveView] = useState<ProductShowcaseViewId>('owner')
  const currentView = productShowcaseViews.find(view => view.id === activeView) ?? productShowcaseViews[0]

  return (
    <section className="section product-showcase-section" id="product-tour">
      <div className="container">
        <div className="section-heading showcase-heading">
          <SectionEyebrow>Inside Web2Table</SectionEyebrow>
          <h2>Explore the workspaces.<br /><span>See the tools in action.</span></h2>
          <p>Each workspace gives a different restaurant role access to the tools and information they need. Explore the owner, cashier, kitchen, customer, dispatcher, and rider interfaces.</p>
        </div>
        <ShowcaseTabs activeView={activeView} onChange={setActiveView} />
        <div className="showcase-feature">
          <ShowcaseFeature view={currentView} />
          <ShowcasePreview activeView={activeView} />
        </div>
        <p className="showcase-disclaimer">Interface previews for illustration. Values and orders shown are sample data, not live restaurant records.</p>
      </div>
    </section>
  )
}
