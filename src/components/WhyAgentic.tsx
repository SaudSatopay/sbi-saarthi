import { DIFFERENTIATORS } from '../data/content'
import { ACCENT_HEX } from '../data/scenarios'
import SectionLabel from './SectionLabel'

export default function WhyAgentic() {
  return (
    <section id="why" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel index="04" title="Why agentic" />
        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            Five reasons it’s <span className="text-saffron">unforgettable</span>.
          </h2>
          <p className="max-w-md text-muted">
            Each is something a scripted chatbot or a broadcast campaign structurally cannot do.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {DIFFERENTIATORS.map((d) => (
            <article
              key={d.index}
              className="group relative rounded-2xl border border-line bg-ink-2/40 p-6 transition-colors hover:border-white/20"
            >
              <div className="font-mono text-sm" style={{ color: ACCENT_HEX[d.accent] }}>
                {d.index}
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold">{d.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{d.body}</p>
              <div
                className="mt-6 h-1 w-10 rounded-full transition-all group-hover:w-16"
                style={{ background: ACCENT_HEX[d.accent] }}
              />
            </article>
          ))}

          <article className="relative flex flex-col justify-between rounded-2xl border border-saffron/30 bg-saffron/[0.06] p-6">
            <div className="font-mono text-sm text-saffron">∑</div>
            <div>
              <h3 className="mt-4 font-display text-2xl font-semibold leading-tight">
                Not a chatbot.
                <br />A crew that <span className="text-saffron">acts</span>.
              </h3>
              <p className="mt-3 text-sm text-muted">
                Autonomy · planning · tool-use · multi-agent · guardrails.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
