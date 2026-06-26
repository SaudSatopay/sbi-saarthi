export default function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-sm text-saffron">{index}</span>
      <span className="h-px w-10 bg-line" />
      <span className="font-mono text-xs uppercase tracking-[0.22em] text-muted">{title}</span>
    </div>
  )
}
