import { Link } from 'react-router-dom'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'

const FEATURES = [
  {
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    title: 'Smart Extraction',
    desc: 'Beyond OCR. Our engine understands tables, charts, and handwritten notes within complex PDFs with 99% accuracy.',
  },
  {
    icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
    title: 'Contextual Chat',
    desc: 'Deep document understanding. Ask complex questions across multiple files and get cross-referenced answers.',
  },
  {
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
    title: 'Instant Summaries',
    desc: 'Turn 500-page reports into actionable bullet points. Identify key risks, opportunities, and findings in seconds.',
  },
]

const STEPS = [
  {
    num: 1,
    title: 'Upload Your Files',
    desc: 'Drag and drop PDFs, docs, or spreadsheets. Our secure pipeline encrypts your data instantly.',
  },
  {
    num: 2,
    title: 'AI Processing',
    desc: 'DocuMind indexes the entire context, mapping relationships between concepts and data points.',
  },
  {
    num: 3,
    title: 'Start Interaction',
    desc: 'Ask anything. Extract citations, generate reports, or translate insights into any language.',
  },
]

export function Landing() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="hero-gradient relative overflow-hidden pt-20 pb-32">
          <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="z-10 text-center lg:text-left">
              <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant text-xs font-semibold tracking-[0.05em]">
                AI-POWERED INTELLIGENCE
              </span>
              <h1 className="text-5xl font-bold text-primary mb-6 leading-tight tracking-tight">
                Your PDFs, <br />Now With a <span className="text-secondary">Brain.</span>
              </h1>
              <p className="text-lg text-on-surface-variant mb-10 max-w-xl mx-auto lg:mx-0">
                Chat with any document, extract insights instantly, and automate your research with DocuMind AI. Join thousands of researchers and professionals today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/app"
                  className="bg-secondary text-on-secondary px-8 py-4 rounded-lg text-xl font-semibold hover:scale-[1.02] transition-transform shadow-lg shadow-secondary/20 text-center"
                >
                  Get Started for Free
                </Link>
                <button className="glass-card text-primary px-8 py-4 rounded-lg text-xl font-semibold hover:bg-surface-container-low transition-colors flex items-center justify-center gap-2">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Watch Demo
                </button>
              </div>
            </div>

            <div className="relative z-10 lg:pl-12">
              <div className="glass-card rounded-2xl p-4 shadow-2xl relative">
                <div className="w-full aspect-[16/10] rounded-lg bg-gradient-to-br from-surface-container-low to-surface-container-high flex items-center justify-center border border-outline-variant/30">
                  <div className="text-center space-y-4 p-8">
                    <div className="flex gap-3 justify-center">
                      <div className="w-1/2 h-48 bg-surface-container-lowest/60 rounded-lg border border-outline-variant/20 p-4 flex flex-col gap-2">
                        <div className="h-3 bg-outline-variant/30 rounded w-3/4" />
                        <div className="h-2 bg-outline-variant/20 rounded w-full" />
                        <div className="h-2 bg-outline-variant/20 rounded w-full" />
                        <div className="h-2 bg-outline-variant/20 rounded w-5/6" />
                        <div className="h-2 bg-outline-variant/20 rounded w-full" />
                        <div className="h-2 bg-outline-variant/20 rounded w-2/3" />
                      </div>
                      <div className="w-1/2 h-48 bg-surface-container-lowest/60 rounded-lg border border-outline-variant/20 p-4 flex flex-col gap-2">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-6 h-6 rounded-full bg-secondary/20" />
                          <div className="h-2 bg-outline-variant/30 rounded w-20" />
                        </div>
                        <div className="flex-1 bg-secondary/5 rounded-lg p-2">
                          <div className="h-2 bg-secondary/20 rounded w-full mb-1" />
                          <div className="h-2 bg-secondary/20 rounded w-4/5" />
                        </div>
                        <div className="h-8 bg-surface-container rounded-lg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-xl shadow-xl max-w-[240px] hidden sm:block">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <span className="text-xs font-semibold text-primary">Summarizing Page 12...</span>
                  </div>
                  <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                    <div className="h-full bg-secondary-container ai-pulse w-3/4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 bg-surface">
          <div className="max-w-[1440px] mx-auto px-8 text-center mb-16">
            <h2 className="text-3xl font-semibold text-primary mb-4" style={{ letterSpacing: '-0.01em' }}>
              Precision Analysis Tools
            </h2>
            <p className="text-base text-on-surface-variant max-w-2xl mx-auto">
              Stop ctrl+f searching. Use our advanced AI layer to talk directly to the source material.
            </p>
          </div>
          <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES.map((f) => (
              <div key={f.title} className="glass-card p-8 rounded-2xl hover:translate-y-[-8px] transition-all duration-300 group">
                <div className="w-14 h-14 bg-surface-container-high rounded-xl flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{f.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it Works */}
        <section className="py-24 bg-surface-container-lowest">
          <div className="max-w-[1440px] mx-auto px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-semibold text-primary mb-8" style={{ letterSpacing: '-0.01em' }}>
                  Effortless Workflow
                </h2>
                <div className="space-y-12">
                  {STEPS.map((s) => (
                    <div key={s.num} className="flex gap-6">
                      <div className="shrink-0 w-10 h-10 bg-primary text-on-primary rounded-full flex items-center justify-center font-bold">
                        {s.num}
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-primary mb-2">{s.title}</h4>
                        <p className="text-base text-on-surface-variant">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-outline-variant/30 bg-gradient-to-br from-surface-container-low to-surface-container-high h-[500px] flex items-center justify-center">
                  <div className="text-center space-y-4 p-12">
                    <div className="w-20 h-20 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-primary">AI-Powered Analysis</h3>
                    <p className="text-on-surface-variant max-w-sm">Upload any document and get instant insights with our advanced AI engine</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <div className="mb-8">
              <svg className="w-16 h-16 text-secondary mx-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <blockquote className="text-2xl font-semibold text-primary italic mb-10 leading-relaxed" style={{ letterSpacing: '-0.01em' }}>
              "DocuMind AI transformed how our legal team handles due diligence. What used to take weeks of manual review now takes hours. It's not just a tool; it's a force multiplier for our researchers."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-secondary-container flex items-center justify-center text-on-secondary text-xl font-bold">
                MS
              </div>
              <div className="text-left">
                <p className="text-xl font-semibold text-primary">Marcus Sterling</p>
                <p className="text-sm text-on-surface-variant">Director of Innovation, Global Legal Partners</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-[1440px] mx-auto px-8">
            <div className="bg-primary-container rounded-[2rem] p-12 lg:p-20 text-center relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-5xl font-bold text-on-primary mb-6 tracking-tight">
                  Ready to Supercharge Your Reading?
                </h2>
                <p className="text-lg text-on-primary-container max-w-2xl mx-auto mb-10">
                  Join over 50,000+ users who are already using DocuMind AI to work smarter, not harder. Start your free trial today.
                </p>
                <Link
                  to="/app"
                  className="inline-block bg-secondary text-on-secondary px-10 py-5 rounded-xl text-xl font-semibold hover:scale-105 transition-transform shadow-xl"
                >
                  Get Started for Free
                </Link>
                <p className="mt-6 text-on-primary-container text-xs font-semibold tracking-[0.05em]">
                  No credit card required. Cancel anytime.
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
