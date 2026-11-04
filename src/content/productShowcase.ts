import { Bike, ChefHat, MapPin, Store, UserRound } from 'lucide-react'

export const productShowcaseViews = [
  { id: 'owner', label: 'Owner workspace', eyebrow: 'RESTAURANT MANAGEMENT', title: 'See the bigger picture.', description: 'A management workspace for branches, sales, products, and employees.', icon: Store },
  { id: 'kitchen', label: 'Kitchen workflow', eyebrow: 'KITCHEN OPERATIONS', title: 'Make the next step clear.', description: 'A kitchen view centered on incoming orders, products, and quantities.', icon: ChefHat },
  { id: 'customer', label: 'Customer ordering', eyebrow: 'ONLINE ORDERING', title: 'Make ordering easy for customers.', description: 'A customer-facing menu preview for browsing items and placing an order.', icon: UserRound },
  { id: 'dispatcher', label: 'Dispatcher workspace', eyebrow: 'ORDER DISPATCH', title: 'Coordinate every handoff.', description: 'A dispatch workspace for tracking pickup orders and delivery assignments.', icon: MapPin },
  { id: 'rider', label: 'Rider workspace', eyebrow: 'DELIVERY WORKFLOW', title: 'Keep deliveries on track.', description: 'A focused rider view for assigned deliveries and delivery status updates.', icon: Bike },
] as const

export type ProductShowcaseViewId = typeof productShowcaseViews[number]['id']

export type ProductShowcaseView = typeof productShowcaseViews[number]
