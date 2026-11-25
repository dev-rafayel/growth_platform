'use client';

import { useState } from 'react';
import { useCloseMenu } from '@/components/hooks';
import type { MobileMenuProps } from './types';
import { NavItem } from './NavLinks';
import { styles } from './styles';

export function MobileMenu({
  links,
  dropdown,
  actions,
}: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const { closeOnLink } = useCloseMenu(open, setOpen);

  if (links.length === 0 && !dropdown && !actions) return null;

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
        {(links.length > 0 || dropdown) && (
          <nav aria-label="Mobile" className={styles.mobileNav}>
            {dropdown && (
              <div className={styles.mobileGroup}>
                {dropdown.url ? (
                  <NavItem
                    label={dropdown.label}
                    url={dropdown.url}
                    highlight={false}
                    className={styles.mobileNavLink}
                  />
                ) : (
                  <p className={styles.mobileGroupLabel}>
                    {dropdown.label}
                  </p>
                )}
                {dropdown.links.map((link, i) => (
                  <NavItem
                    key={`${link.url}-${i}`}
                    {...link}
                    className={styles.mobileSubLink}
                  />
                ))}
              </div>
            )}
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
