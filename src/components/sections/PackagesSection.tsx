import { Check, CalendarDays } from 'lucide-react'
import SectionEyebrow from '../SectionEyebrow'

const bookingEmail = 'web2table.solutions@gmail.com'
const bookingLink = (packageName: string) => `mailto:${bookingEmail}?subject=${encodeURIComponent('Book a Web2Table Demo - ' + packageName)}&body=${encodeURIComponent('Hello Web2Table team,\n\nI would like to book a private demo for the ' + packageName + ' package.\n\nRestaurant name:\nPreferred date and time:\nNumber of locations:\nContact number:\n\nThank you.')}`

const features = [
  { key: 'selfOrdering', label: 'Self Ordering' },
  { key: 'pos', label: 'POS' },
  { key: 'sales', label: 'Sales' },
  { key: 'kitchen', label: 'Kitchen' },
  { key: 'dispatch', label: 'Dispatch' },
  { key: 'delivery', label: 'Delivery / Rider' },
  { key: 'loyalty', label: 'Loyalty' },
  { key: 'website', label: 'Website' },
] as const

type FeatureKey = typeof features[number]['key']
type Package = { name: string; bestFor: string; features: Record<FeatureKey, boolean> }

const packages: Package[] = [
  { name: 'Full System', bestFor: 'Restaurants wanting the complete platform', features: { selfOrdering: true, pos: true, sales: true, kitchen: true, dispatch: true, delivery: true, loyalty: true, website: true } },
  { name: 'Self Ordering + POS', bestFor: 'Restaurants with self-ordering and cashier service', features: { selfOrdering: true, pos: true, sales: true, kitchen: false, dispatch: false, delivery: false, loyalty: false, website: false } },
  { name: 'POS', bestFor: 'Traditional restaurants needing POS', features: { selfOrdering: false, pos: true, sales: true, kitchen: false, dispatch: false, delivery: false, loyalty: false, website: false } },
  { name: 'Self Ordering + POS + Kitchen', bestFor: 'Restaurants with digital ordering and kitchen workflows', features: { selfOrdering: true, pos: true, sales: true, kitchen: true, dispatch: false, delivery: false, loyalty: false, website: false } },
  { name: 'Dispatch + Delivery', bestFor: 'Restaurants needing delivery operations', features: { selfOrdering: false, pos: false, sales: true, kitchen: false, dispatch: true, delivery: true, loyalty: false, website: false } },
  { name: 'Self Ordering + Kitchen', bestFor: 'Restaurants without cashier POS', features: { selfOrdering: true, pos: false, sales: true, kitchen: true, dispatch: false, delivery: false, loyalty: false, website: false } },
  { name: 'POS + Delivery', bestFor: 'Restaurants with POS and their own delivery', features: { selfOrdering: false, pos: true, sales: true, kitchen: false, dispatch: true, delivery: true, loyalty: false, website: false } },
]

export default function PackagesSection() {
  return <section className="section packages-section" id="packages">
    <div className="container">
      <div className="section-heading split-heading packages-heading">
        <div><SectionEyebrow>Flexible package options</SectionEyebrow><h2>Choose the setup<br /><span>that fits your restaurant.</span></h2></div>
        <p>From a focused POS setup to a connected restaurant platform, explore the package options and book a private walkthrough to find the right fit.</p>
      </div>
      <div className="packages-grid">
        {packages.map((pkg, index) => <article className={`package-card${index === 0 ? ' package-card-featured' : ''}`} key={pkg.name}>
          <div className="package-card-top"><span>PACKAGE 0{index + 1}</span>{index === 0 && <span className="package-badge">Complete platform</span>}</div>
          <h3>{pkg.name}</h3>
          <p className="package-best-for">{pkg.bestFor}</p>
          <ul>{features.filter(feature => pkg.features[feature.key]).map(feature => <li key={feature.key}><Check size={15} aria-hidden="true" />{feature.label}</li>)}</ul>
          <a className="button button-dark package-cta" href={bookingLink(pkg.name)}>Book a Demo <CalendarDays size={16} /></a>
        </article>)}
      </div>
      <p className="packages-note">Every package includes a one-time onboarding fee and a monthly subscription. Contact us to discuss package details and pricing during your private demo.</p>
    </div>
  </section>
}
