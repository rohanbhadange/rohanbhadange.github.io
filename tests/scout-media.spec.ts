import { expect, test } from "@playwright/test";

test("Scout case study presents the perception and streaming media in order", async ({ page }) => {
  await page.goto("/projects/scout-autonomous-platform");

  await expect(page.getByRole("heading", { level: 2, name: "Social perception" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: "ZED camera streaming" })).toBeVisible();
  await expect(page.locator('video[aria-label*="Social perception"]')).toBeVisible();
  await expect(page.locator('video[aria-label*="Social perception"] source')).toHaveAttribute("src", "/media/projects/Scout/innovation_social_analysis.mp4");
  await expect(page.getByAltText("Stereolabs ZED 2i stereo camera")).toBeVisible();
  await expect(page.getByAltText("Scout robotic platform photographed in the field")).toBeVisible();
  await expect(page.getByText("Slack-based status and diagnostics without unsafe robot control.")).toHaveCount(0);

  const geometry = await page.evaluate(() => ({ width: document.documentElement.scrollWidth, viewport: document.documentElement.clientWidth }));
  expect(geometry.width).toBeLessThanOrEqual(geometry.viewport + 1);
});
