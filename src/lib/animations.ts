import type { Transition, Variants } from "framer-motion"

// Central motion tokens keep section reveals and staggered lists consistent across the site.
export const motionEase: [number, number, number, number] = [0.22, 1, 0.36, 1]

export const revealTransition: Transition = {
  duration: 0.6,
  ease: motionEase,
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
}

export const itemVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: revealTransition,
  },
}
