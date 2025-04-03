import React from 'react';
import styles from './Carousel.module.css';
// import praiaCapa from '/src/Assets/praiaCapa.jpg?react'; funciona assim também :)
import praiaCapa from '/src/Assets/praiaCapa.jpg'; 
// e funciona assim também :)
import chevron from '/src/Assets/chevron.png';
// import chevron from '/src/Assets/chevron1.png';

const Carousel = () => {
  const handleLeftClick = (event) => {
    event.preventDefault();
  }
  
  const handleRightClick = (event) => {
    event.preventDefault();
  }


  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        <img className={styles.image} src={praiaCapa} alt="Praia de Arraial do Cabo" />
      </div>
      <div className={styles.info}>
        <span className={styles.spanInfo}>
          Foto Aérea da Praia de arraial do Cabo
        </span>
      </div>
      <div className={styles.buttonsContainer}>
        <button className={styles.buttonLeft} onClick={handleLeftClick}>
          <img className={styles.buttonImg} src={chevron} alt="Chevron esquerda" />
        </button>
        <button className={styles.buttonRight} onClick={handleRightClick}>
          <img className={styles.buttonImg} src={chevron} alt="Chevron direita" />
        </button>
      </div>
    </div>
  );
};


export default Carousel;

