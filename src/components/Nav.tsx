import { useEffect, useState } from 'react'
import { Sparkles } from 'lucide-react'

const links = [
  { href: '#demo', label: 'Live demo' },
  { href: '#impact', label: 'Impact' },
  { href: '#architecture', label: 'Architecture' },
  { href: '#why', label: 'Why agentic' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled ? 'border-b border-line bg-ink/70 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-saffron text-ink">
            <Sparkles className="h-4 w-4" strokeWidth={2.4} />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Saarthi
            <span className="ml-1.5 align-super font-sans text-[0.6rem] font-medium tracking-[0.2em] text-muted">
              SBI
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted transition-colors hover:text-paper">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#demo"
          className="rounded-full bg-paper px-4 py-2 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
        >
          Launch demo
        </a>
      </div>
    </header>
  )
}
