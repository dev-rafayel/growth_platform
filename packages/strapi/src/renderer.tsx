import { Fragment, type ReactNode } from 'react';
import type { Block, Registry } from './types';

type SectionRendererProps<B extends Block> = {
  sections: B[];
  registry: Registry<B>;
};

export function SectionRenderer<B extends Block>({
  sections,
  registry,
}: SectionRendererProps<B>) {
  if (!sections) {
    console.warn('Sections are empty');
    return null;
  }

  return (
    sections.map((block) => {
      const renderFn = registry[block.__component as B['__component']] as
        ((block: B) => ReactNode) | undefined;

      if (!renderFn) {
        console.warn(`No registry entry for ${block.__component}`);
        return null;
      }

      return <Fragment key={`${block.__component}-${block.id}`}>
        {renderFn(block)}
      </Fragment>;
    }));
}
