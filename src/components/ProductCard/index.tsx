'use client';

import styles from './styles.module.sass';

import { MouseEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Product } from '@/types/Product';
import { useAppDispatch, useAppSelector } from '@/store';
import {
  addToFavorites,
  removeFromFavorites,
} from '@/store/features/favoritesSlice';
import { HeartFillIcon, HeartIcon } from '@/icons/Heart';

interface Props {
  data: Product;
}

const ProductCard = ({ data }: Props) => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorites.items);

  const isFavorite = favorites.some((item) => item.id === data.id);

  const toggleFavorite = (e: MouseEvent) => {
    e.preventDefault();
    if (isFavorite) {
      dispatch(removeFromFavorites(data.id));
    } else {
      dispatch(addToFavorites(data));
    }
  };

  return (
    <div className={styles.card}>
      <button className={styles.favourite} onClick={toggleFavorite}>
        {isFavorite ? <HeartFillIcon /> : <HeartIcon />}
      </button>
      <div className={styles.top}>
        <div>
          <p>{data.category}</p>
          <h4>
            <Link href={`/catalog/${data.id}`}>{data.title}</Link>
          </h4>
        </div>
      </div>
      <Image
        src={data.image}
        alt=''
        className={styles.image}
        sizes='100vw'
        width={500}
        height={500}
      />
      <strong className={styles.price}>{data.price} $</strong>
    </div>
  );
};

export default ProductCard;
