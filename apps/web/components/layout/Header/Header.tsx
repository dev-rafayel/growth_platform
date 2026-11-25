import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import type { HeaderProps } from './types';
import { MobileMenu } from './MobileMenu';
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
  const actions = (signInLink || joinLink) && (
    <>
      {signInLink && (
        <Button href={signInLink.url} variant={signInLink.variant}>
          {signInLink.label}
        </Button>
      )}
      {joinLink && (
        <Button href={joinLink.url} variant={joinLink.variant}>
          {joinLink.label}
        </Button>
      )}
    </>
  );

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
              priority
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

        {actions && <div className={styles.actions}>{actions}</div>}

        <MobileMenu links={navLinks} actions={actions} />
      </div>
    </header>
  );
}
