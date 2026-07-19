import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  reporter: [["line"], ["html", { open: "never" }]],
  use: {
    browserName: "chromium",
    screenshot: "on",
    trace: "on",
    video: "on",
  },
});
