import Link from "next/link"
import { navigationLinks, socialLinks } from "@/data/site"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="px-4 pb-[calc(1.75rem+env(safe-area-inset-bottom))] pt-8 sm:px-6 md:pt-10">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[1.9rem] border border-white/10 bg-white/[0.04] px-5 py-7 shadow-[0_24px_90px_rgba(2,8,23,0.24)] backdrop-blur-xl sm:px-7 sm:py-8 md:rounded-[2.2rem] md:px-8 md:py-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-[18%] top-0 h-24 rounded-full bg-sky-300/10 blur-3xl"
          />

          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(300px,0.95fr)] lg:gap-10">
            <div>
              <span className="inline-flex rounded-full border border-white/10 bg-slate-950/60 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-300/78 sm:text-xs sm:tracking-[0.28em]">
                Open to fullstack opportunities
              </span>

              <h3 className="mt-5 max-w-2xl text-balance bg-gradient-to-r from-white via-slate-100 to-sky-100/85 bg-clip-text text-2xl font-semibold tracking-tight text-transparent sm:text-3xl md:text-[2.2rem]">
                Building product-minded interfaces with backend clarity, motion restraint, and code that scales.
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/58 sm:text-base">
                This portfolio is meant to feel like a small product surface, not a generic
                gallery. The same standards I apply here carry over to real team work:
                strong UX, clear architecture, and attention to the details that shape trust.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/38 sm:text-[11px] sm:tracking-[0.24em]">
                  Explore
                </p>
                <div className="mt-4 grid gap-3">
                  {navigationLinks.map((link) => (
                    <Link
                      key={link.id}
                      href={`#${link.id}`}
                      className="text-sm text-white/62 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/38 sm:text-[11px] sm:tracking-[0.24em]">
                  Reach out
                </p>
                <div className="mt-4 grid gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm text-white/62 transition hover:text-white"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 text-center text-sm text-white/42 sm:mt-10 sm:pt-6 md:flex-row md:items-center md:justify-between md:text-left">
            <p>Copyright {year} Ivan. Built with Next.js, TypeScript, and Framer Motion.</p>
            <p className="text-[11px] uppercase tracking-[0.16em] text-white/34 sm:text-xs sm:tracking-[0.22em]">
              Fullstack developer focused on product quality
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
