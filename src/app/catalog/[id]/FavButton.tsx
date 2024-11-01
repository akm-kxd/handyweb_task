'use client';

import { MouseEvent } from 'react';

import { useAppDispatch, useAppSelector } from '@/store';
import { Product } from '@/types/Product';
import {
  addToFavorites,
  removeFromFavorites,
} from '@/store/features/favoritesSlice';
import { HeartFillIcon, HeartIcon } from '@/icons/Heart';

interface Props {
  data: Product;
}

const FavButton = ({ data }: Props) => {
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
    <button onClick={toggleFavorite}>
      Add to favourite {isFavorite ? <HeartFillIcon /> : <HeartIcon />}
    </button>
  );
};

export default FavButton;
