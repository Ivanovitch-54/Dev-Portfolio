import { cn } from "@/lib/utils"
import Reveal from "@/components/ui/Reveal"

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center"

  return (
    <div
      className={cn(
        "mb-10 max-w-4xl md:mb-16",
        centered && "mx-auto text-center"
      )}
    >
      {eyebrow ? (
        <Reveal>
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-sky-300/80 sm:text-xs sm:tracking-[0.3em]">
            {eyebrow}
          </p>
        </Reveal>
      ) : null}

      <Reveal delay={0.05}>
        <h2 className="pb-[0.12em] text-balance bg-gradient-to-r from-white via-slate-100 to-sky-100/85 bg-clip-text text-3xl font-semibold leading-[1.08] tracking-tight text-transparent sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>

      {description ? (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "mt-5 max-w-3xl text-base leading-7 text-white/65 md:text-lg",
              centered && "mx-auto"
            )}
          >
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  )
}
