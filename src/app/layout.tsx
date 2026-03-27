import BackToTopButton from "@/components/layout/BackToTopButton"
import PageIntro from "@/components/effects/PageIntro"
import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Spotlight from "@/components/effects/Spotlight"

export const metadata: Metadata = {
  title: "Ivan | Fullstack Developer",
  description:
    "Portfolio of a fullstack developer with strong frontend craft, modern motion, and scalable Next.js architecture.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative overflow-x-clip bg-slate-950 text-white antialiased">
        <a
          href="#content"
          className="skip-link absolute left-4 top-4 z-[70] rounded-full bg-sky-300 px-4 py-2 text-sm font-medium text-slate-950"
        >
          Skip to content
        </a>
        <PageIntro />
        <div className="glow top-0 left-1/2 -translate-x-1/2 -z-10" />
        <Spotlight />
        <Navbar />
        <BackToTopButton />
        <main id="content" className="relative z-10 w-full max-w-full overflow-x-clip">
          {children}
        </main>
      </body>
    </html>
  )
}
