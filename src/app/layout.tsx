import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Spotlight from "@/components/effects/Spotlight"

export const metadata: Metadata = {
  title: "Ivan | Full Stack Developer",
  description:
    "Portfolio of a Full Stack Developer specialized in React, Next.js and Node.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative grid-background text-white">

        {/* background glow */}
        <div className="glow top-0 left-1/2 -translate-x-1/2 -z-10" />

        {/* Spotlight */}

        <Spotlight />

        {/* navbar */}
        <Navbar />

        {/* main content */}
        <main className="relative z-10">
          {children}
        </main>

      </body>
    </html>
  )
}