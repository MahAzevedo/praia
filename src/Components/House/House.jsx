import React from 'react';
import styles from './House.module.css';

const House = () => {
  return (
    <section className={styles.containerHouse}>
      <h1 className={styles.houseH1}> - Casa - Fotos & Vídeos - </h1>
      <ul className={styles.houseSlider}>
        <li>Aqui entra um COMPONENTE DE SLIDER carrossel</li>
      </ul>
    </section>
  );
};

export default House;

{/* <div id="carouselControls" className={'carousel slide'} data-bs-ride="carousel">
      <div className={'carousel-inner'}>
        <div className={'carousel-item active'}>
          <img src="./Assets/arraial3.jpg" className="d-block w-100" alt="Imagem de Arraial..." />
        </div>
        <div className={'carousel-item'}>
          <img src="..." className={'d-block w-100'} alt="..." />
        </div>
        <div className={'carousel-item'}>
          <img src="..." className={'d-block w-100'} alt="..." />
        </div>
      </div>
      <button className={'carousel-control-prev'} type="button" data-bs-target="#carouselControls" data-bs-slide="prev">
        <span className={'carousel-control-prev-icon'} aria-hidden="true"></span>
        <span className={'visually-hidden'}>
          Previous
        </span>
      </button>
      <button className={'carousel-control-next'} type="button" data-bs-target="#carouselControls" data-bs-slide="next">
        <span className={'carousel-control-next-icon'} aria-hidden="true"></span>
        <span className={'visually-hidden'}>
          Next
        </span>
      </button>
    </div> */}
