# Djibrilla Boubacar Portfolio

A personal portfolio built to showcase software engineering, machine learning, computer vision, and applied AI projects. The current v1 is a polished single-page homepage with a theme-aware visual system, interactive project cards, a skills cloud, and contact paths.

## Tech Stack

- **Framework**: Next.js 16 with the App Router and Turbopack
- **Language**: TypeScript and React 19
- **Styling**: Tailwind CSS v4 with CSS theme tokens
- **Animation**: Motion for entrance animations, shared layout transitions, and micro-interactions
- **Theme**: `next-themes` with light and dark mode
- **UI**: shadcn-style primitives, Magic UI-inspired effects, Embla carousel, Lucide icons, and custom SVG/PNG assets
- **Content**: Local JSON for project data

## Main Experience

The production-facing homepage lives in `app/page.tsx` and is composed from section components in `components/sections`.

### Navbar

`components/sections/navbar.tsx`

Sticky top navigation with the site owner's name, an About modal trigger, resume link, GitHub link, LinkedIn link, copy-email action, and animated theme toggle. The nav responds to scroll with a subtle border and translucent background.

### Hero

`components/sections/hero.tsx`

First impression section with large typographic messaging, aurora-highlighted words, light/dark background imagery, and staggered Motion entrance animation.

### Projects

`components/sections/expandable-projects.tsx`

Interactive grid of project cards sourced from `data/projects.json`. Clicking a project opens an expanded modal with screenshots, project narrative, live/code links when available, and tech stack tags. Project images use an Embla carousel inside the modal.

### Skills

`components/sections/skills-taxonomy.tsx`

Split section with competency cards on the left and an orbiting skills cloud on the right. The cloud uses technology icons, circular accent backplates, and a theme-aware center logo from `public/logo`.

### Footer

`components/sections/site-footer.tsx`

Final contact section with email, resume, GitHub, and LinkedIn links.

## Project Data

Project content is stored in `data/projects.json` and loaded through `lib/projects.ts`.

Each project supports:

```json
{
  "id": "project-slug",
  "title": "Project Name",
  "subtitle": "Short category line",
  "description": "Card summary",
  "longDescription": "Expanded modal narrative",
  "category": "featured",
  "tags": ["Computer Vision", "PyTorch"],
  "stack": ["Python", "Next.js"],
  "thumbnail": "/images/projects/example/thumbnail.png",
  "images": ["/images/projects/example/screenshot.png"],
  "liveUrl": null,
  "repoUrl": "https://github.com/...",
  "year": 2026,
  "featured": true,
  "order": 1
}
```

Current projects include HoopSync, Fairness-Aware Credit Scoring, CoFina, and SpearPhish.

## Assets

- Project screenshots and thumbnails live in `public/images/projects`
- Light and dark hero backgrounds live in `public/images/backgrounds`
- Technology icons live in `public/icons`
- Brand logos live in `public/logo`
- Resume PDF lives in `public/resume`
- Browser favicon is `app/favicon.ico`

## Local Development

```bash
npm install
npm run dev
```

The development server runs at `http://localhost:3000` by default.

On Windows PowerShell, if script execution blocks `npm`, use:

```bash
npm.cmd run dev
```

## Build

```bash
npm.cmd run build
```

The production build should complete successfully. If it fails, treat that as a release blocker before deployment.

## Deployment Notes

The homepage is visually close to a v1 deployment candidate. Before production deployment, confirm:

- `npm.cmd run build` passes locally and in the deployment environment
- `NEXT_PUBLIC_SITE_URL` is set to the final production URL
- Public links, resume, project repos, screenshots, and contact details are checked
- Favicon cache is verified in a clean browser profile

## Current Status

**V1 polish stage.**

The core homepage experience is implemented and suitable for iterative improvement. The main remaining work is not adding more features; it is deployment QA and keeping public copy current as the portfolio evolves.
