'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeUp } from '@/lib/motionVariants'
import { skills } from '@/data/portfolio'

export default function SkillsSection() {
  return (
    <section className="bg-skills" id="skills">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-28">

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.p variants={fadeUp} className="label-mono mb-8" style={{ color: 'rgba(10,10,10,0.45)' }}>
            /// 04 — Skills
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-display mb-16"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', color: 'var(--fg)' }}
          >
            What I Work With
          </motion.h2>
        </motion.div>

        <div className="hairline" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              variants={fadeUp}
              className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 py-10 items-center"
              style={{ borderBottom: '1px solid rgba(10,10,10,0.10)' }}
            >
              {/* Category label */}
              <p className="label-mono" style={{ color: 'rgba(10,10,10,0.45)' }}>
                /// {group.category}
              </p>

              {/* Skills as flowing text */}
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-sm px-4 py-2 rounded-full transition-all duration-200 cursor-default"
                    style={{
                      border: '1px solid rgba(10,10,10,0.15)',
                      color: 'rgba(10,10,10,0.7)',
                    }}
                    onMouseEnter={(e: React.MouseEvent<HTMLSpanElement>) => {
                      const el = e.currentTarget
                      el.style.borderColor = 'var(--accent)'
                      el.style.color = 'var(--accent)'
                    }}
                    onMouseLeave={(e: React.MouseEvent<HTMLSpanElement>) => {
                      const el = e.currentTarget
                      el.style.borderColor = 'rgba(10,10,10,0.15)'
                      el.style.color = 'rgba(10,10,10,0.7)'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
