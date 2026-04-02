'use client'

import Link from 'next/link'
import { Linkedin, Github } from 'lucide-react'
import { person } from '@/data/portfolio'

export default function Footer() {
  return (
    <footer className="bg-footer">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-12">
        <div className="hairline-dark mb-12" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Left: wordmark + copyright */}
          <div>
            <p className="text-display text-2xl mb-1" style={{ color: 'var(--fg-light)' }}>Sangeeth Promod</p>
            <p className="label-mono" style={{ color: 'rgba(242,240,233,0.35)' }}>
              /// Senior Software Engineer · © {new Date().getFullYear()}
            </p>
          </div>

          {/* Right: social links */}
          <div className="flex items-center gap-4">
            {[
              { href: person.linkedin, icon: <Linkedin size={15} />, label: 'LinkedIn' },
              { href: 'https://github.com/', icon: <Github size={15} />, label: 'GitHub' },
            ].map(({ href, icon, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-white/10"
                style={{ border: '1px solid rgba(242,240,233,0.15)', color: 'rgba(242,240,233,0.5)' }}
              >
                {icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
