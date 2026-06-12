import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'

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
  { label: 'AI / ML', items: 'TensorFlow, Keras, scikit-learn, XGBoost, DeepFace, LangChain' },
  { label: 'Computer Vision', items: 'OpenCV, FaceNet, CNNs, Transfer Learning, Roboflow' },
  { label: 'NLP', items: 'TF-IDF, Naive Bayes, LSTM, Text Classification, Sentiment Analysis' },
  { label: 'Frontend', items: 'React, Next.js, Vite, Tailwind CSS, TypeScript' },
  { label: 'Backend / APIs', items: 'Flask, FastAPI, REST APIs, MCP Protocol' },
  { label: 'Data', items: 'PostgreSQL, Neo4j, pandas, NumPy, ETL Pipelines' },
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
        {/* Hero */}
        <section className="hero-gradient relative overflow-hidden pt-20 pb-24">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg className="absolute -top-20 -right-20 w-[500px] h-[500px] opacity-[0.06]" viewBox="0 0 400 400" fill="none">
              <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="1" className="text-secondary" />
              <circle cx="200" cy="200" r="130" stroke="currentColor" strokeWidth="1" className="text-secondary" />
              <circle cx="200" cy="200" r="80" stroke="currentColor" strokeWidth="1" className="text-secondary" />
              <path d="M200 20 L200 380 M20 200 L380 200" stroke="currentColor" strokeWidth="0.5" className="text-secondary" />
            </svg>
          </div>

          <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="z-10 text-center lg:text-left">
              <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant text-xs font-semibold tracking-[0.05em]">
                MEET THE BUILDER
              </span>
              <h1 className="text-5xl font-bold text-primary mb-4 leading-tight tracking-tight">
                Muhammad <br />Muzammil
              </h1>
              <p className="text-xl text-secondary font-semibold mb-4">AI Engineer</p>
              <p className="text-base text-on-surface-variant mb-8 max-w-xl mx-auto lg:mx-0">
                AI undergraduate at UMT with end-to-end project experience across computer vision, NLP pipelines, and full-stack web development. Delivered production-deployed applications during three internships, including an AI hackathon win (TechVerse) for a multi-modal medical AI platform.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <a
                  href="https://github.com/BlackAlpha-debug"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 bg-secondary text-on-secondary rounded-lg text-sm font-semibold hover:scale-[1.02] transition-transform shadow-lg shadow-secondary/20"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                  GitHub
                </a>
                <a
                  href="mailto:mj.muzammiljawad@gmail.com"
                  className="flex items-center gap-2 px-5 py-3 glass-card rounded-lg text-sm font-semibold text-primary hover:bg-surface-container-low transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  Email
                </a>
              </div>
            </div>

            {/* Profile illustration */}
            <div className="relative z-10 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-3xl bg-gradient-to-br from-secondary/20 to-primary-container overflow-hidden border border-outline-variant/30 shadow-2xl flex items-center justify-center">
                  <svg className="w-40 h-40 text-secondary/60" viewBox="0 0 120 120" fill="none">
                    <circle cx="60" cy="40" r="22" fill="currentColor" opacity="0.3" />
                    <ellipse cx="60" cy="95" rx="35" ry="22" fill="currentColor" opacity="0.2" />
                    <circle cx="60" cy="40" r="18" stroke="currentColor" strokeWidth="2" opacity="0.6" />
                    <path d="M28 95c0-17.673 14.327-28 32-28s32 10.327 32 28" stroke="currentColor" strokeWidth="2" opacity="0.6" />
                  </svg>
                </div>

                <div className="absolute -bottom-4 -left-4 glass-card p-3 rounded-xl shadow-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-primary leading-none">TechVerse Winner</p>
                      <p className="text-[10px] text-on-surface-variant">1st Place AI Hackathon</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 glass-card p-3 rounded-xl shadow-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary-container rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-on-primary-container" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-primary leading-none">BS AI @ UMT</p>
                      <p className="text-[10px] text-on-surface-variant">75% Scholarship</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="py-24 bg-surface">
          <div className="max-w-[1440px] mx-auto px-8">
            <h2 className="text-3xl font-semibold text-primary mb-4 text-center" style={{ letterSpacing: '-0.01em' }}>
              Technical Skills
            </h2>
            <p className="text-base text-on-surface-variant max-w-2xl mx-auto text-center mb-16">
              Full-stack AI engineering — from model training to production deployment.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SKILLS.map((s) => (
                <div key={s.label} className="glass-card p-6 rounded-2xl hover:translate-y-[-4px] transition-all duration-300 group">
                  <div className="w-10 h-10 bg-surface-container-high rounded-xl flex items-center justify-center text-secondary mb-4 group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{s.label}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{s.items}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="py-24 bg-surface-container-lowest">
          <div className="max-w-[1440px] mx-auto px-8">
            <h2 className="text-3xl font-semibold text-primary mb-4 text-center" style={{ letterSpacing: '-0.01em' }}>
              Experience
            </h2>
            <p className="text-base text-on-surface-variant max-w-2xl mx-auto text-center mb-16">
              Three internships delivering production AI and frontend systems.
            </p>
            <div className="max-w-3xl mx-auto space-y-8">
              {EXPERIENCE.map((exp) => (
                <div key={exp.role} className="glass-card p-8 rounded-2xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-secondary rounded-r" />
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-primary">{exp.role}</h3>
                      <p className="text-sm text-secondary font-semibold">{exp.company}</p>
                      <p className="text-xs text-on-surface-variant">{exp.location}</p>
                    </div>
                    <span className="text-xs font-semibold text-on-surface-variant tracking-[0.05em] bg-surface-container-high px-3 py-1 rounded-full whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.points.map((p, i) => (
                      <li key={i} className="flex gap-3 text-sm text-on-surface-variant">
                        <span className="text-secondary mt-1 shrink-0">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="py-24 bg-surface">
          <div className="max-w-[1440px] mx-auto px-8">
            <h2 className="text-3xl font-semibold text-primary mb-4 text-center" style={{ letterSpacing: '-0.01em' }}>
              Selected Projects
            </h2>
            <p className="text-base text-on-surface-variant max-w-2xl mx-auto text-center mb-16">
              End-to-end systems from hackathon prototypes to production deployments.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PROJECTS.map((proj) => (
                <div key={proj.name} className="glass-card p-8 rounded-2xl hover:translate-y-[-4px] transition-all duration-300 group">
                  <div className="w-12 h-12 bg-surface-container-high rounded-xl flex items-center justify-center text-secondary mb-5 group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{proj.name}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-4">{proj.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tech.split(', ').map((t) => (
                      <span key={t} className="text-[10px] font-semibold tracking-[0.05em] px-2 py-1 bg-surface-container-high text-on-surface-variant rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education & Awards */}
        <section className="py-24 bg-surface-container-lowest">
          <div className="max-w-[1440px] mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Education */}
              <div>
                <h2 className="text-3xl font-semibold text-primary mb-8" style={{ letterSpacing: '-0.01em' }}>
                  Education
                </h2>
                <div className="space-y-6">
                  <div className="glass-card p-6 rounded-2xl">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary shrink-0">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary">BS Artificial Intelligence</h3>
                        <p className="text-sm text-secondary font-semibold">University of Management and Technology</p>
                        <p className="text-xs text-on-surface-variant mt-1">2022 – 2026 | 75% Merit Scholarship</p>
                      </div>
                    </div>
                  </div>
                  <div className="glass-card p-6 rounded-2xl">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary shrink-0">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary">A-Levels</h3>
                        <p className="text-sm text-secondary font-semibold">City School, Lahore</p>
                        <p className="text-xs text-on-surface-variant mt-1">2020 – 2022 | 75% Scholarship | Best Presentation Award</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Awards */}
              <div>
                <h2 className="text-3xl font-semibold text-primary mb-8" style={{ letterSpacing: '-0.01em' }}>
                  Awards
                </h2>
                <div className="space-y-6">
                  {[
                    { title: 'TechVerse AI Hackathon', subtitle: '1st Place Winner — Medical AI Platform', icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' },
                    { title: 'Duke of Edinburgh Award', subtitle: 'Silver and Bronze (2018–2021)', icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' },
                    { title: '75% Merit Scholarship', subtitle: 'UMT (BSAI) and A-Levels', icon: 'M12 14l9-5-9-5-9 5 9 5zM12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' },
                  ].map((award) => (
                    <div key={award.title} className="glass-card p-6 rounded-2xl flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary shrink-0">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d={award.icon} />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary">{award.title}</h3>
                        <p className="text-sm text-on-surface-variant">{award.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
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
                <svg className="absolute -top-12 -right-12 w-[300px] h-[300px] opacity-[0.07]" viewBox="0 0 240 240" fill="none">
                  <circle cx="120" cy="120" r="110" stroke="white" strokeWidth="1" />
                  <circle cx="120" cy="120" r="75" stroke="white" strokeWidth="1" />
                  <circle cx="120" cy="120" r="40" stroke="white" strokeWidth="1" />
                </svg>
                <svg className="absolute -bottom-16 -left-16 w-[350px] h-[350px] opacity-[0.06]" viewBox="0 0 300 300" fill="none">
                  <path d="M150 10 L290 150 L150 290 L10 150 Z" stroke="white" strokeWidth="1" />
                  <path d="M150 70 L230 150 L150 230 L70 150 Z" stroke="white" strokeWidth="1" />
                  <path d="M150 120 L180 150 L150 180 L120 150 Z" fill="white" opacity="0.1" />
                </svg>
                <svg className="absolute top-12 left-20 w-[80px] h-[80px] opacity-[0.08]" viewBox="0 0 60 60" fill="none">
                  <rect x="5" y="5" width="50" height="50" rx="10" stroke="white" strokeWidth="1" />
                  <rect x="18" y="18" width="24" height="24" rx="4" stroke="white" strokeWidth="1" />
                </svg>
                <svg className="absolute bottom-8 right-28 w-[90px] h-[90px] opacity-[0.07]" viewBox="0 0 70 70" fill="none">
                  <polygon points="35,5 65,25 65,55 35,65 5,55 5,25" stroke="white" strokeWidth="1" />
                  <polygon points="35,18 52,28 52,48 35,55 18,48 18,28" stroke="white" strokeWidth="0.8" />
                </svg>
              </div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-on-primary mb-6 tracking-tight">
                  Let's Build Something Together
                </h2>
                <p className="text-lg text-on-primary-container max-w-2xl mx-auto mb-10">
                  Whether it's a production AI system, a full-stack web app, or a hackathon prototype — I ship complete products efficiently.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a
                    href="mailto:mj.muzammiljawad@gmail.com"
                    className="inline-block bg-secondary text-on-secondary px-10 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition-transform shadow-xl"
                  >
                    Get in Touch
                  </a>
                  <a
                    href="https://github.com/BlackAlpha-debug"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-surface text-primary px-10 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition-transform shadow-xl"
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
