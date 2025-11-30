import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, Playfair_Display } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Family Dough Co. | Bake Fresh. Eat Well. Live Better.",
  description: "From daily loaves to weekend treats, we guide you to bake easily, affordably, and with confidence.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <head>
        <meta name="apple-mobile-web-app-title" content="Familydough" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
