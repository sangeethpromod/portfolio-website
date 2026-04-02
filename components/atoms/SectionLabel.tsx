type SectionLabelProps = {
  label: string
}

export default function SectionLabel({ label }: SectionLabelProps) {
  return (
    <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-4">
      {label}
    </p>
  )
}
