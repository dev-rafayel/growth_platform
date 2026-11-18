import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { mediaUrl } from '@growth/strapi';
import { SectionRenderer } from '@growth/strapi/renderer';
import { getPostBySlug } from '@/lib/strapi/posts';
import { mapPostHeader } from '@/lib/strapi/mappers/postMapper';
import { componentRegistration } from '@/lib/strapi/registration';
import { PostHeader } from '@/components/PostHeader/PostHeader';
import type { Props } from './types';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  // seo is optional on posts: fall back to the post's own title and excerpt.
  const title = post.seo?.metaTitle ?? post.title;
  const description = post.seo?.metaDescription ?? post.description ?? undefined;
  const image = mediaUrl(post.seo?.shareImage) ?? mediaUrl(post.cover);

  return {
    title,
    description,
    openGraph: { type: 'article', title, description, publishedTime: post.publishedAt, images: image ? [image] : undefined },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main className="post">
      <PostHeader {...mapPostHeader(post)} />
      <div className="post-body">
        <SectionRenderer 
          sections={post.blocks} 
          registry={componentRegistration} 
        />
      </div>
    </main>
  );
}
