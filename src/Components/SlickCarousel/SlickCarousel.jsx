import React from 'react';
import styles from './SlickCarousel.module.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlickCarousel = () => {
    const settings = {
      dots: true, // Enable dots navigation
      infinite: true, // Loop through the carousel
      speed: 500, // Transition speed
      slidesToShow: 1, // Number of slides visible at a time
      slidesToScroll: 1, // Number of slides to scroll per swipe
    };
  
    return (
      <div className="carousel-container">
        <Slider {...settings}>
          <div>
            <img src="https://via.placeholder.com/600x300?text=Slide+1" alt="Slide 1" />
          </div>
          <div>
            <img src="https://via.placeholder.com/600x300?text=Slide+2" alt="Slide 2" />
          </div>
          <div>
            <img src="https://via.placeholder.com/600x300?text=Slide+3" alt="Slide 3" />
          </div>
        </Slider>
      </div>
    );
  };
  
  export default SlickCarousel;
