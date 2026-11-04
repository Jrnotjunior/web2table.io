import { ClipboardList, UserRound } from 'lucide-react'

export function CashierPreview() {
  return <div className="showcase-screen cashier-preview">
    <div className="preview-kitchen-top">
      <div><span className="preview-kicker">CASHIER WORKSPACE</span><h4>Customer orders</h4></div>
      <span className="preview-live"><i /> ORDER WORKFLOW</span>
    </div>
    <div className="preview-data-card">
      <div className="preview-card-heading"><strong>Order queue</strong><span>Illustrative preview</span></div>
      <div className="preview-table-head"><span>CUSTOMER</span><span>ORDER TYPE</span><span>STATUS</span></div>
      <div className="preview-table-row"><span><UserRound size={13} /> Alex Morgan <small>Order #1029</small></span><b className="preview-pill">Dine in</b><strong>New</strong></div>
      <div className="preview-table-row"><span><UserRound size={13} /> Jamie Lee <small>Order #1028</small></span><b className="preview-pill">Take out</b><strong>In progress</strong></div>
      <div className="preview-table-row"><span><UserRound size={13} /> Taylor Cruz <small>Order #1027</small></span><b className="preview-pill">Pick up</b><strong>Ready</strong></div>
    </div>
    <div className="preview-kitchen-note"><ClipboardList size={14} /> A focused workspace for handling customer orders.</div>
  </div>
}
