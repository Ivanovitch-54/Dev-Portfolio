import Section from "@/components/ui/Section"
import SectionHeading from "@/components/ui/SectionHeading"
import StaggerContainer from "@/components/ui/StaggerContainer"
import StaggerItem from "@/components/ui/StaggerItem"
import { skillGroups } from "@/data/skills"

const cardTone = [
  "from-sky-300/12 to-transparent",
  "from-emerald-300/12 to-transparent",
  "from-amber-200/12 to-transparent",
  "from-cyan-300/12 to-transparent",
]

const deliveryLenses = [
  {
    title: "Interface craft",
    description: "Layouts, spacing, states, and motion tuned to feel product-ready instead of template-like.",
  },
  {
    title: "Fullstack thinking",
    description: "UI choices made with data shape, API boundaries, and maintainable flows in mind.",
  },
  {
    title: "Shipping quality",
    description: "Responsive, accessible, and scalable foundations designed to survive real product iteration.",
  },
]

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Core strengths"
        title="A stack built for polished interfaces, strong DX, and maintainable delivery."
        description="I care as much about the system behind a UI as the visual result in the browser."
        align="center"
      />

      <div className="relative mb-8 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_20px_80px_rgba(2,8,23,0.18)] backdrop-blur-xl sm:mb-10 sm:p-6 lg:p-7">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-[8%] top-0 h-28 rounded-full bg-sky-300/10 blur-3xl"
        />

        <div className="relative">
          {/* This panel sets the reading frame for the section before the detailed skill cards. */}
          <div className="max-w-3xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-300/78 sm:text-xs sm:tracking-[0.3em]">
              How I work across the stack
            </p>
            <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base md:text-lg">
              I treat interface quality, application structure, and backend clarity as one
              continuous system. The goal is not just to ship a good-looking page, but to
              build something that stays clean, scalable, and easy to iterate on.
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {deliveryLenses.map((lens) => (
              <article
                key={lens.title}
                className="rounded-[1.25rem] border border-white/10 bg-slate-950/55 p-4"
              >
                <h3 className="text-sm font-semibold text-white sm:text-[15px]">{lens.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/55">{lens.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <StaggerContainer className="grid gap-6 md:auto-rows-fr md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <StaggerItem key={group.title} className="h-full">
            <article className="relative h-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_18px_60px_rgba(2,8,23,0.18)] backdrop-blur-xl sm:rounded-3xl sm:p-6">
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${cardTone[index] ?? cardTone[0]}`}
              />

              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-base font-semibold text-white sm:text-lg">{group.title}</h3>
                  <span className="rounded-full border border-white/10 bg-slate-950/70 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-white/45 sm:text-[11px] sm:tracking-[0.2em]">
                    0{index + 1}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-6 text-white/55 sm:leading-7">
                  {group.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1.5 text-[13px] text-white/70 sm:text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  )
}
