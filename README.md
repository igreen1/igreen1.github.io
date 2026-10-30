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

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages at https://iangreen.dev. You can also start it by hand from the Actions tab.

One-time repo setup:
1. **Settings → Pages → Build and deployment → Source:** choose **GitHub Actions**.
2. **Settings → Pages → Custom domain:** enter `iangreen.dev` and turn on **Enforce HTTPS**.

`public/CNAME` also contains `iangreen.dev`.

## Theme notes

- Sections are "runs" marked with ski-trail difficulty signs (● green, ■ blue, ◆ black, lodge).
- Experience hangs off a chairlift cable; an altimeter on wide screens counts elevation down as you scroll.
- Snowfall can be toggled from the nav. The choice is remembered, and it's off by default for visitors who prefer reduced motion.
- Light and dark mode follow the visitor's system setting.

## Dependency updates

Dependabot (`.github/dependabot.yml`) opens weekly pull requests: one grouped PR for npm minor and patch updates, a separate PR for each major version, and one for GitHub Actions. `.github/workflows/ci.yml` builds every pull request, so only merge updates whose check passes.
