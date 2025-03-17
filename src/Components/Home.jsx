import React from 'react';
import styles from './Home.module.css';
import Banner from './Banner';
import House from './House/House';
import About from './About/About';
import Tourism from './Tourism/Tourism';
import Slider from './Slider/Slider';

const Home = () => {
  return (
    <section className={styles.home}>
      <Banner />
      {/* <Slider /> */}
      <House />
      <About />
      <Tourism />
    </section>
  );
};

export default Home;





