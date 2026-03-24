"use client"

import { projects } from "@/data/projects"
import ProjectCard from "../projects/ProjectCard"

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32 px-6 max-w-6xl mx-auto"
    >
      <h2 className="text-4xl font-bold mb-12 text-center">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
          />
        ))}

      </div>
    </section>
  )
}