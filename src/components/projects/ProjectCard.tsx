"use client"

import { motion } from "framer-motion"

interface Project {
  title: string
  description: string
  stack: string[]
  image?: string
  github?: string
  demo?: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 opacity-0 hover:opacity-100 transition"
        style={{
          background:
            "radial-gradient(circle at center, rgba(168,85,247,0.15), transparent 70%)",
        }}
      />

      <h3 className="text-xl font-semibold mb-2">
        {project.title}
      </h3>

      <p className="text-gray-400 mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-sm px-3 py-1 rounded-lg bg-white/10"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4 text-sm">

        <a
          href={project.demo}
          className="text-purple-400 hover:text-purple-300"
        >
          Live Demo
        </a>

        <a
          href={project.github}
          className="text-gray-400 hover:text-white"
        >
          GitHub
        </a>

      </div>
    </motion.div>
  )
}