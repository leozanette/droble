import { ReactNode, FormHTMLAttributes } from 'react'

type FormRootProps = FormHTMLAttributes<HTMLFormElement> & {
  children: ReactNode
  handleSubmit: Function
}
export function FormRoot({ children, handleSubmit }: FormRootProps) {
  return (
    <form className="flex max-w-xs flex-col gap-4" onSubmit={handleSubmit()}>
      {children}
    </form>
  )
}
