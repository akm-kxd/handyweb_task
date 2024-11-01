'use client';

import styles from './page.module.sass';

import { redirect } from 'next/navigation';

import { useAppSelector } from '@/store';
import FavouriteCard from '@/components/FavouriteCard';

const FavoritesClient = () => {
  const favorites = useAppSelector((state) => state.favorites.items);

  if (!favorites.length) {
    redirect('/catalog');
  }

  return (
    <div className='container'>
      <h2 className={styles.length}>
        {favorites.length > 1 ? `${favorites.length} items` : `1 item`}
      </h2>
      <div className={styles.items}>
        {favorites.map((product) => (
          <FavouriteCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesClient;
