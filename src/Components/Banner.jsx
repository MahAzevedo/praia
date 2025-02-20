import React from 'react';
import styles from './Banner.module.css';
// import PhotoCapa from '../Assets/fotoCapaThayanaAlvarenga.jpg?react';
import PraiaGrande from '../Assets/praia-grande.webp?react';
import LogoMarca from '../Assets/logo.png?react';

const Banner = () => {
  return (
    <div>
      <img className={styles.photoLogo} src={LogoMarca} alt="Foto da Logo"/>
    </div>
    <div>
      <img className={styles.photoPraia} src={PraiaGrande} alt="Foto de Praia Grande"/>
    </div>
    
  );
};

export default Banner;
