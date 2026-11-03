# Portfolio maintenance

- Keep changes in small, related, reviewable commits. Inspect the working tree before editing; preserve unrelated changes.
- Use the existing Next.js static-export architecture and preserve published URLs when broadening a project's presentation.
- Project records in `src/config/` are the website's source of truth. Historical one-time migration scripts must not regenerate or overwrite current content.
- ISAME spans the mechanical system, primarily motion systems and enclosure work. Camera integration is one supporting example, not the whole project.
- Keep claims tied to evidence. Record missing images, demos, results or context for the next pass instead of inventing them.
- Google Drive holds presentation evidence. Native projects stay local. Do not access or use OneDrive.
- Before deployment, run typecheck, lint, the production build, and `npx playwright test --config playwright.static.config.ts tests/recovered-projects.spec.ts`.
- Keep the CI browser gate enabled. Do not bypass a failing gate to publish a change.
- After deployment, confirm the workflow succeeded for the expected commit and check the changed live pages and project index.
- If a published change causes a regression, revert the specific commit with Git and revalidate; do not reset or overwrite unrelated work.
