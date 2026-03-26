"use client"

import type { Project } from "@/types/portfolio"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { X } from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"

interface ProjectPreviewDialogProps {
  project: Project
  open: boolean
  onClose: () => void
}

export default function ProjectPreviewDialog({
  project,
  open,
  onClose,
}: ProjectPreviewDialogProps) {
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (!open) {
      return
    }

    const previousOverflow = document.body.style.overflow
    const previousPreviewState = document.body.getAttribute("data-project-preview-open")
    document.body.style.overflow = "hidden"
    document.body.setAttribute("data-project-preview-open", "true")

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", handleEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      if (previousPreviewState) {
        document.body.setAttribute("data-project-preview-open", previousPreviewState)
      } else {
        document.body.removeAttribute("data-project-preview-open")
      }
      window.removeEventListener("keydown", handleEscape)
    }
  }, [onClose, open])

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          aria-modal="true"
          role="dialog"
          aria-label={`${project.title} preview`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.16 : 0.24 }}
          className="fixed inset-0 z-[90] flex items-start justify-center bg-slate-950/88 px-4 pt-[calc(1rem+env(safe-area-inset-top))] pb-[calc(1rem+env(safe-area-inset-bottom))] backdrop-blur-md sm:items-center sm:px-6"
        >
          <button
            type="button"
            aria-label="Close preview"
            onClick={onClose}
            className="absolute inset-0 cursor-default"
          />

          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20, scale: 0.98 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: shouldReduceMotion ? 0.16 : 0.28 }}
            className="relative z-10 flex max-h-[calc(100svh-2rem-env(safe-area-inset-top)-env(safe-area-inset-bottom))] w-full max-w-6xl flex-col overflow-hidden rounded-[1.35rem] border border-white/10 bg-slate-950/92 shadow-[0_40px_140px_rgba(2,8,23,0.55)] sm:rounded-[1.8rem]"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-white/10 bg-slate-950/92 px-4 py-4 sm:px-6">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/38 sm:text-[11px] sm:tracking-[0.24em]">
                  Project preview
                </p>
                <h3 className="mt-2 text-lg font-semibold text-white sm:text-xl">
                  {project.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/78 transition hover:border-white/18 hover:bg-white/[0.08] hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            {/* The screenshot is shown with contain so recruiters can inspect the real UI without crop loss. */}
            <div className="relative flex-1 overflow-auto bg-[radial-gradient(circle_at_top,rgba(125,211,252,0.08),transparent_32%),linear-gradient(180deg,#070b16_0%,#0b1120_100%)] p-3 sm:p-5">
              <Image
                src={project.image}
                alt={project.imageAlt}
                width={1200}
                height={720}
                className="mx-auto h-auto max-h-[72svh] w-full rounded-[1rem] border border-white/10 object-contain shadow-[0_24px_80px_rgba(2,8,23,0.4)] sm:rounded-[1.2rem]"
                sizes="(min-width: 768px) 90vw, 100vw"
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
