import Image from 'next/image';
import Link from 'next/link';
import type { AuctionRowProps } from './types';
import { AuctionTime } from './AuctionTime';

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
    <section>
      <h2>{title}</h2>
      {link && (
        <Link 
          href={link.url}>
          {link.text}
        </Link>
      )}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
        gap: 24,
      }}>
        {items.map((card) => (
          <article
            key={card.id}
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
              <span>{card.category}</span>
              <Link
                href={card.url}>
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
                <span>
                  {source === 'newest' ?
                    'Starting bid' : `${card.bidCount ?? 0} bids`}
                </span>
                <span>
                  {card.price !== null ? priceFormat.format(card.price) : '—'}
                </span>
              </div>
              <AuctionTime />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}