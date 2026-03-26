import About from "@/components/sections/About"
import Contact from "@/components/sections/Contact"
import Hero from "@/components/sections/Hero"
import Projects from "@/components/sections/Projects"
import Skills from "@/components/sections/Skills"
import Footer from "@/components/layout/Footer"

export default function Home() {
  return (
    <div className="relative isolate">
      {/* These large ambient layers make the page read as one intentional experience,
          instead of a stack of disconnected sections. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[6%] top-[42rem] h-72 w-72 rounded-full bg-sky-300/8 blur-[140px] sm:h-96 sm:w-96 sm:blur-[170px]" />
        <div className="absolute right-[-8rem] top-[70rem] h-80 w-80 rounded-full bg-cyan-300/7 blur-[160px] sm:h-[28rem] sm:w-[28rem] sm:blur-[190px]" />
        <div className="absolute left-[-8rem] bottom-[18rem] h-80 w-80 rounded-full bg-emerald-300/6 blur-[160px] sm:h-[26rem] sm:w-[26rem] sm:blur-[190px]" />
        <div className="absolute inset-x-[14%] top-[58rem] hidden h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent md:block" />
        <div className="absolute inset-x-[18%] bottom-[28rem] hidden h-px bg-gradient-to-r from-transparent via-sky-100/[0.08] to-transparent md:block" />
        <div className="absolute left-1/2 top-[38rem] hidden h-[calc(100%-48rem)] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/[0.07] to-transparent xl:block" />
      </div>

      <div className="relative">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
