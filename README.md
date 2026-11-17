# Growth Platform

pnpm monorepo for the bidnow.com frontends, built on the Strapi CMS in `growth_cms`.

```
apps/
  web/        Landing pages built from Strapi (bidnow.com)
  blog/       Blog (bidnow.com/blog), a separate Next.js app behind web's /blog rewrite
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

`pnpm dev` starts both apps: web on port 3000 and blog on port 3001. Open [http://localhost:3000](http://localhost:3000) for landing pages and [http://localhost:3000/blog](http://localhost:3000/blog) for the blog: web proxies `/blog/*` to the blog app (Next.js Multi-Zones, see `BLOG_URL` in `apps/web/.env.example`). Links from the blog back to the main site use a plain `<a>`, since `Link` would add the `/blog` base path. The apps read published content from Strapi at `http://localhost:1337`. Environment variables live in each app's own `.env.local` (e.g. `apps/web/.env.local`); see that app's `.env.example`.

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
3. Create a second webhook the same way for the blog, with **URL** `http://localhost:3001/blog/api/revalidate`. Each app has its own cache, so each needs its own webhook.
