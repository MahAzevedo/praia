import React from 'react';
import styles from './Tourism.module.css';
import CarouselTourism from './CarouselTourism';

const Tourism = () => {
  return (
    <section className={styles.containerTourism}>
      <h1 className={styles.containerTourismH1}>
        - Turismo - 
      </h1>
      <CarouselTourism />
    </section>
  );
};

export default Tourism;