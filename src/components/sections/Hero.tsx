import HeroBackground from "@/components/hero/HeroBackground"
import HeroTyping from "@/components/hero/HeroTyping"
import HeroCTA from "@/components/hero/HeroCTA"
import HeroTechStack from "@/components/hero/HeroTechStack"
import GridBackground from "../effects/GridBackground"
import HeroFloatingIcons from "../hero/HeroFloatingIcons"
import AuroraBackground from "../effects/AuroraBackground"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
    >

      <AuroraBackground />
      <GridBackground />
      <HeroBackground />
      <HeroFloatingIcons />

      <h1 className="text-5xl md:text-7xl font-bold mb-6">
        Hi, I&apos;m Ivan
      </h1>

      <h2 className="text-2xl md:text-3xl font-medium text-gray-300">
        <HeroTyping />
      </h2>

      <p className="max-w-xl mt-6 text-gray-400">
        I build modern web applications with React, Next.js and scalable frontend architecture.
      </p>

      <HeroCTA />

      <HeroTechStack />

    </section>
  )
}