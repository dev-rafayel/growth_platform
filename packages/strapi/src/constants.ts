export const REVALIDATE = 3600;
// tag on every Strapi fetch, so one webhook call refreshes all cached Strapi data
export const STRAPI_CACHE_TAG = 'strapi';
export const STRAPI_URL = (process.env.STRAPI_URL || 'http://localhost:1337').replace(/\/$/, '');
export const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN || '';
export const LANDINGS_SSR_URL = (process.env.LANDINGS_SSR_URL || 'http://localhost:3000').replace(/\/$/, '');