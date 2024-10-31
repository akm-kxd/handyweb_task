import styles from './page.module.sass';

import { Breadcrumbs } from '@mui/material';
import Link from 'next/link';

import { Category } from '@/types/Category';
import { Product } from '@/types/Product';
import instance from '@/utils/instance';
import Filters from '@/components/Filters';
import Sort from '@/components/Sort';
import ProductCard from '@/components/ProductCard';

interface Props {
  searchParams: {
    categories?: string;
    sort?: 'asc' | 'desc';
  };
}

export default async function Catalog({ searchParams }: Props) {
  const { categories, sort } = await searchParams;

  const { data: categoriesList } = await instance.get<Category[]>(
    '/products/categories'
  );
  let { data: productsList } = await instance.get<Product[]>('/products', {
    params: { sort },
  });

  // Фильтруем по категориям на клиенте, так как API не поддерживает множественную фильтрацию
  if (categories) {
    const selectedCategories = categories.split(',');
    productsList = productsList.filter((product) =>
      selectedCategories.includes(product.category)
    );
  }

  return (
    <section>
      <div className={`container ${styles.wrapper}`}>
        <Filters
          data={categoriesList}
          selectedCategories={categories?.split(',') || []}
        />
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
            {productsList.map((product) => (
              <ProductCard key={product.id} data={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
