import { notFound } from 'next/navigation';
import { getPosts } from '@/lib/strapi/posts';
import { mapPostCard } from '@/lib/strapi/mappers/postMapper';
import { PostCard } from '@/components/PostCard/PostCard';
import { Pagination } from '@/components/Pagination/Pagination';
import { Props } from './types';

export default async function BlogPage({ searchParams }: Props) {
  const { page: pageParam } = await searchParams;
  const page = Math.max(1, Number.parseInt(pageParam ?? '1', 10) || 1);

  const { posts, pagination } = await getPosts(page);
  const pageCount = pagination?.pageCount ?? 1;
  if (page > 1 && page > pageCount) notFound();

  return (
    <main className="blog-index">
      <h1 className="blog-index-title">Blog</h1>
      {posts.length === 0 ? (
        <p className="empty-state">No posts yet. Check back soon.</p>
      ) : (
        <div className="post-grid">
          {posts.map((post) => 
            <PostCard key={post.documentId} 
              {...mapPostCard(post)} />)}
        </div>
      )}
      <Pagination page={page} pageCount={pageCount} />
    </main>
  );
}
