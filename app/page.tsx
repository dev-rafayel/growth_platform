import Link from 'next/link';
import { getArticles, mediaUrl, relation } from '@/lib/strapi';

function dateLabel(date?: string | null) {
  if (!date) return 'Recently published';
  return new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(date));
}

export default async function HomePage() {
  const { articles, connected } = await getArticles();
  const [featured, ...rest] = articles;

  return (
    <main>
      <section className="intro-band">
        <div className="intro-inner">
          <p className="eyebrow"><span className={`status-dot ${connected ? 'is-live' : ''}`} />{connected ? 'LIVE FROM STRAPI' : 'STRAPI OFFLINE'}</p>
          <h1>Ideas worth<br /><em>growing.</em></h1>
          <p className="intro-copy">Notes on people, progress, and the small things that move us forward.</p>
          <div className="intro-index">VOL. 01 <span>·</span> THE JOURNAL</div>
        </div>
        <div className="intro-art" aria-hidden="true">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-sun" />
          <div className="art-label">GROW<br />SLOW</div>
          <span className="art-number">01</span>
        </div>
      </section>

      <section className="journal-section" aria-labelledby="journal-heading">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE LATEST</p>
            <h2 id="journal-heading">From the journal<span className="heading-period">.</span></h2>
          </div>
          <span className="article-count">{String(articles.length).padStart(2, '0')} STORIES</span>
        </div>

        {!connected ? (
          <div className="empty-state">
            <span className="empty-index">01 / CONNECTION</span>
            <h3>Can’t reach the journal right now.</h3>
            <p>Make sure Strapi is running at <code>localhost:1337</code>, then refresh this page.</p>
          </div>
        ) : articles.length === 0 ? (
          <div className="empty-state">
            <span className="empty-index">01 / FIRST ENTRY</span>
            <h3>The next story starts in the CMS.</h3>
            <p>Create an article in Strapi, then publish it to see it appear here.</p>
            <a className="text-link" href="http://localhost:1337/admin" target="_blank" rel="noreferrer">OPEN STRAPI ADMIN <span aria-hidden="true">↗</span></a>
          </div>
        ) : (
          <div className="story-layout">
            {featured && (
              <article className="featured-story">
                <Link className="featured-image" href={`/articles/${featured.slug || ''}`} style={mediaUrl(featured.cover) ? { backgroundImage: `url("${mediaUrl(featured.cover)}")` } : undefined}>
                  {!mediaUrl(featured.cover) && <span className="image-placeholder">FIELD<br />STUDY <span>№ 01</span></span>}
                  <span className="image-arrow" aria-hidden="true">↗</span>
                </Link>
                <div className="story-meta">
                  <span>{relation(featured.category)?.name || 'Journal'}</span>
                  <span>{dateLabel(featured.publishedAt)}</span>
                </div>
                <h3 className="featured-title"><Link href={`/articles/${featured.slug || ''}`}>{featured.title || 'Untitled story'}</Link></h3>
                <p className="story-description">{featured.description}</p>
                <p className="story-author">WORDS BY <strong>{relation(featured.author)?.name || 'THE EDITORS'}</strong></p>
              </article>
            )}
            <div className="story-list">
              {rest.map((article, index) => (
                <article className="story-row" key={article.documentId || article.id || article.slug}>
                  <span className="row-number">{String(index + 2).padStart(2, '0')}</span>
                  <div className="row-content">
                    <div className="story-meta"><span>{relation(article.category)?.name || 'Journal'}</span><span>{dateLabel(article.publishedAt)}</span></div>
                    <h3><Link href={`/articles/${article.slug || ''}`}>{article.title || 'Untitled story'}</Link></h3>
                    <p>{article.description}</p>
                  </div>
                  <Link className="row-arrow" href={`/articles/${article.slug || ''}`} aria-label={`Read ${article.title || 'story'}`}>↗</Link>
                </article>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}