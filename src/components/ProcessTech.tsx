import { FLOW, TECH } from '../data/content'
import SectionLabel from './SectionLabel'

export default function ProcessTech() {
  return (
    <section id="stack" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel index="05" title="Process & stack" />
        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            From signal to <span className="text-saffron">outcome</span>.
          </h2>
          <p className="max-w-md text-muted">
            Seven steps, run autonomously per customer — and the stack that makes it real at SBI scale.
          </p>
        </div>

        {/* flow */}
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
          {FLOW.map((s, i) => (
            <div key={s.key} className="rounded-xl border border-line bg-ink-2/40 p-4">
              <div className="font-mono text-xs text-saffron">0{i + 1}</div>
              <div className="mt-2 font-display text-lg font-semibold">{s.title}</div>
              <div className="mt-1 text-xs leading-snug text-muted">{s.detail}</div>
            </div>
          ))}
        </div>

        {/* tech */}
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {TECH.map((t) => (
            <div key={t.group} className="rounded-2xl border border-line bg-ink-2/40 p-5">
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted">{t.group}</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {t.items.map((it) => (
                  <span key={it} className="rounded-full chip px-3 py-1 text-xs text-paper/80">
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
