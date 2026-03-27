"use client"

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion"
import { useEffect } from "react"
import {
  Code2,
  Atom,
  Server,
  Layers,
  Cpu,
} from "lucide-react"

const icons = [
  { id: "atom", Icon: Atom, x: -250, y: -120 },
  { id: "code", Icon: Code2, x: 220, y: -100 },
  { id: "server", Icon: Server, x: -200, y: 140 },
  { id: "layers", Icon: Layers, x: 250, y: 120 },
  { id: "cpu", Icon: Cpu, x: 0, y: 200 },
]

export default function HeroFloatingIcons() {
  const shouldReduceMotion = useReducedMotion()
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // These springs give the icons a subtle parallax lag instead of a literal cursor lock.
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  useEffect(() => {
    if (shouldReduceMotion) {
      return
    }

    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX - window.innerWidth / 2) / 30
      const y = (event.clientY - window.innerHeight / 2) / 30

      mouseX.set(x)
      mouseY.set(y)
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })

    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY, shouldReduceMotion])

  if (shouldReduceMotion) {
    return null
  }

  return (
    // Decorative only, so we hide the layer on mobile and from assistive tech.
    <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden="true">
      {icons.map(({ id, Icon, x, y }, index) => (
        <motion.div
          key={id}
          style={{
            x: springX,
            y: springY,
            left: `calc(50% + ${x}px)`,
            top: `calc(50% + ${y}px)`,
            willChange: "transform",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.14 }}
          className="absolute text-white/18"
        >
          <Icon size={36} strokeWidth={1.5} />
        </motion.div>
      ))}
    </div>
  )
}
