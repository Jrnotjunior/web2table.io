import logo from '../../web2table.png'

export default function Brand({ light = false }: { light?: boolean }) {
  return (
    <a className={`brand ${light ? 'brand-light' : ''}`} href="#home" aria-label="Web2Table home">
      <img className="brand-logo" src={logo} alt="Web2Table" />
    </a>
  )
}
