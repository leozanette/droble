import { HTMLAttributes } from 'react'

type ErrorProps = HTMLAttributes<HTMLSpanElement> & {
  helperText?: string
}

export function FormInputError({ helperText }: ErrorProps) {
  return <span className="text-red-500">{helperText}</span>
}
