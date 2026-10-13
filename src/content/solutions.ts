import { Bike, CookingPot, CreditCard, Gift, ShoppingBag, Store, Truck, Users } from 'lucide-react'

export const solutionRoles = [
  { number: '01', role: 'RESTAURANT OWNERS', title: 'Stay on top of the whole operation.', description: 'Keep key management tasks together, from product updates and employee access to sales visibility.', points: ['Sales overview', 'Products & employees', 'Role-based access'], icon: Store },
  { number: '02', role: 'CASHIERS', title: 'Keep the counter moving.', description: 'Handle in-store orders and payments with a point-of-sale workflow designed for busy service.', points: ['Create orders', 'Record payments', 'Print receipts'], icon: CreditCard },
  { number: '03', role: 'KITCHEN TEAMS', title: 'See what needs to be prepared.', description: 'Focus on incoming orders, item quantities, and clear preparation status without counter-side clutter.', points: ['Order queue', 'Items & quantities', 'Ready status'], icon: CookingPot },
  { number: '04', role: 'DISPATCHERS', title: 'Make every handoff clearer.', description: 'Coordinate pickup orders and delivery assignments as orders move out of the kitchen.', points: ['Pickup coordination', 'Delivery assignments', 'Order progress'], icon: Truck },
  { number: '05', role: 'RIDERS', title: 'Know which delivery comes next.', description: 'Keep assigned delivery tasks and progress updates in a focused rider workflow.', points: ['Assigned deliveries', 'Delivery details', 'Status updates'], icon: Bike },
  { number: '06', role: 'CUSTOMERS', title: 'Order with fewer steps.', description: 'Browse the restaurant menu online and follow a simpler path from choosing items to placing an order.', points: ['Online menu', 'Cart & checkout', 'Order updates'], icon: ShoppingBag },
  { number: '07', role: 'LOYALTY CUSTOMERS', title: 'Make return visits count.', description: 'Where loyalty is enabled, eligible customers can collect points and use available rewards.', points: ['Earn points', 'View eligible rewards', 'Redeem before payment'], icon: Gift },
  { number: '08', role: 'RESTAURANT TEAMS', title: 'Give each person the right view.', description: 'Role-based access helps staff concentrate on the tasks relevant to their part of service.', points: ['Role-focused screens', 'Clear responsibilities', 'Connected order flow'], icon: Users },
] as const
