# DevSafe — Build. Secure. Protect.

The official landing page for **DevSafe**, a software development and cybersecurity agency based in Cameroon that also builds and owns its own products (e.g. **BookBridge**). Built with **SvelteKit** and styled with **Tailwind CSS v3** to deliver a high-contrast, premium "SOC dashboard" dark tech aesthetic.

---

## 🚀 Technology Stack

- **Framework:** SvelteKit (latest stable with Runes)
- **Styling:** Tailwind CSS v3 (using fluid grids, glassmorphism, and radial glows)
- **Icons:** @lucide/svelte (packaged with custom brand SVGs for GitHub and WhatsApp)
- **Fonts:** 
  - `IBM Plex Serif` (h1 and section headings)
  - `Inter` (Body text, buttons, card titles)
  - `JetBrains Mono` (Eyebrow labels, technical tags, the hero console)
  - All three are self-hosted with Fontsource (`@fontsource-variable/inter`, `@fontsource-variable/jetbrains-mono`, `@fontsource/ibm-plex-serif`), imported in `src/routes/+layout.svelte`. There is no Google Fonts request. The Inter and IBM Plex Serif 500 latin files are preloaded because the hero heading and body need them for first paint.

---

## ✨ Features

- **Interactive Consultation Gateway:** A custom glassmorphic request form with animated submit states ("Establishing Secure Link...") and feedback panels.
- **Scroll-Triggered Entrance Animations:** A `use:reveal` action animates elements as they enter the viewport. Content is always server-rendered, and the hidden pre-animation state only applies when JS is running (`html.js`), so crawlers and no-JS visitors see everything.
- **SEO:** The site is prerendered to static HTML. `Seo.svelte` handles the title, description, canonical, Open Graph and Twitter tags, `schema.ts` adds the JSON-LD graph (ProfessionalService in Yaoundé, plus BookBridge and Eventra), and `sitemap.xml` and `robots.txt` are generated at build time.
- **Sticky Glassmorphism Header:** Responsive navigation bar with dynamic borders, a language toggle, and a hamburger menu below the `lg` breakpoint.
- **Client Work vs. Owned Products:** Separate showcase sections for agency client work (e.g. **Eventra**) and DevSafe-owned products (e.g. **BookBridge**), rendered by a shared `ProjectShowcase` component.
- **Bilingual (English / French):** English lives at `/` and French at `/fr`, with an FR/EN toggle in the header. Each version has its own `<html lang>`, canonical, `hreflang` alternates, `og:locale` and JSON-LD `inLanguage`, and both are listed in the sitemap.
- **Service & Case-Study Pages:** Each service has its own page at `/services/[slug]` (what's included, process, who it's for, FAQ) and each project has a case study at `/work/[slug]` (story, features, how it was built). Both come in English and French, with a consultation form that preselects the matching service, plus BreadcrumbList, Service/FAQPage or app JSON-LD.
- **Centralized Data Layer:** All copy lives in `src/lib/data/content/` (one file per language), avoiding hardcoded strings inside markup.

---

## 📁 Project Structure

```bash
src/
├── lib/
│   ├── actions/
│   │   └── reveal.ts         # SSR-safe scroll reveal action
│   ├── assets/
│   │   ├── devsafe-logo.svg  # DS shield logo (one file for both themes)
│   │   ├── Founder.jpg       # Profile picture for founder profile
│   │   └── screens/          # Product screenshots (WebP)
│   ├── components/
│   │   ├── BrandIcon.svelte  # GitHub / LinkedIn / WhatsApp SVG marks (Lucide has no brand icons)
│   │   ├── CTABanner.svelte  # Consultation form banner + WhatsApp button (defaultService prop)
│   │   ├── detail/           # Building blocks for service and case-study pages
│   │   │   ├── PageHeader.svelte    # Dusk-sky header panel with breadcrumb, H1, lead, optional aside
│   │   │   ├── HeaderActions.svelte # Consultation + WhatsApp buttons
│   │   │   └── DetailSection.svelte # Section with H2 + cm-rule, alternating backgrounds
│   │   ├── Footer.svelte     # Footer links and WhatsApp integration
│   │   ├── Hero.svelte       # Hero with the Cameroon hero photo (full colour)
│   │   ├── Navbar.svelte     # Responsive glass header & mobile drawer
│   │   ├── PhoneFrame.svelte      # Device frame for real product screenshots
│   │   ├── ProjectCard.svelte     # Single project card with product screenshot
│   │   ├── ProjectShowcase.svelte # Client work & products sections (+ NDA client card)
│   │   ├── SectionPhoto.svelte    # Decorative palette-tinted background photo
│   │   ├── SectionVideo.svelte    # Silent looping background video (WhyDevSafe)
│   │   ├── Seo.svelte        # <svelte:head> meta, canonical, OG, JSON-LD
│   │   ├── Services.svelte   # Bento grid of services
│   │   ├── TrustStrip.svelte # Awards and client proof points under the hero
│   │   ├── Team.svelte       # Founders photo, bios, highlights, LinkedIn/GitHub
│   │   ├── WhatsAppButton.svelte  # Floating WhatsApp chat button
│   │   └── WhyDevSafe.svelte # Corporate differentiator grids
│   ├── config/
│   │   └── site.ts           # Site URL, languages, locale helpers (localizePath, sectionHref)
│   ├── data/content/
│   │   ├── en.ts             # English copy (source of truth for the content shape)
│   │   ├── fr.ts             # French copy, typed as SiteContent
│   │   ├── details/          # Long-form service and case-study page copy (en.ts, fr.ts)
│   │   ├── types.ts          # Shared content types
│   │   └── index.ts          # t() / getContent(lang) helpers
│   └── seo/
│       ├── schema.ts         # JSON-LD structured data
│       ├── sitemap.ts        # Sitemap XML renderer (hreflang alternates, escaping)
│       └── sitemap-routes.ts # Static routes + dynamic collections published in the sitemap
├── routes/
│   ├── +layout.svelte        # Imports global CSS & favicon link
│   ├── +layout.ts            # prerender = true for the whole site
│   ├── [[lang=lang]]/        # Pages for / (en) and /fr (fr)
│   │   ├── +page.svelte      # Home page with SEO headers
│   │   ├── +page.ts          # Prerender entries for /fr
│   │   ├── services/[slug]/  # Service pages (cybersecurity, software-development, design-branding)
│   │   └── work/[slug]/      # Case studies (bookbridge, eventra)
│   ├── robots.txt/+server.ts # Prerendered robots.txt
│   └── sitemap.xml/+server.ts# Prerendered sitemap (from sitemap-routes.ts)
├── params/lang.ts            # Route matcher: only "fr" is a valid prefix
├── hooks.server.ts           # Sets <html lang> per page
├── app.css                   # Global styles, variables & utility classes
├── app.html                  # HTML shell template
static/
├── apple-touch-icon.png      # iOS home-screen icon
├── favicon.svg               # Vector favicon (same as devsafe-logo.svg)
├── favicon.png               # 64px PNG fallback favicon
├── images/                   # Hero photo + grayscale section photos (AVIF/WebP/JPEG)
├── videos/                   # Silent grayscale loop (WebM/MP4) + poster used by SectionVideo.svelte
│                             #   hero-cameroon-* (full-colour hero photo), cta-code-* (contact section)
├── logo-512.png              # Logo referenced by JSON-LD
└── og-image.png              # 1200x630 social share image
```

---

## 🎨 Theme Tokens

Colours live as RGB-channel CSS variables in `src/app.css` (`--ds-*`, with overrides under `:root.light`) and are exposed to Tailwind as `ds-*` colours, so opacity modifiers like `bg-ds-accent/10` work. Use the semantic classes instead of raw Tailwind colours:

| Class | Use for |
| --- | --- |
| `text-ds-fg` / `text-ds-fg-muted` / `text-ds-fg-subtle` | headings / body copy / captions |
| `bg-ds-bg`, `bg-ds-surface`, `bg-ds-elevated`, `border-ds-border` | page, cards, raised elements, borders |
| `text-ds-accent`, `text-ds-accent-2` | accent labels and links |
| `bg-ds-primary text-ds-on-primary hover:bg-ds-primary-hover` | primary buttons |
| `ds-success`, `ds-warning`, `ds-danger` | status colours |

Every text/background pairing meets WCAG AA (4.5:1) in both dark and light mode.

The look is "Yaoundé Dusk", inspired by railway.com: a deep purple-night background (`#13111C`), a lilac accent, a sun-yellow second accent and purple (`#553F83`) buttons, with IBM Plex Serif headings. Light mode uses a warm oatmeal background with a deeper purple. The hero is an inset rounded panel with a CSS dusk sky and twinkling stars (`sky`), a painted Mount Cameroon sunset (`HeroLandscape.svelte`, inline SVGs coloured by the `--ls-*` tokens, so light mode shows a daytime version; the animated glow, clouds and birds are separate stacked `<svg>` layers so their animations run on the compositor), an animated "DevSafe console" (`HeroDemo.svelte`: Audit, Build, Ship and Protect stages that cycle every 6.5s, pause on hover, off-screen or with the pause button, and stay static under reduced motion), the Cameroon hero photo as the landscape, and the proof grid plus a stack marquee (`TrustStrip.svelte`). Section headers use the `eyebrow` utility (glowing lilac dot plus a numbered mono label), and `ds-divider` draws a glowing node with a fading lilac line. Other helpers: `dot-grid`, `marquee` / `marquee-track` and the `rise-in` keyframe. `app.css` also has a few cultural motif utilities, all original SVGs:

| Class | What it draws |
| --- | --- |
| `pattern-bg` | Faint Ndop-cloth diamond lattice behind a section (content must be `relative z-10`) |
| `toghu-band` | Toghu embroidery strip in dusk tones (lilac braid with green, red and yellow stitches), used under the navbar (`toghu-band toghu-band--nav`, a slimmer 10px version) and above the footer, so it frames the page |
| `cm-rule` | Lilac rule ending in a small green, red and yellow tick under section headings; draws in on scroll where supported |
| `cm-flag` | Tiny Cameroon flag used in the hero badge and footer |

The logo (`src/lib/assets/devsafe-logo.svg`) is a hand-built SVG: a purple shield with a dark core, the DS monogram crossed by a circuit trace, a Cameroon flag ribbon and a Toghu zigzag at the point. It works on both themes, so there is a single file. `static/favicon.svg`, `favicon.png`, `apple-touch-icon.png`, `logo-512.png` and `og-image.png` are all rendered from it; regenerate them if the logo changes.

The flag colours (`--cm-green`, `--cm-red`, `--cm-yellow`) are decorative only; never use them for text. Keep them scarce (logo, hero badge, heading ticks, footer stitches, OG stripe) so they read as a signature rather than decoration.

The site defaults to dark mode; light mode only applies after a visitor picks it with the theme toggle (saved in `localStorage` and applied in `app.html` before first paint).

The hero photo (`hero-cameroon-*`) sits below the painted horizon: 3:2 on mobile and 16:8 on desktop, with the Reunification monument and statue in view. CSS colour-grades it to dusk (a soft-light purple wash, a warm glow on the sun side and darker top and bottom edges; gentler in light mode), so the original files stay untouched. Other photos stay on-palette by shipping them in grayscale and tinting them in CSS with `mix-blend-mode: luminosity` over `ds-bg` (`src/lib/components/SectionPhoto.svelte`, used by the contact section; on mobile it is shown at its natural ratio instead of cropped). To add or replace a photo, export `{name}-{width}.avif|webp` for two widths plus `{name}-{smallWidth}.jpg`:

```bash
vips thumbnail source.jpg tmp.v 2400 && vips colourspace tmp.v gray.png b-w
avifenc -q 50 --yuv 400 gray.png static/images/cta-code-1920.avif
```

Background videos (`SectionVideo.svelte`) use the same tint. They have no audio track and are skipped for visitors with reduced motion or Save-Data enabled, who see the poster instead. The video only loads near the viewport and pauses off-screen. Encode as `{name}-loop.webm|mp4` plus `{name}-poster.avif|webp|jpg`:

```bash
ffmpeg -i trimmed.mp4 -an -vf "fps=24,hue=s=0" -c:v libvpx-vp9 -crf 50 -b:v 0 static/videos/workshop-loop.webm
ffmpeg -i trimmed.mp4 -an -vf "fps=24,hue=s=0" -c:v libx264 -crf 28 -preset veryslow -pix_fmt yuv420p -movflags +faststart static/videos/workshop-loop.mp4
```

## 🌍 Translations

English (`src/lib/data/content/en.ts`) defines the content shape. The French file is typed as `SiteContent`, so `npm run check` fails if a key is missing from `fr.ts`.

- **Edit copy:** change the string in both `en.ts` and `fr.ts`.
- **Add a string:** add it to `en.ts`, add the translation to `fr.ts`, then read it in a component with `const c = $derived(t())`.
- **French typography:** use `’` for apostrophes and a non-breaking space (U+00A0) before `: ? !` and inside `« »`.

- **Add a service or project page:** give the item a `slug` in `en.ts` and `fr.ts`, add the slug to `ServiceSlug` or `ProjectSlug` in `types.ts`, then add its page copy under `services` or `projects` in `details/en.ts` and `details/fr.ts`. The route, prerender entries, sitemap URLs and JSON-LD pick it up from the slug.
- **Links to home sections:** use `sectionHref('#services', lang, pathname)` so `#anchor` links from a sub-page point back to `/#services` or `/fr#services`. `#contact` stays local because every page ends with the consultation form.

Visitors are never redirected based on browser language; they choose with the toggle, and search engines pick the right version from the `hreflang` tags.

## 🗺️ Sitemap

Routes are registered in `src/lib/seo/sitemap-routes.ts`:

- **Static pages:** add `{ path: '/services', changefreq: 'weekly', priority: 0.8 }` to `staticRoutes`.
- **Collections** (case studies, docs, …): add a `dynamicSources` entry with the route pattern (e.g. `/work/[slug]`) and a `load()` that returns one entry per item. `load` may be async (CMS/API).

A registered route is only published once its `+page.svelte` exists, so the sitemap never lists a 404. The build log prints `[sitemap] not yet published (no page): …` for routes still waiting on a page. `/services`, `/about` and `/contact` are pre-registered; `/services/[slug]` and `/work/[slug]` are published.

Pages under `src/routes/[[lang=lang]]/` are published in English and French with hreflang alternates. Pages outside it are English-only. Give each page a `<Seo path="/your-path" lang={c.meta.lang} />`; because `prerender.origin` is set in `svelte.config.js`, its hreflang links make the prerenderer build the French version too.

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
