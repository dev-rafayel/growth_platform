import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import type { HeroProps } from './types';
import { styles } from './styles';

export function Hero({
  title,
  description,
  buttonText,
  buttonUrl,
  background,
}: HeroProps) {
  return (
    <section className={styles.section}>
      {background && (
        <Image
          src={background.src}
          alt={background.alt}
          fill
          sizes="100vw"
          priority
          className={styles.image}
        />
      )}
      <div
        aria-hidden="true"
        className={styles.overlay}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>
          {title}
        </h1>
        {description && (
          <p className={styles.description}>{description}</p>
        )}
        {buttonText && buttonUrl && (
          <Button
            href={buttonUrl}
            variant="accent"
            className={styles.button}
          >
            {buttonText}
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
          </Button>
        )}
      </div>
    </section>
  );
}
