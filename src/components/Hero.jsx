import { Download } from 'lucide-react'
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
      className="rise rounded-2xl border border-line bg-surface p-6 shadow-xl shadow-accent/5 sm:p-7"
      style={{ '--d': '0.3s' }}
    >
      {profile.photo ? (
        <>
          <img
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            className="aspect-[4/3] w-full rounded-xl object-cover object-top"
          />
          <div className="mt-5">
            <p className="font-semibold">{profile.name}</p>
            <p className="text-sm text-muted">{profile.role}</p>
          </div>
        </>
      ) : (
        <div className="flex items-center gap-4">
          <div className="grid h-14 w-14 place-items-center rounded-full bg-accent text-lg font-semibold text-onaccent">
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
        className="mt-5 w-full text-accent"
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

      <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-line pt-5">
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
              className="rise inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-sm text-muted"
              style={{ '--d': '0s' }}
            >
              <span className="h-2 w-2 rounded-full bg-accent" />
              {profile.status}
            </p>
          )}

          <h1
            className="rise mt-6 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
            style={{ '--d': '0.1s' }}
          >
            {profile.name}
          </h1>

          <p className="rise mt-6 max-w-xl text-lg leading-relaxed text-muted" style={{ '--d': '0.2s' }}>
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
