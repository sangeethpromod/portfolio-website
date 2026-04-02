'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Badge from '@/components/atoms/Badge'
import ExternalLink from '@/components/atoms/ExternalLink'
import { scaleIn } from '@/lib/motionVariants'

type ProjectCardProps = {
  title: string
  client: string
  tags: string[]
  description: string
  image: string
}

export default function ProjectCard({ title, client, tags, description, image }: ProjectCardProps) {
  return (
    <motion.article
      variants={scaleIn}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="group flex flex-col border-4 border-[var(--border)] rounded-2xl overflow-hidden bg-[var(--surface)] hover:border-[var(--accent)] transition-colors duration-300"
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-1 gap-3">
        <p className="font-mono text-xs text-[var(--muted)] uppercase tracking-widest">{client}</p>
        <h3 className="font-display text-xl font-bold text-[var(--fg)]">{title}</h3>
        <p className="font-body text-sm text-[var(--muted)] flex-1">{description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <div className="flex justify-end mt-2">
          <ExternalLink href="#">View Project</ExternalLink>
        </div>
      </div>
    </motion.article>
  )
}
