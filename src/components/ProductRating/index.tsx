'use client';

import styles from './styles.module.sass';

import { Rating } from '@mui/material';

import { Product } from '@/types/Product';

interface Props {
  data: Product['rating'];
}

const ProductRating = ({ data }: Props) => {
  return (
    <div className={styles.rating}>
      <Rating value={data.rate} readOnly size='small' />
      <span>({data.count} rated)</span>
    </div>
  );
};

export default ProductRating;
