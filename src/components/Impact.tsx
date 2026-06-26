import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { STATS, type Stat } from '../data/content'
import SectionLabel from './SectionLabel'

function useCountUp(target: number, decimals: number, run: boolean, dur = 1500) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!run) return
    let raf = 0
    const t0 = performance.now()
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / dur)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(target * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [run, target, dur])

  if (decimals) return val.toFixed(decimals)
  return Math.round(val).toLocaleString('en-IN')
}

function StatCard({ stat, run, emphasis }: { stat: Stat; run: boolean; emphasis: boolean }) {
  const display = useCountUp(stat.value, stat.decimals ?? 0, run)
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-line bg-ink-2/40 p-6 transition-colors hover:border-white/20">
      <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-saffron/0 blur-2xl transition-all group-hover:bg-saffron/10" />
      <div
        className={`font-display text-5xl font-semibold tracking-tight sm:text-6xl ${
          emphasis ? 'text-saffron' : 'text-paper'
        }`}
      >
        {stat.prefix}
        {display}
        {stat.suffix}
      </div>
      <div className="mt-3 text-sm font-medium text-paper">{stat.label}</div>
      <div className="mt-1 text-xs text-muted">{stat.sub}</div>
    </div>
  )
}

export default function Impact() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="impact" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel index="02" title="Impact" />
        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            Engagement you can <span className="text-saffron">measure</span>.
          </h2>
          <p className="max-w-md text-muted">
            Four value levers — incremental product revenue, idle-fund mobilisation, dormant revival and lower
            cost-to-serve. At SBI scale, single-digit lifts mean thousands of crores.
          </p>
        </div>

        <div ref={ref} className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STATS.map((s, i) => (
            <StatCard key={s.label} stat={s} run={inView} emphasis={i === 0 || i === 1} />
          ))}
        </div>

        <p className="mt-6 text-xs text-muted">Illustrative projections for the hackathon demonstration.</p>
      </div>
    </section>
  )
}
