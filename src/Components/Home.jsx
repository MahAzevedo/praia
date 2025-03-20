import React from 'react';
import styles from './Home.module.css';
// import Banner from './Banner';
import House from './House/House';
import About from './About/About';
import Tourism from './Tourism/Tourism';
// import Slick from './Slick/Slick';
// import Slider from './Slider/Slider';
// import Carousel from './Carousel/Carousel';

const Home = () => {
  return (
    <section className={styles.home}>
      {/* <Banner /> */}
      {/* <Slider /> */}
      {/* <Carousel /> */}
      {/* <Slick />  */}
      <House />
      <About />
      <Tourism />
    </section>
  );
};

export default Home;





