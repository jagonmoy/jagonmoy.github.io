---
name: frontend-skill
description: Expert guide for implementing UI components and designs in this Next.js 16 / React 19 portfolio project. Use this skill whenever the user wants to add a new section, redesign a component, update layout, change colors or styles, add animations, modify the navbar, create new cards or UI elements, or implement any visual design from a prompt. ALWAYS use this skill for any frontend, UI, or component work in this project — even for small requests like "add a badge", "make this responsive", or "update the card style".
---

# Frontend Skill — jagonmoy.github.io Portfolio

This is a **Next.js 16 / React 19 App Router** personal portfolio. Everything below tells you exactly how to build new UI consistently with the existing codebase.

---

## Stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript 5.6**
- **Tailwind CSS 3.4** with `darkMode: 'class'`
- **Framer Motion 11** for all animations
- **Lucide React** for UI icons
- **Custom SVG components** in `src/icons/` for tech logos
- `cn()` from `src/lib/utils.ts` (clsx + tailwind-merge) for conditional classes

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout: two-column grid, ThemeProvider, NavBar
│   ├── page.tsx            # Home: renders all sections with framer-motion stagger
│   └── globals.css         # CSS variables, utility classes, scrollbar
├── components/
│   ├── <SectionName>/index.tsx   # One component per section
│   └── Navbar/
│       └── components/
│           ├── SocialLinks/index.tsx
│           └── TabNavigation/index.tsx
├── contexts/
│   └── ThemeContext.tsx     # useTheme() + ThemeProvider
├── data/
│   └── data.json           # ALL portfolio content
├── icons/                  # SVG tech logo components
└── lib/
    └── utils.ts            # cn()
```

**Module resolution** — `tsconfig.json` sets `baseUrl: src/`, so always use non-relative imports from within `src/`:
```ts
import data from 'data/data.json';
import { Python } from 'icons/Python';
import { cn } from 'lib/utils';
```

---

## Data Source

**All content comes from `src/data/data.json`. Never hardcode portfolio text in components.**

Top-level keys and what they contain:
- `profileIntro` — name, bio, location, company, university, email, phone, social links
- `aboutMeParagraphs` — heading, areasOfInterest[], paragraph1
- `education` — heading, university{}, college{} — each has degree, duration, result, bulletPoints[]
- `experience.software_development` — experience1/2/3 (position, company, duration, location, technologies, bulletPoints[])
- `experience.artificial_intelligence` — research1–4 (title, description, organization, technologies, bulletPoints[], optional links)
- `experience.mentorship` — mentorship1/2
- `experience.volunteering` — volunteering1/2
- `showcase.technicalSkills` — languages, frameworks, developerTools, mlTools (key → display name maps)
- `showcase.projects` — project1, project2
- `showcase.competitiveProgramming` — profile links, bulletPoints[]
- `showcase.languageProficiency` — English + Bengali

To add new content: add it to `data.json` first, then read it in the component.

---

## Theme & Colors

### CSS Variables (defined in `globals.css`, used via Tailwind semantic tokens)

| Tailwind class | Light | Dark |
|---|---|---|
| `bg-background` / `text-foreground` | white / dark navy | dark navy / near-white |
| `text-primary` | blue `221.2 83.2% 53.3%` | lighter blue `217.2 91.2% 59.8%` |
| `bg-secondary` / `text-secondary-foreground` | light gray | dark slate |
| `text-muted-foreground` | mid gray | medium gray |
| `border-border` | light gray | dark slate |

Always prefer semantic tokens over raw hex/hsl values.

### Tailwind Color Scales

- **Brand blue**: `primary-50` → `primary-900` (use `primary-500` as default, `primary-600` for hover)
- Standard Tailwind: `gray-*`, `purple-*`, `green-*`, `blue-*`

### Signature Gradients

```tsx
// Section header icon — most common
bg-gradient-to-br from-primary-500 to-purple-600

// Badge / pill accent
bg-gradient-to-r from-primary-500 to-purple-600

// Heading text (via utility class)
className="gradient-text"
// expands to: bg-gradient-to-r from-primary-500 to-purple-600 bg-clip-text text-transparent

// Alternate (Education college card)
from-green-500 to-blue-600
```

---

## Utility Classes (`globals.css`)

```tsx
// Frosted glass card — ALWAYS pair light + dark variants
className="glass-effect dark:glass-effect-dark"
// glass-effect      = bg-white/80 backdrop-blur-xl border border-white/30 shadow-lg
// glass-effect-dark = bg-gray-900/80 backdrop-blur-xl border border-gray-700/30 shadow-lg

// Gradient heading
className="gradient-text"

// Card scale + shadow on hover
className="card-hover"

// Buttons
className="button-primary"    // blue filled
className="button-secondary"  // outlined subtle
```

---

## Component Pattern

Every section component follows this exact structure — use it as a template:

```tsx
'use client';  // required for framer-motion and hooks

import { motion } from 'framer-motion';
import { SomeIcon } from 'lucide-react';
import data from 'data/data.json';

function SectionName() {
  const { relevantKey } = data;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    // Outer glass container — viewport entrance
    <motion.div
      className="w-full glass-effect dark:glass-effect-dark p-4 sm:p-6 lg:p-8 xl:p-10 rounded-2xl sm:rounded-3xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="space-y-6 sm:space-y-8 lg:space-y-10">

        {/* Section header — centered icon + gradient title */}
        <motion.div
          className="text-center mb-8 sm:mb-10 lg:mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl sm:rounded-2xl mb-3 sm:mb-4"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <SomeIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </motion.div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text">
            {relevantKey.heading}
          </h2>
        </motion.div>

        {/* Content with stagger */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {/* items use itemVariants */}
        </motion.div>

      </div>
    </motion.div>
  );
}

export default SectionName;
```

### Card Pattern

```tsx
<motion.div
  key={index}
  className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-white/50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 hover:border-primary-500/50 transition-all duration-300"
  variants={itemVariants}
  whileHover={{ y: -3, scale: 1.01 }}
  transition={{ duration: 0.3 }}
>
  {/* Badge — top right */}
  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
    <span className="px-2 py-1 sm:px-3 text-xs font-medium bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-full shadow-lg">
      Badge
    </span>
  </div>

  {/* Main content — pt-12/16 to clear the badge */}
  <div className="p-4 sm:p-6 pt-12 sm:pt-16">
    {/* Icon + title row */}
    <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 mb-4">
      <motion.div
        className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary-500 to-purple-600 shadow-lg self-start"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.2 }}
      >
        <SomeIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </motion.div>
      <div className="flex-1 min-w-0">
        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-primary-600 transition-colors duration-300 break-words leading-tight">
          Title
        </h3>
        <p className="text-base sm:text-lg font-semibold text-primary-600 mb-1">Subtitle</p>
        <p className="text-sm text-muted-foreground">Meta info</p>
      </div>
    </div>
  </div>

  {/* Hover overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
</motion.div>
```

### Bullet Points

```tsx
{bulletPoints.map((point, i) => (
  <motion.div
    key={i}
    className="flex items-start space-x-3"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.1 * i, duration: 0.5 }}
  >
    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{point}</p>
  </motion.div>
))}
```

### Tech Tag Pills

```tsx
{technologies.split(', ').map((tech, i) => (
  <span
    key={i}
    className="px-2 py-1 sm:px-3 text-xs font-medium bg-muted text-muted-foreground rounded-full border border-gray-200 dark:border-gray-700"
  >
    {tech}
  </span>
))}
```

---

## Available Icons

### Lucide React (UI chrome)
Common ones already used: `GraduationCap`, `School`, `Github`, `ExternalLink`, `Globe`, `Users`, `Code`, `Database`, `Bot`, `FolderOpen`, `MapPin`, `Calendar`, `Download`, `Mail`, `Phone`, `Building2`, `Award`, `BookOpen`, `Briefcase`, `Star`, `Trophy`, `Zap`, `Link`.

### Custom Tech Icons (`src/icons/`)
SVG components for tech logos. Available:
`C`, `Chroma`, `Codeforces`, `CPlusPlus`, `CSS`, `Docker`, `ExpressJs`, `FastAPI`, `Git`, `GitHub`, `HTML`, `JavaScript`, `Jest`, `Jupyter`, `LangChain`, `Leetcode`, `Linux`, `NestJs`, `NextJs`, `NodeJs`, `NumPy`, `Pandas`, `Playwright`, `PostGreSQL`, `Postman`, `Python`, `PyTorch`, `React`, `Sanity`, `Scikit-learn`, `StopStalk`, `Swagger`, `Tailwind`, `TensorFlow`, `TypeScript`

Import: `import { Python } from 'icons/Python';`

Wrap in a sized container for iOS Safari compatibility:
```tsx
<div className="icon-wrapper w-8 h-8 sm:w-10 sm:h-10">
  <Python />
</div>
```

---

## Framer Motion — Standard Animation Props

```tsx
// Outer container entrance on scroll
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.8, ease: 'easeOut' }}

// Header entrance
initial={{ opacity: 0, y: -20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}

// Header icon spin on hover
whileHover={{ rotate: 360, scale: 1.1 }}
transition={{ duration: 0.6 }}

// Card lift on hover
whileHover={{ y: -3, scale: 1.01 }}
transition={{ duration: 0.3 }}

// Small icon jiggle on hover
whileHover={{ scale: 1.1, rotate: 5 }}
transition={{ duration: 0.2 }}

// Button press
whileHover={{ scale: 1.02 }}
whileTap={{ scale: 0.98 }}
```

Tailwind animations also available via `animate-*`: `fade-in`, `fade-in-up`, `fade-in-down`, `slide-in-left`, `slide-in-right`, `bounce-in`, `scale-in`, `float`, `glow`, `shimmer`.

---

## Responsive Breakpoints

Mobile-first. Common patterns in this project:

```
text-sm sm:text-base lg:text-lg
p-4 sm:p-6 lg:p-8 xl:p-10
w-12 h-12 sm:w-16 sm:h-16
rounded-2xl sm:rounded-3xl
space-y-6 sm:space-y-8 lg:space-y-10
flex-col sm:flex-row
grid-cols-1 md:grid-cols-2
gap-4 sm:gap-6
mb-8 sm:mb-10 lg:mb-12
```

---

## Adding a New Section

1. Add content to `src/data/data.json`
2. Create `src/components/NewSection/index.tsx` using the component pattern above
3. Add to `src/app/page.tsx` inside the stagger container:
   ```tsx
   <motion.div id="new-section" variants={sectionVariants}>
     <NewSection />
   </motion.div>
   ```
4. If it needs navbar navigation, add an entry to `TabNavigation`

---

## Rules

- `'use client'` on every component using framer-motion or hooks
- No hardcoded strings — all text comes from `data.json`
- No relative `../../` imports within `src/` — use the baseUrl aliases
- Always animate — use `whileInView` entrance on every new component
- Always support dark mode — pair `glass-effect dark:glass-effect-dark`, use semantic tokens
- Always responsive — mobile-first, verify at sm/md/lg
- Use `cn()` for any conditional className composition
