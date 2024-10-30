import styles from './styles.module.sass';

import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';

import { Category } from '@/types/Category';

interface Props {
  data: Category[];
}

const Filters = ({ data }: Props) => {
  return (
    <div className={styles.filters}>
      <h4>Filters</h4>
      <FormGroup>
        {data.map((category, index) => (
          <FormControlLabel
            key={index}
            control={<Checkbox color='default' />}
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
