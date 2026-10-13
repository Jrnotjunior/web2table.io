import { Check } from 'lucide-react'
import SectionEyebrow from '../SectionEyebrow'
import { packageFeatures, websitePackages } from '../../content/packages'

export default function PackagesSection() {
  return <section className="section packages-section" id="packages">
    <div className="container">
      <div className="section-heading split-heading packages-heading">
        <div><SectionEyebrow>Flexible package options</SectionEyebrow><h2>Choose the setup<br /><span>that fits your restaurant.</span></h2></div>
        <p>From a focused POS setup to a connected restaurant platform, explore the package options and choose what fits your restaurant.</p>
      </div>
      <div className="packages-grid">
        {websitePackages.map((pkg, index) => <article className={`package-card${index === 0 ? ' package-card-featured' : ''}`} key={pkg.name}>
          <div className="package-card-top"><span>PACKAGE {String(index + 1).padStart(2, '0')}</span>{index === 0 && <span className="package-badge">Complete platform</span>}</div>
          <h3>{pkg.name}</h3>
          <p className="package-best-for">{pkg.bestFor}</p>
          <ul>{packageFeatures.filter(feature => pkg.features[feature.key]).map(feature => <li key={feature.key}><Check size={15} aria-hidden="true" />{feature.label}</li>)}</ul>
        </article>)}
      </div>
      <div className="packages-footer"><p className="packages-note">Every package includes a one-time onboarding fee and a monthly subscription. Pricing is discussed privately so we can understand your restaurant's needs.</p><a className="button button-dark package-cta" href="#contact">Discuss Packages <span aria-hidden="true">→</span></a></div>
    </div>
  </section>
}
