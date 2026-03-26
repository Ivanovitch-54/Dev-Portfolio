# AI Context - Developer Portfolio

## Purpose

This repository is a premium developer portfolio built to help the owner land a fullstack role.

The site should feel strong enough for recruiters and product teams at companies such as:

- Vercel
- Stripe
- Linear
- Framer
- modern SaaS startups with high standards for UX, frontend craft, and product quality

This is not only a visual portfolio. It must communicate:

- strong frontend polish
- credible fullstack engineering
- clean architecture
- maintainable code
- good product taste
- attention to responsive behavior and performance

## Current Working State

- Main protected branch: `main`
- Active work branch: `portfolio-improvements`
- Do not modify `main` unless the user explicitly asks for it
- The repository currently contains many local changes on `portfolio-improvements`
- `AI_CONTEXT.md` is now part of the repo context and can be updated when the project evolves

## Developer Profile To Represent

The portfolio owner is a fullstack developer, not only a frontend developer.

The positioning should consistently communicate:

- fullstack product development
- frontend polish and interaction quality
- backend clarity and scalable application structure
- modern React / Next.js / TypeScript skills
- the ability to ship production-ready interfaces and application logic

Avoid messaging that makes the profile look frontend-only.

## Project Goals

The portfolio should be:

- visually impressive without feeling generic
- professional enough to support real hiring conversations
- mobile-first and reliable on recent smartphones
- accessible and respectful of reduced motion
- easy to maintain and extend

Primary quality bar:

1. strong first impression
2. clear content hierarchy
3. trust signals for recruiters
4. smooth but restrained motion
5. consistent responsive behavior

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- lucide-react
- react-type-animation

## Commands

Run these after meaningful changes:

- `npm run lint`
- `npx tsc --noEmit --pretty false`
- `npm run build`

If `next build` fails in a sandbox with `spawn EPERM`, rerun it outside the sandbox rather than assuming the code is broken.

## Real Architecture

### App shell

- `src/app/layout.tsx`
  - root layout
  - metadata
  - global background layers
  - `Navbar`
  - `BackToTopButton`
  - `PageIntro`
  - `Spotlight`

- `src/app/page.tsx`
  - page composition for sections in order

- `src/app/globals.css`
  - global atmosphere
  - safe-area handling
  - section target feedback
  - global selection and focus styles

### Layout components

- `src/components/layout/Navbar.tsx`
  - sticky navigation
  - mobile menu
  - active section highlighting
  - custom in-page scroll targeting

- `src/components/layout/ScrollProgress.tsx`
  - progress bar linked to page scroll

- `src/components/layout/BackToTopButton.tsx`
  - floating return-to-top action

- `src/components/layout/Footer.tsx`
  - footer and social links

- `src/components/layout/ContactButton.tsx`
  - reusable contact CTA button

### Sections

- `src/components/sections/Hero.tsx`
  - main value proposition
  - fullstack positioning
  - CTA area
  - hero signal cards
  - availability card

- `src/components/sections/Projects.tsx`
  - project showcase
  - recruiter framing

- `src/components/sections/Skills.tsx`
  - grouped capabilities

- `src/components/sections/About.tsx`
  - working style and principles

- `src/components/sections/Contact.tsx`
  - contact CTA and social links

### Hero subcomponents

- `src/components/hero/HeroBackground.tsx`
- `src/components/hero/HeroCTA.tsx`
- `src/components/hero/HeroTyping.tsx`
- `src/components/hero/HeroTechStack.tsx`
- `src/components/hero/HeroFloatingIcons.tsx`
- `src/components/hero/HeroSignals.tsx`
- `src/components/hero/HeroAvailabilityCard.tsx`

### Effects

- `src/components/effects/PageIntro.tsx`
- `src/components/effects/Spotlight.tsx`
- `src/components/effects/GridBackground.tsx`
- `src/components/effects/AuroraBackground.tsx`

### UI primitives

- `src/components/ui/Section.tsx`
- `src/components/ui/SectionHeading.tsx`
- `src/components/ui/Reveal.tsx`
- `src/components/ui/StaggerContainer.tsx`
- `src/components/ui/StaggerItem.tsx`
- `src/components/ui/InteractiveCard.tsx`

### Data and types

- `src/data/site.ts`
  - navigation links
  - hero facts
  - hero signals
  - social links
  - open-to-work labels

- `src/data/projects.ts`
  - project cards content

- `src/data/skills.ts`
  - skill groups

- `src/types/portfolio.ts`
  - shared content types

### Shared logic

- `src/hooks/useActiveSection.ts`
  - source of truth for active nav item

- `src/components/hooks/useActiveSection.ts`
  - compatibility re-export only

- `src/lib/section-navigation.ts`
  - source of truth for section targeting and centered scrolling

- `src/lib/animations.ts`
  - shared motion tokens and variants

- `src/lib/utils.ts`
  - utility helpers such as `cn`

## Important Implementation Notes

### Navigation

The active section logic is important and should not be casually rewritten.

Current intent:

- active nav item is based on a visual reading line under the sticky navbar
- clicking a nav item should center the relevant content block, not just jump to the section top
- `src/lib/section-navigation.ts` and `src/hooks/useActiveSection.ts` should stay aligned

If navigation behavior is changed, review both files together.

### Section targeting

`data-section-content="true"` in `Section.tsx` marks the actual content block used for centered navigation.

If a section gets a custom structure like Hero, preserve this behavior or the navbar targeting will drift.

### Motion

Motion should feel high-end, but not noisy.

Preferred motion language:

- smooth
- restrained
- product-like
- performance-aware
- reduced-motion friendly

Avoid:

- excessive infinite animations
- heavy motion on mobile for no benefit
- flashy motion that competes with content

### Mobile responsiveness

Mobile quality is a first-class priority.

Always check:

- modern smartphone widths
- safe areas and bottom insets
- sticky navbar spacing
- CTA stacking
- card height consistency
- readable typography at small widths
- touch-friendly spacing

Do not assume that a desktop-first layout with a few breakpoints is enough.

### Content credibility

Recruiters notice trust issues quickly.

Avoid:

- placeholder links
- fake demos
- unfinished labels that look accidental
- frontend-only wording when the owner is fullstack

Prefer:

- clear project purpose
- signals of architecture, product thinking, and backend competence
- contact paths that feel real and intentional

## UI Direction

The visual style should stay in this zone:

- premium SaaS
- sharp typography
- layered depth
- subtle glass surfaces
- atmospheric gradients
- polished cards
- elegant spacing

But avoid generic "purple AI landing page" styling.

The site should feel more editorial and intentional than template-like.

## Working Rules For AI Agents

When working in this repo:

1. Protect `main`
2. Work on `portfolio-improvements` unless instructed otherwise
3. Analyze before large refactors
4. Reuse the existing architecture when possible
5. Prefer improving systems over adding one-off hacks
6. Preserve or improve mobile UX
7. Keep motion accessible
8. Keep the profile positioned as fullstack
9. Validate after meaningful changes
10. Comment only non-obvious logic, not obvious JSX

## Preferred Workflow

For analysis requests:

1. inspect codebase
2. identify issues
3. explain findings clearly
4. propose improvements in priority order

For implementation requests:

1. inspect current files first
2. make focused changes
3. keep architecture coherent
4. validate with lint, typecheck, and build when the change is substantial
5. summarize what changed and any remaining risks

## Code Style Preferences

- Keep components readable and modular
- Prefer shared primitives over duplicated animation logic
- Use comments only where a future developer could ask "why is this done this way?"
- Keep TypeScript explicit when it improves clarity
- Use Tailwind consistently
- Keep file names and structures stable unless there is a good architectural reason to move them

## High Priority Areas

These areas matter most when improving the project:

1. mobile responsive quality
2. navbar reliability and in-page navigation
3. hero clarity and recruiter impact
4. project card quality and credibility
5. performance and reduced-motion handling
6. clean reusable architecture

## Current Quality Baseline

At the time of writing, the codebase already includes:

- shared section navigation helpers
- active section tracking
- reusable motion primitives
- responsive improvements for modern smartphones
- comments on important non-obvious code paths

Future updates to this file should keep it aligned with the real repo state.
