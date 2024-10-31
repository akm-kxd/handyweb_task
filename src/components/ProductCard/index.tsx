import styles from './styles.module.sass';

import Link from 'next/link';
import Image from 'next/image';

import { Product } from '@/types/Product';

interface Props {
  data: Product;
}

const ProductCard = ({ data }: Props) => {
  return (
    <div className={styles.card}>
      <button className={styles.favourite}>
        <Image src='/heart.svg' alt='' width={20} height={20} />
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
