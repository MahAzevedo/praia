import React from 'react';
import styles from './TesteCarousel.module.css';

const TesteCarousel = () => {
  return (
    <div className={styles.carousel}>
        <div className={styles.item}>
            <div className={styles.image}>
                <img src="/" alt="Praia" />
            </div>
        </div>
    </div>
  );
};

export default TesteCarousel;

// as fotos do carousel vão vir de uma API que vou criar e se localizão no ITEM

