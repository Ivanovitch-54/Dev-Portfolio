"use client"

import { useReducedMotion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

export default function HeroTyping() {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    // Keep the message intact without the looping animation for motion-sensitive users.
    return <span className="text-sky-300">Fullstack developer with a product mindset</span>
  }

  return (
    <TypeAnimation
      sequence={[
        "Fullstack Developer",
        2000,
        "Next.js and Node.js Builder",
        2000,
        "Product-Focused Engineer",
        2000,
      ]}
      wrapper="span"
      speed={45}
      repeat={Infinity}
      className="text-sky-300"
    />
  )
}
