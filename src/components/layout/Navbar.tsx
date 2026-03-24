"use client"

import Link from "next/link"
import useActiveSection from "@/components/hooks/useActiveSection"

const sectionIds = [
  "hero",
  "projects",
  "skills",
  "about",
  "contact",
]

export default function Navbar() {

  const active = useActiveSection(sectionIds)

  return (
    <header className="fixed top-0 w-full backdrop-blur-md border-b border-white/10 z-50">

      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link href="#home" className="text-lg font-bold">
          Ivan.dev
        </Link>

        <div className="flex gap-6 text-sm">

          <a
            href="#projects"
            className={active === "projects" ? "text-white" : "text-white/50"}
          >
            Projects
          </a>

          <a
            href="#skills"
            className={active === "skills" ? "text-white" : "text-white/50"}
          >
            Skills
          </a>

          <a
            href="#about"
            className={active === "about" ? "text-white" : "text-white/50"}
          >
            About
          </a>

          <a
            href="#contact"
            className={active === "contact" ? "text-white" : "text-white/50"}
          >
            Contact
          </a>

        </div>

      </nav>

    </header>
  )
}
