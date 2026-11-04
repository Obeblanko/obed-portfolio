import { Briefcase, Layers, MapPin, GraduationCap } from 'lucide-react'
import Section from './Section'
import { about } from '../data'

const icons = { briefcase: Briefcase, layers: Layers, map: MapPin, teach: GraduationCap }

export default function About() {
  return (
    <Section id="about" title="About" intro="Who I am and what I bring.">
      <div className="space-y-5 text-lg leading-relaxed">
        {about.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {about.strengths.map((s) => {
          const Icon = icons[s.icon] || Briefcase
          return (
            <div key={s.title} className="rounded-xl border border-line bg-surface p-5">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent/10 text-accent">
                <Icon size={20} />
              </span>
              <h3 className="mt-4 font-semibold">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.text}</p>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
