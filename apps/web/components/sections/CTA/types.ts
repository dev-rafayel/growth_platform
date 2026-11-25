import type { ButtonLinkFields } from '@/lib/strapi/types';

export type CtaBandProps = {
  title: string;
  description: string;
  link: ButtonLinkFields | null;
};
