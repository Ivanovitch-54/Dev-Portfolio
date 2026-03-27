import { heroSignals } from "@/data/site"

const cardTone = [
  "from-sky-300/12 to-transparent",
  "from-emerald-300/12 to-transparent",
  "from-amber-200/12 to-transparent",
]

export default function HeroSignals() {
  return (
    <div className="mt-5 grid w-full gap-4 md:auto-rows-fr md:grid-cols-3 lg:grid-cols-1">
      {heroSignals.map((signal, index) => (
        <article
          key={signal.title}
          className="relative h-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4 text-left shadow-[0_18px_60px_rgba(2,8,23,0.28)] backdrop-blur-xl sm:rounded-[1.75rem] sm:p-5"
        >
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${cardTone[index] ?? cardTone[0]}`}
          />
          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/78 sm:tracking-[0.18em]">
              {signal.title}
            </p>
            <p className="mt-3 text-sm leading-6 text-white/58 sm:leading-7">
              {signal.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  )
}
