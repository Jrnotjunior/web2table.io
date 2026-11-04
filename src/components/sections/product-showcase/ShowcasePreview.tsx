import type { ProductShowcaseViewId } from '../../../content/productShowcase'
import {
  OwnerPreview,
  KitchenPreview,
  CustomerPreview,
  DispatcherPreview,
  RiderPreview,
} from './PreviewScreens'

type ShowcasePreviewProps = {
  activeView: ProductShowcaseViewId
}

export default function ShowcasePreview({ activeView }: ShowcasePreviewProps) {
  const preview = activeView === 'owner'
    ? <OwnerPreview />
    : activeView === 'kitchen'
      ? <KitchenPreview />
      : activeView === 'customer'
        ? <CustomerPreview />
        : activeView === 'dispatcher'
          ? <DispatcherPreview />
          : <RiderPreview />

  return (
    <div
      id="showcase-panel"
      className="showcase-preview"
      role="tabpanel"
      aria-labelledby={'showcase-tab-' + activeView}
      tabIndex={0}
    >
      {preview}
    </div>
  )
}
