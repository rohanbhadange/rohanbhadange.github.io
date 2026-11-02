# Rohan Bhadange — Portfolio

The shared website source for Windows and Ubuntu. Built with Next.js and exported to GitHub Pages by the existing `Deploy GitHub Pages` workflow.

## Develop

Use Node 22, matching CI:

```sh
npm ci
npm run dev
```

## Validate the static site

```sh
npm run typecheck
npm run lint
npm run build
npx playwright install chromium
npx playwright test --config playwright.static.config.ts
```

The static test server is cross-platform. `next start` is not the preview server for this static export.

## Content

Existing portfolio records remain in `src/config/portfolio.ts`. The November 2026 additions are typed records in `src/config/recovered-projects.ts`, rendered by the same dynamic project route and components. Published images are local assets under `public/projects/recovered`.

Original reports, source CAD/code, revision histories and unpublished evidence belong in the private project archive, not in this public repository. Publication assets are snapshots and must not depend on authenticated cloud-drive URLs.

## Two operating systems

Keep one checkout per OS outside Drive/OneDrive. Inspect and preserve dirty/untracked work before pulling. Exchange website changes through Git commits. Use `git pull --ff-only` only on a clean, compatible branch; preserve divergent Ubuntu work on a recovery branch before reconciling it.

Pushing to `main` deploys the static export through GitHub Actions. The old Windows `portfolio` repository is historical content and should not replace this checkout.
