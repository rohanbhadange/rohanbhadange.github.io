import { expect, test } from "@playwright/test";

const caseStudies = [
  {
    slug: "hevt-thermal-waiver-pressure-drop-analysis",
    heading: "HEVT Thermal Waiver Pressure-Drop Analysis",
    evidence: "VT added path",
  },
  {
    slug: "stepped-shaft-finite-element-analysis",
    heading: "Stepped Shaft Finite Element Analysis",
    evidence: "0.5 mm fillet mesh",
  },
  {
    slug: "analytical-and-cfd-pipe-elbow-pressure-loss-study",
    heading: "Analytical and CFD Pipe Elbow Pressure-Loss Study",
    evidence: "CFD pressure drop",
  },
];

for (const project of caseStudies) {
  test(`${project.heading} keeps technical evidence inline`, async ({ page }) => {
    await page.goto(`/projects/${project.slug}`);

    await expect(page.getByRole("heading", { level: 1, name: project.heading })).toBeVisible();
    await expect(page.getByText(project.evidence, { exact: true })).toBeVisible();
    await expect(page.getByRole("region", { name: "Project results" })).toHaveCount(0);
    await expect(page.getByText("Figures and documentation")).toHaveCount(0);

    const geometry = await page.evaluate(() => ({ width: document.documentElement.scrollWidth, viewport: document.documentElement.clientWidth }));
    expect(geometry.width).toBeLessThanOrEqual(geometry.viewport + 1);
  });
}
