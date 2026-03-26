import type { Project } from "@/types/portfolio"

export const projects: Project[] = [
  {
    title: "AI Dashboard",
    eyebrow: "AI workflow interface",
    description:
      "A dark-mode dashboard concept focused on AI-assisted workflows, clear conversation layout, and a product UI that stays readable even with dense content.",
    image: "/projects/ai-dashboard-cover.png",
    imageAlt: "AI Dashboard interface screenshot displayed inside a stylized browser frame",
    stack: ["React", "JavaScript", "API Integration", "Dashboard UI"],
    status: "Product concept",
    accent: "sky",
    highlights: ["Multi-panel dashboard structure", "Chat and tool workflow UX", "Dense content with clear hierarchy"],
  },
  {
    title: "Todo App",
    eyebrow: "Interaction-focused app",
    description:
      "A compact task management interface built around quick input, clear completion states, and a focused dark UI that keeps everyday actions simple.",
    image: "/projects/todo-app-cover.png",
    imageAlt: "Todo App screenshot centered inside a stylized browser frame",
    stack: ["JavaScript", "Local State", "Responsive UI", "UX"],
    status: "Frontend build",
    accent: "violet",
    highlights: ["Fast task entry and filtering", "Clear completion feedback", "Simple UI with strong visual rhythm"],
  },
  {
    title: "Weather App",
    eyebrow: "Responsive utility app",
    description:
      "A weather experience centered on city search, quick geolocation access, and a layout that stays easy to scan on both desktop and mobile screens.",
    image: "/projects/weather-app-cover.png",
    imageAlt: "Weather App screenshot centered inside a stylized browser frame",
    stack: ["JavaScript", "Weather API", "Geolocation", "Responsive UI"],
    status: "Responsive app",
    accent: "emerald",
    highlights: ["Search and location-first flow", "Clean empty-state presentation", "Readable forecast-oriented layout"],
  },
]
