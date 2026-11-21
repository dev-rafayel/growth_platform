import { Picture } from '@/components/types';

export type MediaProps =
  | { kind: 'image'; image: Picture }
  | { kind: 'video'; src: string; mime: string }
  | { kind: 'file'; src: string; name: string };
