// duration between cache refreshes in seconds 
export const REVALIDATE = 60;
export const STRAPI_URL = (process.env.STRAPI_URL || 'http://localhost:1337').replace(/\/$/, '');
