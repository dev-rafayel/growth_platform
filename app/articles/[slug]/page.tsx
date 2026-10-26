import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getArticle, mediaUrl, relation } from '@/lib/strapi';

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  return { title: article?.title ? `${article.title} | Fieldnotes` : 'Story | Fieldnotes' };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) notFound();

  const cover = mediaUrl(article.cover);
  const blocks = article.blocks || [];

  return (
    <main className="article-page">
      <Link href="/" className="back-link">← BACK TO JOURNAL</Link>
      <article>
        <header className="article-header">
          <div className="story-meta"><span>{relation(article.category)?.name || 'Journal'}</span><span>{relation(article.author)?.name || 'The Editors'}</span></div>
          <h1>{article.title || 'Untitled story'}</h1>
          {article.description && <p className="article-deck">{article.description}</p>}
        </header>
        <div className={`article-cover ${cover ? 'has-cover' : ''}`} style={cover ? { backgroundImage: `url("${cover}")` } : undefined}>
          {!cover && <span className="image-placeholder">FIELD STUDY <span>GROWTH PLATFORM JOURNAL</span></span>}
        </div>
        <div className="article-body">
          {blocks.length > 0 ? blocks.map((block, index) => {
            const body = typeof block.body === 'string' ? block.body : '';
            const title = typeof block.title === 'string' ? block.title : '';
            return (
              <section className={block.__component === 'shared.quote' ? 'quote-block' : 'content-block'} key={`${String(block.__component)}-${index}`}>
                {title && <h2>{title}</h2>}
                {body && <p>{body}</p>}
                {block.__component === 'shared.slider' && <p className="content-note">Image gallery content is available in Strapi.</p>}
              </section>
            );
          }) : <p className="content-note">This story has no body content yet.</p>}
        </div>
      </article>
      <Link href="/" className="return-link">← MORE FROM THE JOURNAL</Link>
    </main>
  );
}