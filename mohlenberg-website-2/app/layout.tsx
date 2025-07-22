import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Møhlenberg ApS',
  description: 'Professionel snedker og montage',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="da">
      <body>{children}</body>
    </html>
  )
}
