import { heroTechStack } from "@/data/site"

export default function HeroTechStack() {
  return (
    <div className="mt-10 flex flex-wrap justify-start gap-2.5 sm:gap-3">
      {heroTechStack.map((item) => (
        <div
          key={item}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/70 backdrop-blur-md sm:px-3.5 sm:py-2 sm:text-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-sky-300/80" />
          {item}
        </div>
      ))}
    </div>
  )
}
