import { productShowcaseViews, type ProductShowcaseViewId } from '../../../content/productShowcase'

type ShowcaseTabsProps = {
  activeView: ProductShowcaseViewId
  onChange: (view: ProductShowcaseViewId) => void
}

export default function ShowcaseTabs({ activeView, onChange }: ShowcaseTabsProps) {
  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    const currentIndex = productShowcaseViews.findIndex(view => view.id === activeView)
    let nextIndex = currentIndex

    if (event.key === 'ArrowRight') nextIndex = (currentIndex + 1) % productShowcaseViews.length
    else if (event.key === 'ArrowLeft') nextIndex = (currentIndex - 1 + productShowcaseViews.length) % productShowcaseViews.length
    else if (event.key === 'Home') nextIndex = 0
    else if (event.key === 'End') nextIndex = productShowcaseViews.length - 1
    else return

    event.preventDefault()
    const nextView = productShowcaseViews[nextIndex]
    onChange(nextView.id)
    document.getElementById('showcase-tab-' + nextView.id)?.focus()
  }

  return (
    <div className="showcase-tabs" role="tablist" aria-label="Product interface previews" onKeyDown={handleKeyDown}>
      {productShowcaseViews.map(view => {
        const Icon = view.icon
        const selected = activeView === view.id
        return (
          <button
            key={view.id}
            id={'showcase-tab-' + view.id}
            type="button"
            role="tab"
            aria-controls="showcase-panel"
            tabIndex={selected ? 0 : -1}
            aria-selected={selected}
            className={selected ? 'showcase-tab is-active' : 'showcase-tab'}
            onClick={() => onChange(view.id)}
          >
            <Icon size={16} />
            {view.label}
          </button>
        )
      })}
    </div>
  )
}
