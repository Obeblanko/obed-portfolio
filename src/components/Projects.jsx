import { ExternalLink, Github, Wind, ShoppingBag, Store, Sprout } from 'lucide-react'
import Section from './Section'
import { projects } from '../data'

const icons = { wind: Wind, cart: ShoppingBag, market: Store, shield: Sprout }
const ext = { target: '_blank', rel: 'noopener noreferrer' }

function ProjectCard({ p }) {
  const Icon = icons[p.icon] || Wind
  const hasLinks = p.live || p.github

  return (
    <article className="project-card card-hover group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface md:[&:last-child:nth-child(odd)]:col-span-2">
      {/* Screenshot if you add one, otherwise a clean icon panel */}
      {p.image ? (
        <img src={p.image} alt={`Screenshot of ${p.title}`} className="h-48 w-full object-cover" />
      ) : (
        <div className="project-art relative grid h-44 place-items-center overflow-hidden">
          <div className="grid-bg absolute inset-0 opacity-60" aria-hidden="true" />
          <span className="relative grid h-[4.5rem] w-[4.5rem] place-items-center rounded-2xl bg-surface/90 text-accent shadow-lg shadow-ink/10 ring-1 ring-white/60 transition-transform duration-300 group-hover:scale-110">
            <Icon size={30} />
          </span>
          <span className="absolute bottom-4 left-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/55">
            Project snapshot
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
        <p className="mt-2 leading-relaxed text-muted">{p.problem}</p>

        {p.role && (
          <p className="mt-4 text-sm">
            <span className="font-medium">My role:</span> <span className="text-muted">{p.role}</span>
          </p>
        )}

        {p.tech.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <li key={t} className="chip">{t}</li>
            ))}
          </ul>
        )}

        {hasLinks && (
          <div className="mt-auto flex flex-wrap gap-3 pt-6">
            {p.live && (
              <a href={p.live} {...ext} className="btn btn-primary !py-2">
                <ExternalLink size={15} /> Live demo
              </a>
            )}
            {p.github && (
              <a href={p.github} {...ext} className="btn btn-secondary !py-2">
                <Github size={15} /> GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <Section id="projects" title="Projects" intro="Work built around real problems." wide alt>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </Section>
  )
}
