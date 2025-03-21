import React from 'react';
import styles from './Banner.module.css';
// import PraiaGrande from '../Assets/praia-grande.webp?react';
import praiaCapa from '../Assets/praiaCapa.jpg?react';


const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        Contato Whatsapp 9999-9999 | e-mail:  blablabla@gmail.com
      </div>
      <div className={styles.carousel}>
        <img src="./src/Assets/praiaCapa.jpg" alt="Praia 1" />  
      </div>
      <span className={styles.msg}>Praia Arraial</span>
      <div className={styles.info}>
      </div>
    </div>

// https://unsplash.com/pt-br/fotografias/mar-azul-sob-o-ceu-azul-durante-o-dia--awuLy3I56c

//https://unsplash.com/pt-br/fotografias/uma-vista-aerea-de-uma-praia-e-do-oceano-M50irPDj9Kc



    // <div className={styles.container}>
    //   <div className={styles.carousel}>
    //     <div className={styles.item}>
    //       <div className={styles.image}>
    //         <img src="./src/Assets/praiaCapa.jpg" alt="Praia 1" />
    //       </div>
    //       <div className={styles.info}>
    //         <span className={styles.msg}>Praia Arraial</span>
    //       </div>
    //     </div>
    //   </div>
    // </div>
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

