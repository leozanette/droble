import { InputHTMLAttributes, forwardRef, useId } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  placeholder?: string
  label?: string
}

export const FormInput = forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', name = '', placeholder, label, ...props }, ref) => {
    const inputId = useId()
    return (
      <>
        <label htmlFor={inputId}>{label}</label>
        <input
          className="h-10 border border-zinc-200 px-3 text-zinc-600 shadow-sm"
          id={inputId}
          type={type}
          name={name}
          placeholder={placeholder}
          ref={ref}
          {...props}
        />
      </>
    )
  },
)
