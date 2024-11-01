import styles from './styles.module.sass';

import Image from 'next/image';
import Link from 'next/link';

import { Product } from '@/types/Product';
import { useAppDispatch } from '@/store';
import { removeFromFavorites } from '@/store/features/favoritesSlice';

interface Props {
  data: Product;
}

const FavouriteCard = ({ data }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <Image
          src={data.image}
          alt=''
          sizes='100vw'
          width={200}
          height={200}
          priority
        />
        <div>
          <p>{data.category}</p>
          <h3>
            <Link href={`/catalog/${data.id}`}>{data.title}</Link>
          </h3>
        </div>
      </div>
      <div className={styles.right}>
        <strong>{data.price} $</strong>
        <button onClick={() => dispatch(removeFromFavorites(data.id))}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default FavouriteCard;
