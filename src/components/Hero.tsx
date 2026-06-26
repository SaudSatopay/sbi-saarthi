import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

const moments = [
  'Idle balance',
  'EMI at risk',
  'Salary credited',
  'Dormant 9 months',
  'Tax window closing',
  'Scam pattern',
  'Bill due',
  'SIP opportunity',
  'Insurance lapse',
]

const ease = [0.22, 1, 0.36, 1] as const
const rise = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.085, duration: 0.7, ease },
  }),
}

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen pt-32 sm:pt-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          custom={0}
          variants={rise}
          initial="hidden"
          animate="show"
          className="inline-flex items-center gap-2 rounded-full chip px-3.5 py-1.5 text-xs tracking-wide text-muted"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-saffron" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-saffron" />
          </span>
          SBI Hackathon · GFF 2026 · Agentic AI &amp; Emerging Tech
        </motion.div>

        <motion.h1
          custom={1}
          variants={rise}
          initial="hidden"
          animate="show"
          className="mt-7 max-w-5xl font-display text-[clamp(2.7rem,8vw,6.5rem)] font-semibold leading-[0.95] tracking-tightest text-balance"
        >
          Your bank,
          <br />
          <span className="text-saffron">one step ahead.</span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={rise}
          initial="hidden"
          animate="show"
          className="mt-7 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
        >
          <span className="text-paper">Saarthi</span> is an agentic AI concierge for{' '}
          <span className="text-paper">Digital Engagement</span> — a crew of autonomous agents that senses each
          customer’s money-moments, reaches them in their own language, and{' '}
          <span className="text-paper">completes the action</span> under bank-grade guardrails.
        </motion.p>

        <motion.div
          custom={3}
          variants={rise}
          initial="hidden"
          animate="show"
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a
            href="#demo"
            className="group inline-flex items-center gap-2 rounded-full bg-saffron px-6 py-3.5 font-medium text-ink transition-transform hover:-translate-y-0.5 glow-saffron"
          >
            Watch it think
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#architecture"
            className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 font-medium text-paper transition-colors hover:bg-white/5"
          >
            See the architecture
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>

      <motion.div
        custom={4}
        variants={rise}
        initial="hidden"
        animate="show"
        className="relative mt-20 overflow-hidden border-y border-line py-5"
      >
        <div className="flex w-max animate-marquee gap-10 pr-10">
          {[...moments, ...moments].map((m, i) => (
            <span
              key={i}
              className="flex items-center gap-3 whitespace-nowrap font-mono text-sm uppercase tracking-[0.18em] text-muted"
            >
              <span className="h-1 w-1 rounded-full bg-saffron" />
              {m}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
