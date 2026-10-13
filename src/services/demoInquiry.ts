import { siteConfig } from '../config/site'

export type DemoInquiryFields = {
  contactName: FormDataEntryValue | null
  restaurantName: FormDataEntryValue | null
  email: FormDataEntryValue | null
  phone: FormDataEntryValue | null
  restaurantType: FormDataEntryValue | null
  locations: FormDataEntryValue | null
  packageName: FormDataEntryValue | null
  demoTime: FormDataEntryValue | null
  currentSetup: FormDataEntryValue | null
  details: FormDataEntryValue | null
}

function clean(value: FormDataEntryValue | null, fallback = ''): string {
  return String(value ?? '').trim() || fallback
}

export function buildDemoInquiryEmail(fields: DemoInquiryFields) {
  const rows: [string, string][] = [
    ['Contact person', clean(fields.contactName)],
    ['Restaurant name', clean(fields.restaurantName)],
    ['Email', clean(fields.email)],
    ['Phone / messaging number', clean(fields.phone)],
    ['Restaurant type', clean(fields.restaurantType)],
    ['Number of locations', clean(fields.locations)],
    ['Package of interest', clean(fields.packageName)],
    ['Preferred demo date and time', clean(fields.demoTime, 'Flexible')],
    ['Current POS / ordering setup', clean(fields.currentSetup, 'Not provided')],
    ['Additional details', clean(fields.details, 'None')],
  ]
  const subject = 'Private Web2Table demo inquiry - ' + clean(fields.restaurantName, 'Restaurant')
  const body = [
    'Hello Web2Table team,',
    '',
    'I would like to arrange a private product walkthrough.',
    '',
    ...rows.map(([label, value]) => label + ': ' + value),
    '',
    'I have reviewed the website privacy notice and agree to be contacted about this inquiry.',
  ].join('\n')

  return { to: siteConfig.contactEmail, subject, body }
}

export function openDemoInquiryInGmail(fields: DemoInquiryFields): void {
  const { to, subject, body } = buildDemoInquiryEmail(fields)
  const gmailComposeUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=' +
    encodeURIComponent(to) + '&su=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body)
  // Open first so browsers can report whether the popup was created, then sever
  // the opener reference to prevent the new tab from controlling this page.
  const gmailWindow = window.open(gmailComposeUrl, '_blank')

  if (gmailWindow) {
    gmailWindow.opener = null
    return
  }

  window.location.href = 'mailto:' + encodeURIComponent(to) +
    '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body)
}
