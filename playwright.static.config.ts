import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 60_000,
  // The serial suite takes about 12 minutes on a software-rendered CI runner.
  // Keep a bounded total budget with room for all three viewport projects.
  globalTimeout: 20 * 60_000,
  fullyParallel: false,
  // Avoid competing software-rendered WebGL contexts on Windows and CI.
  workers: 1,
  reporter: [["list"]],
  use: {
    baseURL: "http://127.0.0.1:3200",
    // Keep normal Chromium rendering. Forcing GPU off makes the decorative
    // shader compete with assertions on software-only runners.
    trace: process.env.CI
      ? { mode: "retain-on-failure", screenshots: false, snapshots: true, sources: true }
      : "off",
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
