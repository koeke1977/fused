# Fused website

Modern Dutch-language website for Fused, an electrical installation company.

## Goals

- Present Fused's services to private customers.
- Showcase completed projects through a maintainable portfolio.
- Let the FUSED team manage portfolio content in Sanity without editing source code.
- Keep the public website fast, accessible, responsive and SEO-friendly.
- Deploy the public website from GitHub to Cloudflare.
- Host the content-management Studio separately on Sanity.
- Use `www.electrafest.be` as the temporary public design/preview domain; the intended production domain is `www.fused.be`.

## Technology

- Astro for the public website.
- TypeScript for application logic and content models.
- Sanity for project management and portfolio content.
- GitHub for source control.
- Cloudflare for public website hosting.
- Sanity hosting for the authenticated content Studio.

## Development rules

**Read [AGENTS.md](./AGENTS.md) before making code changes.**

HTML, CSS and TypeScript stay in their dedicated files. CSS belongs in `src/styles`; application logic belongs in TypeScript modules; Astro pages compose markup and data.

## Commands

- `npm run dev`: start the public website locally.
- `npm run check`: run Astro and TypeScript checks.
- `npm run build`: build the public website.
- `npm run studio`: start the Sanity Studio locally.
- `npm run studio:build`: build the Studio.
- `npm run studio:deploy`: deploy the Studio to Sanity hosting.
- `npm run deploy`: deploy the public website to Cloudflare.

## Sanity project

- Project: Fused Website
- Project ID: `ulj7mtyd`
- Dataset: `production`

See [sanity/README.md](./sanity/README.md) for Studio setup and editorial guidance. The public site uses a read-only client; never add a write token to public environment variables.

## Current rollout

The Sanity Studio and project schemas are being connected first. The current portfolio data remains as a temporary fallback until both existing projects have been entered and published in Sanity. Only then should the fallback be removed.

The preview site intentionally remains noindex until the final domain is ready.