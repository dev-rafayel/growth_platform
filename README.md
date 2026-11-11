# Growth Platform Frontend

Next.js frontend for the Strapi blog in `growth_platform_strapi`.

## Run locally

Start Strapi in one terminal:

```sh
cd ../growth_platform_strapi
npm run develop
```

Start this frontend in another terminal:

```sh
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The frontend reads published articles from Strapi at `http://localhost:1337`. To use a different Strapi URL, set `STRAPI_URL` in a local `.env.local` file; see `.env.example`.

Create an Article in the Strapi admin at [http://localhost:1337/admin](http://localhost:1337/admin), then publish it. Published articles appear on the journal homepage, with their detail pages at `/articles/{slug}`.

## Instant updates from Strapi

Pages are cached and refresh when Strapi reports a change, with an hourly refresh as a fallback. To set it up:

1. Add `REVALIDATE_SECRET=<any long random string>` to `.env.local`.
2. In the Strapi admin, open **Settings → Webhooks → Create new webhook**:
   - **URL:** `http://localhost:3000/api/revalidate` (your site's URL in production)
   - **Headers:** `Authorization` = `Bearer <the same secret>`
   - **Events:** Entry create, update, delete, publish and unpublish, plus Media create, update and delete
