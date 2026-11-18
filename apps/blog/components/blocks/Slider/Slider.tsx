import Image from 'next/image';
import type { SliderProps } from './types';

// Horizontal scroll with CSS scroll-snap: swipeable without any client-side JavaScript.
export function Slider({ images }: SliderProps) {
  if (images.length === 0) return null;

  return (
    <div className="slider" role="group" aria-label="Image gallery">
      {images.map((image) => (
        <Image 
          key={image.src} 
          className="slider-image" 
          src={image.src} 
          alt={image.alt} 
          width={image.width} 
          height={image.height} 
          sizes="(max-width: 760px) 85vw, 600px" 
        />
      ))}
    </div>
  );
}
