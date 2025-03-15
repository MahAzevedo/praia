import React from 'react';
import styles from './Carousel.module.css';
import useEmblaCarousel from 'embla-carousel-react';
import PraiaGrande from '../Assets/praia-grande.webp?react';

    function EmblaCarousel() {
    const [emblaRef] = useEmblaCarousel() => {
  return (
    <div className="embla" ref={emblaRef}>
        <div className="embla__container">
            <div className="embla__slide">Slide 1</div>
            <div className="embla__slide">Slide 2</div>
        </div>
    </div>
  );
};
};
export default Carousel;
{/* <img className={styles.photoPraia} src={PraiaGrande} alt="Foto de Praia Grande"/> */}