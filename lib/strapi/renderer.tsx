import type { LandingPage } from "./types";
import { registry } from "./componentRegistry";

export function Renderer(block: LandingPage['sections']) {
  if (!block) {
    console.warn('Sections are empty');
    return null;
  }

}