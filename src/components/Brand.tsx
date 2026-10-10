import type { ReactNode } from 'react'

export default function Brand({ light = false }: { light?: boolean }) {
  return <a className={`brand ${light ? 'brand-light' : ''}`} href="#home" aria-label="Web2Table home"><span className="brand-mark" aria-hidden="true"><span className="globe-line globe-top" /><span className="globe-line globe-mid" /><span className="globe-line globe-vertical" /><span className="logo-search"><i /></span></span><span className="brand-word">Web<span>2</span>Table</span></a>
}
