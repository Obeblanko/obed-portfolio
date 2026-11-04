import { useState } from 'react'
import { Moon, Sun } from 'lucide-react'

// Switches the "dark" class on <html> and remembers the choice.
export default function ThemeToggle() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  const toggle = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light')
    } catch (e) {}
  }

  return (
    <button
      onClick={toggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-surface text-muted transition-colors hover:border-accent hover:text-accent"
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
