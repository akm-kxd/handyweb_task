import styles from './page.module.sass';

import { Breadcrumbs } from '@mui/material';
import Link from 'next/link';

import { Category } from '@/types/Category';
import { Product } from '@/types/Product';
import instance from '@/utils/instance';
import Filters from '@/components/Filters';
import Sort from '@/components/Sort';
import ProductCard from '@/components/ProductCard';

export default async function Catalog() {
  const categories = await instance
    .get<Category[]>('/products/categories')
    .then((res) => res.data);
  const products = await instance
    .get<Product[]>('/products')
    .then((res) => res.data);

  return (
    <section>
      <div className={`container ${styles.wrapper}`}>
        <Filters data={categories} />
        <div className={styles.content}>
          <Breadcrumbs
            aria-label='breadcrumb'
            sx={{ fontSize: 14, color: 'black' }}
          >
            <Link href='/'>Main</Link>
            <b>Catalog</b>
          </Breadcrumbs>
          <h3>Catalog</h3>
          <Sort />
          <div className={styles.grid}>
            {products.map((product) => (
              <ProductCard key={product.id} data={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
