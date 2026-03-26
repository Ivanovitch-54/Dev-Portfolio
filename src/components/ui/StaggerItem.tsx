"use client"

import { itemVariant } from "@/lib/animations"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface StaggerItemProps {
  children: React.ReactNode
  className?: string
}

export default function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    // This stays tiny on purpose: the container owns timing, each item only owns its entry variant.
    <motion.div variants={itemVariant} className={cn(className)}>
      {children}
    </motion.div>
  )
}
