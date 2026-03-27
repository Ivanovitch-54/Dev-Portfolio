"use client"

import { revealTransition } from "@/lib/animations"
import { cn } from "@/lib/utils"
import { motion, useReducedMotion } from "framer-motion"

interface Props {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function Reveal({ children, delay = 0, className }: Props) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    // When reduced motion is enabled we keep the markup, but skip all animated entry states.
    return <div className={cn(className)}>{children}</div>
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        ...revealTransition,
        delay,
      }}
      viewport={{ once: true, margin: "-15% 0px" }}
    >
      {children}
    </motion.div>
  )
}
