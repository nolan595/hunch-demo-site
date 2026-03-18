import { test, expect } from "@playwright/test";

const gameSlug = "money-heist";

// ── Homepage ──────────────────────────────────────────────────────────────
test.describe("Homepage", () => {
  test("loads and shows headline", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("Hunch", { exact: false })).toBeVisible();
  });

  test("shows all game cards", async ({ page }) => {
    await page.goto("/");
    const cards = page.locator("a[href^='/games/']");
    await expect(cards).toHaveCount(3);
  });

  test("no horizontal scroll", async ({ page }) => {
    await page.goto("/");
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const viewportWidth = await page.evaluate(() => window.innerWidth);
    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 2); // 2px tolerance
  });

  test("nav is visible", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("header")).toBeVisible();
  });
});

// ── Game page ──────────────────────────────────────────────────────────────
test.describe("Game detail page", () => {
  test("loads without error", async ({ page }) => {
    await page.goto(`/games/${gameSlug}`);
    // No error boundary or 404
    await expect(page.getByText("Money Heist", { exact: false })).toBeVisible();
  });

  test("shows region stats section", async ({ page }) => {
    await page.goto(`/games/${gameSlug}`);
    await expect(page.getByText("Performance by Market", { exact: false })).toBeVisible();
  });

  test("shows prize breakdown", async ({ page }) => {
    await page.goto(`/games/${gameSlug}`);
    await expect(page.getByText("Prize Structure", { exact: false })).toBeVisible();
  });

  test("shows interactive demo section", async ({ page }) => {
    await page.goto(`/games/${gameSlug}`);
    await expect(page.getByText("Interactive Demo", { exact: false })).toBeVisible();
  });

  test("no horizontal scroll", async ({ page }) => {
    await page.goto(`/games/${gameSlug}`);
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const viewportWidth = await page.evaluate(() => window.innerWidth);
    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 2);
  });

  test("back to all games link works", async ({ page }) => {
    await page.goto(`/games/${gameSlug}`);
    await page.getByText("Back to all games").click();
    await expect(page).toHaveURL("/");
  });
});

// ── Figma embed ────────────────────────────────────────────────────────────
test.describe("Figma prototype embed", () => {
  test("iframe is present on money-heist page", async ({ page }) => {
    await page.goto(`/games/${gameSlug}`);
    // On desktop viewport, phone mockup iframe should be in DOM
    const iframe = page.frameLocator("iframe[title*='Money Heist']");
    // Just check the iframe exists in DOM
    await expect(page.locator("iframe[title*='Money Heist']").first()).toBeAttached();
  });

  test("restart button is visible and clickable", async ({ page }) => {
    await page.goto(`/games/${gameSlug}`);
    const restartBtn = page.getByText("Restart").first();
    await expect(restartBtn).toBeVisible();
    await restartBtn.click();
    // After click, iframe should still be present (key changed = re-mounted)
    await expect(page.locator("iframe[title*='Money Heist']").first()).toBeAttached();
  });
});

// ── Navigation ─────────────────────────────────────────────────────────────
test.describe("Navigation", () => {
  test("clicking game card navigates to game page", async ({ page }) => {
    await page.goto("/");
    await page.locator("a[href='/games/money-heist']").first().click();
    await expect(page).toHaveURL("/games/money-heist");
  });

  test("logo navigates home", async ({ page }) => {
    await page.goto(`/games/${gameSlug}`);
    await page.getByRole("link", { name: /hunch games home/i }).click();
    await expect(page).toHaveURL("/");
  });
});

// ── Accessibility ──────────────────────────────────────────────────────────
test.describe("Accessibility basics", () => {
  test("images have alt text", async ({ page }) => {
    await page.goto(`/games/${gameSlug}`);
    const imgsMissingAlt = await page.evaluate(() => {
      return Array.from(document.querySelectorAll("img"))
        .filter((img) => !img.alt && !img.getAttribute("aria-label"))
        .map((img) => img.src);
    });
    expect(imgsMissingAlt).toHaveLength(0);
  });

  test("links have accessible labels", async ({ page }) => {
    await page.goto("/");
    const anchors = page.locator("a");
    const count = await anchors.count();
    for (let i = 0; i < count; i++) {
      const el = anchors.nth(i);
      const text = await el.textContent();
      const ariaLabel = await el.getAttribute("aria-label");
      expect(text?.trim() || ariaLabel).toBeTruthy();
    }
  });
});
