import { siteConfig } from '../config/site'

export { siteConfig }
export { navigationItems } from './navigation'
export { capabilities } from './capabilities'
export { workflowSteps } from './workflow'

/** @deprecated Import siteConfig from config/site instead. */
export const platformUrl = siteConfig.platformUrl
