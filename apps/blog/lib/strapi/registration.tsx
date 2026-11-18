import type { Registry } from '@growth/strapi';
import type { ArticleBlock } from './types';
import { mapRichText } from './mappers/richTextMapper';
import { mapQuote } from './mappers/quoteMapper';
import { mapMedia } from './mappers/mediaMapper';
import { mapSlider } from './mappers/sliderMapper';
import { RichText } from '@/components/blocks/RichText/RichText';
import { Quote } from '@/components/blocks/Quote/Quote';
import { Media } from '@/components/blocks/Media/Media';
import { Slider } from '@/components/blocks/Slider/Slider';

export const componentRegistration: Registry<ArticleBlock> = {
  'shared.media': (block) => {
    const props = mapMedia(block);
    return props && <Media {...props} />;
  },
  'shared.rich-text': (block) => 
    <RichText {...mapRichText(block)} />, 
  'shared.quote': (block) => 
    <Quote {...mapQuote(block)} />,
  'shared.slider': (block) => 
    <Slider {...mapSlider(block)} />,
};