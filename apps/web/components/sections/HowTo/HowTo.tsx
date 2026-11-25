import type { HowToProps } from './types';
import { styles } from './styles';

export function HowTo({ 
  title, 
  description, 
  steps 
}: HowToProps) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          {title}
        </h2>

        {description && (
          <p className={styles.description}>
            {description}
          </p>
        )}
      </div>
      <ol className={styles.list}>
        {steps.map((step) => (
          <li
            key={step.id}
            className={styles.step}>
            <h3 className={styles.stepTitle}>
              {step.title}
            </h3>
            <p className={styles.stepDescription}>
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}