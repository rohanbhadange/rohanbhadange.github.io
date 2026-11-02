import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: false,
  workers: 2,
  reporter: [["list"]],
  use: {
    baseURL: "http://127.0.0.1:3200",
    launchOptions: { args: ["--disable-gpu"] },
    trace: process.env.CI ? "retain-on-failure" : "off",
    screenshot: "only-on-failure",
  },
  webServer: {
    command: "node tooling/serve-static.mjs",
    url: "http://127.0.0.1:3200",
    reuseExistingServer: false,
    timeout: 30_000,
  },
  projects: [
    { name: "mobile", use: { ...devices["iPhone 13"], browserName: "chromium", viewport: { width: 390, height: 844 } } },
    { name: "tablet", use: { browserName: "chromium", viewport: { width: 768, height: 1024 } } },
    { name: "desktop", use: { browserName: "chromium", viewport: { width: 1440, height: 900 } } },
  ],
});
