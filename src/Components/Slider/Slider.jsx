import React from 'react';
import styles from './Slider.module.css';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import PraiaGrande from 'C:/Users/Mad/Desktop/praia/src/Assets/praia-grande.webp?react';
import praiaCapa from 'C:/Users/Mad/Desktop/praia/src/Assets/praiaCapa.jpg?react';
import arraial3 from 'C:/Users/Mad/Desktop/praia/src/Assets/arraial3.jpg?react';
import arraial4 from 'C:/Users/Mad/Desktop/praia/src/Assets/arraial4.jpg?react';


const Slider = () => {
    const [slidePerView, setSlidePerView] = useState(2);
    const data = [
        {id: '1', image:'C:/Users/Mad/Desktop/praia/src/Assets/praia-grande.webp?react'},
        {id: '2', image: 'C:/Users/Mad/Desktop/praia/src/Assets/praiaCapa.jpg?react'},
        {id: '3', image: 'C:/Users/Mad/Desktop/praia/src/Assets/arraial3.jpg?react'},
        {id: '4', image: 'C:/Users/Mad/Desktop/praia/src/Assets/arraial4.jpg?react'},
    ];

    useEffect(() => {
        function handleResize() {
            if(window.innerWidth < 720) {
                setSlidePerView(1);
            }else{
                setSlidePerView(1);
            }
        }


        handleResize();

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }

    }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Slider com React JS</h1>

      <Swiper 
        slidesPerView={1} //slidePerView
        pagination={{ clicable: true }}
        navigation
      >
        {data.map( (item) => (
            <SwiperSlide key={item.id}>
                <img 
                    className={styles.image} 
                    src={PraiaGrande} 
                    alt="Foto de Praia Grande"
                />
                <img 
                    className={styles.image}
                    src={praiaCapa} 
                    alt="Praia capa"   
                />
                <img
                    className={styles.image} 
                    src={arraial3} 
                    alt="Praia de Arraial" 
                />
                <img
                    className={styles.image} 
                    src={arraial4} 
                    alt="Praia de arraial" 
                />
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
