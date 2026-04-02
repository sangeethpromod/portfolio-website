import { cn } from '@/lib/utils'

type BadgeProps = {
  children: React.ReactNode
  className?: string
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full border-4 border-[var(--border)] font-mono text-xs text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200 cursor-default',
        className
      )}
    >
      {children}
    </span>
  )
}
