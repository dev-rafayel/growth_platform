import { notFound } from 'next/navigation';
import { LANDINGS_SSR_URL, mediaUrl } from '@growth/strapi';
import { getPageBySlug } from '@/lib/strapi/pages';
import { getGlobal } from '@/lib/strapi/global';
import { SectionRenderer } from '@growth/strapi/renderer';
import { componentRegistration } from '@/lib/strapi/registration';

export default async function HomePage() {
  const [page, global] = await Promise.all([getPageBySlug('landing-page'), getGlobal()]);
  if (!page) notFound();

  const seo = page.seo ?? 
    global?.defaultSeo;
  const title = seo?.metaTitle ?? 
    global?.siteName;
  const description = seo?.metaDescription ?? 
    global?.siteDescription ?? '';
  const image = mediaUrl(seo?.shareImage);
  const url = seo?.canonicalURL || 
    `${LANDINGS_SSR_URL}/`;
  const robots = `${seo?.noIndex ? 'noindex' : 'index'}, 
  ${seo?.noFollow ? 'nofollow' : 'follow'}`;

  return (
    <main>
      <title>{title}</title>
      <meta 
        name="description" 
        content={description} 
      />
      <link 
        rel="canonical" 
        href={url} 
      />
      <meta 
        name="robots" 
        content={robots} 
      />

      <meta 
        property="og:type" 
        content="website" 
      />
      <meta 
      property="og:title" 
        content={title} 
      />
      <meta 
        property="og:description" 
        content={description} 
      />
      <meta 
        property="og:url" 
        content={url} 
      />
      {image && 
      <meta 
        property="og:image" 
        content={image} 
      />}
      {global?.siteName && 
      <meta 
        property="og:site_name" 
        content={global.siteName} 
      />}
      <meta 
        property="og:locale" 
        content="en_US" 
      />

      <SectionRenderer sections={page.sections} registry={componentRegistration} />
    </main>
  );
}
