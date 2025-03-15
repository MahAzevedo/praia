import React from 'react';
import styles from './Slider.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';

const Slider = () => {
    const data = [
        {id: '1', image: './arraial3.jpg?react'},
        {id: '2', image: ''},
        {id: '3', image: ''},
        {id: '4', image: ''},
    ];
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Slider com React JS</h1>

      <Swiper>
        {data.map( (item) => (
            <SwiperSlide key={item.id}>
                <img 
                    src={item.image} 
                    alt="Slider"
                    className={styles.slideItem} 
                />
                <img src="" alt="" />
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider
