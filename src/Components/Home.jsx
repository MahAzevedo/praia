import React from 'react';
import styles from './Home.module.css';
import PhotoCapa from '../Assets/fotoCapaThayanaAlvarenga.jpg?react';

// import Banner from './Banner';

const Home = () => {
  return (
    <section className={styles.home}>
      <div>
        {/* <Banner /> */}
        {/* vídeo infinito da praia de arraial aqui */}
        <img className={styles.photoCapa} src={PhotoCapa} alt="Foto de Arraial de Cabo" />
      </div>
      <div className={styles.feedPhotos}>
        <h1>Praia de Arraial do Cabo</h1>
        <p>Arraial do Cabo é um município brasileiro situado na Região dos Lagos do estado do Rio de Janeiro. Trata-se de uma cidade costeira, possuindo uma altitude média de apenas oito metros. <br/> Fonte: Wikipédia</p>
      </div>
    </section>
  );
};

export default Home;

// Single page:
// Tudo no NavLink;
// Vídeo da praia no corpo do site;
// Opções do que fazer, onde comer, passeios de bugre e parcerias;
// mapa de como chegar na casa e da cidade; 
// depoimento de clientes em carrossel;
// contato para hospedagem;
// rede social da hospedagem;
// contato do site;



