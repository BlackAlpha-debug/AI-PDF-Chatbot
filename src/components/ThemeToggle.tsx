import { useTheme } from '../hooks/useTheme'
import { Sun, Moon } from 'lucide-react'

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggle } = useTheme()

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className={`p-2 rounded-lg transition-colors hover:bg-surface-container-high ${className}`}
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-on-surface-variant" />
      ) : (
        <Sun className="w-5 h-5 text-on-surface-variant" />
      )}
    </button>
  )
}
