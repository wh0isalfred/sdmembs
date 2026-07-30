# S & D Membs Security Services — Website

Marketing website for **S & D Membs Security Services Limited**, a licensed private security provider headquartered in Port Harcourt, Rivers State, with offices in Abuja and Lagos.

Built with React, Vite, Tailwind CSS v4, and React Router. Deployed on Vercel.

---

## Tech Stack

| Layer      | Choice                        |
|------------|-------------------------------|
| Framework  | React 18 (Vite)               |
| Styling    | Tailwind CSS v4                |
| Routing    | react-router-dom v6            |
| Hosting    | Vercel                         |

No component library, no animation library — icons are hand-rolled inline SVG, and animations (page transitions, the coverage-map pulse, scroll reveals) are plain CSS keyframes. Kept deliberately dependency-light.

---

## Getting Started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build to /dist
npm run preview   # preview the production build locally
```

## Deployment (Vercel)

This is a client-side-routed SPA, so **`vercel.json` is required** at the project root:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

Without this, direct navigation or a hard refresh on any route other than `/` (e.g. `/services`, `/aboutus`) returns a 404, because Vercel tries to match the URL to a real file before React Router ever loads. This applies regardless of domain — a custom domain doesn't change this behavior, since it's a deploy-config rule, not a DNS one.

---

## Project Structure

```
src/
├── main.jsx              # entry point
├── App.jsx                # routing (BrowserRouter + Routes)
├── index.css               # Tailwind v4 theme tokens + shared component classes
├── components/
│   ├── Navbar.jsx
│   └── Footer.jsx
├── pages/
│   ├── Home.jsx            # hero, about teaser, services teaser, why-choose-us,
│   │                        # industries, recruitment, coverage map, CTA, contact
│   ├── About.jsx            # full company story, mission/vision, team (see below)
│   └── Services.jsx          # detailed breakdown of all 11 services + industries
└── assets/
    └── logo.jpg
```

### Routing decisions

Only **Home**, **About** (`/aboutus`) and **Services** (`/services`) have dedicated routes. Industries, Careers, and Contact are intentionally kept as scroll-anchored sections on the homepage (`#industries`, `#careers`, `#contact`) rather than separate pages — this was a deliberate client-facing decision, not an oversight. Navbar/Footer links use a shared "smart navigation" pattern: if you're already on the homepage, clicking a section link scrolls; if you're on a different route, it navigates home first, then scrolls after a short delay.

---

## Design System

Defined in `index.css` under `@theme` (Tailwind v4 tokens):

- **Palette:** navy (`--color-navy` / `#102a43`) + burgundy (`--color-burgundy` / `#7a1530`) + neutrals. No gold, no third accent color — burgundy is the only accent, used on light sections; white/light carries accents on dark sections.
- **Type:** Plus Jakarta Sans (headings), Source Sans 3 (body).
- **Shared component classes** (`@layer components`): `.container-page`, `.eyebrow`, `.btn-primary` — these exist because the same Tailwind utility strings were being copy-pasted with small drift across every page. Only patterns with genuine, verified duplication (10+ occurrences) got pulled into a class; one-off patterns intentionally stay as inline utilities rather than being forced into artificial "reusable" classes.

---

## Known-good reference data (don't regress these)

A few facts that have been wrong in past iterations of this codebase — worth double-checking against these if the coverage map or industries list ever gets touched again:

- **Coverage states (5 total):** Rivers, Bayelsa, Lagos, Enugu, FCT. *(Previous versions of the map mistakenly highlighted Benue and Akwa Ibom instead of Bayelsa and Enugu — verify against the client's actual intake form, not against old code, if this ever needs rebuilding.)*
- **Industries served (11 total):** Schools, Hospitals, Banks, Hotels, Shopping Malls, Government Facilities, Oil & Gas, Construction Sites, Residential Estates, Warehouses/Factories, Religious Organizations. *(Religious Organizations was missing from the codebase for a while despite being in the client's real list — it's now included.)*
- **Services (11 total, grouped into 7 display categories):** Residential Security · Commercial & Industrial Security · Armed & Unarmed Guards · K9 Security · Mobile Patrol & Rapid Response · CCTV Monitoring & Access Control · Security Consultancy (the last of which also covers two-way radio/comms equipment supply, which doesn't get its own card).
- **Company registration:** RC 933870.

---

## Open Items / Roadmap

- [ ] **Photos** — management staff portraits + names/positions, service photos, licence/certification scan, transparent logo. Waiting on the client.
- [ ] **Contact form** — currently has no submit handler. Plan: wire to Formspree or Web3Forms (no backend needed).
- [ ] **Office locations section** — Port Harcourt/Abuja/Lagos addresses are mentioned in passing text but have no dedicated section (footer or Contact) yet.
- [ ] **SEO pass** — meta tags, OG image, per-page titles, sitemap. Best done once a custom domain is attached.
- [ ] **Domain + email** — currently using a Gmail address for contact; revisit a domain-based email once a custom domain is purchased.

---

## Contact (client-facing, for reference)

- **Phone:** 0803 709 5470 · 0707 231 6078
- **Emergency:** 0703 653 2697 (24/7)
- **Email:** sanddmembs@gmail.com
- **WhatsApp:** +234 916 942 6900
- **HQ:** 32 Oromenike Street, D/Line, Port Harcourt, Rivers State, Nigeria
