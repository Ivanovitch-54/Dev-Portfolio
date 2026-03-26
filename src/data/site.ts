import type { HeroFact, HeroSignal, NavigationItem, SectionId, SocialLink } from "@/types/portfolio"

export const sectionOrder: SectionId[] = [
  "hero",
  "projects",
  "skills",
  "about",
  "contact",
]

export const navigationLinks: NavigationItem[] = [
  { id: "hero", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
]

export const heroTechStack = [
  "Next.js",
  "TypeScript",
  "Node.js",
  "API Design",
  "Tailwind CSS",
  "Framer Motion",
  "System Design",
]

export const heroSignals: HeroSignal[] = [
  {
    title: "Product polish",
    description: "Thoughtful spacing, transitions, hierarchy, and details that make interfaces feel intentional.",
  },
  {
    title: "Fullstack systems",
    description: "Reusable frontend patterns paired with backend structure that stays clear and scalable as the product grows.",
  },
  {
    title: "Motion with restraint",
    description: "Animations that guide attention, support storytelling, and stay smooth across devices.",
  },
]

export const heroFacts: HeroFact[] = [
  {
    label: "Focus",
    value: "Fullstack roles",
  },
  {
    label: "Specialty",
    value: "Frontend polish and backend clarity",
  },
  {
    label: "Mindset",
    value: "Product polish",
  },
]

export const socialLinks: SocialLink[] = [
  {
    label: "Email",
    href: "mailto:ivan.noblecourt@gmail.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/Ivanovitch-54",
  },
]

export const openToTopics = [
  "Fullstack roles",
  "Freelance product work",
  "Remote-friendly teams",
]
