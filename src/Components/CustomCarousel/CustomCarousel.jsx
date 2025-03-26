import React, { useState } from 'react';
import styles from './CustomCarousel.module.css';

const CustomCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://riopasseiosetrilhas.com/wp-content/uploads/2023/02/ARRAIAL-8-600x500.jpg",
    "https://www.viajali.com.br/wp-content/uploads/2022/05/arraial-do-cabo-04.png",
    "https://www.viajali.com.br/wp-content/uploads/2022/05/arraial-do-cabo-08.png",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide}>Prev</button>
      <div className="carousel-slide">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default CustomCarousel;