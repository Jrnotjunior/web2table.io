export default function Brand({ light = false }: { light?: boolean }) {
  return (
    <a className={`brand ${light ? 'brand-light' : ''}`} href="#home" aria-label="Web2Table home">
      <span className="brand-mark" aria-hidden="true"><span /><span /><span /><span /></span>
      <span className="brand-word">Web<span>2</span>Table</span>
    </a>
  )
}
