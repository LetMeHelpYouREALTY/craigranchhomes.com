# AGENTS.md

## Cursor Cloud specific instructions

Single-product repository: a Next.js 15 (App Router, React 19, Turbopack) marketing/lead-gen
site for "Craig Ranch Vegas Homes". There is **no database, no separate backend, and no
required secrets** — the whole product is the one Next.js process. Standard commands live in
`README.md` and `package.json` scripts; only non-obvious notes are captured here.

### Runtime / package manager
- Use **npm** (repo has `package-lock.json`). Ignore the README's alternate `pnpm install`
  suggestion — there is no pnpm lockfile.
- **Node 22.x** is required (`package.json` `engines.node: "22.x"`), not the "Node 18+" the
  README mentions. The VM's default Node 22 satisfies this.
- `.npmrc` sets `legacy-peer-deps=true`; plain `npm install` already honors it (several deps
  have React 19 peer-range mismatches, so this is needed).

### Running the app
- Dev server: `npm run dev` (Next.js + Turbopack) → http://localhost:3000. It is the only
  service to run; start it in a background/tmux session.
- A harmless startup warning `Invalid next.config.mjs options ... 'swcMinify'` is pre-existing
  and does not affect the app.
- All third-party integrations (RealScout, Homebot, GA/GTM/Facebook Pixel, Google Maps) are
  client-side CDN embeds, and the blog RSS fetch (`/api/blog-posts`) falls back to sample data,
  so the site runs fully with zero env vars and no outbound access.
- The contact/lead form (`/contact`) uses a server action that currently only validates and
  `console.log`s the lead (no email/CRM wired up yet) — a successful submit shows a green
  confirmation and the lead is printed in the dev-server log.

### Lint / type-check / test
- `npm run lint` and `npm run type-check` pass (lint emits one non-blocking Google-font warning).
- Jest config is `jest.config.cjs`. It must keep the `.cjs` extension: the package is
  `"type": "module"`, so a `jest.config.js` using CommonJS `require` crashes with
  `require is not defined`.
- `npm test` runs 25 tests; **3 in `src/lib/utils/__tests__/financial-calculations.test.ts`
  fail** due to pre-existing assertion/expected-value mismatches (NPV and break-even
  occupancy). These are application/test-logic issues, not environment problems.
