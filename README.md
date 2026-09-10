# S & D Membs Security Services — Website

Marketing website for **S & D Membs Security Services Limited**, a licensed private security provider based in Port Harcourt and serving businesses and institutions across Nigeria.

**Production domain:** https://www.sanddmembs.org (canonical host — see "Canonical hostname" below)

---

## Tech Stack

| Layer      | Choice                          |
|------------|---------------------------------|
| Framework  | React 19.2 (Vite 8)             |
| Styling    | Tailwind CSS v4                 |
| Routing    | react-router-dom v7             |
| Hosting    | Vercel                          |
| Contact API | Vercel serverless function + Resend |
| Prerendering | Playwright (dev-only, build step) |

No component library, no animation library — icons are hand-rolled inline SVG, and animations (page transitions, the coverage-map pulse, scroll reveals) are plain CSS keyframes. Fonts are self-hosted (see "Fonts" below). Kept deliberately dependency-light — Playwright is the one significant devDependency, added specifically for the prerender step (see "SEO & prerendering").

---

## Getting Started

```bash
npm install
cp .env.example .env.local    # fill in real values — see "Contact form" below
npm run dev                   # local dev server (contact form needs `vercel dev` instead — see below)
npm run build                 # production build to /dist, then auto-runs the prerender step
npm run preview               # preview the production build locally
npm run lint                  # eslint
```

`npm run dev` (plain Vite) does not run the `/api/contact` serverless function — Vite's dev server doesn't know how to execute Vercel functions. To test the contact form locally end-to-end, use the Vercel CLI instead:

```bash
npm i -g vercel   # if not already installed
vercel dev
```

---

## Routes

| Route | Notes |
|---|---|
| `/` | Home — hero, trust strip, services teaser, why-choose-us, industries, careers/recruitment, coverage map, CTA, contact |
| `/aboutus` | Company story, mission/vision, leadership, **Licensing & Compliance** (`#licensing`) |
| `/services` | All 7 service categories, each with a stable anchor ID (see "Service anchors") |
| `/offices` | Head office, regional offices, operational contacts and direct phone numbers |
| `/privacy-policy` | Real content, not boilerplate — see "Legal pages" |
| `/terms-of-use` | Same |
| `/home` | Permanently redirects to `/` (see `vercel.json`) |
| anything else | Branded 404 (`src/pages/NotFound.jsx`) — see "404 handling" |

Industries, Careers, and Contact are **intentionally** homepage anchor sections (`/#industries`, `/#careers`, `/#contact`), not separate routes — this was a deliberate decision, not an oversight. Don't add dedicated pages for them without checking first.

### Service anchors

Each of the 7 service sections on `/services` has a stable `id` so they can be deep-linked (from the footer, from external links, etc.):

`corporate-commercial-security`, `industrial-facility-security`, `armed-unarmed-guards`, `k9-security`, `mobile-patrol`, `cctv-access-control`, `security-consultancy`

Hash scrolling to these (and to `/#industries` etc.) is handled by `src/hooks/useHashScroll.js` — a `MutationObserver`-based hook wired in globally via `App.jsx`, not a fixed-timer hack. It works whether the target already exists on the page or the route just changed and the target hasn't mounted yet.

---

## SEO & Prerendering

This is the part most likely to need re-explaining to a future contributor, so it's covered in full.

**The problem:** a plain Vite SPA build produces one `dist/index.html`. Every route shares that same static `<head>` — title, description, canonical, Open Graph — until React Router mounts client-side and JavaScript patches the tags. That's fine for real browsers and JS-executing crawlers, but a plain HTTP request (`curl`, or a crawler that doesn't run JS) sees the *homepage's* tags for every single route.

**The fix, in two layers:**

1. **`src/hooks/useDocumentMeta.js`** — called by every page component with a `title`, `description`, and `path`. On mount, it patches `<title>`, `<meta name="description">`, `<meta name="robots">`, `<link rel="canonical">`, and the Open Graph/Twitter title/description/url/image tags — and restores the previous values on unmount. This fixes metadata for anyone whose browser actually executes the JS.

2. **`scripts/prerender.mjs`** — runs automatically after every `npm run build` (via the `postbuild` script in `package.json`). It starts a tiny local static server over `dist/`, opens each real route in headless Chromium via Playwright, waits for `useDocumentMeta` to patch the tags, and writes the **fully resolved HTML** to `dist/<route>/index.html`. It also visits a nonexistent path to capture the rendered `NotFound` page and writes it to `dist/404.html`.

The result: `curl https://www.sanddmembs.org/aboutus` returns HTML with `/aboutus`'s actual title and canonical tag baked in — verified locally by grepping the generated files, not assumed. The same JS bundle still loads and hydrates over each prerendered file, so client-side routing/navigation continues to work exactly as before.

**What this does NOT do:** true server-side rendering, or handle any future dynamic/parameterized route (there are none today — all 6 indexable routes are static paths, so this approach is sufficient). If routes with dynamic segments are ever added, this whole approach needs revisiting.

**Playwright as a devDependency:** this pulls in Chromium as a dev-only dependency. It never ships to production or affects the site's runtime weight — it only runs during `npm run build`. The `postinstall` script installs Chromium and its required Linux system libraries for the prerender step.

### Canonical hostname

The live site redirects the apex domain to `www` (`sanddmembs.org` → `https://www.sanddmembs.org`, HTTP 308). Every canonical tag, OG URL, JSON-LD `@id`/`url`, `robots.txt`, and `sitemap.xml` entry uses the `www` form consistently. If the Vercel primary-domain setting is ever changed to the apex, all of these need updating together — they're not currently derived from one variable across the static HTML and the JS-side `COMPANY.canonicalOrigin` constant (see "Company data" below) because `index.html`'s static tags can't import JS.

### Structured data

`index.html` contains `LocalBusiness`/`ProfessionalService` JSON-LD. Only verified information is included — no fake ratings, reviews, or unsupported claims. The `logo` property points at the square app icon; `image` points at the new 1200×630 OG banner (`public/og-image.png`) — these are deliberately different properties per schema.org convention, not an inconsistency.

---

## 404 handling

`src/pages/NotFound.jsx` is a real, branded page (matches the design system, generous white space, no giant "404" typography, sets `robots: noindex, follow` via `useDocumentMeta`). Getting this to return an **actual HTTP 404 status** (not just a soft-404 that looks right but returns 200) took real work — worth understanding if this ever needs to change:

- `vercel.json` has **no wildcard SPA rewrite**. Instead, each of the 5 non-root routes has an explicit literal rewrite (`/aboutus` → `/aboutus/index.html`, etc.) pointing at its prerendered file. This was deliberate, not an oversight — testing showed Vercel does **not** automatically resolve a clean URL like `/aboutus` to `/aboutus/index.html` without an explicit rule.
- For any path that matches neither a real static file nor one of those explicit rewrites, Vercel falls through to its documented convention: if a `404.html` exists at the output root, it's served **with a real 404 status code**. `scripts/prerender.mjs` generates that file.
- **Honesty about verification:** this was verified locally against a hand-written server that faithfully replicates Vercel's *documented* routing order (static file → rewrite → `404.html`-with-404-status) — not against the live Vercel platform, since deploying wasn't part of this task. **Confirm this actually works post-deploy** with:
  ```bash
  curl -I https://www.sanddmembs.org/this-does-not-exist
  # should show: HTTP/2 404
  ```
  If it doesn't, the most likely cause is Vercel's static-file-serving not honoring `404.html` exactly as documented for this project's output structure — report back and this needs revisiting.

---

## Contact form

`src/pages/Home.jsx`'s `ContactSection` posts to `/api/contact.js`, a Vercel serverless function using [Resend](https://resend.com)'s REST API directly (plain `fetch`, no SDK dependency added).

**Environment variables required** (see `.env.example`):

- `RESEND_API_KEY` — from your Resend dashboard. Server-side only, never exposed to the browser.
- `CONTACT_TO_EMAIL` — the inbox submissions get delivered to (currently `sanddmembs@gmail.com`).
- `CONTACT_FROM_EMAIL` — the Resend "from" address. **This needs a domain verified in Resend's dashboard (Settings → Domains) for reliable delivery** — sending as a Gmail address you don't control the DNS for will likely be rejected or spam-filtered. Resend's shared sandbox address (`onboarding@resend.dev`) works for testing before a domain is verified but isn't meant for production.

Set these in Vercel: Project Settings → Environment Variables.

**What's implemented:** server-side validation (required: name, email, service, message; optional: organization, phone, preferred office), a honeypot field, method rejection, no key exposure, no logging of message contents, escaped HTML in the email body, and a frontend with proper loading/success/error states, `aria-live` status, disabled-while-submitting, and preserved field values on failure. An email/phone fallback is always visible on the form regardless of whether the API succeeds.

**What's explicitly NOT implemented — by design, not oversight:** rate limiting. An in-memory counter in a serverless function resets on every cold start and provides false confidence, not real protection. If abuse becomes a real problem, add a durable store (Upstash Redis, Vercel's own rate-limiting middleware) — don't paper over this with a fake counter.

**Untested against live credentials:** this code has not been run against a real `RESEND_API_KEY` — I don't have one. Test end-to-end after setting real environment variables.

---

## Company data

`src/data/company.js` is the single source of truth for phone numbers, email, address, hours, and the canonical origin — imported by `Footer.jsx`, `Navbar.jsx`, `Home.jsx`'s contact section, and the legal pages.

**This does not cover `index.html`'s static `<meta>`/JSON-LD tags** — plain HTML/JSON can't import a JS module. If any value in `company.js` changes, `index.html` needs the same update by hand. This is a known, accepted limitation, not something to "fix" by trying to template `index.html` at build time (that would be a bigger architectural change than this data file was meant to justify).

---

## Fonts

Plus Jakarta Sans and Source Sans 3 are self-hosted (`src/assets/fonts/*.woff2`), not loaded from Google's font CDN. Both are variable fonts — one file each covers the full weight range used (`500–800` for Plus Jakarta Sans, `400–600` for Source Sans 3) via `font-weight: <min> <max>` range syntax in `@font-face`, rather than needing a separate file per weight. `font-display: swap` is set. This removes a third-party network dependency and lets the CSP (see below) keep `style-src`/`font-src` scoped to `'self'`.

---

## Performance

- Hero images (Home, Services, About) are marked `loading="eager"` + `fetchPriority="high"` — they're each page's LCP element. Every other image is `loading="lazy"`, including the footer logo (below the fold on every page).
- **No explicit `width`/`height` HTML attributes were added to `<img>` tags.** This was a deliberate decision, not an oversight: every image already sits in a Tailwind fixed-height box (`h-[420px]`, `h-64`, etc.) that's resolved before the image finishes loading, so the space is already reserved. Adding HTML width/height attributes on top would risk conflicting with the *responsive* height classes (which change at `sm:`/`lg:` breakpoints — a single HTML attribute can't express that). This was verified empirically, not assumed: real Cumulative Layout Shift was measured via the browser's own Layout Instability API (Playwright + `PerformanceObserver`) on `/`, `/aboutus`, and `/services` at a mobile viewport — **CLS = 0 on all three.**
- `<link rel="preconnect">` added for `images.unsplash.com` and `www.google.com` (Maps embed) — the only two external origins actually in use now that fonts are self-hosted.

## Security headers (`vercel.json`)

- **CSP** — scoped to what's actually used: `'self'` for scripts/styles/fonts, `images.unsplash.com` for the (current, temporary — see "Known image issues") stock photography, `www.google.com` for the Contact section's Maps embed (`frame-src`), and `'self'` for `connect-src` (the `/api/contact` fetch). No `unsafe-inline` needed anywhere — the two places that used React's inline `style` prop were converted to Tailwind arbitrary-value classes specifically to allow this. `frame-ancestors 'none'` provides clickjacking protection (CSP-based, so no separate `X-Frame-Options` header needed).
- `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` (denies camera/mic/geolocation/payment/usb).
- Long-lived immutable caching for hashed `/assets/*` files; a week's caching for favicons/OG image.

If a new third-party resource is ever added (analytics, a new embed, a different map provider), the CSP needs a matching allowance added at the same time, or it will silently fail to load with a console error, not a visible one.

---

## Known image issues (do NOT silently "fix" by swapping images — ask first)

Two of the current stock photos are seriously mismatched with their alt text and the site's actual content, not just generic placeholders:

- **Homepage hero** (`Home.jsx`, Unsplash `photo-1517457373958-b7bdd4587205`) — alt text says "security officers standing professionally beside a patrol vehicle." The actual photo is a crowd at a casual social event with string lights. This is the single largest, most prominent image on the entire site.
- **About page hero background + "Our Story" image** (`About.jsx`, Unsplash `photo-1552664730-d307ca884978`) — alt text implies company/headquarters imagery. The actual photo is a generic office brainstorming meeting with sticky notes on a whiteboard.

These were **not changed** in this pass — an explicit instruction was "do not change the selected images, real assets will be provided later." But these two specifically aren't just "will be replaced with something better eventually" placeholders — they're actively wrong, and worth prioritizing for replacement before real photography arrives, even with a different generic stock photo in the meantime.

One more detail tied to the same broken image: `About.jsx` uses this exact photo **twice** on one page (hero background at `w=2000`, "Our Story" image at `w=1200`) — two different crop sizes of the same underlying photo, which means two separate downloads for what's conceptually one image. Deliberately not "fixed" by forcing both to the same size (that would either bloat the smaller usage or under-serve the larger one) — the real fix is replacing this photo, which resolves the duplicate-fetch concern as a side effect.

---

## Compliance content (`/aboutus#licensing`)

The Licensing & Compliance section presents only facts that could be verified against the company's actual CAC/tax/NSCDC/NUPRC/NIMASA/insurance documents at the time of writing — no invented licence numbers, no unverifiable dates, no oversized "badge wall." A few items were deliberately **left out** because they couldn't be confirmed:

- **Exact NSCDC licence number** — two source documents show slightly different OCR readings of the same number. Not published until verified against the original.
- **Exact NUPRC/insurance policy numbers** — omitted per the general principle of not publishing sensitive document identifiers without a clear reason.
- **ALPSPN (private security association) membership** — the only certificate on file is dated 2021 with no visible expiry; current membership status isn't confirmed, so this isn't mentioned as a current fact anywhere.
- **PenCom compliance status conflict** — one source document (a BPP Interim Registration Report) states "NO PENCOM certificate," while a separate, distinct PenCom Pension Clearance Certificate shows active compliance through 2026. Both can't be simultaneously current; this needs Alfred or the client to resolve. The compliance section currently states the PenCom certificate's claim (compliant through 2026) since it's the more specific, direct document, but this should be confirmed, not assumed.

---

## Client-confirmation checklist

Nothing below was guessed at or silently resolved — these need an actual answer from Alfred or the client before they can be finalized.

- [ ] **PenCom status** — see "Compliance content" above.
- [ ] **NSCDC licence number** — confirm the exact digits from the original document (two OCR reads disagree).
- [ ] **ALPSPN membership** — is it still current? What's the actual expiry/renewal status?
- [ ] **Armed-guard wording** — softened across the site to avoid implying the company's own private guards are personally licensed to carry firearms (the armed Mobile Police escort correspondence in the source documents belongs to a *different* legal entity, S&D Membs Enterprise Nigeria Limited). If S&D Membs Security Services Limited does have its own lawful arrangement for armed response, confirm it so the wording can be more specific/confident.
- [ ] **Two mismatched hero images** — see "Known image issues" above.
- [ ] **Resend domain verification** — needs to be done in Resend's dashboard before `CONTACT_FROM_EMAIL` will deliver reliably.
- [ ] **Google Search Console** — not touched in this pass (explicitly out of scope). Once ready: add a Domain property for `sanddmembs.org`, verify via DNS, submit `https://www.sanddmembs.org/sitemap.xml`.
- [ ] **Legal review** — the Privacy Policy and Terms of Use are written to accurately describe the site as it actually operates, but have not had a lawyer review them. Recommended before treating them as final.
- [ ] **Playwright on Vercel's build** — confirm the `postbuild` prerender step actually succeeds on Vercel's build infrastructure (see the SEO/Prerendering section's Playwright note) — this could not be tested without deploying.
- [ ] **True 404 status** — confirm with `curl -I` post-deploy (see "404 handling" above).
