import { expect, test } from "@playwright/test";

const route = "/projects/hevt-vehicle-integration-and-serviceability";

test("integration page leads with the Lyriq and moves directly into the smaller projects", async ({ page }) => {
  await page.goto(route);

  await expect(page.getByRole("heading", { level: 1, name: "HEVT Vehicle Integration & Serviceability" })).toBeVisible();
  await expect(page.getByAltText("Side profile of a Cadillac LYRIQ electric SUV in New York City")).toBeVisible();
  await expect(page.getByText("Small parts, vehicle-level consequences")).toHaveCount(0);
  await expect(page.getByText("Design around the vehicle that already exists")).toHaveCount(0);

  const chapters = page.locator("article");
  await expect(chapters).toHaveCount(3);
  await expect(chapters.nth(0)).toHaveAttribute("id", "camera-mount");
  await expect(chapters.nth(1)).toHaveAttribute("id", "hood-release");
  await expect(chapters.nth(2)).toHaveAttribute("id", "rear-cover-plate");
  await expect(chapters.nth(0)).toContainText("breaking halfshafts");

  const pageWidth = await page.evaluate(() => ({
    content: document.documentElement.scrollWidth,
    viewport: document.documentElement.clientWidth,
  }));
  expect(pageWidth.content).toBeLessThanOrEqual(pageWidth.viewport + 1);
});
