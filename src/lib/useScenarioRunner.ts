import { useCallback, useEffect, useRef, useState } from 'react'
import type { AgentLine, Scenario } from '../data/scenarios'

export type Phase = 'idle' | 'thinking' | 'awaiting' | 'acting' | 'done'

const STEP_MS = 560
const ACTION_MS = 640

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Drives a single scenario: streams the pre-delivery agent trace, waits for the
 * user's one-tap consent, then streams the post-action trace. Returns the lines
 * revealed so far plus the current phase.
 */
export function useScenarioRunner(scenario: Scenario) {
  const [lines, setLines] = useState<AgentLine[]>([])
  const [phase, setPhase] = useState<Phase>('idle')
  const timers = useRef<number[]>([])

  const clearTimers = useCallback(() => {
    timers.current.forEach((t) => window.clearTimeout(t))
    timers.current = []
  }, [])

  const stream = useCallback(
    (items: AgentLine[], gap: number, onDone: () => void) => {
      if (prefersReducedMotion()) {
        setLines((prev) => [...prev, ...items])
        onDone()
        return
      }
      items.forEach((line, i) => {
        const t = window.setTimeout(() => {
          setLines((prev) => [...prev, line])
          if (i === items.length - 1) onDone()
        }, gap * (i + 1))
        timers.current.push(t)
      })
    },
    [],
  )

  const start = useCallback(() => {
    clearTimers()
    setLines([])
    setPhase('thinking')
    const t = window.setTimeout(() => {
      stream(scenario.steps, STEP_MS, () => setPhase('awaiting'))
    }, 220)
    timers.current.push(t)
  }, [scenario, stream, clearTimers])

  const confirm = useCallback(() => {
    if (phase !== 'awaiting') return
    setPhase('acting')
    stream(scenario.onAction, ACTION_MS, () => setPhase('done'))
  }, [phase, scenario, stream])

  // Restart whenever the scenario changes.
  useEffect(() => {
    start()
    return clearTimers
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scenario.id])

  return { lines, phase, start, confirm }
}
