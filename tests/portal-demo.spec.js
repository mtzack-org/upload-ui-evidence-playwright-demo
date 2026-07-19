import { expect, test } from "@playwright/test";

test("captures UI evidence for a checkout flow", async ({ page }) => {
  await page.setContent(`
    <main style="font: 16px system-ui; max-width: 720px; margin: 64px auto">
      <p style="color: #2563eb; font-weight: 700">UI EVIDENCE DEMO</p>
      <h1>Checkout is ready</h1>
      <p>Playwright captured this page, its video, and its trace.</p>
      <button style="padding: 12px 18px">Place order</button>
    </main>
  `);

  await expect(page.getByRole("heading", { name: "Checkout is ready" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Place order" })).toBeEnabled();
});
