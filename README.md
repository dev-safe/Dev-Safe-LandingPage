# DevSafe — Build. Secure. Protect.

The official landing page for **DevSafe**, a software development and cybersecurity agency based in Cameroon that also builds and owns its own products (e.g. **BookBridge**). Built with **SvelteKit** and styled with **Tailwind CSS v3** to deliver a high-contrast, premium "SOC dashboard" dark tech aesthetic.

---

## 🚀 Technology Stack

- **Framework:** SvelteKit (latest stable with Runes)
- **Styling:** Tailwind CSS v3 (using fluid grids, glassmorphism, and radial glows)
- **Icons:** @lucide/svelte (packaged with custom brand SVGs for GitHub and WhatsApp)
- **Fonts:** 
  - `Plus Jakarta Sans` (Headings)
  - `Inter` (Body text)
  - `JetBrains Mono` (Code blocks, technical tags, inputs)

---

## ✨ Features

- **Interactive Consultation Gateway:** A custom glassmorphic request form with animated submit states ("Establishing Secure Link...") and feedback panels.
- **Scroll-Triggered Entrance Animations:** A `use:reveal` action animates elements as they enter the viewport. Content is always server-rendered, and the hidden pre-animation state only applies when JS is running (`html.js`), so crawlers and no-JS visitors see everything.
- **SEO:** The site is prerendered to static HTML. `Seo.svelte` handles the title, description, canonical, Open Graph and Twitter tags, `schema.ts` adds the JSON-LD graph, and `sitemap.xml` and `robots.txt` are generated from `src/lib/config/site.ts`.
- **Sticky Glassmorphism Header:** Responsive navigation bar with dynamic borders, a language toggle, and a hamburger menu below the `lg` breakpoint.
- **Client Work vs. Owned Products:** Separate showcase sections for agency client work (e.g. **Eventra**) and DevSafe-owned products (e.g. **BookBridge**), rendered by a shared `ProjectShowcase` component.
- **Bilingual (English / French):** English lives at `/` and French at `/fr`, with an FR/EN toggle in the header. Each version has its own `<html lang>`, canonical, `hreflang` alternates, `og:locale` and JSON-LD `inLanguage`, and both are listed in the sitemap.
- **Centralized Data Layer:** All copy lives in `src/lib/data/content/` (one file per language), avoiding hardcoded strings inside markup.

---

## 📁 Project Structure

```bash
src/
├── lib/
│   ├── actions/
│   │   └── reveal.ts         # SSR-safe scroll reveal action
│   ├── assets/
│   │   ├── DevSafe_logo.jpg  # Brand logo used for layout/favicon
│   │   ├── Founder.jpg       # Profile picture for founder profile
│   │   └── screens/          # Product screenshots (WebP)
│   ├── components/
│   │   ├── CTABanner.svelte  # Interactive consultation form banner
│   │   ├── Footer.svelte     # Footer links and WhatsApp integration
│   │   ├── Hero.svelte       # Hero with sample security-audit report panel
│   │   ├── Navbar.svelte     # Responsive glass header & mobile drawer
│   │   ├── PhoneFrame.svelte      # Device frame for real product screenshots
│   │   ├── ProjectCard.svelte     # Single project card with product screenshot
│   │   ├── ProjectShowcase.svelte # Reusable section for client work & products
│   │   ├── Seo.svelte        # <svelte:head> meta, canonical, OG, JSON-LD
│   │   ├── Services.svelte   # Bento grid of services + "How we work" process
│   │   ├── TrustStrip.svelte # Real proof points and tech stack under the hero
│   │   ├── Team.svelte       # Team showcase card grids
│   │   └── WhyDevSafe.svelte # Corporate differentiator grids
│   ├── config/
│   │   └── site.ts           # Site URL, languages, locale helpers, indexable routes
│   ├── data/content/
│   │   ├── en.ts             # English copy (source of truth for the content shape)
│   │   ├── fr.ts             # French copy, typed as SiteContent
│   │   ├── types.ts          # Shared content types
│   │   └── index.ts          # t() / getContent(lang) helpers
│   └── seo/
│       └── schema.ts         # JSON-LD structured data
├── routes/
│   ├── +layout.svelte        # Imports global CSS & dynamic logo favicon
│   ├── +layout.ts            # prerender = true for the whole site
│   ├── [[lang=lang]]/        # Home page for / (en) and /fr (fr)
│   │   ├── +page.svelte      # Main assembly page with SEO headers
│   │   └── +page.ts          # Prerender entries for /fr
│   ├── robots.txt/+server.ts # Prerendered robots.txt
│   └── sitemap.xml/+server.ts# Prerendered sitemap (from indexableRoutes)
├── params/lang.ts            # Route matcher: only "fr" is a valid prefix
├── hooks.server.ts           # Sets <html lang> per page
├── app.css                   # Global styles, variables & utility classes
├── app.html                  # HTML shell template
static/
├── apple-touch-icon.png      # iOS home-screen icon
├── favicon.jpg               # Static brand fallback icon
├── logo-512.png              # Logo referenced by JSON-LD
└── og-image.png              # 1200x630 social share image
```

---

## 🎨 Theme Tokens

Colours live as RGB-channel CSS variables in `src/app.css` (`--ds-*`, with overrides under `:root.light`) and are exposed to Tailwind as `ds-*` colours, so opacity modifiers like `bg-ds-cyan/10` work. Use the semantic classes instead of raw Tailwind colours:

| Class | Use for |
| --- | --- |
| `text-ds-fg` / `text-ds-fg-muted` / `text-ds-fg-subtle` | headings / body copy / captions |
| `bg-ds-bg`, `bg-ds-surface`, `bg-ds-elevated`, `border-ds-border` | page, cards, raised elements, borders |
| `text-ds-cyan`, `text-ds-blue` | accent labels and links |
| `bg-ds-primary text-ds-on-primary hover:bg-ds-primary-hover` | primary buttons |
| `ds-success`, `ds-warning`, `ds-danger` | status colours |

Every text/background pairing meets WCAG AA (4.5:1) in both dark and light mode.

## 🌍 Translations

English (`src/lib/data/content/en.ts`) defines the content shape. The French file is typed as `SiteContent`, so `npm run check` fails if a key is missing from `fr.ts`.

- **Edit copy:** change the string in both `en.ts` and `fr.ts`.
- **Add a string:** add it to `en.ts`, add the translation to `fr.ts`, then read it in a component with `const c = $derived(t())`.
- **French typography:** use `’` for apostrophes and a non-breaking space (U+00A0) before `: ? !` and inside `« »`.

Visitors are never redirected based on browser language; they choose with the toggle, and search engines pick the right version from the `hreflang` tags.

## 💻 Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Run Static Checks & Lints
```bash
npm run check
```

### 4. Create Production Build
```bash
npm run build
```
Preview the production build locally:
```bash
npm run preview
```

---

## ☁️ Vercel Deployment

This project uses `@sveltejs/adapter-auto`, meaning it is configured out-of-the-box for serverless hosting on Vercel:

1. Push this repository to GitHub/GitLab/Bitbucket.
2. Go to [Vercel](https://vercel.com) and select **Add New Project**.
3. Import the repository.
4. Click **Deploy**. Vercel will automatically configure the build output settings and host the site.
