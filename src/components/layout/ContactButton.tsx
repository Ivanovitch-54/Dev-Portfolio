"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

type Props = {
  href: string
  children: React.ReactNode
}

export default function ContactButton({ href, children }: Props) {
  const isExternal = href.startsWith("http")

  return (
    <motion.a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-medium text-white/85 transition hover:border-white/20 hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 sm:w-auto"
    >
      {children}
      <ArrowUpRight size={16} />
    </motion.a>
  )
}
