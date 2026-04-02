'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useActiveSection } from '@/hooks/useActiveSection'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const sectionIds = ['about', 'work', 'experience', 'skills', 'contact']

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeId = useActiveSection(sectionIds)

  return (
    <>
      {/* Floating pill nav — center-aligned */}
      <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="pill-nav flex items-center gap-1 px-3 py-2"
        >
          {/* Logo mark */}
          <Link href="#" className="flex items-center gap-2 px-3 py-1.5 mr-2" aria-label="Home">
            <span className="font-mono text-xs font-bold tracking-widest" style={{ color: 'var(--accent)' }}>SP</span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="px-4 py-2 rounded-full font-mono text-xs tracking-widest uppercase transition-all duration-200"
                style={{
                  color: activeId === href.slice(1) ? 'var(--fg)' : 'var(--fg-muted)',
                  background: activeId === href.slice(1) ? 'rgba(10,10,10,0.08)' : 'transparent',
                }}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA button */}
          <Link
            href="#contact"
            className="ml-2 px-5 py-2 rounded-full font-mono text-xs tracking-widest uppercase text-[#F2F0E9] transition-all duration-200 hover:opacity-80"
            style={{ background: 'var(--fg)' }}
          >
            Hire Me
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="flex md:hidden ml-1 w-8 h-8 items-center justify-center rounded-full hover:bg-black/5 transition-colors"
            aria-label="Open menu"
          >
            <Menu size={16} />
          </button>
        </motion.div>
      </header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex flex-col"
            style={{ background: 'var(--bg-stats)' }}
          >
            <div className="flex items-center justify-between px-6 pt-6">
              <span className="font-mono text-xs font-bold tracking-widest" style={{ color: 'var(--accent)' }}>SP</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[rgba(10,10,10,0.12)]"
                aria-label="Close menu"
              >
                <X size={16} />
              </button>
            </div>
            <div className="flex flex-col justify-center flex-1 px-8 gap-8">
              {navLinks.map(({ label, href }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className="text-display text-5xl transition-opacity hover:opacity-60"
                    style={{ color: 'var(--fg)' }}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
