import type { TestimonialProps } from '@/components/sections/Testimonial/types';
import type { TestimonialSection } from '../types';

export function mapTestimonial(section: TestimonialSection)
:TestimonialProps {
  return {
    title: section.title,
    description: section.description ?? '',
    items: (section.items ?? []).map((item) => {
      return {
        id: item.id,
        title: item.title,
        text: item.text,
        author: item.author,
        detail: item.detail ?? '',
        highlight: item.highlight ?? false,
      };
    }),
  };
}
