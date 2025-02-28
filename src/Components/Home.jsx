import React from 'react';
import styles from './Home.module.css';
import Banner from './Banner';
import House from './House/House';
import About from './About/About';

const Home = () => {
  return (
    <section className={styles.home}>
      <Banner />
      <div className={styles.feedPhotos}>
      </div>
      <House />
      <About />
    </section>
  );
};

export default Home;





