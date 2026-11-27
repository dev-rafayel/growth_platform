import { getImageProps } from 'next/image';
import { preload } from 'react-dom';
import type { HeroBackgroundProps } from './types';
import { styles } from './styles';

// Phones in portrait get the tall photo; tablets and up get the wide one.
// The hero box is 600px tall everywhere, so a wide photo on a narrow screen
// would be zoomed in and cropped.
const MOBILE_QUERY = '(max-width: 767px)';
const DESKTOP_QUERY = '(min-width: 768px)';
const SIZES = 'calc(100vw - 48px)';
// A soft painting behind a dark overlay: 60 looks the same as 75
// at about half the file size.
const QUALITY = 60;

export function HeroBackground({
  background,
  mobileBackground,
}: HeroBackgroundProps) {
  const desktop = background ?? mobileBackground;
  if (!desktop) return null;

  const common = {
    alt: desktop.alt,
    fill: true,
    sizes: SIZES,
    quality: QUALITY,
    className: styles.image,
  };
  const { props: img } = getImageProps({
    ...common,
    src: desktop.src,
    loading: 'eager',
    fetchPriority: 'high',
  });
  const mobile =
    mobileBackground && mobileBackground.src !== desktop.src
      ? getImageProps({ ...common, src: mobileBackground.src }).props
      : undefined;

  // <Image priority> used to add these <link rel="preload"> tags;
  // getImageProps doesn't, so we add them. Each device preloads only its photo.
  preload(img.src, {
    as: 'image',
    imageSrcSet: img.srcSet,
    imageSizes: SIZES,
    fetchPriority: 'high',
    media: mobile ? DESKTOP_QUERY : undefined,
  });
  if (mobile) {
    preload(mobile.src, {
      as: 'image',
      imageSrcSet: mobile.srcSet,
      imageSizes: SIZES,
      fetchPriority: 'high',
      media: MOBILE_QUERY,
    });
  }

  return (
    <picture>
      {mobile && (
        <source
          media={MOBILE_QUERY}
          srcSet={mobile.srcSet}
          sizes={SIZES}
        />
      )}
      <img {...img} alt={desktop.alt} />
    </picture>
  );
}
