import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import SiteLayout from '../components/layout/SiteLayout'
import { policies } from '../content/legalPolicies'

export default function LegalPage() {
  const { pathname } = useLocation()
  const key = pathname.split('/').filter(Boolean).join('/')
  const policy = policies[key] ?? policies.privacy

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  useEffect(() => {
    document.title = `${policy.title} | Web2Table`
  }, [policy.title])

  return (
    <SiteLayout>
      <main className="legal-page">
        <div className="container legal-container">
          <p className="legal-kicker">WEB2TABLE · LEGAL</p>
          <h1>{policy.title}</h1>
          <p className="legal-updated">Last updated {policy.updated}</p>
          <p className="legal-intro">{policy.intro}</p>
          {policy.sections.map(section => (
            <section className="legal-section" key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </section>
          ))}
        </div>
      </main>
    </SiteLayout>
  )
}
