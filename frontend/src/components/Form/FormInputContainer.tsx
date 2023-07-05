import { ReactNode } from 'react'

type FormInputContainerProps = {
  children: ReactNode
}
export function FormInputContainer({ children }: FormInputContainerProps) {
  return <div className="flex flex-col gap-1">{children}</div>
}
