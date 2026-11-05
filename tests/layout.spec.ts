import { expect, test } from "@playwright/test";

const routes = ["/", "/about", "/projects", "/projects/scout-autonomous-platform"];

for (const route of routes) {
  test(`${route} has no overflow or collisions`, async ({ page }) => {
    await page.goto(route);
    await expect(page.locator("main")).toBeVisible();
    await expect(page.locator("nav[aria-label='Primary navigation']")).toBeVisible();
    const geometry = await page.evaluate(() => ({ width: document.documentElement.scrollWidth, viewport: document.documentElement.clientWidth }));
    expect(geometry.width).toBeLessThanOrEqual(geometry.viewport + 1);
    const nav = await page.locator("nav[aria-label='Primary navigation']").boundingBox();
    expect(nav).not.toBeNull();
    expect(nav!.y + nav!.height).toBeLessThanOrEqual((await page.evaluate(() => innerHeight)) + 1);
  });
}

test("about includes two functional carousels", async ({ page }) => {
  await page.goto("/about");
  for (const id of ["about-carousel-one", "about-carousel-two"]) {
    const carousel = page.getByTestId(id);
    await expect(carousel).toBeVisible();
    const activeImage = carousel.locator('[data-active-slide="true"] img');
    const before = await activeImage.getAttribute("alt");
    await carousel.getByRole("button", { name: "Next image" }).click();
    await expect(carousel.locator('[data-active-slide="true"] img')).not.toHaveAttribute("alt", before ?? "");
  }
});

test("project routes load and invalid static slugs return 404", async ({ page }) => {
  await page.goto("/projects/scout-autonomous-platform");
  await expect(page.getByRole("heading", { level: 1, name: "Scout Autonomous Platform" })).toBeVisible();
  await expect(page.locator("video").first()).toBeVisible();
  const response = await page.goto("/projects/not-a-project");
  expect(response?.status()).toBe(404);
});

test("contact dock link reaches the homepage contact section", async ({ page }) => {
  await page.goto("/projects");
  await page.getByRole("link", { name: "Contact" }).click();
  await expect(page).toHaveURL(/\/#contact$/);
  await expect(page.locator("#contact")).toBeVisible();
});

test("3D enhancement only renders on desktop", async ({ page }) => {
  await page.goto("/");
  const width = await page.evaluate(() => innerWidth);
  if (width >= 1024) await expect(page.getByTestId("model-canvas").locator("canvas")).toBeVisible();
  else await expect(page.getByTestId("model-canvas")).toHaveCount(0);
});

test("signature galleries and sticky documentation render", async ({ page }) => {
  await page.goto("/projects");
  await expect(page.getByTestId("project-catalog")).toBeVisible();
  await expect(page.locator(".project-card").first()).toBeVisible();
  await page.goto("/projects/scout-autonomous-platform");
  await expect(page.getByTestId("sticky-figure-stack")).toBeVisible();
});

test("legacy Scout project URL redirects to the new case study", async ({ page }) => {
  await page.goto("/projects/robotic-end-effector");
  await expect(page).toHaveURL(/\/projects\/scout-autonomous-platform\/?$/);
});

test("Scout-only assembly sequence and technical schematic render responsively", async ({ page }) => {
  await page.goto("/projects/scout-autonomous-platform");
  await expect(page.getByTestId("standard-project-media")).toHaveCount(0);
  await expect(page.getByTestId("technical-schematic")).toBeVisible();
  const width = await page.evaluate(() => innerWidth);
  if (width >= 768) {
    const exploded = page.getByTestId("scout-exploded-view");
    await expect(exploded).toBeVisible();
    await expect(exploded.locator("canvas")).toBeVisible();
    await page.evaluate(() => {
      const el = document.querySelector('[data-testid="scout-exploded-view"]');
      if (el instanceof HTMLElement) scrollTo(0, el.offsetTop + (el.offsetHeight - innerHeight) * 0.5);
    });
    await expect(exploded.locator('[aria-label="Assembly sequence progress"]')).not.toHaveText("00%");
  } else {
    await expect(page.getByTestId("scout-mobile-frames")).toBeVisible();
    await expect(page.getByTestId("scout-exploded-view")).toBeHidden();
  }
});

test("projects index shows one visible Scout project card", async ({ page }) => {
  await page.goto("/projects");
  const count = await page.locator('a[href="/projects/scout-autonomous-platform"]').evaluateAll(links => links.filter(link => {
    const rect = link.getBoundingClientRect();
    const style = getComputedStyle(link);
    return rect.width > 0 && rect.height > 0 && style.display !== "none" && style.visibility !== "hidden";
  }).length);
  expect(count).toBe(1);
});

test("about sliders preserve contained portrait stages", async ({ page }) => {
  await page.goto("/about");
  for (const id of ["about-carousel-one", "about-carousel-two"]) {
    const image = page.getByTestId(id).locator('[data-active-slide="true"] img');
    await expect(image).toHaveCSS("object-fit", "contain");
  }
});

test("homepage experience journey and sitewide shader render", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("#experience")).toBeVisible();
  await expect(page.locator("#experience article")).toHaveCount(4);
  await expect(page.locator("body > canvas")).toBeVisible();
});

test("about masonry preserves the ski-team carousel image without duplication", async ({ page }) => {
  await page.goto("/about");
  const masonry = page.getByTestId("about-masonry");
  await expect(masonry).toBeVisible();
  await expect(masonry.locator("img")).toHaveCount(25);
  await expect(masonry.locator('img[src*="gallery-10"]')).toHaveCount(0);
  await expect(page.getByTestId("about-carousel-two").locator('img[src*="gallery-10"]')).toHaveCount(2);
});
