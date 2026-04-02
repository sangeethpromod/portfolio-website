import type { Metadata } from 'next'
import './globals.css'
import { playfair, dmSans, jetBrains } from './fonts'
import Navbar from '@/components/organisms/Navbar'

export const metadata: Metadata = {
  title: 'Sangeeth Promod — Senior Software Engineer',
  description: 'Portfolio of Sangeeth Promod — frontend engineering, UX design, cloud infrastructure, and FinOps.',
  openGraph: {
    title: 'Sangeeth Promod',
    description: 'Senior Software Engineer | Frontend · Cloud · FinOps',
    url: 'https://sangeethpromod.wixstudio.io/portfolio',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${playfair.variable} ${dmSans.variable} ${jetBrains.variable}`}
    >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
