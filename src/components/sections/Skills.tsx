import { skills } from "@/data/skills"

export default function Skills() {
    return (
        <section id="skills" className="py-40 px-6">

            <div className="max-w-5xl mx-auto">

                <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
                    Skills
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="
  border border-white/10
  rounded-xl
  p-6
  text-center
  bg-white/3
  hover:bg-white/6
  hover:-translate-y-1
  transition-all
  duration-300
  text-white
"
                        >
                            {skill}
                        </div>
                    ))}

                </div>

            </div>

        </section>
    )
}