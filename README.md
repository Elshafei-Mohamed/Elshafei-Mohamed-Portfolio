# Elshafei Mohamed — Portfolio

Personal portfolio of **Elshafei Mohamed**, a Full Stack Developer building
web products end to end. The site presents my work in a dark, editorial
layout: a typographic hero, an auto-generated index of selected projects,
large project showcases, and a compact archive of earlier work.

**Live site:** https://elshafei-mohamed-portfolio.vercel.app

---

## Features

- Dark-only theme built on custom design tokens (no framework default palette)
- Fully data-driven: projects, skills, and contact info all come from one data file
- Project tiers (`featured` / `more` / `future` / `earlier`) plus an independent
  `showInHero` flag that controls what appears in the hero card
- Skills presented as connected layers of a product stack (Interface → Application → Data → Engineering)
- Working contact form (EmailJS) with spam honeypot
- Self-hosted variable fonts (Inter + JetBrains Mono), zero WebGL, no animation libraries
- Responsive from 375px to desktop, keyboard-accessible, honors `prefers-reduced-motion`

## Tech Stack

| Layer      | Tools                                        |
| ---------- | -------------------------------------------- |
| Framework  | React 19 + Vite 7                            |
| Styling    | Tailwind CSS v4 with custom `@theme` tokens  |
| Fonts      | Inter Variable, JetBrains Mono Variable (self-hosted via Fontsource) |
| Icons      | lucide-react                                 |
| Form       | EmailJS                                      |
| Hosting    | Vercel                                       |

## Getting Started

```bash
# install dependencies
npm install

# start the dev server
npm run dev

# lint and build for production
npm run lint
npm run build

# preview the production build locally
npm run preview
```

The contact form needs three environment variables in a local `.env.local`
(see `.env.example`):

```
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

## How This Portfolio Was Built

1. **Design system first.** All colors, fonts, and radii are defined once as
   Tailwind v4 tokens in `src/index.css` (deep warm background, layered
   surfaces, one accent color). Every component consumes these tokens, so the
   whole site stays visually consistent.
2. **Data over markup.** Nothing about the content is hardcoded into
   components. Projects live in `src/data/portfolioData.js`, and every section
   is rendered by filtering that data:

   ```js
   export const featuredProjects = projects.filter((p) => p.tier === "featured");
   export const heroProjects = projects.filter((p) => p.showInHero);
   ```

   Adding a new project means adding one object — no UI changes required.
3. **Editorial layout.** Sections use numbered mono labels (`01 / Selected Work`),
   large alternating showcases for featured work, and a compact archive for
   earlier builds so history never competes with current ability.
4. **Performance by subtraction.** The original version shipped a Three.js 3D
   hero (~1 MB). It was removed in favor of typography, composition, and CSS
   transitions only. The main JavaScript bundle is ~68 KB gzipped.
5. **Accessibility as a floor.** Skip link, visible focus styles, semantic
   landmarks, labeled links and form fields, reduced-motion support.

## Customizing

- **Add a project:** append an object to `projects` in
  `src/data/portfolioData.js`. Set `tier` to control where it appears in the
  Work section and `showInHero` to control the hero card.
- **Add a skill layer or item:** edit `skillLayers` in the same file.
- **Replace the CV:** overwrite `public/Elshafei-Mohamed-CV.pdf`.
- **Change the look:** adjust the tokens at the top of `src/index.css`.

## Contact

- Email: elshafeibusniss2005@gmail.com
- GitHub: [Elshafei-Mohamed](https://github.com/Elshafei-Mohamed)
- LinkedIn: [Elshafei-Mohamed](https://linkedin.com/in/Elshafei-Mohamed)
