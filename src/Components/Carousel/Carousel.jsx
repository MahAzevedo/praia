import { useEffect, useRef, useState } from 'react';
import styles from './Carousel.module.css';
// import praiaCapa from '/src/Assets/praiaCapa.jpg?react'; funciona assim também :)
import praiaCapa from '/src/Assets/praiaCapa.jpg'; 
// e funciona assim também :)
import chevron from '/src/Assets/chevron.png';
// import chevron from '/src/Assets/chevron1.png';

import image1 from '/src/Assets/praiaCapa.jpg';
import image2 from '/src/image/praia06.avif';
import image3 from '/src/image/praia07.avif';
import image4 from '/src/image/praia08.avif';
import image5 from '/src/image/praia09.avif';

// src\image\praia06.avif

const Carousel = () => {
  const [data,setData] = useState([]);

  useEffect(() => {
    fetch('https://unsplash.com/pt-br/s/fotografias/arraial-do-cabo?license=free')
    .then((response) => response.json())
    .then(setData);
  }, []);

  const images = [ image1, image2, image3, image4, image5 ];

  const buttonsContainer = useRef(null);

  const handleLeftClick = (event) => {
    event.preventDefault();
    buttonsContainer.current.scrollLeft -= buttonsContainer.current.offsetWidth;
  };
  
  const handleRightClick = (event) => {
    event.preventDefault();
    buttonsContainer.current.scrollLeft += buttonsContainer.current.offsetWidth;
  };

  if(!data || !data.length) return null;

  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
      {images.map((image)=> (
        <div className={styles.carouselImage} key={image}>
          <img src={image} alt="Imagens Praia" />
        </div>
      ))}
        {/* <img className={styles.image} src={praiaCapa} alt="Praia de Arraial do Cabo" /> */}
      </div> 
      <div className={styles.info}>
        <span className={styles.spanInfo}>
          Foto Aérea da Praia de arraial do Cabo
        </span>
      </div>
      <div className={styles.buttonsContainer} ref={buttonsContainer}>
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

