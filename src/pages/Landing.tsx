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
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg className="absolute -top-32 -left-32 w-[600px] h-[600px] opacity-[0.04]" viewBox="0 0 400 400" fill="none">
              <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="0.5" className="text-secondary" />
              <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="0.5" className="text-secondary" />
              <circle cx="200" cy="200" r="110" stroke="currentColor" strokeWidth="0.5" className="text-secondary" />
              <circle cx="200" cy="200" r="70" stroke="currentColor" strokeWidth="0.5" className="text-secondary" />
            </svg>
            <svg className="absolute bottom-0 right-0 w-[400px] h-[400px] opacity-[0.03]" viewBox="0 0 200 200" fill="none">
              <rect x="20" y="20" width="160" height="160" rx="20" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
              <rect x="50" y="50" width="100" height="100" rx="12" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
              <rect x="75" y="75" width="50" height="50" rx="6" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
            </svg>
          </div>
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
                <div className="w-full aspect-[16/10] rounded-lg bg-gradient-to-br from-surface-container-low to-surface-container-high flex items-center justify-center border border-outline-variant/30 overflow-hidden">
                  {/* App mockup illustration */}
                  <svg className="w-full h-full" viewBox="0 0 640 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Sidebar */}
                    <rect x="0" y="0" width="160" height="400" className="fill-surface-container" />
                    <rect x="20" y="20" width="24" height="24" rx="6" className="fill-secondary" />
                    <rect x="52" y="26" width="80" height="12" rx="4" className="fill-on-surface" opacity="0.7" />
                    <rect x="20" y="64" width="120" height="32" rx="8" className="fill-secondary" opacity="0.9" />
                    <rect x="52" y="76" width="60" height="8" rx="3" fill="white" opacity="0.9" />
                    <rect x="20" y="112" width="120" height="28" rx="6" className="fill-secondary" opacity="0.08" />
                    <rect x="20" y="148" width="120" height="28" rx="6" opacity="0" />
                    <rect x="20" y="184" width="120" height="28" rx="6" opacity="0" />
                    <circle cx="34" cy="126" r="6" className="fill-secondary" opacity="0.4" />
                    <rect x="46" y="122" width="50" height="8" rx="3" className="fill-on-surface" opacity="0.3" />
                    <circle cx="34" cy="162" r="6" className="fill-on-surface" opacity="0.15" />
                    <rect x="46" y="158" width="40" height="8" rx="3" className="fill-on-surface" opacity="0.15" />
                    <circle cx="34" cy="198" r="6" className="fill-on-surface" opacity="0.15" />
                    <rect x="46" y="194" width="45" height="8" rx="3" className="fill-on-surface" opacity="0.15" />

                    {/* Chat area */}
                    <rect x="160" y="0" width="280" height="400" className="fill-surface-container-low" />
                    {/* Top bar */}
                    <rect x="160" y="0" width="280" height="44" className="fill-surface" opacity="0.8" />
                    <rect x="176" y="16" width="100" height="10" rx="3" className="fill-on-surface" opacity="0.3" />
                    {/* User message */}
                    <rect x="300" y="65" width="120" height="36" rx="12" className="fill-secondary" />
                    <rect x="316" y="78" width="88" height="8" rx="3" fill="white" opacity="0.8" />
                    {/* AI message */}
                    <rect x="176" y="116" width="180" height="72" rx="12" className="fill-surface-container-lowest" opacity="0.8" />
                    <rect x="192" y="132" width="148" height="6" rx="2" className="fill-on-surface" opacity="0.25" />
                    <rect x="192" y="144" width="130" height="6" rx="2" className="fill-on-surface" opacity="0.2" />
                    <rect x="192" y="156" width="140" height="6" rx="2" className="fill-on-surface" opacity="0.2" />
                    <rect x="192" y="168" width="90" height="6" rx="2" className="fill-on-surface" opacity="0.15" />
                    {/* User message 2 */}
                    <rect x="270" y="205" width="150" height="36" rx="12" className="fill-secondary" />
                    <rect x="286" y="218" width="118" height="8" rx="3" fill="white" opacity="0.8" />
                    {/* AI message 2 */}
                    <rect x="176" y="256" width="200" height="56" rx="12" className="fill-surface-container-lowest" opacity="0.8" />
                    <rect x="192" y="272" width="168" height="6" rx="2" className="fill-on-surface" opacity="0.25" />
                    <rect x="192" y="284" width="150" height="6" rx="2" className="fill-on-surface" opacity="0.2" />
                    <rect x="192" y="296" width="100" height="6" rx="2" className="fill-on-surface" opacity="0.15" />
                    {/* Input bar */}
                    <rect x="176" y="350" width="248" height="36" rx="12" className="fill-surface-container-lowest" opacity="0.6" />
                    <rect x="192" y="364" width="80" height="8" rx="3" className="fill-on-surface" opacity="0.12" />
                    <rect x="398" y="356" width="22" height="22" rx="6" className="fill-secondary" opacity="0.8" />

                    {/* PDF viewer area */}
                    <rect x="440" y="0" width="200" height="400" className="fill-surface-container-lowest" />
                    <rect x="440" y="0" width="200" height="44" className="fill-surface" opacity="0.8" />
                    <rect x="456" y="16" width="60" height="10" rx="3" className="fill-on-surface" opacity="0.3" />
                    {/* PDF page */}
                    <rect x="468" y="60" width="144" height="196" rx="4" className="fill-surface" stroke="currentColor" strokeWidth="1" className="stroke-outline-variant" opacity="0.5" />
                    <rect x="484" y="80" width="112" height="6" rx="2" className="fill-on-surface" opacity="0.15" />
                    <rect x="484" y="94" width="100" height="4" rx="2" className="fill-on-surface" opacity="0.1" />
                    <rect x="484" y="104" width="108" height="4" rx="2" className="fill-on-surface" opacity="0.1" />
                    <rect x="484" y="114" width="90" height="4" rx="2" className="fill-on-surface" opacity="0.1" />
                    <rect x="484" y="124" width="105" height="4" rx="2" className="fill-on-surface" opacity="0.1" />
                    <rect x="484" y="140" width="112" height="6" rx="2" className="fill-on-surface" opacity="0.15" />
                    <rect x="484" y="154" width="95" height="4" rx="2" className="fill-on-surface" opacity="0.1" />
                    <rect x="484" y="164" width="108" height="4" rx="2" className="fill-on-surface" opacity="0.1" />
                    <rect x="484" y="174" width="80" height="4" rx="2" className="fill-on-surface" opacity="0.1" />
                    <rect x="484" y="190" width="112" height="6" rx="2" className="fill-on-surface" opacity="0.15" />
                    <rect x="484" y="204" width="100" height="4" rx="2" className="fill-on-surface" opacity="0.1" />
                    <rect x="484" y="214" width="90" height="4" rx="2" className="fill-on-surface" opacity="0.1" />
                    <rect x="484" y="224" width="105" height="4" rx="2" className="fill-on-surface" opacity="0.1" />
                    {/* Page nav */}
                    <rect x="500" y="276" width="80" height="24" rx="6" className="fill-surface-container" opacity="0.5" />
                    <rect x="520" y="284" width="40" height="8" rx="3" className="fill-on-surface" opacity="0.2" />
                  </svg>
                </div>
                {/* Floating badge */}
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
                {/* Floating badge - top right */}
                <div className="absolute -top-4 -right-4 glass-card p-3 rounded-xl shadow-xl hidden sm:block">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-secondary rounded-full flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span className="text-xs font-semibold text-primary">Gemini 2.0 Flash</span>
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
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-outline-variant/30 bg-gradient-to-br from-surface-container-low to-surface-container-high h-[500px] flex items-center justify-center p-8">
                  {/* Workflow illustration */}
                  <svg className="w-full h-full max-w-[380px]" viewBox="0 0 380 420" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Step 1 - Upload */}
                    <rect x="40" y="10" width="300" height="100" rx="16" className="fill-surface-container-lowest" opacity="0.8" />
                    <rect x="60" y="30" width="56" height="60" rx="8" className="fill-secondary" opacity="0.12" />
                    <path d="M88 48 L88 72 M76 60 L88 48 L100 60" className="stroke-secondary" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="132" y="38" width="120" height="10" rx="4" className="fill-on-surface" opacity="0.5" />
                    <rect x="132" y="56" width="180" height="6" rx="3" className="fill-on-surface" opacity="0.2" />
                    <rect x="132" y="68" width="150" height="6" rx="3" className="fill-on-surface" opacity="0.15" />
                    <rect x="132" y="80" width="100" height="6" rx="3" className="fill-on-surface" opacity="0.1" />

                    {/* Arrow 1 */}
                    <path d="M190 118 L190 148" className="stroke-secondary" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" opacity="0.5" />
                    <path d="M184 142 L190 152 L196 142" className="fill-secondary" opacity="0.5" />

                    {/* Step 2 - Process */}
                    <rect x="40" y="158" width="300" height="100" rx="16" className="fill-surface-container-lowest" opacity="0.8" />
                    <rect x="60" y="178" width="56" height="60" rx="8" className="fill-secondary" opacity="0.12" />
                    {/* Brain/AI icon */}
                    <circle cx="88" cy="208" r="16" className="stroke-secondary" strokeWidth="2" opacity="0.8" />
                    <path d="M80 204 Q84 196 88 204 Q92 196 96 204" className="stroke-secondary" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
                    <path d="M80 212 Q84 220 88 212 Q92 220 96 212" className="stroke-secondary" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
                    <rect x="132" y="186" width="140" height="10" rx="4" className="fill-on-surface" opacity="0.5" />
                    <rect x="132" y="204" width="180" height="6" rx="3" className="fill-on-surface" opacity="0.2" />
                    <rect x="132" y="216" width="160" height="6" rx="3" className="fill-on-surface" opacity="0.15" />
                    <rect x="132" y="228" width="120" height="6" rx="3" className="fill-on-surface" opacity="0.1" />

                    {/* Arrow 2 */}
                    <path d="M190 266 L190 296" className="stroke-secondary" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" opacity="0.5" />
                    <path d="M184 290 L190 300 L196 290" className="fill-secondary" opacity="0.5" />

                    {/* Step 3 - Chat */}
                    <rect x="40" y="306" width="300" height="100" rx="16" className="fill-surface-container-lowest" opacity="0.8" />
                    <rect x="60" y="326" width="56" height="60" rx="8" className="fill-secondary" opacity="0.12" />
                    {/* Chat icon */}
                    <rect x="74" y="340" width="28" height="22" rx="6" className="stroke-secondary" strokeWidth="2" fill="none" opacity="0.8" />
                    <path d="M80 358 L74 366" className="stroke-secondary" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
                    <rect x="80" y="348" width="14" height="3" rx="1.5" className="fill-secondary" opacity="0.4" />
                    <rect x="80" y="354" width="10" height="3" rx="1.5" className="fill-secondary" opacity="0.3" />
                    <rect x="132" y="334" width="100" height="10" rx="4" className="fill-on-surface" opacity="0.5" />
                    <rect x="132" y="352" width="180" height="6" rx="3" className="fill-on-surface" opacity="0.2" />
                    <rect x="132" y="364" width="140" height="6" rx="3" className="fill-on-surface" opacity="0.15" />
                    <rect x="132" y="376" width="160" height="6" rx="3" className="fill-on-surface" opacity="0.1" />
                  </svg>
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
              {/* Background decoration */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <svg className="absolute -top-16 -left-16 w-[350px] h-[350px] opacity-[0.07]" viewBox="0 0 300 300" fill="none">
                  <circle cx="150" cy="150" r="140" stroke="white" strokeWidth="1" />
                  <circle cx="150" cy="150" r="100" stroke="white" strokeWidth="1" />
                  <circle cx="150" cy="150" r="60" stroke="white" strokeWidth="1" />
                  <circle cx="150" cy="150" r="20" fill="white" opacity="0.3" />
                </svg>
                <svg className="absolute -bottom-20 -right-20 w-[400px] h-[400px] opacity-[0.06]" viewBox="0 0 400 400" fill="none">
                  <path d="M200 20 L380 200 L200 380 L20 200 Z" stroke="white" strokeWidth="1" />
                  <path d="M200 80 L320 200 L200 320 L80 200 Z" stroke="white" strokeWidth="1" />
                  <path d="M200 140 L260 200 L200 260 L140 200 Z" stroke="white" strokeWidth="1" />
                </svg>
                <svg className="absolute top-8 right-32 w-[120px] h-[120px] opacity-[0.08]" viewBox="0 0 100 100" fill="none">
                  <rect x="10" y="10" width="80" height="80" rx="12" stroke="white" strokeWidth="1" />
                  <path d="M30 50 L45 35 L55 45 L70 30" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="30" cy="50" r="3" fill="white" opacity="0.5" />
                  <circle cx="70" cy="30" r="3" fill="white" opacity="0.5" />
                </svg>
                <svg className="absolute bottom-12 left-24 w-[100px] h-[100px] opacity-[0.07]" viewBox="0 0 80 80" fill="none">
                  <path d="M40 5 L75 40 L40 75 L5 40 Z" stroke="white" strokeWidth="1" />
                  <circle cx="40" cy="40" r="12" stroke="white" strokeWidth="1" />
                </svg>
              </div>
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
