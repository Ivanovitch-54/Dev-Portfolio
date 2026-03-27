import HeroAvailabilityCard from "@/components/hero/HeroAvailabilityCard"
import HeroBackground from "@/components/hero/HeroBackground"
import HeroCTA from "@/components/hero/HeroCTA"
import HeroSignals from "@/components/hero/HeroSignals"
import HeroTechStack from "@/components/hero/HeroTechStack"
import HeroTyping from "@/components/hero/HeroTyping"
import Reveal from "@/components/ui/Reveal"
import SectionLink from "@/components/ui/SectionLink"
import AuroraBackground from "../effects/AuroraBackground"
import GridBackground from "../effects/GridBackground"
import HeroFloatingIcons from "../hero/HeroFloatingIcons"

const proofPoints = [
  { label: "Stack", value: "Next.js, Node.js, TypeScript" },
  { label: "Focus", value: "Fullstack product work" },
  { label: "Edge", value: "UI polish with solid architecture" },
]

export default function Hero() {
  return (
    <section
      id="hero"
      tabIndex={-1}
      data-section-root="true"
      className="section-anchor relative overflow-hidden px-4 pb-12 pt-22 outline-none sm:px-6 md:pb-20 md:pt-36"
    >
      <div aria-hidden="true" className="section-target-line" />
      <AuroraBackground />
      <GridBackground />
      <HeroBackground />
      <HeroFloatingIcons />

      <div
        data-section-content="true"
        className="hero-viewport relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:gap-12"
      >
        <div className="text-left">
          <Reveal>
            <p className="inline-flex max-w-full rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-white/60 backdrop-blur-md sm:px-4 sm:text-xs sm:tracking-[0.28em]">
              Fullstack developer / Next.js / Motion
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 max-w-5xl text-balance bg-gradient-to-r from-white via-sky-100 to-white bg-clip-text text-[clamp(2.65rem,11vw,5.4rem)] font-semibold leading-[0.97] tracking-tight text-transparent">
              Fullstack products that feel polished, performant, and ready for serious teams.
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-5 text-lg font-medium text-white/72 sm:text-xl md:text-3xl">
              <HeroTyping />
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-6 max-w-2xl text-[15px] leading-7 text-white/60 sm:text-base sm:leading-8 md:text-lg lg:max-w-xl">
              I build modern products across frontend and backend with React, Next.js,
              TypeScript, and Node.js, with a strong focus on maintainable architecture,
              smooth interactions, and product-level detail that recruiters and teams can evaluate quickly.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <HeroCTA />
          </Reveal>

          <Reveal delay={0.28}>
            <HeroTechStack />
          </Reveal>

          <Reveal delay={0.34}>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {proofPoints.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.35rem] border border-white/10 bg-white/[0.04] px-4 py-4 shadow-[0_18px_60px_rgba(2,8,23,0.18)] backdrop-blur-xl"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/38 sm:text-[11px] sm:tracking-[0.24em]">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/78">{item.value}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.42}>
            <SectionLink
              sectionId="projects"
              className="mt-9 inline-flex min-h-11 items-center gap-3 self-start rounded-full border border-white/10 bg-slate-950/50 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-white/55 transition hover:border-white/20 hover:text-white sm:text-xs sm:tracking-[0.24em]"
            >
              Explore selected work
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/10 text-[10px]">
                v
              </span>
            </SectionLink>
          </Reveal>
        </div>

        <div className="w-full">
          <Reveal delay={0.18}>
            <HeroAvailabilityCard />
          </Reveal>

          <Reveal delay={0.34} className="w-full">
            <HeroSignals />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
