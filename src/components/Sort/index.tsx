'use client';

import styles from './styles.module.sass';

import { ChangeEvent } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

const Sort = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    params.set('sort', event.target.value);
    replace(`${pathname}?${params.toString()}`);
  };

  const resetSort = () => {
    params.delete('sort');
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className={styles.sort}>
      <select
        name='price'
        id='price'
        defaultValue={params.get('sort') || ''}
        className={styles.select}
        onChange={handleChange}
      >
        <option value='' disabled>
          Price
        </option>
        <option value='asc'>Ascending</option>
        <option value='desc'>Descending</option>
      </select>
      <button onClick={resetSort}>Reset</button>
    </div>
  );
};

export default Sort;
