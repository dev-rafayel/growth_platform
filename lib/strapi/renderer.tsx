import type { LandingPage, Section } from './types';
import { componentRegistration } from './registration';
import { Fragment, type ReactNode } from 'react';

export function SectionRenderer({ sections }: { sections: LandingPage['sections'] }) {
  if (!sections) {
    console.warn('Sections are empty');
    return null;
  }

  return (
    sections.map((block) => {
      const renderFn = componentRegistration[block.__component] as 
        (block: Section) => ReactNode;

      if (!renderFn) {
        console.warn(`No registry entry for ${block.__component}`);
        return null;
      }

      return <Fragment key={`${block.__component}-${block.id}`}>
        {renderFn(block)}
      </Fragment>;
    }));
}