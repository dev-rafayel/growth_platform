import Image from 'next/image';
import Link from 'next/link';
import type { AuctionRowProps } from './types';
import { AuctionTime } from './AuctionTime';
import { styles } from './styles';

const priceFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

export function AuctionRow({
  title,
  link,
  items,
  source,
}: AuctionRowProps) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          {title}
        </h2>

        {link && (
          <Link 
            href={link.url} 
            className={styles.link}
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
      <div className={styles.grid}>
        {items.map((card) => (
          <article 
            key={card.id} 
            className={styles.card}
          >
            <div className={styles.imageBox}>
              {card.image && (
                <Image
                  src={card.image.src}
                  alt={card.image.alt}
                  fill
                  sizes="(max-width: 560px) calc(100vw - 48px), (max-width: 1100px) calc(50vw - 36px), 300px"
                  className={styles.image}
                />
              )}
            </div>
            
            <div className={styles.info}>
              <span className={styles.category}>
                {card.category}
              </span>
              
              <Link 
                href={card.url} 
                className={styles.cardTitle}
              >
                {card.title}
              </Link>
            </div>

            <div className={styles.footer}>
              <div className={styles.priceBox}>
                <span className={styles.bidsLabel}>
                  {source === 'newest' ?
                    'Starting bid' : `${card.bidCount ?? 0} bids`}
                </span>
                <span className={styles.price}>
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
