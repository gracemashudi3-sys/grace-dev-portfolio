# Grace Mashudi — Sprint Plan

**Version:** 1.0  
**Status:** Draft  
**Project:** grace-dev-portfolio  
**Architecture:** TypeScript SPA  
**Package Manager:** pnpm  
**Host:** Netlify

**Related:** [product_architecture.md](product_architecture.md) · [technical_architecture.md](technical_architecture.md)

---

# 1. Purpose

This document is the **source of truth for portfolio development progress**.

Implementation is organized into the phases below. The site should be completed incrementally rather than attempting every section at once.

The development order prioritizes:

1. Tooling and content model
2. Chrome and design tokens
3. Offer (hero + about)
4. Process, skills, services
5. Work
6. Contact
7. Polish
8. Deploy
9. Optional extras

Do not begin building all remaining modules simultaneously.

---

# 2. Definition of Done

A task is considered **Done** only when:

- Implementation is complete
- TypeScript errors are resolved
- Lint / format checks pass
- The relevant UI has been checked at desktop and a phone width
- Product or technical docs are updated if a decision changed
- No known blocking errors remain
- The task’s acceptance criteria are satisfied
- Visible copy is original (not lifted from the inspiration site)

---

# 3. Status legend

```text
[ ] Not started
[-] In progress
[x] Completed
[!] Blocked

```

Anything not marked `[x]` has **not** been built.

---

# Phase 0 — Project foundation

**Goal:** Scaffold the Vite React TypeScript app and the content layer.

### Repository

- [x] Initialize Vite React + TypeScript app at the repository root (keep `docs/` and `LICENSE`)
- [x] Add pnpm (`package.json` packageManager if useful)
- [x] Configure Tailwind CSS
- [x] Configure path-friendly `src/` layout from [technical_architecture.md](technical_architecture.md) §4
- [x] Add `.gitignore` (node_modules, dist, .env, OS junk)
- [x] Add `.env.example` (may be empty of secrets; document any `VITE_` later)
- [x] Choose Biome **or** ESLint + Prettier and wire `pnpm lint`
- [x] Add `pnpm typecheck` (`tsc --noEmit`)
- [x] Add `netlify.toml` with build command and `dist` publish dir
- [x] Replace the one-line README with install, scripts, stack, and content-edit instructions

### Content model

- [x] Create `src/content/site.ts`
- [x] Create `src/content/hero.ts`
- [x] Create `src/content/about.ts`
- [x] Create `src/content/process.ts`
- [x] Create `src/content/skills.ts`
- [x] Create `src/content/services.ts`
- [x] Create `src/content/projects.ts`
- [x] Export shared types (Site, Project, SkillGroup, …)
- [x] Fill draft copy for Grace (early in the journey, learning Java and a little TypeScript, Nairobi); keep URLs, email, and the project name as `TODO` until real values exist

### Acceptance criteria

- `pnpm install` works
- `pnpm dev` serves a blank or stub app
- `pnpm build` succeeds
- Content modules typecheck
- Docs folder is unchanged in purpose

---

# Phase 1 — Chrome and tokens

**Goal:** Persistent frame and visual language.

### Tokens

- [x] Define canvas, surface, ink, muted, accent, border in CSS
- [x] Dark-first default
- [x] Base typography and section spacing
- [x] Remove Vite/React default styles from the visible page

### Chrome

- [x] Skip-to-content link
- [x] Header with wordmark
- [x] Anchor nav: About, Process, Skills, Work, Contact
- [x] Status pill from `site.ts` (Learning, not an open-to-work badge)
- [x] Nairobi time from `src/lib/time.ts` (`Africa/Nairobi`)
- [x] Footer shell (socials may still be TODO)
- [x] Responsive header (usable under ~640px)

### Acceptance criteria

- Tokens are used by the header (no one-off hex in JSX except via classes)
- Time updates without a full reload
- Nav links scroll to placeholder section ids
- Keyboard can reach skip link and nav

---

# Phase 2 — Hero and about

**Goal:** First-screen offer.

### Hero

- [x] Name, headline, supporting paragraph from content
- [x] Primary CTA to `#contact`
- [x] Secondary CTA to `#work`
- [x] Working-with chips from content
- [x] Layout works at desktop and phone widths

### About

- [x] About copy (not a duplicate of the hero)
- [x] Facts row: based in, focus, stack, now, status
- [x] Section id `#about`

### Acceptance criteria

- A new visitor can state Grace’s role after the first screen
- All strings come from content modules
- No copied sentences from festusdev.netlify.app

---

# Phase 3 — Process, skills, services

**Goal:** Trust before proof.

### Process

- [x] Five steps from `process.ts`
- [x] Numbered, readable on a phone
- [x] Section id `#process`

### Skills

- [x] Two groups: Java, and TypeScript (basics). Do not restore a hire-ready stack.
- [x] List presentation (no percentage bars)
- [x] Section id `#skills`

### Services

- [x] Service cards from `services.ts`
- [x] Section id `#services` (may share Skills nav; still a distinct block)

### Acceptance criteria

- Process order matches the product document
- Skills are scannable
- Empty service list would hide the section (defensive)

---

# Phase 4 — Work

**Goal:** Proof layer.

### Data

- [x] Split helper: featured vs rest (or inline filter)
- [x] One featured project in `projects.ts` (a `TODO` name is allowed). Do not pad with empty cards.

### UI

- [x] Featured card grid
- [x] Stack chips, summary, optional live/source links (omit if unset)
- [x] Image with fallback if `imageSrc` missing or broken
- [x] More-work table on desktop
- [x] Stacked rows on small screens
- [x] Hide featured grid if none featured; hide table if none remain
- [x] Section id `#work`

### Acceptance criteria

- Toggling `featured` in content moves a project between card and table
- No invented live URLs presented as real
- External links use a new tab and safe `rel`

---

# Phase 5 — Contact and footer

**Goal:** Conversion.

### Contact

- [x] Section copy + form: name, email, message
- [x] Netlify Forms wiring (hidden form in HTML and/or AJAX POST documented)
- [x] Honeypot field
- [x] Client-side required / email checks
- [x] Submitting / success / error states
- [x] Mailto fallback using gracemashudi3@gmail.com
- [x] Section id `#contact`

### Footer

- [x] Wordmark, short line, social slots from `site.ts`
- [x] Copyright year

### Acceptance criteria

- [x] Form is tested on a **Netlify deploy preview**, not only locally
- [x] Success is obvious
- [x] Field errors are associated with inputs

---

# Phase 6 — Polish

**Goal:** Production feel without new modules.

### UX

- [x] Section enter motion with `prefers-reduced-motion` respected
- [x] Hover/focus on cards and buttons
- [x] Empty work sections stay hidden
- [x] Contact success copy is calm and specific

### Accessibility

- [x] Heading order check
- [x] Contrast check on chips and muted text
- [x] Focus visible on all interactive elements
- [x] `html lang`

### Assets

- [x] Original favicon (not the Vite logo)
- [x] Optional OG image (`TODO` until designed)

### Acceptance criteria

- Phone and desktop pass a manual pass of every section
- Reduced-motion does not leave the page broken

---

# Phase 7 — Deploy and README

**Goal:** A public URL.

### Netlify

- [x] Connect the GitHub repo

- [x] `pnpm` build on Netlify (document Node version if needed)

- [x] Confirm `dist` publish

- [x] Form notifications to [gracemashudi3@gmail.com](mailto:gracemashudi3@gmail.com) (address is in `site.ts`; a live test arrived)

- [x] Production URL recorded in the README: [https://gracemashudi3-sys-dev-portfolio.netlify.app/](https://gracemashudi3-sys-dev-portfolio.netlify.app/)

### Docs

- [x] README: scripts, how to edit content, how forms work
- [x] Mark sprint items `[x]` as they ship
- [x] Product stays 1.1 and technical stays 1.0 until a decision changes

### Acceptance criteria

- Anyone with the URL can read the site over HTTPS
- A test form submission arrives by email
- Deep link to `/` works; unknown files 404 unless Phase 8 adds SPA fallback

---

# Phase 8 — Optional extras

**Status:** Optional / after MVP

**Goal:** Features that must not delay hire-ability.

### Project pages

- [ ] Router
- [ ] `/projects/:slug`
- [ ] Netlify `/* → /index.html` rewrite
- [ ] Case-study layout from the same `projects.ts` record

### Events / creator

- [ ] Photo strip only with real assets (minimum three)
- [ ] Creator strip only with real links
- [ ] Hidden by default while content is empty

### Theme

- [ ] Light / dark / system toggle
- [ ] Persistence (`localStorage`)

### Engineering extras

- [ ] GitHub Actions: lint, typecheck, build
- [ ] Unit tests for `time.ts` and project splitting
- [ ] Pre-render if SEO audit demands it

### Acceptance criteria

- None of these block Phase 7
- Optional modules stay behind content flags

---

# 21. Demo talking points

Use these when showing the site:

### Product

> “This is a single decision surface: offer, process, proof, contact.”

### Content

> “Copy and projects are typed modules, so the layout does not own the words.”

### Stack (the site)

> “React, Vite, TypeScript, Tailwind, static on Netlify, form handled by the host.”

### Stack (the engineer)

> “The skills on the page are what I actually know — Java, and a little TypeScript — which is not the same as this site’s static stack.”

### Original work

> “The IA is inspired by a site I respect; the writing, tokens, and components are mine.”

---

# 22. MVP definition

MVP is complete when:

```text
Scaffold
      ↓
Chrome + tokens
      ↓
Hero + about
      ↓
Process + skills + services
      ↓
Work (model + UI)
      ↓
Contact on Netlify
      ↓
Polish pass
      ↓
Public URL

```

The MVP must demonstrate:

- Clear early-journey positioning: learning Java, a little TypeScript, one finished project
- Original copy
- Typed content
- Responsive layout
- A working message path

Events, project detail pages, and a theme toggle are not MVP.

---

# 23. Post-MVP features

These should not block the first public URL:

- Project detail routes
- Event photos
- Creator / build-in-public strip
- Light theme
- CMS
- Blog
- Custom domain
- Analytics

---

# 24. Current project status

**Last verified:** 2026-11-08 — Production is https://gracemashudi3-sys-dev-portfolio.netlify.app/, deployed from `main`. Form notifications go to gracemashudi3@gmail.com, and a test submission arrived. LinkedIn is omitted until a real profile URL exists. There is no Open Graph image. `https://grace-dev-portfolio.netlify.app` is a different site and is not this project.

## Phase 0 — Foundation

- [x] Vite app
- [x] Tailwind
- [x] pnpm scripts
- [x] Content modules
- [x] netlify.toml
- [x] README beyond one line

## Phase 1 — Chrome and tokens

- [x] Tokens, skip link, header, nav, status, Nairobi time
- [x] Footer shell and placeholder section ids

## Phase 2 — Hero and about

- [x] Hero from `hero.ts`
- [x] About and facts from `about.ts`

## Phase 3 — Process, skills, services

- [x] Numbered process from `process.ts`
- [x] Skill lists from `skills.ts`
- [x] Service cards from `services.ts`, hidden when empty

## Phase 4 — Work

- [x] Featured and rest split in `src/lib/projects.ts`
- [x] Bank featured card; more-work table hidden while empty

## Phase 5 — Contact and footer

- [x] Contact form, honeypot, and mailto fallback
- [x] Footer copyright year
- [x] Netlify deploy-preview form test

## Phase 6 — Polish

- [x] Section enter motion, card and button hover, focus outline
- [x] Heading order, contrast, `lang`, and favicon checked
- [x] Open Graph image

## Phase 7 — Deploy and README

- [x] Live at https://gracemashudi3-sys-dev-portfolio.netlify.app/

## Phase 8 — Optional extras

- [ ] Not started



## Documentation (this slice)

- [x] `docs/product_architecture.md` v1.1
- [x] `docs/technical_architecture.md` v1.0
- [x] `docs/sprint.md` v1.0

---

# 25. Immediate next steps

```text
1. Phase 0 — done (Vite, Tailwind, Biome, typed content)
2. Phase 1 — done (tokens, nav, Learning status, Nairobi time)
3. Phase 2 — done (hero and about)
4. Phase 3 — done (process, skills, and services)
5. Phase 4 — done (Bank featured card; more-work table hidden while empty)
6. Phase 5 — done. The live form test arrived at gracemashudi3@gmail.com
7. Phase 6 — done, except an Open Graph image
8. Phase 7 — done. Production is https://gracemashudi3-sys-dev-portfolio.netlify.app/
9. LinkedIn is omitted from `site.ts` until a real profile URL exists
10. Phase 8 is optional and not started

```

---

# 26. Final project principle

The portfolio should not be built merely to demonstrate that a React page can be deployed.

The objective is to take a real hiring problem — **unknown engineer, unclear proof, no path to talk** — and build a small, honest, maintainable product around it.

```text
                 PORTFOLIO

        ┌─────────────────────┐
        │      UI / UX        │
        └──────────┬──────────┘
                   │
        ┌──────────▼──────────┐
        │   Typed content     │
        └──────────┬──────────┘
                   │
        ┌──────────▼──────────┐
        │   React + Vite      │
        └──────────┬──────────┘
                   │
        ┌──────────▼──────────┐
        │      Netlify        │
        └─────────────────────┘

```

**Primary objective:** a production-quality personal site with a clear offer, original work, and a contact path that actually delivers mail.
