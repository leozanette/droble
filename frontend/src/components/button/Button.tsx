import { ButtonHTMLAttributes, forwardRef } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, type, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className="h-10 rounded bg-rose-500 font-semibold text-white hover:bg-rose-600"
      >
        {children}
      </button>
    )
  },
)
