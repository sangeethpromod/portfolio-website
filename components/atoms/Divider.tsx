import { cn } from '@/lib/utils'

type DividerProps = {
  accent?: boolean
  className?: string
}

export default function Divider({ accent = false, className }: DividerProps) {
  return (
    <hr
      className={cn(
        'border-t-4',
        accent ? 'border-[var(--accent)]' : 'border-[var(--border)]',
        className
      )}
    />
  )
}
