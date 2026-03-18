import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    baseURL: "http://localhost:3000",
    trace: "on-first-retry",
  },
  projects: [
    // Mobile portrait
    {
      name: "mobile-sm",
      use: {
        ...devices["iPhone SE"],
      },
    },
    // Mobile standard
    {
      name: "mobile-std",
      use: {
        ...devices["iPhone 14"],
      },
    },
    // Tablet
    {
      name: "tablet",
      use: {
        ...devices["iPad Mini"],
      },
    },
    // Desktop standard
    {
      name: "desktop",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1280, height: 900 },
      },
    },
    // Large desktop
    {
      name: "desktop-xl",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1920, height: 1080 },
      },
    },
  ],
  webServer: {
    command: "pnpm run build && pnpm run start",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
});
