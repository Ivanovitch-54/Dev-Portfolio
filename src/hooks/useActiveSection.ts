"use client"

import { sectionOrder } from "@/data/site"
import {
  getNavbarHeight,
  getSectionReferenceLine,
  getSectionTargetElement,
} from "@/lib/section-navigation"
import type { SectionId } from "@/types/portfolio"
import { useEffect, useState } from "react"

export function useActiveSection() {
  const [active, setActive] = useState<SectionId>("hero")

  useEffect(() => {
    const elements = sectionOrder
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null)

    if (!elements.length) {
      return
    }

    let frame = 0

    const updateActiveSection = () => {
      const maxScrollTop = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight
      )

      // At the very bottom of the page, mobile browsers can report unstable
      // viewport values while the address bar moves. Forcing the last section
      // here avoids flickering between the last two nav items.
      if (window.scrollY >= maxScrollTop - 8) {
        const lastSection = elements.at(-1)

        if (lastSection) {
          setActive((current) =>
            current === lastSection.id ? current : (lastSection.id as SectionId)
          )
        }

        return
      }

      const referenceLine = getSectionReferenceLine(getNavbarHeight())

      const closestSection = elements
        .map((section) => {
          const target = getSectionTargetElement(section)
          const rect = target.getBoundingClientRect()
          const sectionRect = section.getBoundingClientRect()
          const top = Math.min(rect.top, sectionRect.top)
          const bottom = Math.max(rect.bottom, sectionRect.bottom)
          const center = rect.top + rect.height / 2
          const containsReferenceLine =
            referenceLine >= top && referenceLine <= bottom
          const overflowDistance =
            referenceLine < top ? top - referenceLine : referenceLine - bottom
          const distance = containsReferenceLine
            ? Math.abs(center - referenceLine) * 0.35
            : Math.abs(center - referenceLine) + overflowDistance

          return {
            id: section.id as SectionId,
            distance,
            top,
          }
        })
        .sort((a, b) => a.distance - b.distance || a.top - b.top)[0]

      if (closestSection) {
        setActive((current) =>
          current === closestSection.id ? current : closestSection.id
        )
      }
    }

    const scheduleUpdate = () => {
      // Scroll events can fire aggressively, so we batch the real measurement
      // work into the next animation frame.
      window.cancelAnimationFrame(frame)
      frame = window.requestAnimationFrame(updateActiveSection)
    }

    scheduleUpdate()

    window.addEventListener("scroll", scheduleUpdate, { passive: true })
    window.addEventListener("resize", scheduleUpdate)
    window.addEventListener("hashchange", scheduleUpdate)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener("scroll", scheduleUpdate)
      window.removeEventListener("resize", scheduleUpdate)
      window.removeEventListener("hashchange", scheduleUpdate)
    }
  }, [])

  return active
}
