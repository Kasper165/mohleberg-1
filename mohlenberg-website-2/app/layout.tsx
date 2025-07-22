import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Møhlenberg Snedker Og Montage ApS',
  description: 'Professionel montering af køkkener, døre, vinduer og lister – kvalitet og finish i top.',
  generator: 'v0.dev',
  keywords: ['snedker', 'montage', 'køkkenmontering', 'døre', 'vinduer', 'lister', 'Møhlenberg'],
  authors: [{ name: 'Møhlenberg Snedker Og Montage ApS' }],
  creator: 'Møhlenberg Snedker Og Montage ApS',
  openGraph: {
    title: 'Møhlenberg Snedker Og Montage ApS',
    description: 'Kvalitetssnedkerarbejde og professionel montage i hele Danmark.',
    url: 'https://moehlenberg.dk', // ← ret til din faktiske domain
    siteName: 'Møhlenberg Snedker Og Montage',
    locale: 'da_DK',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg', // ← tilføj denne fil i din public-mappe
        width: 1200,
        height: 630,
        alt: 'Møhlenberg montage og snedkerarbejde',
      },
    ],
  },
  icons: {
    icon: '/favicon.ico', // ← placer favicon i public/
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="da">
      <body className={`${inter.className} min-h-screen bg-white text-gray-900 antialiased`}>
        {children}
      </body>
    </html>
  )
}
