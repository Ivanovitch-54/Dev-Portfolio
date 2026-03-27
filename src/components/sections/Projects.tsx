import ProjectCard from "@/components/projects/ProjectCard"
import Section from "@/components/ui/Section"
import SectionHeading from "@/components/ui/SectionHeading"
import StaggerContainer from "@/components/ui/StaggerContainer"
import StaggerItem from "@/components/ui/StaggerItem"
import { projects } from "@/data/projects"

export default function Projects() {
  return (
    <Section id="projects" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-20 mx-auto h-56 max-w-5xl rounded-full bg-sky-300/8 blur-[120px]"
      />

      <SectionHeading
        eyebrow="Selected work"
        title="Projects focused on clean execution, motion, and scalable product architecture."
        description="A mix of shipped work and product explorations designed to show both interface craft and fullstack engineering discipline."
        align="center"
      />

      <div className="relative mx-auto mb-10 max-w-4xl rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-4 text-center shadow-[0_18px_60px_rgba(2,8,23,0.18)] backdrop-blur-xl sm:p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-300/78 sm:text-xs sm:tracking-[0.28em]">
          Recruiter view
        </p>
        {/* This sets the reading frame for the section: outcomes and engineering signal first, stack second. */}
        <p className="mt-3 text-sm leading-6 text-white/62 sm:leading-7 md:text-base">
          Each project is framed to show what it demonstrates in product thinking,
          UI craft, backend thinking, and fullstack architecture, not just what technologies were used.
        </p>
      </div>

      <StaggerContainer className="relative grid gap-6 md:auto-rows-fr md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <StaggerItem key={project.title} className="h-full">
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  )
}
