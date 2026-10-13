import { useLocation } from 'react-router-dom'
import logo from '../../web2table.png'

export default function Brand({ light = false }: { light?: boolean }) {
  const location = useLocation()
  const homePath = window.location.hostname === 'jrnotjunior.github.io' ? '/web2table.io/' : '/'
  const homeHref = location.pathname === '/' ? '#home' : homePath
  return (
    <a className={`brand ${light ? 'brand-light' : ''}`} href={homeHref} aria-label="Web2Table home">
      <img className="brand-logo" src={logo} alt="Web2Table" />
    </a>
  )
}
