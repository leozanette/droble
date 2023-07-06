'use client'

import { WarDrobe } from '@/components/WarDrobe'

export default function Home() {
  console.log('renderizou')
  return (
    <div className="flex h-screen flex-col">
      <div className="flex flex-1">
        <aside className="w-64 bg-zinc-900 p-6">SideBar</aside>
        <main className="flex-1 flex-col gap-10 p-6">
          <WarDrobe.Root title="Peças Parte Superior">
            <WarDrobe.Piece>Peça1</WarDrobe.Piece>
            <WarDrobe.Piece>Peça1</WarDrobe.Piece>
            <WarDrobe.Piece>Peça1</WarDrobe.Piece>
            <WarDrobe.Piece>Peça1</WarDrobe.Piece>
            <WarDrobe.Piece>Peça1</WarDrobe.Piece>
            <WarDrobe.Piece>Peça1</WarDrobe.Piece>
            <WarDrobe.Piece>Peça1</WarDrobe.Piece>
            <WarDrobe.Piece>Peça1</WarDrobe.Piece>
            <WarDrobe.Piece>Peça1</WarDrobe.Piece>
          </WarDrobe.Root>
        </main>
      </div>
      <footer className="border-zinc-700 bg-zinc-800 p-6">Footer</footer>
    </div>
  )
}
