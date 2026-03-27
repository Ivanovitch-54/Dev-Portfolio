"use client"

import { cn } from "@/lib/utils"
import { scrollToSectionById } from "@/lib/section-navigation"
import { useReducedMotion } from "framer-motion"
import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react"

interface SectionLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children"> {
  sectionId: string
  children: ReactNode
}

export default function SectionLink({
  sectionId,
  children,
  className,
  onClick,
  ...props
}: SectionLinkProps) {
  const shouldReduceMotion = useReducedMotion() ?? false

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event)

    if (event.defaultPrevented) {
      return
    }

    event.preventDefault()
    scrollToSectionById(sectionId, {
      shouldReduceMotion,
    })
  }

  return (
    <a
      {...props}
      href={`#${sectionId}`}
      onClick={handleClick}
      className={cn(className)}
    >
      {children}
    </a>
  )
}
