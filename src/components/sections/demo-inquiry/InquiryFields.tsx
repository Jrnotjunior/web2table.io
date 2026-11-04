export default function InquiryFields() {
  return (
    <div className="inquiry-fields">
      <label>Contact person *<input name="contactName" autoComplete="name" required maxLength={100} /></label>
      <label>Restaurant name *<input name="restaurantName" required maxLength={120} /></label>
      <label>Email address *<input name="email" type="email" autoComplete="email" required maxLength={254} /></label>
      <label>Phone / messaging number *<input name="phone" type="tel" autoComplete="tel" required maxLength={40} /></label>
      <label>Restaurant type *<select name="restaurantType" required defaultValue=""><option value="" disabled>Select type</option><option>Restaurant</option><option>Café / coffee shop</option><option>Fast food / quick service</option><option>Cloud kitchen</option><option>Food stall</option><option>Other</option></select></label>
      <label>Number of locations *<select name="locations" required defaultValue=""><option value="" disabled>Select number</option><option>1</option><option>2–5</option><option>6–10</option><option>11+</option></select></label>
      <label className="inquiry-wide">Platform plan<input value="Complete Web2Table Platform" readOnly /><input type="hidden" name="package" value="Complete Web2Table Platform" /></label>
      <label className="inquiry-wide">Preferred demo date and time<input name="demoTime" placeholder="e.g. weekday afternoon, or a preferred date" maxLength={120} /></label>
      <label className="inquiry-wide">Current ordering setup<textarea name="currentSetup" rows={2} maxLength={500} placeholder="Optional" /></label>
      <label className="inquiry-wide">Anything else we should know?<textarea name="details" rows={3} maxLength={1000} placeholder="Optional" /></label>
    </div>
  )
}
