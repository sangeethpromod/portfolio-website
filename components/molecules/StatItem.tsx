type StatItemProps = {
  value: string
  label: string
}

export default function StatItem({ value, label }: StatItemProps) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-display text-4xl md:text-5xl font-bold text-[var(--accent)]">{value}</span>
      <span className="font-mono text-xs uppercase tracking-widest text-[var(--muted)]">{label}</span>
    </div>
  )
}
