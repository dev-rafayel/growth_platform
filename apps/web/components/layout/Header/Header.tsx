import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import type { HeaderProps } from './types';
import { NavLinks } from './NavLinks';
import { SearchInput } from './SearchInput';
import { styles } from './styles';

export function Header({
  siteName,
  logo,
  navLinks,
  searchPlaceholder,
  signInLink,
  joinLink,
}: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link 
          href="/" 
          className={styles.brand}>
          {logo ? (
            <Image
              src={logo.src}
              alt=""
              width={38}
              height={38}
              className={styles.logo}
              loading="eager"
            />
          ) : (
            <span 
              className={styles.logoFallback} 
              aria-hidden="true">
              {siteName.charAt(0)}
            </span>
          )}
          <span className={styles.siteName}>
            {siteName}
          </span>
        </Link>

        <NavLinks links={navLinks} />

        <SearchInput placeholder={searchPlaceholder} />

        {(signInLink || joinLink) && (
          <div className={styles.actions}>
            {signInLink && (
              <Button 
                href={signInLink.url} 
                variant={signInLink.variant}
              >
                {signInLink.label}
              </Button>
            )}
            {joinLink && (
              <Button 
                href={joinLink.url} 
                variant={joinLink.variant}>
                {joinLink.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
