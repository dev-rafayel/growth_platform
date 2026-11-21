import Image from 'next/image';
import type { MediaProps } from './types';

export function Media(props: MediaProps) {
  if (props.kind === 'image') {
    const { image } = props;
    return (
      <figure className="media">
        <Image 
          src={image.src} 
          alt={image.alt} 
          width={image.width} 
          height={image.height} 
          sizes="(max-width: 760px) 100vw, 720px" 
        />
      </figure>
    );
  }

  if (props.kind === 'video') {
    return (
      <figure className="media">
        <video controls preload="metadata">
          <source src={props.src} type={props.mime} />
        </video>
      </figure>
    );
  }

  return (
    <p className="media-file">
      <a 
        href={props.src} 
        target="_blank" 
        rel="noreferrer">
        {props.name} 
        <span aria-hidden="true">↗</span>
      </a>
    </p>
  );
}
