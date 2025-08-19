import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ThemeProvider } from "@/components/theme-provider"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Broadway Events - Premier Event Venue in Garland, Texas",
  description:
    "Rent our beautiful event hall in Garland, TX for graduations, parties, conferences, photography, baby showers and more. Accommodates 100+ guests with full amenities.",
  keywords:
    "event hall, venue rental, Garland Texas, graduation parties, conferences, baby showers, photography studio, event space, Broadway Events",
  openGraph: {
    title: "Broadway Events - Premier Event Venue in Garland, Texas",
    description:
      "Rent our beautiful event hall in Garland, TX for graduations, parties, conferences, photography, baby showers and more.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-inter antialiased">
        <ThemeProvider>
        <Navbar />
        {children}
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
