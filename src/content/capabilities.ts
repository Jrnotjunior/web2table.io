import { Bike, ClipboardList, CookingPot, Gift, GitBranch, ShoppingBag, Store, Truck } from 'lucide-react'

export const capabilities = [
  { icon: ShoppingBag, number: '01', title: 'Online ordering', description: 'Give customers a simple way to discover your menu and place orders, wherever they are.' },
  { icon: ClipboardList, number: '02', title: 'Cashier workspace', description: 'Handle customer orders and keep service moving with a dedicated cashier workspace for each assigned branch.' },
  { icon: CookingPot, number: '03', title: 'Kitchen workflow', description: 'Help the kitchen see what needs to be prepared and keep order handoffs clear.' },
  { icon: Truck, number: '04', title: 'Dispatch & delivery', description: 'Coordinate pickup and delivery handoffs with a clearer view of order progress.' },
  { icon: Bike, number: '05', title: 'Rider workflow', description: 'Give riders a focused view of assigned deliveries and the steps needed to update delivery progress.' },
  { icon: Gift, number: '06', title: 'Customer loyalty', description: 'Support returning customers with loyalty points and redemption options when the program is configured.' },
  { icon: Store, number: '07', title: 'Restaurant owner workspace', description: 'Give restaurant owners a centralized place to oversee their restaurant, people, products, and branch operations.' },
  { icon: GitBranch, number: '08', title: 'Multi-branch management', description: 'Manage multiple restaurant branches from one owner workspace, with dedicated branch operations and storefronts.' },
]
