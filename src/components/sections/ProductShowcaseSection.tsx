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
        <div className="section-heading split-heading showcase-heading">
          <div>
            <SectionEyebrow>Inside Web2Table</SectionEyebrow>
            <h2>Meet the platform.<br /><span>See the workflow.</span></h2>
          </div>
          <p>Explore a preview of the tools behind restaurant operations. These interface previews are built for this website from Web2Table's actual feature areas—not stock photos or images taken from another product.</p>
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
