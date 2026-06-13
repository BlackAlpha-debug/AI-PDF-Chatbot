import { useTheme } from '../hooks/useTheme'
import { Sun, Moon } from 'lucide-react'

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggle } = useTheme()

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className={`p-2 rounded-xl transition-all duration-200 hover:bg-surface-container-high/60 active:scale-95 ${className}`}
    >
      {theme === 'light' ? (
        <Moon className="w-[18px] h-[18px] text-on-surface-variant" />
      ) : (
        <Sun className="w-[18px] h-[18px] text-on-surface-variant" />
      )}
    </button>
  )
}
