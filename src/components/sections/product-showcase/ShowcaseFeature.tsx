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
    </div>
  )
}
