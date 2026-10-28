# Grace Mashudi — Technical Architecture

**Version:** 1.0  
**Status:** Draft  
**Architecture:** TypeScript SPA / Static Web  
**Primary Runtime:** Browser (Vite dev server locally)  
**Package Manager:** pnpm  
**Host:** Netlify

**Related:** [product_architecture.md](product_architecture.md) · [sprint.md](sprint.md)

---

# 1. Overview

This repository delivers Grace Mashudi’s public portfolio as a **statically generated React application**.

The system provides:

- A single-page marketing site
- Typed content for copy, skills, and projects
- In-page navigation
- A contact form handled by the host
- A production deploy on Netlify

There is **no application API, no database, and no authenticated users** in MVP. The security boundary is “do not put secrets in the client” and “validate the form on the host.”

The information architecture is defined in the product document. This document defines how that product is built.

---

# 2. Architecture goals

### 2.1 Maintainability

Layout components stay dumb. Words and project records live in `src/content/`.

### 2.2 Type safety

TypeScript models for site metadata, process steps, skill groups, services, and projects. A missing live URL is a typed optional field, not a stringly-typed surprise.

### 2.3 Reusability

Chips, section headers, cards, and the fact row are shared. They are not duplicated per section.

### 2.4 Performance

A marketing page should be a small JS payload: one route, lazy-nothing-required in MVP, images compressed, no unused CSS.

### 2.5 Developer experience

```text
pnpm install
pnpm dev
pnpm build
pnpm preview
```

### 2.6 Honesty of stack

The **site** is React + Vite + TypeScript + Tailwind. The **story Grace tells** (Python, Flask, PostgreSQL, React) is content. The two must not be confused in the README.

---

# 3. High-level architecture

```text
                    PORTFOLIO
                        │
                        ▼
                  WEB APPLICATION
                  React + Vite
                  TypeScript
                  Tailwind CSS
                        │
                        ▼
                   STATIC FILES
                   dist/
                        │
                        ▼
                     NETLIFY
                        │
          ┌─────────────┴─────────────┐
          │                           │
          ▼                           ▼
     CDN / HTML                    Forms
     CSS / JS                      (POST handler
     assets                         → email)

```

---

# 4. Repository structure (target)

After Phase 0 of the sprint, the tree should look like:

```text
grace-dev-portfolio/
│
├── docs/
│   ├── product_architecture.md
│   ├── technical_architecture.md
│   └── sprint.md
│
├── public/
│   ├── favicon.svg          TODO original mark
│   └── og-image.png         TODO
│
├── src/
│   ├── content/
│   │   ├── site.ts
│   │   ├── hero.ts
│   │   ├── about.ts
│   │   ├── process.ts
│   │   ├── skills.ts
│   │   ├── services.ts
│   │   └── projects.ts
│   ├── components/
│   │   ├── layout/
│   │   ├── ui/
│   │   └── sections/
│   ├── lib/
│   │   ├── time.ts          Nairobi clock
│   │   └── cn.ts            class merge if needed
│   ├── styles/
│   │   └── index.css        Tailwind entry + tokens
│   ├── App.tsx
│   └── main.tsx
│
├── index.html
├── netlify.toml
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
├── vite.config.ts
├── LICENSE
└── README.md

```

There is no `apps/` monorepo and no `packages/` workspace in MVP. One app is the whole product.

---

# 5. Web application

### Responsibilities

- Render the product modules in order
- Anchor navigation
- Nairobi time
- Contact form POST to Netlify
- Meta tags from `src/content/site.ts`

### Technology

- React 19
- TypeScript
- Vite
- Tailwind CSS
- pnpm

### Routing

MVP: **no router**. Sections are `id`s. The header uses `href="#work"` style links.

Phase 8 may add React Router (or Vite file routes) for `/projects/:slug`. Until then, do not add a router “for the stack.”

---

# 6. Content layer

Content is code, reviewed in PRs.

Example shapes (normative intent, exact fields may gain optionals):

```text
Site
  name, title, role, location, timezone, status
  email (TODO), socials (github, linkedin, … TODO)
  documentTitle, description

Project
  slug
  name
  eyebrow
  summary
  description
  stack: string[]
  featured: boolean
  liveUrl?: string
  sourceUrl?: string
  imageSrc?: string

```

Rules:

- Components import from `src/content/*`, never the other way around.
- Featured vs table is `featured: true | false`, one list.
- If `projects.filter(featured)` is empty, the featured grid is not rendered.
- `TODO` strings are allowed in draft; they must not ship as visible “TODO” on production if Grace has filled real copy. A later lint can forbid the token in `src/content`.

There is no CMS, Markdown collection, or headless API in MVP.

---

# 7. Styling architecture

```text
React
  │
  └── Tailwind CSS
        │
        └── tokens in @theme / CSS variables

```

### Tokens

```text
--canvas
--surface
--ink
--muted
--accent
--border
--radius
--font-sans

```

Dark-first: the default canvas is near-black. A `.light` class (or `data-theme`) is reserved; the toggle is Should Have, not a Phase 0 requirement.

Do not copy another site’s exact palette, type scale, or background artwork. Match the *intent* (dark, calm, high contrast) with original tokens.

Spacing, type, and radius: pick a small scale and reuse it. Section padding should be one pattern.

### Components

No component library is required. Prefer:

- Native elements
- Small `components/ui` primitives: `Button`, `Chip`, `SectionHeading`, `Card`

shadcn/ui is optional later; do not add it in Phase 0 unless a primitive is clearly cheaper than writing a button.

---

# 8. Time display

Product chrome shows local time in Nairobi.

```text
Intl.DateTimeFormat
  timeZone: 'Africa/Nairobi'
  hour / minute

```

Implementation notes:

- `src/lib/time.ts` owns formatting.
- Update on an interval of 15–30s, not 1s (no ticking second unless it is designed).
- Render a static fallback time at first paint so SSR/hydration is not an issue (this app is CSR; still avoid `new Date()` mismatch if SSR is added later).
- Timezone is a content field (`site.timezone`), default `Africa/Nairobi`.

---

# 9. Contact form

The site stays static. Mail is a **host feature**.

### Chosen: Netlify Forms

```text
Visitor
  │
  ▼
<form netlify name="contact" method="POST">
  │
  ▼
Netlify form detection (build) / AJAX POST (SPA)
  │
  ▼
Netlify notification email → TODO_EMAIL

```

SPA caveat: Netlify’s HTML post-processing must see the form at build time **or** the client posts to `/?form-name=contact` with `application/x-www-form-urlencoded` (or a hidden static form in `index.html` plus a React form that mimics it).

The implementation must pick one documented pattern and test it on a Netlify deploy preview, not only `vite preview`.

### Validation

```text
Browser
  └── UX: required, type=email, min length on message

Netlify
  └── presence of expected fields

```

Client validation is UX. It does not replace host-side spam filtering.

### States

```text
idle → submitting → success
                 ↘ error (network or 4xx)
```

Disable the button while submitting. Map failures to a visible message. Success replaces the form with a short thank-you.

Honeypot field (`bot-field`) is in MVP. CAPTCHA only if spam appears.

---

# 10. Data flow: rendering a project

```text
projects.ts
     │
     ▼
Work section
     │
     ├── featured === true  → card grid
     └── featured === false → table / stacked rows
     │
     ▼
Anchor links (live, source)
     │
     ▼
External sites (new tab, rel=noreferrer)

```

No fetch. No React Query. No loading waterfall.

---

# 11. Environment configuration

SPA public env is public.

| Variable | Consumer | Purpose |
| -------- | -------- | ------- |
| none required for MVP | — | Form posts to the same origin on Netlify |

If Formspree is ever swapped in:

| Variable | Consumer | Purpose |
| -------- | -------- | ------- |
| `VITE_FORM_ENDPOINT` | Client | Public form URL |

Secrets never use a `VITE_` prefix. There should be no contact API key in the repo.

`.env.example` lists any public vars. `.env` is gitignored.

---

# 12. Security architecture

### What exists

- A public static site
- A form that accepts unauthenticated POSTs

### Rules

- No secrets in the client bundle
- No `dangerouslySetInnerHTML` for CMS content (there is no CMS)
- External links: `rel="noreferrer noopener"` when `target="_blank"`
- Form: honeypot; Netlify spam filter
- Do not log message bodies to third-party analytics in MVP
- Dependencies: `pnpm audit` before first production deploy

### What is out of scope

Auth, RBAC, CORS on an API, session cookies, rate limits on application routes. Those belong to Grace’s *other* products, not this site.

---

# 13. Error handling

| Layer | Behaviour |
| ----- | --------- |
| Broken image | `onError` fallback surface |
| Missing optional URL | omit the control |
| Form network error | stay on the form, show retry |
| Unknown hash | browser default; no custom 404 for hashes |
| Host 404 | Netlify `/* → /index.html` only if a router is added; MVP has no client routes, so 404 can be Netlify’s default for unknown files |

---

# 14. Accessibility and HTML

- Semantic landmarks: `header`, `main`, `footer`, `nav`
- Skip link as the first focusable control
- `html lang="en"`
- Focus styles on interactive elements
- Form errors in text, tied with `aria-describedby`
- Motion: `prefers-reduced-motion: reduce` disables non-essential transforms

---

# 15. SEO implementation

```text
index.html
  title (can be overwritten in a small head helper)
  meta description
  og:title og:description og:image
  twitter:card

```

Vite SPA: crawlers that execute JS will see content; for a portfolio this is acceptable. If a later audit wants zero-JS HTML, consider pre-rendering (vite-plugin-ssg or similar) without changing the product.

---

# 16. Build pipeline

```text
pnpm dev        Vite
pnpm build      tsc --noEmit && vite build
pnpm preview    vite preview
pnpm lint       Biome or ESLint (chosen in Phase 0)

```

CI (Should Have): GitHub Actions on push — install, lint, typecheck, build.

Netlify production: `pnpm build`, publish directory `dist`.

---

# 17. Deployment architecture

```text
                    INTERNET
                        │
                        ▼
                     NETLIFY
                        │
          ┌─────────────┴─────────────┐
          │                           │
          ▼                           ▼
     Static CDN                    Forms
     (HTML, JS, CSS,               notifications
      images)                      to TODO_EMAIL

```

### `netlify.toml` (intent)

```text
[build]
  command = "pnpm build"
  publish = "dist"

# SPA fallback only if client routes exist (Phase 8)
```

Custom domain is optional. The first production URL is the Netlify subdomain.

Deploy previews on pull requests should be used to test the form, because `vite preview` does not run Netlify Forms.

---

# 18. Images and assets

- Keep binaries in `public/` or `src/assets/`
- Compress screenshots before commit
- Do not commit another person’s photos
- OG image: 1200×630, original
- Favicon: original mark, not a default Vite logo in production

---

# 19. Testing strategy

MVP is thin on tests because there is almost no business logic.

```text
Must
  └── Manual: every section, mobile width, form on a Netlify preview

Should
  └── Unit: Nairobi time formatter
  └── Unit: featured vs table split helper (if extracted)

Later
  └── Component tests for the form states
```

Do not add a full Testing Library suite in Phase 0.

---

# 20. Tooling choices

| Topic | Choice | Reason |
| ----- | ------ | ------ |
| Package manager | pnpm | Fast, lockfile, matches common TS practice |
| Formatter / lint | Biome preferred; ESLint + Prettier if Biome fights Vite | One tool if possible |
| Icons | Inline SVG or a single icon set | Do not load a huge icon kit for five marks |
| Forms lib | None in MVP | Four fields; native + a submit handler |
| State lib | None | No global client state beyond form status and clock |

---

# 21. Technology stack summary

| Layer | Technology |
| --- | --- |
| Language | TypeScript |
| UI | React 19 |
| Build | Vite |
| Styling | Tailwind CSS |
| Routing | In-page anchors (no router in MVP) |
| Content | Typed TS modules |
| Forms | Netlify Forms |
| Host | Netlify |
| Package manager | pnpm |
| Quality | Biome (or ESLint) + `tsc` |
| Analytics | None in MVP |
| Backend | None in MVP |

---

# 22. Architecture principles

### Principle 1 — Content is data

Copy and projects are modules. Components render them.

### Principle 2 — Static by default

No server until a real feature needs one.

### Principle 3 — The client is public

Anything shipped to the browser is public.

### Principle 4 — Progressive complexity

No router, query cache, CMS, or UI kit until a concrete problem appears.

### Principle 5 — Original surface

Inspiration is IA and tone. Tokens, copy, and assets are this product’s.

### Principle 6 — Host features over custom backends

Email is Netlify’s job. Do not stand up an Express inbox for MVP.

---

# 23. Architecture decision summary

| Decision | Reason |
| --- | --- |
| SPA, not Next.js | Chosen stack: Vite + React; no SSR requirement |
| No router in MVP | One page; hashes are enough |
| Content in TS | Type safety, PR review, no CMS ops |
| Netlify Forms | Same host as the site; no extra vendor in MVP |
| pnpm | Workspace-ready if the repo later grows |
| No monorepo | One app; Turborepo would be ceremony |
| Dark-first CSS tokens | Product language; light theme later |
| Clock in the client | Nairobi time is a chrome feature, not content |

---

# 24. Future architecture (not MVP)

```text
Optional later
  ├── React Router project pages
  ├── MDX case studies
  ├── Pre-render / SSG
  ├── Formspree or a tiny function if leaving Netlify
  ├── CMS if updates become frequent
  └── Light CI (lint, typecheck, build)

```

None of these change the product loop in [product_architecture.md](product_architecture.md) §29.

---

# 25. Final technical principle

The portfolio should demonstrate that Grace can ship a **small, well-structured frontend** without pretending the site is a distributed system.

```text
                 PORTFOLIO

        ┌─────────────────────┐
        │      UI / UX        │
        └──────────┬──────────┘
                   │
        ┌──────────▼──────────┐
        │   React + Tailwind  │
        └──────────┬──────────┘
                   │
        ┌──────────▼──────────┐
        │   Typed content     │
        └──────────┬──────────┘
                   │
        ┌──────────▼──────────┐
        │   Vite static dist  │
        └──────────┬──────────┘
                   │
        ┌──────────▼──────────┐
        │      Netlify        │
        └─────────────────────┘

```

**Primary objective:** a maintainable static site whose structure matches the product document, whose copy is original, and whose contact path works in production.
