"use client"

import { ArrowUp } from "lucide-react"
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useState } from "react"

export default function BackToTopButton() {
  const { scrollY } = useScroll()
  const [visible, setVisible] = useState(false)

  useMotionValueEvent(scrollY, "change", (value) => {
    // Delay the button until the user is meaningfully down the page.
    setVisible(value > 520)
  })

  return (
    <AnimatePresence>
      {visible ? (
        <motion.a
          href="#hero"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 14 }}
          transition={{ duration: 0.2 }}
          className="fixed right-[calc(1rem+env(safe-area-inset-right))] bottom-[calc(1rem+env(safe-area-inset-bottom))] z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-950/75 text-white/80 shadow-[0_16px_50px_rgba(2,8,23,0.35)] backdrop-blur-xl transition hover:border-white/20 hover:text-white sm:h-12 sm:w-12"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </motion.a>
      ) : null}
    </AnimatePresence>
  )
}
