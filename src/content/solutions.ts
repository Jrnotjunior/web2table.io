import { Bike, CookingPot, Gift, ShoppingBag, Store, Truck, Users } from 'lucide-react'

export const solutionRoles = [
  { number: '01', role: 'RESTAURANT OWNERS', title: 'Stay on top of the whole operation.', description: 'Keep key management tasks together, from product updates and employee access to sales visibility across branches.', points: ['Sales overview', 'Products & employees', 'Branch operations'], icon: Store },
  { number: '02', role: 'KITCHEN TEAMS', title: 'See what needs to be prepared.', description: 'Focus on incoming orders, item quantities, and clear preparation status.', points: ['Order queue', 'Items & quantities', 'Ready status'], icon: CookingPot },
  { number: '03', role: 'DISPATCHERS', title: 'Make every handoff clearer.', description: 'Coordinate pickup orders and delivery assignments as orders move out of the kitchen.', points: ['Pickup coordination', 'Delivery assignments', 'Order progress'], icon: Truck },
  { number: '04', role: 'RIDERS', title: 'Know which delivery comes next.', description: 'Keep assigned delivery tasks and progress updates in a focused rider workflow.', points: ['Assigned deliveries', 'Delivery details', 'Status updates'], icon: Bike },
  { number: '05', role: 'CUSTOMERS', title: 'Order with fewer steps.', description: 'Browse the restaurant menu online and follow a simpler path from choosing items to placing an order.', points: ['Online menu', 'Cart & checkout', 'Order updates'], icon: ShoppingBag },
  { number: '06', role: 'LOYALTY CUSTOMERS', title: 'Make return visits count.', description: 'Where loyalty is enabled, eligible customers can collect points and use available rewards.', points: ['Earn points', 'View eligible rewards', 'Redeem eligible rewards'], icon: Gift },
  { number: '07', role: 'RESTAURANT TEAMS', title: 'Give each person the right view.', description: 'Role-based access helps staff concentrate on the tasks relevant to their part of service.', points: ['Role-focused screens', 'Clear responsibilities', 'Connected order flow'], icon: Users },
] as const
