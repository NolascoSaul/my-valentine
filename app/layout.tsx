import React from "react"
import type { Metadata } from 'next'
import { Caveat, Quicksand } from 'next/font/google'

import './globals.css'

const caveat = Caveat({ 
  subsets: ['latin'],
  variable: '--font-handwritten',
})

const quicksand = Quicksand({ 
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'San Valentín',
  description: 'Una carta especial para mi Artemiza.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${caveat.variable} ${quicksand.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
