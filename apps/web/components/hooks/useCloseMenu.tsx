import { usePathname } from 'next/navigation';
import { useEffect, type MouseEvent } from 'react';
import type { CloseMenuOptions } from './types';

export function useCloseMenu(
  open: boolean,
  setOpen: (open: boolean) => void,
  { rootRef, triggerRef }: CloseMenuOptions = {},
) {
  const pathname = usePathname();

  // close when the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname, setOpen]);

  // escape and outside clicks
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;

      const focusInside = 
        rootRef?.current?.contains(document.activeElement);
      setOpen(false);
      if (focusInside) triggerRef?.current?.focus();
    };

    const onPointer = (e: PointerEvent) => {
      const root = rootRef?.current;
      if (root && !root.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, [open, setOpen, rootRef, triggerRef]);

  // any tap closes the panel even if route is same
  const closeOnLink = (e: MouseEvent<HTMLElement>) => {
    if ((e.target as HTMLElement).closest('a')) setOpen(false);
  };

  return { closeOnLink };
}
