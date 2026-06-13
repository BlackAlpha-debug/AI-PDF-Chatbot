import { Link } from 'react-router-dom'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { ArrowRight, Sparkles, Zap, FileSearch, MessageSquareText, ListChecks, Play, Star, Shield, Clock, Users } from 'lucide-react'

const FEATURES = [
  {
    icon: FileSearch,
    title: 'Smart Extraction',
    desc: 'Beyond OCR. Our engine understands tables, charts, and handwritten notes within complex PDFs with 99% accuracy.',
  },
  {
    icon: MessageSquareText,
    title: 'Contextual Chat',
    desc: 'Deep document understanding. Ask complex questions across multiple files and get cross-referenced answers.',
  },
  {
    icon: ListChecks,
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

const STATS = [
  { icon: Users, value: '50K+', label: 'Active Users' },
  { icon: FileSearch, value: '2M+', label: 'PDFs Analyzed' },
  { icon: Clock, value: '<3s', label: 'Avg Response' },
  { icon: Star, value: '4.9', label: 'User Rating' },
]

export function Landing() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background">
      <Navbar />

      <main>
        {/* ── Hero ── */}
        <section className="hero-gradient relative overflow-hidden pt-24 pb-36">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-[10%] w-72 h-72 bg-secondary/[0.04] rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-[15%] w-96 h-96 bg-secondary/[0.03] rounded-full blur-3xl" />
            <svg className="absolute -top-32 -left-32 w-[600px] h-[600px] opacity-[0.03]" viewBox="0 0 400 400" fill="none">
              <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="0.5" className="text-secondary" />
              <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="0.5" className="text-secondary" />
              <circle cx="200" cy="200" r="110" stroke="currentColor" strokeWidth="0.5" className="text-secondary" />
            </svg>
          </div>

          <div className="max-w-[1440px] mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="z-10 text-center lg:text-left animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-secondary/8 border border-secondary/15">
                <Sparkles className="w-3.5 h-3.5 text-secondary" />
                <span className="text-xs font-semibold text-secondary tracking-wide">AI-POWERED INTELLIGENCE</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-extrabold text-primary mb-6 leading-[1.1] tracking-tight">
                Your PDFs, <br />Now With a{' '}
                <span className="bg-gradient-to-r from-[var(--color-accent-start)] to-[var(--color-accent-end)] bg-clip-text text-transparent">
                  Brain.
                </span>
              </h1>

              <p className="text-lg text-on-surface-variant mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Chat with any document, extract insights instantly, and automate your research with DocuMind AI. Join thousands of researchers and professionals today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/app"
                  className="btn-gradient px-8 py-4 rounded-xl text-lg font-semibold shadow-xl shadow-secondary/20 hover:shadow-2xl hover:shadow-secondary/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2"
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button className="glass-card text-primary px-8 py-4 rounded-xl text-lg font-semibold hover:bg-surface-container-low transition-all duration-200 flex items-center justify-center gap-2 group">
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <Play className="w-4 h-4 text-secondary ml-0.5" />
                  </div>
                  Watch Demo
                </button>
              </div>
            </div>

            <div className="relative z-10 lg:pl-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="glass-card rounded-2xl p-3 shadow-2xl glow-ring relative">
                <div className="w-full aspect-[16/10] rounded-xl bg-gradient-to-br from-surface-container-low to-surface-container-high flex items-center justify-center border border-outline-variant/20 overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 640 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" y="0" width="160" height="400" className="fill-surface-container" />
                    <rect x="20" y="20" width="24" height="24" rx="6" className="fill-secondary" />
                    <rect x="52" y="26" width="80" height="12" rx="4" className="fill-on-surface" opacity="0.7" />
                    <rect x="20" y="64" width="120" height="32" rx="8" className="fill-secondary" opacity="0.9" />
                    <rect x="52" y="76" width="60" height="8" rx="3" fill="white" opacity="0.9" />
                    <rect x="20" y="112" width="120" height="28" rx="6" className="fill-secondary" opacity="0.08" />
                    <circle cx="34" cy="126" r="6" className="fill-secondary" opacity="0.4" />
                    <rect x="46" y="122" width="50" height="8" rx="3" className="fill-on-surface" opacity="0.3" />
                    <circle cx="34" cy="162" r="6" className="fill-on-surface" opacity="0.15" />
                    <rect x="46" y="158" width="40" height="8" rx="3" className="fill-on-surface" opacity="0.15" />
                    <circle cx="34" cy="198" r="6" className="fill-on-surface" opacity="0.15" />
                    <rect x="46" y="194" width="45" height="8" rx="3" className="fill-on-surface" opacity="0.15" />
                    <rect x="160" y="0" width="280" height="400" className="fill-surface-container-low" />
                    <rect x="160" y="0" width="280" height="44" className="fill-surface" opacity="0.8" />
                    <rect x="176" y="16" width="100" height="10" rx="3" className="fill-on-surface" opacity="0.3" />
                    <rect x="300" y="65" width="120" height="36" rx="12" className="fill-secondary" />
                    <rect x="316" y="78" width="88" height="8" rx="3" fill="white" opacity="0.8" />
                    <rect x="176" y="116" width="180" height="72" rx="12" className="fill-surface-container-lowest" opacity="0.8" />
                    <rect x="192" y="132" width="148" height="6" rx="2" className="fill-on-surface" opacity="0.25" />
                    <rect x="192" y="144" width="130" height="6" rx="2" className="fill-on-surface" opacity="0.2" />
                    <rect x="192" y="156" width="140" height="6" rx="2" className="fill-on-surface" opacity="0.2" />
                    <rect x="192" y="168" width="90" height="6" rx="2" className="fill-on-surface" opacity="0.15" />
                    <rect x="270" y="205" width="150" height="36" rx="12" className="fill-secondary" />
                    <rect x="286" y="218" width="118" height="8" rx="3" fill="white" opacity="0.8" />
                    <rect x="176" y="256" width="200" height="56" rx="12" className="fill-surface-container-lowest" opacity="0.8" />
                    <rect x="192" y="272" width="168" height="6" rx="2" className="fill-on-surface" opacity="0.25" />
                    <rect x="192" y="284" width="150" height="6" rx="2" className="fill-on-surface" opacity="0.2" />
                    <rect x="192" y="296" width="100" height="6" rx="2" className="fill-on-surface" opacity="0.15" />
                    <rect x="176" y="350" width="248" height="36" rx="12" className="fill-surface-container-lowest" opacity="0.6" />
                    <rect x="192" y="364" width="80" height="8" rx="3" className="fill-on-surface" opacity="0.12" />
                    <rect x="398" y="356" width="22" height="22" rx="6" className="fill-secondary" opacity="0.8" />
                    <rect x="440" y="0" width="200" height="400" className="fill-surface-container-lowest" />
                    <rect x="440" y="0" width="200" height="44" className="fill-surface" opacity="0.8" />
                    <rect x="456" y="16" width="60" height="10" rx="3" className="fill-on-surface" opacity="0.3" />
                    <rect x="468" y="60" width="144" height="196" rx="4" className="fill-surface" opacity="0.5" />
                    <rect x="484" y="80" width="112" height="6" rx="2" className="fill-on-surface" opacity="0.15" />
                    <rect x="484" y="94" width="100" height="4" rx="2" className="fill-on-surface" opacity="0.1" />
                    <rect x="484" y="104" width="108" height="4" rx="2" className="fill-on-surface" opacity="0.1" />
                    <rect x="484" y="114" width="90" height="4" rx="2" className="fill-on-surface" opacity="0.1" />
                    <rect x="484" y="140" width="112" height="6" rx="2" className="fill-on-surface" opacity="0.15" />
                    <rect x="484" y="154" width="95" height="4" rx="2" className="fill-on-surface" opacity="0.1" />
                    <rect x="484" y="164" width="108" height="4" rx="2" className="fill-on-surface" opacity="0.1" />
                    <rect x="484" y="190" width="112" height="6" rx="2" className="fill-on-surface" opacity="0.15" />
                    <rect x="484" y="204" width="100" height="4" rx="2" className="fill-on-surface" opacity="0.1" />
                    <rect x="484" y="214" width="90" height="4" rx="2" className="fill-on-surface" opacity="0.1" />
                    <rect x="500" y="276" width="80" height="24" rx="6" className="fill-surface-container" opacity="0.5" />
                    <rect x="520" y="284" width="40" height="8" rx="3" className="fill-on-surface" opacity="0.2" />
                  </svg>
                </div>

                <div className="absolute -bottom-5 -left-5 glass-card p-3.5 rounded-xl shadow-xl hidden sm:block animate-float">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-secondary to-[var(--color-accent-end)] flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-xs font-semibold text-primary">Summarizing Page 12...</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[var(--color-accent-start)] to-[var(--color-accent-end)] ai-pulse w-3/4 rounded-full" />
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 glass-card p-3 rounded-xl shadow-xl hidden sm:block animate-float-delayed">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-gradient-to-br from-secondary to-[var(--color-accent-end)] rounded-lg flex items-center justify-center">
                      <Zap className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-xs font-semibold text-primary">Gemini 2.0 Flash</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats Bar ── */}
        <section className="relative -mt-16 z-20">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="glass-card rounded-2xl p-6 md:p-8 shadow-xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                {STATS.map(({ icon: Icon, value, label }) => (
                  <div key={label} className="text-center">
                    <div className="w-10 h-10 rounded-xl bg-secondary/8 flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-5 h-5 text-secondary" />
                    </div>
                    <div className="text-2xl font-extrabold text-primary tracking-tight">{value}</div>
                    <div className="text-xs text-on-surface-variant font-medium mt-0.5">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="py-28 bg-surface section-fade">
          <div className="max-w-[1440px] mx-auto px-6 md:px-8 text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-secondary/8 border border-secondary/15">
              <span className="text-xs font-semibold text-secondary">Core Features</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 tracking-tight">
              Precision Analysis Tools
            </h2>
            <p className="text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Stop ctrl+f searching. Use our advanced AI layer to talk directly to the source material.
            </p>
          </div>
          <div className="max-w-[1440px] mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 stagger">
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="glass-card p-8 rounded-2xl hover:translate-y-[-6px] transition-all duration-300 group animate-fade-in-up"
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary/8 flex items-center justify-center text-secondary mb-6 group-hover:bg-gradient-to-br group-hover:from-[var(--color-accent-start)] group-hover:to-[var(--color-accent-end)] group-hover:text-white group-hover:shadow-lg group-hover:shadow-secondary/20 transition-all duration-300">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 tracking-tight">{title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── How it Works ── */}
        <section className="py-28 bg-surface-container-lowest">
          <div className="max-w-[1440px] mx-auto px-6 md:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-20">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-secondary/8 border border-secondary/15">
                  <span className="text-xs font-semibold text-secondary">How It Works</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-10 tracking-tight">
                  Effortless Workflow
                </h2>
                <div className="space-y-10">
                  {STEPS.map((s, i) => (
                    <div key={s.num} className="flex gap-5 group">
                      <div className="relative flex flex-col items-center">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[var(--color-accent-start)] to-[var(--color-accent-end)] text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-secondary/20">
                          {s.num}
                        </div>
                        {i < STEPS.length - 1 && (
                          <div className="w-px h-full bg-gradient-to-b from-secondary/30 to-transparent mt-2" />
                        )}
                      </div>
                      <div className="pb-8">
                        <h4 className="text-lg font-bold text-primary mb-1.5 tracking-tight">{s.title}</h4>
                        <p className="text-sm text-on-surface-variant leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:w-1/2 relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl glow-ring bg-gradient-to-br from-surface-container-low to-surface-container-high h-[480px] flex items-center justify-center p-10">
                  <svg className="w-full h-full max-w-[380px]" viewBox="0 0 380 420" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="40" y="10" width="300" height="100" rx="16" className="fill-surface-container-lowest" opacity="0.8" />
                    <rect x="60" y="30" width="56" height="60" rx="8" className="fill-secondary" opacity="0.12" />
                    <path d="M88 48 L88 72 M76 60 L88 48 L100 60" className="stroke-secondary" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="132" y="38" width="120" height="10" rx="4" className="fill-on-surface" opacity="0.5" />
                    <rect x="132" y="56" width="180" height="6" rx="3" className="fill-on-surface" opacity="0.2" />
                    <rect x="132" y="68" width="150" height="6" rx="3" className="fill-on-surface" opacity="0.15" />
                    <path d="M190 118 L190 148" className="stroke-secondary" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" opacity="0.4" />
                    <path d="M184 142 L190 152 L196 142" className="fill-secondary" opacity="0.4" />
                    <rect x="40" y="158" width="300" height="100" rx="16" className="fill-surface-container-lowest" opacity="0.8" />
                    <rect x="60" y="178" width="56" height="60" rx="8" className="fill-secondary" opacity="0.12" />
                    <circle cx="88" cy="208" r="16" className="stroke-secondary" strokeWidth="2" opacity="0.8" />
                    <path d="M80 204 Q84 196 88 204 Q92 196 96 204" className="stroke-secondary" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
                    <path d="M80 212 Q84 220 88 212 Q92 220 96 212" className="stroke-secondary" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
                    <rect x="132" y="186" width="140" height="10" rx="4" className="fill-on-surface" opacity="0.5" />
                    <rect x="132" y="204" width="180" height="6" rx="3" className="fill-on-surface" opacity="0.2" />
                    <rect x="132" y="216" width="160" height="6" rx="3" className="fill-on-surface" opacity="0.15" />
                    <path d="M190 266 L190 296" className="stroke-secondary" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" opacity="0.4" />
                    <path d="M184 290 L190 300 L196 290" className="fill-secondary" opacity="0.4" />
                    <rect x="40" y="306" width="300" height="100" rx="16" className="fill-surface-container-lowest" opacity="0.8" />
                    <rect x="60" y="326" width="56" height="60" rx="8" className="fill-secondary" opacity="0.12" />
                    <rect x="74" y="340" width="28" height="22" rx="6" className="stroke-secondary" strokeWidth="2" fill="none" opacity="0.8" />
                    <path d="M80 358 L74 366" className="stroke-secondary" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
                    <rect x="80" y="348" width="14" height="3" rx="1.5" className="fill-secondary" opacity="0.4" />
                    <rect x="80" y="354" width="10" height="3" rx="1.5" className="fill-secondary" opacity="0.3" />
                    <rect x="132" y="334" width="100" height="10" rx="4" className="fill-on-surface" opacity="0.5" />
                    <rect x="132" y="352" width="180" height="6" rx="3" className="fill-on-surface" opacity="0.2" />
                    <rect x="132" y="364" width="140" height="6" rx="3" className="fill-on-surface" opacity="0.15" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Testimonial ── */}
        <section className="py-28 bg-surface-container-low section-fade">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <div className="inline-flex items-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-bold text-primary italic mb-10 leading-relaxed tracking-tight">
              "DocuMind AI transformed how our legal team handles due diligence. What used to take weeks of manual review now takes hours."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--color-accent-start)] to-[var(--color-accent-end)] flex items-center justify-center text-white text-lg font-bold shadow-lg shadow-secondary/20">
                MS
              </div>
              <div className="text-left">
                <p className="text-base font-bold text-primary">Marcus Sterling</p>
                <p className="text-sm text-on-surface-variant">Director of Innovation, Global Legal Partners</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24">
          <div className="max-w-[1440px] mx-auto px-6 md:px-8">
            <div className="relative rounded-[2rem] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0d0a1e] via-[#1a1452] to-[#0d0a1e]" />
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-[20%] w-64 h-64 bg-[#5865f2]/10 rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-[20%] w-80 h-80 bg-[#7b5ea7]/10 rounded-full blur-3xl" />
                <svg className="absolute -top-16 -left-16 w-[350px] h-[350px] opacity-[0.06]" viewBox="0 0 300 300" fill="none">
                  <circle cx="150" cy="150" r="140" stroke="white" strokeWidth="1" />
                  <circle cx="150" cy="150" r="100" stroke="white" strokeWidth="1" />
                  <circle cx="150" cy="150" r="60" stroke="white" strokeWidth="1" />
                </svg>
              </div>
              <div className="relative z-10 p-12 lg:p-20 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5">
                  <Shield className="w-3.5 h-3.5 text-[#c4a8d8]" />
                  <span className="text-xs font-semibold text-[#c4a8d8] tracking-wide">No credit card required</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                  Ready to Supercharge<br className="hidden sm:block" /> Your Reading?
                </h2>
                <p className="text-lg text-[#c4a8d8]/80 max-w-2xl mx-auto mb-10 leading-relaxed">
                  Join over 50,000+ users who are already using DocuMind AI to work smarter, not harder.
                </p>
                <Link
                  to="/app"
                  className="inline-flex items-center gap-2 bg-white text-[#1a1452] px-10 py-4 rounded-xl text-lg font-bold hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 shadow-2xl shadow-black/20"
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <p className="mt-6 text-[#9b6e9e]/60 text-xs font-medium tracking-wide">
                  Free forever for individuals. Cancel anytime.
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
