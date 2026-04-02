import Badge from '@/components/atoms/Badge'

type SkillGroupProps = {
  category: string
  items: string[]
}

export default function SkillGroup({ category, items }: SkillGroupProps) {
  return (
    <div className="flex flex-col gap-3">
      <p className="font-mono text-xs uppercase tracking-widest text-[var(--muted)]">{category}</p>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
    </div>
  )
}
