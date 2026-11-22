import Link from 'next/link';
import type { ButtonProps } from './types';
import { base, padding, sizes, variants } from './styles';

export function Button({
  children,
  variant = 'accent',
  size = 'md',
  className,
  href,
  type = 'button',
  onClick,
}: ButtonProps) {
  const classes = [
    base,
    sizes[size],
    variants[variant],
    padding(variant, size),
    className,
  ].filter(Boolean).join(' ');

  if (href) {
    return <Link 
      href={href} 
      className={classes}>
      {children}
    </Link>;
  }

  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={classes}>
      {children}
    </button>
  );
}
