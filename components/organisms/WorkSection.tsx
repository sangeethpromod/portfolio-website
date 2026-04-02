'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/motionVariants'
import { projects } from '@/data/portfolio'

export default function WorkSection() {
  return (
    <section className="bg-work" id="work">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-28">

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.p variants={fadeUp} className="label-mono mb-8" style={{ color: 'rgba(10,10,10,0.45)' }}>
            /// 02 — Work
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-display mb-16"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', color: 'var(--fg)' }}
          >
            Selected Projects
          </motion.h2>
        </motion.div>

        <div className="hairline mb-16" />

        {/* Project cards — dark on light */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              variants={fadeUp}
              className="dark-card group cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3">
                <p className="label-mono" style={{ color: 'rgba(242,240,233,0.4)' }}>
                  /// {project.client}
                </p>
                <h3 className="font-display font-bold text-xl" style={{ color: 'var(--fg-light)' }}>
                  {project.title}
                </h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(242,240,233,0.55)' }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="label-mono px-3 py-1 rounded-full"
                      style={{
                        border: '1px solid rgba(242,240,233,0.12)',
                        color: 'rgba(242,240,233,0.5)',
                        fontSize: '0.65rem',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow CTA */}
                <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(242,240,233,0.1)' }}>
                  <span className="arrow-btn">
                    <span className="arrow-circle">
                      <ArrowRight size={14} />
                    </span>
                    Discover
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
