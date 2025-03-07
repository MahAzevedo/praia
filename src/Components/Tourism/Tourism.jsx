import React from 'react';
import styles from './Tourism.module.css';
import SliderTourismPhotos from '../SliderTourismPhotos/SliderTourismPhotos';

const Tourism = () => {
  return (
    <section className={styles.containerTourism}>
        <h1 className={styles.containerTourismH1}>
            - Turismo - 
        </h1>
        <SliderTourismPhotos />
    </section>
  );
};

export default Tourism;