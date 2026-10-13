import { useLocation } from 'react-router-dom'

export default function Brand({ light = false }: { light?: boolean }) {
  const location = useLocation()
  const homePath = window.location.hostname === 'jrnotjunior.github.io' ? '/web2table.io/' : '/'
  const homeHref = location.pathname === '/' ? '#home' : homePath
  return (
    <a className={`brand ${light ? 'brand-light' : ''}`} href={homeHref} aria-label="Web2Table home">
      <img className="brand-logo" src="https://xaihajwrsvcdjisezmmc.supabase.co/storage/v1/object/public/web2table-assets/web2table%20%281%29.png" alt="Web2Table" />
    </a>
  )
}
