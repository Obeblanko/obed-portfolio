import { Mail, Linkedin, Github } from 'lucide-react'
import Section from './Section'
import { profile } from '../data'

const show = (url) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')

export default function Contact() {
  const items = [
    profile.email && { icon: Mail, label: 'Email', text: profile.email, href: `mailto:${profile.email}`, external: false },
    profile.linkedin && { icon: Linkedin, label: 'LinkedIn', text: show(profile.linkedin), href: profile.linkedin, external: true },
    profile.github && { icon: Github, label: 'GitHub', text: show(profile.github), href: profile.github, external: true },
  ].filter(Boolean)

  return (
    <Section id="contact" title="Contact" intro="Open to internships, junior roles and conversations about the Hub." alt>
      {items.length === 0 ? (
        <p className="rounded-xl border border-dashed border-line p-6 text-muted">
          Add your email, LinkedIn and GitHub links in <code>src/data.js</code> and they will appear here.
        </p>
      ) : (
        <ul className="space-y-3">
          {items.map(({ icon: Icon, label, text, href, external }) => (
            <li key={label}>
              <a
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group flex items-center gap-4 rounded-xl border border-line bg-surface p-5 transition-colors hover:border-accent"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-onaccent">
                  <Icon size={22} />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm text-muted">{label}</span>
                  <span className="block truncate font-medium">{text}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </Section>
  )
}
