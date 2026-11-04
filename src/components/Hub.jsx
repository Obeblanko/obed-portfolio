import { hub, profile } from '../data'

export default function Hub() {
  // Goes to your email if set, otherwise to the Contact section.
  const href = profile.email ? `mailto:${profile.email}?subject=IT%20Hub%20partnership` : '#contact'

  return (
    <section id="hub" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-accent px-7 py-14 text-onaccent sm:px-12 md:py-16">
          <div
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-onaccent/20"
            aria-hidden="true"
          />
          <div
            className="absolute -right-10 -top-10 h-72 w-72 rounded-full border border-onaccent/20"
            aria-hidden="true"
          />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{hub.title}</h2>
            <p className="mt-5 text-lg leading-relaxed opacity-90">{hub.text}</p>
            <a
              href={href}
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-onaccent px-6 py-3 text-sm font-semibold text-accent transition-opacity hover:opacity-90"
            >
              {hub.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
