'use client';

import styles from './styles.module.sass';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <div className={`container ${styles.wrapper}`}>
          <Image
            src='/logo.svg'
            alt=''
            className={styles.logo}
            width={120}
            height={60}
            priority
          />
          <div className={styles.searchbox}>
            <input
              type='text'
              name='search'
              placeholder='Search'
              defaultValue={params.get('query') || ''}
              onChange={(event) => handleSearch(event.target.value)}
            />
            <Image src='/search.svg' alt='' width={20} height={20} />
          </div>
          <div className={styles.favourite}>
            <Link href='/favorites'>
              <Image src='/heart.svg' alt='' width={20} height={20} />
              <span>Favourite</span>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={`container ${styles.wrapper}`}>
          <nav>
            <Link href='/'>Main page</Link>
            <Link href='/delivery'>Delivery</Link>
            <Link href='/contact'>Contact</Link>
            <Link href='/blog'>Blog</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
