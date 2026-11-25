import { HowToSection } from '../types';
import { HowToProps } from '@/components/sections/HowTo/types';

export function mapHowTo(section: HowToSection): HowToProps {
  return {
    title: section.title,
    description: section.description || '',
    steps: (section.steps ?? [])
      .map(({ id, title, description }) => 
        ({ id, title, description })),
  };
}