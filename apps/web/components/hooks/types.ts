import type { RefObject } from 'react';

export type CloseMenuOptions = {
  // Whole menu (trigger + panel). If set, a click outside it closes the menu.
  rootRef?: RefObject<HTMLElement | null>;
  // If set, Escape returns focus here when focus was inside the menu.
  triggerRef?: RefObject<HTMLElement | null>;
};