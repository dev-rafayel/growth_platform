import { notFound } from 'next/navigation';
import { LANDINGS_SSR_URL, mediaUrl } from '@growth/strapi';
import { SectionRenderer } from '@growth/strapi/renderer';
import { getPageBySlug } from '@/lib/strapi/pages';
import { getGlobal } from '@/lib/strapi/global';
import { componentRegistration } from '@/lib/strapi/registration';

type LandingPageViewProps = {
  // Strapi slug of the landing-page entry
  slug: string;
  // Public path for the canonical URL: '' for the home page
  path: string;
};

// Shared by app/page.tsx (slug "home") and app/[slug]/page.tsx.
export async function LandingPageView({
  slug,
  path,
}: LandingPageViewProps) {
  const [page, global] =
    await Promise.all([getPageBySlug(slug), getGlobal()]);
  if (!page) notFound();

  const seo = page.seo ?? global?.defaultSeo;
  const title = seo?.metaTitle ?? global?.siteName;
  const description =
    seo?.metaDescription ?? global?.siteDescription ?? '';
  const image = mediaUrl(seo?.shareImage);
  const url = seo?.canonicalURL || `${LANDINGS_SSR_URL}/${path}`;
  const robots = [
    seo?.noIndex ? 'noindex' : 'index',
    seo?.noFollow ? 'nofollow' : 'follow',
  ].join(', ');

  return (
    <main>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content={robots} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      {image && <meta property="og:image" content={image} />}
      {global?.siteName && (
        <meta property="og:site_name" content={global.siteName} />
      )}
      <meta property="og:locale" content="en_US" />
      <SectionRenderer
        sections={page.sections}
        registry={componentRegistration}
      />
    </main>
  );
}
