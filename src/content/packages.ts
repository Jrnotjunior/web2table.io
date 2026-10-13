export const packageFeatures = [
  { key: 'selfOrdering', label: 'Self Ordering' },
  { key: 'pos', label: 'POS' },
  { key: 'sales', label: 'Sales' },
  { key: 'kitchen', label: 'Kitchen' },
  { key: 'dispatch', label: 'Dispatch' },
  { key: 'delivery', label: 'Delivery / Rider' },
  { key: 'loyalty', label: 'Loyalty' },
  { key: 'website', label: 'Website' },
] as const

export type PackageFeatureKey = typeof packageFeatures[number]['key']

export type WebsitePackage = {
  name: string
  bestFor: string
  features: Record<PackageFeatureKey, boolean>
}

export const websitePackages: WebsitePackage[] = [
  { name: 'Full System', bestFor: 'Restaurants wanting the complete platform', features: { selfOrdering: true, pos: true, sales: true, kitchen: true, dispatch: true, delivery: true, loyalty: true, website: true } },
  { name: 'Self Ordering + POS', bestFor: 'Restaurants with self-ordering and cashier service', features: { selfOrdering: true, pos: true, sales: true, kitchen: false, dispatch: false, delivery: false, loyalty: false, website: false } },
  { name: 'POS', bestFor: 'Traditional restaurants needing POS', features: { selfOrdering: false, pos: true, sales: true, kitchen: false, dispatch: false, delivery: false, loyalty: false, website: false } },
  { name: 'Self Ordering + POS + Kitchen', bestFor: 'Restaurants with digital ordering and kitchen workflows', features: { selfOrdering: true, pos: true, sales: true, kitchen: true, dispatch: false, delivery: false, loyalty: false, website: false } },
  { name: 'Dispatch + Delivery', bestFor: 'Restaurants needing delivery operations', features: { selfOrdering: false, pos: false, sales: true, kitchen: false, dispatch: true, delivery: true, loyalty: false, website: false } },
  { name: 'Self Ordering + Kitchen', bestFor: 'Restaurants without cashier POS', features: { selfOrdering: true, pos: false, sales: true, kitchen: true, dispatch: false, delivery: false, loyalty: false, website: false } },
  { name: 'POS + Delivery', bestFor: 'Restaurants with POS and their own delivery', features: { selfOrdering: false, pos: true, sales: true, kitchen: false, dispatch: true, delivery: true, loyalty: false, website: false } },
]
