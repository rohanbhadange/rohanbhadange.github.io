import { expect, test } from "@playwright/test";

test("Rover case study uses contextual figures instead of a metric strip or gallery", async ({ page }) => {
  await page.goto("/projects/rover-autonomy-simulator");

  await expect(page.getByRole("heading", { level: 1, name: "Rover Autonomy Simulator" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: "From algorithms to actual systems" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: "A complete autonomy loop" })).toHaveCount(0);
  await expect(page.getByText("The simulator gave me a foundation in actual systems")).toBeVisible();
  await expect(page.getByRole("region", { name: "Project results" })).toHaveCount(0);
  await expect(page.getByText("Successful run · telemetry connects the planned path to controller and estimator behavior")).toBeVisible();
  await expect(page.getByText("Failure geometry · the estimated path clears the wall while the rover body does not")).toBeVisible();
  await expect(page.getByText("Figures and documentation")).toHaveCount(0);

  const geometry = await page.evaluate(() => ({ width: document.documentElement.scrollWidth, viewport: document.documentElement.clientWidth }));
  expect(geometry.width).toBeLessThanOrEqual(geometry.viewport + 1);
});
