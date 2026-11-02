import { expect, test } from "@playwright/test";
import { recoveredProjects } from "../src/config/recovered-projects";

for (const project of recoveredProjects) {
  test(`${project.title}: page, media, and responsive layout`, async ({ page }) => {
    const response = await page.goto(`/projects/${project.slug}/`, { waitUntil: "domcontentloaded" });
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1, name: project.title, exact: true })).toBeVisible();
    const images = page.locator("main img");
    await expect(images.first()).toBeVisible();
    for (const image of await images.all()) {
      const source = await image.getAttribute("src");
      expect(source).toBeTruthy();
      const asset = await page.request.get(source!);
      expect(asset.status()).toBe(200);
      expect(asset.headers()["content-type"]).toMatch(/^image\//);
      await expect(image).toHaveAttribute("alt", /\S/);
    }
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(1);
    await expect(page.getByRole("link", { name: /back to projects/i })).toHaveAttribute("href", /^\/projects\/?$/);
  });
}

test("project index discovers the recovered work", async ({ page }) => {
  await page.goto("/projects/", { waitUntil: "domcontentloaded" });
  for (const project of recoveredProjects) {
    await expect(page.locator(`a[href='/projects/${project.slug}'], a[href='/projects/${project.slug}/']`).first()).toBeAttached();
  }
});
