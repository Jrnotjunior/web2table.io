import { CookingPot, CreditCard, PackageCheck, ShoppingBag, Store, Truck, Users } from 'lucide-react'

export const platformUrl = 'https://jrnotjunior.github.io/restaurant-ordering-platform/'

export const navigationItems = [
  { label: 'Platform', href: '#platform' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'About', href: '#about' },
]

export const capabilities = [
  { icon: ShoppingBag, number: '01', title: 'Online ordering', description: 'Give customers a simple way to discover your menu and place orders, wherever they are.' },
  { icon: CreditCard, number: '02', title: 'Point of sale', description: 'Bring walk-in sales, payments, receipts, and day-to-day counter service into one flow.' },
  { icon: CookingPot, number: '03', title: 'Kitchen workflow', description: 'Help the kitchen see what needs to be prepared and keep order handoffs clear.' },
  { icon: Truck, number: '04', title: 'Dispatch & delivery', description: 'Coordinate pickup and delivery handoffs with a clearer view of order progress.' },
  { icon: Users, number: '05', title: 'Team access', description: 'Give owners and staff the tools they need, with access based on their role.' },
  { icon: Store, number: '06', title: 'Restaurant management', description: 'Manage products, employees, and sales from a connected restaurant workspace.' },
]

export const workflowSteps = [
  { icon: ShoppingBag, title: 'An order comes in', text: 'Customers order online or your cashier enters an in-store order.' },
  { icon: CookingPot, title: 'The team gets to work', text: 'The kitchen prepares the order while the front of house handles payment and service.' },
  { icon: PackageCheck, title: 'Ready for handoff', text: 'Staff can follow the order through preparation, pickup, and dispatch.' },
]
