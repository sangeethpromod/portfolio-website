'use client'

import { motion } from 'framer-motion'
import { slideInLeft } from '@/lib/motionVariants'

type ExperienceItemProps = {
  role: string
  company: string
  period: string
  highlights: string[]
  projects?: string[]
}

export default function ExperienceItem({ role, company, period, highlights, projects }: ExperienceItemProps) {
  return (
    <motion.div
      variants={slideInLeft}
      className="flex gap-6"
    >
      {/* Orange vertical bar */}
      <div className="flex-shrink-0 w-1 bg-[var(--accent)] rounded-full" style={{ minHeight: '100%' }} />

      <div className="pb-10">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
          <h3 className="font-display text-lg font-bold text-[var(--fg)]">{role}</h3>
          <span className="text-[var(--accent)] font-body text-sm">@</span>
          <span className="font-body text-sm font-semibold text-[var(--fg)]">{company}</span>
        </div>
        <p className="font-mono text-xs text-[var(--muted)] uppercase tracking-widest mb-3">{period}</p>
        {projects && projects.length > 0 && (
          <p className="font-body text-xs text-[var(--muted)] mb-3 italic">
            Projects: {projects.join(', ')}
          </p>
        )}
        <ul className="space-y-2">
          {highlights.map((item, i) => (
            <li key={i} className="flex gap-2 font-body text-sm text-[var(--fg)]">
              <span className="text-[var(--accent)] mt-1 flex-shrink-0">▸</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
