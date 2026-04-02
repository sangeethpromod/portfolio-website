'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/motionVariants'
import { person } from '@/data/portfolio'

const codeLines = [
  '/// SENIOR SOFTWARE ENGINEER',
  '/// FRONTEND · UX · CLOUD · FINOPS',
  '',
  'MODULE SANGEETH::EXPERIENCE {',
  '',
  '  /// 3+ YEARS AT PUMEX INFOTECH',
  '  /// FORTUNE 500 FINTECH CLIENT',
  '  PUBLIC FUN DELIVERED() -> RESULTS {',
  '    CLOUD_SAVINGS: $2M+,',
  '    BUILD_TIME: 7MIN → 2MIN,',
  '    CERTS: 4,',
  '    RETURN TRUE',
  '  }',
  '',
  '}',
  '',
  'MODULE SANGEETH::STACK {',
  '',
  '  /// FRONTEND EXCELLENCE',
  '  PUBLIC FUN CRAFT() -> TECH {',
  '    NEXT_JS, REACT, TYPESCRIPT,',
  '    TAILWIND, FIGMA, AWS,',
  '    RETURN PRODUCTION_GRADE',
  '  }',
  '',
  '  /// CLOUD & FINOPS',
  '  PUBLIC FUN OPTIMISE() -> SAVINGS {',
  '    CLOUDHEALTH, S3, EC2, RDS,',
  '    RETURN $2_000_000',
  '  }',
  '',
  '}',
  '',
  'MODULE SANGEETH::PHILOSOPHY {',
  '',
  '  /// DESIGN-LED ENGINEERING',
  '  PUBLIC FUN BUILD() -> IMPACT {',
  '    FIGMA → CODE → PRODUCTION,',
  '    ZERO_COMPROMISE: TRUE,',
  '    RETURN EXCELLENCE',
  '  }',
  '',
  '}',
]

export default function HeroSection() {
  return (
    <section className="bg-hero min-h-[100svh] flex flex-col pt-28 pb-16 overflow-hidden" id="hero">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 w-full flex-1 flex flex-col">

        {/* Top mono label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="label-mono mb-12"
          style={{ color: 'var(--section-label-light)' }}
        >
          {`/// Portfolio \u00B7 ${new Date().getFullYear()}`}
        </motion.p>

        {/* Main grid */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 items-end">

          {/* Left: Massive headline */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-8"
          >
            <div>
              <motion.h1
                variants={fadeUp}
                className="text-display"
                style={{ fontSize: 'clamp(3.5rem, 8vw, 8rem)', color: 'var(--fg)' }}
              >
                Senior
              </motion.h1>
              <motion.h1
                variants={fadeUp}
                className="text-display"
                style={{ fontSize: 'clamp(3.5rem, 8vw, 8rem)', color: 'var(--fg)' }}
              >
                Software
              </motion.h1>
              <motion.h1
                variants={fadeUp}
                className="text-display"
                style={{ fontSize: 'clamp(3.5rem, 8vw, 8rem)', color: 'var(--fg)' }}
              >
                Engineer
              </motion.h1>
            </div>

            <motion.div variants={fadeUp} className="flex items-center gap-8">
              <Link
                href="#work"
                className="flex items-center gap-3 px-8 py-4 rounded-full font-mono text-xs tracking-widest uppercase text-[#F2F0E9] hover:opacity-80 transition-opacity"
                style={{ background: 'var(--fg)' }}
              >
                View Work
                <ArrowRight size={14} />
              </Link>
              <Link
                href="#contact"
                className="font-mono text-xs tracking-widest uppercase transition-opacity hover:opacity-60"
                style={{ color: 'var(--fg)' }}
              >
                Get in touch →
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Code panel */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="code-panel hidden lg:block pb-4"
            aria-hidden="true"
          >
            {codeLines.map((line, i) => (
              <div key={i}>{line || '\u00A0'}</div>
            ))}
          </motion.div>
        </div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="label-mono mt-12 pt-6 border-t border-[rgba(10,10,10,0.12)]"
          style={{ color: 'rgba(10,10,10,0.45)' }}
        >
          {person.tagline}
        </motion.p>
      </div>
    </section>
  )
}
