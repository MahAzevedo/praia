import React from 'react';
import styles from './Banner.module.css';
import PraiaGrande from '../Assets/praia-grande.webp?react';


const Banner = () => {
  return (
    <img className={styles.photoPraia} src={PraiaGrande} alt="Foto de Praia Grande"/>
  );
};

export default Banner;
