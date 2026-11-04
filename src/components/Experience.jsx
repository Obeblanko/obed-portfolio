import Section from './Section'
import { experience } from '../data'

// A timeline is a real sequence, so the line and dots carry meaning here.
export default function Experience() {
  return (
    <Section id="experience" title="Experience" intro="Data analysis, technical support and software development across internships, national service and ongoing roles." alt>
      <ol className="relative ml-3 border-l border-line">
        {experience.map((e) => (
          <li key={e.title + e.org} className="relative pb-12 pl-8 last:pb-0">
            <span className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-bg" />
            {e.period && <p className="text-sm text-muted">{e.period}</p>}
            <h3 className="text-lg font-semibold tracking-tight">{e.title}</h3>
            <p className="text-accent">{e.org}</p>
            {e.points && e.points.length > 0 && (
              <ul className="mt-3 max-w-xl list-disc space-y-1.5 pl-5 leading-relaxed text-muted marker:text-accent">
                {e.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </Section>
  )
}
