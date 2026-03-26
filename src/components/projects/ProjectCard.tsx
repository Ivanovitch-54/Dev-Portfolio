"use client"

import ProjectPreviewDialog from "@/components/projects/ProjectPreviewDialog"
import InteractiveCard from "@/components/ui/InteractiveCard"
import { cn } from "@/lib/utils"
import type { Project } from "@/types/portfolio"
import { ArrowRight, ArrowUpRight, Expand, ScanSearch } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const accentStyles = {
  sky: {
    border: "border-sky-300/16 bg-sky-300/10 text-sky-100/90",
    glow: "from-sky-300/22 via-transparent to-cyan-400/18",
  },
  violet: {
    border: "border-violet-300/18 bg-violet-300/10 text-violet-100/90",
    glow: "from-violet-300/22 via-transparent to-indigo-400/18",
  },
  emerald: {
    border: "border-emerald-300/16 bg-emerald-300/10 text-emerald-100/90",
    glow: "from-emerald-300/20 via-transparent to-cyan-300/16",
  },
  amber: {
    border: "border-amber-200/20 bg-amber-200/10 text-amber-50/90",
    glow: "from-amber-200/18 via-transparent to-orange-300/16",
  },
}

export default function ProjectCard({
  project,
}: {
  project: Project
}) {
  // Accent tokens let each card feel distinct while keeping one reusable layout.
  const accent = accentStyles[project.accent]
  const [previewOpen, setPreviewOpen] = useState(false)

  return (
    <>
      <InteractiveCard className="h-full">
        <article className="flex h-full flex-col p-5 sm:p-6 md:p-7">
          <button
            type="button"
            onClick={() => setPreviewOpen(true)}
            className="relative block overflow-hidden rounded-2xl border border-white/10 bg-slate-950/50 text-left transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
            style={{ transform: "translateZ(56px)" }}
          >
            <div className={cn("pointer-events-none absolute inset-0 bg-gradient-to-br", accent.glow)} />
            <Image
              src={project.image}
              alt={project.imageAlt}
              width={1200}
              height={720}
              className={cn(
                "h-52 w-full object-cover transition duration-700 group-hover:scale-[1.03] sm:h-60"
              )}
              sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
              priority={project.title === "AI Dashboard"}
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/82 via-slate-950/28 to-transparent" />
            <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-slate-950/72 px-2.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-white/76 backdrop-blur-md sm:gap-2 sm:px-3 sm:text-[11px] sm:tracking-[0.18em]">
              <Expand size={12} />
              Preview
            </span>
            <span className="absolute left-3 bottom-3 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-white/68 backdrop-blur-md sm:gap-2 sm:px-3 sm:text-[11px] sm:tracking-[0.18em]">
              <ScanSearch size={12} />
              <span className="sm:hidden">Open</span>
              <span className="hidden sm:inline">Open full view</span>
            </span>
          </button>

          <div className="mt-6 flex flex-1 flex-col" style={{ transform: "translateZ(36px)" }}>
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/42 sm:text-[11px] sm:tracking-[0.24em]">
              {project.eyebrow}
            </p>

            <div className="mt-3 flex flex-col items-start gap-3 sm:flex-row sm:items-start sm:justify-between">
              <h3 className="text-xl font-semibold text-white md:text-[1.65rem]">{project.title}</h3>
              <span
                className={cn(
                  "rounded-full border px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] sm:text-[11px] sm:tracking-[0.2em]",
                  accent.border
                )}
              >
                {project.status}
              </span>
            </div>

            <p className="mt-4 text-sm leading-6 text-white/65 sm:leading-7 md:text-[15px]">
              {project.description}
            </p>

            <div className="mt-6 rounded-2xl border border-white/8 bg-slate-950/55 p-4 sm:p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/38 sm:text-[11px] sm:tracking-[0.24em]">
                What this project shows
              </p>

              {/* Recruiters scan quickly, so this block explains the signal behind the visuals. */}
              <div className="mt-3 grid gap-2">
                {project.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center gap-2 text-sm text-white/62">
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/72">
                      <ArrowRight size={12} />
                    </span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[11px] text-white/70 sm:text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-3 border-t border-white/8 pt-5 sm:flex sm:flex-wrap sm:items-center">
              <button
                type="button"
                onClick={() => setPreviewOpen(true)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white/80 transition hover:border-white/20 hover:bg-white/[0.05] sm:w-auto"
              >
                Open preview
                <Expand size={15} />
              </button>

              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white/80 transition hover:border-white/20 hover:bg-white/[0.05] sm:w-auto"
                >
                  View source
                  <ArrowUpRight size={15} />
                </a>
              ) : null}

              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-sky-300 px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-sky-200 sm:w-auto"
                >
                  Live preview
                  <ArrowUpRight size={15} />
                </a>
              ) : null}

              {!project.github && !project.demo ? (
                <p className="text-sm leading-6 text-white/45">
                  Interactive walkthrough and code details can be shared during interviews.
                </p>
              ) : null}
            </div>
          </div>
        </article>
      </InteractiveCard>

      <ProjectPreviewDialog
        project={project}
        open={previewOpen}
        onClose={() => setPreviewOpen(false)}
      />
    </>
  )
}
