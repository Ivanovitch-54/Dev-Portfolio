import { heroFacts, openToTopics } from "@/data/site"

export default function HeroAvailabilityCard() {
  return (
    <article className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/55 p-5 text-left shadow-[0_22px_80px_rgba(2,8,23,0.28)] backdrop-blur-xl sm:rounded-[1.9rem] sm:p-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-sky-300/12 via-transparent to-transparent"
      />

      <div className="relative">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-300/78 sm:text-xs sm:tracking-[0.32em]">
          Currently open
        </p>

        <p className="mt-4 text-[15px] font-semibold leading-7 text-white sm:text-lg">
          Available for fullstack opportunities with teams that care about craft.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {openToTopics.map((topic) => (
            <span
              key={topic}
              className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-white/60 sm:text-xs sm:tracking-[0.18em]"
            >
              {topic}
            </span>
          ))}
        </div>

        <div className="mt-6 grid gap-3 sm:auto-rows-fr sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {heroFacts.map((fact) => (
            <div
              key={fact.label}
              className="h-full rounded-2xl border border-white/8 bg-white/[0.03] p-4"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40 sm:text-[11px] sm:tracking-[0.24em]">
                {fact.label}
              </p>
              <p className="mt-2 text-sm leading-6 font-medium text-white/82">{fact.value}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}
