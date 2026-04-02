'use client'

import { motion } from 'framer-motion'
import { staggerContainer, slideInLeft } from '@/lib/motionVariants'
import { experience } from '@/data/portfolio'

export default function ExperienceSection() {
  return (
    <section className="bg-exp" id="experience">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-28">

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h3 variants={slideInLeft} className="section-label mb-8" aria-label="Section 3: Experience">
            {'/// 03 — Experience'}
          </motion.h3>
          <motion.h2
            variants={slideInLeft}
            className="text-display mb-16"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', color: 'var(--fg)' }}
          >
            Work History
          </motion.h2>
        </motion.div>

        <div className="hairline" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              variants={slideInLeft}
              className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 py-12"
              style={{ borderBottom: '1px solid rgba(10,10,10,0.10)' }}
            >
              {/* Left: role meta */}
              <div>
                <p className="font-body font-semibold text-base mb-1" style={{ color: 'var(--fg)' }}>{exp.role}</p>
                <p className="label-mono mb-2" style={{ color: 'var(--accent)' }}>{'/// '}{exp.company}</p>
                <p className="label-mono" style={{ color: 'rgba(10,10,10,0.4)' }}>{exp.period}</p>
              </div>

              {/* Right: highlights */}
              <div className="flex flex-col gap-3">
                {exp.highlights.map((item, j) => (
                  <div key={j} className="flex gap-3 items-start">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--accent)' }} />
                    <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(10,10,10,0.7)' }}>{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
