import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { Code2, Brain, Eye, Globe, Server, Database, Award, GraduationCap, Trophy, ChevronRight, ArrowRight, Sparkles } from 'lucide-react'

const EXPERIENCE = [
  {
    role: 'Frontend Developer Intern',
    company: 'Orbigon',
    location: 'Remote (Qatar-based blockchain company)',
    period: 'Oct 2025 – Dec 2025',
    points: [
      'Built the AI section of Orbigon\'s company website using Next.js and modern component architecture.',
      'Integrated AI chatbot interface and dynamic pricing model components into the production blockchain frontend.',
      'Connected deep learning inference endpoints via MCP (Model Context Protocol) to a live Web3 platform.',
    ],
  },
  {
    role: 'AI Engineer Intern',
    company: 'Edraak',
    location: 'Lahore, Pakistan',
    period: 'Sep 2024 – Oct 2024',
    points: [
      'Designed and deployed a full-stack custom image annotation tool for CV training datasets.',
      'Developed secure authentication and database integration modules supporting ML experimentation workflows.',
    ],
  },
  {
    role: 'Technical AI Intern',
    company: 'ISPR — Pakistan Army Initiative',
    location: 'Lahore',
    period: 'Jun 2024 – Aug 2024',
    points: [
      'Completed a selective Pakistan Army AI program covering deep learning, computer vision, and NLP.',
      'Studied real-world deployment of facial recognition, object detection, and NLP systems in high-reliability environments.',
    ],
  },
]

const SKILLS = [
  { label: 'AI / ML', icon: Brain, items: 'TensorFlow, Keras, scikit-learn, XGBoost, DeepFace, LangChain' },
  { label: 'Computer Vision', icon: Eye, items: 'OpenCV, FaceNet, CNNs, Transfer Learning, Roboflow' },
  { label: 'NLP', icon: Sparkles, items: 'TF-IDF, Naive Bayes, LSTM, Text Classification, Sentiment Analysis' },
  { label: 'Frontend', icon: Code2, items: 'React, Next.js, Vite, Tailwind CSS, TypeScript' },
  { label: 'Backend / APIs', icon: Server, items: 'Flask, FastAPI, REST APIs, MCP Protocol' },
  { label: 'Data', icon: Database, items: 'PostgreSQL, Neo4j, pandas, NumPy, ETL Pipelines' },
]

const PROJECTS = [
  {
    name: 'EduVerse',
    desc: 'AI-Powered Virtual University Platform with 6 role-based portals and 100+ React components.',
    tech: 'Next.js 16, React 19, TypeScript 5, Tailwind CSS v4, Zustand, FastAPI',
  },
  {
    name: 'Medical AI Platform',
    desc: 'TechVerse Hackathon 1st Place — dual-portal clinical intelligence system with voice intake and SOAP narrative generation.',
    tech: 'Python, Flask, LangChain, Neo4j, PostgreSQL, Next.js',
  },
  {
    name: 'Ziyarah Travels v3',
    desc: 'Production travel web app with admin portal, WhatsApp booking confirmations, and Vercel CI/CD.',
    tech: 'TypeScript, Vite, Tailwind CSS, EmailJS, Meta WhatsApp Business API',
  },
  {
    name: 'Facial Recognition Attendance',
    desc: 'Real-time FaceNet embeddings pipeline with SVM classifier and automated Excel attendance.',
    tech: 'Python, DeepFace, TensorFlow, OpenCV, SVM, Keras',
  },
]

export function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background">
      <Navbar />

      <main>
        {/* ── Hero ── */}
        <section className="hero-gradient relative overflow-hidden pt-24 pb-28">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-[10%] w-80 h-80 bg-secondary/[0.04] rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-[15%] w-64 h-64 bg-secondary/[0.03] rounded-full blur-3xl" />
          </div>

          <div className="max-w-[1440px] mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="z-10 text-center lg:text-left animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-secondary/8 border border-secondary/15">
                <span className="text-xs font-semibold text-secondary tracking-wide">MEET THE BUILDER</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-primary mb-4 leading-[1.1] tracking-tight">
                Muhammad{' '}
                <span className="bg-gradient-to-r from-[var(--color-accent-start)] to-[var(--color-accent-end)] bg-clip-text text-transparent">
                  Muzammil
                </span>
              </h1>
              <p className="text-xl text-secondary font-bold mb-5">AI Engineer</p>
              <p className="text-base text-on-surface-variant mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                AI undergraduate at UMT with end-to-end project experience across computer vision, NLP pipelines, and full-stack web development. Delivered production-deployed applications during three internships, including an AI hackathon win (TechVerse) for a multi-modal medical AI platform.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <a
                  href="https://github.com/BlackAlpha-debug"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gradient flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold shadow-lg shadow-secondary/20 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                  GitHub
                </a>
                <a
                  href="mailto:mj.muzammiljawad@gmail.com"
                  className="glass-card flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-primary hover:bg-surface-container-low transition-all duration-200"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  Email
                </a>
              </div>
            </div>

            <div className="relative z-10 flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="relative">
                <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-3xl bg-gradient-to-br from-[var(--color-accent-start)]/20 to-[var(--color-accent-end)]/10 overflow-hidden border border-outline-variant/20 shadow-2xl flex items-center justify-center glow-ring">
                  <svg className="w-40 h-40 text-secondary/50" viewBox="0 0 120 120" fill="none">
                    <circle cx="60" cy="40" r="22" fill="currentColor" opacity="0.2" />
                    <ellipse cx="60" cy="95" rx="35" ry="22" fill="currentColor" opacity="0.15" />
                    <circle cx="60" cy="40" r="18" stroke="currentColor" strokeWidth="2" opacity="0.5" />
                    <path d="M28 95c0-17.673 14.327-28 32-28s32 10.327 32 28" stroke="currentColor" strokeWidth="2" opacity="0.5" />
                  </svg>
                </div>

                <div className="absolute -bottom-4 -left-4 glass-card p-3 rounded-xl shadow-xl animate-float">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-accent-start)] to-[var(--color-accent-end)] flex items-center justify-center">
                      <Trophy className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-primary leading-none">TechVerse Winner</p>
                      <p className="text-[10px] text-on-surface-variant mt-0.5">1st Place AI Hackathon</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 glass-card p-3 rounded-xl shadow-xl animate-float-delayed">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center">
                      <GraduationCap className="w-4 h-4 text-secondary" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-primary leading-none">BS AI @ UMT</p>
                      <p className="text-[10px] text-on-surface-variant mt-0.5">75% Scholarship</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Skills ── */}
        <section className="py-28 bg-surface section-fade">
          <div className="max-w-[1440px] mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-secondary/8 border border-secondary/15">
                <span className="text-xs font-semibold text-secondary">Technical Stack</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 tracking-tight">
                Technical Skills
              </h2>
              <p className="text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
                Full-stack AI engineering — from model training to production deployment.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 stagger">
              {SKILLS.map(({ label, icon: Icon, items }) => (
                <div key={label} className="glass-card p-7 rounded-2xl hover:translate-y-[-4px] transition-all duration-300 group animate-fade-in-up">
                  <div className="w-11 h-11 rounded-xl bg-secondary/8 flex items-center justify-center text-secondary mb-5 group-hover:bg-gradient-to-br group-hover:from-[var(--color-accent-start)] group-hover:to-[var(--color-accent-end)] group-hover:text-white group-hover:shadow-lg group-hover:shadow-secondary/20 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-primary mb-2 tracking-tight">{label}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{items}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Experience ── */}
        <section className="py-28 bg-surface-container-lowest section-fade">
          <div className="max-w-[1440px] mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-secondary/8 border border-secondary/15">
                <span className="text-xs font-semibold text-secondary">Career</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 tracking-tight">
                Experience
              </h2>
              <p className="text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
                Three internships delivering production AI and frontend systems.
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-5 stagger">
              {EXPERIENCE.map((exp) => (
                <div key={exp.role} className="glass-card p-7 rounded-2xl relative overflow-hidden group hover:translate-y-[-2px] transition-all duration-300 animate-fade-in-up">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[var(--color-accent-start)] to-[var(--color-accent-end)] rounded-r" />
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-primary tracking-tight">{exp.role}</h3>
                      <p className="text-sm text-secondary font-semibold">{exp.company}</p>
                      <p className="text-xs text-on-surface-variant mt-0.5">{exp.location}</p>
                    </div>
                    <span className="text-xs font-medium text-on-surface-variant bg-surface-container-high/60 px-3 py-1.5 rounded-lg whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.points.map((p, i) => (
                      <li key={i} className="flex gap-2.5 text-sm text-on-surface-variant leading-relaxed">
                        <ChevronRight className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Projects ── */}
        <section className="py-28 bg-surface section-fade">
          <div className="max-w-[1440px] mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-secondary/8 border border-secondary/15">
                <span className="text-xs font-semibold text-secondary">Portfolio</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 tracking-tight">
                Selected Projects
              </h2>
              <p className="text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
                End-to-end systems from hackathon prototypes to production deployments.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 stagger">
              {PROJECTS.map((proj) => (
                <div key={proj.name} className="glass-card p-7 rounded-2xl hover:translate-y-[-4px] transition-all duration-300 group animate-fade-in-up">
                  <div className="w-11 h-11 rounded-xl bg-secondary/8 flex items-center justify-center text-secondary mb-5 group-hover:bg-gradient-to-br group-hover:from-[var(--color-accent-start)] group-hover:to-[var(--color-accent-end)] group-hover:text-white group-hover:shadow-lg group-hover:shadow-secondary/20 transition-all duration-300">
                    <Globe className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2 tracking-tight">{proj.name}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-4">{proj.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tech.split(', ').map((t) => (
                      <span key={t} className="text-[10px] font-semibold px-2.5 py-1 bg-surface-container-high/60 text-on-surface-variant rounded-lg">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Education & Awards ── */}
        <section className="py-28 bg-surface-container-lowest section-fade">
          <div className="max-w-[1440px] mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-secondary/8 border border-secondary/15">
                  <span className="text-xs font-semibold text-secondary">Education</span>
                </div>
                <h2 className="text-3xl font-extrabold text-primary mb-8 tracking-tight">Education</h2>
                <div className="space-y-4 stagger">
                  {[
                    { title: 'BS Artificial Intelligence', school: 'University of Management and Technology', period: '2022 – 2026 | 75% Merit Scholarship', icon: GraduationCap },
                    { title: 'A-Levels', school: 'City School, Lahore', period: '2020 – 2022 | 75% Scholarship | Best Presentation Award', icon: GraduationCap },
                  ].map(({ title, school, period, icon: Icon }) => (
                    <div key={title} className="glass-card p-6 rounded-2xl flex items-start gap-4 animate-fade-in-up">
                      <div className="w-11 h-11 rounded-xl bg-secondary/8 flex items-center justify-center text-secondary shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-primary">{title}</h3>
                        <p className="text-sm text-secondary font-semibold">{school}</p>
                        <p className="text-xs text-on-surface-variant mt-1">{period}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-secondary/8 border border-secondary/15">
                  <span className="text-xs font-semibold text-secondary">Recognition</span>
                </div>
                <h2 className="text-3xl font-extrabold text-primary mb-8 tracking-tight">Awards</h2>
                <div className="space-y-4 stagger">
                  {[
                    { title: 'TechVerse AI Hackathon', subtitle: '1st Place Winner — Medical AI Platform', icon: Trophy },
                    { title: 'Duke of Edinburgh Award', subtitle: 'Silver and Bronze (2018–2021)', icon: Award },
                    { title: '75% Merit Scholarship', subtitle: 'UMT (BSAI) and A-Levels', icon: GraduationCap },
                  ].map(({ title, subtitle, icon: Icon }) => (
                    <div key={title} className="glass-card p-6 rounded-2xl flex items-start gap-4 animate-fade-in-up">
                      <div className="w-11 h-11 rounded-xl bg-secondary/8 flex items-center justify-center text-secondary shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-primary">{title}</h3>
                        <p className="text-sm text-on-surface-variant">{subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
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
                <div className="absolute top-10 left-[20%] w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-[20%] w-80 h-80 bg-secondary/8 rounded-full blur-3xl" />
              </div>
              <div className="relative z-10 p-12 lg:p-20 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                  Let's Build Something Together
                </h2>
                <p className="text-lg text-[#c4a8d8]/80 max-w-2xl mx-auto mb-10 leading-relaxed">
                  Whether it's a production AI system, a full-stack web app, or a hackathon prototype — I ship complete products efficiently.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a
                    href="mailto:mj.muzammiljawad@gmail.com"
                    className="inline-flex items-center gap-2 bg-white text-[#0d0a1e] px-8 py-4 rounded-xl text-lg font-bold hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 shadow-2xl shadow-black/20"
                  >
                    Get in Touch
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com/BlackAlpha-debug"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-white/20 bg-white/5 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/10 transition-all duration-200"
                  >
                    View GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
