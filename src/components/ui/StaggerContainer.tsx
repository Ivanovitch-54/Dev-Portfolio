"use client"

import { staggerContainer } from "@/lib/animations"
import { cn } from "@/lib/utils"
import { motion, useReducedMotion } from "framer-motion"

export default function StaggerContainer({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={cn(className)}>{children}</div>
  }

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      // Children pick up their own item variants from StaggerItem.
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  )
}
