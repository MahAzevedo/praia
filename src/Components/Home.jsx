import React from 'react';
import styles from './Home.module.css';
import Banner from './Banner';
import House from './House/House';

const Home = () => {
  return (
    <section className={styles.home}>
      <Banner />
      <div className={styles.feedPhotos}>
      </div>
      <House />
    </section>
  );
};

export default Home;





