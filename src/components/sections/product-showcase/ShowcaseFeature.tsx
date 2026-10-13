import { siteConfig } from '../../../config/site'
import type { ProductShowcaseView } from '../../../content/productShowcase'

type ShowcaseFeatureProps = {
  view: ProductShowcaseView
}

export default function ShowcaseFeature({ view }: ShowcaseFeatureProps) {
  return (
    <div className="showcase-copy">
      <span className="showcase-eyebrow"><i />{view.eyebrow}</span>
      <h3>{view.title}</h3>
      <p>{view.description}</p>
      <a className="showcase-text-link" href={siteConfig.platformUrl} target="_blank" rel="noreferrer">
        Explore the platform <span>↗</span>
      </a>
    </div>
  )
}
