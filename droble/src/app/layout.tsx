import './globals.css'

export const metadata = {
  title: 'Droble',
  description: 'Organize your style',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="text-zinc-50 bg-zinc-700">{children}</body>
    </html>
  )
}
