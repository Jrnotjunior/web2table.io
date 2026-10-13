import type { ReactNode } from 'react'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'

type SiteLayoutProps = {
  children: ReactNode
}

/**
 * Shared public-site chrome. Pages own their main content and semantic main
 * element; this component owns only the persistent header/footer structure.
 */
export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  )
}
