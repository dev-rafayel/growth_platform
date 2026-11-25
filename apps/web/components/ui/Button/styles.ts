import type { ButtonSize, ButtonVariant } from './types';

export const base =
  'inline-flex items-center justify-center gap-2.5 whitespace-nowrap ' +
  'font-semibold transition-colors cursor-pointer ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 ' +
  'focus-visible:outline-accent';

export const sizes: Record<ButtonSize, string> = {
  md: 'h-[46px] text-[15px]',
  lg: 'h-14 text-base',
};

export const variants: Record<ButtonVariant, string> = {
  accent: 'rounded-full bg-accent text-white hover:bg-accent-hover',
  dark: 'rounded-full bg-ink text-bg hover:bg-ink-2',
  navy: 'rounded-full bg-navy text-white hover:bg-navy-hover',
  outline:
    'rounded-full border-[1.5px] border-current ' +
    'hover:bg-ink hover:text-bg',
  text: 'hover:text-accent',
};

export function padding(variant: ButtonVariant, size: ButtonSize) {
  if (variant === 'text') return 'px-3.5';
  return size === 'lg' ? 'px-7' : 'px-[22px]';
}
