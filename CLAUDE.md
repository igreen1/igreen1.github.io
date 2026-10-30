# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Ian Green's personal résumé site, served at iangreen.dev. It is a frontend-only single-page app built with Vite, React 19, and TypeScript, with a mountain/ski theme. There is no backend, no router, and no state library. Navigation is plain `#hash` anchors to section ids.

`old_site/` is the previous Create React App version, kept only as reference for content. It is not part of the build, so don't edit it.

## Commands

```sh
npm run dev        # Vite dev server (http://localhost:5173)
npm run build      # tsc -b (type-check only, noEmit) then vite build → dist/
npm run preview    # serve dist/ (port 4173)
```

There are no tests and no linter. `npm run build` is the correctness check: `tsconfig.json` is strict, with `noUnusedLocals` and `noUnusedParameters` enabled.

## Architecture

- **Content and presentation are separate.** All résumé text lives in `src/data.ts`: profile, about paragraphs, clearance, grouped skills, experience roles, education, and projects with category tags. Components only render it. Content updates, such as a new résumé, should normally touch only `data.ts` and `public/assets/`.
- **The résumé PDF** is referenced by `profile.resume` in `data.ts`, currently `/assets/green_resume_2026.pdf`. When a new PDF is added, update that path. `data.ts` is the website's version of what the PDF says, so keep the two consistent. The phone number from the PDF is intentionally left off the site.
- **The ski theme is applied by section.** `Nav.tsx` exports `SECTIONS`, which maps each section id to a trail difficulty (`green` / `blue` / `black` / `lodge`). Each section component passes the same mark to `SectionHeading`, which renders it through `TrailMark.tsx`. When adding or reordering a section, update `SECTIONS` (it drives the nav and active-section highlighting through IntersectionObserver), add the component to `App.tsx`, and give the section a matching `id`.
- **Projects filtering** works from `Project.tags` (type `Category`) and `featured`. The filter buttons come from the `categories` array in `data.ts`, so a new category must be added to both the `Category` union and that array.
- **Animated layers:**
  - `Hero.tsx`: SVG mountain layers with scroll parallax. The foreground slope has speed 0 and its fill is `var(--bg)`, so it blends into the page below.
  - `Snow.tsx`: a fixed canvas. App keeps the on/off state in `localStorage` under the key `snow`, and it defaults to off when the visitor prefers reduced motion.
  - `Altimeter.tsx`: a fixed scroll gauge, shown only at ≥1240px wide and only after the visitor scrolls past the hero.
  All of these respect `prefers-reduced-motion`.
- **Styling** is one global stylesheet, `src/styles.css`, with no CSS modules or Tailwind. Design tokens are CSS custom properties on `:root`. Dark mode redefines the same tokens under `@media (prefers-color-scheme: dark)`, so use the tokens rather than hard-coded colors. The fonts, Big Shoulders Display (`--display`) and Source Sans 3 (`--body`), load from Google Fonts in `index.html`.
- **Icons** are inline SVG components in `Icons.tsx`. There is no icon library.

## Deployment

`.github/workflows/deploy.yml` builds on every push to `main` (or a manual run) and publishes `dist/` with `actions/deploy-pages`. There is no local deploy command. `.github/workflows/ci.yml` runs the same build on pull requests to `main`, and `.github/dependabot.yml` opens weekly update PRs for npm packages (minor and patch bumps grouped into one PR, majors separate) and GitHub Actions. The repo's Pages source must be set to "GitHub Actions", with the custom domain `iangreen.dev` set in the repo settings. `public/CNAME` must stay in place, and `vite.config.ts` uses `base: '/'` because the site is served from the domain root. Static assets in `public/assets/` are referenced by absolute paths such as `/assets/...`.
