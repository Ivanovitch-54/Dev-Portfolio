import About from "@/components/sections/About"
import Contact from "@/components/sections/Contact"
import Hero from "@/components/sections/Hero"
import Projects from "@/components/sections/Projects"
import Skills from "@/components/sections/Skills"
import Footer from "@/components/layout/Footer"


export default function Home() {
    return (
        <main className="pt-24">
            <Hero />

            <Projects />

            <Skills />

            <About />

            <Contact />

            <Footer />
        </main>
    )
}
