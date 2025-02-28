import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
      <section className={styles.containerAbout}>
        <h1 className={styles.containerH1}> - Sobre a Casa - </h1>
        <p className={styles.containerP}> A casa é espaçosa e hospeda 6 pessoas confortavelmente, tendo área de lazer externa com churrasqueira e banheiro completo e ar condicionado em todos os quartos. Cozinha totalmente equipada.
        A 5 minutos de distância da Praia de Arraial do Cabo.</p>
      </section>
  );
};

export default About;
