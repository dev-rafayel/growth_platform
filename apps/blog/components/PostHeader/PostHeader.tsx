import Image from 'next/image';
import type { PostHeaderProps } from './types';

export function PostHeader({ 
  title, 
  excerpt, 
  date, 
  cover, 
  category, 
  author 
}: PostHeaderProps) {
  return (
    <header className="post-header">
      <div className="post-meta">
        {category && <span>{category}</span>}
        <time dateTime={date.iso}>{date.label}</time>
      </div>
      <h1 className="post-title">{title}</h1>
      {excerpt && <p className="post-excerpt">{excerpt}</p>}
      {author && (
        <p className="post-author">
          {author.avatar && (
            <Image 
              className="post-author-avatar" 
              src={author.avatar.src} 
              alt="" 
              width={40} 
              height={40} 
            />
          )}
          <span>By {author.name}</span>
        </p>
      )}
      {cover && (
        <Image 
          className="post-cover" 
          src={cover.src} 
          alt={cover.alt} 
          width={cover.width} 
          height={cover.height} 
          sizes="(max-width: 1100px) 100vw, 1100px" priority 
        />
      )}
    </header>
  );
}
