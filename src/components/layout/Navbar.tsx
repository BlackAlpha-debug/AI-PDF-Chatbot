import { Link, useLocation } from 'react-router-dom'
import { ThemeToggle } from '../ThemeToggle'

export function Navbar() {
  const { pathname } = useLocation()

  const navLink = (to: string, label: string) => {
    const active = pathname === to
    return (
      <Link
        to={to}
        className={`text-xs font-semibold tracking-[0.05em] transition-colors ${
          active
            ? 'text-secondary font-bold border-b-2 border-secondary'
            : 'text-on-surface-variant hover:text-secondary'
        }`}
      >
        {label}
      </Link>
    )
  }

  return (
    <header className="bg-surface/70 backdrop-blur-xl sticky top-0 border-b border-outline-variant/30 shadow-sm z-50">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-[1440px] mx-auto">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary" style={{ letterSpacing: '-0.01em' }}>
            DocuMind AI
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLink('/', 'Features')}
          {navLink('/pricing', 'Pricing')}
          {navLink('/about', 'About')}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            to="/app"
            className="text-on-surface-variant hover:text-secondary transition-colors text-xs font-semibold tracking-[0.05em]"
          >
            Login
          </Link>
          <Link
            to="/app"
            className="bg-secondary text-on-secondary px-6 py-2 rounded-lg text-xs font-semibold tracking-[0.05em] hover:translate-y-[-1px] transition-all shadow-md active:scale-95"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  )
}
