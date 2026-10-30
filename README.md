# iangreen.dev

My personal résumé site: a single-page, frontend-only app built with Vite, React, and TypeScript, with an alpine/ski theme.

## Develop

```sh
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check and build to dist/
npm run preview    # serve the production build
```

## Editing content

All résumé content (bio, experience, education, skills, projects) is in `src/data.ts`.
Images and the résumé PDF are in `public/assets/`. To update the résumé, add the new PDF there and point `profile.resume` in `src/data.ts` at it.

## Deploy (GitHub Pages)

`public/CNAME` keeps the custom domain `iangreen.dev`.

```sh
npm run deploy     # builds, then pushes dist/ to the gh-pages branch
```

## Theme notes

- Sections are "runs" marked with ski-trail difficulty signs (● green, ■ blue, ◆ black, lodge).
- Experience hangs off a chairlift cable; an altimeter on wide screens counts elevation down as you scroll.
- Snowfall can be toggled from the nav. The choice is remembered, and it's off by default for visitors who prefer reduced motion.
- Light and dark mode follow the visitor's system setting.
