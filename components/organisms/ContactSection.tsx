'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import { staggerContainer, fadeUp } from '@/lib/motionVariants'
import { person } from '@/data/portfolio'
import { ArrowRight, Mail, Linkedin, CheckCircle } from 'lucide-react'

type FormValues = { name: string; email: string; message: string }

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>()

  return (
    <section className="bg-contact" id="contact">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-28">

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.p variants={fadeUp} className="label-mono mb-8" style={{ color: 'rgba(242,240,233,0.4)' }}>
            /// 05 — Contact
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-display mb-16"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', color: 'var(--fg-light)' }}
          >
            Let's build something together.
          </motion.h2>
        </motion.div>

        <div className="hairline-dark mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Left: copy + direct links */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col gap-8"
          >
            <motion.p variants={fadeUp} className="font-body text-lg leading-relaxed" style={{ color: 'rgba(242,240,233,0.55)' }}>
              Open to new opportunities, freelance projects, and interesting conversations.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <a
                href={`mailto:${person.email}`}
                className="arrow-btn"
              >
                <span className="arrow-circle"><Mail size={14} /></span>
                {person.email}
              </a>
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="arrow-btn"
              >
                <span className="arrow-circle"><Linkedin size={14} /></span>
                linkedin.com/in/sangeeth-promod
              </a>
            </motion.div>
          </motion.div>

          {/* Right: form */}
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center gap-4 py-20 rounded-2xl"
                style={{ border: '1px solid rgba(242,240,233,0.15)' }}
              >
                <CheckCircle size={40} style={{ color: 'var(--accent)' }} />
                <p className="text-display text-2xl" style={{ color: 'var(--fg-light)' }}>Message sent!</p>
                <p className="label-mono" style={{ color: 'rgba(242,240,233,0.4)' }}>/// I'll be in touch soon</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                onSubmit={handleSubmit(() => setSubmitted(true))}
                className="flex flex-col gap-5"
              >
                {[
                  { name: 'name', label: '/// Name', placeholder: 'Your name', type: 'text', as: 'input' as const },
                  { name: 'email', label: '/// Email', placeholder: 'your@email.com', type: 'email', as: 'input' as const },
                ].map((field) => (
                  <motion.div key={field.name} variants={fadeUp} className="flex flex-col gap-2">
                    <label htmlFor={field.name} className="label-mono" style={{ color: 'rgba(242,240,233,0.4)' }}>
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      {...register(field.name as keyof FormValues, { required: true })}
                      className="w-full bg-transparent py-4 font-body text-sm transition-colors duration-200 focus:outline-none"
                      style={{
                        borderBottom: '1px solid rgba(242,240,233,0.2)',
                        color: 'var(--fg-light)',
                      }}
                      onFocus={e => e.target.style.borderBottomColor = 'rgba(242,240,233,0.6)'}
                      onBlur={e => e.target.style.borderBottomColor = 'rgba(242,240,233,0.2)'}
                    />
                  </motion.div>
                ))}

                <motion.div variants={fadeUp} className="flex flex-col gap-2">
                  <label htmlFor="message" className="label-mono" style={{ color: 'rgba(242,240,233,0.4)' }}>
                    /// Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={4}
                    {...register('message', { required: true })}
                    className="w-full bg-transparent py-4 font-body text-sm resize-none transition-colors duration-200 focus:outline-none"
                    style={{
                      borderBottom: '1px solid rgba(242,240,233,0.2)',
                      color: 'var(--fg-light)',
                    }}
                    onFocus={e => e.target.style.borderBottomColor = 'rgba(242,240,233,0.6)'}
                    onBlur={e => e.target.style.borderBottomColor = 'rgba(242,240,233,0.2)'}
                  />
                </motion.div>

                <motion.div variants={fadeUp} className="mt-2">
                  <button
                    type="submit"
                    className="flex items-center gap-3 px-8 py-4 rounded-full font-mono text-xs tracking-widest uppercase transition-opacity hover:opacity-80"
                    style={{ background: 'var(--fg-light)', color: 'var(--fg)' }}
                  >
                    Send Message
                    <ArrowRight size={14} />
                  </button>
                </motion.div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
