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

test("project index discovers and opens the recovered work", async ({ page }) => {
  // This journey renders the index, a case study, and the index again.
  test.setTimeout(90_000);
  await page.goto("/projects/", { waitUntil: "domcontentloaded" });
  const desktop = page.viewportSize()!.width >= 768;
  const collection = desktop ? page.getByTestId("project-catalog") : page.getByTestId("unfurling-gallery");
  await expect(collection).toBeVisible();
  for (const project of recoveredProjects) {
    await expect(collection.locator(`a[href='/projects/${project.slug}'], a[href='/projects/${project.slug}/']`).first()).toBeVisible();
  }
  const isame = collection.locator("a[href='/projects/isame-camera-integration'], a[href='/projects/isame-camera-integration/']").filter({ visible: true }).first();
  await isame.scrollIntoViewIfNeeded();
  await isame.click();
  await expect(page.getByRole("heading", { level: 1, name: "ISAME Motion Systems and Enclosure" })).toBeVisible();
  await page.getByRole("link", { name: /back to projects/i }).click();
  await expect(page).toHaveURL(/\/projects\/?$/);
});

test("ISAME describes motion systems and enclosure as the primary contribution", async ({ page }) => {
  await page.goto("/projects/isame-camera-integration/", { waitUntil: "domcontentloaded" });
  await expect(page.getByRole("heading", { level: 1, name: "ISAME Motion Systems and Enclosure" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Motion systems within the mechanical assembly." })).toBeVisible();
  await expect(page.getByRole("heading", { name: "An enclosure that works with the system inside it." })).toBeVisible();
  await expect(page.getByText("My ISAME work spans the mechanical system", { exact: false })).toBeVisible();
});
