import { Award, GraduationCap, ExternalLink } from 'lucide-react'
import Section from './Section'
import { education, certifications } from '../data'

export default function Education() {
  return (
    <Section id="education" title="Education and certifications" intro="Formal study and professional training.">
      <div className="space-y-4">
        {education.map((e) => (
          <div key={e.title + e.org} className="flex items-start gap-4 rounded-xl border border-line bg-surface p-5">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
              <GraduationCap size={22} />
            </span>
            <div>
              <h3 className="font-semibold">{e.title}</h3>
              <p className="text-muted">{e.org}</p>
              {e.period && <p className="text-sm text-muted">{e.period}</p>}
              {e.note && <p className="mt-2 text-sm leading-relaxed text-muted">{e.note}</p>}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {certifications.map((c) => (
          <div key={c.title} className="flex items-start gap-4 rounded-xl border border-line bg-surface p-5">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
              <Award size={22} />
            </span>
            <div className="min-w-0">
              <h3 className="font-semibold">{c.title}</h3>
              <p className="text-sm text-muted">{c.issuer}</p>
              {(c.date || c.note) && (
                <p className="text-sm text-muted">{[c.date, c.note].filter(Boolean).join(', ')}</p>
              )}
              {c.link && (
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                >
                  View credential <ExternalLink size={13} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
