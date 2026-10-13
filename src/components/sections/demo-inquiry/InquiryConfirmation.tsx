import { siteConfig } from '../../../config/site'

type InquiryConfirmationProps = {
  visible: boolean
}

export default function InquiryConfirmation({ visible }: InquiryConfirmationProps) {
  if (!visible) return null

  return (
    <p className="inquiry-notice" role="status">
      Your email app should open with your demo request prepared. Review and send it to complete your inquiry. If no email app opens, email {siteConfig.contactEmail} directly.
    </p>
  )
}
