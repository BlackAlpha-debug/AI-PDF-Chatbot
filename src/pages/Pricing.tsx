import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'

const CHECK = (
  <svg className="w-5 h-5 text-secondary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const BLOCKED = (
  <svg className="w-5 h-5 text-on-surface-variant shrink-0 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
  </svg>
)

export function Pricing() {
  const [yearly, setYearly] = useState(false)
  const proPrice = yearly ? 15 : 19

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface">
      <Navbar />

      <main className="flex-grow flex flex-col items-center">
        {/* Hero */}
        <section className="w-full max-w-[1440px] mx-auto px-4 md:px-8 pt-16 pb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-xs font-semibold tracking-[0.05em]">Trusted by 50,000+ professionals</span>
          </div>
          <h1 className="text-5xl font-bold text-primary mb-6 tracking-tight">Simple, Transparent Pricing</h1>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
            Choose the plan that's right for your document workflow. No hidden fees, cancel anytime.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <span className="text-xs font-semibold text-on-surface-variant tracking-[0.05em]">Monthly</span>
            <button
              onClick={() => setYearly(!yearly)}
              className="relative w-14 h-7 bg-surface-container-high rounded-full p-1 focus:outline-none transition-colors"
            >
              <div
                className="w-5 h-5 bg-secondary rounded-full shadow-sm transition-all duration-300 ease-in-out"
                style={{ transform: yearly ? 'translateX(100%)' : 'translateX(0)' }}
              />
            </button>
            <span className="text-xs font-semibold text-on-surface-variant tracking-[0.05em] flex items-center gap-1">
              Yearly
              <span className="text-[10px] px-1.5 py-0.5 bg-error-container text-on-error-container rounded-full font-bold">
                SAVE 20%
              </span>
            </span>
          </div>
        </section>

        {/* Pricing Grid */}
        <section className="w-full max-w-[1440px] mx-auto px-4 md:px-8 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Free */}
            <div className="glass-card p-8 rounded-xl flex flex-col hover:border-outline-variant transition-colors duration-300">
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-on-surface mb-2">Free</h3>
                <p className="text-sm text-on-surface-variant mb-6">Essential tools for individuals.</p>
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-primary tracking-tight">$0</span>
                  <span className="text-base text-on-surface-variant ml-1">/mo</span>
                </div>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center gap-3">{CHECK}<span className="text-on-surface">3 PDFs per month</span></li>
                <li className="flex items-center gap-3">{CHECK}<span className="text-on-surface">50 questions/mo</span></li>
                <li className="flex items-center gap-3">{CHECK}<span className="text-on-surface">Standard support</span></li>
                <li className="flex items-center gap-3 opacity-30">{BLOCKED}<span className="text-on-surface">OCR Document Scanning</span></li>
              </ul>
              <Link
                to="/app"
                className="w-full py-3 px-6 border-2 border-outline-variant text-on-surface text-xs font-semibold tracking-[0.05em] rounded-lg hover:bg-surface-container-low transition-all duration-200 text-center"
              >
                Start for Free
              </Link>
            </div>

            {/* Pro */}
            <div className="relative bg-primary-container p-8 rounded-xl flex flex-col shadow-2xl z-10 md:-translate-y-4 border border-primary-container">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-secondary text-on-secondary rounded-full text-xs font-semibold tracking-[0.05em] uppercase shadow-lg">
                Most Popular
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-on-primary mb-2">Pro</h3>
                <p className="text-sm text-primary-fixed-dim mb-6">Unleash the power of AI analysis.</p>
                <div className="flex items-baseline text-on-primary">
                  <span className="text-5xl font-bold tracking-tight">${proPrice}</span>
                  <span className="text-base text-primary-fixed-dim ml-1">/mo</span>
                </div>
              </div>
              <ul className="space-y-4 mb-10 flex-grow text-on-primary">
                {['Unlimited PDFs', 'Unlimited questions', 'OCR Text Recognition', 'Priority API access', 'Team collaboration'].map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-secondary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/app"
                className="w-full py-4 px-6 bg-secondary text-on-secondary text-xl font-semibold rounded-lg hover:brightness-110 shadow-lg transition-all duration-200 active:scale-95 text-center"
              >
                Get Pro Access
              </Link>
            </div>

            {/* Enterprise */}
            <div className="glass-card p-8 rounded-xl flex flex-col hover:border-outline-variant transition-colors duration-300">
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-on-surface mb-2">Enterprise</h3>
                <p className="text-sm text-on-surface-variant mb-6">Scale and secure your workflow.</p>
                <div className="flex items-baseline">
                  <span className="text-3xl font-semibold text-primary" style={{ letterSpacing: '-0.01em' }}>Custom</span>
                </div>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {['Bulk PDF uploads', 'Dedicated Support Agent', 'SSO & SAML Login', 'Custom AI Model Training'].map((f) => (
                  <li key={f} className="flex items-center gap-3">{CHECK}<span className="text-on-surface">{f}</span></li>
                ))}
              </ul>
              <button className="w-full py-3 px-6 bg-surface-container-highest text-primary text-xs font-semibold tracking-[0.05em] rounded-lg hover:bg-surface-container-high transition-all duration-200">
                Contact Sales
              </button>
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="w-full bg-surface-container-low py-24">
          <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-primary mb-6" style={{ letterSpacing: '-0.01em' }}>
                Enterprise-Grade Document Security
              </h2>
              <p className="text-lg text-on-surface-variant mb-8">
                We prioritize your privacy. All documents are encrypted at rest and in transit. We never use your private data to train our public models.
              </p>
              <div className="flex gap-8">
                {[
                  { value: '256', label: 'AES BIT' },
                  { value: '99.9', label: 'UPTIME %' },
                  { value: 'GDPR', label: 'COMPLIANT' },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-3xl font-semibold text-secondary" style={{ letterSpacing: '-0.01em' }}>{s.value}</div>
                    <div className="text-xs font-semibold text-on-surface-variant tracking-[0.05em]">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-surface-container to-primary-container flex items-center justify-center p-8">
              {/* Security illustration */}
              <svg className="w-full h-full max-w-[320px] max-h-[300px]" viewBox="0 0 320 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Shield */}
                <path d="M160 30 L260 80 L260 170 Q260 240 160 275 Q60 240 60 170 L60 80 Z" className="fill-secondary" opacity="0.08" />
                <path d="M160 30 L260 80 L260 170 Q260 240 160 275 Q60 240 60 170 L60 80 Z" className="stroke-secondary" strokeWidth="2" fill="none" opacity="0.4" />
                {/* Inner shield */}
                <path d="M160 60 L235 98 L235 165 Q235 220 160 248 Q85 220 85 165 L85 98 Z" className="stroke-secondary" strokeWidth="1" fill="none" opacity="0.2" strokeDasharray="6 3" />
                {/* Lock icon */}
                <rect x="135" y="130" width="50" height="40" rx="8" className="fill-secondary" opacity="0.25" />
                <rect x="135" y="130" width="50" height="40" rx="8" className="stroke-secondary" strokeWidth="2" fill="none" opacity="0.6" />
                <path d="M145 130 L145 115 Q145 100 160 100 Q175 100 175 115 L175 130" className="stroke-secondary" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.6" />
                <circle cx="160" cy="150" r="5" className="fill-secondary" opacity="0.6" />
                <path d="M160 155 L160 162" className="stroke-secondary" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
                {/* Decorative nodes */}
                <circle cx="100" cy="100" r="4" className="fill-secondary" opacity="0.3" />
                <circle cx="220" cy="100" r="4" className="fill-secondary" opacity="0.3" />
                <circle cx="80" cy="180" r="3" className="fill-secondary" opacity="0.2" />
                <circle cx="240" cy="180" r="3" className="fill-secondary" opacity="0.2" />
                <line x1="104" y1="100" x2="135" y2="130" className="stroke-secondary" strokeWidth="1" opacity="0.15" />
                <line x1="216" y1="100" x2="185" y2="130" className="stroke-secondary" strokeWidth="1" opacity="0.15" />
              </svg>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-container/90 to-transparent p-8">
                <p className="text-on-primary italic text-sm">
                  "DocuMind transformed our research workflow. We now process hundreds of pages in minutes." — CTO, TechStream
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
