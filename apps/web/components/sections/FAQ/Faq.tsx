import { FaqProps } from './types';
import { styles } from './styles';

export function FAQ({ title, items }: FaqProps) {
  return (
    <section key={styles.section}>
      <h2 className={styles.title}>
        {title}
      </h2>

      <div className={styles.list}>
        {items.map((item) => (
          <details 
            className={styles.item}
            key={item.id}>
            <summary className={styles.question}>
              {item.question}
              <span 
                className={styles.icon}
                aria-hidden="true">
                +
              </span>
            </summary>
            <p className={styles.answer}>
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
