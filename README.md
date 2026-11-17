# Growth Platform

pnpm monorepo for the bidnow.com frontends, built on the Strapi CMS in `growth_cms`.

```
apps/
  web/        Landing pages built from Strapi (bidnow.com)
packages/
  strapi/     Shared Strapi code: fetchStrapi, shared types, mediaUrl, SectionRenderer, webhook handler
  config/     Shared ESLint and TypeScript config
```

Each app keeps its own block types, mappers and registry; only the plumbing lives in `packages/strapi`.

## Run locally

Start Strapi in one terminal:

```sh
cd ../growth_cms
npm run develop
```

Start the apps in another terminal, from the repository root:

```sh
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). The apps read published content from Strapi at `http://localhost:1337`. Environment variables live in each app's own `.env.local` (e.g. `apps/web/.env.local`); see that app's `.env.example`.

Other commands, all run from the root for every workspace:

```sh
pnpm lint
pnpm typecheck
pnpm build
```

## Instant updates from Strapi

Pages are cached and refresh when Strapi reports a change, with an hourly refresh as a fallback. To set it up:

1. Add `REVALIDATE_SECRET=<any long random string>` to the app's `.env.local`.
2. In the Strapi admin, open **Settings → Webhooks → Create new webhook**:
   - **URL:** `http://localhost:3000/api/revalidate` (your site's URL in production)
   - **Headers:** `Authorization` = `Bearer <the same secret>`
   - **Events:** Entry create, update, delete, publish and unpublish, plus Media create, update and delete
