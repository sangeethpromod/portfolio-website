'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'

type NavItemProps = {
  href: string
  children: React.ReactNode
  active?: boolean
  onClick?: () => void
}

export default function NavItem({ href, children, active, onClick }: NavItemProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        'relative font-body text-sm font-medium transition-colors duration-200 pb-1 group',
        active ? 'text-[var(--accent)]' : 'text-[var(--fg)] hover:text-[var(--accent)]'
      )}
    >
      {children}
      <span
        className={cn(
          'absolute bottom-0 left-0 h-[2px] bg-[var(--accent)] transition-all duration-300',
          active ? 'w-full' : 'w-0 group-hover:w-full'
        )}
      />
    </Link>
  )
}
