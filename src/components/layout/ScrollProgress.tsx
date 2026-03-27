"use client"

import { motion, useScroll, useSpring } from "framer-motion"

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  // A spring makes the progress bar feel smoother than binding raw scroll progress directly.
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.2,
  })

  return (
    <motion.div
      aria-hidden="true"
      className="absolute inset-x-4 bottom-0 h-px origin-left rounded-full bg-gradient-to-r from-sky-300 via-cyan-200 to-emerald-300"
      style={{ scaleX }}
    />
  )
}
