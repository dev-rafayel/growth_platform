import { revalidateTag } from 'next/cache';
import { STRAPI_CACHE_TAG } from '@/lib/strapi/constants';

// Strapi webhook: any content change refreshes every page built from Strapi data.
export async function POST(request: Request) {
  const secret = process.env.REVALIDATE_SECRET;
  if (!secret) return Response.json({ error: 'REVALIDATE_SECRET is not set' }, { status: 500 });
  if (request.headers.get('authorization') !== `Bearer ${secret}`) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  revalidateTag(STRAPI_CACHE_TAG);
  const result = Response.json({ revalidated: true });
  console.log(result);
  return Response.json({ revalidated: true });
}
