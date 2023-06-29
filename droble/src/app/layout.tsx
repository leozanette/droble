import { ReactNode } from 'react'
import './globals.css'

export const metadata = {
  title: 'Droble',
  description: 'Organize your style',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-zinc-700 text-zinc-50">{children}</body>
    </html>
  )
}
