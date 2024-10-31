'use client';

import styles from './styles.module.sass';

import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

import { Category } from '@/types/Category';

interface Props {
  data: Category[];
  selectedCategories: string[];
}

const Filters = ({ data, selectedCategories }: Props) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChange = (category: string) => {
    const params = new URLSearchParams(searchParams);
    let categories = selectedCategories;

    if (selectedCategories.includes(category)) {
      categories = categories.filter((c) => c !== category);
    } else {
      categories = [...categories, category];
    }

    if (categories.length > 0) {
      params.set('categories', categories.join(','));
    } else {
      params.delete('categories');
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className={styles.filters}>
      <h4>Filters</h4>
      <FormGroup className={styles.list}>
        {data.map((category, index) => (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                color='default'
                checked={selectedCategories.includes(category)}
                onChange={() => handleChange(category)}
              />
            }
            label={category}
            sx={{
              '& .MuiSvgIcon-root': { fontSize: 16 },
              '& .MuiTypography-root': { fontSize: 14 },
            }}
          />
        ))}
      </FormGroup>
    </div>
  );
};

export default Filters;
