import { ReactNode } from 'react'
import { PlusSquare } from 'lucide-react'

type WarDrobeRootProps = {
  children: ReactNode
  title: String
}
export function WarDrobeRoot({ children, title }: WarDrobeRootProps) {
  return (
    <>
      <div className="flex gap-6">
        <h1 className="text-slate-100">{title}</h1>
        <PlusSquare size={34} />
      </div>
      <section className="flex flex-wrap gap-3 bg-slate-50">{children}</section>
    </>
  )
}
