# Fused content studio

The Sanity Studio is prepared but not connected to a live Sanity project yet.

## Setup
1. Create a Sanity project in the Fused owner's Sanity account.
2. Add the project ID and dataset to local environment variables.
3. Install the Studio dependencies and run the Studio locally.
4. Import the initial service and project content after reviewing it with Fused.

Do not commit API tokens. The public website should use a read-only dataset/token configuration; editor access stays inside Sanity authentication.

## Initial schemas
- Service: title, slug, summary, description, sort order.
- Project: title, slug, service category, summary, description, cover image, gallery, featured flag, publication date.
