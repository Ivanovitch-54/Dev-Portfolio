export type SectionId = "hero" | "projects" | "skills" | "about" | "contact"

export interface NavigationItem {
  id: SectionId
  label: string
}

export interface SocialLink {
  label: string
  href: string
}

export type ProjectAccent = "sky" | "emerald" | "amber" | "violet"

export interface Project {
  title: string
  eyebrow: string
  description: string
  image: string
  imageAlt: string
  stack: string[]
  status: string
  accent: ProjectAccent
  highlights: string[]
  github?: string
  demo?: string
}

export interface SkillGroup {
  title: string
  description: string
  items: string[]
}

export interface HeroSignal {
  title: string
  description: string
}

export interface HeroFact {
  label: string
  value: string
}
