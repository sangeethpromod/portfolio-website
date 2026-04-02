import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

type ContactFieldProps = {
  label: string
  name: string
  as?: 'input' | 'textarea'
  type?: string
  placeholder?: string
  register?: UseFormRegisterReturn
  error?: string
}

export default function ContactField({
  label, name, as = 'input', type = 'text', placeholder, register, error
}: ContactFieldProps) {
  const sharedClass = `
    w-full bg-transparent border-4 border-[var(--border)] rounded-xl
    px-4 py-3 font-body text-sm text-[var(--fg)] placeholder:text-[var(--muted)]
    focus:outline-none focus:border-[var(--accent)] transition-colors duration-200
    appearance-none
  `.trim()

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
        {label}
      </label>
      {as === 'textarea' ? (
        <textarea
          id={name}
          placeholder={placeholder}
          rows={5}
          className={`${sharedClass} resize-none`}
          {...(register as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={name}
          type={type}
          placeholder={placeholder}
          className={sharedClass}
          {...(register as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      {error && <p className="font-mono text-xs text-red-500">{error}</p>}
    </div>
  )
}
