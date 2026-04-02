import SectionLabel from '@/components/atoms/SectionLabel'

type SectionWrapperProps = {
  id: string
  label?: string
  children: React.ReactNode
  className?: string
}

export default function SectionWrapper({ id, label, children, className = '' }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 max-w-6xl mx-auto px-6 md:px-12 py-24 ${className}`}
    >
      {label && <SectionLabel label={label} />}
      {children}
    </section>
  )
}
