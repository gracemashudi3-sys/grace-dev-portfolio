# Grace Mashudi — Product Architecture

**Version:** 1.1  
**Status:** Draft  
**Product Type:** Personal Developer Portfolio  
**Platforms:** Web  
**Primary Users:** Peers, mentors, and anyone who wants an honest picture of what Grace is learning

**Related:** [technical_architecture.md](technical_architecture.md) · [sprint.md](sprint.md)

---

# 0. Inspiration vs original work

The information architecture and tone of this product take inspiration from [festusdev.netlify.app](https://festusdev.netlify.app/): a dark, single-page engineer site that leads with a clear offer, shows how the person works, then proves it with live builds and a contact path.

This product is **not** a clone.

- Copy, project list, photographs, and brand marks are original to Grace Mashudi.
- Components, layout, and motion are implemented from this document, not scraped from the reference.
- Fields marked `TODO` are content holes. Filling them does not change the architecture.

---

# 1. Product Overview

Grace Mashudi’s portfolio is a **personal product website** that says, quickly and honestly, where she is in her learning.

The product is designed around a simple idea:

> **Turn a start in tech into a clear story of what Grace knows, how she learns, and the one project she has finished.**

Instead of a PDF, a GitHub profile, and a scattered set of demo links, the site provides one workspace where a visitor can:

- Read a positioning statement in seconds
- See location, current focus, and that she is learning
- Understand how she approaches a problem
- Scan the skills she actually has
- Review the work she has finished, and nothing invented
- Send a message without leaving the page

The site should feel like a **real professional product**, rather than a template with placeholder lorem.

---

# 2. Product Vision

### Vision

To give Grace a durable public surface that presents her as someone early in the journey: learning Java, knowing a little TypeScript, optimistic, and honest about the one project she has finished.

### Mission

The site helps a visitor move from:

```text
Unknown name
        ↓
Unclear stack
        ↓
No proof of shipped work
        ↓
No path to contact

```

to:

```text
Clear picture of what she is learning
        ↓
Known skills and process
        ↓
One finished project, named when it is real
        ↓
A message sent

```

---

# 3. Problem Statement

Someone at the start of a tech journey is easy to misread if the only public traces are:

- A CV attached to an email
- A LinkedIn summary
- A GitHub activity graph
- Demo videos
- Separate project READMEs

This creates several problems.

### 3.1 Weak first impression

A visitor may not immediately know:

- What Grace is actually learning
- That she is early, not a specialist
- That her status is learning, not open to work
- Where she is based

### 3.2 Proof is fragmented

Shipped work lives in different hosts, with different quality of write-up.

### 3.3 No process story

Hiring conversations often stall on “how do you work?” The site should answer that before the call.

### 3.4 Friction to contact

If email is only in the footer of a PDF, many visitors will not send anything.

---

# 4. Target Users

The site has **no authenticated roles**. Everyone sees the same page. The product still has distinct visitor intents.

---

## 4.1 Recruiter / hiring manager

They are screening for a role.

### Needs

- An honest picture of her level in the first screen
- A stack that matches what she really knows
- A visible learning status
- The one finished project, named when it is real
- A way to reach out

### Primary need

> **Speed and clarity.**

---

## 4.2 Founder / client

They are considering contract or product work.

### Needs

- What Grace is practicing (Java, and a little TypeScript)
- Evidence of one finished project, not a consultancy menu
- A contact form that does not require an account

### Primary need

> **Confidence that the work will hold up.**

---

## 4.3 Collaborator / peer

They found Grace through community, events, or socials.

### Needs

- Personality without noise
- Links to GitHub, LinkedIn, and optional creator presence
- A sense of how she works with other people

### Primary need

> **A reason to remember the name.**

---

# 5. Visitor Hierarchy

```text
       HIRING DECISION
              │
     ┌────────┼────────┐
     │        │        │
 Recruiter  Founder  Collaborator

```

This is intent, not access control. Permissions are not part of the product. Every visitor gets the full page.

---

# 6. Core Product Modules

The site is organized into the following modules:

```text
Grace Mashudi Portfolio
│
├── Site chrome
│     ├── Wordmark
│     ├── Section navigation
│     ├── Learning status
│     ├── Nairobi local time
│     └── Theme (dark-first)
├── Hero
├── Working-with chips
├── About + facts row
├── How I work
├── Skills & tech stack
├── Services
├── Featured builds
├── More work (table)
├── Optional: events / creator strip
├── Contact
└── Footer

```

---

# 7. Site chrome

Chrome is the persistent frame: header, skip link, and later a compact footer.

### User flow

```text
Open site
      ↓
Read status + location + time
      ↓
Use nav or scroll
      ↓
Land on a section
      ↓
Act (open a project or contact)

```

### Core features

- Skip to content
- Sticky header on desktop
- Anchor links: About, Process, Skills, Work, Contact
- A visible status from `site.ts` (currently “Learning”, not open to work), not buried copy
- Local time for **Africa/Nairobi**, updated in the client
- Dark-first visual language; a light theme is a later option, not MVP-blocking

Chrome should work the same on a laptop and a phone. On a narrow screen, nav may collapse to a simple list or overlay. It must not hide the hero.

---

# 8. Hero

The hero is the primary offer.

Its purpose is to answer:

> **“Who is this, and should I keep reading?”**

### Content

```text
Name
Headline (one sentence: early in the journey)
Supporting paragraph
Status (learning, not a hire-me pitch)
Primary CTA → Contact
Secondary CTA → Featured work
Working-with chips (Java, TypeScript — only what she actually uses)

```

### Default positioning (editable)

Grace is **at the start of her tech journey**. She is learning Java and knows a little TypeScript. One project went well. She is optimistic about learning more, and the page must not claim a stack she has not used. She is not presented as open to full-time or contract work.

Headline, bio, and chips live in content files. They are not hardcoded into layout components.

---

# 9. About + facts row

About explains how she learns, then pins facts a visitor can scan. It should not repeat the hero word for word.

### Facts

```text
Based in     Nairobi, Kenya
Focus        Learning Java
Stack        Java · TypeScript (basics)
Now          Early in the journey
Status       Learning

```

About should add *how* she learns: small programs, reading errors, and caring that the one project actually finished.

---

# 10. How I work

A five-step process, always in this order:

```text
1  Understand the problem
2  Design before building
3  Build incrementally
4  Test and debug
5  Refine and document

```

Each step has a short original paragraph in a beginner’s voice: how she learns and builds, not a senior delivery pitch. The module exists to show how she practices, not to invent a methodology brand.

---

# 11. Skills & tech stack

Skills are grouped so a visitor can see what she actually knows. Do not add a language or tool to look hire-ready.

```text
Java
TypeScript

```

### Java

```text
Java

```

### TypeScript

```text
TypeScript (a little, still learning)

```

The site’s own runtime (React, Vite, Tailwind) is not a skill on this list. Skills are a list, not a percentage bar. Bars imply a false precision this product does not claim.

---

# 12. Services

“What I’m practicing” is an honest translation of the skills. It is not a consultancy menu.

Starting set:

```text
Learning Java by building
Practicing TypeScript
Finishing work

```

Each card: a title and two or three sentences of original copy. No fake client logos, and no offer she is not ready to make.

---

# 13. Featured builds

Featured work is the proof layer.

A featured project is a **product**, not a tutorial dump.

### Project information

```text
Eyebrow (category)
Name
One-line outcome
Short description
Role (if not solo)
Stack chips
Live URL          none (desktop app, not hosted)
Source URL        https://github.com/gracemashudi3-sys/Bank
Image / screenshot TODO

```

### Slots (content, not architecture)

Show only real projects. Do not pad the grid to three cards. The first version has **one** finished project: Bank, a Java Swing desktop app with a local MySQL database. [src/content/projects.ts](../src/content/projects.ts) links the GitHub source only. There is no live URL.

Do not invent live products. Hide the more-work table while no `featured: false` records exist.

---

# 14. More work (table)

A compact table sits under the featured cards for work that should be findable but not given a full card.

```text
MORE WORK

┌────────────────┬─────────────────────┬──────────────┬───────┐
│ Project        │ What it does        │ Stack        │ Links │
├────────────────┼─────────────────────┼──────────────┼───────┤
│ TODO           │ TODO                │ TODO         │ TODO  │
└────────────────┴─────────────────────┴──────────────┴───────┘

```

On a phone, the table becomes stacked rows (name, summary, chips, links). It is the same content model as featured projects with `featured: false`.

---

# 15. Optional: events and creator strip

Post-MVP modules, specified so they have a home:

### Events

A photo strip from meetups, hackathons, or conferences. Requires real images and captions. Hidden until there are at least three assets.

### Creator journey

A short strip if Grace documents work in public. Links and copy are `TODO`. Hidden until those fields are filled.

These must not delay the hiring path: Hero → Work → Contact.

---

# 16. Contact

Contact is the conversion.

### User flow

```text
Read the offer
      ↓
Decide to reach out
      ↓
Scroll or tap Contact
      ↓
Send name, email, message
      ↓
See success (or a field error)
      ↓
Grace receives the message by email

```

### Fields

```text
Name     required
Email    required, valid
Message  required
```

Optional: “Prefer email?” with gracemashudi3@gmail.com as a mailto fallback.

There is no account, no captcha in MVP unless spam appears, and no file upload.

---

# 17. Navigation and information architecture

```text
Header
│
├── About
├── Process
├── Skills
├── Work
└── Contact

Page (one document)
│
├── #hero
├── #about
├── #process
├── #skills
├── #services
├── #work
└── #contact

```

MVP is a **single page** with in-page anchors. Project detail routes are Phase 8.

---

# 18. UX architecture

The page should follow:

```text
Discover
   ↓
Understand
   ↓
Trust
   ↓
Act
   ↓
Confirm

```

Example:

```text
Visitor lands on hero
       ↓
Understands she is early and learning Java
       ↓
Scans process and skills
       ↓
Sees the one finished project, with links only if they are real
       ↓
Sends a message
       ↓
Sees confirmation

```

---

# 19. Design principles

### Clarity

The first screen states name, role, and availability.

### Consistency

Section headers, card radii, chip styles, and button hierarchy stay the same from hero to footer.

### Feedback

Contact has loading, success, and error. External links look like links.

### Progressive disclosure

Featured cards first; the table is extra proof, not the opening move.

### Responsive design

```text
Desktop     two-column hero, table as a table
Tablet      stacked sections, chips wrap
Phone       single column, collapsible nav, stacked work rows

```

### Honesty

No skill percentages, no invented metrics, no cloned case studies.

---

# 20. Content architecture

All visitor-facing words and project records live in typed content modules, not in JSX strings scattered across components.

```text
site        name, title, status, timezone, socials, email
hero        headline, body, CTAs
about       paragraphs, facts
process     five steps
skills      groups of items
services    cards
projects    featured flag, copy, urls, stack
```

Changing a project name should never require a layout edit.

---

# 21. Visual language

Dark-first, high contrast, restrained motion.

```text
Canvas          near-black
Surface         slightly lifted cards
Ink             off-white
Muted           secondary labels
Accent          one brand colour (chosen in implementation, not copied from the reference)
Status          Learning as a small, readable pill

```

Motion: short fades/translates on section enter; no scroll-jacking; `prefers-reduced-motion` respected.

Imagery: original screenshots and optional event photos. No hotlinked assets from the reference site.

---

# 22. Empty, loading, and error states

| Surface        | Empty                         | Loading            | Error                          |
| -------------- | ----------------------------- | ------------------ | ------------------------------ |
| Featured work  | Hide the grid if none         | Not applicable MVP | Broken image fallback          |
| More work      | Hide the table if none        | Not applicable MVP | Link `rel` still valid         |
| Contact        | —                             | Disable submit     | Field errors + form-level note |
| Contact success| Replace form with a thank-you | —                  | Retry                          |

A page with no projects still ships: hero, about, process, skills, services, contact.

---

# 23. Accessibility

- One `h1` (name / offer)
- Sequential headings per section
- Colour contrast on chips and body text
- Keyboard path through nav, project links, and the form
- Visible focus
- Form labels bound to inputs; errors associated with fields
- Nairobi time is text, not colour-only meaning
- External project links indicate they open a new context

---

# 24. SEO and sharing

```text
Document title     Grace Mashudi — Learning Java and TypeScript
Meta description   Grace Mashudi is in Nairobi, at the start of her tech journey. She is learning Java, knows a little TypeScript, and has finished Bank, a Java desktop project.
Canonical URL      https://gracemashudi3-sys-dev-portfolio.netlify.app/
Open Graph         title, description, and og-image.png in index.html
Favicon            original mark

```

The site is statically rendered HTML from Vite. No CMS, no blog index in MVP.

---

# 25. What this product is not

```text
Not a SaaS
Not a multi-tenant app
Not an authenticated dashboard
Not a blog platform
Not a clone of another engineer’s site
Not a CMS until content volume demands one

```

CRUD is not the product. The product is a **decision surface**.

---

# 26. MVP scope

### Must have

```text
Single-page layout
Sticky / usable navigation
Learning status + Nairobi time
Hero with original copy
About + facts
Five-step process
Skills groups
Services cards
Project content model (even if only TODOs)
Featured cards + more-work table (hide if empty)
Contact form to Grace’s inbox
Footer with GitHub; LinkedIn omitted until a real URL exists
Responsive layout
Accessible form and headings
Netlify production URL

```

### Should have

```text
OG image
Light theme toggle
Reduced-motion respect beyond the default
Project hover/focus polish

```

### Later

```text
Project detail routes
Events photo strip
Creator / build-in-public strip
CMS
Blog
i18n
Analytics product (beyond a simple privacy-respecting counter, if ever)

```

---

# 27. Product success criteria

The site succeeds when a visitor can complete this loop without a PDF:

```text
Read who Grace is
     ↓
See how she works
     ↓
Match a stack
     ↓
Open proof
     ↓
Send a message

```

### Demo success (first minute)

1. **A visitor can tell she is starting out** — hero + facts.
2. **The proof is one finished project** — featured work, not a padded grid.
3. **She is reachable** — contact.

---

# 28. Product positioning

The site should be presented as:

> **An early-career learner’s public page: Java, a little TypeScript, one finished project, and a path to talk.**

Rather than:

> “A React portfolio template.”

The React app is the **engineering foundation**. The product value is **helping the right people decide to talk to Grace.**

---

# 29. Product architecture summary

```text
                 GRACE MASHUDI
                       │
                       ▼
                     WEB SPA
                       │
                       ▼
                 CORE STORY
                       │
       ┌───────────────┼───────────────┐
       │               │               │
       ▼               ▼               ▼
     OFFER          PROCESS          PROOF
       │               │               │
       └───────────────┼───────────────┘
                       │
                       ▼
                    CONTACT

```

The central loop is:

```text
ARRIVE
 ↓
UNDERSTAND
 ↓
TRUST
 ↓
CONTACT

```

---

# 30. Final product principle

The first version should not try to compete with a personal media brand or a large agency site.

It should prioritize:

```text
Clear offer
      +
Honest content
      +
Strong IA
      +
Original copy
      +
Accessible UI
      +
A working contact path

```

The goal is a site a hiring manager could send internally — not a decoration around an empty GitHub.

Fill `TODO` fields before calling the copy done. Architecture does not depend on those values.
