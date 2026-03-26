import { cn } from "@/lib/utils"

interface SectionProps {
  id: string
  children: React.ReactNode
  className?: string
  containerClassName?: string
}

export default function Section({
  id,
  children,
  className,
  containerClassName,
}: SectionProps) {
  return (
    <section
      id={id}
      tabIndex={-1}
      data-section-root="true"
      className={cn(
        "section-anchor relative overflow-x-clip scroll-mt-28 px-4 py-20 outline-none sm:px-6 md:scroll-mt-32 md:py-28 lg:py-32",
        className
      )}
    >
      <div aria-hidden="true" className="section-target-line" />
      <div
        data-section-content="true"
        className={cn("mx-auto w-full max-w-6xl", containerClassName)}
      >
        {/* This wrapper marks the part of the section we want to center on scroll. */}
        {children}
      </div>
    </section>
  )
}
