# Fused website architecture

- The public website is an Astro 5 static site deployed through Cloudflare.
- TypeScript owns application and content logic.
- CSS lives in focused files under `src/styles`.
- Astro files own semantic markup and minimal page/component data wiring.
- Pages compose focused components; portfolio projects and services are managed in Sanity.
- The Over Fused brand story is intentionally static in `src/pages/over-fused.astro`; it does not depend on Sanity or a content API.
- Sanity Studio is configured in the repository root and uses the schemas in `sanity/schemas`.
- The Studio is deployed separately on Sanity hosting; it is not embedded in the public Astro website.
- The public site reads published project, service and homepage/contact settings from the public production dataset during the static build.
- The Sanity client currently bypasses the CDN during builds (`useCdn: false`) so the build reads the latest published content from the API.
- No write token is used by the public website. Editing remains behind Sanity authentication.
- Business identity and legal contact details are centralized in `src/data/legal.ts` and reused by site data and legal pages.
- Legal information is published at `/juridisch/` and the privacy statement at `/privacy/`.
- Shared page metadata is managed by `BaseLayout.astro`.
- Temporary design domain: `www.electrafest.be`. Intended production domain: `www.fused.be`.
- Temporary deployment must remain noindex until the real Fused domain is ready; remove the preview noindex only as part of the production launch checklist.
- The privacy statement is an initial draft. Confirm actual hosting, email delivery, retention periods, cookies/analytics and contact-form processing before enabling the form or public launch.
- Read `AGENTS.md` before every code change and follow its mandatory change-and-cleanup rule.
