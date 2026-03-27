"use client"

import ScrollProgress from "@/components/layout/ScrollProgress"
import { navigationLinks } from "@/data/site"
import { useActiveSection } from "@/hooks/useActiveSection"
import { scrollToSectionById } from "@/lib/section-navigation"
import { cn } from "@/lib/utils"
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { MouseEvent, useEffect, useMemo, useState } from "react"

export default function Navbar() {
  const active = useActiveSection()
  const shouldReduceMotion = useReducedMotion() ?? false
  const [menuOpen, setMenuOpen] = useState(false)

  const currentSection = active
  const currentLabel = useMemo(
    () => navigationLinks.find((link) => link.id === currentSection)?.label ?? "Home",
    [currentSection]
  )

  useEffect(() => {
    if (!menuOpen) {
      return
    }

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [menuOpen])

  const navigateToSection = (id: (typeof navigationLinks)[number]["id"]) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()

    scrollToSectionById(id, {
      shouldReduceMotion,
      onBeforeScroll: () => setMenuOpen(false),
    })
  }

  return (
    <motion.header
      data-navbar-shell="true"
      initial={false}
      animate={{ y: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-x-0 top-0 z-50 px-2 pt-[calc(0.5rem+env(safe-area-inset-top))] transition-[opacity,transform] duration-200 sm:px-4 md:px-6"
    >
      <nav
        data-navbar-root="true"
        className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-[1.15rem] border border-white/10 bg-slate-950/80 px-2.5 py-2.5 shadow-[0_18px_80px_rgba(2,8,23,0.42)] backdrop-blur-2xl transition-all duration-300 sm:rounded-[1.6rem] sm:px-4 sm:py-3 md:px-5"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/55 to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-white/16 to-transparent"
        />

        <div className="flex items-center justify-between gap-2.5">
          <div className="min-w-0 flex items-center gap-2.5 sm:gap-3">
            <Link
              href="#hero"
              onClick={navigateToSection("hero")}
              className="inline-flex min-w-0 max-w-[calc(100vw-6rem)] items-center truncate rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[13px] font-semibold tracking-[0.1em] text-white transition hover:border-white/18 hover:bg-white/[0.07] sm:max-w-none sm:px-4 sm:text-sm sm:tracking-[0.16em]"
            >
              <span className="truncate sm:hidden">Ivan.dev</span>
              <span className="hidden sm:inline">Noblecourt Ivan</span>
            </Link>

            <div className="hidden items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] px-3 py-2 text-[11px] uppercase tracking-[0.22em] text-white/44 lg:flex">
              <span className="h-2 w-2 rounded-full bg-sky-300/80" />
              {currentLabel}
            </div>

            <div className="hidden items-center gap-2 rounded-full border border-emerald-300/12 bg-emerald-300/8 px-3 py-2 text-[11px] uppercase tracking-[0.2em] text-emerald-100/75 xl:flex">
              <span className="h-2 w-2 rounded-full bg-emerald-300/80" />
              Open to fullstack roles
            </div>
          </div>

          <div className="hidden items-center gap-1 md:flex lg:gap-2">
            {navigationLinks.map((link) => (
              <Link
                key={link.id}
                href={`#${link.id}`}
                aria-current={currentSection === link.id ? "page" : undefined}
                onClick={navigateToSection(link.id)}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors lg:px-4",
                  currentSection === link.id ? "text-white" : "text-white/55 hover:text-white"
                )}
              >
                {currentSection === link.id ? (
                  <motion.span
                    layoutId="navbar-pill"
                    className="absolute inset-0 rounded-full border border-white/10 bg-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                    transition={{ type: "spring", stiffness: 320, damping: 30 }}
                  />
                ) : null}

                <span className="relative z-10">{link.label}</span>

                {currentSection === link.id ? (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute inset-x-4 bottom-1 h-px rounded-full bg-sky-300"
                    transition={{ type: "spring", stiffness: 320, damping: 30 }}
                  />
                ) : null}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              href="#contact"
              onClick={navigateToSection("contact")}
              className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-medium text-white/80 transition hover:border-white/20 hover:bg-white/[0.08]"
            >
              Let&apos;s talk
            </Link>
          </div>

          <button
            type="button"
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((current) => !current)}
            className="inline-flex shrink-0 rounded-full border border-white/10 bg-white/[0.04] p-2.5 text-white/80 transition hover:border-white/20 hover:bg-white/[0.08] md:hidden"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen ? (
            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
              className="mt-4 max-h-[min(62svh,28rem)] overflow-y-auto rounded-[1.3rem] border border-white/8 bg-white/[0.03] p-2 pb-[calc(0.6rem+env(safe-area-inset-bottom))] md:hidden"
            >
              <div className="mb-2 flex items-center justify-between gap-3 px-2 pt-1">
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/38">
                  Navigate
                </div>
                <div className="rounded-full border border-white/8 bg-white/[0.04] px-2.5 py-1 text-[10px] uppercase tracking-[0.22em] text-white/45">
                  {currentLabel}
                </div>
              </div>

              {navigationLinks.map((link) => (
                <Link
                  key={link.id}
                  href={`#${link.id}`}
                  aria-current={currentSection === link.id ? "page" : undefined}
                  onClick={navigateToSection(link.id)}
                  className={cn(
                    "relative block overflow-hidden rounded-2xl px-4 py-3 text-sm transition",
                    currentSection === link.id
                      ? "border border-white/10 bg-white/[0.07] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                      : "text-white/60 hover:bg-white/[0.05] hover:text-white"
                  )}
                >
                  <span className="relative z-10 flex items-center justify-between gap-4">
                    <span>{link.label}</span>
                    <span className="text-[11px] uppercase tracking-[0.22em] text-white/35">
                      {currentSection === link.id ? "Current" : "Go"}
                    </span>
                  </span>
                </Link>
              ))}
            </motion.div>
          ) : null}
        </AnimatePresence>

        <ScrollProgress />
      </nav>
    </motion.header>
  )
}
