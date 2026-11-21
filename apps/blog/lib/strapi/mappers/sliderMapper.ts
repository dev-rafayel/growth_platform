import type { SliderBlock } from '../types';
import type { SliderProps } from '@/components/blocks/Slider/types';
import type { Picture } from '@/components/types';
import { toPicture } from './picture';

export function mapSlider(block: SliderBlock): SliderProps {
  return {
    images: (block.files ?? [])
      .map((file) =>
        toPicture(file))
      .filter((image): image is Picture =>
        image !== null),
  };
}
