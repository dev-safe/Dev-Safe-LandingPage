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
- **Scroll-Triggered Entrance Animations:** Staggered fly/fade transitions that trigger via a custom Svelte `IntersectionObserver` action as sections enter viewport.
- **Sticky Glassmorphism Header:** Responsive navigation bar with dynamic border borders, and a custom mobile hamburger overlay menu.
- **Client Work vs. Owned Products:** Separate showcase sections for agency client work (e.g. **Eventra**) and DevSafe-owned products (e.g. **BookBridge**), rendered by a shared `ProjectShowcase` component.
- **Centralized Data Layer:** Content and asset links are managed entirely within a single file (`src/lib/data/content.ts`), avoiding hardcoded values inside markup.

---

## 📁 Project Structure

```bash
src/
├── lib/
│   ├── actions/
│   │   └── intersect.ts      # Scroll interaction observer action
│   ├── assets/
│   │   ├── DevSafe_logo.jpg  # Brand logo used for layout/favicon
│   │   └── Founder.jpg       # Profile picture for founder profile
│   ├── components/
│   │   ├── CTABanner.svelte  # Interactive consultation form banner
│   │   ├── Footer.svelte     # Footer links and WhatsApp integration
│   │   ├── Hero.svelte       # Hero layout with floating dashboard card
│   │   ├── Navbar.svelte     # Responsive glass header & mobile drawer
│   │   ├── ProjectCard.svelte     # Single project card with mock code block
│   │   ├── ProjectShowcase.svelte # Reusable section for client work & products
│   │   ├── Services.svelte   # offerings grid with cyan accent borders
│   │   ├── Team.svelte       # Team showcase card grids
│   │   └── WhyDevSafe.svelte # Corporate differentiator grids
│   └── data/
│       └── content.ts        # Centralized copy, tags, and icon mapper
├── routes/
│   ├── +layout.svelte        # Imports global CSS & dynamic logo favicon
│   └── +page.svelte          # Main assembly page with SEO headers
├── app.css                   # Global styles, variables & utility classes
├── app.html                  # HTML shell template
static/
├── favicon.jpg               # Static brand fallback icon
└── robots.txt                # Bot indexing config
```

---

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
