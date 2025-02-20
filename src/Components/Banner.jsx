import React from 'react';
import styles from './Banner.module.css';
// import PhotoCapa from '../Assets/fotoCapaThayanaAlvarenga.jpg?react';
import PraiaGrande from '../Assets/praia-grande.webp?react';

const Banner = () => {
  return (
    <div>
        {/* <img className={styles.photoCapa} src={PhotoCapa} alt="Foto de Arraial de Cabo" /> */}
        <img className={styles.photoCapa1} src={PraiaGrande} alt="Foto de Praia Grande"/>
    </div>
  );
};

export default Banner;
