import React from 'react';
import styles from './Slider.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';

const Slider = () => {
    const data = [
        {id: '1', image: ''},
        {id: '2', image: ''},
        {id: '3', image: ''},
        {id: '4', image: ''},
    ];
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Slider com React JS</h1>

      <Swiper>
        <SwiperSlide>

        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider
