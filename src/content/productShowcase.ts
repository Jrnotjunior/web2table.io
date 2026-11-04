import { Bike, ChefHat, ClipboardList, MapPin, Store, UserRound } from 'lucide-react'

export const productShowcaseViews = [
  { id: 'owner', label: 'Owner workspace', eyebrow: 'MANAGEMENT TOOLS', title: 'A clear view of the business.', description: 'Review branch activity, sales summaries, products, and employee information from the owner workspace.', icon: Store },
  { id: 'cashier', label: 'Cashier workspace', eyebrow: 'POINT-OF-SERVICE TOOLS', title: 'Tools for front-counter service.', description: 'Access the cashier order view, customer order details, and service controls in one focused workspace.', icon: ClipboardList },
  { id: 'kitchen', label: 'Kitchen workspace', eyebrow: 'MENU AND KITCHEN TOOLS', title: 'Control menu availability and kitchen orders.', description: 'Review kitchen orders and quantities, and manage whether menu items are available for customers to order.', icon: ChefHat },
  { id: 'customer', label: 'Customer ordering', eyebrow: 'ONLINE ORDERING TOOLS', title: 'A straightforward online menu.', description: 'Let customers browse menu categories, view item details, add selections to their cart, and check out.', icon: UserRound },
  { id: 'dispatcher', label: 'Dispatcher workspace', eyebrow: 'FULFILLMENT MANAGEMENT TOOLS', title: 'A workspace for fulfillment control.', description: 'View delivery and pickup orders, organize assignments, and access dispatch controls for each fulfillment type.', icon: MapPin },
  { id: 'rider', label: 'Rider workspace', eyebrow: 'DELIVERY TOOLS', title: 'The information riders need.', description: 'View assigned deliveries, customer destination details, and controls for updating delivery status.', icon: Bike },
] as const

export type ProductShowcaseViewId = typeof productShowcaseViews[number]['id']

export type ProductShowcaseView = typeof productShowcaseViews[number]
