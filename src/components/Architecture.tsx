import { ChevronDown, RefreshCw } from 'lucide-react'
import SectionLabel from './SectionLabel'

function Node({
  color,
  title,
  sub,
  emphasis,
}: {
  color: string
  title: string
  sub?: string
  emphasis?: boolean
}) {
  return (
    <div
      className={`rounded-xl border bg-ink-2/50 px-4 py-3 text-center transition-colors ${
        emphasis ? 'border-white/20' : 'border-line'
      }`}
      style={emphasis ? { boxShadow: `0 0 50px -28px ${color}` } : undefined}
    >
      <div className="flex items-center justify-center gap-2">
        <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: color }} />
        <span className={`font-medium ${emphasis ? 'text-base' : 'text-sm'}`}>{title}</span>
      </div>
      {sub && <div className="mt-1 text-[0.7rem] leading-snug text-muted">{sub}</div>}
    </div>
  )
}

function Connector() {
  return (
    <div className="flex justify-center py-1.5">
      <ChevronDown className="h-4 w-4 text-white/25" />
    </div>
  )
}

const AGENT_TIER = [
  { color: '#A6E22E', title: 'Insight & NBA', sub: 'propensity · next-best-action' },
  { color: '#5FE0A8', title: 'Guardrail & Consent', sub: 'compliance · suitability · safety' },
  { color: '#FF7A8A', title: 'Personalization', sub: 'language · channel · timing' },
  { color: '#F6B53D', title: 'Action & Execution', sub: 'executes via bank APIs' },
]

export default function Architecture() {
  return (
    <section id="architecture" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel index="03" title="Architecture" />
        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            A crew, not a <span className="text-saffron">chatbot</span>.
          </h2>
          <p className="max-w-md text-muted">
            Specialised autonomous agents under one orchestrator, backed by per-customer memory and a learning loop
            that retrains on every outcome.
          </p>
        </div>

        <div className="mt-12 rounded-3xl border border-line bg-ink-2/30 p-6 sm:p-10">
          {/* signals */}
          <Node
            color="#9AA3B5"
            title="Real-time signals"
            sub="transactions · balances · bills & EMIs · app & life events"
          />
          <Connector />
          {/* sensor */}
          <div className="mx-auto max-w-xs">
            <Node color="#37D6C3" title="Sensor Agent" sub="detects moments that matter" />
          </div>
          <Connector />
          {/* memory · orchestrator · learning */}
          <div className="grid items-center gap-3 md:grid-cols-3">
            <Node color="#6E8BFF" title="Memory & Context" sub="customer 360 · goals · opt-outs" />
            <Node color="#F6B53D" title="Orchestrator · Planner" sub="decides who · when · what" emphasis />
            <Node color="#37D6C3" title="Learning Loop" sub="rewards from outcomes" />
          </div>
          <Connector />
          {/* agents */}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {AGENT_TIER.map((a) => (
              <Node key={a.title} color={a.color} title={a.title} sub={a.sub} />
            ))}
          </div>
          <Connector />
          {/* channels */}
          <Node
            color="#9AA3B5"
            title="Omnichannel delivery"
            sub="YONO in-app · WhatsApp · vernacular voice · SMS"
          />
          <Connector />
          {/* customer */}
          <div className="mx-auto max-w-xs">
            <Node color="#ECEFF4" title="Customer" sub="engaged in their own language" />
          </div>

          {/* loop caption */}
          <div className="mt-8 flex items-center justify-center gap-2.5 border-t border-line pt-6 text-xs text-muted">
            <RefreshCw className="h-3.5 w-3.5 text-teal" />
            <span>
              Every outcome — converted, ignored or opted-out — feeds the{' '}
              <span className="text-paper/80">Learning Loop</span>, retuning timing, channel and offer per customer.
              Each coloured node is a distinct autonomous agent.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
