import React from 'react';
import styles from './House.module.css';

const House = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.house}>Casa</h1>
      <p className={styles.houseP}>
        A casa é espaçosa e hospeda 6 pessoas confortavelmente, tendo área de lazer externa com churrasqueira e banheiro completo e ar condicionado em todos os quartos. Cozinha totalmente equipada.
        A 5 minutos de distância da Praia de Arraial do Cabo.
      </p>
    </section>
  );
};

export default House;
