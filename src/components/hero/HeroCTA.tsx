import SectionLink from "@/components/ui/SectionLink"
import { ArrowRight, Mail } from "lucide-react"

export default function HeroCTA() {
  return (
    <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
      <SectionLink
        sectionId="projects"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-sky-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 sm:w-auto"
      >
        View projects
        <ArrowRight size={16} />
      </SectionLink>

      <SectionLink
        sectionId="contact"
        className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white/85 transition duration-300 hover:border-white/30 hover:bg-white/[0.06] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 sm:w-auto"
      >
        Start a conversation
      </SectionLink>

      <a
        href="mailto:ivan.noblecourt@gmail.com"
        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-center text-[13px] text-white/56 transition hover:border-white/18 hover:text-white sm:min-h-0 sm:w-auto sm:justify-start sm:rounded-full sm:border-none sm:bg-transparent sm:px-0 sm:py-0 sm:text-left sm:text-sm"
      >
        <Mail size={16} />
        <span className="min-w-0 break-all sm:break-normal">ivan.noblecourt@gmail.com</span>
      </a>
    </div>
  )
}
