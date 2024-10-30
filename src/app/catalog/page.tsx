import styles from './page.module.sass';

import { Category } from '@/types/Category';
import instance from '@/utils/instance';
import Filters from '@/components/Filters';

export default async function Catalog() {
  const categories = await instance
    .get<Category[]>('/products/categories')
    .then((res) => res.data);

  return (
    <section>
      <div className={`container ${styles.wrapper}`}>
        <Filters data={categories} />
      </div>
    </section>
  );
}
