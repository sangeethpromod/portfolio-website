import { cn } from '@/lib/utils'
import Link from 'next/link'

type ButtonProps = {
  variant: 'primary' | 'ghost' | 'icon'
  children: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({ variant, children, href, onClick, className, type = 'button' }: ButtonProps) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-body font-medium transition-all duration-200 cursor-pointer border-4'

  const variants = {
    primary: 'bg-[var(--accent)] text-white border-[var(--accent)] hover:opacity-90',
    ghost:   'bg-transparent border-[var(--fg)] text-[var(--fg)] hover:border-[var(--accent)] hover:text-[var(--accent)]',
    icon:    'bg-transparent border-[var(--fg)] text-[var(--fg)] hover:border-[var(--accent)] hover:text-[var(--accent)] px-3',
  }

  const classes = cn(base, variants[variant], className)

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
