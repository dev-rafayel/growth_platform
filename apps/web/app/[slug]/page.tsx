import { LandingPageView } from '@/components/LandingPageView';
import type { Props } from './types';

export default async function LandingPage({ params }: Props) {
  const { slug } = await params;
  
  return <LandingPageView 
    slug={slug} 
    path={slug} 
  />;
}
