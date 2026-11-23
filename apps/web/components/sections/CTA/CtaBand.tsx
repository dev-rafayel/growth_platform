import { Button } from '@/components/ui/Button';
import type { CtaBandProps } from './types';
import { styles } from './styles';

export function CtaBand({
  title,
  description,
  buttonText,
  buttonUrl,
}: CtaBandProps) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.aside}>
          {description && (
            <p 
              className={styles.description}>
              {description}
            </p>
          )}
          <Button 
            href={buttonUrl} 
            variant="dark" 
            size="lg">
            {buttonText}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.arrow}
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
}
