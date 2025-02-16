import React from 'react';
import styles from './Home.module.css';
import PhotoCapa from '../Assets/fotoCapaThayanaAlvarenga.jpg?react';

const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.photo}>
        {/* vídeo praia de arraial entra aqui */}
        {/* <FotoCapa /> */}
        <img className={styles.photoCapa} src={PhotoCapa} alt="Foto de Arraial de Cabo" />
        <p>Praia de Araial do Cabo</p>
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



