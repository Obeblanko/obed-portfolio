import { Activity, Download } from 'lucide-react'
import { profile, projects, certifications } from '../data'

// The memorable moment: a trend line that draws itself on load,
// a visual for "turning data into decisions".
function ChartCard() {
  const stats = [
    { n: projects.length, label: 'Projects' },
    { n: profile.internships, label: 'Internships' },
    { n: certifications.length, label: 'Certifications' },
  ]
  const initials = profile.name.split(' ').map((w) => w[0]).join('')
  const line = 'M8,140 C50,130 70,134 100,112 S160,98 190,80 S250,86 285,52 S350,38 392,22'

  return (
    <div
      className="rise relative rounded-3xl border border-line bg-surface/90 p-4 shadow-2xl shadow-ink/10 backdrop-blur-sm sm:p-5"
      style={{ '--d': '0.3s' }}
    >
      {profile.photo ? (
        <div className="hero-portrait relative overflow-hidden rounded-2xl">
          <img
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            className="aspect-[4/3] w-full object-cover object-top"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/70 via-black/20 to-transparent p-5 pt-16 text-white">
            <div>
              <p className="font-semibold">{profile.name}</p>
              <p className="mt-1 text-sm text-white/80">{profile.role}</p>
            </div>
            <span className="rounded-full border border-white/25 bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur">
              Data × Design
            </span>
          </div>
          <div className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-xl border border-white/25 bg-white/15 text-white backdrop-blur">
            <Activity size={20} aria-hidden="true" />
          </div>
        </div>
      ) : (
        <div className="hero-portrait flex items-center gap-4 rounded-2xl p-6">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-accent text-lg font-semibold text-onaccent">
            {initials}
          </div>
          <div>
            <p className="font-semibold">{profile.name}</p>
            <p className="text-sm text-muted">{profile.role}</p>
          </div>
        </div>
      )}

      <svg
        viewBox="0 0 400 170"
        className="mt-4 w-full text-accent"
        role="img"
        aria-label="A rising trend line, illustrating data turning into decisions"
      >
        <defs>
          <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.22" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[40, 80, 120, 160].map((y) => (
          <line key={y} x1="0" x2="400" y1={y} y2={y} stroke="rgb(var(--line))" strokeWidth="1" />
        ))}
        <path d={`${line} L392,160 L8,160 Z`} fill="url(#area)" className="fade-late" />
        <path d={line} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" pathLength="1" className="draw" />
        <g className="fade-late">
          <circle cx="392" cy="22" r="5" fill="currentColor" className="ping" />
          <circle cx="392" cy="22" r="5" fill="currentColor" />
        </g>
      </svg>

      <dl className="mt-3 grid grid-cols-3 gap-4 border-t border-line pt-4">
        {stats.map((s) => (
          <div key={s.label}>
            <dd className="text-2xl font-semibold tracking-tight">{s.n}</dd>
            <dt className="text-xs text-muted">{s.label}</dt>
          </div>
        ))}
      </dl>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40">
      <div className="grid-bg absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          {profile.status && (
            <p
              className="rise inline-flex items-center gap-2 rounded-full border border-accent/20 bg-surface/80 px-4 py-1.5 text-sm text-muted shadow-sm"
              style={{ '--d': '0s' }}
            >
              <span className="h-2 w-2 rounded-full bg-highlight ring-4 ring-highlight/10" />
              {profile.status}
            </p>
          )}

          <p className="rise mt-7 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent" style={{ '--d': '0.05s' }}>
            <span className="h-px w-8 bg-highlight" />
            {profile.role}
          </p>

          <h1
            className="rise mt-4 text-5xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-6xl lg:text-7xl"
            style={{ '--d': '0.1s' }}
          >
            {profile.name}
          </h1>

          <p className="rise mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl" style={{ '--d': '0.2s' }}>
            {profile.tagline}
          </p>

          <div className="rise mt-9 flex flex-wrap gap-3" style={{ '--d': '0.3s' }}>
            <a href="#projects" className="btn btn-primary">View projects</a>
            {profile.cv && (
              <a href={profile.cv} download className="btn btn-secondary">
                <Download size={16} /> Download CV
              </a>
            )}
            <a href="#contact" className="btn btn-secondary">Contact</a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <ChartCard />
        </div>
      </div>
    </section>
  )
}
