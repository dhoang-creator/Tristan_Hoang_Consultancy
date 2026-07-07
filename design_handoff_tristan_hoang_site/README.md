# Handoff: Tristan Hoang — Automation & Optimisation Consultant Website

## Overview

A single-page marketing website for **Tristan Hoang**, an independent automation & optimisation consultant based in Bristol, UK. The site introduces Tristan, presents his services, shows selected work, hosts a gallery of working artefacts, publishes a journal (blog), and provides a contact form. Visual direction is warm-paper / editorial — deep-navy primary, ivory paper background, restrained serif italic accents over a sans body.

## About the Design Files

The files in `design_files/` are **design references created in HTML + React (Babel-transpiled at runtime in the browser)**. They are prototypes showing intended look, layout, copy, and interactive behaviour — **not production code to copy directly**.

The task is to **recreate this design in the target codebase's environment** using its established patterns, component library, and build system. If no codebase yet exists, the recommended target is **Next.js 14+ (App Router) with TypeScript + Tailwind CSS**, deployed on Vercel — it cleanly fits a static-marketing-site shape and supports the journal as MDX without extra infrastructure.

Do **not** ship the runtime-Babel HTML to production: the prototype loads React/Babel via `<script>` tags purely for design iteration.

## Fidelity

**High-fidelity.** Pixel-perfect intent on colors, typography, spacing, radii, and interaction states. The developer should reproduce the UI faithfully using the codebase's design system, replacing any inline styles with the codebase's preferred styling layer (Tailwind, CSS modules, vanilla-extract, etc.).

---

## Site Structure (single page, anchored sections)

Sticky top nav scroll-spies seven sections. All sections share `max-width: 1280px` centered, with horizontal padding `36px`. Section vertical rhythm: `120px top + 120px bottom`, except hero (`80/100`) and contact (`120/80`).

| ID | Section | Notes |
|---|---|---|
| `top` | Hero | Headline + intro paragraph + two CTAs + 4-stat strip |
| `about` | About | Portrait placeholder + bio + practice details grid + Now panel |
| `services` | Services | 4 expandable accordion rows |
| `work` | Selected Work | 3 case-study cards |
| `gallery` | Gallery | 8-tile responsive grid + lightbox modal |
| `journal` | Journal | Tag-filterable list of posts + right-drawer reader |
| `contact` | Contact | Contact directory + validated form |
| — | Footer | Wordmark, site map, office details |

---

## Design Tokens

All tokens are declared as CSS custom properties on `:root` in `Tristan Hoang.html`.

### Colors

| Token | Value | Usage |
|---|---|---|
| `--paper` | `#f0eee9` | Body background |
| `--paper-2` | `#e8e5dd` | Card / panel background |
| `--ink` | `#0F1422` | Primary text |
| `--ink-mute` | `#3a4053` | Body copy, secondary text |
| `--navy` | `#0B2545` | Primary brand (logo, CTAs, stats, accents) |
| `--navy-2` | `#134074` | Secondary navy (gallery tiles) |
| `--silver` | `#D9DCE1` | Texture / placeholder fills |
| `--silver-2` | `#9AA3B2` | Eyebrow / mono microcopy |
| `--rule` | `rgba(15,20,34,.12)` | Hairline rules |
| `--rule-strong` | `rgba(15,20,34,.22)` | Stronger dividers / borders |
| `--accent` | `oklch(0.68 0.14 50)` | Amber accent (form errors, etc.) — also configurable via Tweaks: `#0B2545`, `oklch(0.55 0.12 155)`, `oklch(0.65 0.13 25)` |

Live-status dot color (hero availability): `oklch(0.7 0.15 145)` (green).

### Typography

- **Sans / body / display:** `"Inter Tight"`, weights 400/500/600/700, with feature settings `"ss01","cv11"`. Loaded from Google Fonts.
- **Serif italic accent:** `"Newsreader"`, italic, weight 500, optical-size 6–72. Used inline via `.serif` span for italicized emphasis words within display headings ("most repetitive work", "show up", "pitch decks", "practice", "last twelve months", etc.).
- **Mono:** `ui-monospace, SFMono-Regular, Menlo, monospace`. Used via `.mono` class for eyebrows, dates, microcopy.

| Role | Family | Size | Weight | Line | Letter-spacing |
|---|---|---|---|---|---|
| Hero H1 | Inter Tight | `clamp(48px, 7.2vw, 104px)` | 600 | 0.98 | -0.035em |
| Section H2 | Inter Tight | `clamp(36px, 4.5vw, 64px)` | 600 | 1.02 | -0.025em |
| About H2 | Inter Tight | `clamp(32px, 4vw, 56px)` | 600 | 1.05 | -0.02em |
| Service name | Inter Tight | `clamp(22px,2.4vw,32px)` | 600 | — | -0.015em |
| Card title | Inter Tight | 22px | 600 | 1.18 | -0.015em |
| Body lede | Inter Tight | 20px | 400 | 1.45 | -0.005em |
| Body | Inter Tight | 17px | 400 | 1.6–1.65 | — |
| Microcopy | Inter Tight | 13–15.5px | 400/500 | 1.5–1.55 | — |
| Eyebrow (mono) | mono | 11px | 400 | — | 0.10–0.12em, UPPERCASE |
| Stat number | Inter Tight | 48px | 600 | 1 | -0.02em |

### Spacing & shape

- Section padding-x: `36px`
- Card / panel radius: `6–8px`
- Pill / button radius: `999px`
- Stat / hairline divider: `1px solid var(--rule)`
- Card border: `1px solid var(--rule)`

### Shadows

- Nav (scrolled): no shadow; relies on `backdrop-filter: blur(14px) saturate(150%)` + bottom rule
- Primary button: `0 1px 0 rgba(255,255,255,.15) inset, 0 1px 2px rgba(11,37,69,.25)`
- Gallery tile hover: `0 12px 32px rgba(11,37,69,.12)` with `translateY(-3px)`
- Lightbox / drawer: `0 24px 80px rgba(0,0,0,.4)` (modal) or `-24px 0 80px rgba(0,0,0,.3)` (drawer)

---

## Logo / Brand Mark

**T Stencil** mark — a navy rounded-square (5px corner radius on a 100×100 viewBox) with a serifed capital "T" cut out as negative space.

SVG path is in `design_files/assets/logo.svg` and also inlined as `<LogoMark>` in `sections.jsx`. Use the SVG as a single source of truth; the `currentColor` pattern lets it recolor easily.

**Wordmark composition** (top-left of nav and footer):
- Mark (32–34px tall) +
- Stacked text: "Tristan Hoang" (15px / 600 / -0.005em) over "AUTOMATION & OPTIMISATION" (11px / mono / silver-2, 0.04em uppercase)

---

## Screens / Views

### 1. Nav (sticky)

- Fixed to top, `z-index: 50`.
- Initially transparent. After `scrollY > 24`, background switches to `rgba(240,238,233,0.82)` with `backdrop-filter: blur(14px) saturate(150%)` and bottom hairline `var(--rule)`. Transition 250ms.
- Inner padding `18px 36px`, max-width 1280px.
- Left: `<Wordmark>`. Right: nav-item pills (`About`, `Services`, `Work`, `Gallery`, `Journal`, `Contact`) + primary "Book a call →" button.
- Nav item button: 8px×14px padding, 13.5px / 500 weight, pill radius. Inactive: `--ink-mute`. Hover: `--ink`. Active (scroll-spied): `--navy` text on `rgba(11,37,69,0.07)` background.
- "Book a call →": filled `--navy` on `--paper`, 9px×16px padding, 13.5px / 500.

### 2. Hero (`#top`)

- Section padding `80px 36px 100px`.
- **Location/availability strip** (mono, 11px, silver-2, uppercase, 0.12em tracking, `marginBottom: 48`):
  - "BRISTOL, UK · REMOTE, WORLDWIDE" / divider "/" / green-dot + "Open to one engagement from June"
- **H1** (clamp 48–104px, 600, -0.035em, line-height 0.98, max-width 18ch):
  - "I streamline your businesses **most repetitive work** with the fewest moving parts." (the bold phrase wrapped in `.serif` italic, color `--navy`).
- **Lede + CTAs** in 1.4fr/1fr grid, gap 64px, marginTop 56px:
  - Left paragraph (20px / 1.45 / `--ink-mute` / max-width 52ch): Tristan's positioning copy — see `sections.jsx` for current text. Treat as editable.
  - Right: two pill buttons — primary "How I work →" (`--navy` / `--paper`), secondary "See recent work" (`transparent` with `1px var(--rule-strong)` border).
- **Stat strip** (marginTop 96px, paddingTop 32px, top rule, 4-column grid):
  - 8 yrs / senior engineering depth, not generalist tooling
  - 12 / engagements delivered end-to-end
  - 1 / point of accountability. The Person who scopes it is the person who builds it
  - 2 wks / typical lead time, no agency queue
  - Big number: 48px / 600 / -0.02em / `--navy`. Label below: mono 11px / `--silver-2` / 0.10em uppercase, marginTop 10px.

### 3. About (`#about`)

Eyebrow: `About — A03` (rendered by `<Section>` helper — a mono uppercase row with a 24×1px rule preceding it).

Two-column grid (`1fr / 1.4fr`, gap 80px, items start):

- **Left (portrait):**
  - 4:5 aspect-ratio card, radius 6px, border `1px var(--rule)`. Background is a diagonal-stripe pattern over `--silver`: `repeating-linear-gradient(135deg, var(--paper-2) 0 14px, transparent 14px 28px), var(--silver)`. Bottom-left mono tag "Portrait — 4:5" (placeholder).
  - Replace with a real portrait `<Image>`. Treat the stripe as the empty-state.
  - Below: "AMSTERDAM, NL · EST. 2022" mono caption (user has edited this from the previous "Auckland" copy — keep current value).

- **Right (bio):**
  - H2: "Operations as a craft. I treat it like one." (clamp 32–56px, 600, -0.02em).
  - Body block (17px / 1.6 / `--ink-mute` / max-width 62ch). Current placeholder is `xxxxxx` — needs real bio copy.
  - **Practice details grid** (2-column, gap `24px / 56px`, top rule, paddingTop 36px). Each cell: mono eyebrow label (10.5px / silver-2 / 0.10em uppercase) over 15.5px ink value. Current entries (data source: `sections.jsx`):
    - Practice — `Independent · solo`
    - Working with — `Teams of 10–80`
    - Day rate — `NZ$1,800 / day`
    - Engagement min. — `5 days`
    - Languages — `English`
    - Tools I keep on hand — `Python · n8n · Airtable · Xero · Notion · GAS`
    (Note: these have been edited multiple times in conversation and may not reflect Tristan's final values. Confirm before launch.)
  - **Now panel:** marginTop 56px, `--paper-2` bg, 1px `--rule` border, radius 6, padding 28×32. Mono header "MAY 2026 — UPDATED MONTHLY". Bullet list of 4 lines from `window.NOW` (see `data.jsx`), each prefixed with an em-dash in `--silver-2`.

### 4. Services (`#services`)

Eyebrow `Services — A04`.

Header row (flex, items: end, justify: space-between, gap 48px, marginBottom 56):
- Left H2: "Four ways I usually **show up.**" (italic span on "show up").
- Right paragraph (max-width 34ch): "Most engagements blend two of these. I'll tell you in the first call which mix actually fits your situation — and when none of them do."

**Accordion** (top + each-row bottom `1px var(--rule-strong)`):

Each row is a `<button>` with grid `80px 1fr 1fr 40px`, gap 32px, baseline-aligned, padding `28px 0`:
1. mono number (e.g. `01`, 13px / silver-2 / 0.08em)
2. service name (clamp 22–32px / 600 / -0.015em)
3. summary copy (15px / `--ink-mute` / 1.5)
4. "+" toggle (22px / `--navy`), rotates 45° to "×" when open (transition 250ms)

Open state reveals a 280px-max-height panel with the same grid columns; columns 2 and 3 hold "Deliverables" (mono eyebrow + ordered list `01 / 02 / 03 / 04`) and "Typical duration" (mono eyebrow + value). Transition `max-height .35s ease, opacity .25s ease`.

Default state: row 0 is open.

Service data is in `data.jsx` as `SERVICES` (id, no, name, summary, deliverables[], duration). See file for the four services (Process Automation / Systems Optimisation / AI Operations / Fractional Ops Lead).

### 5. Work (`#work`)

Eyebrow `Selected work — A05`. H2 "Three engagements from the **last twelve months.**"

3-column grid, gap 24px. Each card:
- `--paper-2` bg, 1px `--rule` border, radius 8, padding `28 28 32`, flex-column, gap 18, min-height 380.
- mono eyebrow "Case 01 / <sector>"
- client name (14px / 500 / `--ink-mute`)
- headline (22px / 600 / -0.015em / 1.18)
- body paragraph (14.5px / 1.55 / `--ink-mute`)
- spacer pushes a footer to bottom: top rule, paddingTop 24, baseline row of big metric (40px / 600 / -0.025em / `--navy`) + label (mono 10.5px / silver-2 / uppercase / max-width 140).

Data in `data.jsx` as `CASES`.

### 6. Gallery (`#gallery`)

Eyebrow `Gallery — A06`. Header row: H2 "Working diagrams, **not pitch decks.**" + intro paragraph.

**Grid**: `repeating-columns: 4`, gap 20, `grid-auto-flow: dense`. Tiles with `aspect: 'wide'` span 2 columns; tiles with `tall` or `square` span 1.

Each tile is a `<button>` with cursor `zoom-in`:
- 1px `--rule` border, radius 6, paper-2 bg.
- Image area (aspect ratio per item: tall `3/4`, wide `16/10`, square `1/1`) filled with a 135° striped pattern; stripe colors depend on `tone`:
  - `navy`: `#0B2545 / #102e58`
  - `blue`: `#134074 / #1a4d87`
  - `paper`: `--paper-2 / --silver`
- Tag chip bottom-left: 10px mono uppercase, `paper`/`var(--ink-mute)` if light tone, `rgba(0,0,0,.3)`/`var(--paper)` glass if dark.
- Caption row below image (padding 14/16): title (14px / 500) + id (mono 10.5px / silver-2).
- Hover: `translateY(-3px)` + `0 12px 32px rgba(11,37,69,.12)`.

Click opens `<GalleryLightbox>`: full-screen overlay `rgba(15,20,34,.78)` + 8px blur, centered card (`min(960px, 96vw)`, max-height 92vh), with a 16:10 banner of the same stripe pattern and below-the-fold caption row. Esc + backdrop click close. Body scroll locked while open.

Data in `data.jsx` as `GALLERY` (8 items). All are anonymized placeholder labels.

### 7. Journal (`#journal`)

Eyebrow `Journal — A07`. H2 "Notes from the **practice.**"

**Tag filter row** (right of H2): pill buttons for `All`, `Operations`, `Systems`, `AI`, `Tools`. Inactive: transparent / `--rule` border / `--ink-mute` text. Active: `--navy` bg / `--paper` text.

**Post list** (top + bottom `1px var(--rule-strong)`). Each row is a `<button>` with grid `120px 1.4fr 1fr 100px 24px`, gap 32, baseline-aligned, padding `28 0`. Hover: `background: rgba(15,20,34,.03)`.

Columns: date (mono 12px / silver-2, formatted `DD MMM YYYY`) | title (clamp 20–26px / 600) | excerpt (14.5px / mute) | tag · read time (mono 11px uppercase) | `→` arrow (20px / navy).

Click opens `<PostReader>`: right-drawer modal (width `min(720px, 96vw)`, full height) sliding over a `rgba(15,20,34,.62)` + 6px blur overlay. Inside: mono meta row, close button (36px circle, `--rule-strong` border), H1 of post (clamp 32–44px), body paragraphs (17px / 1.65 / `--ink-mute`), and a footer with mono attribution + "Back to journal" filled-navy pill. Esc + backdrop click close. Body scroll locked.

Data in `data.jsx` as `POSTS` (6 entries: slug, title, date ISO, readTime, tag, excerpt, body[]).

### 8. Contact (`#contact`)

Eyebrow `Get in touch — A08`. 2-column grid (`1fr 1fr`, gap 96):

- **Left**: H2 "A short note is **enough.**" + paragraph + a 4-row contact directory (`120px / 1fr` columns, bottom rule per row, gap 18): Email / Calendar / LinkedIn / Based in. Values are editable text — current values reflect Tristan's UK details after edits.
- **Right**: form card (`--paper-2` bg, `--rule` border, radius 8, padding 32, column gap 18):
  - Four fields: name, email, organisation (optional), message (textarea rows=4). Each label is mono 11px / silver-2 / 0.10em uppercase. Input border 1px `--rule-strong`, radius 6, padding `13 16` (`14 16` for textarea), font-size 15.5, outline none.
  - Submit: "Send note →" pill, navy, 14px×22px, 14.5px / 500, align-self start.
  - Client-side validation: name required, email matches `/^\S+@\S+\.\S+$/`, message ≥ 12 chars. Errors show inline in the label, color `--accent`, and the offending input border switches to `--accent`.
  - On success: replace form with a confirmation panel — mono "Sent — A08.OK", H3 "Thanks, {first name}.", paragraph echoing the user's email, "Send another" outline pill that resets state.

### 9. Footer

`borderTop 1px var(--rule)`, padding `48 36 56`. 4-column grid (`2fr 1fr 1fr 1fr`, gap 48). First column = mini-wordmark + 13.5px description with NZBN line (placeholder — replace for a UK trading entity). Other three columns are "Site" / "Elsewhere" / "Office" lists (mono eyebrow + 13.5px `--ink-mute` items).

Bottom strip: top rule, paddingTop 24, marginTop 56, flex row between mono `© 2026 Hoang Consulting Limited` and version tag `v1.0 · TH-2026`.

---

## Interactions & Behavior

- **Smooth scroll** when a nav item or hero CTA is clicked — `scrollIntoView({ behavior:'smooth', block:'start' })`.
- **Scroll spy** highlights the active section in the nav. Implemented with `IntersectionObserver`, rootMargin `-40% 0px -55% 0px` so the active section flips when ~50% of viewport reaches it.
- **Nav scroll-state**: glass background + bottom rule appear once `window.scrollY > 24`.
- **Service accordion**: only one row open at a time; clicking the open row collapses it.
- **Gallery lightbox** and **journal post drawer** both:
  - Lock `document.body.style.overflow = 'hidden'` while open.
  - Listen for `Escape` keypress to close.
  - Backdrop click closes; click on the dialog itself does not (stop propagation).
- **Form validation** runs on submit; success state persists until "Send another" is clicked.

### Transitions / Animations

| What | Properties | Duration / Easing |
|---|---|---|
| Nav glass | background, border-color, backdrop-filter | 250ms ease |
| Nav item hover | color | 180ms ease |
| Pill chip selection | all (color, bg, border) | 180ms ease |
| Service "+" rotation | transform | 250ms ease |
| Service panel open | max-height, opacity | 350ms / 250ms ease |
| Gallery tile hover | transform, box-shadow | 250ms ease |
| Lightbox fade in | opacity | 200ms ease (`@keyframes fade`) |

---

## State Management

Locally scoped React state in `app.jsx`:
- `active` — current section id (driven by IntersectionObserver).
- `post` — currently open journal post object, or `null`.
- `galleryItem` — currently open gallery item, or `null`.
- `t` (Tweaks) — design-time only (accent color, display style). Do **not** carry the Tweaks panel into production; it's a design exploration tool.

Section-local state:
- Services: `open` (index of open row, default 0; `-1` for none).
- Journal: `tag` filter (default `'All'`).
- Contact: `form` (name, email, org, message), `errors` (map), `sent` (boolean).

No data fetching in the prototype. In production:
- Journal posts should be MDX files (or a headless CMS — Sanity / Contentful), rendered server-side. Tag filter can be a client component over a fetched list.
- Gallery is likely a static asset list at first; consider CMS later if curation cadence grows.
- Contact form: wire to an email service (Resend, Postmark) or a form backend (Formspree, Basin). Keep the same client-side validation.

---

## Content (current placeholder copy)

All copy lives in two files:
- **Marketing/UI copy** in `sections.jsx` — hero strip + headline + lede, section H2s + leads, footer, nav labels, button labels.
- **Long-form data** in `data.jsx` — `SERVICES`, `CASES`, `POSTS`, `GALLERY`, `NOW`.

Several placeholder strings remain:
- About bio paragraphs are `xxxxxx` — replace with Tristan's bio.
- Case studies (`Marlow & Finch`, `Harbourline`, `Verdant Health`) are fictional.
- Journal posts are AI-drafted placeholders. Replace before launch.
- Gallery items are anonymised placeholder labels with no real image asset attached.

Treat all copy as draft pending Tristan's review.

---

## Assets

- `assets/logo.svg` — the T Stencil mark, single navy path on a 5px-radius 100×100 square. Used as favicon and inlined as `<LogoMark>` (so it inherits `currentColor`).
- No raster images are bundled. Portrait, gallery images, and any case-study imagery need to be sourced separately.

External resources:
- Google Fonts: `Inter Tight` (400/500/600/700) and `Newsreader` (italic, 400/500, optical-size 6–72).
- No icon library — every glyph (`+`, `→`, `×`, `/`) is plain text.

---

## Files in this handoff

| Path | Purpose |
|---|---|
| `design_files/Tristan Hoang.html` | Entry point. CSS variables, font imports, script tags. |
| `design_files/app.jsx` | App root. Wires sections, scroll spy, modals, Tweaks. |
| `design_files/sections.jsx` | All section components (Nav, Hero, About, Services, Work, Gallery, Journal, Contact, Footer) + LogoMark. |
| `design_files/data.jsx` | Content arrays — SERVICES, CASES, POSTS, GALLERY, NOW. |
| `design_files/tweaks-panel.jsx` | Design-time tweak panel — do not port to production. |
| `design_files/assets/logo.svg` | The T Stencil brand mark. |

---

## Recommended target stack (if greenfield)

- **Framework:** Next.js 14+ App Router, TypeScript.
- **Styling:** Tailwind CSS, with the design tokens above declared as Tailwind theme extensions (or as CSS variables in `globals.css` and referenced via arbitrary values). Keep `Inter Tight` and `Newsreader` loaded with `next/font/google`.
- **Content:** Journal posts as MDX in `content/journal/*.mdx` with frontmatter (`title, date, tag, readTime, excerpt`). Generate slug from filename.
- **Forms:** A Route Handler that forwards to Resend; client-side validation with `zod` or plain JS to match the prototype's rules.
- **Images:** `next/image` for portrait + future gallery images; until they exist, render the diagonal-stripe placeholder pattern as a CSS background.
- **Animation:** Plain CSS transitions are sufficient. Reach for Framer Motion only if you add scroll-linked motion later.
- **Deployment:** Vercel.

---

## Open questions for the developer to confirm with Tristan before launch

1. Final values for the practice-details grid (rate, engagement minimum, tool list, languages, working-with size).
2. Real bio copy for the About section.
3. Real or anonymized case studies. If anonymized, are the current metrics representative?
4. Initial journal post list — keep, edit, or replace the six placeholder posts.
5. Trading entity for the footer (currently "Hoang Consulting Limited, NZBN…" — likely needs UK registered company name + UTR/Companies House number).
6. Form submission destination (Resend? Formspree? Calendly redirect?).
7. Portrait photograph(s) and any gallery imagery.
