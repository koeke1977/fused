# Deployment

## Architecture
The public website is generated as static HTML at build time. This keeps the site fast, inexpensive and straightforward to host. Once Sanity is connected, publishing content will trigger a new build so the generated portfolio is refreshed.

## Local setup
1. Install Node.js 22 LTS.
2. Clone this repository.
3. Run `npm install`.
4. Run `npm run dev`.
5. Run `npm run check` and `npm run build` before pushing.

## Cloudflare Workers
- Build command: `npm run build`
- Deploy command: `npm run deploy`
- Worker name: `fused`
- Static assets directory: `./dist`
- Connect GitHub repository `koeke1977/fused` and branch `main` using Workers Builds.
- Temporary custom domain: `www.electrafest.be`
- Later production domain: `www.fused.be`

## Domain safety
Do not change DNS nameservers or remove existing DNS records without checking current mail and other services first.

## Search indexing
The temporary domain stays marked `noindex, nofollow` in the shared page layout. Remove this only as part of the approved production launch on the Fused domain.

## Secrets
Never commit credentials. Configure Sanity project identifiers and any future form secrets through local environment variables and Cloudflare environment variables/secrets.
