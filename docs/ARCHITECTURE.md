# Fused website architecture

- Astro static site deployed to Cloudflare Workers.
- TypeScript for application and content logic.
- CSS only in focused files under src/styles.
- Astro files own semantic markup and minimal imports/data wiring.
- Pages compose focused components; content is kept in src/data until Sanity is connected.
- Sanity will become the source of truth for projects and service content.
- Business identity and contact details are centralized in src/data/legal.ts and reused by site data and legal pages.
- Legal information is published at /juridisch/ and the privacy statement at /privacy/.
- Shared page metadata is managed by BaseLayout.astro.
- Temporary design domain: www.electrafest.be. Intended production domain: www.fused.be.
- Temporary deployment must remain noindex until the real Fused domain is ready; remove the preview noindex only as part of the production launch checklist.
- The privacy statement is an initial draft. Confirm actual hosting, email delivery, retention periods, cookies/analytics and contact-form processing before enabling the form or public launch.
- Read AGENTS.md before every code change.
