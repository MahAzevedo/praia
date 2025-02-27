import React from 'react';
import styles from './House.module.css';

const House = () => {
  return (
    <section className={styles.containerHouse}>
      <h1 className={styles.houseH1}> - Casa - Fotos & Vídeos - </h1>
      <ul className={styles.houseSlider}>
        <li>Aqui entra um COMPONENTE DE SLIDER carrossel</li>
      </ul>
    </section>
  );
};

export default House;
