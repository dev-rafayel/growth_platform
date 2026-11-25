'use client';

import { useId, useRef, useState, type FocusEvent } from 'react';
import { useCloseMenu } from '@/components/hooks';
import { NavItem } from '../NavLinks';
import type { DropDownProps } from './types';
import { styles } from './styles';

export function DropDown({ label, url, links }: DropDownProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();
  const { closeOnLink } = useCloseMenu(open, setOpen, {
    rootRef,
    triggerRef,
  });

  // Tabbing out of the menu closes it.
  const onBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setOpen(false);
    }
  };

  return (
    <div
      ref={rootRef}
      className={styles.root}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={onBlur}
    >
      <button
        ref={triggerRef}
        type="button"
        className={styles.trigger}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        {label}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={open ? styles.chevronOpen : styles.chevron}
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {/* pt-3 on the wrapper bridges the gap, so the mouse can reach
          the panel without leaving the root and closing it. */}
      <div
        id={panelId}
        hidden={!open}
        className={styles.panelWrap}
        onClick={closeOnLink}
      >
        <div className={styles.panel}>
          {links.map((link, i) => (
            <NavItem
              key={`${link.url}-${i}`}
              {...link}
              className={styles.item}
            />
          ))}
          {url && (
            <NavItem
              label="View all"
              url={url}
              highlight={false}
              className={styles.viewAll}
            />
          )}
        </div>
      </div>
    </div>
  );
}
