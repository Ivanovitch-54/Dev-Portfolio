"use client"

import { motion, useReducedMotion } from "framer-motion"

export default function GridBackground() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
        }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                // Drifting the grid very slowly adds depth without competing with foreground content.
                backgroundPosition: ["0px 0px", "72px 72px"],
              }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : {
                duration: 22,
                repeat: Infinity,
                ease: "linear",
              }
        }
      />
    </div>
  )
}
