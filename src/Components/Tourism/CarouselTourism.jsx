import React from 'react';
import styles from './CarouselTourism.module.css';

const CarouselTourism = () => {
  return (
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="img1..."/>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="img2..."/>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="img3..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  );
};

export default CarouselTourism;

{/* <div id="carouselIndicators" className={styles.carouselSlide} data-bs-ride="carousel">
        <div className={styles.carouselIndicators}>
            <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" className='active' aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className={styles.carouselInner}>
            <div className={styles.carouselItem styles.active}>
            <img src="..." className={'d-block w-100'} alt="Imagem aqui..." />
            </div>
            <div className={styles.carouselItem}>
            <img src="..." className={'d-block w-100'} alt="Outra imagem aqui..." />
            </div>
            <div className={styles.carouselItem}>
            <img src="..." className={'d-block w-100'} alt="Mais uma imagem aqui..." />
            </div>
        </div>
        <button className={'carousel-control-prev'} type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev">
            <span className={'carousel-control-prev-icon'} aria-hidden="true"></span>
            <span className={'visually-hidden'}>Previous</span>
        </button>
        <button className={'carousel-control-next'} type="button" data-bs-target="#carouselIndicators" data-bs-slide="next">
            <span className={'carousel-control-next-icon'} aria-hidden="true"></span>
            <span className={'visually-hidden'}>Next</span>
        </button>
    </div> */}
