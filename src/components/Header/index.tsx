import styles from './styles.module.sass';

import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
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
          <form>
            <input type='text' placeholder='Search' />
            <button type='submit'>
              <Image src='/search.svg' alt='' width={20} height={20} />
            </button>
          </form>
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
