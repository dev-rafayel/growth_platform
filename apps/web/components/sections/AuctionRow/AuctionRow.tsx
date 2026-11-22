import { Bricolage_Grotesque } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import type { AuctionRowProps } from './types';
import { AuctionTime } from './AuctionTime';

const priceFont = Bricolage_Grotesque({ subsets: ['latin'], weight: ['700'] });
const titleFont = Bricolage_Grotesque({ subsets: ['latin'], weight: ['800'] });

const priceFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

export function AuctionRow({ 
  title, 
  link,
  items,
  source }: 
  AuctionRowProps) {
  return (
    <section
      style={{
        maxWidth: 1320,
        margin: '0 auto',
        padding: '88px 24px 40px',
      }}
    >
      <style href="auction-row" precedence="default">{`
        .auction-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 24px;
        }
        @media (max-width: 1100px) {
          .auction-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (max-width: 560px) {
          .auction-grid { grid-template-columns: minmax(0, 1fr); }
        }
        .auction-img { transition: transform 0.3s ease; }
        .auction-card:hover .auction-img { transform: scale(1.02); }
      `}</style>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 20,
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: 32,
        }}
      >
        <h2
          className={titleFont.className}
          style={{
            margin: 0,
            fontSize: 'clamp(36px, 4.4vw, 60px)',
            lineHeight: 1,
            letterSpacing: '-0.04em',
          }}
        >
          {title}
        </h2>
        {link && (
          <Link
            href={link.url}
            style={{
              fontWeight: 600,
              display: 'flex',
              gap: 8,
              alignItems: 'center',
              borderBottom: '1.5px solid #141414',
              paddingBottom: 2,
            }}
          >
            {link.text}
            <svg
              aria-hidden="true"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          </Link>
        )}
      </div>
      <div className="auction-grid">
        {items.map((card) => (
          <article
            key={card.id}
            className="auction-card"
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 14 }}
          >
            <div style={{
              position: 'relative',
              height: 260,
              borderRadius: 16,
              overflow: 'hidden',
              backgroundColor: '#D9D4CB',
            }}>
              {card.image && (
                <Image
                  className="auction-img"
                  src={card.image.src}
                  alt={card.image.alt}
                  fill
                  sizes="(max-width: 560px) 100vw, (max-width: 1100px) 50vw, 25vw"
                  style={{ 
                    objectFit: 'cover' }}
                />
              )}
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2 }}>
              <span
                style={{
                  fontSize: 12,
                  color: '#5E5B55',
                  letterSpacing: '0.04em',
                }}
              >
                {card.category}
              </span>
              <Link
                href={card.url}
                style={{
                  fontWeight: 600,
                  fontSize: 16,
                  lineHeight: 1.3,
                }}
              >
                {card.title}
              </Link>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              borderTop: '1px solid #DAD6CE',
              paddingTop: 12,
            }}>
              <div style={{ 
                display: 'flex',
                flexDirection: 'column' }}>
                <span style={{ fontSize: 12, color: '#5E5B55' }}>
                  {source === 'newest' ?
                    'Starting bid' : `${card.bidCount ?? 0} bids`}
                </span>
                <span
                  className={priceFont.className}
                  style={{ fontSize: 22, letterSpacing: '-0.02em' }}
                >
                  {card.price !== null ? priceFormat.format(card.price) : '—'}
                </span>
              </div>
              <AuctionTime 
                source={source}
                endsAt={card.endsAt}
                listedAt={card.listedAt}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}