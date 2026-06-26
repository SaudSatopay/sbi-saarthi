import { Github, ArrowUpRight } from 'lucide-react'
import { TEAM } from '../data/content'

const REPO = 'https://github.com/SaudSatopay/sbi-saarthi'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line pt-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted">{TEAM.event}</div>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.02] tracking-tightest sm:text-6xl">
              Make every customer feel <span className="text-saffron">personally</span> banked.
            </h2>
          </div>
          <a
            href={REPO}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-paper px-5 py-3 font-medium text-ink transition-transform hover:-translate-y-0.5"
          >
            <Github className="h-4 w-4" />
            View the code
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="mt-16 grid gap-8 border-t border-line py-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-muted">Team</div>
            <div className="mt-3 font-display text-lg font-semibold">{TEAM.name}</div>
            <ul className="mt-2 space-y-1 text-sm text-muted">
              {TEAM.members.map((m) => (
                <li key={m.name}>
                  {m.name}
                  {m.org ? ` — ${m.org}` : ''}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-muted">Theme</div>
            <div className="mt-3 text-sm text-paper">{TEAM.theme}</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-muted">Problem statement</div>
            <div className="mt-3 text-sm text-paper">{TEAM.problem}</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-muted">Explore</div>
            <ul className="mt-3 space-y-1 text-sm">
              <li>
                <a href="#demo" className="text-muted transition-colors hover:text-paper">
                  Live demo
                </a>
              </li>
              <li>
                <a href="#architecture" className="text-muted transition-colors hover:text-paper">
                  Architecture
                </a>
              </li>
              <li>
                <a href={REPO} target="_blank" rel="noreferrer" className="text-muted transition-colors hover:text-paper">
                  GitHub repository
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pointer-events-none select-none pb-4 pt-4">
          <div className="font-display text-[19vw] font-semibold leading-none tracking-tightest text-white/[0.035]">
            Saarthi
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-line py-6 text-xs text-muted sm:flex-row">
          <span>© 2026 Team SAS CODIES · Built for the SBI Hackathon @ GFF 2026</span>
          <span>Concept prototype · not affiliated with State Bank of India</span>
        </div>
      </div>
    </footer>
  )
}
