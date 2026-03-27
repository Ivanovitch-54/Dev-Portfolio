import Reveal from "@/components/ui/Reveal"
import Section from "@/components/ui/Section"
import SectionHeading from "@/components/ui/SectionHeading"
import StaggerContainer from "@/components/ui/StaggerContainer"
import StaggerItem from "@/components/ui/StaggerItem"

const principles = [
  {
    title: "Performance minded",
    description:
      "I try to keep interfaces smooth, focused, and lightweight before adding visual complexity.",
  },
  {
    title: "System over one-off styling",
    description:
      "Reusable primitives and clear structure make it easier to scale a portfolio into a real product codebase.",
  },
  {
    title: "Polish with purpose",
    description:
      "Motion, spacing, and typography should support clarity and product feeling, not distract from it.",
  },
]

const collaborationPoints = [
  "Clear component architecture",
  "Strong visual attention to detail",
  "A practical performance mindset",
]

export default function About() {
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="About"
            title="I enjoy building interfaces that feel thoughtful in both the browser and the codebase."
            description="The work that excites me most sits at the intersection of product design, interaction quality, and maintainable fullstack systems."
          />

          <Reveal delay={0.12}>
            <div className="space-y-5 text-[15px] leading-7 text-white/65 sm:text-base sm:leading-8 md:text-lg">
              <p>
                I&apos;m focused on modern web applications built across frontend and
                backend with React, Next.js, TypeScript, Node.js, and scalable architecture.
              </p>

              <p>
                My goal is to create products that look refined, communicate clearly,
                and still feel easy to evolve from UI layer to application logic.
              </p>

              <p>
                I&apos;m currently looking for opportunities where I can contribute to
                ambitious products, sharpen my craft, and work with teams that care
                about detail.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-5 shadow-[0_18px_60px_rgba(2,8,23,0.18)] sm:rounded-[1.75rem] sm:p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-sky-300/78 sm:text-xs sm:tracking-[0.28em]">
                What teams can expect
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {collaborationPoints.map((point) => (
                  <span
                    key={point}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[13px] text-white/70 sm:text-sm"
                  >
                    {point}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <StaggerContainer className="grid gap-4 sm:auto-rows-fr">
          {principles.map((principle, index) => (
            <StaggerItem key={principle.title} className="h-full">
              <article className="h-full rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl sm:rounded-3xl sm:p-6">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/70 text-sm font-semibold text-white/70">
                    0{index + 1}
                  </span>

                  <div>
                    <h3 className="text-base font-semibold text-white sm:text-lg">{principle.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/60 sm:leading-7">{principle.description}</p>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  )
}
