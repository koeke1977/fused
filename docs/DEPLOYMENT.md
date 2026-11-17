# Deployment

## Local setup
1. Install Node.js LTS.
2. Clone this repository.
3. Run npm install.
4. Run npm run dev.

## Cloudflare
- Build command: npm run build
- Deploy command: npm run deploy
- Worker config: wrangler.jsonc
- Connect GitHub repository koeke1977/fused and production branch main.
- Temporary custom domain: www.electrafest.be
- Later custom domain: www.fused.be

Do not change DNS nameservers or remove existing DNS records without checking current mail and other services first.
