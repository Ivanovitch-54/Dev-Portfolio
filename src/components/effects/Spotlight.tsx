"use client"

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion"
import { useEffect } from "react"

export default function Spotlight() {
  const shouldReduceMotion = useReducedMotion()
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  // Springs soften the pointer trail so the glow feels premium instead of twitchy.
  const smoothX = useSpring(pointerX, { stiffness: 90, damping: 24 })
  const smoothY = useSpring(pointerY, { stiffness: 90, damping: 24 })

  useEffect(() => {
    if (shouldReduceMotion) {
      return
    }

    const handleMouseMove = (event: MouseEvent) => {
      pointerX.set(event.clientX)
      pointerY.set(event.clientY)
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [pointerX, pointerY, shouldReduceMotion])

  if (shouldReduceMotion) {
    return null
  }

  return (
    <motion.div
      aria-hidden="true"
      // Kept off on small screens because a cursor-following effect has no value on touch devices.
      className="pointer-events-none fixed inset-0 z-0 hidden md:block"
      style={{
        background: useMotionTemplate`radial-gradient(520px at ${smoothX}px ${smoothY}px, rgba(56, 189, 248, 0.10), transparent 78%)`,
      }}
    />
  )
}
