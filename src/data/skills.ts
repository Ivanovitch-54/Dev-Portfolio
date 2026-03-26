import type { SkillGroup } from "@/types/portfolio"

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend and UI",
    description:
      "Component-driven interfaces with consistent hierarchy, responsive behavior, and attention to product detail.",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Motion and UX",
    description:
      "Transitions and interaction patterns designed to guide attention, reinforce hierarchy, and stay smooth on real devices.",
    items: ["Framer Motion", "Micro-interactions", "Responsive Design", "Visual Polish"],
  },
  {
    title: "Architecture",
    description:
      "Clear application structure, reusable patterns, and backend-aware thinking that keep a project readable as it grows.",
    items: ["Component Design", "App Router", "API Structure", "Scalable Code"],
  },
  {
    title: "Backend and Tooling",
    description:
      "Node.js foundations, REST APIs, and developer workflows that support reliable shipping beyond the UI layer.",
    items: ["Node.js", "REST APIs", "Git", "Developer Experience"],
  },
]
