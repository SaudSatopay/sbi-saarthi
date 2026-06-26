import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AGENTS, type AgentLine } from '../data/scenarios'
import type { Phase } from '../lib/useScenarioRunner'

const statusText: Record<Phase, string> = {
  idle: 'idle',
  thinking: 'reasoning',
  awaiting: 'awaiting consent',
  acting: 'executing',
  done: 'complete',
}

export default function AgentConsole({
  lines,
  phase,
  accent,
}: {
  lines: AgentLine[]
  phase: Phase
  accent: string
}) {
  const scrollRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [lines.length, phase])

  const live = phase === 'thinking' || phase === 'acting'

  return (
    <div className="panel flex h-full flex-col rounded-2xl">
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="ml-2 font-mono text-xs text-muted">saarthi · agent-orchestration</span>
        </div>
        <span className="flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted">
          <span
            className={`h-1.5 w-1.5 rounded-full ${live ? 'animate-pulse' : ''}`}
            style={{ background: accent }}
          />
          {statusText[phase]}
        </span>
      </div>

      <div
        ref={scrollRef}
        className="min-h-0 flex-1 space-y-2 overflow-y-auto px-4 py-4 font-mono text-[0.78rem] leading-relaxed"
      >
        <AnimatePresence initial={false}>
          {lines.map((line, i) => {
            const meta = AGENTS[line.agent]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.32 }}
                className="flex gap-2.5"
              >
                <span className="select-none text-white/25">{String(i + 1).padStart(2, '0')}</span>
                <span className="shrink-0 font-semibold" style={{ color: meta.color }}>
                  [{meta.name}]
                </span>
                <span className={line.highlight ? 'text-paper' : 'text-muted'}>{line.text}</span>
              </motion.div>
            )
          })}
        </AnimatePresence>

        {live && (
          <div className="flex gap-2.5 text-muted">
            <span className="select-none text-white/25">{String(lines.length + 1).padStart(2, '0')}</span>
            <span className="inline-block h-4 w-2 animate-blink" style={{ background: accent }} />
          </div>
        )}
      </div>
    </div>
  )
}
