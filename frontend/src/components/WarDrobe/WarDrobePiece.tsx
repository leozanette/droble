import Image from 'next/image'
import { ReactNode } from 'react'

type WarDrobePieceProps = {
  children: ReactNode
}
export function WarDrobePiece({ children }: WarDrobePieceProps) {
  return (
    <div className="m-2 rounded bg-white">
      <Image
        src="/images/download.jpg"
        alt="foto camiseta"
        width={120}
        height={120}
      />
    </div>
  )
}
