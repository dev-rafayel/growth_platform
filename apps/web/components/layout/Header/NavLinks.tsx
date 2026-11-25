import Link from 'next/link';
import type { NavLinksProps, NavItemProps } from './types';
import { styles } from './styles';

export function NavItem({
  label,
  url,
  highlight,
  className = styles.navLink,
}: NavItemProps) {
  const content = (
    <>
      {highlight && 
        <span 
          className={styles.navDot} 
          aria-hidden="true" 
        />}
      {label}
    </>
  );

  // External sites get a plain <a>; Next's <Link> is for our own pages.
  if (url.startsWith('http')) {
    return (
      <a
        href={url}
        className={className}
        target="_blank"
        rel="noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={url} className={className}>
      {content}
    </Link>
  );
}

export function NavLinks({ links }: NavLinksProps) {
  if (links.length === 0) return null;

  return (
    <nav className={styles.nav} aria-label="Main">
      {links.map((link, i) => (
        <NavItem key={`${link.url}-${i}`} 
          {...link}
        />
      ))}
    </nav>
  );
}
