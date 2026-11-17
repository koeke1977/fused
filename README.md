# Fused website

Modern Dutch-language website for Fused, an electrical installation company.

## Goals

- Present Fused's services to private customers.
- Showcase completed projects through a maintainable portfolio.
- Allow a non-technical site owner to manage projects and website content through a CMS.
- Keep the public website fast, accessible, responsive and SEO-friendly.
- Deploy from GitHub to Cloudflare.
- Use `www.electrafest.be` as the temporary public design/preview domain; the intended production domain is `www.fused.be`.

## Non-negotiable development rules

**Read [AGENTS.md](./AGENTS.md) before making any code changes.**

In particular:
- HTML, CSS and JavaScript/TypeScript must never be mixed.
- CSS lives in separate `.css` files.
- JavaScript/TypeScript lives in separate `.js`/`.ts` files.
- Markup lives in `.astro` components/pages (or dedicated HTML files).
- Files stay small and have one clear responsibility.
- Keep the structure logical, modular and documented.

## Planned stack

- Astro for the website.
- TypeScript for application logic.
- Sanity for content management and portfolio data.
- GitHub for source control.
- Cloudflare for hosting, DNS, TLS and deployment.
- Visual Studio Code and Claude for development.

## Project status

Initial repository setup. The application scaffold, CMS configuration and deployment configuration are not yet installed.
