"use client"

import { cn } from "@/lib/utils"
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion"
import { useRef } from "react"

interface Props {
  children: React.ReactNode
  className?: string
}

export default function InteractiveCard({ children, className }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()

  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const glowX = useMotionValue(50)
  const glowY = useMotionValue(50)
  const parallaxX = useMotionValue(0)
  const parallaxY = useMotionValue(0)

  const smoothRotateX = useSpring(rotateX, { stiffness: 180, damping: 20 })
  const smoothRotateY = useSpring(rotateY, { stiffness: 180, damping: 20 })
  const smoothParallaxX = useSpring(parallaxX, { stiffness: 150, damping: 18 })
  const smoothParallaxY = useSpring(parallaxY, { stiffness: 150, damping: 18 })

  const glowBackground = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(125, 211, 252, 0.18), transparent 42%)`

  const handleMouseMove = (event: React.MouseEvent) => {
    if (shouldReduceMotion) {
      return
    }

    const card = ref.current
    if (!card) {
      return
    }

    const rect = card.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // Motion values keep the tilt/parallax fluid without routing pointer
    // movement through React state on every frame.
    rotateX.set((centerY - event.clientY) / 22)
    rotateY.set((event.clientX - centerX) / 22)
    glowX.set(((event.clientX - rect.left) / rect.width) * 100)
    glowY.set(((event.clientY - rect.top) / rect.height) * 100)
    parallaxX.set((event.clientX - centerX) / 35)
    parallaxY.set((event.clientY - centerY) / 35)
  }

  const reset = () => {
    rotateX.set(0)
    rotateY.set(0)
    glowX.set(50)
    glowY.set(50)
    parallaxX.set(0)
    parallaxY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={
        shouldReduceMotion
          ? undefined
          : {
              rotateX: smoothRotateX,
              rotateY: smoothRotateY,
              perspective: 1600,
              transformStyle: "preserve-3d",
            }
      }
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-[0_20px_80px_rgba(8,15,33,0.35)] backdrop-blur-xl",
        className
      )}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={shouldReduceMotion ? undefined : { background: glowBackground }}
      />

      <motion.div
        className="relative"
        style={
          shouldReduceMotion
            ? undefined
            : {
                x: smoothParallaxX,
                y: smoothParallaxY,
                transformStyle: "preserve-3d",
              }
        }
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
