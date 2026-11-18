import Image from 'next/image';
import Link from 'next/link';
import type { PostCardProps } from './types';

export function PostCard({ 
  slug, 
  title, 
  excerpt, 
  date, 
  cover, 
  category, 
  author 
}: PostCardProps) {
  return (
    <article className="post-card">
      <Link href={`/${slug}`} className="post-card-link">
        <div className="post-card-cover">
          {cover && (
            <Image 
              src={cover.src} 
              alt={cover.alt} 
              width={cover.width} 
              height={cover.height} 
              sizes="(max-width: 760px) 100vw, 33vw" />
          )}
        </div>
        <div className="post-meta">
          {category && <span>{category}</span>}
          <time dateTime={date.iso}>{date.label}</time>
        </div>
        <h2 className="post-card-title">{title}</h2>
        {excerpt && 
          <p className="post-card-excerpt">{excerpt}</p>
        }
        {author && 
          <p className="post-card-author">By {author}</p>
        }
      </Link>
    </article>
  );
}
