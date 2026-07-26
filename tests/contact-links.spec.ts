import { expect, test } from "@playwright/test";

test("contact actions hand visitors to the correct destinations", async ({ page }) => {
  await page.goto("/");

  const contact = page.locator("#contact");
  await expect(contact.getByRole("heading", { name: "Let’s Talk" })).toBeVisible();
  await expect(contact.getByRole("link", { name: "Send an email" })).toHaveAttribute("href", "mailto:rohanbhadange18@gmail.com");
  await expect(contact.getByRole("link", { name: "LinkedIn" })).toHaveAttribute("href", "https://www.linkedin.com/in/rohan-bhadange-696a35235/");
  await expect(contact.getByRole("link", { name: "GitHub" })).toHaveAttribute("href", "https://github.com/rohanbhadange");
});
