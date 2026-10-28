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

- [ ] Initialize Vite React + TypeScript app at the repository root (keep `docs/` and `LICENSE`)
- [ ] Add pnpm (`package.json` packageManager if useful)
- [ ] Configure Tailwind CSS
- [ ] Configure path-friendly `src/` layout from [technical_architecture.md](technical_architecture.md) §4
- [ ] Add `.gitignore` (node_modules, dist, .env, OS junk)
- [ ] Add `.env.example` (may be empty of secrets; document any `VITE_` later)
- [ ] Choose Biome **or** ESLint + Prettier and wire `pnpm lint`
- [ ] Add `pnpm typecheck` (`tsc --noEmit`)
- [ ] Add `netlify.toml` with build command and `dist` publish dir
- [ ] Replace the one-line README with install, scripts, stack, and content-edit instructions

### Content model

- [ ] Create `src/content/site.ts`
- [ ] Create `src/content/hero.ts`
- [ ] Create `src/content/about.ts`
- [ ] Create `src/content/process.ts`
- [ ] Create `src/content/skills.ts`
- [ ] Create `src/content/services.ts`
- [ ] Create `src/content/projects.ts`
- [ ] Export shared types (Site, Project, SkillGroup, …)
- [ ] Fill draft copy for Grace (backend-focused, Nairobi, open to work); keep URLs, email, and project names as `TODO` until real values exist

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

- [ ] Define canvas, surface, ink, muted, accent, border in CSS
- [ ] Dark-first default
- [ ] Base typography and section spacing
- [ ] Remove Vite/React default styles from the visible page

### Chrome

- [ ] Skip-to-content link
- [ ] Header with wordmark
- [ ] Anchor nav: About, Process, Skills, Work, Contact
- [ ] Open-to-work status from `site.ts`
- [ ] Nairobi time from `src/lib/time.ts` (`Africa/Nairobi`)
- [ ] Footer shell (socials may still be TODO)
- [ ] Responsive header (usable under ~640px)

### Acceptance criteria

- Tokens are used by the header (no one-off hex in JSX except via classes)
- Time updates without a full reload
- Nav links scroll to placeholder section ids
- Keyboard can reach skip link and nav

---

# Phase 2 — Hero and about

**Goal:** First-screen offer.

### Hero

- [ ] Name, headline, supporting paragraph from content
- [ ] Primary CTA to `#contact`
- [ ] Secondary CTA to `#work`
- [ ] Working-with chips from content
- [ ] Layout works at desktop and phone widths

### About

- [ ] About copy (not a duplicate of the hero)
- [ ] Facts row: based in, focus, stack, now, status
- [ ] Section id `#about`

### Acceptance criteria

- A new visitor can state Grace’s role after the first screen
- All strings come from content modules
- No copied sentences from festusdev.netlify.app

---

# Phase 3 — Process, skills, services

**Goal:** Trust before proof.

### Process

- [ ] Five steps from `process.ts`
- [ ] Numbered, readable on a phone
- [ ] Section id `#process`

### Skills

- [ ] Four groups: Backend, Databases, Frontend, Tools
- [ ] List presentation (no percentage bars)
- [ ] Section id `#skills`

### Services

- [ ] Service cards from `services.ts`
- [ ] Section id `#services` (may share Skills nav; still a distinct block)

### Acceptance criteria

- Process order matches the product document
- Skills are scannable
- Empty service list would hide the section (defensive)

---

# Phase 4 — Work

**Goal:** Proof layer.

### Data

- [ ] Split helper: featured vs rest (or inline filter)
- [ ] Three featured slots and a table list in `projects.ts` (TODO names allowed)

### UI

- [ ] Featured card grid
- [ ] Stack chips, summary, optional live/source links (omit if unset)
- [ ] Image with fallback if `imageSrc` missing or broken
- [ ] More-work table on desktop
- [ ] Stacked rows on small screens
- [ ] Hide featured grid if none featured; hide table if none remain
- [ ] Section id `#work`

### Acceptance criteria

- Toggling `featured` in content moves a project between card and table
- No invented live URLs presented as real
- External links use a new tab and safe `rel`

---

# Phase 5 — Contact and footer

**Goal:** Conversion.

### Contact

- [ ] Section copy + form: name, email, message
- [ ] Netlify Forms wiring (hidden form in HTML and/or AJAX POST documented)
- [ ] Honeypot field
- [ ] Client-side required / email checks
- [ ] Submitting / success / error states
- [ ] Mailto fallback using `TODO_EMAIL` until replaced
- [ ] Section id `#contact`

### Footer

- [ ] Wordmark, short line, social slots from `site.ts`
- [ ] Copyright year

### Acceptance criteria

- Form is tested on a **Netlify deploy preview**, not only locally
- Success is obvious
- Field errors are associated with inputs

---

# Phase 6 — Polish

**Goal:** Production feel without new modules.

### UX

- [ ] Section enter motion with `prefers-reduced-motion` respected
- [ ] Hover/focus on cards and buttons
- [ ] Empty work sections stay hidden
- [ ] Contact success copy is calm and specific

### Accessibility

- [ ] Heading order check
- [ ] Contrast check on chips and muted text
- [ ] Focus visible on all interactive elements
- [ ] `html lang`

### Assets

- [ ] Original favicon (not the Vite logo)
- [ ] Optional OG image (`TODO` until designed)

### Acceptance criteria

- Phone and desktop pass a manual pass of every section
- Reduced-motion does not leave the page broken

---

# Phase 7 — Deploy and README

**Goal:** A public URL.

### Netlify

- [ ] Connect the GitHub repo
- [ ] `pnpm` build on Netlify (document Node version if needed)
- [ ] Confirm `dist` publish
- [ ] Form notifications to Grace’s real inbox (replace `TODO_EMAIL`)
- [ ] Production URL recorded in the README

### Docs

- [ ] README: scripts, how to edit content, how forms work
- [ ] Mark sprint items `[x]` as they ship
- [ ] Product/tech versions stay 1.0 until a decision changes

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

> “The skills on the page are the work I want to be hired for — APIs, PostgreSQL, React — which is not the same as this site’s static stack.”

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

- Clear backend-led positioning
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

**Last verified:** 2026-10-28 — against the working tree: `docs/` only. No application code yet.

## Phase 0 — Foundation

- [ ] Vite app
- [ ] Tailwind
- [ ] pnpm scripts
- [ ] Content modules
- [ ] netlify.toml
- [ ] README beyond one line

## Phases 1–8

- [ ] Not started

## Documentation (this slice)

- [x] `docs/product_architecture.md` v1.0
- [x] `docs/technical_architecture.md` v1.0
- [x] `docs/sprint.md` v1.0

---

# 25. Immediate next steps

```text
1. Phase 0 — scaffold Vite + Tailwind + content types
2. Phase 1 — tokens and chrome (nav, status, Nairobi time)
3. Phase 2 — hero and about
4. Continue in order through Phase 7
5. Fill TODO email, socials, and real projects before calling copy done
6. Phase 8 only after a public URL exists

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
