import styles from './page.module.sass';

import { Breadcrumbs } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

import { Product as IProduct } from '@/types/Product';
import instance from '@/utils/instance';
import ProductRating from '@/components/ProductRating';
import FavButton from './FavButton';

interface Props {
  params: Promise<{ id: number }>;
}

const Product = async ({ params }: Props) => {
  const { id } = await params;

  const { data: productData } = await instance.get<IProduct>(`/products/${id}`);

  return (
    <section className={`container ${styles.container}`}>
      <Breadcrumbs
        aria-label='breadcrumb'
        sx={{ fontSize: 14, color: 'black' }}
      >
        <Link href='/'>Main</Link>
        <Link href='/catalog'>Catalog</Link>
        <b>{productData.title}</b>
      </Breadcrumbs>
      <div className={styles.wrapper}>
        <Image
          src={productData.image}
          alt=''
          className={styles.image}
          sizes='100vw'
          width={500}
          height={500}
        />
        <div className={styles.details}>
          <div className={styles.top}>
            <div className={styles.left}>
              <h2>{productData.title}</h2>
              <ProductRating data={productData.rating} />
            </div>
            <div className={styles.right}>
              <FavButton data={productData} />
            </div>
          </div>
          <hr color='#E2E8F0' />
          <div className={styles.bottom}>
            <div className={styles.left}>
              <b>Description</b>
              <p>{productData.description}</p>
            </div>
            <div className={styles.right}>
              <strong>{productData.price} $</strong>
              <button>Купить</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
