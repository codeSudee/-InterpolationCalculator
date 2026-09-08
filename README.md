# Interpolation Calculator

A free, browser-based interpolation calculator. Enter known data points and instantly get step-by-step results for linear, logarithmic, and double (bilinear) interpolation — all processed client-side, with no data leaving your browser.

**Live site:** [interpcalc.com](https://interpcalc.com/)

## Features

- **Linear interpolation** — straight-line estimate between two known points
- **Logarithmic interpolation** — for data that varies linearly with ln(x), e.g. pH, decibels, Richter magnitude
- **Double (bilinear) interpolation** — interpolates across a 2D grid using four corner values (e.g. steam tables)
- Full step-by-step working shown for every result, not just a final number
- Automatically flags results that fall outside the known data range as extrapolated
- Runs entirely in the browser — no sign-up, no server round-trip
- Multi-language support (English, Spanish, French, German, Portuguese, Italian, Japanese, Korean)
- SEO-optimized static pages (About, Privacy Policy, Terms, Contact, FAQ)

## Tech Stack

- [Astro](https://astro.build) — static site generation
- [Tailwind CSS v4](https://tailwindcss.com) — utility-first styling
- TypeScript for the interpolation engine
- [Cloudflare Workers](https://workers.cloudflare.com/) — deployment via Wrangler

## Project Structure

```text
/
├── public/                    # favicons, robots.txt, static assets
├── src
│   ├── components/            # HomePage, InterpolationCalculator, Field, LegalPage, ErrorPage
│   ├── i18n/                  # dictionary, language list, per-locale translations
│   ├── layouts/                # base page layout
│   ├── lib/
│   │   └── interpolation.ts   # linear, logarithmic, and bilinear interpolation logic
│   ├── pages/                 # index, about, contact, privacy, terms, 404/500
│   │   └── {de,es,fr,it,ja,ko,pt}/  # localized routes
│   └── styles/
└── wrangler.jsonc              # Cloudflare deployment config
```

## Commands

All commands are run from the root of the project, from a terminal:

| Command             | Action                                      |
| :------------------- | :------------------------------------------ |
| `npm install`         | Installs dependencies                       |
| `npm run dev`         | Starts local dev server at `localhost:4321` |
| `npm run build`       | Build production site to `./dist/`          |
| `npm run preview`     | Preview the build locally                   |
| `npm run deploy`      | Build and deploy to Cloudflare Workers       |
