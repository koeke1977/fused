# Fused website architecture

- Astro static site deployed to Cloudflare Workers.
- TypeScript for application and content logic.
- CSS only in focused files under src/styles.
- Astro files own semantic markup and minimal imports/data wiring.
- Pages compose focused components; content is kept in Sanity for projects.
- Sanity Studio is configured in the repository root and uses the schemas in sanity/schemas.
- The Studio is deployed separately on Sanity hosting; it is not embedded in the public Astro website.
- The public site reads published project documents from the public production dataset through the Sanity CDN using a read-only client.
- No write token is used by the public website. Editing remains behind Sanity authentication.
- Existing project data in src/data/projects.ts is a temporary fallback until the two current portfolio entries have been created and published in Sanity.
- Business identity and contact details are centralized in src/data/legal.ts and reused by site data and legal pages.
- Legal information is published at /juridisch/ and the privacy statement at /privacy/.
- Shared page metadata is managed by BaseLayout.astro.
- Temporary design domain: www.electrafest.be. Intended production domain: www.fused.be.
- Temporary deployment must remain noindex until the real Fused domain is ready; remove the preview noindex only as part of the production launch checklist.
- The privacy statement is an initial draft. Confirm actual hosting, email delivery, retention periods, cookies/analytics and contact-form processing before enabling the form or public launch.
- Read AGENTS.md before every code change.