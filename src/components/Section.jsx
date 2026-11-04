// Shared layout for every section: heading on the left, content on the right.
// Use `wide` to put the heading on top and let the content span the full width.
export default function Section({ id, title, intro, wide = false, alt = false, children }) {
  return (
    <section id={id} className={`py-20 md:py-28 ${alt ? 'border-y border-line bg-surface/60' : ''}`}>
      <div className={`mx-auto max-w-6xl px-5 sm:px-8 ${wide ? '' : 'grid gap-10 lg:grid-cols-12'}`}>
        <div className={wide ? 'mb-12 max-w-2xl' : 'lg:col-span-4'}>
          <div className={wide ? '' : 'lg:sticky lg:top-28'}>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
            <div className="mt-4 h-1 w-10 rounded bg-accent" />
            {intro && <p className="mt-4 max-w-xs text-muted">{intro}</p>}
          </div>
        </div>
        <div className={wide ? '' : 'lg:col-span-8'}>{children}</div>
      </div>
    </section>
  )
}
