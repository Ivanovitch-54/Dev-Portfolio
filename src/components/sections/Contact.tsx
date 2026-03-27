import ContactButton from "@/components/layout/ContactButton"
import Reveal from "@/components/ui/Reveal"
import Section from "@/components/ui/Section"
import SectionHeading from "@/components/ui/SectionHeading"
import { openToTopics, socialLinks } from "@/data/site"

export default function Contact() {
  return (
    <Section id="contact" containerClassName="max-w-5xl">
      <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] px-4 py-8 text-center shadow-[0_20px_80px_rgba(2,8,23,0.24)] backdrop-blur-xl sm:px-6 sm:py-10 md:rounded-[2rem] md:px-10 md:py-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-[18%] top-0 h-24 rounded-full bg-sky-300/10 blur-3xl"
        />

        <SectionHeading
          eyebrow="Contact"
          title="Let&apos;s build something thoughtful together."
          description="I&apos;m open to fullstack roles, freelance collaborations, and product teams that care about quality in both UX and engineering."
          align="center"
        />

        <Reveal delay={0.1}>
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {openToTopics.map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-white/56 sm:text-xs sm:tracking-[0.18em]"
              >
                {topic}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid gap-3 sm:flex sm:flex-wrap sm:justify-center sm:gap-4">
            {socialLinks.map((link) => (
              <ContactButton key={link.label} href={link.href}>
                {link.label}
              </ContactButton>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
