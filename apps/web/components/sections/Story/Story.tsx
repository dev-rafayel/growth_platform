import Image from 'next/image';
import type { StoryProps } from './types';
import { styles } from './styles';

export function Story(props: StoryProps) {
  return (
    <section className={styles.section}>
      <div className={styles.copy}>
        {props.eyebrow && <p className={styles.eyebrow}>{props.eyebrow}</p>}
        <h2 className={styles.title}>{props.title}</h2>
        {props.description && (
          <p className={styles.description}>{props.description}</p>
        )}
      </div>

      {props.image && (
        <div className={styles.figure}>
          <div className={styles.imageFrame}>
            <Image
              src={props.image.src}
              alt={props.image.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className={styles.image}
            />
          </div>
          {props.imageCaption && (
            <p className={styles.caption}>{props.imageCaption}</p>
          )}
        </div>
      )}
    </section>
  );
}