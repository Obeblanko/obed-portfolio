import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { profile, navLinks } from '../data'
import useActiveSection from '../hooks/useActiveSection'
import ThemeToggle from './ThemeToggle'

const sectionIds = [...navLinks.map((l) => l.id), 'contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const active = useActiveSection(sectionIds)

  // Shadow/blur after scrolling + the thin reading-progress line
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrolled(y > 8)
      setProgress(max > 0 ? y / max : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock page scroll while the mobile menu is open; Escape closes it
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const initials = profile.name
    .split(' ')
    .map((w) => w[0])
    .join('')

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open ? 'border-line bg-bg/85 backdrop-blur-lg' : 'border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Main">
        {/* Name on the left */}
        <a href="#home" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent text-sm font-semibold text-onaccent">
            {initials}
          </span>
          <span className="font-semibold tracking-tight">{profile.name}</span>
        </a>

        {/* Links on the right (desktop) */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              aria-current={active === l.id ? 'true' : undefined}
              className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                active === l.id ? 'text-accent' : 'text-muted hover:text-ink'
              }`}
            >
              {l.label}
              <span
                className={`absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded bg-accent transition-transform duration-300 ${
                  active === l.id ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </a>
          ))}
          <a href="#contact" className="btn btn-primary ml-3 !py-2">
            Contact
          </a>
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-surface"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Reading progress */}
      <div
        className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-accent"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-x-0 bottom-0 top-16 bg-bg md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 pt-4 sm:px-8">
            {[...navLinks, { id: 'contact', label: 'Contact' }].map((l) => (
              <li key={l.id} className="border-b border-line">
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between py-5 text-2xl font-semibold tracking-tight ${
                    active === l.id ? 'text-accent' : ''
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
