---
name: backend-skill
description: Extracts information from Jagonmoy's CV (public/Jagonmoy_CV.pdf) and updates src/data/data.json so changes are immediately reflected in the portfolio UI. Use this skill whenever the user says things like "update my portfolio from my CV", "add this experience to my portfolio", "sync my CV with the site", "update data.json", "add a new project/skill/experience", "my CV has changed", or any instruction to pull content from the CV into the website. After updating data.json, handles small UI tweaks directly and delegates large structural UI changes to the frontend-skill.
---

# Backend Skill — jagonmoy.github.io Portfolio

This skill manages the **data layer** of the portfolio: reading the CV, updating `src/data/data.json`, and deciding whether follow-up UI work is small enough to handle inline or large enough to require the `frontend-skill`.

---

## CV Location

The CV is always at:
```
public/Jagonmoy_CV.pdf
```

Read it with the `Read` tool. It is a PDF — extract the text content and use it as the source of truth for all portfolio updates.

---

## data.json — The Single Source of Truth

All portfolio content lives in `src/data/data.json`. **Never hardcode text in components.** The full schema is:

```
profileIntro         — name, bio, location, company, university, email, phone, social links
aboutMeParagraphs    — heading, areasOfInterest[], paragraph1
education            — university{}, college{} — each: degree, duration, result, bulletPoints[]
experience
  software_development  — experience1/2/3: position, company, duration, location, technologies, bulletPoints[]
  artificial_intelligence — research1–4: title, description, organization, technologies, bulletPoints[], optional links
  mentorship            — mentorship1/2: position, institute, duration, location, description
  volunteering          — volunteering1/2: position, event, location, duration, description
showcase
  technicalSkills       — languages, frameworks, developerTools, mlTools (key → display name maps)
  projects              — project1, project2: name, link, technologies, description
  competitiveProgramming — cfLink, leetCodeLink, uhuntLink, bulletPoints[]
  languageProficiency   — English + Bengali entries
```

When adding new entries (e.g., a 4th work experience), extend the pattern: `experience3` → `experience4`, keeping the same shape as the existing sibling entries.

---

## Step-by-Step Workflow

### 1. Understand the user's intent

Parse the user's instruction carefully:
- Are they asking to sync everything from the CV, or just a specific section?
- Are they adding something new, or updating/correcting existing content?
- Is there a specific field or section they want changed?

If the scope is ambiguous, ask one focused clarifying question before proceeding.

### 2. Read the CV

Read `public/Jagonmoy_CV.pdf`. Extract the relevant section(s) based on the user's intent.

### 3. Read data.json

Read `src/data/data.json` to understand the current state before making any edits.

### 4. Plan the data.json changes

Map the CV content to the data.json schema. For each change:
- Identify which key(s) will be updated
- Decide if this is an update to an existing entry or a new entry
- Note any new keys being added that didn't exist before — these may require UI component changes

### 5. Update data.json

Apply all changes to `src/data/data.json` using the Edit tool. Keep all existing keys intact — only add or modify what the user asked about.

**Key rules:**
- Match the exact shape of sibling entries when adding new items
- Preserve existing indentation and formatting style (4-space indent)
- Headings and section labels come from data.json too — don't change them unless the user explicitly asks
- Technology strings use the comma-separated format: `"TypeScript, Next.js, PostgreSQL"`

### 6. Assess whether UI changes are needed

After updating data.json, decide if the components need to change:

**No UI change needed** — the component already renders the new data dynamically (most cases):
- Updating text, bullet points, duration, description, technologies in an existing entry
- Adding/removing items from areasOfInterest[], languages, frameworks, mlTools, etc.
- Updating links, contact info, or profile intro fields
- These changes just work — verify by checking that the component reads the relevant key.

**Small UI change needed** — handle it directly, following the `frontend-skill` patterns:
- A new data.json key was added that no component reads yet (e.g., a new optional field like `award` or `gpa`)
- A minor display tweak: show/hide a field conditionally, add a small badge, format a new field
- A tiny layout fix affecting 1–2 lines in a single component
- When making these changes, follow the exact patterns in `frontend-skill`: use `cn()`, semantic Tailwind tokens, `glass-effect dark:glass-effect-dark`, framer-motion `whileInView` entrances, `'use client'` directive.

**Large UI change — delegate to `frontend-skill`**:
- Adding an entirely new section to the page (new component + page.tsx + navbar entry)
- Restructuring how a section renders (new card layout, new visual design)
- Adding a new category of items that doesn't fit the current component structure
- Changes touching 3+ components or requiring significant new JSX

When delegating, tell the user: "The data.json update is done. The UI change required is large — please invoke the `frontend-skill` to implement [describe exactly what needs to change in the UI]."

---

## What "Small" vs "Large" Means in Practice

| Situation | Size | Action |
|---|---|---|
| New job at same company, same shape as existing | No change | Just update data.json |
| Added a `certifications` key to data.json for first time | Small | Add 5–10 lines to the relevant component to render it |
| User wants a brand new "Certifications" section with its own card layout | Large | Delegate to frontend-skill |
| Updated bio paragraph | No change | Just update data.json |
| Added a new language to technicalSkills.languages | No change | TechnicalSkills already iterates over the map |
| Added a 4th work experience but the component only renders experience1–3 by key name | Small | Update component to render experience4 |
| User wants the work experience section redesigned with a timeline layout | Large | Delegate to frontend-skill |

---

## Component File Map

When small UI changes are needed, here's where to look:

```
src/components/AboutMe/index.tsx            — aboutMeParagraphs
src/components/Education/index.tsx          — education
src/components/SoftwareDevelopment/index.tsx — experience.software_development
src/components/AIResearchAndProjects/index.tsx — experience.artificial_intelligence
src/components/MentorshipExperience/index.tsx  — experience.mentorship
src/components/VolunteeringExperience/index.tsx — experience.volunteering
src/components/Projects/index.tsx           — showcase.projects
src/components/TechnicalSkills/index.tsx    — showcase.technicalSkills
src/components/CP/index.tsx                 — showcase.competitiveProgramming
src/components/LanguageProficiency/index.tsx — showcase.languageProficiency
src/app/page.tsx                            — section order and IDs
src/components/Navbar/components/TabNavigation/index.tsx — nav links
```

---

## After Making Changes

1. Run `npm run lint` to catch TypeScript/ESLint errors.
2. Tell the user what was changed in data.json (which keys, what content).
3. If a small UI tweak was made, note which file was edited.
4. If delegating to frontend-skill, describe exactly what UI work remains.
