'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeUp } from '@/lib/motionVariants'
import { person, stats } from '@/data/portfolio'

export default function AboutSection() {
  return (
    <section className="bg-about" id="about">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-28">

        {/* Large editorial heading */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.p variants={fadeUp} className="label-mono mb-8" style={{ color: 'rgba(10,10,10,0.45)' }}>
            /// 01 — About
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-display mb-16"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', color: 'var(--fg)', maxWidth: '800px' }}
          >
            Frontend to infrastructure. Design to deployment.
          </motion.h2>
        </motion.div>

        {/* Hairline + two-column copy */}
        <div className="hairline mb-16" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start"
        >
          <motion.div variants={fadeUp}>
            <p className="font-body text-lg leading-relaxed" style={{ color: 'rgba(10,10,10,0.7)' }}>
              {person.summary}
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div variants={fadeUp} className="grid grid-cols-2 gap-x-12 gap-y-10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-display mb-1" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--fg)' }}>
                  {stat.value}
                </p>
                <p className="label-mono" style={{ color: 'rgba(10,10,10,0.45)' }}>
                  /// {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
