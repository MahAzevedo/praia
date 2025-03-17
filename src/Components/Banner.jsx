import React from 'react';
import styles from './Banner.module.css';
// import PraiaGrande from '../Assets/praia-grande.webp?react';
import praiaCapa from '../Assets/praiaCapa.jpg?react';


const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        <div className={styles.item}>
          <div className={styles.image}>
            <img src="./src/Assets/praiaCapa.jpg" alt="Praia 1" />
          </div>
          <div className={styles.info}>
            <span className={styles.msg}>Praia Arraial</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;






















// const Banner = () => {
//   return (
//   <>
//     <img className={styles.photoPraia} src={PraiaGrande} alt="Foto de Praia Grande"/>
//     <img className={styles.praiaCapa} src={praiaCapa} alt="Foto de Praia Grande"/>
//   </> 
//   );
// };

// export default Banner;

