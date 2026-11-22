import { LandingPageView } from '@/components/LandingPageView';

// The home page is the landing-page entry with slug "home" in Strapi.
// /home itself redirects here (see next.config.ts).
export default function HomePage() {
  return <LandingPageView slug="home" path="" />;
}
