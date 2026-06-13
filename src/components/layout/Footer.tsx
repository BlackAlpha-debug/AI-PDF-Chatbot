import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/30 relative">
      <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
      <div className="px-6 md:px-8 py-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-accent-start)] to-[var(--color-accent-end)] flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <span className="text-lg font-bold text-primary tracking-tight">DocuMind AI</span>
            </Link>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              AI-powered document intelligence. Chat with any PDF and extract insights instantly.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-on-surface tracking-wider uppercase mb-4">Product</h4>
            <ul className="space-y-2.5">
              {['Features', 'Pricing', 'API Docs', 'Changelog'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-on-surface-variant hover:text-secondary transition-colors duration-200">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-on-surface tracking-wider uppercase mb-4">Company</h4>
            <ul className="space-y-2.5">
              {['About', 'Blog', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-on-surface-variant hover:text-secondary transition-colors duration-200">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-on-surface tracking-wider uppercase mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-on-surface-variant hover:text-secondary transition-colors duration-200">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-on-surface-variant">&copy; {new Date().getFullYear()} DocuMind AI. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {[
              { label: 'GitHub', d: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
              { label: 'Twitter', d: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
            ].map(({ label, d }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-on-surface-variant hover:text-secondary hover:bg-surface-container-high transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={d} /></svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
