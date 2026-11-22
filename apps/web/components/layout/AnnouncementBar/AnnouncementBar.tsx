import type { AnnouncementBarProps } from './types';
import { styles } from './styles';
import Link from 'next/link';

export function AnnouncementBar({
  isLive,
  text,
  link
}: AnnouncementBarProps) {
  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        <p className={styles.message}>
          {isLive &&
            <span 
              className={styles.dot} 
              aria-hidden="true"/>}
          {text}
        </p>
        {link && 
          <Link 
            href={link.url}
            className={styles.link}>
            {link.label}
          </Link>
          
        }
      </div>
    </div>
  );
}