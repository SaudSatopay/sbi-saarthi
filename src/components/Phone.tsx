import { motion, AnimatePresence } from 'framer-motion'
import { Check, Phone as PhoneIcon, ShieldCheck } from 'lucide-react'
import { ACCENT_HEX, type Lang, type Scenario } from '../data/scenarios'
import type { Phase } from '../lib/useScenarioRunner'

const ease = [0.22, 1, 0.36, 1] as const

const channelStyle: Record<Scenario['channel'], { name: string; color: string; sub: string }> = {
  WhatsApp: { name: 'WhatsApp', color: '#25D366', sub: 'Saarthi · SBI · online' },
  YONO: { name: 'YONO by SBI', color: '#5AA9FF', sub: 'Saarthi assistant' },
  Voice: { name: 'Voice call', color: '#B79CFF', sub: 'Saarthi · vernacular' },
}

function TypingBubble({ accent }: { accent: string }) {
  return (
    <div className="max-w-[60%] self-start rounded-2xl rounded-tl-md border border-white/10 bg-white/[0.06] px-4 py-3">
      <div className="flex gap-1">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: accent }}
            animate={{ opacity: [0.25, 1, 0.25], y: [0, -3, 0] }}
            transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </div>
    </div>
  )
}

export default function Phone({
  scenario,
  lang,
  phase,
  onConfirm,
}: {
  scenario: Scenario
  lang: Lang
  phase: Phase
  onConfirm: () => void
}) {
  const m = scenario.message[lang]
  const ch = channelStyle[scenario.channel]
  const accent = ACCENT_HEX[scenario.accent]
  const showMsg = phase === 'awaiting' || phase === 'acting' || phase === 'done'
  const showSuccess = phase === 'done'
  const typing = phase === 'thinking'

  return (
    <div className="relative mx-auto w-full max-w-[330px]">
      <div
        className="absolute inset-2 -z-10 rounded-[2.8rem] blur-3xl"
        style={{ background: `${accent}22` }}
      />
      <div className="relative rounded-[2.6rem] border border-white/[0.12] bg-ink-3 p-2.5 shadow-2xl">
        <div className="overflow-hidden rounded-[2.1rem] bg-[#0b0f17]">
          {/* status bar */}
          <div className="relative flex items-center justify-between px-6 pb-1 pt-3 text-[0.65rem] text-white/45">
            <span>9:41</span>
            <span className="absolute left-1/2 top-2 h-4 w-20 -translate-x-1/2 rounded-full bg-black" />
            <span>5G</span>
          </div>

          {/* channel header */}
          <div className="flex items-center gap-3 border-b border-white/[0.08] px-4 py-3">
            <span
              className="grid h-9 w-9 place-items-center rounded-full"
              style={{ background: `${ch.color}22`, color: ch.color }}
            >
              {scenario.channel === 'Voice' ? (
                <PhoneIcon className="h-4 w-4" />
              ) : (
                <ShieldCheck className="h-4 w-4" />
              )}
            </span>
            <div className="leading-tight">
              <div className="flex items-center gap-1.5 text-sm font-medium">
                {ch.name}
                <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: ch.color }} />
              </div>
              <div className="text-[0.7rem] text-white/45">{ch.sub}</div>
            </div>
          </div>

          {/* chat */}
          <div className="flex min-h-[372px] flex-col gap-3 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:18px_18px] px-4 py-4">
            <div className="mx-auto rounded-full bg-white/5 px-3 py-1 text-center text-[0.64rem] text-white/40">
              {scenario.persona.name} · {scenario.moment}
            </div>

            {typing && <TypingBubble accent={accent} />}

            <AnimatePresence>
              {showMsg && (
                <motion.div
                  key="msg"
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, ease }}
                  className="max-w-[88%] self-start"
                >
                  <div className="rounded-2xl rounded-tl-md border border-white/10 bg-white/[0.06] px-4 py-3 font-indic">
                    <div className="mb-1 text-[0.72rem] font-semibold" style={{ color: accent }}>
                      {m.greeting}
                    </div>
                    <p className="text-[0.86rem] leading-relaxed text-paper/90">{m.body}</p>
                  </div>

                  {phase === 'awaiting' && (
                    <motion.button
                      onClick={onConfirm}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 }}
                      className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 font-indic"
                      style={{ background: accent }}
                    >
                      {m.cta}
                    </motion.button>
                  )}

                  {phase === 'acting' && (
                    <div className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm text-muted">
                      <span
                        className="h-4 w-4 animate-spin rounded-full border-2 border-white/20"
                        style={{ borderTopColor: accent }}
                      />
                      processing…
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showSuccess && (
                <motion.div
                  key="ok"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease }}
                  className="max-w-[88%] self-end"
                >
                  <div
                    className="rounded-2xl rounded-tr-md px-4 py-3 font-indic"
                    style={{ background: `${accent}1f`, border: `1px solid ${accent}55` }}
                  >
                    <div
                      className="mb-1 flex items-center gap-1.5 text-[0.72rem] font-semibold"
                      style={{ color: accent }}
                    >
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      Confirmed
                    </div>
                    <p className="text-[0.84rem] leading-relaxed text-paper/90">{m.success}</p>
                  </div>
                  <div className="mt-2 flex items-center justify-end text-[0.66rem] text-white/45">
                    <span className="rounded-full bg-white/5 px-2 py-0.5">
                      {scenario.outcome.label}: <span className="text-paper/80">{scenario.outcome.value}</span>
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
