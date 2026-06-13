import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { Check, X as XIcon, Shield, Lock, Globe, Sparkles } from 'lucide-react'

export function Pricing() {
  const [yearly, setYearly] = useState(false)
  const proPrice = yearly ? 15 : 19

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface">
      <Navbar />

      <main className="flex-grow flex flex-col items-center">
        {/* Hero */}
        <section className="w-full max-w-[1440px] mx-auto px-6 md:px-8 pt-20 pb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/8 border border-secondary/15 mb-6">
            <Shield className="w-3.5 h-3.5 text-secondary" />
            <span className="text-xs font-semibold text-secondary tracking-wide">Trusted by 50,000+ professionals</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-5 tracking-tight">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed">
            Choose the plan that's right for your document workflow. No hidden fees, cancel anytime.
          </p>

          <div className="inline-flex items-center gap-3 p-1 bg-surface-container-high/50 rounded-full">
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                !yearly ? 'bg-surface-container-lowest shadow-sm text-primary' : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                yearly ? 'bg-surface-container-lowest shadow-sm text-primary' : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Yearly
              <span className="text-[10px] px-2 py-0.5 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full font-bold">
                -20%
              </span>
            </button>
          </div>
        </section>

        {/* Pricing Grid */}
        <section className="w-full max-w-[1440px] mx-auto px-6 md:px-8 pb-28">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5 mt-10 stagger">
            {/* Free */}
            <div className="glass-card p-8 rounded-2xl flex flex-col hover:translate-y-[-4px] transition-all duration-300 animate-fade-in-up">
              <div className="mb-8">
                <h3 className="text-lg font-bold text-on-surface mb-1">Free</h3>
                <p className="text-sm text-on-surface-variant mb-6">Essential tools for individuals.</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold text-primary tracking-tight">$0</span>
                  <span className="text-sm text-on-surface-variant font-medium">/mo</span>
                </div>
              </div>
              <ul className="space-y-3.5 mb-10 flex-grow">
                {[
                  { ok: true, text: '3 PDFs per month' },
                  { ok: true, text: '50 questions/mo' },
                  { ok: true, text: 'Standard support' },
                  { ok: false, text: 'OCR Document Scanning' },
                ].map(({ ok, text }) => (
                  <li key={text} className={`flex items-center gap-3 ${!ok ? 'opacity-40' : ''}`}>
                    {ok ? (
                      <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-secondary" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-on-surface/5 flex items-center justify-center shrink-0">
                        <XIcon className="w-3 h-3 text-on-surface-variant" />
                      </div>
                    )}
                    <span className="text-sm text-on-surface">{text}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/app"
                className="w-full py-3.5 px-6 border border-outline-variant/50 text-on-surface text-sm font-semibold rounded-xl hover:bg-surface-container-low hover:border-outline-variant transition-all duration-200 text-center active:scale-[0.98]"
              >
                Start for Free
              </Link>
            </div>

            {/* Pro */}
            <div className="relative p-8 rounded-2xl flex flex-col md:-translate-y-4 z-10 animate-fade-in-up overflow-hidden" style={{ animationDelay: '80ms' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#0d0a1e] via-[#1a1452] to-[#0d0a1e]" />
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/15 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
              </div>
              <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

              <div className="relative z-10 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-bold text-white">Pro</h3>
                  <span className="px-2.5 py-0.5 bg-[#5865f2]/20 border border-[#7b86ff]/20 text-[#c4a8d8] rounded-full text-[10px] font-bold tracking-wide">
                    POPULAR
                  </span>
                </div>
                <p className="text-sm text-[#b8a8d8]/60 mb-6">Unleash the power of AI analysis.</p>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-5xl font-extrabold text-white tracking-tight">${proPrice}</span>
                  <span className="text-sm text-[#b8a8d8]/60 font-medium">/mo</span>
                </div>

                <ul className="space-y-3.5 mb-10 flex-grow">
                  {['Unlimited PDFs', 'Unlimited questions', 'OCR Text Recognition', 'Priority API access', 'Team collaboration'].map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-400/15 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-[#c4a8d8]" />
                      </div>
                      <span className="text-sm text-[#e4e0f0]/90">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/app"
                  className="w-full py-4 px-6 bg-white text-[#0d0a1e] text-sm font-bold rounded-xl hover:bg-blue-50 shadow-xl shadow-black/20 transition-all duration-200 active:scale-[0.98] text-center"
                >
                  Get Pro Access
                </Link>
              </div>
            </div>

            {/* Enterprise */}
            <div className="glass-card p-8 rounded-2xl flex flex-col hover:translate-y-[-4px] transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '160ms' }}>
              <div className="mb-8">
                <h3 className="text-lg font-bold text-on-surface mb-1">Enterprise</h3>
                <p className="text-sm text-on-surface-variant mb-6">Scale and secure your workflow.</p>
                <div className="flex items-baseline">
                  <span className="text-3xl font-extrabold text-primary tracking-tight">Custom</span>
                </div>
              </div>
              <ul className="space-y-3.5 mb-10 flex-grow">
                {['Bulk PDF uploads', 'Dedicated Support Agent', 'SSO & SAML Login', 'Custom AI Model Training'].map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-secondary" />
                    </div>
                    <span className="text-sm text-on-surface">{f}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3.5 px-6 bg-surface-container-highest text-primary text-sm font-semibold rounded-xl hover:bg-surface-container-high transition-all duration-200 active:scale-[0.98]">
                Contact Sales
              </button>
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="w-full bg-surface-container-low py-28">
          <div className="max-w-[1440px] mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-secondary/8 border border-secondary/15">
                <Lock className="w-3.5 h-3.5 text-secondary" />
                <span className="text-xs font-semibold text-secondary">Enterprise Security</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6 tracking-tight">
                Enterprise-Grade<br />Document Security
              </h2>
              <p className="text-base text-on-surface-variant mb-10 leading-relaxed">
                We prioritize your privacy. All documents are encrypted at rest and in transit. We never use your private data to train our public models.
              </p>
              <div className="flex gap-10">
                {[
                  { value: '256', label: 'AES BIT' },
                  { value: '99.9%', label: 'UPTIME' },
                  { value: 'GDPR', label: 'COMPLIANT' },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-extrabold bg-gradient-to-r from-[var(--color-accent-start)] to-[var(--color-accent-end)] bg-clip-text text-transparent tracking-tight">
                      {s.value}
                    </div>
                    <div className="text-xs text-on-surface-variant font-medium tracking-wider mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#0d0a1e] to-[#1a1452] flex items-center justify-center p-10">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-10 w-48 h-48 bg-secondary/8 rounded-full blur-3xl" />
              </div>
              <svg className="w-full h-full max-w-[280px] max-h-[260px] relative z-10" viewBox="0 0 320 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M160 30 L260 80 L260 170 Q260 240 160 275 Q60 240 60 170 L60 80 Z" fill="url(#shield-grad)" opacity="0.15" />
                <path d="M160 30 L260 80 L260 170 Q260 240 160 275 Q60 240 60 170 L60 80 Z" stroke="url(#shield-stroke)" strokeWidth="2" fill="none" opacity="0.5" />
                <path d="M160 60 L235 98 L235 165 Q235 220 160 248 Q85 220 85 165 L85 98 Z" stroke="#7b86ff" strokeWidth="1" fill="none" opacity="0.2" strokeDasharray="6 3" />
                <rect x="135" y="130" width="50" height="40" rx="8" fill="#7b86ff" opacity="0.2" />
                <rect x="135" y="130" width="50" height="40" rx="8" stroke="#7b86ff" strokeWidth="2" fill="none" opacity="0.5" />
                <path d="M145 130 L145 115 Q145 100 160 100 Q175 100 175 115 L175 130" stroke="#7b86ff" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.5" />
                <circle cx="160" cy="150" r="5" fill="#7b86ff" opacity="0.6" />
                <path d="M160 155 L160 162" stroke="#7b86ff" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
                <defs>
                  <linearGradient id="shield-grad" x1="60" y1="30" x2="260" y2="275"><stop stopColor="#5865f2" /><stop offset="1" stopColor="#4f9cf7" /></linearGradient>
                  <linearGradient id="shield-stroke" x1="60" y1="30" x2="260" y2="275"><stop stopColor="#7b86ff" /><stop offset="1" stopColor="#5865f2" /></linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
