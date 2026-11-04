import { Database, LayoutTemplate, Code2, Cloud, Wrench } from 'lucide-react'
import Section from './Section'
import { skills } from '../data'

const icons = { data: Database, frontend: LayoutTemplate, code: Code2, cloud: Cloud, tools: Wrench }

export default function Skills() {
  return (
    <Section id="skills" title="Skills" intro="The tools I work with, grouped by what they are used for.">
      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((g) => {
          const Icon = icons[g.icon] || Wrench
          return (
            <div key={g.group} className="rounded-xl border border-line bg-surface p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent/10 text-accent">
                  <Icon size={20} />
                </span>
                <h3 className="font-semibold">{g.group}</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li key={item} className="chip">{item}</li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
