import type { ReactNode } from 'react';
import type { LinkVariant } from '@growth/strapi';

export type ButtonVariant = LinkVariant;
export type ButtonSize = 'md' | 'lg';

export type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  href?: string; 
  type?: 'button' | 'submit';
  onClick?: () => void;
};

export type LandingPageViewProps = {
  // Strapi slug of the landing-page entry
  slug: string;
  // Public path for the canonical URL: '' for the home page
  path: string;
};
