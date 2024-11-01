import styles from './page.module.sass';

import FavoritesClient from './FavoritesClient';

const Favorites = () => {
  return (
    <section>
      <div className={`container ${styles.heading}`}>
        <h1>Favourite</h1>
      </div>
      <hr color='#E2E8F0' />
      <FavoritesClient />
    </section>
  );
};

export default Favorites;
