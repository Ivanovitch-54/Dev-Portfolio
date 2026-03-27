"use client"

import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { useEffect, useState, useSyncExternalStore } from "react"

function subscribeToIntroState() {
  return () => {}
}

function getClientIntroState() {
  return window.sessionStorage.getItem("portfolio_intro_seen") === "true"
}

function getServerIntroState() {
  return false
}

export default function PageIntro() {
  const shouldReduceMotion = useReducedMotion()
  const hasSeenIntro = useSyncExternalStore(
    subscribeToIntroState,
    getClientIntroState,
    getServerIntroState
  )
  const [dismissed, setDismissed] = useState(false)
  const complete = hasSeenIntro || dismissed

  useEffect(() => {
    if (complete) {
      return
    }

    // Keep the intro short enough to feel premium, not blocking.
    const timeout = window.setTimeout(() => {
      window.sessionStorage.setItem("portfolio_intro_seen", "true")
      setDismissed(true)
    }, shouldReduceMotion ? 180 : 850)

    return () => window.clearTimeout(timeout)
  }, [complete, shouldReduceMotion])

  return (
    <AnimatePresence>
      {!complete ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: shouldReduceMotion ? 0.2 : 0.65,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          className="pointer-events-none fixed inset-0 z-[75] overflow-hidden bg-slate-950"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(125,211,252,0.14),transparent_34%),linear-gradient(180deg,#020617_0%,#020817_100%)]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/60 to-transparent" />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-5 pt-[calc(1rem+env(safe-area-inset-top))] pb-[calc(1rem+env(safe-area-inset-bottom))] text-center sm:px-6">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.4 }}
              className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/50 sm:text-xs sm:tracking-[0.42em]"
            >
              Loading portfolio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.55 }}
              className="mt-6 bg-gradient-to-r from-white via-sky-100 to-white bg-clip-text text-[clamp(2.7rem,12vw,4.5rem)] font-semibold tracking-[0.12em] text-transparent sm:tracking-[0.16em] md:text-6xl"
            >
              IVAN.DEV
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.32, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 h-px w-48 origin-left rounded-full bg-gradient-to-r from-sky-300 via-cyan-200 to-emerald-300"
            />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
