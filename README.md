# Upload UI Evidence — Playwright demo

[![Playwright UI evidence demo](https://github.com/mtzack-org/upload-ui-evidence-playwright-demo/actions/workflows/playwright.yml/badge.svg)](https://github.com/mtzack-org/upload-ui-evidence-playwright-demo/actions/workflows/playwright.yml)

A minimal, runnable example of
[`mtzack-org/upload-ui-evidence@v1`](https://github.com/marketplace/actions/upload-ui-evidence).
The workflow runs a real Playwright test, records a screenshot, video, HTML report, and trace, then
uploads them to a private UI Evidence Portal. The final Job Summary contains a direct link to the
Portal run.

## See it run

Open the [latest workflow runs](https://github.com/mtzack-org/upload-ui-evidence-playwright-demo/actions/workflows/playwright.yml), then open the `test` Job Summary.

The separate [local run API smoke](https://github.com/mtzack-org/upload-ui-evidence-playwright-demo/actions/workflows/local-run.yml)
registers a `source: local` payload without GitHub Actions run identifiers. It verifies that local
test clients can register metadata directly with the same Portal API.

## Use it in your repository

1. [Deploy the Portal](https://github.com/mtzack-org/ui-evidence-portal).
2. Add `UI_EVIDENCE_PORTAL_URL` as a repository variable and `UI_EVIDENCE_INGEST_TOKEN` as a
   repository secret.
3. Copy [`.github/workflows/playwright.yml`](.github/workflows/playwright.yml).

The demo page is created locally with `page.setContent`, so the test does not depend on an external
website.

## Local run

```bash
npm ci
npx playwright install chromium
npm test
```

## License

GNU Affero General Public License v3.0 only (`AGPL-3.0-only`).
