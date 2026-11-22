import Link from 'next/link';
import type { NavLink } from './types';
import { styles } from './styles';

type NavLinksProps = {
  links: Array<NavLink>;
};

function NavItem({ label, url, highlight }: NavLink) {
  const content = (
    <>
      {highlight && <span className={styles.navDot} aria-hidden="true" />}
      {label}
    </>
  );

  // External sites get a plain <a>; Next's <Link> is for our own pages.
  if (url.startsWith('http')) {
    return (
      <a
        href={url}
        className={styles.navLink}
        target="_blank"
        rel="noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <Link 
      href={url} 
      className={styles.navLink}>
      {content}
    </Link>
  );
}

export function NavLinks({ links }: NavLinksProps) {
  if (links.length === 0) return null;

  return (
    <nav 
      aria-label="Main" 
      className={styles.nav}>
      {links.map((link, i) => (
        <NavItem 
          key={`${link.url}-${i}`} 
          {...link}
        />
      ))}
    </nav>
  );
}
