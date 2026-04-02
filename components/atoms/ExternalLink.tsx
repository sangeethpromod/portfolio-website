import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

type ExternalLinkProps = {
  href: string
  children?: React.ReactNode
  className?: string
}

export default function ExternalLink({ href, children, className }: ExternalLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1 text-sm font-mono text-[var(--muted)] hover:text-[var(--accent)] transition-colors duration-200 group ${className ?? ''}`}
    >
      {children}
      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
    </Link>
  )
}
