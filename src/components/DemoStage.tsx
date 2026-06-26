import { useState } from 'react'
import { RotateCcw } from 'lucide-react'
import { SCENARIOS, LANGS, ACCENT_HEX, type Lang } from '../data/scenarios'
import { useScenarioRunner } from '../lib/useScenarioRunner'
import Phone from './Phone'
import AgentConsole from './AgentConsole'
import SectionLabel from './SectionLabel'

export default function DemoStage() {
  const [idx, setIdx] = useState(0)
  const [lang, setLang] = useState<Lang>('en')
  const scenario = SCENARIOS[idx]
  const accent = ACCENT_HEX[scenario.accent]
  const { lines, phase, start, confirm } = useScenarioRunner(scenario)

  return (
    <section id="demo" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel index="01" title="Live demo" />
        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            Watch the crew <span className="text-saffron">think</span>, then act.
          </h2>
          <p className="max-w-md text-muted">
            Pick a money-moment and a language. The console on the right is the agents reasoning in real time; the
            phone on the left is what your customer actually feels.
          </p>
        </div>

        {/* controls */}
        <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {SCENARIOS.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setIdx(i)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                  i === idx ? 'border-transparent text-ink' : 'border-line text-muted hover:text-paper'
                }`}
                style={i === idx ? { background: ACCENT_HEX[s.accent] } : undefined}
              >
                {s.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="flex rounded-full border border-line p-1">
              {LANGS.map((l) => (
                <button
                  key={l.id}
                  onClick={() => setLang(l.id)}
                  className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                    lang === l.id ? 'bg-white/10 text-paper' : 'text-muted hover:text-paper'
                  }`}
                >
                  {l.native}
                </button>
              ))}
            </div>
            <button
              onClick={start}
              className="flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-muted transition-colors hover:text-paper"
            >
              <RotateCcw className="h-4 w-4" />
              Replay
            </button>
          </div>
        </div>

        {/* stage */}
        <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-[minmax(0,360px)_1fr]">
          <div className="flex items-center justify-center rounded-3xl border border-line bg-ink-2/50 p-6">
            <Phone scenario={scenario} lang={lang} phase={phase} onConfirm={confirm} />
          </div>
          <div className="h-[480px] lg:h-[560px]">
            <AgentConsole lines={lines} phase={phase} accent={accent} />
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-muted">
          Prototype simulation · synthetic personas · figures illustrative. The trace mirrors the real LangGraph
          orchestration: <span className="text-paper/70">sense → reason → guard → personalise → act → learn</span>.
        </p>
      </div>
    </section>
  )
}
