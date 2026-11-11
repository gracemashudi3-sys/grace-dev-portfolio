# grace-dev-portfolio


Public portfolio for Grace Mashudi, who is early in her tech journey. She is learning Java and knows a little TypeScript. This repository is a static React app. The skills in the page copy are what she actually knows. They are not this site’s runtime.

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Biome
- pnpm
- Host: Netlify (static files in `dist`)

There is no application server, database, or client router in the MVP. Sections are in-page anchors. The contact form posts to Netlify Forms. `pnpm preview` does not deliver mail.

## Requirements

- Node.js 20.19+ (20.20.2 pinned in `.nvmrc`), or 22.12+
- pnpm 12 (`packageManager` in `package.json`; Corepack can install it with `corepack pnpm`)

## Scripts

```bash
pnpm install
pnpm dev        # local dev server
pnpm lint       # Biome
pnpm typecheck  # tsc --noEmit
pnpm test       # Vitest: Nairobi time and project split
pnpm build      # typecheck, then Vite build to dist/
pnpm preview    # serve the production build
```

## Edit content

Copy, facts, skills, services, and projects live in `src/content/`. Later layout components should import these modules and not hardcode the words.

- `site.ts` — name, role, location, availability, email, social links, document title, description
- `hero.ts` — headline, supporting paragraph, calls to action, stack chips
- `about.ts` — about copy and the facts row
- `process.ts` — the five working steps, in order
- `skills.ts` — two skill groups: Java, and TypeScript at a basic level
- `services.ts` — what she is practicing, not a consultancy menu
- `projects.ts` — Bank, the one featured project (`featured: true`), with a GitHub source link and no live URL
- `contact.ts` — contact intro, field labels, thank-you, and the form error
- `types.ts` — shared TypeScript shapes

The email in `site.ts` is gracemashudi3@gmail.com. GitHub points at https://github.com/gracemashudi3-sys. LinkedIn is omitted until a real profile URL exists. Do not invent a live URL for Bank. Leave `liveUrl` unset until a real host exists.

`index.html` holds the title and description used before JavaScript runs. Keep them aligned with `site.documentTitle` and `site.description`.

`public/favicon.svg` is the original monogram. `index.html` includes `og:title`, `og:description`, `og:image`, and `twitter:card` (`summary_large_image`). The share image is `public/og-image.png` (1200×630).

## Deploy

Production: https://gracemashudi3-sys-dev-portfolio.netlify.app/

GitHub Actions (`.github/workflows/ci.yml`) runs lint, typecheck, test, and build on push and pull request. Node is 20.20.2, the same version as Netlify.

`netlify.toml` builds with `corepack pnpm install --frozen-lockfile && corepack pnpm build` and publishes `dist`. Netlify is set to Node 20.20.2 (also in `.nvmrc`), which satisfies `engines` in `package.json` and bundles a Corepack recent enough to verify the pnpm download signature. There is no SPA rewrite, because the MVP has no client routes.

There are no required environment variables. `.env.example` notes the `VITE_` prefix if a public variable is added later. Do not put secrets in any `VITE_` variable.

## Contact form

Netlify detects forms from the published HTML. The React app does not render that detection form, so [index.html](index.html) includes a hidden form named `contact` with `name`, `email`, `message`, and the honeypot `bot-field`.

The visible form in `src/components/sections/Contact.tsx` checks the fields in the browser, then POSTs `application/x-www-form-urlencoded` to `/` with `form-name=contact`. A success response replaces the form with the thank-you. A network failure or non-OK response leaves the form in place and shows the error from `contact.ts`.

`vite preview` serves static files only. The live site at https://gracemashudi3-sys-dev-portfolio.netlify.app/ delivers the form, and Netlify sends notifications to gracemashudi3@gmail.com. A test submission from that site arrived. The page renders a mailto link to that address.
