import { styles } from './styles';
import type { TestimonialProps } from './types';

export function Testimonial({ title, description, items }: 
  TestimonialProps) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          {description && (
            <p className={styles.description}>
              {description}
            </p>
          )}
        </div>
      </div>
      <ul className={styles.list}>
        {items.map((item) => (
          <li 
            key={item.id}
            className={item.highlight ? 
              styles.cardHighlight : styles.card}>
                
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <blockquote className={styles.text}>
              {item.text}
            </blockquote>
            <p className={styles.author}>
              {item.author}
            </p>
          </li>
        ))}
      </ul> 
    </section>
  );
}
