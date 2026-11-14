import type { LandingPage } from './types';
import { componentRegistration } from './registration';

export function SectionRenderers(block: LandingPage['sections']) {
  if (!block) {
    console.warn('Sections are empty');
    return null;
  }

}