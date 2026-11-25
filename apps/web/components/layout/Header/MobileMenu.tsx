'use client';

import { useEffect, useState, type MouseEvent } from 'react';
import { usePathname } from 'next/navigation';
import type { MobileMenuProps } from './types';
import { NavItem } from './NavLinks';
import { styles } from './styles';

export function MobileMenu({ links, actions }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  if (links.length === 0 && !actions) return null;

  // Any link tap closes the menu, even when it points to the same page.
  const closeOnLink = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest('a')) {
      setOpen(false);
    }
  };

  return (
    <>
      <button 
        type="button"
        className={styles.burger}
        aria-expanded={open}
        aria-controls='mobile-menu'
        aria-label={open ? 'Close' : 'Open menu'}
        onClick={() => setOpen((val) => !val)}
      >

        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="size-6"
          aria-hidden="true"
        >
          {open ? (
            <path d="M6 6l12 12M18 6L6 18" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      <div
        id="mobile-menu"
        hidden={!open}
        className={styles.mobilePanel}
        onClick={closeOnLink}
      >
        {links.length > 0 && (
          <nav aria-label="Mobile" className={styles.mobileNav}>
            {links.map((link, i) => (
              <NavItem
                key={`${link.url}-${i}`}
                {...link}
                className={styles.mobileNavLink}
              />
            ))}
          </nav>
        )}
        {actions && 
          <div className={styles.mobileActions}>{actions}</div>
        }
      </div>
    </>
  );
}
