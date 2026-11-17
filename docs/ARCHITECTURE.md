# Fused website architecture

- Astro with the Cloudflare adapter.
- TypeScript for application and content logic.
- CSS only in focused files under src/styles.
- Astro files own semantic markup and minimal imports/data wiring.
- Pages compose focused components; content is kept in src/data until Sanity is connected.
- Sanity will become the source of truth for projects and service content.
- Temporary design domain: www.electrafest.be. Intended production domain: www.fused.be.
- Temporary deployment must remain noindex until the real Fused domain is ready.
- Read AGENTS.md before every code change.
