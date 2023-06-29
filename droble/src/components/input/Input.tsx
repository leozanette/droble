import { InputHTMLAttributes, forwardRef, useId } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  helperText?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', name = '', helperText = '', ...props }, ref) => {
    const inputId = useId()
    return (
      <>
        <label htmlFor={inputId}>{props.label}</label>
        <input
          className="h-10 border border-zinc-200 px-3 text-zinc-600 shadow-sm"
          id={inputId}
          type={type}
          name={name}
          ref={ref}
          {...props}
        />
        {helperText.length > 0 && (
          <span className="text-red-500">{helperText}</span>
        )}
      </>
    )
  },
)
