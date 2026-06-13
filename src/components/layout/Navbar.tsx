import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ThemeToggle } from '../ThemeToggle'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  const links = [
    { to: '/', label: 'Features' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/about', label: 'About' },
  ]

  return (
    <header className="bg-surface/60 backdrop-blur-2xl sticky top-0 border-b border-outline-variant/20 z-50">
      <div className="flex justify-between items-center w-full px-6 md:px-8 py-3.5 max-w-[1440px] mx-auto">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--color-accent-start)] to-[var(--color-accent-end)] flex items-center justify-center shadow-md shadow-secondary/20 group-hover:shadow-lg group-hover:shadow-secondary/30 transition-shadow duration-300">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <span className="text-xl font-extrabold text-primary tracking-tight">
            DocuMind<span className="text-secondary"> AI</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map(({ to, label }) => {
            const active = pathname === to
            return (
              <Link
                key={to}
                to={to}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active
                    ? 'text-secondary bg-secondary/8'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/60'
                }`}
              >
                {label}
                {active && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-secondary rounded-full" />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            to="/app"
            className="hidden md:inline-flex text-sm font-medium text-on-surface-variant hover:text-on-surface px-3 py-2 rounded-lg transition-colors"
          >
            Log in
          </Link>
          <Link
            to="/app"
            className="hidden md:inline-flex btn-gradient px-5 py-2.5 rounded-xl text-sm font-semibold shadow-lg shadow-secondary/20 hover:shadow-xl hover:shadow-secondary/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            Get Started
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-surface-container-high transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5 text-on-surface" /> : <Menu className="w-5 h-5 text-on-surface" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-outline-variant/20 bg-surface/95 backdrop-blur-2xl animate-fade-in-up">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  pathname === to
                    ? 'text-secondary bg-secondary/8'
                    : 'text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                {label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-outline-variant/20 flex flex-col gap-2">
              <Link to="/app" onClick={() => setOpen(false)} className="px-4 py-3 rounded-xl text-sm font-medium text-on-surface-variant">
                Log in
              </Link>
              <Link
                to="/app"
                onClick={() => setOpen(false)}
                className="btn-gradient px-4 py-3 rounded-xl text-sm font-semibold text-center shadow-lg"
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
