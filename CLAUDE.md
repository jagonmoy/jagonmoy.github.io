# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start development server at localhost:3000
npm run build        # Production build
npm run lint         # ESLint on src/**/*.{ts,tsx}
npm run lint:fix     # Auto-fix ESLint issues
npm run format       # Prettier format all files
npm run check-format # Check formatting without writing
```

There are no tests in this project.

## Architecture

This is a **Next.js 16 / React 19 personal portfolio** (single-page, App Router). All content is driven by `src/data/data.json` — updating portfolio content means editing that file only, not the components.

**Layout (`src/app/layout.tsx`):** Two-column grid on large screens — left column is a sticky `ProfileAndIntro` sidebar (1/4 width); right column is the scrollable main content (3/4 width). `ThemeProvider` wraps everything for dark/light mode. `NavBar` is fixed at the top.

**Page (`src/app/page.tsx`):** Renders all sections in order using `framer-motion` staggered entrance animation. Each section has an `id` used by the navbar for smooth scroll navigation.

**Sections (each in `src/components/<SectionName>/index.tsx`):** Independent components that read from `data.json` directly (no props passed from the page). The sections are: `AboutMe`, `Education`, `AIResearchAndProjects`, `SoftwareDevelopment`, `MentorshipExperience`, `VolunteeringExperience`, `Projects`, `TechnicalSkills`, `CP`, `LanguageProficiency`.

**Theme:** `src/contexts/ThemeContext.tsx` manages dark/light state in `localStorage` (defaults to dark), toggled via the navbar. Tailwind's `darkMode: 'class'` strategy is used — CSS variables for semantic colors (background, foreground, primary, etc.) are defined in `src/app/globals.css`. Use `cn()` from `src/lib/utils.ts` (clsx + tailwind-merge) for conditional class composition.

**Icons (`src/icons/`):** Custom SVG icon components for tech stack logos, one per technology. Used in `TechnicalSkills` and experience sections.

**Module resolution:** `tsconfig.json` sets `baseUrl` to `src/`, so imports use `components/Foo`, `contexts/ThemeContext`, `data/data.json`, `icons/Python`, etc. — no relative paths needed from within `src/`.

**Environment variable:** `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID` — set in `.env.local` for GA integration.
