"use client"

import { motion, useReducedMotion } from "framer-motion"

export default function AuroraBackground() {
  const shouldReduceMotion = useReducedMotion()

  // These are data-driven so we can tune the hero atmosphere without rewriting JSX.
  const blobs = [
    {
      className:
        "left-[-10%] top-[-15%] h-[34rem] w-[34rem] bg-sky-400/16",
      animate: {
        x: [0, 140, -60, 0],
        y: [0, -80, 120, 0],
      },
      duration: 24,
    },
    {
      className:
        "right-[-8%] top-[10%] h-[30rem] w-[30rem] bg-cyan-300/14",
      animate: {
        x: [0, -180, 120, 0],
        y: [0, 140, -120, 0],
      },
      duration: 28,
    },
    {
      className:
        "bottom-[-18%] left-[18%] h-[28rem] w-[28rem] bg-emerald-300/12",
      animate: {
        x: [0, 120, -120, 0],
        y: [0, -90, 80, 0],
      },
      duration: 30,
    },
  ]

  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">
      {blobs.map((blob) => (
        <motion.div
          key={blob.className}
          className={`absolute rounded-full blur-[160px] ${blob.className}`}
          animate={shouldReduceMotion ? undefined : blob.animate}
          transition={
            shouldReduceMotion
              ? undefined
              : {
                  duration: blob.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
        />
      ))}
    </div>
  )
}
